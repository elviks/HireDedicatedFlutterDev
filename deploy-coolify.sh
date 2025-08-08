#!/bin/bash

echo "🚀 Deploying HireDedicatedFlutterDev to Coolify..."

# Stop and remove existing containers
echo "📦 Stopping existing containers..."
docker-compose -f docker-compose.coolify.yml down

# Remove old images to force rebuild
echo "🗑️ Cleaning up old images..."
docker image prune -f
docker rmi $(docker images "n4wo8cgsk4c0oc80k44sowgs-nextjs" -q) 2>/dev/null || true

# Build and deploy with the corrected configuration
echo "🔨 Building and starting containers..."
docker-compose -f docker-compose.coolify.yml up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Check container status
echo "📊 Container Status:"
docker-compose -f docker-compose.coolify.yml ps

# Check logs
echo "📋 Recent logs:"
echo "--- Next.js Logs ---"
docker-compose -f docker-compose.coolify.yml logs --tail=10 nextjs

echo "--- WordPress Logs ---"
docker-compose -f docker-compose.coolify.yml logs --tail=10 wordpress

echo "--- MySQL Logs ---"
docker-compose -f docker-compose.coolify.yml logs --tail=5 mysql

echo "✅ Deployment completed!"
echo "🌐 Your site should be available at: https://hirededicatedflutterdeveloper.com"
echo "🔗 WordPress admin: https://hirededicatedflutterdeveloper.com/cms/wp-admin"
