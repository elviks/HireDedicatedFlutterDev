#!/bin/bash

# SSL Certificate Setup Script
# Run this script after your domain is pointed to your server

set -e

DOMAIN="hirededicatedflutterdeveloper.com"
EMAIL="your-email@example.com"  # Replace with your email

echo "🚀 Setting up SSL certificates for $DOMAIN"

# Create necessary directories
mkdir -p ./certbot/conf
mkdir -p ./certbot/www

# Start nginx temporarily for certificate validation
echo "📝 Starting temporary nginx for certificate validation..."
docker-compose up -d nginx

# Wait for nginx to be ready
sleep 10

# Request SSL certificate
echo "🔐 Requesting SSL certificate from Let's Encrypt..."
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

# Restart nginx with SSL configuration
echo "🔄 Restarting nginx with SSL configuration..."
docker-compose restart nginx

echo "✅ SSL certificate setup complete!"
echo "🌐 Your site should now be available at https://$DOMAIN"
