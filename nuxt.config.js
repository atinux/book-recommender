require('dotenv').config();

const express = require('express');

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "Oscar's Book Recommendations",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'nuxt-socket-io',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    https: true,
  },
  /*
   ** Build configuration
   */
  build: {
    watch: ['api'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
  env: {
    MONGOOSE_URL: process.env.MONGOOSE_URL,
    TASTE_DIVE_API_KEY: process.env.TASTE_DIVE_API_KEY,
  },
  serverMiddleware: [express.json()],
  styleResources: {
    scss: ['~assets/styles/main.scss'],
  },
  io: {
    sockets: [
      {
        name: 'home',
        url: process.env.HOST || 'http://localhost:3000',
        default: true,
        vuex: {
          mutations: [{ newTitles: 'SET_NEW_TITLES' }],
          actions: [],
          emitBacks: ['titleFromUser'],
        },
      },
    ],
  },
};
