import path from 'path'
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/eshop-sell-web/',
          prefetchLinks: false
        }
      }
    : {
      prefetchLinks: false
    }
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ...routerBase,
  // router: {
  //   base: '/eshop-sell-web/',
  //   prefetchLinks: false
  // },
  head: {
    title: 'eshop-sell-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/less/vars.less',
  ],
  styleResources: {
    less: "~/assets/less/global.less"
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    '~/plugins/axios.js',
    '~/plugins/router.js',
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': {
      target: 'http://101.201.69.221:9090',
      pathRewrite: {
        '^/api' : '/'
        }
      }
  },
  // router: {
    
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions:{
          javascriptEnabled: true,
        }
      }
    }
  },
  generate: {
    devtools:true
  },

}
