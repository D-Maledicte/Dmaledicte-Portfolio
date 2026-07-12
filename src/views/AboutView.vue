<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeader from '@/components/SectionHeader.vue'
import BlueprintCard from '@/components/BlueprintCard.vue'

const { t, locale } = useI18n()

const cvLang = ref(locale.value === 'en' ? 'en' : 'es')
const cvNotif = ref(null)

const cvUrls = {
  es: 'https://drive.google.com/uc?export=download&id=16TwAOyM6ok0juN5A7xPzMX-5dj5kKeFi',
  en: 'https://drive.google.com/uc?export=download&id=1m1s0o3PppvbaQPs1MP_I_KW2_DteIonX',
}

const downloadCv = () => {
  const link = document.createElement('a')
  link.href = cvUrls[cvLang.value]
  link.download = 'CV-Matias-Martel'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  cvNotif.value = t('global.cvDownloaded')
  setTimeout(() => { cvNotif.value = null }, 3000)
}

const certifications = [
  { label: 'C1 English (EF SET)', href: 'https://drive.google.com/file/d/1YE4yaRTXBOxHDmuf8N8gGAhkazjZe0_H/view?usp=drive_link' },
  { label: 'Codo a Codo 4.0', href: 'https://drive.google.com/file/d/1ESKR5uua_67qhPD4PZyP29Gx_URMUD8R/view?usp=drive_link' },
  { label: 'Platzi', href: 'https://www.linkedin.com/in/mjmartel/details/certifications/' },
]
</script>

<template>
  <div>

    <!-- ── Page header ────────────────────────────────────────── -->
    <section class="w-full pt-20 pb-10">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="02" :title="$t('about.sectionLabel')" titleTag="h1" class="mb-4" />
        <p class="font-mono text-caption text-accent-green m-0">
          {{ $t('about.availability') }}
        </p>
      </div>
    </section>

    <!-- ── Content ────────────────────────────────────────────── -->
    <section class="w-full pb-20">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">

        <!-- Left: Bio + Certifications -->
        <div class="flex flex-col gap-6">

          <!-- Bio -->
          <BlueprintCard>
            <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-4">
              // bio
            </span>
            <div class="flex flex-col gap-4">
              <p class="font-sans text-body text-text-primary m-0 leading-relaxed">{{ $t('about.bio.p1') }}</p>
              <p class="font-sans text-body text-text-muted m-0 leading-relaxed">{{ $t('about.bio.p2') }}</p>
              <p class="font-sans text-body text-text-muted m-0 leading-relaxed">{{ $t('about.bio.p3') }}</p>
            </div>
          </BlueprintCard>

          <!-- Certifications -->
          <BlueprintCard>
            <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-4">
              // {{ $t('about.certifications.label') }}
            </span>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="cert in certifications"
                :key="cert.label"
                :href="cert.href"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-caption text-text-muted border border-grid-line px-3 py-1.5 hover:border-accent-green hover:text-text-primary transition-colors no-underline"
              >
                {{ cert.label }}
              </a>
            </div>
          </BlueprintCard>

        </div>

        <!-- Right: Photo placeholder + CV -->
        <div class="flex flex-col gap-6">

          <!-- Photo placeholder -->
          <BlueprintCard>
            <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-4">
              // {{ $t('about.photoLabel') }}
            </span>
            <div class="w-full aspect-square bg-ink border border-grid-line flex items-center justify-center">
              <span class="font-mono text-caption text-text-muted text-center px-4 leading-relaxed">
                [ foto próximamente ]
              </span>
            </div>
          </BlueprintCard>

          <!-- CV Download -->
          <BlueprintCard>
            <span class="font-mono text-caption tracking-eyebrow uppercase text-accent-green block mb-4">
              // cv
            </span>
            <div class="flex flex-col gap-3">

              <!-- Lang toggle -->
              <div class="flex border border-grid-line w-fit">
                <button
                  @click="cvLang = 'es'"
                  class="font-mono text-caption px-4 py-2 transition-colors cursor-pointer border-none"
                  :class="cvLang === 'es' ? 'bg-accent-navy text-text-primary' : 'bg-transparent text-text-muted hover:text-text-primary'"
                >
                  ES
                </button>
                <button
                  @click="cvLang = 'en'"
                  class="font-mono text-caption px-4 py-2 transition-colors cursor-pointer border-none"
                  :class="cvLang === 'en' ? 'bg-accent-navy text-text-primary' : 'bg-transparent text-text-muted hover:text-text-primary'"
                >
                  EN
                </button>
              </div>

              <!-- Download button -->
              <button
                @click="downloadCv"
                class="font-mono text-caption tracking-eyebrow uppercase px-5 py-2.5 border border-grid-line text-text-muted hover:border-accent-green hover:text-text-primary transition-colors text-left cursor-pointer bg-transparent w-full"
              >
                {{ $t('global.downloadCv') }} →
              </button>

              <!-- Inline confirmation -->
              <Transition name="fade">
                <span v-if="cvNotif" class="font-mono text-caption text-accent-green">
                  ✓ {{ cvNotif }}
                </span>
              </Transition>

            </div>
          </BlueprintCard>

        </div>

      </div>
    </section>

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
