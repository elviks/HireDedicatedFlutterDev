# 🚀 Complete Coolify Deployment Guide

This guide will walk you through deploying your Next.js + WordPress project on Coolify step-by-step.

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ Coolify server installed and running
- ✅ Domain name (e.g., `hirededicatedflutterdeveloper.com`) with DNS pointing to your server
- ✅ Git repository with your project code
- ✅ Basic understanding of Docker and environment variables

## 🛠️ Part 1: Server Preparation

### Step 1: Access Your Coolify Dashboard
1. Open your browser and go to your Coolify installation (usually `https://your-server-ip:8000`)
2. Log in with your Coolify credentials

### Step 2: Create Traefik Network
SSH into your server and run:
```bash
# Create the external network that Traefik will use
docker network create traefik-network

# Verify the network was created
docker network ls | grep traefik
```

### Step 3: Verify Traefik Configuration
Ensure Traefik is running and configured for SSL:
```bash
# Check if Traefik is running
docker ps | grep traefik

# Check Traefik logs if needed
docker logs traefik
```

## 🔧 Part 2: Project Setup in Coolify

### Step 1: Create New Project
1. In Coolify dashboard, click **"+ New"** → **"Project"**
2. Give your project a name: `HireFlutterDev`
3. Add description: `Next.js + WordPress integration`
4. Click **"Create Project"**

### Step 2: Add New Resource
1. Inside your project, click **"+ New Resource"**
2. Select **"Application"**
3. Choose deployment method:
   - **Git Repository** (recommended)
   - **Docker Compose**
   - **Dockerfile**

### Step 3: Configure Git Repository
1. **Repository URL**: Enter your Git repository URL
   ```
   https://github.com/yourusername/HireDedicatedFlutterDev.git
   ```
2. **Branch**: `main` (or your default branch)
3. **Deploy Key**: Generate and add to your Git repository if private
4. Click **"Continue"**

### Step 4: Application Configuration
1. **Application Name**: `hire-flutter-dev`
2. **Build Pack**: Select **"Docker Compose"**
3. **Docker Compose Location**: `docker-compose.yml` (root directory)
4. **Port**: `3000` (for Next.js)
5. Click **"Continue"**

## 🌐 Part 3: Domain and Network Configuration

### Step 1: Configure Domain
1. In **"Domains"** section, add:
   ```
   hirededicatedflutterdeveloper.com
   ```
