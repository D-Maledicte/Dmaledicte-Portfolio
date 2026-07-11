<script setup>
import { useI18n } from 'vue-i18n'
import BlueprintCard from '@/components/BlueprintCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import NodeConnector from '@/components/NodeConnector.vue'

const { t, tm } = useI18n()

const cases = [
  {
    num: '01',
    eyebrow: 'CASO 01 — READ MODEL MULTI-TENANT',
    contextKey: 'cases.case1.context',
    titleKey: 'cases.case1.title',
    problemKey: 'cases.case1.problem',
    approachKey: 'cases.case1.approach',
    impactKey: 'cases.case1.impact',
    stackKey: 'cases.case1.stack',
  },
  {
    num: '02',
    eyebrow: 'CASO 02 — MIGRACIÓN SAAS → SELF-HOSTED',
    contextKey: 'cases.case2.context',
    titleKey: 'cases.case2.title',
    problemKey: 'cases.case2.problem',
    approachKey: 'cases.case2.approach',
    impactKey: 'cases.case2.impact',
    stackKey: 'cases.case2.stack',
  },
  {
    num: '03',
    eyebrow: 'CASO 03 — IA TOOLING INTERNO',
    contextKey: 'cases.case3.context',
    titleKey: 'cases.case3.title',
    problemKey: 'cases.case3.problem',
    approachKey: 'cases.case3.approach',
    impactKey: 'cases.case3.impact',
    stackKey: 'cases.case3.stack',
  },
]
</script>

