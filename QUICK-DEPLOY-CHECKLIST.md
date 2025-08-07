# ⚡ Quick Deployment Checklist

## 🚀 Before You Start (5 minutes)

- [ ] **Server Ready**: Coolify installed and accessible
- [ ] **Domain DNS**: Points to your server IP
- [ ] **Network**: Run `docker network create traefik-network`
- [ ] **Git Repo**: Code pushed to repository

## 📝 Environment Variables (CRITICAL)

Copy these into Coolify's Environment Variables section:

```env
WORDPRESS_DB_PASSWORD=your_secure_password_2024
MYSQL_ROOT_PASSWORD=your_root_password_2024
WP_HOME=https://hirededicatedflutterdeveloper.com/cms
WP_SITEURL=https://hirededicatedflutterdeveloper.com/cms
```

## 🔧 Coolify Configuration

### 1. Create Project
- Project Name: `HireFlutterDev`
- Resource Type: **Application**
- Source: **Git Repository**

### 2. Repository Settings
- URL: `your-git-repo-url`
- Branch: `main`
- Build Pack: **Docker Compose**
- Docker Compose: `docker-compose.yml`

### 3. Domain Configuration
- Domain: `hirededicatedflutterdeveloper.com`
- SSL: ✅ **Enabled** (Let's Encrypt)
- HTTPS Redirect: ✅ **Enabled**

### 4. Network
- Network: `traefik-network`
- Connect to predefined network: ✅ **Enabled**

## 🚀 Deploy & Verify

### Deploy
- [ ] Click **"Deploy"** in Coolify
- [ ] Monitor logs for successful build
- [ ] Wait 3-5 minutes for all services

### Test URLs
- [ ] `https://hirededicatedflutterdeveloper.com` → Next.js ✅
- [ ] `https://hirededicatedflutterdeveloper.com/cms` → WordPress ✅
- [ ] SSL certificate shows valid ✅

### WordPress Setup
- [ ] Go to `/cms/wp-admin/install.php`
- [ ] Complete installation wizard
- [ ] Set permalinks to "Post name"
- [ ] Test admin access

## ⚠️ If Something Goes Wrong

### Quick Fixes
```bash
# Check containers
docker ps

# Check logs
docker logs nextjs-app
docker logs wordpress-cms
docker logs mysql-db

# Restart if needed (in Coolify dashboard)
```

### Common Issues
- **SSL not working**: Wait 10 minutes, check DNS
- **WordPress 404s**: Complete WP installation first
- **DB connection error**: Check environment variables
- **Build fails**: Check Coolify build logs

## 🎯 Success = All Green!

- ✅ Main site loads with SSL
- ✅ WordPress loads at `/cms` with SSL  
- ✅ WordPress admin accessible
- ✅ All containers running in Coolify
- ✅ No errors in logs

---

**Total Time**: ~15-20 minutes including WordPress setup

**Next Steps**: Configure WordPress, add content, set up backups!
