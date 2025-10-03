<template>
  <div id="projects" class="flex flex-wrap mt-10">
    <!-- Featured Projects Section -->
    <div class="w-full mb-12">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <div class="w-16 h-0.5 bg-teal-400 mx-auto"></div>
      </div>
      <BaseCard :projects="featuredProjects" :featured="true" />
    </div>

    <!-- Other Projects Section -->
    <div class="w-full">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Other Projects</h2>
        <div class="w-16 h-0.5 bg-teal-400 mx-auto"></div>
      </div>
      <BaseCard :projects="translatedProjects" :featured="false" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseCard from './BaseCard.vue';

const { tm, locale } = useI18n();

// Recalcula os projetos traduzidos sempre que o idioma atual muda
const translatedProjects = computed(() => tm('projects'));
const featuredProjects = computed(() => tm('featuredProjects'));
</script>
