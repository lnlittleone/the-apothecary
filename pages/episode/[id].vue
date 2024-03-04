<script setup>
import ItemDescription from "~/components/ItemDescription.vue";
import {episodeURl} from "~/constants.js";
import {fetchURLs} from "~/utils/fetchUrls";

const {params} = useRoute()
const characters = ref()

const {data: episode, pending, error} = await useFetch(`${episodeURl}/${params.id}`)

fetchURLs(episode.value.characters)
    .then(data => characters.value = data)
    .catch(error => {
      console.error('Error fetching data:', error)
    });

</script>

<template>
  <v-container>
    <v-card>
      <v-card-item>
        <v-card-title>{{ episode.name }}</v-card-title>

        <v-card-subtitle>{{ episode.episode }}</v-card-subtitle>

        <item-description
            title="Air date"
            :description="episode.air_date"
        />

        <h3>
          Featured characters in this episode :
        </h3>
        <v-data-iterator
            :items="characters"
        >
          <v-row>
            <v-col
                v-for="char in characters"
                :key="char.name"
                cols="auto"
            >
              <CharacterCard
                  v-bind="char"
                  :key="char.id"
              />
            </v-col>
          </v-row>
        </v-data-iterator>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>