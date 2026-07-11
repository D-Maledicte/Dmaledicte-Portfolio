<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import BlueprintCard from '@/components/BlueprintCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import NodeConnector from '@/components/NodeConnector.vue'

const { t } = useI18n()

// Loading bar
const loadBarWidth = ref(0)
onMounted(() => {
  requestAnimationFrame(() => { loadBarWidth.value = 100 })
})

const cases = [
  {
    eyebrow: 'CASO 01 — CQRS MULTI-TENANT',
    titleKey: 'cases.case1.title',
    problemKey: 'cases.case1.problem',
    stackKey: 'cases.case1.stack',
  },
  {
    eyebrow: 'CASO 02 — MIGRACIÓN SAAS → SELF-HOSTED',
    titleKey: 'cases.case2.title',
    problemKey: 'cases.case2.problem',
    stackKey: 'cases.case2.stack',
  },
  {
    eyebrow: 'CASO 03 — IA TOOLING',
    titleKey: 'cases.case3.title',
    problemKey: 'cases.case3.problem',
    stackKey: 'cases.case3.stack',
  },
]

const stackCategories = [
  { labelKey: 'stack.categories.automation', itemsKey: 'stack.items.automation' },
  { labelKey: 'stack.categories.ai', itemsKey: 'stack.items.ai' },
  { labelKey: 'stack.categories.backend', itemsKey: 'stack.items.backend' },
  { labelKey: 'stack.categories.frontend', itemsKey: 'stack.items.frontend' },
  { labelKey: 'stack.categories.databases', itemsKey: 'stack.items.databases' },
  { labelKey: 'stack.categories.infra', itemsKey: 'stack.items.infra' },
]
</script>

