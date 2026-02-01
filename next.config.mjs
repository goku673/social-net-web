/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solo usar standalone cuando se especifique la variable de entorno o en Docker
  // Esto evita problemas de permisos con symlinks en Windows
  ...(process.env.NEXT_OUTPUT_STANDALONE === 'true' && {
    output: 'standalone',
  }),

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
