// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/style/main.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'Borges - Desenvolvedor Front-end',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          name: 'description',
          content:
            'Desenvolvedor front-end freelance, código criativo focado em design, morando em São Paulo.'
        }
      ]
    }
  }
});
