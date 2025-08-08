# Direct VPS Deployment Guide

## Quick Manual Deployment

### Step 1: Connect to VPS and Setup
```bash
# Connect to VPS
ssh root@167.88.39.114

# Create project directory
mkdir -p /opt/hire-flutter-direct
cd /opt/hire-flutter-direct

# Clone your repository
git clone https://github.com/elviks/HireDedicatedFlutterDev.git .

# Stop any existing Coolify containers (optional)
docker stop $(docker ps -q --filter "name=jkkksw808o404o084kcs8404") 2>/dev/null || true
```

### Step 2: Create Environment File
```bash
# Create .env file
cat > .env << EOF
WORDPRESS_DB_PASSWORD=wp_secure_2024_password
MYSQL_ROOT_PASSWORD=root_secure_2024_password
EOF
```

### Step 3: Deploy with Docker Compose
```bash
# Deploy services
docker-compose -f docker-compose.direct.yml up -d --build

# Check status
docker-compose -f docker-compose.direct.yml ps

# Check logs if needed
docker-compose -f docker-compose.direct.yml logs -f
```

### Step 4: Test Deployment
```bash
# Test Next.js app
curl -I http://localhost/

# Test WordPress
curl -I http://localhost/cms

# Test health endpoint
curl http://localhost/api/health
```

## Expected Results

After deployment, you should have:

- **Next.js App**: `http://hirededicatedflutterdeveloper.com` (or `https://` with SSL)
- **WordPress**: `http://hirededicatedflutterdeveloper.com/cms`
- **WordPress Admin**: `http://hirededicatedflutterdeveloper.com/cms/wp-admin`

## Architecture

```
Internet → Nginx (Port 80/443)
    ├── / → Next.js App (Port 3010)
    ├── /cms → WordPress (Port 80)
    ├── /api/* → Next.js API Routes
    └── /wp-* → WordPress Assets
```

## SSL Setup (Optional)

If you want HTTPS:

```bash
# Run the automated deployment script
chmod +x deploy-direct.sh
./deploy-direct.sh
```

Or manually:

```bash
# Get SSL certificate
docker-compose -f docker-compose.direct.yml run --rm certbot \
  certonly --webroot --webroot-path=/var/www/certbot \
  --email your-email@example.com --agree-tos --no-eff-email \
  -d hirededicatedflutterdeveloper.com

# Restart nginx to load SSL
docker-compose -f docker-compose.direct.yml restart nginx
```

## Troubleshooting

### If site doesn't load:
```bash
# Check nginx logs
docker logs nginx-proxy

# Check Next.js logs
docker logs nextjs-app

# Check if ports are accessible
curl -I http://localhost/
```

### If WordPress /cms gives errors:
```bash
# Check WordPress logs
docker logs wordpress-app

# Test direct WordPress access
docker exec nginx-proxy curl -I http://wordpress-app:80
```

### If containers won't start:
```bash
# Check what's using port 80
netstat -tlnp | grep :80

# Stop Coolify proxy if it's conflicting
docker stop coolify-proxy

# Or use different ports
# Edit docker-compose.direct.yml and change nginx ports to "8080:80" and "8443:443"
```

## Directory Structure

```
/opt/hire-flutter-direct/
├── docker-compose.direct.yml
├── nginx/
│   ├── nginx.conf
│   └── default.conf
├── wordpress/
│   └── htaccess-cms.conf
├── ssl/              (created during SSL setup)
└── .env
```

This setup gives you full control over the deployment without Coolify's routing issues!
