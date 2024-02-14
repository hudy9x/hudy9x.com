
import { withContentlayer } from 'next-contentlayer'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',

      },
    ],
  },

}

export default withContentlayer(nextConfig)

