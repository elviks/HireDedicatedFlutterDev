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
  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://www.hirededicatedflutterdeveloper.com/wp/:path*',
        permanent: false,
      },
      {
        source: '/admin/:slug*',
        destination: 'https://www.hirededicatedflutterdeveloper.com/wp-admin/:slug*',
        permanent: false,
      },
      {
        source: '/wp-admin/:slug*',
        destination: 'https://www.hirededicatedflutterdeveloper.com/wp-admin/:slug*',
        permanent: false,
      },
      {
        source: '/wp-content/:path*',
        destination: 'https://www.hirededicatedflutterdeveloper.com/wp-content/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
