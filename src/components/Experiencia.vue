<template>
  <section id="experience" class="w-[90%] md:w-[80%] mx-auto mt-16 mb-16">
    <!-- Header simples -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
        {{ $t("experience.title") }}
      </h1>
      <div class="w-16 h-0.5 bg-teal-400 mx-auto"></div>
    </div>
    
    <!-- Simple Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <div v-for="(job, index) in experienceItems" :key="index"
           class="bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700 hover:border-teal-400 transition-all duration-300">

        <!-- Current Badge -->
        <div v-if="job.current" class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500 text-white mb-2">
          <div class="w-2 h-2 bg-white rounded-full mr-1"></div>
          {{ $t('experience.current') }}
        </div>

        <!-- Header -->
        <div class="mb-3">
          <h3 class="text-base font-bold text-white mb-1">{{ job.role }}</h3>
          <p class="text-teal-300 font-semibold text-sm">{{ job.company }}</p>
          <div class="flex flex-col sm:flex-row sm:justify-between text-xs text-slate-400 mt-1">
            <span v-if="job.location">{{ job.location }}</span>
            <span>{{ job.period }}</span>
          </div>
        </div>

        <!-- Description -->
        <div class="text-slate-300 text-xs leading-relaxed mb-3">
          <p>{{ job.description }}</p>
        </div>

        <!-- Top 2 Achievements -->
        <div v-if="job.achievements && job.achievements.length > 0" class="mb-3">
          <h4 class="text-white font-semibold mb-1 text-xs">{{ $t('experience.achievements') }}</h4>
          <ul class="space-y-1">
            <li v-for="achievement in job.achievements.slice(0, 2)" :key="achievement"
                class="text-slate-300 text-xs flex items-start">
              <span class="text-teal-400 mr-1 flex-shrink-0 mt-0.5">•</span>
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div v-if="job.tech" class="pt-2 border-t border-slate-600">
          <p class="text-xs">
            <span class="text-slate-400 font-medium">{{ $t('experience.tech') }}</span>
            <span class="text-teal-300 ml-1">{{ job.tech }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, locale } = useI18n();



// Usar tm() para acessar corretamente os arrays de experiência
const experienceItems = computed(() => tm('experience.items'));
</script>

<style scoped>
/* Estilos customizados se necessário */
</style>