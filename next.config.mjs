/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    /**
     * lint on CI, faster builds
     */
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: 'cataas.com', protocol: 'https' }],
  },
};

export default nextConfig;
