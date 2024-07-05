/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'furniro-demo-server.onrender.com',
        port: '',
        pathname: '/',
      },
    ],
  },
};

export default nextConfig;
