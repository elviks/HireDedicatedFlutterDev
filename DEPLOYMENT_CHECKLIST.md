# Deployment Checklist for HireDedicatedFlutterDev

## Pre-Deployment Checklist

### ✅ Domain Configuration
- [ ] Domain `hirededicatedflutterdeveloper.com` purchased
- [ ] DNS A record points to your server IP
- [ ] DNS propagation completed (check with `dig` or online tools)

### ✅ Server Requirements
- [ ] VPS/Server with minimum 2GB RAM, 2 CPU cores
- [ ] Ubuntu 20.04+ or similar Linux distribution
- [ ] Docker and Docker Compose installed
- [ ] Coolify installed and configured
- [ ] Ports 80 and 443 open in firewall

### ✅ Code Repository
- [ ] Code pushed to Git repository (GitHub, GitLab, etc.)
- [ ] Repository accessible to Coolify
- [ ] All configuration files included:
  - [ ] `Dockerfile`
  - [ ] `docker-compose.coolify.yml`
  - [ ] `nginx/` directory with configs
  - [ ] `wordpress/uploads.ini`
  - [ ] `.env.example`

## Coolify Deployment Steps

### Step 1: Create Project
- [ ] Login to Coolify dashboard
- [ ] Create new project: "HireDedicatedFlutterDev"
- [ ] Add Git source repository

### Step 2: Configure Application
- [ ] Create new Docker Compose application
- [ ] Set Docker Compose file: `docker-compose.coolify.yml`
- [ ] Configure domain: `hirededicatedflutterdeveloper.com`
- [ ] Enable SSL certificate generation

### Step 3: Environment Variables
Add these variables in Coolify dashboard:
- [ ] `WORDPRESS_DB_PASSWORD` - Strong password for WordPress database
- [ ] `MYSQL_ROOT_PASSWORD` - Strong password for MySQL root
- [ ] `NODE_ENV=production`
- [ ] `WORDPRESS_API_URL=http://wordpress:80/wp-json/wp/v2`

### Step 4: Deploy
- [ ] Click "Deploy" in Coolify
- [ ] Monitor deployment logs
- [ ] Wait for all services to be healthy
- [ ] Verify containers are running

## Post-Deployment Configuration

### WordPress Setup
- [ ] Visit `https://hirededicatedflutterdeveloper.com/cms/wp-admin/`
- [ ] Complete WordPress installation wizard:
  - [ ] Site title and description
  - [ ] Admin username and password
  - [ ] Admin email address
- [ ] Configure permalink structure (Settings > Permalinks > Post name)
- [ ] Install essential plugins:
  - [ ] Yoast SEO or similar
  - [ ] Security plugin (Wordfence, etc.)
  - [ ] Caching plugin (W3 Total Cache, etc.)

### WordPress API Configuration
- [ ] Test API endpoints:
  - [ ] `https://hirededicatedflutterdeveloper.com/cms/wp-json/wp/v2/posts`
  - [ ] `https://hirededicatedflutterdeveloper.com/cms/wp-json/wp/v2/categories`
- [ ] Create test blog posts
- [ ] Verify CORS headers work correctly

### Next.js Application
- [ ] Test main site: `https://hirededicatedflutterdeveloper.com/`
- [ ] Verify blog page loads WordPress content
- [ ] Test blog post individual pages
- [ ] Check all navigation and links work

## Testing Checklist

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Blog page displays WordPress posts
- [ ] Individual blog posts load from WordPress
- [ ] WordPress admin panel accessible
- [ ] Contact forms work (if applicable)
- [ ] All internal links function properly

### Performance Tests
- [ ] Page load times under 3 seconds
- [ ] Images load properly
- [ ] Mobile responsiveness works
- [ ] SEO meta tags present

