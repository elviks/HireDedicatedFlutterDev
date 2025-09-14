# Coolify Deployment Troubleshooting

## Current Issue ❌

**Root Cause:** Coolify is ignoring our Docker configuration and still using Nixpacks, which fails with a corepack signature verification error.

**Error:** `Cannot find matching keyid` during pnpm installation

## Immediate Solution ✅

### Step 1: Force Docker Build in Coolify UI

**CRITICAL:** You must manually change the build pack in Coolify:

1. **Go to Coolify Dashboard** → Your Application
2. **Click "Settings"** or "Configuration"
3. **Find "Build Pack" or "Build Method"**
4. **Change from "Nixpacks" to "Docker"**
5. **Set these paths:**
   - **Dockerfile Path:** `Dockerfile`
   - **Docker Compose File:** `docker-compose.coolify.yml`
6. **Save changes**

### Step 2: Verify Environment Variables

Ensure these are set in Coolify's environment section:

```
WORDPRESS_DB_PASSWORD=your_secure_wordpress_password
MYSQL_ROOT_PASSWORD=your_secure_mysql_root_password
NEXT_PUBLIC_GA_ID=G-MHGSBBP95T
```

### Step 3: Redeploy

After changing to Docker build pack, trigger a new deployment.

## Alternative: Create .coolify File

If the UI method doesn't work, create this file in your repo root:

**File: `.coolify`**

```json
{
  "buildpack": "docker",
  "dockerfile": "Dockerfile",
  "compose": "docker-compose.coolify.yml"
}
```

## Why This Happens

- Coolify auto-detects `package.json` and defaults to Nixpacks
- Our `.coolify/config` file format might not be recognized
- The build pack selection in UI overrides auto-detection

## Expected Success Indicators

✅ Build logs show: `FROM node:18-alpine AS base`
✅ No mention of "Nixpacks" or "/nix/store" in logs  
✅ Docker multi-stage build completes successfully

## Next Steps After Successful Deployment

1. Verify GA4 tracking is working (check browser network tab)
2. Complete WordPress setup at `/cms/wp-admin`
3. Configure GA4 settings as documented in README.md
