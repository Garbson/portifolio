<template>
  <nav class="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-sm text-white shadow-lg z-50 border-b border-slate-700/50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo apenas com ícone -->
        <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM7.707 6.293a1 1 0 010 1.414L5.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm6.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

        <!-- Menu Hambúrguer simples -->
        <button @click="toggleMenu" class="sm:hidden w-8 h-8 flex items-center justify-center">
          <div class="w-6 h-4 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-white transition-all duration-300"
                  :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
            <span class="w-full h-0.5 bg-white transition-all duration-300"
                  :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-full h-0.5 bg-white transition-all duration-300"
                  :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
          </div>
        </button>

        <!-- Navegação limpa -->
        <ul :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" 
            class="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50 flex-col p-4 sm:static sm:flex sm:flex-row sm:space-x-6 sm:justify-center sm:w-auto sm:p-0 sm:bg-transparent sm:shadow-none border-t border-slate-700/50 sm:border-none">
          
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" 
               @click="closeMenu"
               class="block py-2 px-4 text-slate-300 hover:text-teal-400 transition-colors duration-200 sm:py-1">
              {{ $t(item.label) }}
            </a>
          </li>
        </ul>

        <!-- Seletor de idiomas simples -->
        <div class="flex items-center space-x-1">
          <button v-for="lang in languages" 
                  :key="lang.code"
                  @click="setLanguage(lang.code)" 
                  :class="[
                    'w-8 h-8 rounded-full transition-all duration-200 overflow-hidden border-2',
                    locale === lang.code 
                      ? 'border-teal-400 scale-105' 
                      : 'border-transparent hover:border-slate-600'
                  ]">
            <img :src="lang.flag" :alt="lang.name" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Dados de navegação
const navItems = [
  { href: '#about', label: 'navbar.about' },
  { href: '#experience', label: 'navbar.experience' },
  { href: '#projects', label: 'navbar.projects' },
  { href: '#testimonials', label: 'navbar.testimonials' },
  { href: '#certificates', label: 'navbar.certificates' }
];

// Dados dos idiomas
const languages = [
  { code: 'en', flag: '/estados-unidos.png', name: 'English' },
  { code: 'pt', flag: '/brasil.png', name: 'Português' },
  { code: 'es', flag: '/espanha.png', name: 'Español' },
  { code: 'ru', flag: '/russia.png', name: 'Русский' },
  { code: 'gr', flag: '/grecia.png', name: 'Ελληνικά' }
];

const setLanguage = (lang) => {
  locale.value = lang;
};

const isMenuOpen = ref(false);
const isMobile = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Atualiza `isMobile` quando o tamanho da tela muda
const handleResize = () => {
  isMobile.value = window.innerWidth <= 777;
  if (!isMobile.value) {
    isMenuOpen.value = false;
  }
};

// Fecha o menu ao clicar fora
const closeMenuOnOutsideClick = (event) => {
  if (isMenuOpen.value && !event.target.closest('nav')) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', closeMenuOnOutsideClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', closeMenuOnOutsideClick);
});
</script>

<style scoped>
/* Minimal styling */
nav {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