### Security Tests
- [ ] HTTPS redirect works
- [ ] WordPress admin login rate limiting
- [ ] Sensitive files blocked (wp-config.php, etc.)
- [ ] CORS headers properly configured
- [ ] SSL certificate valid and auto-renewing

## Monitoring Setup

### Coolify Monitoring
- [ ] Enable application health checks
- [ ] Configure email/Slack notifications
- [ ] Set up automatic backups for volumes
- [ ] Monitor resource usage

### WordPress Monitoring
- [ ] Install uptime monitoring plugin
- [ ] Configure database backup schedule
- [ ] Set up WordPress security monitoring
- [ ] Enable error logging

## Maintenance Tasks

### Regular Maintenance (Weekly)
- [ ] Check application logs for errors
- [ ] Monitor disk space usage
- [ ] Review WordPress security reports
- [ ] Test backup restoration process

### Monthly Maintenance
- [ ] Update WordPress core and plugins
- [ ] Review and rotate API keys/passwords
- [ ] Analyze site performance metrics
- [ ] Update SSL certificates (if manual)

### Emergency Procedures
- [ ] Document rollback procedure
- [ ] Backup contact information for hosting/domain
- [ ] Emergency access credentials stored securely
- [ ] Incident response plan documented

## Troubleshooting Guide

### Common Issues and Solutions

#### 1. Site Not Loading
- Check DNS propagation
- Verify Coolify deployment status
- Check nginx container logs
- Ensure domain configuration is correct

#### 2. WordPress Admin Not Accessible
- Verify `/cms` routing in nginx
- Check WordPress container health
- Verify database connection
- Check MySQL container logs

#### 3. API Not Working
- Test WordPress REST API directly
- Check CORS configuration
- Verify permalink structure
- Check nginx proxy configuration

#### 4. SSL Certificate Issues
- Verify domain DNS records
- Check Coolify SSL generation logs
- Ensure ports 80/443 are accessible
- Try manual certificate generation

#### 5. Database Connection Errors
- Check environment variables
- Verify MySQL container status
- Test database connectivity
- Check password configuration

## Performance Optimization

### Initial Optimizations
- [ ] Enable WordPress caching plugin
- [ ] Optimize images (WebP format)
- [ ] Configure CDN (Cloudflare, etc.)
- [ ] Enable Gzip compression
- [ ] Minify CSS/JS files

### Advanced Optimizations
- [ ] Implement Redis caching
- [ ] Database query optimization
- [ ] Server-side rendering optimization
- [ ] Image lazy loading
- [ ] Critical CSS inlining

## Security Hardening

### WordPress Security
- [ ] Change default admin username
- [ ] Use strong passwords
- [ ] Install security plugin
- [ ] Hide WordPress version
- [ ] Disable file editing

### Server Security
- [ ] Regular security updates
- [ ] Firewall configuration
- [ ] SSH key authentication
- [ ] Fail2ban installation
- [ ] Regular backup verification

## Success Criteria

### ✅ Deployment Successful When:
- [ ] Main site loads at `https://hirededicatedflutterdeveloper.com`
- [ ] WordPress admin accessible at `/cms/wp-admin`
- [ ] Blog pages display WordPress content
- [ ] All SSL certificates valid
- [ ] Performance scores > 90 (Google PageSpeed)
- [ ] All security scans pass
- [ ] Backup and restore tested
- [ ] Monitoring alerts configured

---

## Emergency Contacts

**Domain Registrar**: ________________  
**Hosting Provider**: ________________  
**DNS Provider**: ________________  
**Coolify Admin**: ________________  

## Important URLs

- **Main Site**: https://hirededicatedflutterdeveloper.com
- **WordPress Admin**: https://hirededicatedflutterdeveloper.com/cms/wp-admin
- **Coolify Dashboard**: https://your-coolify-url.com
- **Git Repository**: https://github.com/your-username/HireDedicatedFlutterDev

---

**Deployment Date**: _______________  
**Deployed By**: _______________  
**Version**: _______________
