<template>
  <div id="projects" class="flex flex-wrap mt-10">
    <!-- Passa os projetos traduzidos para o BaseCard -->
    <BaseCard :projects="translatedProjects" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseCard from './BaseCard.vue';

const { tm, locale } = useI18n();

// Recalcula os projetos traduzidos sempre que o idioma atual muda
const translatedProjects = computed(() => tm('projects'));
</script>
