# Deployment Guide for Coolify

This guide will help you deploy your Next.js + WordPress project on Coolify with Traefik integration.

## Prerequisites

1. Coolify server with Traefik configured
2. Domain name pointed to your server (hirededicatedflutterdeveloper.com)

## Configuration Steps

### 1. Update Environment Variables

Before deployment, update these values in `docker-compose.yml`:

```yaml
# WordPress Database Password
WORDPRESS_DB_PASSWORD: your_secure_password_here
MYSQL_PASSWORD: your_secure_password_here
MYSQL_ROOT_PASSWORD: your_root_password_here

# Update domain name if different
WP_HOME: https://yourdomain.com/cms
WP_SITEURL: https://yourdomain.com/cms
```

### 2. Create Traefik Network

On your server, create the Traefik network if it doesn't exist:

```bash
docker network create traefik-network
```

### 3. Deploy in Coolify

1. **Create a new project** in Coolify
2. **Connect your Git repository** (GitHub/GitLab)
3. **Select "Docker Compose" as deployment type**
4. **Use the provided `docker-compose.yml`**
5. **Set environment variables** in Coolify dashboard:
   - `WORDPRESS_DB_PASSWORD`
   - `MYSQL_PASSWORD`
   - `MYSQL_ROOT_PASSWORD`

### 4. SSL Configuration

The configuration includes automatic SSL with Let's Encrypt:
- Certificates are automatically generated
- HTTP to HTTPS redirects are configured
- Both Next.js and WordPress will have SSL

### 5. Access Your Services

After deployment:
- **Main Site**: https://hirededicatedflutterdeveloper.com
- **WordPress Admin**: https://hirededicatedflutterdeveloper.com/cms/wp-admin
- **WordPress**: https://hirededicatedflutterdeveloper.com/cms

## Architecture Overview

```
Internet → Traefik (Reverse Proxy) → Services
                ↓
    ┌─────────────────────┐
    │   Next.js App       │  ← Root domain (/)
    │   Port: 3000        │
    └─────────────────────┘
                ↓
    ┌─────────────────────┐
    │   WordPress         │  ← Sub-path (/cms)
    │   Port: 80          │
    └─────────────────────┘
                ↓
    ┌─────────────────────┐
    │   MySQL Database    │
    │   Port: 3306        │
    └─────────────────────┘
```

## Key Features

- **Path-based routing**: Next.js serves root, WordPress serves `/cms`
- **Automatic SSL**: Let's Encrypt certificates with auto-renewal
- **Path stripping**: WordPress doesn't see the `/cms` prefix
- **HTTP redirects**: All HTTP traffic redirected to HTTPS
- **Optimized builds**: Multi-stage Docker builds for production
- **Volume persistence**: WordPress files and database persist across restarts

## Troubleshooting

### WordPress Installation
1. Access `/cms/wp-admin/install.php` after first deployment
2. Complete WordPress setup wizard
3. Configure permalinks to work with the sub-path

### Database Connection Issues
- Ensure MySQL container is healthy
- Check database credentials in environment variables
- Wait for MySQL initialization (may take 1-2 minutes on first start)

### SSL Certificate Issues
- Ensure domain DNS points to your server
- Check Traefik logs for certificate generation
- Verify email address in docker-compose.yml is valid

### Next.js Build Issues
- Ensure all dependencies are in package.json
- Check build logs in Coolify dashboard
- Verify Node.js version compatibility

## Monitoring

Monitor your deployment using:
- Coolify dashboard for container status
- Traefik dashboard for routing and SSL status
- Application logs for debugging

## Security Recommendations

1. **Change default passwords** in docker-compose.yml
2. **Update WordPress regularly** through the admin panel
3. **Enable WordPress security plugins**
4. **Monitor access logs** for suspicious activity
5. **Backup database regularly**

## Backup Strategy

- WordPress files: Stored in `wordpress_data` volume
- Database: Stored in `mysql_data` volume
- Use Coolify's backup features or implement custom backup solution

---

For support, check Coolify documentation or contact your system administrator.
