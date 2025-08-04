#!/bin/bash

# Deployment script for Coolify
set -e

echo "🚀 Starting deployment process..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  Creating .env file from .env.example"
    cp .env.example .env
    echo "📝 Please edit .env file with your secure passwords before proceeding!"
    exit 1
fi

# Build and start services
echo "🏗️  Building and starting services..."
docker-compose down --remove-orphans
docker-compose build --no-cache
docker-compose up -d mysql

# Wait for MySQL to be ready
echo "⏳ Waiting for MySQL to be ready..."
sleep 30

# Start WordPress
echo "🔄 Starting WordPress..."
docker-compose up -d wordpress

# Wait for WordPress to be ready
echo "⏳ Waiting for WordPress to be ready..."
sleep 30

# Start Next.js app
echo "🔄 Starting Next.js application..."
docker-compose up -d nextjs-app

# Wait for app to be ready
echo "⏳ Waiting for Next.js app to be ready..."
sleep 20

# Start nginx
echo "🔄 Starting nginx reverse proxy..."
docker-compose up -d nginx

echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Point your domain to this server's IP address"
echo "2. Run ./setup-ssl.sh to set up SSL certificates"
echo "3. Access your WordPress admin at: https://hirededicatedflutterdeveloper.com/cms/wp-admin"
echo "4. Access your main site at: https://hirededicatedflutterdeveloper.com"
echo ""
echo "🔧 Useful commands:"
echo "  View logs: docker-compose logs -f [service-name]"
echo "  Restart service: docker-compose restart [service-name]"
echo "  Stop all: docker-compose down"
echo "  Development: pnpm dev"
echo "  Build: pnpm build"
