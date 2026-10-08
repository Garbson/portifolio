<template>
  <nav class="glass-nav fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#about" class="logo flex items-center h-10">
          <span class="logo-prompt">&gt;</span>
          <span class="logo-text">GARBSON.DEV</span>
          <span class="logo-cursor">_</span>
        </a>

        <!-- Nav desktop -->
        <ul class="nav-desktop flex-row space-x-1">
          <li v-for="(item, index) in navItems" :key="item.href">
            <a :href="item.href" class="nav-link px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-300 hover:text-white">
              <span class="pf-key">F{{ index + 1 }}</span>{{ $t(item.label) }}
            </a>
          </li>
        </ul>

        <!-- Idiomas desktop -->
        <div class="nav-desktop items-center">
          <div class="lang-pill flex items-center gap-0.5 p-1 rounded-2xl">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="setLanguage(lang.code)"
              :title="lang.name"
              :class="[
                'lang-btn relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all duration-250',
                locale === lang.code ? 'lang-btn--active' : 'lang-btn--idle'
              ]"
            >
              <img :src="lang.flag" :alt="lang.name" class="w-4 h-4 rounded-sm object-cover flex-shrink-0" />
              <span v-if="locale === lang.code" class="text-xs font-semibold text-white whitespace-nowrap">{{ lang.short }}</span>
            </button>
          </div>
        </div>

        <!-- Hamburger mobile -->
        <button @click="toggleMenu" class="nav-burger w-9 h-9 glass-btn rounded-xl flex items-center justify-center">
          <div class="w-5 h-3.5 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-white/90 transition-all duration-300 rounded-full" :class="{ 'rotate-45 translate-y-[7px]': isMenuOpen }"></span>
            <span class="w-full h-0.5 bg-white/90 transition-all duration-300 rounded-full" :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-full h-0.5 bg-white/90 transition-all duration-300 rounded-full" :class="{ '-rotate-45 -translate-y-[7px]': isMenuOpen }"></span>
          </div>
        </button>
      </div>

      <!-- Menu mobile -->
      <div
        :class="isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'"
        class="nav-burger overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div class="glass-panel rounded-2xl p-3">
          <ul class="space-y-1">
            <li v-for="item in navItems" :key="item.href">
              <a
                :href="item.href"
                @click="closeMenu"
                class="block py-2.5 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
              >
                {{ $t(item.label) }}
              </a>
            </li>
          </ul>
          <div class="mt-3 pt-3 border-t border-white/10">
            <p class="text-slate-500 text-xs px-4 mb-2">{{ $t('navbar.language') }}</p>
            <div class="lang-pill flex items-center gap-0.5 p-1 rounded-2xl">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="setLanguage(lang.code); closeMenu()"
                :title="lang.name"
                :class="[
                  'lang-btn flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all duration-250',
                  locale === lang.code ? 'lang-btn--active' : 'lang-btn--idle'
                ]"
              >
                <img :src="lang.flag" :alt="lang.name" class="w-4 h-4 rounded-sm object-cover flex-shrink-0" />
                <span v-if="locale === lang.code" class="text-xs font-semibold text-white">{{ lang.short }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const navItems = [
  { href: '#about', label: 'navbar.about' },
  { href: '#projects', label: 'navbar.projects' },
  { href: '#experience', label: 'navbar.experience' },
  { href: '#skills', label: 'navbar.skills' },
  { href: '#testimonials', label: 'navbar.testimonials' },
  { href: '#certificates', label: 'navbar.certificates' },
]

const languages = [
  { code: 'en', flag: '/estados-unidos.png', name: 'English', short: 'EN' },
  { code: 'pt', flag: '/brasil.png', name: 'Português', short: 'PT' },
  { code: 'es', flag: '/espanha.png', name: 'Español', short: 'ES' },
  { code: 'ru', flag: '/russia.png', name: 'Русский', short: 'RU' },
  { code: 'gr', flag: '/grecia.png', name: 'Ελληνικά', short: 'GR' },
]

const setLanguage = (lang) => (locale.value = lang)
const isMenuOpen = ref(false)
const isMobile = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

const handleResize = () => {
  isMobile.value = window.innerWidth < 1000
  if (!isMobile.value) isMenuOpen.value = false
}

const closeMenuOnOutsideClick = (event) => {
  if (isMenuOpen.value && !event.target.closest('nav')) isMenuOpen.value = false
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', closeMenuOnOutsideClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', closeMenuOnOutsideClick)
})
</script>

<style scoped>
/* menu completo só a partir de 1000px; abaixo disso, hambúrguer */
.nav-desktop {
  display: none;
}

@media (min-width: 1000px) {
  .nav-desktop {
    display: flex;
  }

  .nav-burger {
    display: none !important;
  }
}

.glass-nav {
  background: rgba(2, 8, 23, 0.5);
  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.logo {
  font-family: 'Fira Code', 'Courier New', monospace;
  gap: 0.4rem;
  text-decoration: none;
}

.logo-prompt {
  color: #f1e88a;
  font-weight: 700;
}

.logo-text {
  font-size: 14px;
  font-weight: 700;
  color: #8cffab;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.logo-cursor {
  color: #8cffab;
  animation: logo-blink 1s steps(2, jump-none) infinite;
}

.nav-link {
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .pf-key {
    display: none;
  }
  .nav-link {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
  }
}

@media (max-width: 900px) {
  .lang-btn {
    padding: 0.3rem 0.4rem;
  }
}

.pf-key {
  margin-right: 0.4rem;
  padding: 0 0.25rem;
  background: rgba(241, 232, 138, 0.14);
  color: #f1e88a;
  font-size: 0.6rem;
}

@keyframes logo-blink {
  50% {
    opacity: 0;
  }
}

.nav-link {
  position: relative;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.06);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 1.5px;
  background: linear-gradient(90deg, #14b8a6, #3b82f6);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 55%;
}

.glass-btn {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.2s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.12);
}

.glass-panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.lang-pill {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.07);
}

.lang-btn {
  cursor: pointer;
  outline: none;
}

.lang-btn--active {
  background: rgba(20, 184, 166, 0.18);
  border: 1px solid rgba(20, 184, 166, 0.4);
  box-shadow: 0 0 12px rgba(20, 184, 166, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.lang-btn--idle {
  border: 1px solid transparent;
  opacity: 0.55;
}

.lang-btn--idle:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
  opacity: 1;
}
</style>
