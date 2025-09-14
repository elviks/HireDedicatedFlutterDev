#!/bin/bash

# Quick deployment fix script
echo "🚀 Fixing Coolify deployment configuration..."

echo "Files updated for Coolify deployment fix:"
echo "✅ coolify.json - Force Docker build"
echo "✅ nixpacks.toml - Updated with npm install fallback"
echo "✅ DEPLOYMENT_FIX.md - Step-by-step instructions"
echo "✅ docker-compose.coolify.yml - Added GA4 env var"

echo ""
echo "📋 NEXT STEPS:"
echo "1. Push these changes to your Git repository"
echo "2. In Coolify Dashboard:"
echo "   → Go to Application Settings"
echo "   → Change Build Pack from 'Nixpacks' to 'Docker'"
echo "   → Set Dockerfile Path: 'Dockerfile'"
echo "   → Set Docker Compose Path: 'docker-compose.coolify.yml'"
echo "3. Redeploy from Coolify"
echo ""
echo "🎯 Expected: Build logs should show Docker multi-stage build, not Nixpacks"