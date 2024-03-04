<script setup lang="ts">


import type {Character} from "~/types/Character";

const {id, image, name, species} = defineProps<Character>()

</script>

<template>
  <NuxtLink :to="`/character/${id}`" class="link">
    <v-card
        class="pb-3"
        border
        flat
    >
      <v-img
          :src="image"
          cover
          height="250"
          width="250"
      />

      <v-list-item
          class="mb-2"
          :subtitle="species"
      >
        <template #title>
          <strong class="text-h6 mb-2">{{ name }}</strong>
        </template>
      </v-list-item>

    </v-card>
  </Nuxtlink>

</template>

<style scoped>
.link {
  text-decoration: none;
}
</style>