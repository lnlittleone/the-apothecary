<script setup>
import {useFetchAllData} from "~/composables/useFetchAllData.js";
import {locationURl} from "~/constants.js";

const page = ref(1)
const {data: locations, error, pending} = useFetchAllData(locationURl, page)
</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
      Locations
    </h1>

    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Type
        </th>
        <th class="text-left">
          Dimension
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="loc in locations.results"
          :key="loc.id"
      >
        <td>
          <NuxtLink :to="`/location/${loc.id}`">
            {{ loc.name }}
          </NuxtLink>
        </td>
        <td>{{ loc.type }}</td>
        <td>{{ loc.dimension }}</td>
      </tr>
      </tbody>
    </v-table>

    <pagination :page="page" :pages="locations?.info.pages" :go-next="() => page++" :go-prev="() => page--"/>

  </v-container>
</template>

<style scoped>

</style>