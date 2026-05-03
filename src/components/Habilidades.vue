<template>
  <section id="skills" class="w-[90%] md:w-[72%] mx-auto mt-16">
    <!-- Header -->
    <div class="text-center mb-10">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">Tecnologias</p>
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-3">{{ $t('skills.title') }}</h1>
      <div class="header-line"></div>
    </div>

    <div class="glass-wrap rounded-2xl p-6 md:p-8">
      <div class="skills-container">
        <div v-for="category in skillCategories" :key="category.name" class="mb-8 last:mb-0">
          <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center mb-5">{{ category.name }}</h2>
          <div class="floating-skills-container">
            <div
              v-for="(skill, index) in filteredSkills(category.items)"
              :key="skill.name"
              class="floating-skill"
              :class="`animation-delay-${index % 5}`"
            >
              <div class="skill-content" ref="skillElements">
                <img :src="getImageUrl(skill.icon)" :alt="skill.name" class="skill-icon" />
                <div v-if="skill.name === activeTooltip?.name" class="icon-tooltip">
                  <div class="tooltip-title">{{ skill.name }}</div>
                  <div v-if="skill.description" class="tooltip-description">{{ skill.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, locale } = useI18n()

const skillCategories = computed(() => tm('skills.categories'))

const getImageUrl = (icon) => {
  return new URL(`../assets/img/${icon}`, import.meta.url).href
}

const filteredSkills = (skills) => {
  return skills.filter((skill) => skill.icon)
}

const activeTooltip = ref(null)

const handleMouseEnter = (e) => {
  const imgElement = e.currentTarget.querySelector('img')
  if (imgElement) {
    const skillName = imgElement.getAttribute('alt')
    for (const category of skillCategories.value) {
      const skill = category.items.find((item) => item.name === skillName)
      if (skill) {
        activeTooltip.value = skill
        break
      }
    }
  }
}

const handleMouseLeave = () => {
  activeTooltip.value = null
}

const setupTooltipEvents = () => {
  setTimeout(() => {
    const skillContents = document.querySelectorAll('.skill-content')
    skillContents.forEach((element) => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })
  }, 50)
}

watch(() => locale.value, setupTooltipEvents)
onMounted(setupTooltipEvents)
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

.glass-wrap {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.floating-skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
}

.floating-skill {
  width: 76px;
  height: 76px;
  animation: float 4s ease-in-out infinite;
  position: relative;
}

.animation-delay-0 { animation-delay: 0s; }
.animation-delay-1 { animation-delay: 0.6s; }
.animation-delay-2 { animation-delay: 1.2s; }
.animation-delay-3 { animation-delay: 1.8s; }
.animation-delay-4 { animation-delay: 2.4s; }

.skill-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
}

.floating-skill:hover .skill-content {
  transform: scale(1.15);
  background: rgba(20, 184, 166, 0.15);
  border-color: rgba(20, 184, 166, 0.4);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(20, 184, 166, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.skill-icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 3px;
  transition: transform 0.3s ease;
}

.icon-tooltip {
  position: absolute;
  top: -75px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(2, 8, 23, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(20, 184, 166, 0.3);
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 0.8rem;
  white-space: normal;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  pointer-events: none;
  width: max-content;
  max-width: 200px;
  text-align: center;
}

.icon-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(2, 8, 23, 0.9) transparent transparent transparent;
}

.tooltip-title {
  font-weight: 700;
  font-size: 0.85rem;
  color: #14b8a6;
  margin-bottom: 3px;
}

.tooltip-description {
  font-size: 0.75rem;
  color: #94a3b8;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  25% { transform: translateY(-8px); }
  75% { transform: translateY(8px); }
}

@media (max-width: 768px) {
  .floating-skill {
    width: 64px;
    height: 64px;
  }
  .skill-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
