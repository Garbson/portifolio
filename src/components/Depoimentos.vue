<template>
  <section id="testimonials" class="w-[90%] md:w-[72%] mx-auto mt-16 mb-10">
    <!-- Header -->
    <div class="text-center mb-10">
      <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-2">Feedback</p>
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-3">{{ $t('testimonials.title') }}</h1>
      <div class="header-line"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        v-for="(testimonial, index) in testimonialItems"
        :key="index"
        class="glass-card rounded-2xl p-6 group flex flex-col"
      >
        <!-- Quote mark -->
        <div class="quote-mark text-5xl leading-none mb-3">"</div>

        <p class="text-slate-300 text-sm leading-relaxed italic flex-grow">{{ testimonial.text }}</p>

        <!-- Autor -->
        <div class="flex items-center gap-3 pt-4 mt-5 border-t border-white/5">
          <div class="avatar w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
            {{ testimonial.name.charAt(0) }}
          </div>
          <div>
            <p class="text-white font-semibold text-sm">{{ testimonial.name }}</p>
            <p class="text-teal-400/70 text-xs">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const testimonialItems = computed(() => tm('testimonials.items'))
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
  border-color: rgba(20, 184, 166, 0.2);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.quote-mark {
  background: linear-gradient(135deg, #14b8a6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Georgia, serif;
  line-height: 1;
}

.avatar {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.6), rgba(59, 130, 246, 0.6));
  border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
