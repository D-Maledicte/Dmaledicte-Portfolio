<script setup>
defineProps({
  tag: { type: String, default: 'div' }
})
</script>

<template>
  <component
    :is="tag"
    class="bg-surface border border-grid-line rounded-sm p-6 transition-colors duration-200 hover:border-accent-navy"
  >
    <slot />
  </component>
</template>
