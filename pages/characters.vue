<script setup>

import {useFetchAllData} from "~/composables/useFetchAllData.js";
import {characterURl} from "~/constants.js";

const page = ref(1)
const {data: characters, error, pending} = useFetchAllData(characterURl, page)

</script>

<template>
  <v-card v-if="error">
    <v-card-text>Something went wrong</v-card-text>
  </v-card>
  <v-card v-else-if="pending">
    <v-card-text>Loading...</v-card-text>
  </v-card>
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
  <pagination :page="page" :pages="characters?.info.pages" :go-next="() => page++" :go-prev="() => page--"/>
</template>