<template>
  <div>

    <!-- ── Loading bar decorativa ──────────────────────────────── -->
    <div class="h-px bg-grid-line relative overflow-hidden">
      <div
        class="absolute inset-y-0 left-0 bg-accent-navy"
        :style="{
          width: loadBarWidth + '%',
          transition: loadBarWidth > 0 ? 'width 800ms ease-out' : 'none'
        }"
      />
    </div>

    <!-- ── Ticker ──────────────────────────────────────────────── -->
    <div class="border-b border-grid-line overflow-hidden py-2.5" aria-hidden="true">
      <div class="ticker-track">
        <span class="ticker-item">
          INTEGRACIÓN DE SISTEMAS · AUTOMATIZACIÓN · ARQUITECTURA BACKEND · IA TOOLING · VUE 3 · NODE.JS · ZOHO CRM · n8n · CQRS · API GATEWAY · PYTHON · SELF-HOSTED · DOCKER · CLAUDE API ·&nbsp;
        </span>
        <span class="ticker-item">
          INTEGRACIÓN DE SISTEMAS · AUTOMATIZACIÓN · ARQUITECTURA BACKEND · IA TOOLING · VUE 3 · NODE.JS · ZOHO CRM · n8n · CQRS · API GATEWAY · PYTHON · SELF-HOSTED · DOCKER · CLAUDE API ·&nbsp;
        </span>
      </div>
    </div>

    <!-- ── Hero ────────────────────────────────────────────────── -->
    <section class="w-full pt-20 pb-16">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Left: copy -->
      <div class="flex flex-col gap-6 min-w-0">

        <!-- Eyebrow: code comment syntax -->
        <span class="font-mono text-caption text-accent-green">
          // arquitectura de sistemas — buenos aires, ar
        </span>

        <!-- Headline -->
        <h1 class="font-sans font-semibold m-0 text-text-primary break-words" style="font-size: clamp(1.75rem, 4vw, 2.75rem); line-height: 1.15;">
          {{ $t('hero.tagline') }}
          <br />
          <span class="text-text-muted" style="font-style: italic; font-weight: 400;">{{ $t('hero.tagline2') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="font-sans text-body text-text-muted m-0 max-w-lg leading-relaxed break-words">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- CTAs + social links inline -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <RouterLink
            to="/projects"
            class="font-mono text-caption tracking-eyebrow uppercase px-5 py-2.5 bg-accent-green text-ink no-underline hover:opacity-90 transition-opacity"
          >
            {{ $t('home.cta.projects') }} →
          </RouterLink>
          <RouterLink
            to="/contact"
            class="font-mono text-caption tracking-eyebrow uppercase px-5 py-2.5 border border-grid-line text-text-muted no-underline hover:border-accent-green hover:text-text-primary transition-colors"
          >
            {{ $t('home.cta.contact') }}
          </RouterLink>

          <!-- Social links inline -->
          <div class="flex items-center gap-4 ml-2">
            <a
              href="https://www.linkedin.com/in/mjmartel/"
              target="_blank" rel="noopener noreferrer"
              class="font-mono text-caption text-text-muted hover:text-accent-green transition-colors no-underline"
            >LinkedIn</a>
            <a
              href="https://github.com/D-Maledicte"
              target="_blank" rel="noopener noreferrer"
              class="font-mono text-caption text-text-muted hover:text-accent-green transition-colors no-underline"
            >GitHub</a>
            <a
              href="mailto:matiasjesusmartel@outlook.es"
              class="font-mono text-caption text-text-muted hover:text-accent-green transition-colors no-underline"
            >Mail</a>
          </div>
        </div>

      </div>

      <!-- Right: diagrama de arquitectura SVG -->
      <div class="flex justify-center items-center">
        <svg
          viewBox="0 0 400 320"
          class="w-full max-w-md hero-diagram"
          aria-hidden="true"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Grid background dots -->
          <defs>
            <pattern id="grid-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="var(--color-grid-line)" />
            </pattern>
          </defs>
          <rect width="400" height="320" fill="url(#grid-dots)" opacity="0.5" />

          <!-- Node: CRM (system of record) -->
          <g class="svg-node" style="--delay: 0ms">
            <rect x="20" y="130" width="90" height="36" rx="2"
              stroke="var(--color-accent-navy)" stroke-width="1"
              fill="var(--color-surface)" />
            <text x="65" y="144" text-anchor="middle" class="svg-label">CRM</text>
            <text x="65" y="157" text-anchor="middle" class="svg-sublabel">system of record</text>
          </g>

          <!-- Node: API Gateway -->
          <g class="svg-node" style="--delay: 100ms">
            <rect x="155" y="60" width="90" height="36" rx="2"
              stroke="var(--color-accent-green)" stroke-width="1"
              fill="var(--color-surface)" />
            <text x="200" y="74" text-anchor="middle" class="svg-label">API GATEWAY</text>
            <text x="200" y="87" text-anchor="middle" class="svg-sublabel">borde externo</text>
          </g>

          <!-- Node: Data Store -->
          <g class="svg-node" style="--delay: 150ms">
            <rect x="155" y="142" width="90" height="36" rx="2"
              stroke="var(--color-grid-line)" stroke-width="1"
              fill="var(--color-surface)" />
            <text x="200" y="156" text-anchor="middle" class="svg-label">DATA STORE</text>
            <text x="200" y="169" text-anchor="middle" class="svg-sublabel">read model</text>
          </g>

          <!-- Node: Automation -->
          <g class="svg-node" style="--delay: 200ms">
            <rect x="155" y="224" width="90" height="36" rx="2"
              stroke="var(--color-grid-line)" stroke-width="1"
              fill="var(--color-surface)" />
            <text x="200" y="238" text-anchor="middle" class="svg-label">AUTOMATION</text>
            <text x="200" y="251" text-anchor="middle" class="svg-sublabel">n8n · flows</text>
          </g>

          <!-- Node: AI Tooling -->
          <g class="svg-node" style="--delay: 250ms">
            <rect x="290" y="130" width="90" height="36" rx="2"
              stroke="var(--color-accent-green)" stroke-width="1"
              fill="var(--color-surface)" />
            <text x="335" y="144" text-anchor="middle" class="svg-label">AI TOOLING</text>
            <text x="335" y="157" text-anchor="middle" class="svg-sublabel">claude · llm</text>
          </g>

          <!-- Connector: CRM → API Gateway -->
          <path
            d="M110,148 L155,78"
            stroke="var(--color-accent-navy)" stroke-width="1"
            class="connector-path" style="--path-len: 120px; --delay: 50ms"
          />

          <!-- Connector: CRM → Data Store -->
          <path
            d="M110,148 L155,160"
            stroke="var(--color-grid-line)" stroke-width="1"
            class="connector-path" style="--path-len: 50px; --delay: 80ms"
          />

          <!-- Connector: CRM → Automation -->
          <path
            d="M110,155 L155,242"
            stroke="var(--color-grid-line)" stroke-width="1"
            class="connector-path" style="--path-len: 100px; --delay: 100ms"
          />

          <!-- Connector: Data Store → AI Tooling -->
          <path
            d="M245,160 L290,148"
            stroke="var(--color-accent-green)" stroke-width="1"
            class="connector-path" style="--path-len: 60px; --delay: 200ms"
          />

          <!-- Connector: API Gateway → AI Tooling -->
          <path
            d="M245,78 L290,140"
            stroke="var(--color-grid-line)" stroke-width="1"
            class="connector-path" style="--path-len: 80px; --delay: 150ms"
          />

          <!-- Small dots at connectors -->
          <circle cx="110" cy="148" r="2.5" fill="var(--color-accent-navy)" class="svg-node" style="--delay: 40ms" />
          <circle cx="245" cy="160" r="2.5" fill="var(--color-grid-line)" class="svg-node" style="--delay: 190ms" />
          <circle cx="245" cy="78" r="2.5" fill="var(--color-grid-line)" class="svg-node" style="--delay: 140ms" />
        </svg>
      </div>
    </div>
    </section>

    <NodeConnector height="80px" />

    <!-- ── Casos destacados ────────────────────────────────────── -->
    <section class="w-full py-16">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="02"
        :title="$t('home.cases.label')"
        class="mb-10"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlueprintCard
          v-for="(c, i) in cases"
          :key="i"
          tag="article"
          class="flex flex-col gap-4"
        >
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green">
            {{ c.eyebrow }}
          </span>
          <h3 class="font-sans font-semibold text-lead text-text-primary m-0">
            {{ $t(c.titleKey) }}
          </h3>
          <p class="font-sans text-caption text-text-muted m-0 line-clamp-3">
            {{ $t(c.problemKey) }}
          </p>
          <div class="mt-auto pt-2 border-t border-grid-line">
            <span class="font-mono text-caption text-text-muted">
              {{ $t(c.stackKey) }}
            </span>
          </div>
          <RouterLink
            to="/projects"
            class="font-mono text-caption tracking-eyebrow uppercase text-accent-navy hover:text-text-primary transition-colors no-underline self-start"
          >
            {{ $t('home.cases.viewCase') }} →
          </RouterLink>
        </BlueprintCard>
      </div>
    </div>
    </section>

    <NodeConnector height="80px" />

    <!-- ── Stack / Capacidades ────────────────────────────────── -->
    <section class="w-full py-16">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="03"
        :title="$t('stack.label')"
        class="mb-10"
      />

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="cat in stackCategories"
          :key="cat.labelKey"
          class="flex flex-col gap-2"
        >
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green border-b border-grid-line pb-1">
            {{ $t(cat.labelKey) }}
          </span>
          <ul class="list-none m-0 p-0 flex flex-col gap-1">
            <li
              v-for="item in $tm(cat.itemsKey)"
              :key="item"
              class="font-sans text-caption text-text-muted"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>

    <NodeConnector height="80px" />

    <!-- ── CTA final ───────────────────────────────────────────── -->
    <section class="w-full py-20">
    <div class="max-w-6xl mx-auto px-6">
      <div class="border border-grid-line p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div class="flex flex-col gap-2">
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green">
            CONTACTO
          </span>
          <p class="font-sans text-lead text-text-primary m-0 max-w-md">
            {{ $t('contact.text') }}
          </p>
        </div>
        <RouterLink
          to="/contact"
          class="font-mono text-caption tracking-eyebrow uppercase px-6 py-3 bg-accent-navy text-text-primary no-underline hover:bg-opacity-80 transition-colors shrink-0"
        >
          {{ $t('home.cta.contact') }} →
        </RouterLink>
      </div>
    </div>
    </section>

  </div>
</template>

<style scoped>
/* ── Ticker ─────────────────────────────────── */
.ticker-track {
  display: flex;
  white-space: nowrap;
  animation: ticker-scroll 40s linear infinite;
}

.ticker-item {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-eyebrow);
  color: var(--color-text-muted);
}

@keyframes ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .ticker-track { animation: none; }
}

/* ── Hero SVG ────────────────────────────────── */
.svg-label {
  font-family: var(--font-mono);
  font-size: 7px;
  font-weight: 500;
  fill: var(--color-text-primary);
  letter-spacing: 0.08em;
}

.svg-sublabel {
  font-family: var(--font-mono);
  font-size: 6px;
  fill: var(--color-text-muted);
}

.svg-node {
  opacity: 0;
  animation: fade-in 300ms ease-out forwards;
  animation-delay: var(--delay, 0ms);
}

.connector-path {
  stroke-dasharray: var(--path-len, 200px);
  stroke-dashoffset: var(--path-len, 200px);
  animation: draw-path 500ms ease-out forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes fade-in {
  to { opacity: 1; }
}

@keyframes draw-path {
  to { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .svg-node,
  .connector-path {
    animation: none;
    opacity: 1;
    stroke-dashoffset: 0;
  }
}

/* ── Case cards ─────────────────────────────── */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
