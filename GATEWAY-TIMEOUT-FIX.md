# Gateway Timeout Issue - Troubleshooting Guide

## Issues Found & Fixed

### 1. **Traefik EntryPoint Mismatch** ❌
**Problem**: Your docker-compose was using `web` and `websecure` entry points, but Coolify's Traefik uses `http` and `https`.

**Error in logs**:
```
EntryPoint doesn't exist entryPointName=websecure routerName=nextjs@docker
No valid entryPoint for this router routerName=nextjs@docker
```

**Solution**: Updated `docker-compose.coolify.yml` to use correct entry points.

### 2. **Apache ServerName Warning** ⚠️
**Problem**: WordPress container showing Apache warnings affecting performance.

**Error in logs**:
```
AH00558: apache2: Could not reliably determine the server's fully qualified domain name
```

**Solution**: Added `apache-servername.conf` with proper ServerName directive.

### 3. **Network Configuration** ❌
**Problem**: Using `traefik-network` and `internal` networks, but Coolify uses `coolify` network.

**Solution**: Updated to use `coolify` network consistently.

## Deployment Steps

### Step 1: Update Configuration Files
```bash
# Use the corrected docker-compose.coolify.yml file
# It includes proper Traefik labels for Coolify
```

### Step 2: Deploy on VPS
```bash
ssh root@167.88.39.114
cd /path/to/your/project

# Stop existing containers
docker-compose down

# Deploy with corrected config
docker-compose -f docker-compose.coolify.yml up -d --build
```

### Step 3: Verify Deployment
```bash
# Check container status
docker ps

# Check Traefik logs
docker logs coolify-proxy --tail=20

# Check application logs
docker logs nextjs-flutter-hire --tail=10
docker logs wordpress-flutter-hire --tail=10
```

## Key Fixes Applied

### Docker Compose Labels (Before vs After)

**Before** ❌:
```yaml
- "traefik.http.routers.nextjs.entrypoints=https"  # Wrong entry point
- "traefik.docker.network=traefik-network"         # Wrong network
```

**After** ✅:
```yaml
- "traefik.http.routers.nextjs-https.entrypoints=https"  # Correct entry point
- "traefik.docker.network=coolify"                       # Correct network
```

### Network Configuration

**Before** ❌:
```yaml
networks:
  traefik-network:
    external: true
  internal:
    driver: bridge
```

**After** ✅:
```yaml
networks:
  coolify:
    external: true
```

### Health Check Added
Added health check to Next.js container and created `/api/health` endpoint for monitoring.

## Testing

### 1. Test Next.js Application
```bash
curl -I https://hirededicatedflutterdeveloper.com
# Should return 200 OK
```

### 2. Test WordPress
```bash
curl -I https://hirededicatedflutterdeveloper.com/cms
# Should return 200 OK or redirect
```

### 3. Test Health Endpoint
```bash
curl https://hirededicatedflutterdeveloper.com/api/health
# Should return: {"status":"ok","timestamp":"...","service":"hire-dedicated-flutter-developer"}
```

## Common Issues & Solutions

### If Gateway Timeout Persists:

1. **Check Traefik Routes**:
```bash
docker exec coolify-proxy traefik api rawdata | grep -A 10 -B 10 "hirededicatedflutterdeveloper"
```

2. **Check Container Health**:
```bash
docker exec nextjs-flutter-hire curl -f http://localhost:3010/api/health || echo "Health check failed"
```

3. **Check Network Connectivity**:
```bash
docker exec coolify-proxy nslookup nextjs-flutter-hire
```

### If SSL/TLS Issues:

1. **Check Certificate Status**:
```bash
docker logs coolify-proxy | grep -i "hirededicatedflutterdeveloper.com"
```

2. **Verify DNS**:
```bash
nslookup hirededicatedflutterdeveloper.com
```

## Monitoring Commands

```bash
# Watch logs in real-time
docker-compose -f docker-compose.coolify.yml logs -f

# Check resource usage
docker stats

# Check Traefik dashboard (if enabled)
# Visit: http://167.88.39.114:8080
```

The main issue was the **Traefik entry point mismatch**. Coolify's Traefik uses `http`/`https` entry points, not `web`/`websecure` as used in standalone Traefik setups.
