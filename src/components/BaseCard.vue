<template>
  <div class="w-full">
    <div class="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
      <div
        v-for="(project) in projects"
        :key="project.title"
        class="glass-card rounded-2xl overflow-hidden flex flex-col group"
      >
        <!-- Imagem + Conteúdo clicável → abre o site -->
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="flex flex-col flex-grow min-h-0">
          <!-- Imagem -->
          <div class="relative overflow-hidden flex-shrink-0">
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
              :title="project.title"
            />
            <div class="img-overlay absolute inset-0"></div>
            <!-- Badge "visitar site" no hover -->
            <div class="visit-badge absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="bg-teal-500/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                {{ $t('ui.projects.visit') }}
              </span>
            </div>
          </div>

          <!-- Conteúdo -->
          <div class="p-5 flex flex-col flex-grow">
            <h3 class="text-base font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-200">{{ project.title }}</h3>
            <div class="divider mb-3"></div>
            <p class="text-slate-400 text-sm leading-relaxed flex-grow">{{ project.description }}</p>
          </div>
        </a>

        <!-- Footer: Tech + GitHub -->
        <div class="px-5 py-4 border-t border-white/5 flex justify-between items-center">
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in getTechs(project)"
              :key="tech.label"
              class="tech-wrapper"
              :data-label="tech.label"
            >
              <img :src="tech.src" :alt="tech.label" class="tech-icon" />
            </span>
          </div>
          <a :href="project.github" target="_blank" class="github-btn p-1.5 rounded-lg transition-all duration-200">
            <img src="@/assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-5 h-5" style="filter: brightness(0) invert(1) opacity(0.6);" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const TECH_MAP = [
  { key: 'firebase', src: new URL('@/assets/img/firebase.svg', import.meta.url).href, label: 'Firebase' },
  { key: 'react', src: new URL('@/assets/img/react.svg', import.meta.url).href, label: 'React' },
  { key: 'nextjs', src: new URL('@/assets/img/nextjs.svg', import.meta.url).href, label: 'Next.js' },
  { key: 'html', src: new URL('@/assets/img/html.svg', import.meta.url).href, label: 'HTML5' },
  { key: 'vue', src: new URL('@/assets/img/vue-svgrepo-com.svg', import.meta.url).href, label: 'Vue.js' },
  { key: 'css', src: new URL('@/assets/img/css-3-svgrepo-com.svg', import.meta.url).href, label: 'CSS3' },
  { key: 'tailwind', src: new URL('@/assets/img/tailwind.svg', import.meta.url).href, label: 'Tailwind CSS' },
  { key: 'javascript', src: new URL('@/assets/img/javascript.svg.png', import.meta.url).href, label: 'JavaScript' },
  { key: 'typescript', src: new URL('@/assets/img/typescript.png', import.meta.url).href, label: 'TypeScript' },
  { key: 'Quasar', src: new URL('@/assets/img/Quasar.svg', import.meta.url).href, label: 'Quasar' },
  { key: 'node', src: new URL('@/assets/img/node.svg', import.meta.url).href, label: 'Node.js' },
  { key: 'nuxt', src: new URL('@/assets/img/nuxt.png', import.meta.url).href, label: 'Nuxt.js' },
  { key: 'bootstrap', src: new URL('@/assets/img/bootstrap.png', import.meta.url).href, label: 'Bootstrap' },
  { key: 'supabase', src: new URL('@/assets/img/supabase.svg', import.meta.url).href, label: 'Supabase' },
]

function getTechs(project) {
  return TECH_MAP.filter(t => project[t.key])
}
</script>

<style scoped>
.content {
  width: 100%;
  margin-bottom: 50px;
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
  border-color: rgba(20, 184, 166, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35), 0 0 30px rgba(20, 184, 166, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.img-overlay {
  background: linear-gradient(to bottom, transparent 40%, rgba(2, 8, 23, 0.6) 100%);
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(20, 184, 166, 0.5), rgba(59, 130, 246, 0.3), transparent);
}

.tech-wrapper {
  position: relative;
  display: inline-flex;
}

.tech-wrapper::after {
  content: attr(data-label);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.95);
  color: #94a3b8;
  font-size: 10px;
  font-weight: 500;
  white-space: nowrap;
  padding: 3px 8px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
  z-index: 20;
}

.tech-wrapper:hover::after {
  opacity: 1;
}

.tech-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 2px;
  transition: transform 0.2s ease;
}

.tech-wrapper:hover .tech-icon {
  transform: scale(1.2);
}

.github-btn {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.github-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
}
</style>
