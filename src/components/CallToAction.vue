<template>
  <div class="bg-gradient-to-r from-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl mb-6">
        {{ $t('callToAction.title') }}
      </h2>

      <p class="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        {{ $t('callToAction.description') }}
      </p>

      <!-- Download Resume Button -->
      <div class="mb-8">
        <a
          :href="$t('callToAction.resume.link')"
          target="_blank"
          class="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <span class="text-2xl mr-3">📄</span>
          <span>{{ $t('callToAction.resume.text') }}</span>
        </a>
      </div>

      <!-- Contact Buttons -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <a
          :href="$t('callToAction.email.link')"
          class="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <span class="text-xl mr-2">📧</span>
          <span>{{ $t('callToAction.email.text') }}</span>
        </a>

        <a
          :href="$t('callToAction.whatsapp.link')"
          target="_blank"
          class="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <span class="text-xl mr-2">💬</span>
          <span>{{ $t('callToAction.whatsapp.text') }}</span>
        </a>

        <a
          :href="$t('callToAction.linkedin.link')"
          target="_blank"
          class="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <span class="text-xl mr-2">💼</span>
          <span>{{ $t('callToAction.linkedin.text') }}</span>
        </a>
      </div>

      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>