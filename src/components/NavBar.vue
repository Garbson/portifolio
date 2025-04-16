<template>
  <nav class="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 shadow-lg z-50 flex items-center justify-between">
    <!-- Logo -->
    <div class="hidden sm:block text-xl font-bold">dev_garbson</div>

    <!-- Menu Hambúrguer (Somente para Telas Pequenas, width <= 777px) -->
    <button @click="toggleMenu" class="sm:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-teal-500 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Navegação -->
    <ul
      :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" 
      ref="menu"
      class="absolute top-full left-0 w-1/2 rounded-xl bg-blue-600 text-white shadow-lg z-50 flex-col items-start p-4 sm:static sm:flex sm:flex-row sm:space-x-6 sm:justify-center sm:w-auto sm:p-0 sm:h-auto"
    >
      <li>
        <a href="#about" class="block py-2 px-4 hover:text-teal-400">{{ $t('navbar.about') }}</a>
      </li>
      <li>
        <a href="#skills" class="block py-2 px-4 hover:text-teal-400">{{ $t('navbar.skills') }}</a>
      </li>
      <li>
        <a href="#experience" class="block py-2 px-4 hover:text-teal-400">{{ $t('navbar.experience') }}</a>
      </li>
      <li>
        <a href="#projects" class="block py-2 px-4 hover:text-teal-400">{{ $t('navbar.projects') }}</a>
      </li>
      <li>
        <a href="#testimonials" class="block py-2 px-4 hover:text-teal-400">{{ $t('navbar.testimonials') }}</a>
      </li>
      <li>
        <a href="#certificates" class="block py-2 px-4 hover:text-teal-400">{{ $t('navbar.certificates') }}</a>
      </li>
    </ul>

    <!-- Idiomas -->
    <div class="flex space-x-4 sm:static">
      <button @click="setLanguage('en')" :class="[
          'flex items-center justify-center w-8 h-8 rounded transition',
          locale === 'en' ? 'bg-teal-500 ring-2 ring-white' : 'hover:bg-teal-500'
        ]">
        <img src="/estados-unidos.png" alt="English" class="w-6 h-6" />
      </button>
      <button @click="setLanguage('pt')" :class="[
          'flex items-center justify-center w-8 h-8 rounded transition',
          locale === 'pt' ? 'bg-teal-500 ring-2 ring-white' : 'hover:bg-teal-500'
        ]">
        <img src="/brasil.png" alt="Português" class="w-6 h-6" />
      </button>
      <button @click="setLanguage('es')" :class="[
          'flex items-center justify-center w-8 h-8 rounded transition',
          locale === 'es' ? 'bg-teal-500 ring-2 ring-white' : 'hover:bg-teal-500'
        ]">
        <img src="/espanha.png" alt="Español" class="w-6 h-6" />
      </button>
      <button @click="setLanguage('ru')" :class="[
          'flex items-center justify-center w-8 h-8 rounded transition',
          locale === 'ru' ? 'bg-teal-500 ring-2 ring-white' : 'hover:bg-teal-500'
        ]">
        <img src="/russia.png" alt="Русский" class="w-6 h-6" />
      </button>
      <button @click="setLanguage('gr')" :class="[
          'flex items-center justify-center w-8 h-8 rounded transition',
          locale === 'gr' ? 'bg-teal-500 ring-2 ring-white' : 'hover:bg-teal-500'
        ]">
        <img src="/grecia.png" alt="Ελληνικά" class="w-6 h-6" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const setLanguage = (lang) => {
  locale.value = lang; // Atualiza o idioma
};

const isMenuOpen = ref(false);
const isMobile = ref(window.innerWidth <= 777); // Inicializa com base no tamanho atual da tela

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Atualiza `isMobile` quando o tamanho da tela muda
const handleResize = () => {
  isMobile.value = window.innerWidth <= 777;
};

onMounted(() => {
  window.addEventListener('resize', handleResize); // Observa mudanças no tamanho da tela
  handleResize(); // Garante que a variável seja definida ao montar o componente
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize); // Remove o listener ao desmontar
});

// Fecha o menu ao clicar fora
const closeMenuOnOutsideClick = (event) => {
  if (isMenuOpen.value && !event.target.closest('nav')) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeMenuOnOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenuOnOutsideClick);
});
</script>