<template>
  <div>

    <!-- ── Intro ──────────────────────────────────────────────── -->
    <section class="w-full pt-20 pb-10">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="01" :title="$t('cases.sectionLabel')" class="mb-4" />
        <p class="font-sans text-body text-text-muted m-0 max-w-xl leading-relaxed">
          {{ $t('projects.intro') }}
        </p>
      </div>
    </section>

    <!-- ── Casos de estudio ───────────────────────────────────── -->
    <section class="w-full pb-20">
      <div class="max-w-6xl mx-auto px-6 flex flex-col gap-8">

        <!-- ─ Caso 1 ─────────────────────────────────────────── -->
        <BlueprintCard tag="article">
          <!-- Header -->
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green">
            {{ cases[0].eyebrow }}
          </span>
          <h2 class="font-sans font-semibold text-lead text-text-primary mt-2 mb-1">
            {{ $t(cases[0].titleKey) }}
          </h2>
          <p class="font-mono text-caption text-text-muted m-0 mb-6">
            {{ $t(cases[0].contextKey) }}
          </p>

          <!-- Body: text + diagram -->
          <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">

            <!-- Sections -->
            <div class="flex flex-col gap-6">
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.problem') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[0].problemKey) }}
                </p>
              </div>
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.approach') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[0].approachKey) }}
                </p>
              </div>
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.impact') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[0].impactKey) }}
                </p>
              </div>
            </div>

            <!-- Diagram Case 1: CQRS topology -->
            <div class="flex items-start justify-center pt-2">
              <svg
                viewBox="0 0 380 210"
                class="w-full max-w-sm case-diagram"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="dots-c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="var(--color-grid-line)" />
                  </pattern>
                </defs>
                <rect width="380" height="210" fill="url(#dots-c1)" opacity="0.4" />

                <!-- CRM -->
                <g class="svg-node" style="--delay: 0ms">
                  <rect x="10" y="82" width="80" height="36" rx="2"
                    stroke="var(--color-accent-navy)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="50" y="97" text-anchor="middle" class="svg-label">CRM</text>
                  <text x="50" y="109" text-anchor="middle" class="svg-sublabel">system of record</text>
                </g>

                <!-- DATA STORE -->
                <g class="svg-node" style="--delay: 120ms">
                  <rect x="148" y="82" width="84" height="36" rx="2"
                    stroke="var(--color-grid-line)" stroke-width="1.5"
                    fill="var(--color-surface)" />
                  <text x="190" y="97" text-anchor="middle" class="svg-label">DATA STORE</text>
                  <text x="190" y="109" text-anchor="middle" class="svg-sublabel">read model · tenant id</text>
                </g>

                <!-- API GATEWAY -->
                <g class="svg-node" style="--delay: 200ms">
                  <rect x="282" y="58" width="88" height="36" rx="2"
                    stroke="var(--color-accent-green)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="326" y="73" text-anchor="middle" class="svg-label">API GATEWAY</text>
                  <text x="326" y="85" text-anchor="middle" class="svg-sublabel">borde externo</text>
                </g>

                <!-- PORTAL -->
                <g class="svg-node" style="--delay: 300ms">
                  <rect x="282" y="122" width="88" height="28" rx="2"
                    stroke="var(--color-grid-line)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="326" y="138" text-anchor="middle" class="svg-label">PORTAL</text>
                  <text x="326" y="148" text-anchor="middle" class="svg-sublabel" style="font-size: 5px">externo</text>
                </g>

                <!-- AGENTE -->
                <g class="svg-node" style="--delay: 360ms">
                  <rect x="282" y="164" width="88" height="28" rx="2"
                    stroke="var(--color-grid-line)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="326" y="180" text-anchor="middle" class="svg-label">AGENTE</text>
                  <text x="326" y="190" text-anchor="middle" class="svg-sublabel" style="font-size: 5px">analítico</text>
                </g>

                <!-- Connector: CRM → DATA STORE -->
                <path d="M90,100 L148,100"
                  stroke="var(--color-accent-navy)" stroke-width="1"
                  class="connector-path" style="--path-len: 58px; --delay: 60ms" />

                <!-- Connector: DATA STORE → API GW -->
                <path d="M232,99 L282,76"
                  stroke="var(--color-grid-line)" stroke-width="1"
                  class="connector-path" style="--path-len: 56px; --delay: 170ms" />

                <!-- Connector: API GW → PORTAL -->
                <path d="M326,94 L326,122"
                  stroke="var(--color-grid-line)" stroke-width="1"
                  class="connector-path" style="--path-len: 28px; --delay: 260ms" />

                <!-- Connector: PORTAL → AGENTE -->
                <path d="M326,150 L326,164"
                  stroke="var(--color-grid-line)" stroke-width="1"
                  class="connector-path" style="--path-len: 14px; --delay: 340ms" />

                <!-- Dots -->
                <circle cx="90" cy="100" r="2.5" fill="var(--color-accent-navy)"
                  class="svg-node" style="--delay: 50ms" />
                <circle cx="232" cy="99" r="2.5" fill="var(--color-grid-line)"
                  class="svg-node" style="--delay: 160ms" />
                <circle cx="326" cy="94" r="2.5" fill="var(--color-accent-green)"
                  class="svg-node" style="--delay: 250ms" />
              </svg>
            </div>
          </div>

          <!-- Footer -->
          <div class="mt-6 pt-4 border-t border-grid-line flex flex-wrap items-start justify-between gap-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in $t(cases[0].stackKey).split(' · ')"
                :key="tech"
                class="font-mono text-caption text-text-muted border border-grid-line px-2 py-0.5 rounded-sm"
              >{{ tech }}</span>
            </div>
            <span class="font-mono text-caption text-text-muted italic shrink-0">
              {{ $t('cases.callToAction') }}
            </span>
          </div>
        </BlueprintCard>

        <!-- ─ Caso 2 ─────────────────────────────────────────── -->
        <BlueprintCard tag="article">
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green">
            {{ cases[1].eyebrow }}
          </span>
          <h2 class="font-sans font-semibold text-lead text-text-primary mt-2 mb-1">
            {{ $t(cases[1].titleKey) }}
          </h2>
          <p class="font-mono text-caption text-text-muted m-0 mb-6">
            {{ $t(cases[1].contextKey) }}
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
            <div class="flex flex-col gap-6">
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.problem') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[1].problemKey) }}
                </p>
              </div>
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.approach') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[1].approachKey) }}
                </p>
              </div>
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.impact') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[1].impactKey) }}
                </p>
              </div>
            </div>

            <!-- Diagram Case 2: Migration hub topology -->
            <div class="flex items-start justify-center pt-2">
              <svg
                viewBox="0 0 400 210"
                class="w-full max-w-sm case-diagram"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="dots-c2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="var(--color-grid-line)" />
                  </pattern>
                </defs>
                <rect width="400" height="210" fill="url(#dots-c2)" opacity="0.4" />

                <!-- OLD SAAS (deprecated) -->
                <g class="svg-node" style="--delay: 0ms">
                  <rect x="155" y="10" width="76" height="28" rx="2"
                    stroke="var(--color-text-muted)" stroke-width="1" stroke-dasharray="4 2"
                    fill="var(--color-surface)" opacity="0.7" />
                  <text x="193" y="22" text-anchor="middle" class="svg-label" style="fill: var(--color-text-muted)">OLD SAAS</text>
                  <text x="193" y="33" text-anchor="middle" class="svg-sublabel">reemplazado</text>
                </g>

                <!-- n8n (center) -->
                <g class="svg-node" style="--delay: 100ms">
                  <rect x="154" y="92" width="78" height="36" rx="2"
                    stroke="var(--color-accent-navy)" stroke-width="1.5"
                    fill="var(--color-surface)" />
                  <text x="193" y="107" text-anchor="middle" class="svg-label">n8n</text>
                  <text x="193" y="119" text-anchor="middle" class="svg-sublabel">self-hosted</text>
                </g>

                <!-- LLM / OpenAI -->
                <g class="svg-node" style="--delay: 180ms">
                  <rect x="14" y="50" width="78" height="30" rx="2"
                    stroke="var(--color-accent-green)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="53" y="63" text-anchor="middle" class="svg-label">LLM / NLP</text>
                  <text x="53" y="74" text-anchor="middle" class="svg-sublabel">openai api</text>
                </g>

                <!-- Zoho CRM -->
                <g class="svg-node" style="--delay: 220ms">
                  <rect x="14" y="100" width="78" height="30" rx="2"
                    stroke="var(--color-accent-navy)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="53" y="113" text-anchor="middle" class="svg-label">ZOHO CRM</text>
                  <text x="53" y="124" text-anchor="middle" class="svg-sublabel">system of record</text>
                </g>

                <!-- Zoho Books -->
                <g class="svg-node" style="--delay: 260ms">
                  <rect x="14" y="154" width="78" height="28" rx="2"
                    stroke="var(--color-grid-line)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="53" y="168" text-anchor="middle" class="svg-label">ZOHO BOOKS</text>
                  <text x="53" y="178" text-anchor="middle" class="svg-sublabel">facturación</text>
                </g>

                <!-- AR FISCAL API -->
                <g class="svg-node" style="--delay: 300ms">
                  <rect x="292" y="80" width="88" height="30" rx="2"
                    stroke="var(--color-grid-line)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="336" y="93" text-anchor="middle" class="svg-label">AR FISCAL</text>
                  <text x="336" y="104" text-anchor="middle" class="svg-sublabel">apis fiscales</text>
                </g>

                <!-- Connector: OLD SAAS → n8n (migration) -->
                <path d="M193,38 L193,92"
                  stroke="var(--color-text-muted)" stroke-width="1" stroke-dasharray="4 3"
                  class="connector-path" style="--path-len: 54px; --delay: 50ms" />

                <!-- Connector: LLM → n8n -->
                <path d="M92,65 L154,105"
                  stroke="var(--color-accent-green)" stroke-width="1"
                  class="connector-path" style="--path-len: 75px; --delay: 150ms" />

                <!-- Connector: Zoho CRM → n8n -->
                <path d="M92,115 L154,113"
                  stroke="var(--color-accent-navy)" stroke-width="1"
                  class="connector-path" style="--path-len: 62px; --delay: 190ms" />

                <!-- Connector: Zoho Books → n8n -->
                <path d="M92,168 L154,117"
                  stroke="var(--color-grid-line)" stroke-width="1"
                  class="connector-path" style="--path-len: 85px; --delay: 230ms" />

                <!-- Connector: n8n → AR FISCAL -->
                <path d="M232,110 L292,95"
                  stroke="var(--color-grid-line)" stroke-width="1"
                  class="connector-path" style="--path-len: 62px; --delay: 270ms" />

                <!-- Dots -->
                <circle cx="193" cy="38" r="2" fill="var(--color-text-muted)"
                  class="svg-node" style="--delay: 40ms" />
                <circle cx="92" cy="65" r="2.5" fill="var(--color-accent-green)"
                  class="svg-node" style="--delay: 140ms" />
                <circle cx="92" cy="115" r="2.5" fill="var(--color-accent-navy)"
                  class="svg-node" style="--delay: 180ms" />
                <circle cx="92" cy="168" r="2.5" fill="var(--color-grid-line)"
                  class="svg-node" style="--delay: 220ms" />
                <circle cx="232" cy="110" r="2.5" fill="var(--color-grid-line)"
                  class="svg-node" style="--delay: 260ms" />
              </svg>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-grid-line flex flex-wrap items-start justify-between gap-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in $t(cases[1].stackKey).split(' · ')"
                :key="tech"
                class="font-mono text-caption text-text-muted border border-grid-line px-2 py-0.5 rounded-sm"
              >{{ tech }}</span>
            </div>
            <span class="font-mono text-caption text-text-muted italic shrink-0">
              {{ $t('cases.callToAction') }}
            </span>
          </div>
        </BlueprintCard>

        <!-- ─ Caso 3 ─────────────────────────────────────────── -->
        <BlueprintCard tag="article">
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green">
            {{ cases[2].eyebrow }}
          </span>
          <h2 class="font-sans font-semibold text-lead text-text-primary mt-2 mb-1">
            {{ $t(cases[2].titleKey) }}
          </h2>
          <p class="font-mono text-caption text-text-muted m-0 mb-6">
            {{ $t(cases[2].contextKey) }}
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
            <div class="flex flex-col gap-6">
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.problem') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[2].problemKey) }}
                </p>
              </div>
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.approach') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[2].approachKey) }}
                </p>
              </div>
              <div>
                <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-2">
                  // {{ $t('cases.labels.impact') }}
                </span>
                <p class="font-sans text-body text-text-muted m-0 leading-relaxed">
                  {{ $t(cases[2].impactKey) }}
                </p>
              </div>
            </div>

            <!-- Diagram Case 3: AI pipeline with 2 branches -->
            <div class="flex items-start justify-center pt-2">
              <svg
                viewBox="0 0 380 200"
                class="w-full max-w-sm case-diagram"
                aria-hidden="true"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="dots-c3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.8" fill="var(--color-grid-line)" />
                  </pattern>
                </defs>
                <rect width="380" height="200" fill="url(#dots-c3)" opacity="0.4" />

                <!-- CRM -->
                <g class="svg-node" style="--delay: 0ms">
                  <rect x="10" y="82" width="72" height="36" rx="2"
                    stroke="var(--color-accent-navy)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="46" y="97" text-anchor="middle" class="svg-label">CRM</text>
                  <text x="46" y="109" text-anchor="middle" class="svg-sublabel">COQL queries</text>
                </g>

                <!-- PYTHON -->
                <g class="svg-node" style="--delay: 100ms">
                  <rect x="138" y="82" width="72" height="36" rx="2"
                    stroke="var(--color-grid-line)" stroke-width="1.5"
                    fill="var(--color-surface)" />
                  <text x="174" y="97" text-anchor="middle" class="svg-label">PYTHON</text>
                  <text x="174" y="109" text-anchor="middle" class="svg-sublabel">análisis</text>
                </g>

                <!-- SOPORTE skill -->
                <g class="svg-node" style="--delay: 200ms">
                  <rect x="270" y="52" width="90" height="32" rx="2"
                    stroke="var(--color-accent-green)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="315" y="66" text-anchor="middle" class="svg-label">SOPORTE</text>
                  <text x="315" y="77" text-anchor="middle" class="svg-sublabel">skill · 3 niveles</text>
                </g>

                <!-- REPORTING skill -->
                <g class="svg-node" style="--delay: 240ms">
                  <rect x="270" y="116" width="90" height="32" rx="2"
                    stroke="var(--color-accent-green)" stroke-width="1"
                    fill="var(--color-surface)" />
                  <text x="315" y="130" text-anchor="middle" class="svg-label">REPORTING</text>
                  <text x="315" y="141" text-anchor="middle" class="svg-sublabel">skill · PDF</text>
                </g>

                <!-- CLAUDE label annotation -->
                <text x="315" y="108" text-anchor="middle" class="svg-sublabel svg-node" style="--delay: 280ms; fill: var(--color-accent-green); font-size: 5.5px; letter-spacing: 0.1em">CLAUDE API</text>

                <!-- Connector: CRM → PYTHON -->
                <path d="M82,100 L138,100"
                  stroke="var(--color-accent-navy)" stroke-width="1"
                  class="connector-path" style="--path-len: 56px; --delay: 60ms" />

                <!-- Connector: PYTHON → SOPORTE (fork up) -->
                <path d="M210,98 L270,68"
                  stroke="var(--color-accent-green)" stroke-width="1"
                  class="connector-path" style="--path-len: 68px; --delay: 160ms" />

                <!-- Connector: PYTHON → REPORTING (fork down) -->
                <path d="M210,102 L270,132"
                  stroke="var(--color-accent-green)" stroke-width="1"
                  class="connector-path" style="--path-len: 68px; --delay: 200ms" />

                <!-- Dots -->
                <circle cx="82" cy="100" r="2.5" fill="var(--color-accent-navy)"
                  class="svg-node" style="--delay: 50ms" />
                <circle cx="210" cy="100" r="3" fill="var(--color-accent-green)"
                  class="svg-node" style="--delay: 150ms" />
              </svg>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-grid-line flex flex-wrap items-start justify-between gap-4">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in $t(cases[2].stackKey).split(' · ')"
                :key="tech"
                class="font-mono text-caption text-text-muted border border-grid-line px-2 py-0.5 rounded-sm"
              >{{ tech }}</span>
            </div>
            <span class="font-mono text-caption text-text-muted italic shrink-0">
              {{ $t('cases.callToAction') }}
            </span>
          </div>
        </BlueprintCard>

      </div>
    </section>

    <NodeConnector height="80px" />

    <!-- ── Otros proyectos ────────────────────────────────────── -->
    <section class="w-full py-16">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="02" :title="$t('projects.secondary.sectionLabel')" class="mb-8" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BlueprintCard
            v-for="(item, i) in tm('projects.secondary.items')"
            :key="i"
            tag="article"
            class="flex flex-col gap-3"
          >
            <h3 class="font-mono text-caption tracking-eyebrow uppercase text-text-primary m-0">
              {{ item.title }}
            </h3>
            <p class="font-sans text-caption text-text-muted m-0 leading-relaxed flex-1">
              {{ item.description }}
            </p>
            <div class="pt-2 border-t border-grid-line">
              <span class="font-mono text-caption text-text-muted opacity-70">{{ item.stack }}</span>
            </div>
          </BlueprintCard>
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
            class="font-mono text-caption tracking-eyebrow uppercase px-6 py-3 bg-accent-navy text-text-primary no-underline hover:opacity-90 transition-opacity shrink-0"
          >
            {{ $t('home.cta.contact') }} →
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
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
</style>
