/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  // The two Boundary case studies became one, told in chapters
  async redirects() {
    return [
      { source: '/work/boundary-session-recording', destination: '/work/boundary#session-recording', permanent: true },
      { source: '/work/boundary-transparent-sessions', destination: '/work/boundary#transparent-sessions', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.thoughtbot.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  webpack(config) {
    // Import .svg files as React components via SVGR, and leave Next's
    // built-in file loader to handle `*.svg?url` imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  }
}

module.exports = nextConfig
