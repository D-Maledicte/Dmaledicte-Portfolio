<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/SectionHeader.vue'
import BlueprintCard from '@/components/BlueprintCard.vue'

const { t, tm } = useI18n()

const form = ref({ name: '', email: '', subject: '', message: '' })
const touched = ref({ name: false, email: false, subject: false, message: false })
const submitting = ref(false)
const notification = ref(null)

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const errors = computed(() => ({
  email: touched.value.email && !isValidEmail(form.value.email),
  message: touched.value.message && form.value.message.trim() === '',
}))

const onBlur = (field) => { touched.value[field] = true }

const subjects = computed(() => tm('contact.subjects'))

const showNotif = (type, text) => {
  notification.value = { type, text }
  setTimeout(() => { notification.value = null }, type === 'success' ? 4000 : 6000)
}

const submit = async () => {
  Object.keys(touched.value).forEach(k => { touched.value[k] = true })
  if (!isValidEmail(form.value.email) || !form.value.message.trim()) return

  submitting.value = true
  try {
    const res = await fetch('https://formspree.io/f/xdoqzjob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      }),
    })
    if (res.ok) {
      showNotif('success', t('contact.toast.success'))
      form.value = { name: '', email: '', subject: '', message: '' }
      Object.keys(touched.value).forEach(k => { touched.value[k] = false })
    } else {
      showNotif('error', t('contact.toast.error'))
    }
  } catch {
    showNotif('error', t('contact.toast.error'))
  } finally {
    submitting.value = false
  }
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mjmartel/' },
  { label: 'GitHub', href: 'https://github.com/D-Maledicte' },
  { label: 'Mail', href: 'mailto:matiasjesusmartel@outlook.es' },
]
</script>

<template>
  <div>

    <!-- ── Page header ────────────────────────────────────────── -->
    <section class="w-full pt-20 pb-10">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="04" :title="$t('contact.sectionLabel')" titleTag="h1" class="mb-4" />
        <p class="font-mono text-caption text-accent-green m-0">
          {{ $t('contact.availability') }}
        </p>
      </div>
    </section>

    <!-- ── Content ────────────────────────────────────────────── -->
    <section class="w-full pb-20">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">

        <!-- Form card -->
        <BlueprintCard>
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-6">
            // {{ $t('contact.text') }}
          </span>

          <form @submit.prevent="submit" novalidate class="flex flex-col gap-5">

            <!-- Name -->
            <div class="flex flex-col gap-1.5">
              <label for="ct-name" class="font-mono text-caption text-text-muted">
                {{ $t('contact.name') }}
              </label>
              <input
                id="ct-name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                class="bg-ink border border-grid-line text-text-primary font-sans text-body px-3 py-2 focus:border-accent-green focus:outline-none transition-colors"
              />
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-1.5">
              <label for="ct-email" class="font-mono text-caption text-text-muted">
                {{ $t('contact.email') }} *
              </label>
              <input
                id="ct-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                @blur="onBlur('email')"
                class="bg-ink text-text-primary font-sans text-body px-3 py-2 focus:outline-none transition-colors border"
                :class="errors.email ? 'border-red-500 focus:border-red-500' : 'border-grid-line focus:border-accent-green'"
              />
              <span v-if="errors.email" class="font-mono text-caption text-red-400">
                {{ $t('contact.fieldEmail') }}
              </span>
            </div>

            <!-- Subject -->
            <div class="flex flex-col gap-1.5">
              <label for="ct-subject" class="font-mono text-caption text-text-muted">
                {{ $t('contact.subject') }}
              </label>
              <select
                id="ct-subject"
                v-model="form.subject"
                class="bg-ink border border-grid-line text-text-primary font-mono text-caption px-3 py-2 focus:border-accent-green focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>{{ $t('contact.subjectPlaceholder') }}</option>
                <option v-for="s in subjects" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
              <label for="ct-message" class="font-mono text-caption text-text-muted">
                {{ $t('contact.message') }} *
              </label>
              <textarea
                id="ct-message"
                v-model="form.message"
                rows="5"
                @blur="onBlur('message')"
                :placeholder="$t('contact.placeholders.message')"
                class="bg-ink text-text-primary font-sans text-body px-3 py-2 focus:outline-none transition-colors resize-y border"
                :class="errors.message ? 'border-red-500 focus:border-red-500' : 'border-grid-line focus:border-accent-green'"
              />
              <span v-if="errors.message" class="font-mono text-caption text-red-400">
                {{ $t('contact.fieldRequired') }}
              </span>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="submitting"
              class="font-mono text-caption tracking-eyebrow uppercase px-5 py-2.5 bg-accent-green text-ink hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer border-none w-fit"
            >
              {{ submitting ? '...' : $t('contact.submit') }} →
            </button>

          </form>
        </BlueprintCard>

        <!-- Right: Social links -->
        <BlueprintCard>
          <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-4">
            // social
          </span>
          <div class="flex flex-col gap-3">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-caption text-text-muted hover:text-accent-green transition-colors no-underline"
            >
              {{ link.label }} →
            </a>
          </div>
        </BlueprintCard>

      </div>
    </section>

    <!-- ── Notification ───────────────────────────────────────── -->
    <Transition name="fade">
      <div
        v-if="notification"
        class="fixed bottom-6 right-6 z-50 max-w-sm border font-mono text-caption px-4 py-3 bg-surface"
        :class="notification.type === 'success' ? 'border-accent-green text-accent-green' : 'border-red-400 text-red-400'"
      >
        {{ notification.text }}
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
