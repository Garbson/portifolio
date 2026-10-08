<template>
  <div class="w-[90%] md:w-[80%] mx-auto mt-10">
    <div class="glass-card rounded-2xl p-6 md:p-8">
      <!-- Header -->
      <div class="flex items-center gap-3 mb-5">
        <div class="icon-dot w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></div>
        <h1 class="text-2xl md:text-3xl font-bold text-white">{{ $t('biography.title') }}</h1>
      </div>
      <div class="divider mb-5"></div>
      <p class="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">{{ biographyText }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const biographyText = computed(() => {
  const biography = tm('biography')
  return biography.description || 'Texto não encontrado'
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.07);
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(20, 184, 166, 0.6), rgba(59, 130, 246, 0.4), transparent);
}
</style>
