// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi'
  ],

  runtimeConfig: {
    public: {
      API_URL: ''
    }
  },

  css: [
    '~/assets/main.css',
  ],
})
