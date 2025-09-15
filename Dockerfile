# # Multi-stage build for Next.js application
# FROM node:18-alpine AS base

# # Make pnpm available in all subsequent layers
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable && \
#     corepack prepare pnpm@9.1.4 --activate

# # Install dependencies only when needed
# FROM base AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # Install dependencies based on the preferred package manager
# COPY package.json pnpm-lock.yaml* ./
# RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store pnpm install --frozen-lockfile

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Build the application
# RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store pnpm run build

# # Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV=production

# RUN addgroup --system --gid 1001 nodejs && \
#     adduser --system --uid 1001 nextjs

# COPY --from=builder /app/public ./public

# # Set the correct permission for prerender cache
# RUN mkdir .next && \
#     chown nextjs:nodejs .next

# # Automatically leverage output traces to reduce image size
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3008

# ENV PORT=3008
# ENV HOSTNAME="0.0.0.0"

# CMD ["node", "server.js"]



# Multi-stage build for Next.js application
FROM node:20-alpine AS base

# Make pnpm available in all subsequent layers (pin it!)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Corepack sometimes respects a different registry; force npmjs for the prepare step.
ENV COREPACK_NPM_REGISTRY=https://registry.npmjs.org

# Install needed OS deps once in base (useful for sharp/next)
RUN apk add --no-cache libc6-compat

# Enable corepack and pin a modern pnpm (match your lockfile; 9.x is typical)
RUN corepack enable \
 && corepack prepare pnpm@9.12.0 --activate \
 && pnpm --version

# ------------------------ deps ------------------------
FROM base AS deps
WORKDIR /app

# Only copy manifest/lock for better caching
COPY package.json pnpm-lock.yaml* ./

# Use a persistent pnpm store cache
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ----------------------- builder ----------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm run build

# ----------------------- runner -----------------------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3008
ENV HOSTNAME=0.0.0.0
# Optional: silence telemetry in containers
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Static assets
COPY --from=builder /app/public ./public

# Set correct permission for prerender cache
RUN mkdir -p .next && chown nextjs:nodejs .next

# Copy the standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3008

# In Next.js standalone, server.js is at project root after the copy above
CMD ["node", "server.js"]
