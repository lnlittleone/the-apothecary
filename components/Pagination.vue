<script setup lang="ts">

const {page, pages, goPrev, goNext} = defineProps<{
  page: number,
  pages: number,
  goPrev: () => void,
  goNext: () => void
}>()
</script>

<template>
  <div class="d-flex align-center justify-center pa-4">
    <v-btn
        :disabled="page === 1"
        icon="mdi-arrow-left"
        density="comfortable"
        variant="tonal"
        rounded
        @click="goPrev"
    />

    <div class="mx-2 text-caption">
      Page {{ page }} of {{ pages }}
    </div>

    <v-btn
        :disabled="page >= pages"
        icon="mdi-arrow-right"
        density="comfortable"
        variant="tonal"
        rounded
        @click="goNext"
    />
  </div>
</template>