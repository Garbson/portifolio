<template>
  <section class="w-[90%] md:w-[72%] mx-auto mt-16 mb-16">
    <div class="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
      <!-- Glow interno decorativo -->
      <div class="inner-glow"></div>

      <div class="relative z-10">
        <p class="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-3">Vamos trabalhar juntos</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {{ $t('callToAction.title') }}
        </h2>
        <p class="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {{ $t('callToAction.description') }}
        </p>

        <!-- Download -->
        <div class="mb-8">
          <a
            :href="$t('callToAction.resume.link')"
            target="_blank"
            class="resume-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-300"
          >
            <span class="text-lg">📄</span>
            <span>{{ $t('callToAction.resume.text') }}</span>
          </a>
        </div>

        <!-- Contact buttons -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <!-- Email -->
          <a
            :href="$t('callToAction.email.link')"
            class="contact-btn blue inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white transition-all duration-300"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>{{ $t('callToAction.email.text') }}</span>
          </a>

          <!-- WhatsApp -->
          <a
            :href="$t('callToAction.whatsapp.link')"
            target="_blank"
            class="contact-btn green inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white transition-all duration-300"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.856L.057 23.882a.5.5 0 00.61.61l6.101-1.46A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.857a9.833 9.833 0 01-5.031-1.378l-.36-.214-3.733.894.909-3.644-.235-.374A9.858 9.858 0 012.143 12C2.143 6.541 6.541 2.143 12 2.143S21.857 6.541 21.857 12 17.459 21.857 12 21.857z"/>
            </svg>
            <span>{{ $t('callToAction.whatsapp.text') }}</span>
          </a>

          <!-- LinkedIn -->
          <a
            :href="$t('callToAction.linkedin.link')"
            target="_blank"
            class="contact-btn indigo inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white transition-all duration-300"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>{{ $t('callToAction.linkedin.text') }}</span>
          </a>

          <!-- Instagram -->
          <a
            href="https://instagram.com/garbsondev/"
            target="_blank"
            class="contact-btn instagram inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white transition-all duration-300"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.inner-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(20, 184, 166, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 100% 100%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 0% 100%, rgba(59, 130, 246, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.resume-btn {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(79, 70, 229, 0.3));
  border: 1px solid rgba(139, 92, 246, 0.4);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 25px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.resume-btn:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(79, 70, 229, 0.5));
  border-color: rgba(139, 92, 246, 0.7);
  box-shadow: 0 0 35px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-2px) scale(1.02);
}

.contact-btn {
  backdrop-filter: blur(12px);
  border: 1px solid transparent;
}

.contact-btn.blue {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
}

.contact-btn.blue:hover {
  background: rgba(59, 130, 246, 0.28);
  border-color: rgba(59, 130, 246, 0.6);
  transform: translateY(-2px);
}

.contact-btn.green {
  background: rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
}

.contact-btn.green:hover {
  background: rgba(16, 185, 129, 0.28);
  border-color: rgba(16, 185, 129, 0.6);
  transform: translateY(-2px);
}

.contact-btn.indigo {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.1);
}

.contact-btn.indigo:hover {
  background: rgba(99, 102, 241, 0.28);
  border-color: rgba(99, 102, 241, 0.6);
  transform: translateY(-2px);
}

.contact-btn.instagram {
  background: rgba(225, 48, 108, 0.15);
  border-color: rgba(225, 48, 108, 0.3);
  box-shadow: 0 0 15px rgba(225, 48, 108, 0.1);
}

.contact-btn.instagram:hover {
  background: rgba(225, 48, 108, 0.28);
  border-color: rgba(225, 48, 108, 0.6);
  transform: translateY(-2px);
}
</style>
