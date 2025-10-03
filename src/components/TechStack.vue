<template>
  <div class="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl mb-12">
          {{ $t('techStack.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="category in $t('techStack.categories')"
          :key="category.name"
          class="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
        >
          <h3 class="text-xl font-bold text-white mb-4 text-center">
            {{ category.name }}
          </h3>

          <div class="space-y-3">
            <div
              v-for="item in category.items"
              :key="item.name"
              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-600/30 transition-colors"
            >
              <div class="flex-shrink-0">
                <img
                  v-if="item.icon"
                  :src="require(`@/assets/img/${item.icon}`)"
                  :alt="item.name"
                  class="w-6 h-6"
                  @error="$event.target.style.display='none'"
                />
                <div
                  v-else
                  class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <span class="text-white text-xs font-bold">•</span>
                </div>
              </div>

              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-white truncate">
                  {{ item.name }}
                </p>
                <p v-if="item.description" class="text-xs text-slate-300 truncate">
                  {{ item.description }}
                </p>
                <div v-else-if="item.level" class="flex items-center space-x-2">
                  <span class="text-xs text-slate-400">{{ item.level }}</span>
                  <div class="flex space-x-1">
                    <div
                      v-for="n in 3"
                      :key="n"
                      class="w-2 h-2 rounded-full"
                      :class="{
                        'bg-green-400': item.level === 'expert' && n <= 3,
                        'bg-blue-400': item.level === 'advanced' && n <= 2,
                        'bg-yellow-400': item.level === 'intermediate' && n <= 1,
                        'bg-slate-600': (item.level === 'advanced' && n > 2) || (item.level === 'intermediate' && n > 1)
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<style scoped>
/* Estilos customizados se necessário */
</style>