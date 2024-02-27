<script setup lang="ts">


import type {Character} from "~/types/Character";

const {id, image, name, species} = defineProps<Character>()

</script>

<template>
  <v-card
    class="pb-3"
    border
    flat
  >
    <v-img
      :src="image"
      cover
      max-width="250"
    />

    <v-list-item
      class="mb-2"
      :subtitle="species"
    >
      <template #title>
        <strong class="text-h6 mb-2">{{ name }}</strong>
      </template>
    </v-list-item>

    <v-card-actions>
      <NuxtLink :to="`/character/${id}`">
        <v-btn

          text="Go to {{name}} details"
        />
      </nuxtlink>
    </v-card-actions>
  </v-card>
</template>
