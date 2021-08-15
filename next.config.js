module.exports = {
  // basePath: process.env.NODE_ENV === 'development' ? '' : '/',
  future: {
    webpack5: true
  },
  webpack: function (cfg) {
    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./src/polyfills.js')) {
        entries['main.js'].unshift('./src/polyfills.js')
      }

      return entries
    }

    return cfg
  },
  images: {
    domains: ['i1.adis.ws']
  }
}
