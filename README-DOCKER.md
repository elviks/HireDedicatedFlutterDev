# HireDedicatedFlutterDev - Docker & Coolify Deployment

A Next.js application with integrated WordPress CMS, designed for deployment on Coolify with Traefik reverse proxy.

## 🚀 Features

- **Next.js** on root domain (`hirededicatedflutterdeveloper.com`)
- **WordPress** on sub-path (`hirededicatedflutterdeveloper.com/cms`)
- **Automatic SSL** with Let's Encrypt
- **HTTP to HTTPS** redirects
- **Path stripping** for WordPress (removes `/cms` prefix)
- **Optimized Docker** builds with multi-stage setup
- **Persistent storage** for WordPress and database

## 📋 Prerequisites

- Coolify server with Traefik configured
- Domain name pointed to your server
- Docker and Docker Compose (handled by Coolify)

## 🛠️ Quick Start

### 1. Clone and Prepare

```bash
git clone <your-repo-url>
cd HireDedicatedFlutterDev
```

### 2. Update Configuration

Edit `docker-compose.yml` and change:

```yaml
# Update these passwords for security
WORDPRESS_DB_PASSWORD: your_secure_password_here
MYSQL_PASSWORD: your_secure_password_here
MYSQL_ROOT_PASSWORD: your_root_password_here

# Update domain if different
WP_HOME: https://yourdomain.com/cms
WP_SITEURL: https://yourdomain.com/cms
```

### 3. Create Traefik Network

On your server:

```bash
docker network create traefik-network
```

### 4. Deploy in Coolify

1. Create new project in Coolify
2. Connect your Git repository
3. Select "Docker Compose" deployment
4. Use the provided `docker-compose.yml`
5. Set environment variables in Coolify dashboard

## 🔧 Configuration Details

### Traefik Labels

**Next.js Service:**
- Routes root domain directly
- Automatic SSL with Let's Encrypt
- HTTP to HTTPS redirects

**WordPress Service:**
- Uses `PathPrefix(/cms)` routing
- Strip prefix middleware removes `/cms`
- Proper WordPress URL configuration

### WordPress Setup

- Environment variables set for proper sub-path operation
- MySQL database with persistent storage
- Automatic WordPress configuration for `/cms` path

### Next.js Configuration

- Standalone output for optimized Docker images
- Multi-stage build process
- Production-ready with minimal image size

## 🌐 Access Points

After deployment:

- **Main Website**: https://hirededicatedflutterdeveloper.com
- **WordPress**: https://hirededicatedflutterdeveloper.com/cms
- **WordPress Admin**: https://hirededicatedflutterdeveloper.com/cms/wp-admin

## 📁 Project Structure

```
├── docker-compose.yml      # Main deployment configuration
├── Dockerfile             # Next.js optimized build
├── next.config.mjs        # Next.js configuration with standalone output
├── DEPLOYMENT.md          # Detailed deployment guide
├── .dockerignore          # Docker build optimization
├── .env.example           # Environment variables template
└── app/                   # Next.js application
```

## 🛡️ Security

### Before Deployment

1. **Change default passwords** in `docker-compose.yml`
2. **Update domain name** to your actual domain
3. **Generate WordPress security keys** (optional but recommended)

### After Deployment

1. Complete WordPress installation at `/cms/wp-admin/install.php`
2. Configure WordPress permalinks
3. Install security plugins
4. Set up regular backups

## 🐛 Troubleshooting

### Common Issues

1. **SSL Certificate not generated**
   - Verify domain DNS points to server
   - Check email address in docker-compose.yml
   - Review Traefik logs

2. **WordPress showing 404s**
   - Complete WordPress installation
   - Update permalinks in WordPress admin
   - Check path stripping configuration

3. **Database connection errors**
   - Verify database credentials
   - Wait for MySQL initialization (1-2 minutes)
   - Check container health status

### Logs and Monitoring

```bash
# Check container status
docker ps

# View logs
docker logs nextjs-app
docker logs wordpress-cms
docker logs mysql-db

# Monitor in Coolify dashboard
# Check Traefik routing and SSL status
```

## 🔄 Development

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

### Building

```bash
# Build Next.js application
pnpm build

# Build Docker image
docker build -t nextjs-app .
```

## 📚 Additional Resources

- [Coolify Documentation](https://coolify.io/docs)
- [Traefik Configuration](https://doc.traefik.io/traefik/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [WordPress Docker](https://hub.docker.com/_/wordpress)

## 📞 Support

For deployment issues:
1. Check `DEPLOYMENT.md` for detailed instructions
2. Review Coolify logs and dashboard
3. Verify network and SSL configuration
4. Contact your system administrator

---

**Note**: This configuration is specifically designed for Coolify's Traefik setup with proper networking, SSL handling, and path routing.
