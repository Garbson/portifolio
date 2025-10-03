<template>
  <section id="certificates" class="w-[90%] md:w-[72%] mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg">
    <h1 class="text-2xl md:text-3xl font-bold mb-6">{{ $t("certificates.title") }}</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(certificate, index) in certificateItems"
        :key="index"
        class="bg-blue-800 p-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <a
          :href="certificate.link"
          target="_blank"
          class="block h-full"
          :class="certificate.link === '#' ? 'pointer-events-none' : ''"
        >
          <h3 class="text-lg font-semibold text-blue-100 mb-2">{{ certificate.title }}</h3>
          <p class="text-blue-300 text-sm font-medium">{{ certificate.organization }}</p>
          <div v-if="certificate.link !== '#'" class="mt-2">
            <span class="inline-flex items-center text-xs text-blue-400 hover:text-blue-300">
              {{ $t('certificates.viewCertificate') }}
              <svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();

const certificateItems = computed(() => tm('certificates.items'));
</script>

<style scoped>
/* Estilize conforme necessário */
</style>
