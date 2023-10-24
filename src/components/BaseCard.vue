<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="project in projects"
      :key="project.title"
      class="projeto border border-white rounded-lg overflow-hidden bg-gradient-to-tl from-blue-400 to-blue-600 text-white"
    >
      <a :href="project.link" target="_blank" class="flex flex-col h-full w-full">
        <img :src="project.img" :alt="project.title" class="w-full h-40 object-cover rounded-t-lg cursor-pointer" />
        <div class="p-4">
          <h3 class="titulo text-lg font-semibold mt-2">{{ project.title }}</h3>
          <p class="description text-sm mt-2">{{ project.description }}</p>
        </div>
        <div class="linguagens-projeto flex justify-between items-center p-4 border-t border-white">
          <div class="flex space-x-2">
            <img v-if="project.html" src="@/assets/img/html.svg" alt="HTML" class="w-6 h-6" />
            <img v-if="project.vue" src="@/assets/img/vue-svgrepo-com.svg" alt="Vue" class="w-6 h-6" />
            <img v-if="project.css" src="@/assets/img/css-3-svgrepo-com.svg" alt="CSS" class="w-6 h-6" />
            <img v-if="project.tailwind" src="@/assets/img/tailwind.svg" alt="Tailwind" class="w-6 h-6" />
            <img v-if="project.javascript" src="@/assets/img/javascript.svg.png" alt="JavaScript" class="w-6 h-6" />
          </div>
          <a :href="project.github">
            <img src="@/assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-6 h-6" />
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Gerenciador de tarefas',
    description: 'Gerenciador de tarefas, metas e calendário',
    img: 'gerenciador.png',
    vue: true,
    tailwind: true,
    javascript: true,
    github: 'https://github.com/Garbson/GER',
    link: 'https://ger-8tm.pages.dev/'
  },
  {
    title: 'Brasileiro.ninja',
    description: 'Informações nacionais como ISBN, CEP, DDD...',
    img: 'brasileiroo.jpeg',
    vue: true,
    css: true,
    javascript: true,
    github: 'https://github.com/arnonrdp/Brasileiro-Ninja',
    link: 'https://brasileiro.ninja/'
  },
  {
    title: 'Portfólio',
    description: 'Site com projetos que construí e mantenho ativo',
    img: 'portfolio.png',
    vue: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/portifolio',
    link: 'https://portifolio-by1.pages.dev'
  },
  {
    title: 'Bitcoin',
    description: 'Site com o valor em tempo real de moedas digitais',
    img: 'bitcoin.jpeg',
    html: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/bitcoin',
    link: 'https://bitcoin-27r.pages.dev/'
  },
  {
    title: 'Temperature',
    description: 'Site feito para ver a temperatura de qualquer cidade',
    img: 'temperatures.jpeg',
    html: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/projeto-site-pra-ver-a-temperatura',
    link: 'https://temperature-9ta.pages.dev/'
  },
  {
    title: 'Conversor',
    description: 'Conversor para o câmbio de moedas do mundo',
    img: 'Conversor.jpeg',
    html: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/Currency-Converter',
    link: 'https://currency-converter-cgn.pages.dev/'
  }
]
</script>
