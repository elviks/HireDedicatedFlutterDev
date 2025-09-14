#!/bin/bash
# Force Docker build - run this script if Coolify keeps using Nixpacks

echo "🚨 CRITICAL: Coolify is still using Nixpacks!"
echo ""
echo "📋 Manual Steps Required:"
echo "1. Coolify Dashboard → Your App → Settings"
echo "2. Build Pack: Change 'Nixpacks' → 'Docker'"
echo "3. Dockerfile Path: 'Dockerfile'"
echo "4. Docker Compose: 'docker-compose.coolify.yml'"
echo "5. Save & Redeploy"
echo ""
echo "✅ Expected Success: Build logs show 'FROM node:18-alpine'"
echo "❌ Current Failure: Build logs show 'nixpacks:ubuntu'"
echo ""
echo "💡 The issue is NOT our code - it's Coolify's build pack detection!"