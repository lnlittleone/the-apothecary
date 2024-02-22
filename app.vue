<script setup>
import CharacterCard from "~/components/CharacterCard.vue";

const {data, pending, error, refresh} = await useFetch('https://rickandmortyapi.com/api/character')
</script>

<template>
  <h1>Rick and Morty</h1>
  <div
    v-for="char in data.results"
    :key="char.id"
    cols="12"
    sm="12"
    md="6"
  >
    <CharacterCard
      v-bind="char"
      :key="char.id"
    />
  </div>
</template>



