export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  colorMode: {
    preference: 'dark'
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' }
    ],
    defaultLocale: 'es',
    strategy: 'no_prefix',
    langDir: 'locales'
  }
})
