<template>
  <section id="skills" class="w-[90%] md:w-[72%] mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
    <h1 class="text-2xl md:text-3xl font-bold mb-6">{{ $t("skills.title") }}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="(category, index) in $t('skills.categories')" :key="index" class="skill-category" 
           :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" 
           :data-aos-delay="index * 100">
        <h2 class="text-xl font-semibold mb-3">{{ category.name }}</h2>
        <div class="space-y-4">
          <div v-for="(skill, skillIndex) in category.items" :key="skill.name" class="skill-item"
               data-aos="fade-up" :data-aos-delay="skillIndex * 50">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center">
                <div v-if="skill.icon" class="skill-icon-container mr-2 relative">
                  <img :src="`src/assets/img/${skill.icon}`" :alt="skill.name" class="w-6 h-6 object-contain" />
                  <div class="skill-tooltip" v-if="skill.description">{{ skill.description }}</div>
                </div>
                <span class="font-medium">{{ skill.name }}</span>
              </div>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5">
              <div class="bg-blue-500 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem lógica adicional necessária
</script>

<style scoped>
.skill-item {
  transition: transform 0.3s ease;
}
.skill-item:hover {
  transform: translateX(5px);
}

.skill-icon-container {
  position: relative;
  display: inline-block;
}

.skill-tooltip {
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 10;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  width: max-content;
  max-width: 220px;
  font-size: 0.8rem;
  pointer-events: none;
}

.skill-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

.skill-icon-container:hover .skill-tooltip {
  visibility: visible;
  opacity: 1;
}
</style>