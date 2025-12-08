/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. CORREGIDO: 'output' bien escrito (para Docker)
  output: 'standalone',

  images: {
    // 2. CORREGIDO: Usamos remotePatterns en lugar de domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
