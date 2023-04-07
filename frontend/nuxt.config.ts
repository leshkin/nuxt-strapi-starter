// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi'
  ],

  css: [
    '~/assets/main.css',
  ],
})
