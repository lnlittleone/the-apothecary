<script setup lang="ts">


const {data, pending, error, refresh} = await useFetch('https://rickandmortyapi.com/api/character')

const page = ref(1)

const nextPage = () => {
  page.value = page.value + 1
}

const prevPage = () => {
  page.value = page.value - 1
}

</script>

<template>
  <v-card>
    <v-data-iterator
      :items="data.results"
      :items-per-page="3"
    >
      <template #header>
        <v-toolbar class="px-2" />
      </template>

      <template #default>
        <v-container
          class="pa-2"
          fluid
        >
          <v-row dense>
            <v-col
              v-for="item in data.results"
              :key="item.name"
              cols="auto"
            >
              <CharacterCard
                v-bind="item"
                :key="item.id"
              />
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template #footer>
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            icon="mdi-arrow-left"
            density="comfortable"
            variant="tonal"
            rounded
            @click="prevPage"
          />

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ data.info.pages }}
          </div>

          <v-btn
            :disabled="page >= data.info.pages"
            icon="mdi-arrow-right"
            density="comfortable"
            variant="tonal"
            rounded
            @click="nextPage"
          />
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>

<style scoped>

</style>