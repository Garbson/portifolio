<template>
  <section id="testimonials" class="w-[90%] md:w-[72%] mx-auto mt-10 mb-10 bg-blue-900 text-white p-6 rounded-lg">
    <h1 class="text-2xl md:text-3xl font-bold mb-6">{{ $t("testimonials.title") }}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(testimonial, index) in testimonialItems" :key="index"
           class="bg-blue-800 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="flex items-start">
          <div class="text-blue-300 text-6xl font-serif leading-none mr-2">"</div>
          <div>
            <p class="text-gray-200 italic">{{ testimonial.text }}</p>
            <div class="mt-4 text-right">
              <p class="font-semibold">{{ testimonial.name }}</p>
              <p class="text-blue-300 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, locale } = useI18n();



// Usar tm() para acessar corretamente os arrays de depoimentos
const testimonialItems = computed(() => tm('testimonials.items'));
</script>

<style scoped>
section {
  position: relative;
}
</style>