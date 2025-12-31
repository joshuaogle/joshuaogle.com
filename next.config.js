/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  images: {
    domains: [
      'images.thoughtbot.com',
      'res.cloudinary.com',  // keeping existing domains
      'avatars.githubusercontent.com'
    ],
    unoptimized: true,  // Disable optimization to prevent Netlify 500 errors
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
}

module.exports = nextConfig