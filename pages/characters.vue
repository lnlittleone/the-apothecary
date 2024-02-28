<script setup>
import Pagination from "~/components/Pagination.vue";
import {usePagination} from "~/composables/usePagination.js";

const {page} = usePagination()

const {
  data: characters,
  error,
  pending,
} = useFetch(`https://rickandmortyapi.com/api/character`, {
  query: {page: page.value},

});

</script>

<template>
  <div v-if="error">
    <p>Oupsie, it does not seem we can answer your request</p>
  </div>
  <div v-else-if="pending">
    <v-progress-circular
        indeterminate
        color="purple"
    />
  </div>
  <v-card v-else>
    <v-data-iterator
        :items="characters.results"
    >
      <template #header>
        <v-toolbar class="px-2"/>
      </template>

      <template #default>
        <v-container
            class="pa-2"
            fluid
        >
          <v-row dense>
            <v-col
                v-for="item in characters.results"
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
    </v-data-iterator>
  </v-card>
  <pagination :pages="characters.info.pages"/>
</template>

<style scoped>

</style>