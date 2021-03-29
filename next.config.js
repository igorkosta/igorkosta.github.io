const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  target: 'serverless',
  pwa: {
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
    return config
  },
})
