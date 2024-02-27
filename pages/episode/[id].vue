<script setup>
import ItemDescription from "~/components/ItemDescription.vue";
import {fetchURLs} from "~/utils/fetchUrls";

const {params} = useRoute()
const characters = ref()

const {data: episode, pending, error} = await useFetch(`https://rickandmortyapi.com/api/episode/${params.id}`)

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
              cols="12"
              sm="12"
              md="2"
            >
              <v-card

                width="200"
              >
                <v-img
                  :src="char.image"
                  width="300"
                />
                <v-card-title>{{ char.name }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-data-iterator>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>