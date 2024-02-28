<script setup>
const page = ref(1)
const {data: episodes, error, pending} = useFetch('https://rickandmortyapi.com/api/episode', {
  query: {page},
})

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

    <div class="d-flex align-center justify-center pa-4">
      <v-btn
          :disabled="page === 1"
          icon="mdi-arrow-left"
          density="comfortable"
          variant="tonal"
          rounded
          @click="page--"
      />

      <div class="mx-2 text-caption">
        Page {{ page }} of {{ episodes.info.pages }}
      </div>

      <v-btn
          :disabled="page >= episodes.info.pages"
          icon="mdi-arrow-right"
          density="comfortable"
          variant="tonal"
          rounded
          @click="page++"
      />
    </div>

  </v-container>
</template>

<style scoped>

</style>