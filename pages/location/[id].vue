<script setup lang="ts">
import {locationURl} from "~/constants";
import {fetchURLs} from "~/utils/fetchUrls";
import ItemDescription from "~/components/ItemDescription.vue";

const {params} = useRoute()
const residents = ref()

const {data: location, pending, error} = await useFetch(`${locationURl}/${params.id}`)


fetchURLs(location.value.residents)
    .then(data => residents.value = data)
    .catch(error => {
      console.error('Error fetching data:', error)
    });

</script>

<template>
  <v-container>
    <v-card v-if="error">
      <v-card-text>Something went wrong</v-card-text>
    </v-card>
    <v-card v-else-if="pending">
      <v-card-text>Loading...</v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-item>
        <v-card-title>{{ location.name }}</v-card-title>

        <v-card-subtitle>{{ location.type }}</v-card-subtitle>

        <item-description
            title="Dimension"
            :description="location.dimension"
        />

        <h3>
          Residents :
        </h3>
        <v-data-iterator
            :items="residents"
        >
          <v-row>
            <v-col
                v-for="resident in residents"
                :key="resident.name"
                cols="auto"
            >
              <CharacterCard
                  v-bind="resident"
                  :key="resident.id"
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