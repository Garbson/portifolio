<template>
  <div class="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="project in projects"
      :key="project.title"
      class="projeto border border-white rounded-lg overflow-hidden bg-gradient-to-tl from-blue-400 to-blue-600 text-white"
    >
      <a :href="project.link" target="_blank" class="flex flex-col h-full w-full">
        <img :src="project.img" :alt="project.title" class="w-full h-40 object-cover rounded-t-lg cursor-pointer" :title="project.title" />
        <div class="p-4">
          <h3 class="titulo text-lg font-semibold mt-2">{{ project.title }}</h3>
          <p class="description text-sm mt-2">{{ project.description }}</p>
        </div>
        <div class="linguagens-projeto flex justify-between items-center p-4 border-t border-white">
          <div class="flex space-x-2">
            <img v-if="project.firebase" src="@/assets/img/firebase.svg" alt="Firebase" class="w-6 h-6" :title="'Firebase'" />
            <img v-if="project.html" src="@/assets/img/html.svg" alt="HTML" class="w-6 h-6" :title="'HTML'" />
            <img v-if="project.vue" src="@/assets/img/vue-svgrepo-com.svg" alt="Vue" class="w-6 h-6" :title="'Vue.js'" />
            <img v-if="project.css" src="@/assets/img/css-3-svgrepo-com.svg" alt="CSS" class="w-6 h-6" :title="'CSS'" />
            <img v-if="project.tailwind" src="@/assets/img/tailwind.svg" alt="Tailwind" class="w-6 h-6" :title="'Tailwind'" />
            <img v-if="project.javascript" src="@/assets/img/javascript.svg.png" alt="JavaScript" class="w-6 h-6" :title="'JavaScript'" />
            <img v-if="project.Quasar" src="@/assets/img/Quasar.svg" alt="Quasar" class="w-6 h-6" :title="'Quasar'" />
          </div>
          <a :href="project.github">
            <img src="@/assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-6 h-6" :title="'GitHub - '" />
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
// const onde é adcionado sempre cada pojeto novo, lembre de olhar as props
const projects = [
  {
    title: 'AmazonNanoForest',
    description: 'Nanobiotecnologia na Amazônia: transformando ativos naturais em inovações sustentáveis.',
    img: 'NanoForest.png',
    vue: true,
    tailwind: true,
    Quasar: true,
    github: 'https://github.com/Garbson/AMAZON-NANO-FOREST',
    link: 'https://amazon-nano-forest.pages.dev/'
  },
  {
    title: 'Golfim',
    description: 'Consertos, Pinturas e Reformas de Piscinas com profissionais',
    img: 'Golfim.png',
    vue: true,
    javascript: true,
    Quasar: true,
    github: 'hthttps://github.com/leonardo-cordeiro/golfim',
    link: 'https://golfim.pages.dev/'
  },
  {
    title: 'Crypto Tracker',
    description: 'Site de criptomoedas, com variação diária dos preços das moedas.',
    img: 'Crypto.png',
    vue: true,
    tailwind: true,
    javascript: true,
    firebase: true,
    github: 'https://github.com/leonardo-cordeiro/CryptoTracker/tree/Garbson',
    link: 'https://cryptotracker-5hk.pages.dev/'
  },
  {
    title: 'Calculadora',
    description: 'Feita com o intuito de desenvolver o conhecimento em Pinia',
    img: 'Calculadora.png',
    vue: true,
    tailwind: true,
    javascript: true,
    github: 'https://github.com/Garbson/calculadora',
    link: 'https://calculadora-e7p.pages.dev/'
  },
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
    tailwind: true,
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
<style scoped>
.content {
  width: 80%;
  margin-bottom: 50px;
}
</style>
