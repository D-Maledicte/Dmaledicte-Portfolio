<script setup>
defineProps({
  height: { type: String, default: '64px' }
})
</script>

<template>
  <div class="flex flex-col items-center" :style="{ height }">
    <div class="w-px flex-1 bg-grid-line opacity-60" />
    <div class="w-1.5 h-1.5 rounded-full bg-accent-navy shrink-0 my-1" />
    <div class="w-px flex-1 bg-grid-line opacity-60" />
  </div>
</template>
