#!/bin/bash

echo "🚀 Setting up VPS for HireDedicatedFlutterDev with Coolify"

# Configuration
DOMAIN="hirededicatedflutterdeveloper.com"
REPO_URL="https://github.com/elviks/HireDedicatedFlutterDev.git"
PROJECT_NAME="hirededicatedflutterdeveloper"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔧 Step 1: Installing Prerequisites${NC}"

# Update system
echo -e "${GREEN}📦 Updating system packages...${NC}"
apt update && apt upgrade -y

# Install required packages
echo -e "${GREEN}📦 Installing required packages...${NC}"
apt install -y curl wget git htop nano unzip

# Install Docker if not present
if ! command -v docker &> /dev/null; then
    echo -e "${GREEN}🐳 Installing Docker...${NC}"
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
    rm get-docker.sh
    echo -e "${GREEN}✅ Docker installed successfully${NC}"
else
    echo -e "${YELLOW}⚠️  Docker already installed${NC}"
fi

# Install Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo -e "${GREEN}📦 Installing Docker Compose...${NC}"
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
    echo -e "${GREEN}✅ Docker Compose installed successfully${NC}"
else
    echo -e "${YELLOW}⚠️  Docker Compose already installed${NC}"
fi

echo -e "${BLUE}🔧 Step 2: Installing Coolify${NC}"

# Check if Coolify is already installed
if [ -d "/data/coolify" ]; then
    echo -e "${YELLOW}⚠️  Coolify already installed${NC}"
else
    echo -e "${GREEN}🌊 Installing Coolify...${NC}"
    curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
    echo -e "${GREEN}✅ Coolify installed successfully${NC}"
fi

echo -e "${BLUE}🔧 Step 3: Setting up Firewall${NC}"

# Configure firewall
if command -v ufw &> /dev/null; then
    echo -e "${GREEN}🔥 Configuring firewall...${NC}"
    ufw allow ssh
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw allow 8000/tcp  # Coolify dashboard
    ufw --force enable
    echo -e "${GREEN}✅ Firewall configured${NC}"
fi

echo -e "${BLUE}🔧 Step 4: Preparing Project Deployment${NC}"

# Create project directory
PROJECT_DIR="/opt/$PROJECT_NAME"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Clone or pull repository
if [ -d ".git" ]; then
    echo -e "${GREEN}📥 Updating existing repository...${NC}"
    git pull origin main
else
    echo -e "${GREEN}📥 Cloning repository...${NC}"
    git clone $REPO_URL .
fi

# Create environment file with secure passwords
echo -e "${GREEN}⚙️ Creating environment file...${NC}"
WORDPRESS_PASSWORD="wp_secure_$(date +%s)_$(openssl rand -hex 8)"
MYSQL_ROOT_PASSWORD="root_secure_$(date +%s)_$(openssl rand -hex 8)"

cat > .env << EOF
WORDPRESS_DB_PASSWORD=$WORDPRESS_PASSWORD
MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
EOF

echo -e "${GREEN}🔐 Environment file created with secure passwords${NC}"

echo -e "${BLUE}🔧 Step 5: Docker Setup${NC}"

# Build the application
echo -e "${GREEN}🔨 Building Docker images...${NC}"
docker-compose -f docker-compose.coolify.yml build

# Start the services
echo -e "${GREEN}🚀 Starting services...${NC}"
docker-compose -f docker-compose.coolify.yml up -d

# Wait for services to start
echo -e "${YELLOW}⏳ Waiting for services to initialize...${NC}"
sleep 30

# Check service status
echo -e "${GREEN}📊 Checking service status...${NC}"
docker-compose -f docker-compose.coolify.yml ps

echo -e "${BLUE}🔧 Step 6: Health Checks${NC}"

# Test Next.js service
echo -e "${GREEN}🧪 Testing Next.js service...${NC}"
NEXTJS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3010/api/health || echo "000")
if [ "$NEXTJS_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Next.js service is running${NC}"
else
    echo -e "${RED}❌ Next.js service check failed (Status: $NEXTJS_STATUS)${NC}"
fi

# Test WordPress service
echo -e "${GREEN}🧪 Testing WordPress service...${NC}"
WORDPRESS_PORT=$(docker port wordpress-flutter-hire 80 | cut -d: -f2)
if [ -n "$WORDPRESS_PORT" ]; then
    WP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$WORDPRESS_PORT || echo "000")
    if [ "$WP_STATUS" = "200" ] || [ "$WP_STATUS" = "302" ]; then
        echo -e "${GREEN}✅ WordPress service is running${NC}"
    else
        echo -e "${RED}❌ WordPress service check failed (Status: $WP_STATUS)${NC}"
    fi
fi

echo -e "${GREEN}🎉 Setup completed!${NC}"
echo -e "${GREEN}📋 Summary:${NC}"
echo -e "Domain: $DOMAIN"
echo -e "Project Directory: $PROJECT_DIR"
echo -e "Coolify Dashboard: http://$(curl -s ifconfig.me):8000"
echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo -e "1. Access Coolify dashboard at: http://$(curl -s ifconfig.me):8000"
echo -e "2. Create a new project in Coolify"
echo -e "3. Add the GitHub repository: $REPO_URL"
echo -e "4. Set domain to: $DOMAIN"
echo -e "5. Configure SSL certificate"
echo -e "6. Deploy the application"
echo ""
echo -e "${BLUE}🔑 Important Information:${NC}"
echo -e "Environment file location: $PROJECT_DIR/.env"
echo -e "WordPress DB Password: $WORDPRESS_PASSWORD"
echo -e "MySQL Root Password: $MYSQL_ROOT_PASSWORD"
echo ""
echo -e "${GREEN}✅ VPS is ready for Coolify deployment!${NC}"