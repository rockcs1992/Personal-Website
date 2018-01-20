module.exports = {
  router: {
    base: '/Personal-Website/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio - Shi Cheng',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=PT+Serif:400,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,700' },
    ],
    script: [
      { src: 'https://limichange.github.io/Personal-Website/js/modernizr.js' },
      { src: 'https://limichange.github.io/Personal-Website/js/jquery-2.1.1.js', body: true },
  //    { src: 'https://limichange.github.io/Personal-Website/js/smoothscroll.js', body: true },
      { src: 'https://limichange.github.io/Personal-Website/js/bootstrap.min.js', body: true },
      { src: 'https://limichange.github.io/Personal-Website/js/jquery.mixitup.js', body: true},
      { src: 'https://limichange.github.io/Personal-Website/js/custom.js', body: true }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~/static/css/font-awesome.min.css',
    '~/static/css/bootstrap.min.css',
    '~/static/css/style.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** Run ESLint on save
    */
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

    loaders: [
        {
            test: /\.(scss|sass|css)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }
    ]
  },
  plugins: ['~/plugins/vue-youtube-embed']
}
