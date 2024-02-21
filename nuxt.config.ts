
import { createResolver } from '@nuxt/kit'
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
  public : {
    apollo: {
      apiEndpoint: process.env.API_ENDPOINT
    }
  }},
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
      'vuetify'
    ],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(
          vuetify({
            styles: { configFile: resolve('./settings.scss') },
          })
      )
    }
},}
)
