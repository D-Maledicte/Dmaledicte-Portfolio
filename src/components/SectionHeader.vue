<script setup>
defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  titleTag: { type: String, default: 'h2' }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <span
      v-if="eyebrow"
      class="font-mono text-caption tracking-eyebrow uppercase text-accent-green"
    >
      {{ eyebrow }}
    </span>
    <component
      :is="titleTag"
      class="m-0 p-0 font-sans font-semibold text-heading text-text-primary"
    >
      {{ title }}
    </component>
  </div>
</template>
