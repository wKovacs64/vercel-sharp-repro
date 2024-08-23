// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ['@plaiceholder/next'],
  reactStrictMode: true,
};

export default withPlaiceholder(nextConfig);
