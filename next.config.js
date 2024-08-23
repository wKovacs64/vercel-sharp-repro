// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // deviceSizes: [500],
    imageSizes: [128, 192, 331, 386, 480],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
};

export default withPlaiceholder(nextConfig);
