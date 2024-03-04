<script setup>
import {useFetchAllData} from "~/composables/useFetchAllData.js";
import {episodeURl} from "~/constants.js";

const page = ref(1)
const {data: episodes, error, pending} = useFetchAllData(episodeURl, page)
</script>

<template>

  <v-container>
    <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
      Episodes
    </h1>
    
    <v-card v-if="error">
      <v-card-text>Something went wrong</v-card-text>
    </v-card>
    <v-card v-else-if="pending">
      <v-card-text>Loading...</v-card-text>
    </v-card>

    <v-table v-else>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Air date
        </th>
        <th class="text-left">
          Episode
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="ep in episodes.results"
          :key="ep.id"
      >
        <td>
          <NuxtLink :to="`/episode/${ep.id}`">
            {{ ep.name }}
          </NuxtLink>
        </td>
        <td>{{ ep.air_date }}</td>
        <td>{{ ep.episode }}</td>
      </tr>
      </tbody>
    </v-table>

    <pagination :page="page" :pages="episodes?.info.pages" :go-next="() => page++" :go-prev="() => page--"/>

  </v-container>
</template>

<style scoped>

</style>