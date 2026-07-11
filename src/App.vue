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
  { num: '01', key: 'nav.home', route: '/' },
  { num: '02', key: 'nav.about', route: '/about' },
  { num: '03', key: 'nav.projects', route: '/projects' },
  { num: '04', key: 'nav.contact', route: '/contact' },
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
          class="font-mono text-body font-semibold text-text-primary hover:text-accent-green transition-colors no-underline shrink-0"
        >
          dmaledicte<span class="text-accent-green">.cloud</span>
        </RouterLink>

        <!-- Right: nav links + controls -->
        <div class="flex items-center gap-6">

          <!-- Nav links (desktop) -->
          <ul class="hidden md:flex items-center gap-6 list-none m-0 p-0">
            <li v-for="link in navLinks" :key="link.route">
              <RouterLink
                :to="link.route"
                class="font-mono text-caption text-text-muted hover:text-accent-green transition-colors no-underline nav-link"
                exact-active-class="nav-link--active"
              >
                <span class="text-accent-green">{{ link.num }}</span>
                {{ ' ' + $t(link.key) }}
              </RouterLink>
            </li>
          </ul>

          <!-- Lang toggle pill -->
          <div class="flex items-center font-mono text-caption border border-grid-line" role="group">
            <button
              @click="locale !== 'es' && changeLanguage()"
              class="px-2 py-1 transition-colors cursor-pointer border-none"
              :class="locale === 'es' ? 'bg-accent-green text-ink' : 'bg-transparent text-text-muted hover:text-text-primary'"
              aria-label="Español"
            >ES</button>
            <button
              @click="locale !== 'en' && changeLanguage()"
              class="px-2 py-1 transition-colors cursor-pointer border-none"
              :class="locale === 'en' ? 'bg-accent-green text-ink' : 'bg-transparent text-text-muted hover:text-text-primary'"
              aria-label="English"
            >EN</button>
          </div>

          <!-- Dark/light toggle -->
          <button
            @click="toggleTheme"
            class="text-text-muted hover:text-accent-green transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center"
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

<style scoped>
.nav-link--active {
  color: var(--color-text-primary);
}
</style>
