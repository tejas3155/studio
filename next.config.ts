import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // TODO: Investigate enabling HTTP/2 for production deployments
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['localhost'],
  },
};

export default nextConfig;
