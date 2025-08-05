<template>
  <section id="experience" class="w-[90%] md:w-[80%] mx-auto mt-16 mb-16">
    <!-- Header simples -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
        {{ $t("experience.title") }}
      </h1>
      <div class="w-16 h-0.5 bg-teal-400 mx-auto"></div>
    </div>
    
    <!-- Timeline Container -->
    <div class="relative max-w-4xl mx-auto">
      <!-- Timeline Line -->
      <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-400 md:transform md:-translate-x-1/2"></div>
      
      <div class="space-y-8">
        <div v-for="(job, index) in experienceItems" :key="index" 
             class="timeline-item relative"
             :class="index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'">
          
          <!-- Timeline Dot -->
          <div class="absolute left-3 md:left-1/2 w-3 h-3 transform -translate-x-1/2 z-10">
            <div class="w-full h-full rounded-full border-2 border-white shadow-lg"
                 :class="job.current ? 'bg-green-500' : 'bg-teal-400'">
            </div>
          </div>
          
          <!-- Job Card -->
          <div class="job-card ml-10 md:ml-0 max-w-md md:max-w-sm">
            <!-- Connecting line para desktop -->
            <div class="hidden md:block absolute top-6 w-6 h-0.5 bg-teal-400"
                 :class="index % 2 === 0 ? 'right-0' : 'left-0'"></div>
            
            <!-- Card principal -->
            <div class="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-teal-400 transition-all duration-300">
              
              <!-- Current Badge -->
              <div v-if="job.current" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500 text-white mb-3">
                <div class="w-2 h-2 bg-white rounded-full mr-2"></div>
                Atual
              </div>
              
              <!-- Header -->
              <div class="mb-4">
                <h3 class="text-lg font-bold text-white mb-1">{{ job.role }}</h3>
                <p class="text-teal-300 font-semibold">{{ job.company }}</p>
                <p v-if="job.location" class="text-slate-400 text-sm mt-1">{{ job.location }}</p>
                <p class="text-slate-400 text-sm mt-1">{{ job.period }}</p>
              </div>
              
              <!-- Description -->
              <div class="text-slate-300 text-sm leading-relaxed">
                <p>{{ job.description }}</p>
              </div>
            </div>
          </div>
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
.timeline-item {
  position: relative;
}

.job-card {
  position: relative;
}

/* Desktop layout */
@media (min-width: 768px) {
  .timeline-item:nth-child(even) .job-card {
    margin-right: 0;
    margin-left: auto;
  }
  
  .timeline-item:nth-child(odd) .job-card {
    margin-left: 0;
    margin-right: auto;
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .timeline-item {
    text-align: left !important;
  }
  
  .job-card {
    margin-left: 2.5rem !important;
    max-width: calc(100% - 2.5rem) !important;
  }
}
</style>