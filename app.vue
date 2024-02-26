<script setup>
import {useTheme} from 'vuetify'

const theme = useTheme()
const darkModeIcon = ref('mdi-weather-night')


function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  darkModeIcon.value = theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
}
</script>


<template>
  <NuxtLayout>
    <header class="app-header">
      <h1>Rick and Morty</h1>
      <nav>
        <NuxtLink
          to="/"
          class="link"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/characters"
          class="link"
        >
          Characters
        </NuxtLink>
        <NuxtLink
          to="/episodes"
          class="link"
        >
          Episodes
        </NuxtLink>
        <NuxtLink
          to="/locations"
          class="link"
        >
          Locations
        </NuxtLink>
        <v-btn
          size="small"
          :icon="darkModeIcon"
          @click="toggleTheme"
        />
      </nav>
    </header>
    <v-container>
      <NuxtPage />
    </v-container>
  </NuxtLayout>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

}

.link {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: white;
  background-color: mediumpurple;
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-weight: 600;
  text-decoration: none;
  margin: 0 0.5rem;

  &:hover {
    background-color: rebeccapurple;
  }
}
</style>
