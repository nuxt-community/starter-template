const webpack = require('webpack')
const fs = require('fs-extra')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const logDirectory = './logs'

// ensure log directory exists
fs.existsSync(logDirectory) || fs.ensureDirSync(logDirectory)

// create a rotating write stream
const accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

module.exports = {
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' },
      { hid: 'og:site_name', property: 'og:site_name', content: '{{ name }}' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:title', property: 'og:title', content: '{{ name }}' },
      { hid: 'og:description', property: 'og:description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    { src: '~assets/css/main.sass', lang: 'sass' }
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: '{{ websiteUrl }}',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [ '/' ]
  },

  serverMiddleware: [morgan('combined', { stream: accessLogStream })],

  router: {
    middleware: ['i18n', 'contentful']
  },

  loading: { color: '#3B8070' },

  plugins: [
    { src: '~/plugins/i18n' }
  ],

  modules: [
    ['nuxt-sass-resources-loader', '@/assets/css/variables.sass'],
    '@nuxtjs/sitemap'
  ],

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
