# Coolify Deployment Guide for HireDedicatedFlutterDev

## WordPress on /cms Path - Solution

### Updated Configuration

The setup now supports WordPress on `/cms` path with these changes:

1. **✅ Docker Compose Updated**: WordPress configured for /cms path
2. **✅ Next.js Rewrites**: Added to proxy /cms requests to WordPress
3. **✅ WordPress Environment**: Proper WP_HOME and WP_SITEURL configuration
4. **✅ .htaccess**: Custom rewrite rules for /cms path

### Coolify Configuration Steps

#### 1. Application Settings (in Coolify Dashboard):

**Main Application (Next.js)**:
- **Domain**: `hirededicatedflutterdeveloper.com`
- **Port**: `3010`
- **Service**: `nextjs`
- **Docker Compose Location**: `docker-compose.coolify.yml`

#### 2. Path-Based Routing Configuration

**Option A: Use Next.js Rewrites (Recommended)**
The current setup uses Next.js rewrites to proxy `/cms` requests to the WordPress container. This should work automatically.

**Option B: Coolify Path Configuration**
If Option A doesn't work, configure in Coolify:

1. Go to your application → **"Domains"**
2. Add path-based routing:
   - **Path**: `/cms/*`
   - **Service**: `wordpress`
   - **Port**: `80`

#### 3. Environment Variables:
```bash
WORDPRESS_DB_PASSWORD=your_secure_password
MYSQL_ROOT_PASSWORD=your_root_password
```

### 4. Expected URLs After Deployment:

- **Main Next.js App**: `https://hirededicatedflutterdeveloper.com`
- **WordPress Admin**: `https://hirededicatedflutterdeveloper.com/cms/wp-admin`
- **WordPress Site**: `https://hirededicatedflutterdeveloper.com/cms`
- **Health Check**: `https://hirededicatedflutterdeveloper.com/api/health`

### 5. Deployment Steps

1. **Push updated code** to GitHub
2. **In Coolify Dashboard**:
   - Go to your application
   - Click **"Deploy"** or **"Redeploy"**
   - Monitor deployment logs

### 6. Post-Deployment WordPress Setup

After deployment, visit: `https://hirededicatedflutterdeveloper.com/cms/wp-admin/install.php`

**WordPress Installation Settings**:
- **Site URL**: `https://hirededicatedflutterdeveloper.com/cms`
- **WordPress Address**: `https://hirededicatedflutterdeveloper.com/cms`

### 7. Troubleshooting

**If WordPress shows 404 errors**:
1. Check if WordPress container is running
2. Verify environment variables are set correctly
3. Check if .htaccess file is properly mounted

**If /cms path doesn't work**:
1. Check Next.js rewrites in `next.config.mjs`
2. Verify WordPress WP_HOME and WP_SITEURL settings
3. Check Coolify path-based routing configuration

### 8. Testing Commands

```bash
# Test Next.js app
curl -I https://hirededicatedflutterdeveloper.com

# Test WordPress (should redirect or show WordPress)
curl -I https://hirededicatedflutterdeveloper.com/cms

# Test WordPress admin (should show login page)
curl -I https://hirededicatedflutterdeveloper.com/cms/wp-admin

# Test health endpoint
curl https://hirededicatedflutterdeveloper.com/api/health
```

### Architecture Overview

```
Domain: hirededicatedflutterdeveloper.com
│
├── / (Next.js App - Port 3010)
├── /api/* (Next.js API Routes)
├── /cms/* (WordPress - Port 80 via rewrite/proxy)
│   ├── /cms/wp-admin (WordPress Admin)
│   ├── /cms/wp-content (WordPress Content)
│   └── /cms/* (WordPress Pages/Posts)
└── /api/health (Health Check Endpoint)
```

## Current Status
- ✅ Next.js configured with WordPress rewrites
- ✅ WordPress configured for /cms path
- ✅ Docker Compose updated for Coolify
- ✅ Custom .htaccess for proper URL handling
- 🔄 Ready for deployment