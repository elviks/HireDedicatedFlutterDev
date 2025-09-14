# Coolify Deployment Troubleshooting

## Current Issue

The deployment is failing because Coolify is auto-detecting the project as Node.js and using Nixpacks, which is timing out during package installation.

## Solution

### Option 1: Force Docker Build (Recommended)

1. **Verify the `.coolify/config` file exists** (already created)
2. **In Coolify Dashboard:**
   - Go to your application settings
   - Under "Build Pack", select "Docker" instead of "Nixpacks"
   - Set "Dockerfile Path" to: `Dockerfile`
   - Set "Docker Compose Path" to: `docker-compose.coolify.yml`

### Option 2: Environment Variables

Make sure these environment variables are set in Coolify:

```
WORDPRESS_DB_PASSWORD=your_secure_wordpress_password
MYSQL_ROOT_PASSWORD=your_secure_mysql_root_password
NEXT_PUBLIC_GA_ID=G-MHGSBBP95T
```

### Option 3: Manual Override

If Coolify still uses Nixpacks, add this to your repository root:
Create file: `nixpacks.toml`

```toml
[variables]
NODE_ENV = "production"

[build]
cmd = "pnpm run build"

[start]
cmd = "pnpm start"
```

## Verification Steps

1. Check build logs for "Docker" instead of "Nixpacks"
2. Verify all environment variables are available
3. Test the GA4 integration after successful deployment

## Next Steps After Successful Deployment

1. Verify GA4 tracking is working (check browser network tab)
2. Complete WordPress setup at `/cms/wp-admin`
3. Configure GA4 settings as documented in README.md
