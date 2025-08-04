/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['hirededicatedflutterdeveloper.com'],
  },
  output: 'standalone',
  // Remove redirects as they'll be handled by nginx reverse proxy
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'https://hirededicatedflutterdeveloper.com/cms/wp-json/wp/v2',
  },
}

export default nextConfig
