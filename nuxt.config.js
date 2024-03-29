import colors from 'vuetify/es5/util/colors'
import path from 'path'
import fs from 'fs'

const environment = process.env.NODE_ENV || 'development';
const envSet = require(`./env.${environment}.js`);
console.log(envSet);

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode: "spa",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bamboo-nuxt',
    title: 'bamboo-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-full-calendar', ssr: false },
    // { src: '~/plugins/axios.js', ssr: false }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/auth',
  ],
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Accept': 'application/json'
  // },
  axios: {
    baseURL: envSet.apiBaseURL,
    // proxy: true,
  },
  auth: {
    redirect: {
      login: '/users/login',
      redirect: false,
      localStorage: false

    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/sign_in',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/auth/sign_out',
            method: 'delete',
          },
          user: false,
        },
      }
    }
  },

  router: {
    root: "/",
    middleware: ['auth']
  },
  server: {
    port: envSet.port,
    host: envSet.host,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