2. Enable **"Generate SSL Certificate"** (Let's Encrypt)
3. Enable **"Force HTTPS Redirect"**
4. Click **"Save"**

### Step 2: Network Configuration
1. In **"Network"** section:
   - **Network**: Select or create `traefik-network`
   - **Connect to predefined network**: Enable
2. Click **"Save"**

## 🔐 Part 4: Environment Variables

### Step 1: Set Required Variables
In the **"Environment Variables"** section, add these **CRITICAL** variables:

```env
# Database Configuration (CHANGE THESE PASSWORDS!)
WORDPRESS_DB_PASSWORD=your_very_secure_password_2024
MYSQL_ROOT_PASSWORD=your_very_secure_root_password_2024

# WordPress URLs
WP_HOME=https://hirededicatedflutterdeveloper.com/cms
WP_SITEURL=https://hirededicatedflutterdeveloper.com/cms

# Optional: WordPress Security Keys (Highly Recommended)
WORDPRESS_AUTH_KEY=generate_random_key_here
WORDPRESS_SECURE_AUTH_KEY=generate_random_key_here
WORDPRESS_LOGGED_IN_KEY=generate_random_key_here
WORDPRESS_NONCE_KEY=generate_random_key_here
```

### Step 2: Generate WordPress Security Keys (Optional but Recommended)
1. Go to https://api.wordpress.org/secret-key/1.1/salt/
2. Copy the generated keys
3. Add them to your environment variables

## 🚀 Part 5: Deployment

### Step 1: Deploy Application
1. Click **"Deploy"** button
2. Monitor the deployment logs
3. Wait for all services to start (usually 3-5 minutes)

### Step 2: Monitor Deployment Progress
Watch the logs for these key indicators:
```bash
# Next.js build completion
✓ Next.js build completed successfully

# WordPress container started
wordpress-cms started

# MySQL initialization
MySQL init process done. Ready for start up.

# Traefik SSL certificate
Certificate obtained for hirededicatedflutterdeveloper.com
```

### Step 3: Verify Services
Check that all containers are running:
1. In Coolify dashboard, go to **"Logs"**
2. Verify these containers are running:
   - `nextjs-app` (Next.js application)
   - `wordpress-cms` (WordPress)
   - `mysql-db` (Database)

## 🔧 Part 6: Post-Deployment Setup

### Step 1: Access Your Site
1. **Main Website**: https://hirededicatedflutterdeveloper.com
   - Should show your Next.js application
2. **WordPress**: https://hirededicatedflutterdeveloper.com/cms
   - Should show WordPress installation page

### Step 2: Complete WordPress Installation
1. Navigate to: `https://hirededicatedflutterdeveloper.com/cms/wp-admin/install.php`
2. Fill in the WordPress installation form:
   - **Site Title**: Your site name
   - **Username**: Admin username
   - **Password**: Strong admin password
   - **Email**: Your email address
3. Click **"Install WordPress"**

### Step 3: Configure WordPress Settings
1. Log into WordPress admin: `https://hirededicatedflutterdeveloper.com/cms/wp-admin`
2. Go to **Settings** → **Permalinks**
3. Select **"Post name"** structure
4. Click **"Save Changes"**

### Step 4: Verify Integration
Test these URLs:
- ✅ `https://hirededicatedflutterdeveloper.com` → Next.js app
- ✅ `https://hirededicatedflutterdeveloper.com/cms` → WordPress home
- ✅ `https://hirededicatedflutterdeveloper.com/cms/wp-admin` → WordPress admin
- ✅ SSL certificate shows as valid

## 🔍 Part 7: Troubleshooting

### Common Issues and Solutions

#### 1. SSL Certificate Not Generated
**Problem**: Site shows "Not Secure" or certificate errors

**Solutions**:
```bash
# Check domain DNS
nslookup hirededicatedflutterdeveloper.com

# Check Traefik logs
docker logs traefik | grep -i certificate

# Verify domain points to correct IP
dig hirededicatedflutterdeveloper.com
```

**Fix**:
- Ensure DNS A record points to your server IP
- Wait up to 10 minutes for certificate generation
- Check Traefik configuration in Coolify

#### 2. WordPress Shows 404 Errors
**Problem**: WordPress pages return 404 errors

**Solutions**:
1. Complete WordPress installation first
2. Update permalinks in WordPress admin
3. Check WordPress logs:
   ```bash
   # In Coolify dashboard, check WordPress container logs
   docker logs wordpress-cms
   ```

#### 3. Database Connection Errors
**Problem**: WordPress shows "Error establishing database connection"

**Solutions**:
```bash
# Check MySQL container status
docker ps | grep mysql

# Check MySQL logs
docker logs mysql-db

# Verify environment variables are set correctly in Coolify
```

**Fix**:
- Verify `WORDPRESS_DB_PASSWORD` matches `MYSQL_PASSWORD`
- Wait for MySQL initialization (2-3 minutes on first start)
- Restart MySQL container if needed

#### 4. Next.js Build Failures
**Problem**: Next.js build fails during deployment

**Solutions**:
```bash
# Check build logs in Coolify dashboard
# Common issues:
# - Missing dependencies
# - TypeScript errors
# - Memory issues
```

**Fix**:
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility
- Increase container memory if needed

#### 5. Traefik Routing Issues
**Problem**: Services not accessible or wrong routing

**Solutions**:
1. Check Traefik dashboard (if enabled)
2. Verify network configuration:
   ```bash
   # Check if containers are on traefik-network
   docker network inspect traefik-network
   ```

**Fix**:
- Ensure `traefik-network` exists and is external
- Verify Traefik labels in docker-compose.yml
- Restart Traefik if needed

### Debug Commands

```bash
# Check all running containers
docker ps

# Check specific container logs
docker logs nextjs-app
docker logs wordpress-cms
docker logs mysql-db

# Check networks
docker network ls

# Check Traefik configuration
docker logs traefik

# Test database connection
docker exec -it mysql-db mysql -u wordpress -p wordpress
```

## 📊 Part 8: Monitoring and Maintenance

### Regular Monitoring
1. **Check Coolify dashboard** regularly for:
   - Container health status
   - Resource usage
   - Deployment logs

2. **Monitor SSL certificates**:
   - Auto-renewal should happen automatically
   - Check certificate expiry dates

3. **Database backups**:
   - Set up regular MySQL backups
   - Test backup restoration process

### Performance Optimization
1. **Enable caching** in WordPress
2. **Optimize images** for web
3. **Monitor resource usage** in Coolify
4. **Scale containers** if needed

### Security Best Practices
1. **Keep WordPress updated**
2. **Use strong passwords**
3. **Install security plugins**
4. **Regular security scans**
5. **Monitor access logs**

## 📚 Additional Resources

- **Coolify Documentation**: https://coolify.io/docs
- **Traefik Documentation**: https://doc.traefik.io/traefik/
- **WordPress Docker**: https://hub.docker.com/_/wordpress
- **Next.js Deployment**: https://nextjs.org/docs/deployment

## 🎉 Success Checklist

After successful deployment, you should have:
- ✅ Next.js app running at root domain with SSL
- ✅ WordPress running at `/cms` with SSL
- ✅ WordPress admin accessible
- ✅ Database connected and working
- ✅ HTTP to HTTPS redirects working
- ✅ All containers healthy in Coolify dashboard

---

**🚀 Congratulations!** Your Next.js + WordPress site is now live on Coolify with automatic SSL, proper routing, and production-ready configuration!
