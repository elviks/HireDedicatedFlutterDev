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
  },
  // Enable standalone output for Docker
  output: 'standalone',
  async rewrites() {
    return [
      // Rewrite /cms requests to WordPress container (use service name from docker-compose)
      {
        source: '/cms/:path*',
        destination: 'http://wordpress/cms/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: '/cms/:path*',
        permanent: false,
      },
      {
        source: '/admin/:slug*',
        destination: '/cms/wp-admin/:slug*',
        permanent: false,
      },
      {
        source: '/wp-admin/:slug*',
        destination: '/cms/wp-admin/:slug*',
        permanent: false,
      },
      {
        source: '/wp-content/:path*',
        destination: '/cms/wp-content/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
