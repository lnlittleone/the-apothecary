<script setup lang="ts">


import type {Character} from "~/types/Character";

const {id, image, name, status, species, type, location} = defineProps<Character>()

</script>

<template>
  <v-card>
    <v-img
      width="300"
      cover
      :src="image"
    />
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ status }}</v-card-subtitle>
    <v-card-text>{{ type }}</v-card-text>
    <v-card-actions>
      <v-btn>
        Go to {{ name }} details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
