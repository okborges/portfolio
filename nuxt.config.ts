// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Jost:wght@400;500&display=swap'
        }
      ],
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'description',
          content:
            'Desenvolvedor front-end criativo, com foco em design, UI/UX e web sites responsivos, habilidades em HTML, CSS e JavaScript.Freelancer, morando em São Paulo.'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ],
      title: 'Borges - Desenvolvedor Front-end'
    }
  },
  css: ['~/assets/style/main.scss'],
  modules: ['@nuxtjs/tailwindcss']
});
