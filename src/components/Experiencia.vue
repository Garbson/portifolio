<template>
  <section id="experience" class="w-[90%] md:w-[72%] mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg" data-aos="fade-up">
    <h1 class="text-2xl md:text-3xl font-bold mb-6">{{ $t("experience.title") }}</h1>
    
    <div class="space-y-6">
      <div v-for="(job, index) in $t('experience.items')" :key="index" 
           class="job-item p-4 border-l-4 border-blue-500 bg-blue-800 rounded-r-lg hover:bg-blue-700 transition-all duration-300"
           data-aos="fade-left"
           :data-aos-delay="index * 100">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 class="text-xl font-bold">{{ job.role }}</h3>
          <span class="text-blue-300 text-sm md:text-base">{{ job.period }}</span>
        </div>
        <p class="text-lg text-blue-200 mt-1">{{ job.company }}</p>
        <p class="mt-2 text-gray-200">{{ job.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem lógica adicional necessária
</script>

<style scoped>
.job-item {
  transition: transform 0.3s ease;
}
.job-item:hover {
  transform: translateX(5px);
}
</style>