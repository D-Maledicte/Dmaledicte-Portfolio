<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import BlueprintCard from '@/components/BlueprintCard.vue'
import NodeConnector from '@/components/NodeConnector.vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()

const colors = [
  { token: '--color-ink', label: 'ink', hex: '#0C0D0F', bg: 'bg-ink', text: 'text-text-primary' },
  { token: '--color-surface', label: 'surface', hex: '#13151A', bg: 'bg-surface', text: 'text-text-primary' },
  { token: '--color-grid-line', label: 'grid-line', hex: '#1C2230', bg: 'bg-grid-line', text: 'text-text-primary' },
  { token: '--color-text-primary', label: 'text-primary', hex: '#F0F2F5', bg: 'bg-text-primary', text: 'text-ink' },
  { token: '--color-text-muted', label: 'text-muted', hex: '#7A8998', bg: 'bg-text-muted', text: 'text-ink' },
  { token: '--color-accent-navy', label: 'accent-navy', hex: '#2B5FAC', bg: 'bg-accent-navy', text: 'text-text-primary' },
  { token: '--color-accent-green', label: 'accent-green', hex: '#52735A', bg: 'bg-accent-green', text: 'text-text-primary' },
]

const typeScale = [
  { name: 'display', size: '44px / 52px', class: 'text-display' },
  { name: 'heading', size: '28px / 36px', class: 'text-heading' },
  { name: 'lead', size: '20px / 30px', class: 'text-lead' },
  { name: 'body', size: '16px / 26px', class: 'text-body' },
  { name: 'caption', size: '12px / 16px', class: 'text-caption' },
]
</script>

<template>
  <main class="bg-ink min-h-screen p-10 font-sans">
    <div class="flex items-center justify-between mb-2">
      <h1 class="text-display font-semibold text-text-primary">Design Tokens</h1>
      <button
        @click="toggle"
        class="font-mono text-caption text-text-muted border border-grid-line px-3 py-1.5 rounded-sm hover:border-accent-navy hover:text-text-primary transition-colors duration-200"
      >
        {{ theme === 'dark' ? '◐ light' : '◑ dark' }}
      </button>
    </div>
    <p class="font-mono text-caption text-text-muted tracking-eyebrow uppercase mb-12">E1 — Blueprint System</p>

    <!-- Paleta -->
    <section class="mb-16">
      <SectionHeader eyebrow="01 // Colors" title="Paleta de color" />
      <div class="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
        <div v-for="c in colors" :key="c.token" class="flex flex-col gap-1">
          <div :class="[c.bg, 'h-16 rounded-sm border border-grid-line']" />
          <span class="font-mono text-caption text-text-muted">{{ c.label }}</span>
          <span class="font-mono text-caption text-text-muted opacity-60">{{ c.hex }}</span>
        </div>
      </div>
    </section>

    <NodeConnector height="48px" class="mb-16" />

    <!-- Escala tipográfica -->
    <section class="mb-16">
      <SectionHeader eyebrow="02 // Typography" title="Escala tipográfica" />
      <div class="mt-6 space-y-4">
        <div v-for="t in typeScale" :key="t.name" class="flex items-baseline gap-6 border-b border-grid-line pb-4">
          <span class="font-mono text-caption text-text-muted w-20 shrink-0">{{ t.name }}</span>
          <span :class="[t.class, 'text-text-primary font-sans']">Portfolio</span>
          <span class="font-mono text-caption text-text-muted ml-auto">{{ t.size }}</span>
        </div>
      </div>
      <div class="mt-8 space-y-3">
        <p class="font-mono text-caption tracking-eyebrow uppercase text-accent-green">Eyebrow mono — IBM Plex Mono</p>
        <p class="font-sans text-body text-text-primary">Cuerpo sans — IBM Plex Sans regular. Texto de ejemplo para verificar interlineado y legibilidad en fondos oscuros.</p>
        <p class="font-sans font-semibold text-heading text-text-primary">Título sans semibold</p>
      </div>
    </section>

    <NodeConnector height="48px" class="mb-16" />

    <!-- Componentes base -->
    <section class="mb-16">
      <SectionHeader eyebrow="03 // Components" title="Componentes base" />

      <div class="mt-8 space-y-6">
        <div>
          <p class="font-mono text-caption text-text-muted mb-3">SectionHeader</p>
          <SectionHeader eyebrow="Sistemas / Arquitectura" title="Automatización de procesos críticos" />
        </div>

        <div>
          <p class="font-mono text-caption text-text-muted mb-3">BlueprintCard — hover para ver borde navy</p>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <BlueprintCard>
              <p class="font-mono text-caption text-accent-green tracking-eyebrow uppercase mb-2">Node 01</p>
              <p class="text-body text-text-primary">Integración Zoho CRM + pipelines de recupero con n8n.</p>
            </BlueprintCard>
            <BlueprintCard>
              <p class="font-mono text-caption text-accent-green tracking-eyebrow uppercase mb-2">Node 02</p>
              <p class="text-body text-text-primary">Arquitectura de datos con tablas Quasar y lógica de negocio centralizada.</p>
            </BlueprintCard>
            <BlueprintCard>
              <p class="font-mono text-caption text-accent-green tracking-eyebrow uppercase mb-2">Node 03</p>
              <p class="text-body text-text-primary">Automatización FUT con Vue 3, API scraping y notificaciones.</p>
            </BlueprintCard>
          </div>
        </div>

        <div>
          <p class="font-mono text-caption text-text-muted mb-3">NodeConnector — alturas variables</p>
          <div class="flex gap-8">
            <NodeConnector height="48px" />
            <NodeConnector height="96px" />
            <NodeConnector height="128px" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
