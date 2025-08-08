#!/bin/bash

echo "🚀 Direct VPS Deployment for HireDedicatedFlutterDev"

# Configuration
DOMAIN="hirededicatedflutterdeveloper.com"
EMAIL="your-email@example.com"  # Replace with your email
PROJECT_DIR="/opt/hire-flutter-direct"
REPO_URL="https://github.com/elviks/HireDedicatedFlutterDev.git"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🔧 Setting up deployment directory...${NC}"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Stop and remove existing containers if any
echo -e "${YELLOW}🛑 Stopping existing containers...${NC}"
docker-compose -f docker-compose.direct.yml down 2>/dev/null || true

# Clone or pull latest code
if [ -d ".git" ]; then
    echo -e "${GREEN}📥 Pulling latest code...${NC}"
    git pull origin main
else
    echo -e "${GREEN}📥 Cloning repository...${NC}"
    git clone $REPO_URL .
fi

# Create necessary directories
echo -e "${GREEN}📁 Creating directories...${NC}"
mkdir -p ssl/www
mkdir -p ssl/live/$DOMAIN

# Create environment file
echo -e "${GREEN}⚙️ Creating environment file...${NC}"
cat > .env << EOF
WORDPRESS_DB_PASSWORD=wp_secure_$(date +%s)_password
MYSQL_ROOT_PASSWORD=root_secure_$(date +%s)_password
EOF

# Update email in certbot command (if needed)
if [ "$EMAIL" != "your-email@example.com" ]; then
    sed -i "s/your-email@example.com/$EMAIL/g" docker-compose.direct.yml
fi

# Step 1: Start without SSL first (HTTP only)
echo -e "${YELLOW}🌐 Starting services without SSL first...${NC}"

# Temporarily modify nginx config for HTTP only
cp nginx/default.conf nginx/default.conf.backup
cat > nginx/default.conf << 'HTTPCONF'
upstream nextjs_backend {
    server nextjs-app:3010;
}

upstream wordpress_backend {
    server wordpress-app:80;
}

server {
    listen 80;
    server_name hirededicatedflutterdeveloper.com;

    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # WordPress /cms location
    location /cms {
        proxy_pass http://wordpress_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        rewrite ^/cms(.*) $1 break;
    }

    # WordPress assets
    location ~ ^/(wp-content|wp-admin|wp-includes)/ {
        proxy_pass http://wordpress_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Next.js application
    location / {
        proxy_pass http://nextjs_backend;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
HTTPCONF

# Start services
echo -e "${GREEN}🐳 Building and starting containers...${NC}"
docker-compose -f docker-compose.direct.yml up -d --build nginx nextjs wordpress mysql

# Wait for services to be ready
echo -e "${YELLOW}⏳ Waiting for services to start...${NC}"
sleep 30

# Check if services are running
echo -e "${GREEN}📊 Checking service status...${NC}"
docker-compose -f docker-compose.direct.yml ps

# Test HTTP access
echo -e "${YELLOW}🧪 Testing HTTP access...${NC}"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/ || echo "000")
if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ HTTP access working!${NC}"
else
    echo -e "${RED}❌ HTTP access failed (Status: $HTTP_STATUS)${NC}"
    echo -e "${YELLOW}📋 Checking logs...${NC}"
    docker-compose -f docker-compose.direct.yml logs --tail=10 nginx
    docker-compose -f docker-compose.direct.yml logs --tail=10 nextjs
fi

# Step 2: Get SSL certificate
echo -e "${GREEN}🔒 Obtaining SSL certificate...${NC}"
docker-compose -f docker-compose.direct.yml run --rm certbot certonly --webroot --webroot-path=/var/www/certbot --email $EMAIL --agree-tos --no-eff-email -d $DOMAIN

# Check if SSL certificate was obtained
if [ -f "ssl/live/$DOMAIN/fullchain.pem" ]; then
    echo -e "${GREEN}✅ SSL certificate obtained successfully!${NC}"
    
    # Restore full nginx config with HTTPS
    mv nginx/default.conf.backup nginx/default.conf
    
    # Reload nginx with HTTPS config
    docker-compose -f docker-compose.direct.yml restart nginx
    
    echo -e "${GREEN}🔄 Restarted nginx with HTTPS configuration${NC}"
    
    # Test HTTPS access
    echo -e "${YELLOW}🧪 Testing HTTPS access...${NC}"
    sleep 10
    HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN/ || echo "000")
    if [ "$HTTPS_STATUS" = "200" ]; then
        echo -e "${GREEN}✅ HTTPS access working!${NC}"
    else
        echo -e "${RED}❌ HTTPS access failed (Status: $HTTPS_STATUS)${NC}"
    fi
else
    echo -e "${RED}❌ Failed to obtain SSL certificate${NC}"
    echo -e "${YELLOW}Continuing with HTTP only...${NC}"
fi

# Final status check
echo -e "${GREEN}🎉 Deployment completed!${NC}"
echo -e "${GREEN}📋 Final Status:${NC}"
docker-compose -f docker-compose.direct.yml ps

echo -e "${GREEN}🌐 Your sites:${NC}"
echo -e "Main site: http://$DOMAIN (or https://$DOMAIN if SSL worked)"
echo -e "WordPress: http://$DOMAIN/cms (or https://$DOMAIN/cms if SSL worked)"
echo -e "Health check: http://$DOMAIN/api/health"

echo -e "${YELLOW}📝 Next steps:${NC}"
echo -e "1. Update your domain DNS to point to this server IP"
echo -e "2. Test the URLs above"
echo -e "3. Complete WordPress setup at /cms/wp-admin/install.php"

echo -e "${GREEN}✅ Deployment script completed!${NC}"
