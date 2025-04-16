<template>
  <section id="skills" class="w-[90%] md:w-[72%] mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
    <h1 class="text-2xl md:text-3xl font-bold mb-6 text-center">{{ $t("skills.title") }}</h1>
    
    <div class="skills-container">
      <div v-for="category in skillCategories" :key="category.name" class="mb-8">
        <h2 class="text-xl font-semibold mb-4 text-center">{{ category.name }}</h2>
        <div class="floating-skills-container">
          <div v-for="(skill, index) in filteredSkills(category.items)" :key="skill.name" 
               class="floating-skill"
               :class="`animation-delay-${index % 5}`">
            <div class="skill-content" ref="skillElements">
              <img :src="getImageUrl(skill.icon)" :alt="skill.name" class="skill-icon" />
              <!-- Tooltip com nome e descrição -->
              <div v-if="skill.name === activeTooltip?.name" class="icon-tooltip">
                <div class="tooltip-title">{{ skill.name }}</div>
                <div v-if="skill.description" class="tooltip-description">{{ skill.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, locale } = useI18n();

// Propriedade computada que usa a função tm() para obter as categorias de habilidades
const skillCategories = computed(() => tm('skills.categories'));

// Função para obter o caminho correto da imagem
const getImageUrl = (icon) => {
  return new URL(`../assets/img/${icon}`, import.meta.url).href;
};

// Filtra habilidades para mostrar apenas as que têm ícone
const filteredSkills = (skills) => {
  return skills.filter(skill => skill.icon);
};

// Habilidade ativa para mostrar tooltip
const activeTooltip = ref(null);

// Adiciona eventos aos elementos skill
const setupTooltipEvents = () => {
  // Aguarda o próximo ciclo de renderização para garantir que os elementos estão no DOM
  setTimeout(() => {
    const skillContents = document.querySelectorAll('.skill-content');
    skillContents.forEach(element => {
      // Remove eventos antigos para evitar duplicação
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      
      // Adiciona novos eventos
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
  }, 50);
};

// Funções de tratamento de eventos extraídas para evitar duplicação
const handleMouseEnter = (e) => {
  const imgElement = e.currentTarget.querySelector('img');
  if (imgElement) {
    const skillName = imgElement.getAttribute('alt');
    // Busca a habilidade completa com descrição para mostrar no tooltip
    for (const category of skillCategories.value) {
      const skill = category.items.find(item => item.name === skillName);
      if (skill) {
        activeTooltip.value = skill;
        break;
      }
    }
  }
};

const handleMouseLeave = () => {
  activeTooltip.value = null;
};

// Observa mudanças no idioma e reconfigura os tooltips
watch(() => locale.value, () => {
  // Espera que o Vue atualize o DOM com o novo idioma antes de configurar os tooltips
  setupTooltipEvents();
});

// Chama a função após o componente ser montado
onMounted(setupTooltipEvents);
</script>

<style scoped>
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
  position: relative;
  padding: 20px;
}

.floating-skill {
  width: 80px;
  height: 80px;
  transform: translateY(0);
  animation: float 4s ease-in-out infinite;
  position: relative;
}

.animation-delay-0 { animation-delay: 0s; }
.animation-delay-1 { animation-delay: 0.5s; }
.animation-delay-2 { animation-delay: 1s; }
.animation-delay-3 { animation-delay: 1.5s; }
.animation-delay-4 { animation-delay: 2s; }

.skill-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 58, 138, 0.7);
  border-radius: 50%;
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.floating-skill:hover .skill-content {
  transform: scale(1.15);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.5);
  background-color: rgba(30, 64, 175, 0.9);
}

.skill-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  background-color: white;
  border-radius: 8px;
  padding: 3px;
  transition: transform 0.3s ease;
}

/* Tooltip fixo dentro do elemento */
.icon-tooltip {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(15, 23, 42, 0.95);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  white-space: normal;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  pointer-events: none;
  width: max-content;
  max-width: 220px;
  text-align: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.icon-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(15, 23, 42, 0.95) transparent transparent transparent;
}

.tooltip-title {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: #3b82f6;
}

.tooltip-description {
  font-size: 0.8rem;
  color: #e2e8f0;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(2deg);
  }
  50% {
    transform: translateY(0px) rotate(0deg);
  }
  75% {
    transform: translateY(10px) rotate(-2deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@media (max-width: 768px) {
  .floating-skill {
    width: 70px;
    height: 70px;
  }
  
  .skill-icon {
    width: 35px;
    height: 35px;
  }
}
</style>