<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { locale } = useI18n()
const { theme, toggle: toggleTheme } = useTheme()

function changeLanguage() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}

const navLinks = [
  { key: 'nav.home', route: '/' },
  { key: 'nav.projects', route: '/projects' },
  { key: 'nav.about', route: '/about' },
  { key: 'nav.contact', route: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', icon: 'pi pi-linkedin', href: 'https://www.linkedin.com/in/mjmartel/', titleKey: 'sticky.linkedin' },
  { label: 'GitHub', icon: 'pi pi-github', href: 'https://github.com/D-Maledicte', titleKey: 'sticky.github' },
  { label: 'Mail', icon: 'pi pi-envelope', href: 'mailto:matiasjesusmartel@outlook.es', titleKey: 'sticky.email' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col bg-ink text-text-primary overflow-x-hidden">

    <!-- ── Nav ─────────────────────────────────────────────────── -->
    <nav class="sticky top-0 z-50 bg-ink border-b border-grid-line">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-6">

        <!-- Logo -->
        <RouterLink
          to="/"
          class="font-mono text-caption tracking-eyebrow uppercase text-text-primary hover:text-accent-navy transition-colors shrink-0"
        >
          DM_
        </RouterLink>

        <!-- Nav links (desktop) -->
        <ul class="hidden md:flex items-center gap-6 list-none m-0 p-0">
          <li v-for="link in navLinks" :key="link.route">
            <RouterLink
              :to="link.route"
              class="font-mono text-caption tracking-eyebrow uppercase text-text-muted hover:text-text-primary transition-colors no-underline"
              active-class="text-text-primary"
              exact-active-class="text-accent-navy"
            >
              {{ $t(link.key) }}
            </RouterLink>
          </li>
        </ul>

        <!-- Right controls -->
        <div class="flex items-center gap-4 shrink-0">
          <!-- Availability badge -->
          <span class="hidden lg:flex items-center gap-1.5 font-mono text-caption tracking-eyebrow uppercase text-accent-green">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-green inline-block"></span>
            {{ $t('nav.availability') }}
          </span>

          <!-- i18n toggle -->
          <button
            @click="changeLanguage"
            class="font-mono text-caption tracking-eyebrow uppercase text-text-muted hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
          >
            {{ locale === 'es' ? 'EN' : 'ES' }}
          </button>

          <!-- Dark/light toggle -->
          <button
            @click="toggleTheme"
            class="text-text-muted hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i :class="theme === 'dark' ? 'pi pi-sun' : 'pi pi-moon'" class="text-sm" />
          </button>
        </div>
      </div>
    </nav>

    <!-- ── Main content ───────────────────────────────────────── -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- ── Footer ─────────────────────────────────────────────── -->
    <footer class="border-t border-grid-line">
      <div class="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        <!-- Social links + mail -->
        <div class="flex flex-col gap-3">
          <span class="font-mono text-caption tracking-eyebrow uppercase text-text-muted">
            {{ $t('sticky.emailRef') }}
          </span>
          <a
            href="mailto:matiasjesusmartel@outlook.es"
            class="font-mono text-caption text-text-primary hover:text-accent-navy transition-colors no-underline"
          >
            matiasjesusmartel@outlook.es
          </a>
          <div class="flex items-center gap-4">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              :title="$t(link.titleKey)"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-muted hover:text-text-primary transition-colors no-underline"
            >
              <i :class="link.icon" class="text-base" />
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <span class="font-mono text-caption text-text-muted">
          DMaledicte © {{ $t('global.copyright') }}
        </span>
      </div>
    </footer>

  </div>
</template>
