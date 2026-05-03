<template>
  <section id="experience" class="w-[90%] md:w-[80%] mx-auto mt-16 mb-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">Carreira</p>
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-3">{{ $t('experience.title') }}</h1>
      <div class="header-line"></div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
      <div
        v-for="(job, index) in experienceItems"
        :key="index"
        class="glass-card rounded-2xl p-5 group flex flex-col"
      >
        <!-- Badge atual -->
        <div v-if="job.current" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3">
          <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
          {{ $t('experience.current') }}
        </div>

        <!-- Header do job -->
        <div class="mb-4">
          <h3 class="text-base font-bold text-white mb-1 group-hover:text-teal-300 transition-colors duration-200">{{ job.role }}</h3>
          <p class="text-teal-400 font-semibold text-sm">{{ job.company }}</p>
          <div class="flex flex-col sm:flex-row sm:justify-between text-xs text-slate-500 mt-1.5 gap-0.5">
            <span v-if="job.location">{{ job.location }}</span>
            <span class="text-slate-400">{{ job.period }}</span>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider mb-4"></div>

        <!-- Descrição + Achievements (flex-grow empurra Tech para o fundo) -->
        <div class="flex-grow">
          <p class="text-slate-400 text-xs leading-relaxed mb-4">{{ job.description }}</p>

          <div v-if="job.achievements && job.achievements.length > 0">
            <h4 class="text-white/70 font-semibold mb-2 text-xs uppercase tracking-wider">{{ $t('experience.achievements') }}</h4>
            <ul class="space-y-1.5">
              <li
                v-for="achievement in job.achievements.slice(0, 2)"
                :key="achievement"
                class="text-slate-400 text-xs flex items-start gap-2"
              >
                <span class="text-teal-400 flex-shrink-0 mt-0.5">▸</span>
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Tech -->
        <div v-if="job.tech" class="tech-block pt-3 mt-4 border-t border-white/5">
          <p class="text-xs">
            <span class="text-slate-500 font-medium">{{ $t('experience.tech') }}</span>
            <span class="text-teal-400/80 ml-1.5">{{ job.tech }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const experienceItems = computed(() => tm('experience.items'))
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
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(20, 184, 166, 0.25);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 25px rgba(20, 184, 166, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(20, 184, 166, 0.4), rgba(59, 130, 246, 0.2), transparent);
}

.tech-block {
  min-height: 3rem;
}
</style>
