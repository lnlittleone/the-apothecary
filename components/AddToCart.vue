<script setup lang="ts">

const addToCart =()=>{
  console.log('add to cart')
}
</script>

<template>
  <v-btn type="button" @click={addToCart} color="indigo-darken-3">
    Add To Cart
  </v-btn>
</template>
