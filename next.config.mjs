/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    /**
     * lint on CI, faster builds
     */
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
