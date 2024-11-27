<script setup lang="ts">
defineProps({
  pageTitle: String,
})
</script>

<template>
  <div class="flex items-center">
    <h1 class="text-lg font-semibold md:text-2xl">{{ pageTitle }}</h1>
  </div>
</template>
