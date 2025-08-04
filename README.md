# HireDedicatedFlutterDev - Next.js + WordPress Deployment

This project combines a Next.js frontend with a WordPress CMS backend, designed to be deployed using Coolify with Docker containers and nginx reverse proxy.

## Architecture Overview

```
Internet → Coolify (SSL Termination) → Nginx Reverse Proxy → Next.js App (/)
                                                          → WordPress CMS (/cms)
                                                          → MySQL Database
```

## URL Structure

- **Main Site**: `https://hirededicatedflutterdeveloper.com/`
- **WordPress CMS**: `https://hirededicatedflutterdeveloper.com/cms/`
- **WordPress Admin**: `https://hirededicatedflutterdeveloper.com/cms/wp-admin/`
- **WordPress API**: `https://hirededicatedflutterdeveloper.com/cms/wp-json/wp/v2/`

## Prerequisites

1. **Server**: VPS or dedicated server with Docker and Docker Compose
2. **Domain**: `hirededicatedflutterdeveloper.com` pointed to your server's IP
3. **Coolify**: Installed and configured on your server
4. **Git Repository**: Your project pushed to a Git repository

## Files Overview

### Core Files
- `Dockerfile` - Next.js application container
- `docker-compose.yml` - Standard Docker Compose (for manual deployment)
- `docker-compose.coolify.yml` - Optimized for Coolify deployment
- `.env.example` - Environment variables template

### Nginx Configuration
- `nginx/nginx.conf` - Main Nginx configuration (with SSL)
- `nginx/default.conf` - Server blocks with SSL (manual deployment)
- `nginx/coolify-nginx.conf` - Main Nginx config for Coolify
- `nginx/coolify-default.conf` - Server blocks for Coolify (no SSL needed)

### WordPress Configuration
- `wordpress/uploads.ini` - PHP upload settings for WordPress

### Deployment Scripts
- `deploy.sh` - Manual deployment script
- `setup-ssl.sh` - SSL certificate setup (for manual deployment)

### API Integration
- `lib/wordpress-api.ts` - WordPress REST API integration utilities

## Deployment Methods

### Method 1: Coolify Deployment (Recommended)

#### Step 1: Prepare Environment
1. Create a new project in Coolify
2. Connect your Git repository
3. Create environment variables in Coolify dashboard:
   ```
   WORDPRESS_DB_PASSWORD=your_secure_wordpress_password
   MYSQL_ROOT_PASSWORD=your_secure_mysql_root_password
   ```

#### Step 2: Configure Coolify Application
1. **Application Type**: Docker Compose
2. **Docker Compose File**: Use `docker-compose.coolify.yml`
3. **Domain**: `hirededicatedflutterdeveloper.com`
4. **SSL**: Enable automatic SSL (Let's Encrypt)

#### Step 3: Deploy
1. Push your code to the connected repository
2. Coolify will automatically build and deploy your application
3. SSL certificates will be automatically provisioned

#### Step 4: WordPress Setup
1. Access `https://hirededicatedflutterdeveloper.com/cms/wp-admin/`
2. Complete WordPress installation
3. Configure your WordPress site

### Method 2: Manual Docker Deployment

#### Step 1: Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Step 2: Clone and Configure
```bash
# Clone repository
git clone <your-repository-url>
cd HireDedicatedFlutterDev

# Set up environment
cp .env.example .env
nano .env  # Edit with your secure passwords
```

#### Step 3: Deploy
```bash
# Make scripts executable
chmod +x deploy.sh setup-ssl.sh

# Deploy application
./deploy.sh

# Set up SSL certificates (after DNS is pointed to your server)
./setup-ssl.sh
```

## WordPress Integration

### API Endpoints
Your Next.js app can access WordPress data via:
- Posts: `/cms/wp-json/wp/v2/posts`
- Categories: `/cms/wp-json/wp/v2/categories`
- Media: `/cms/wp-json/wp/v2/media`

### Using the WordPress API
```typescript
import { getAllPosts, getPostBySlug } from '@/lib/wordpress-api';

// Get all posts
const posts = await getAllPosts();

// Get specific post
const post = await getPostBySlug('my-post-slug');
```

### Example Blog Integration
Update your blog pages to fetch from WordPress:

```typescript
// app/blog/page.tsx
import { getAllPosts } from '@/lib/wordpress-api';

export default async function BlogPage() {
  const posts = await getAllPosts({ per_page: 10 });
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </article>
      ))}
    </div>
  );
}
```

## Configuration Details

### Nginx Reverse Proxy
The nginx configuration handles:
- SSL termination (manual deployment)
- Request routing based on path
- WordPress URL rewriting
- Static file caching
- Rate limiting for admin endpoints
- CORS headers for API access

### WordPress Configuration
- Configured for subdirectory installation (`/cms`)
- Proper SSL handling with proxy headers
- Increased upload limits (100MB)
- Security headers and file blocking

### Database
- MySQL 8.0 with native password authentication
- Persistent data storage with Docker volumes
- Optimized for WordPress performance

## Security Features

1. **Rate Limiting**: Login attempts and API calls are rate-limited
2. **CORS Protection**: API access restricted to your domain
3. **File Access Control**: Sensitive files are blocked
4. **SSL/TLS**: Automatic HTTPS redirect and security headers
5. **Database Security**: Strong passwords and restricted access

## Monitoring and Maintenance

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f wordpress
docker-compose logs -f nextjs-app
docker-compose logs -f nginx
```

### Restart Services
```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart wordpress
```

### Update Application
```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Database Backup
```bash
# Create backup
docker-compose exec mysql mysqldump -u root -p wordpress > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore backup
docker-compose exec -i mysql mysql -u root -p wordpress < backup_file.sql
```

## Troubleshooting

### Common Issues

1. **WordPress redirects to wrong URL**
   - Check `WP_HOME` and `WP_SITEURL` in WordPress admin
   - Verify nginx proxy headers

2. **SSL certificate issues** (Manual deployment)
   - Ensure domain DNS is pointed to server
   - Check if ports 80 and 443 are open
   - Verify certbot logs: `docker-compose logs certbot`

3. **Database connection issues**
   - Verify environment variables
   - Check MySQL logs: `docker-compose logs mysql`
   - Ensure MySQL is fully started before WordPress

4. **API not accessible**
   - Check CORS headers in nginx configuration
   - Verify WordPress permalinks are set to "Post name"
   - Test API directly: `curl https://yourdomain.com/cms/wp-json/wp/v2/posts`

### Performance Optimization

1. **Enable WordPress caching plugins**
2. **Configure CDN for static assets**
3. **Optimize database regularly**
4. **Monitor resource usage**
5. **Use Redis for object caching** (optional)

## Development

### Local Development
```bash
# Start development environment
docker-compose -f docker-compose.yml up -d

# Access services
# Next.js: http://localhost:3008
# WordPress: http://localhost/cms
# phpMyAdmin: http://localhost:8080
```

### Environment Variables
Create `.env` file with:
```
WORDPRESS_DB_PASSWORD=secure_password_here
MYSQL_ROOT_PASSWORD=secure_root_password_here
NODE_ENV=production
```

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review Docker and nginx logs
3. Verify DNS and SSL configuration
4. Ensure all environment variables are set correctly

## License

This project is licensed under the MIT License.
