import stylexWebpackNextjs from 'stylex-webpack/next.js'

const { withStyleX } = stylexWebpackNextjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withStyleX({
  stylexOption: {
    importSources: [
      {
        from: 'react-strict-dom',
        as: 'css',
      },
    ],
  },
  stylexImports: ['react-strict-dom'],
})(nextConfig)
