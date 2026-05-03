<template>
  <div id="projects" class="mt-16 px-4">
    <!-- Featured Projects -->
    <div class="w-full mb-14">
      <div class="section-header text-center mb-10">
        <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">Destaque</p>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Featured Projects</h2>
        <div class="header-line"></div>
      </div>
      <BaseCard :projects="featuredProjects" :featured="true" />
    </div>

    <!-- Other Projects -->
    <div class="w-full">
      <div class="section-header text-center mb-10">
        <p class="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-2">Portfólio</p>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Other Projects</h2>
        <div class="header-line"></div>
      </div>
      <BaseCard :projects="translatedProjects" :featured="false" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseCard from './BaseCard.vue'

const { tm } = useI18n()

const translatedProjects = computed(() => tm('projects'))
const featuredProjects = computed(() => tm('featuredProjects'))
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
</style>
