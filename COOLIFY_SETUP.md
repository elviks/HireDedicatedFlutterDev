# Coolify Configuration for HireDedicatedFlutterDev

## Coolify Setup Instructions

### 1. Create New Project in Coolify

1. Login to your Coolify dashboard
2. Click "New Project"
3. Name: `HireDedicatedFlutterDev`
4. Description: `Next.js + WordPress CMS deployment`

### 2. Add Git Repository

1. Go to "Sources" in your project
2. Add your Git repository (GitHub/GitLab/etc.)
3. Select the main branch

### 3. Create Application

1. Click "New Application"
2. **Application Type**: Docker Compose
3. **Name**: `hireflutter-app`
4. **Git Repository**: Select your repository
5. **Branch**: main
6. **Docker Compose File**: `docker-compose.coolify.yml`

### 4. Configure Domain

1. Go to application settings
2. **Domains**: Add `hirededicatedflutterdeveloper.com`
3. **SSL**: Enable "Generate SSL Certificate"
4. **Force HTTPS**: Enable

### 5. Environment Variables

Add these environment variables in Coolify:

```
WORDPRESS_DB_PASSWORD=your_secure_wordpress_password_here
MYSQL_ROOT_PASSWORD=your_secure_mysql_root_password_here
NODE_ENV=production
WORDPRESS_API_URL=http://wordpress:80/wp-json/wp/v2
```

### 6. Storage/Volumes

Coolify will automatically handle persistent storage for:
- `wordpress_data` (WordPress files)
- `mysql_data` (Database data)

### 7. Deploy

1. Click "Deploy" button
2. Monitor the deployment logs
3. Wait for all services to be healthy

### 8. WordPress Initial Setup

Once deployed:

1. Visit `https://hirededicatedflutterdeveloper.com/cms/wp-admin/`
2. Complete WordPress installation:
   - Site Title: Your site name
   - Username: admin username
   - Password: secure password
   - Email: your email
3. Set permalink structure to "Post name" in Settings > Permalinks

## Service Configuration

### Application Structure
```
├── nextjs-app (Port: 3008)
├── wordpress (Port: 80)
├── mysql (Port: 3306)
└── nginx (Port: 80) - Main entry point
```

### Coolify Labels Applied
- `coolify.managed=true` - Let Coolify manage the containers
- `traefik.enable=true` - Enable Traefik routing
- `traefik.http.routers.hireflutter.rule=Host(...)` - Domain routing

### Health Checks

Coolify will automatically monitor:
- Application startup
- Container health
- SSL certificate renewal
- Service availability

## Deployment Flow

1. **Code Push** → Git repository
2. **Webhook** → Coolify detects changes
3. **Build** → Docker images are built
4. **Deploy** → Containers are updated
5. **Health Check** → Services are verified

## Monitoring

### Coolify Dashboard
- Real-time logs for all services
- Resource usage monitoring
- SSL certificate status
- Deployment history

### Service Status
- ✅ `nextjs-app`: Main application
- ✅ `wordpress`: CMS backend
- ✅ `mysql`: Database
- ✅ `nginx`: Reverse proxy

## Maintenance

### Updates
Coolify can auto-deploy on Git pushes:
1. Enable "Auto Deploy" in application settings
2. Push code to main branch
3. Coolify automatically rebuilds and deploys

### Backups
Set up automatic backups in Coolify:
1. Go to "Storages" section
2. Configure backup schedules for volumes
3. Set retention policies

### Scaling
For high traffic, you can scale services:
1. Increase container resources in Coolify
2. Add multiple instances of nextjs-app
3. Configure load balancing

## Troubleshooting

### Common Coolify Issues

1. **Build Failures**
   - Check build logs in Coolify dashboard
   - Verify Dockerfile and docker-compose.yml syntax
   - Ensure all required files are in repository

2. **Domain Not Accessible**
   - Verify DNS records point to Coolify server
   - Check SSL certificate generation status
   - Ensure domain is properly configured in Coolify

3. **WordPress Installation Issues**
   - Check MySQL container logs
   - Verify environment variables are set
   - Ensure database connection is established

4. **API Not Working**
   - Check nginx configuration is correct
   - Verify WordPress permalinks
   - Test internal container communication

### Useful Coolify Commands

Access container shell:
```bash
# Via Coolify dashboard - click on container > Terminal
# Or via server SSH:
docker exec -it hireflutter-wordpress bash
docker exec -it hireflutter-nextjs sh
```

View logs:
```bash
# Via Coolify dashboard - click on service > Logs
# Or via server SSH:
docker logs hireflutter-nextjs
docker logs hireflutter-wordpress
```

## Security Considerations

### Coolify Managed Security
- Automatic SSL certificates
- Network isolation
- Container security scanning
- Regular updates

### Additional Security
- Strong database passwords
- Rate limiting in nginx
- WordPress security plugins
- Regular backups

## Performance Optimization

### Coolify Settings
- Enable build caching
- Configure resource limits appropriately
- Use SSD storage for databases
- Enable monitoring and alerts

### Application Level
- WordPress caching plugins
- Next.js ISR for blog posts
- Image optimization
- CDN integration

## Support and Resources

- [Coolify Documentation](https://coolify.io/docs)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [WordPress API Documentation](https://developer.wordpress.org/rest-api/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
