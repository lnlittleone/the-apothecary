<script setup lang="ts">
const {title, description} = defineProps<{ title: string, description: string }>()
</script>

<template>
  <dl>
    <dt class="title">
      {{ title }}:
    </dt>
    <dd class="description">
      {{ description }}
    </dd>
  </dl>
</template>

<style scoped>
.title {
  color: grey;
}

.description {
  margin: 0;
}

</style>