<template>
  <section id="certificates" class="w-[90%] md:w-[80%] mx-auto mt-16">
    <!-- Header -->
    <div class="text-center mb-10">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">{{ $t('ui.certificatesLabel') }}</p>
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-3">{{ $t('certificates.title') }}</h1>
      <div class="header-line"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(certificate, index) in certificateItems"
        :key="index"
        class="glass-card rounded-2xl p-5 group"
        :class="certificate.link !== '#' ? 'cursor-pointer' : ''"
      >
        <a
          :href="certificate.link"
          target="_blank"
          class="block h-full"
          :class="certificate.link === '#' ? 'pointer-events-none' : ''"
        >
          <!-- Ícone de certificado -->
          <div class="cert-icon w-8 h-8 rounded-lg flex items-center justify-center mb-3">
            <svg class="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>

          <h3 class="text-sm font-semibold text-white mb-1.5 group-hover:text-teal-300 transition-colors duration-200 leading-snug">
            {{ certificate.title }}
          </h3>
          <p class="text-teal-400/70 text-xs font-medium mb-3">{{ certificate.organization }}</p>

          <div v-if="certificate.link !== '#'" class="flex items-center gap-1 text-xs text-slate-500 group-hover:text-teal-400 transition-colors duration-200">
            <span>{{ $t('certificates.viewCertificate') }}</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const certificateItems = computed(() => tm('certificates.items'))
</script>

<style scoped>
.header-line {
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, #14b8a6, #3b82f6);
  border-radius: 2px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
}

.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(20, 184, 166, 0.25);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(20, 184, 166, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.cert-icon {
  background: rgba(20, 184, 166, 0.12);
  border: 1px solid rgba(20, 184, 166, 0.2);
}
</style>
