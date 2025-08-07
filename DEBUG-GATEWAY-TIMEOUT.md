# 🔍 Gateway Timeout Debugging Guide

## 📊 Check What's Running on Your Server

### 1. Check Port Usage
```bash
# SSH into your server and check what's using port 3000
sudo netstat -tulpn | grep :3000
# or
sudo lsof -i :3000

# Check all Docker containers
docker ps -a

# Check Docker networks
docker network ls
```

### 2. Check Container Status
```bash
# See if your containers are running
docker ps | grep nextjs
docker ps | grep wordpress
docker ps | grep mysql

# Check container logs
docker logs nextjs-app
docker logs wordpress-cms
docker logs mysql-db
```

### 3. Check Traefik Status
```bash
# Check if Traefik is running
docker ps | grep traefik

# Check Traefik logs for routing issues
docker logs traefik | grep -i error
docker logs traefik | grep hirededicatedflutterdeveloper
```

## 🚨 Common Issues & Solutions

### Issue 1: Port 3000 Conflict
**Symptoms**: Gateway timeout, containers fail to start
**Check**:
```bash
sudo netstat -tulpn | grep :3000
```
**Solution**: Stop the other service or change container names:
```bash
# Stop conflicting service
sudo systemctl stop your-other-service
# or kill the process
sudo kill -9 PID_NUMBER
```

### Issue 2: Traefik Network Missing
**Symptoms**: Containers start but no routing
**Check**:
```bash
docker network ls | grep traefik
```
**Solution**:
```bash
docker network create traefik-network
```

### Issue 3: SSL Certificate Issues
**Symptoms**: Gateway timeout, SSL errors
**Check**: Traefik logs for certificate generation
**Solution**: Wait 5-10 minutes for Let's Encrypt or check DNS

### Issue 4: Container Build Failures
**Symptoms**: Containers not starting
**Check**:
```bash
docker logs nextjs-app
```
**Solution**: Check build logs in Coolify dashboard

## 🔧 Alternative Port Configuration

If port conflicts persist, use this configuration:

```yaml
# In docker-compose.yml, change container name to avoid conflicts
services:
  nextjs:
    container_name: nextjs-app-flutter  # Changed name
    # ... rest of config
```

## 🎯 Quick Fix Commands

```bash
# Stop all containers for this project
docker-compose down

# Remove conflicting containers
docker rm -f nextjs-app wordpress-cms mysql-db

# Restart with new configuration
docker-compose up -d

# Follow logs
docker logs -f nextjs-app
```

## 📋 Step-by-Step Resolution

1. **Identify the conflict**:
   ```bash
   sudo netstat -tulpn | grep :3000
   docker ps -a
   ```

2. **Stop conflicting services**:
   ```bash
   # If it's a systemd service
   sudo systemctl stop service-name
   
   # If it's a Docker container
   docker stop container-name
   ```

3. **Clean up and restart**:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

4. **Verify it's working**:
   ```bash
   docker ps
   curl -I http://localhost:3000
   ```

## 🚀 Alternative: Use Different Container Names

If you want to run multiple projects simultaneously, update the container names:

```yaml
services:
  nextjs:
    container_name: nextjs-flutter-hire  # Unique name
  wordpress:
    container_name: wordpress-flutter-hire  # Unique name  
  mysql:
    container_name: mysql-flutter-hire  # Unique name
```

This way both projects can coexist without conflicts!
