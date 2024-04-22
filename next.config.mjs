import stylexWebpackNextjs from 'stylex-webpack/next.js'

const { withStyleX } = stylexWebpackNextjs

// The config for macros works but we're not using it for now

// import UnpluginMacros from 'unplugin-parcel-macros'

// let macros = UnpluginMacros.webpack()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack(config) {
  //   config.plugins.push(macros)
  //   return config
  // },
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
