<script setup>

const {data: episodes, error, pending} = useFetch('https://rickandmortyapi.com/api/episode')

</script>

<template>
  <v-container>
    <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
      Episodes
    </h1>

    <v-table>
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
  </v-container>
</template>

<style scoped>

</style>