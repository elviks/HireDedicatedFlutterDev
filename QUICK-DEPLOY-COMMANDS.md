# Quick Deploy Commands for VPS

## Step 1: Connect to VPS
```bash
ssh root@167.88.39.114
# Password: Batmanishero977#
```

## Step 2: Run Auto Setup Script
```bash
# Download and run the setup script directly from GitHub
curl -fsSL https://raw.githubusercontent.com/elviks/HireDedicatedFlutterDev/main/setup-vps.sh -o setup-vps.sh
chmod +x setup-vps.sh
./setup-vps.sh
```

## Step 3: Access Coolify Dashboard
After setup completes, access:
```
http://167.88.39.114:8000
```

## Step 4: Create Project in Coolify

1. **Login to Coolify Dashboard**
2. **Create New Project**:
   - Name: `hirededicatedflutterdeveloper`
   - Description: `Next.js + WordPress site`

3. **Add Application**:
   - **Type**: Docker Compose
   - **Repository**: `https://github.com/elviks/HireDedicatedFlutterDev.git`
   - **Branch**: `main`
   - **Docker Compose Path**: `docker-compose.coolify.yml`

4. **Configure Domain**:
   - **Primary Domain**: `hirededicatedflutterdeveloper.com`
   - **Enable HTTPS**: Yes
   - **Auto SSL**: Yes

5. **Environment Variables** (will be auto-generated):
   - `WORDPRESS_DB_PASSWORD`: (secure password)
   - `MYSQL_ROOT_PASSWORD`: (secure password)

## Step 5: Deploy
1. Click **Deploy** in Coolify
2. Monitor deployment logs
3. Wait for deployment to complete

## Step 6: Verify Deployment
```bash
# Test main site
curl -I https://hirededicatedflutterdeveloper.com

# Test WordPress
curl -I https://hirededicatedflutterdeveloper.com/cms

# Test health endpoint
curl https://hirededicatedflutterdeveloper.com/api/health
```

## Expected URLs After Deployment:
- **Main Site**: https://hirededicatedflutterdeveloper.com
- **WordPress Admin**: https://hirededicatedflutterdeveloper.com/cms/wp-admin
- **WordPress Install**: https://hirededicatedflutterdeveloper.com/cms/wp-admin/install.php
- **Health Check**: https://hirededicatedflutterdeveloper.com/api/health

## Troubleshooting Commands:
```bash
# Check running containers
docker ps

# Check logs
docker-compose -f /opt/hirededicatedflutterdeveloper/docker-compose.coolify.yml logs

# Restart services
docker-compose -f /opt/hirededicatedflutterdeveloper/docker-compose.coolify.yml restart

# Check Coolify logs
docker logs coolify

# Check firewall
ufw status
```

## Post-Deployment WordPress Setup:
1. Visit: https://hirededicatedflutterdeveloper.com/cms/wp-admin/install.php
2. Complete WordPress installation
3. Set admin credentials
4. Configure site settings

🎉 **Your site should be live at https://hirededicatedflutterdeveloper.com**
