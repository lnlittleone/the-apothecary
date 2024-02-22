export default defineNuxtConfig({
        devtools: {enabled: true},
        runtimeConfig: {
            public: {
                apollo: {
                    apiEndpoint: process.env.API_ENDPOINT
                }
            }
        },
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
            '@mdi/font/css/materialdesignicons.min.css',
        ],
    },
)
