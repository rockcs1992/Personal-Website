module.exports = {
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
      { rel: 'stylesheet', type: 'text/css', href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'css/style.css' },
    ],
    script: [
      { src: 'js/modernizr.js' },
      { src: 'js/jquery-2.1.1.js', body: true },
  //    { src: 'js/smoothscroll.js', body: true },
      { src: 'js/bootstrap.min.js', body: true },
      { src: 'js/jquery.mixitup.js', body: true},
      { src: 'js/custom.js', body: true }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
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
