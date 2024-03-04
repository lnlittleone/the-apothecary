<script setup>
import ItemDescription from "~/components/ItemDescription.vue";
import {characterURl} from "~/constants.js";

const {params} = useRoute()
const {data: character, pending, error} = await useFetch(`${characterURl}/${params.id}`)

const numberOfEpisodes = character.value.episode.length
const firstEpisode = await useFetch(character.value.episode[0]).data
const lastEpisode = await useFetch(character.value.episode[numberOfEpisodes - 1]).data

</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
            :src="character.image"
            height="400"
            cover
        />
        <v-card-item>
          <v-card-title>{{ character.name }}</v-card-title>
          <v-badge
              dot
              :color="character.status === 'Alive' ? 'success': 'error'"
              inline
          />
          <v-card-subtitle>{{ character.status }} - {{ character.species }}</v-card-subtitle>

          <item-description
              title="Last know location"
              :description="character.location.name"
          />
          <item-description
              title="First seen in"
              :description="firstEpisode?.name"
          />
          <item-description
              title="Last seen in"
              :description="lastEpisode?.name"
          />
          <item-description
              title="Gender"
              :description="character.gender"
          />
          <item-description
              title="Appears in"
              :description="numberOfEpisodes + ' episodes'"
          />
        </v-card-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>