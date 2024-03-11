<template>
  <div class="w-[100%]">
    <div class="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      <div
        v-for="project in projects"
        :key="project.title"
        class="projeto shadow-md rounded-lg bg-gradient-to-tl from-blue-800 to-blue-900 text-white"
      >
        <a :href="project.link" target="_blank" class="flex flex-col h-full w-full">
          <img
            :src="project.img"
            :alt="project.title"
            class="w-full h-40 object-cover rounded-t-lg cursor-pointer shadow-xl"
            :title="project.title"
          />
          <div class="p-5">
            <h3 class="titulo text-lg font-semibold mt-2">{{ project.title }}</h3>
            <p class="border-t-2"></p>
            <div class="h-full">
              <p class="description text-sm h-[100%] mt-2">{{ project.description }}</p>
            </div>
          </div>
          <div class="linguagens-projeto flex justify-between p-4 border-black">
            <div class="flex space-x-2 bottom-0">
              <img v-if="project.firebase" src="@/assets/img/firebase.svg" alt="Firebase" class="w-6 h-6" :title="'Firebase'" />
              <img v-if="project.html" src="@/assets/img/html.svg" alt="HTML" class="w-6 h-6" :title="'HTML'" />
              <img v-if="project.vue" src="@/assets/img/vue-svgrepo-com.svg" alt="Vue" class="w-6 h-6" :title="'Vue.js'" />
              <img v-if="project.css" src="@/assets/img/css-3-svgrepo-com.svg" alt="CSS" class="w-6 h-6" :title="'CSS'" />
              <img v-if="project.tailwind" src="@/assets/img/tailwind.svg" alt="Tailwind" class="w-6 h-6" :title="'Tailwind'" />
              <img v-if="project.javascript" src="@/assets/img/javascript.svg.png" alt="JavaScript" class="w-6 h-6" :title="'JavaScript'" />
              <img v-if="project.Quasar" src="@/assets/img/Quasar.svg" alt="Quasar" class="w-6 h-6" :title="'Quasar'" />
              <img v-if="project.node" src="@/assets/img/node.svg" alt="Node.js" class="w-6 h-6" :title="'Node.js'" />
            </div>
            <a :href="project.github">
              <img src="@/assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-6 h-6" :title="'GitHub - '" />
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// const onde é adcionado sempre cada pojeto novo, lembre de olhar as props
const projects = [
  {
    title: 'Hostel Pachacuteq',
    description: 'Hotel em Cusco, Peru, para descanso e aventuras.',
    img: 'pachacuteq.png',
    vue: true,
    tailwind: true,
    Quasar: true,
    node: true,
    github: 'https://github.com/Garbson/pachacuteq',
    link: 'https://pachacuteq.pages.dev/'
  },
  {
    title: 'AmazonNanoForest',
    description: 'Biotecnologia na Amazônia: natureza e inovação.',
    img: 'NanoForest.png',
    vue: true,
    tailwind: true,
    Quasar: true,
    github: 'https://github.com/Garbson/AMAZON-NANO-FOREST',
    link: 'https://amazonnanoforest.com/'
  },
  {
    title: 'Golfim',
    description: 'Conserto de piscinas e restauração por especialistas.',
    img: 'Golfim.png',
    vue: true,
    javascript: true,
    Quasar: true,
    github: 'hthttps://github.com/leonardo-cordeiro/golfim',
    link: 'https://golfim.pages.dev/'
  },
  {
    title: 'Crypto Tracker',
    description: 'Acompanhe a flutuação diária das criptomoedas.',
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
    description: 'Ferramenta em Pinia para cálculos precisos e rápidos.',
    img: 'Calculadora.png',
    vue: true,
    tailwind: true,
    javascript: true,
    github: 'https://github.com/Garbson/calculadora',
    link: 'https://calculadora-e7p.pages.dev/'
  },
  {
    title: 'To Do list',
    description: 'Organize suas tarefas diárias em um quadro intuitivo.',
    img: 'Todolist.png',
    vue: true,
    tailwind: true,
    javascript: true,
    github: 'https://github.com/Garbson/To-do-list',
    link: 'https://to-do-list-aky.pages.dev/'
  },
  {
    title: 'Brasileiro.ninja',
    description: 'Base de dados nacional: CEP, ISBN, DDD, NCM, CNPJ e mais.',
    img: 'Brasileiro.jpeg',
    vue: true,
    css: true,
    javascript: true,
    github: 'https://github.com/arnonrdp/Brasileiro-Ninja',
    link: 'https://brasileiro.ninja/'
  },
  {
    title: 'Portfólio',
    description: 'Exibição dos meus projetos para apresentação e referência.',
    img: 'portfolio.png',
    vue: true,
    tailwind: true,
    javascript: true,
    github: 'https://github.com/Garbson/portifolio',
    link: 'https://portifolio-by1.pages.dev'
  },
  {
    title: 'Temperature',
    description: 'Consulte a temperatura global em apenas alguns cliques.',
    img: 'temperatures.jpeg',
    html: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/projeto-site-pra-ver-a-temperatura',
    link: 'https://temperature-9ta.pages.dev/'
  },
  {
    title: 'Conversor',
    description: 'Troque moedas com facilidade e precisão mundial.',
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
  width: 72%;

  margin-bottom: 50px;
}

@media (max-width: 768px) {
  .content {
    width: 90%;
  }
}
</style>
