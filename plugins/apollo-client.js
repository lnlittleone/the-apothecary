
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.API_ENDPOINT
    })
    nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})