<template>
  <div class="body bg-gradient-to-t from-teal-400 to-blue-900">
    <!-- Apresentação -->
    <div class="md:w-[72%] mx-auto">
      <div class="apresentacao flex flex-col items-center md:flex-row justify-left md:w-[100%]">
        <img class="foto w-64 h-82 md:w-70 md:h-70 rounded-full" src="profile.png" alt="Minha Foto" />
        <div class="bb md:text-left">
          <h2 class="text-3xl md:text-5xl font-semibold text-white">Olá, sou Garbson Souza!</h2>
          <p class="text-2xl text-white mt-2 md:mt-4">Desenvolvedor Front-End</p>
        </div>
      </div>
    </div>

    <!-- card sobre mim -->
    <div class="biografia w-full md:w-[72%] mx-auto bg-blue-900 text-white p-5 rounded-lg flex flex-col items-center justify-center mt-5">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">Sobre mim</h1>
      <p class="text-base md:text-lg">
        👋 Olá, sou Garbson Souza, um desenvolvedor front-end apaixonado por criar interfaces de usuário intuitivas e responsivas.
        Com uma sólida base em tecnologias modernas, Vue.js, Quasar, Node.js, Nuxt.js, Vuex e Pinia, transformo ideias em experiências
        digitais excepcionais. 💡
        <br />
        Desde os 16 anos, tenho me aprofundado no universo da programação, acumulando uma vasta experiência em projetos freelancer que
        abrangem diferentes setores e geografias. Já trabalhei com uma empresa americana, desenvolvendo soluções inovadoras, e colaborei com
        empresas de biotecnologia, além de um hotel em Cusco, no Peru, sempre focado em entregar produtos de alta qualidade e valor
        agregado. 🌍 Atualmente, estou contribuindo como freelancer na Hellenic Technologies, uma empresa grega, onde continuo a aplicar e
        expandir minhas competências.
        <br />
        Minha expertise inclui o consumo de APIs para a criação de aplicações web robustas e responsivas, garantindo uma performance
        otimizada e uma experiência de usuário (UX) de excelência. 🚀 Além da minha experiência prática, estou cursando Sistemas de
        Informação na Universidade Federal do Acre, o que me permite alinhar conhecimentos teóricos e práticos, mantendo-me atualizado com
        as últimas tendências e inovações do mercado de tecnologia. 🎓
      </p>
      <div class="redes flex items-center mt-3">
        <a :href="socialLinks.whatsapp" class="text-white hover:text-blue-300">
          <img src="./assets/img/whatsapp-svgrepo-com.svg" alt="WhatsApp" class="w-8 h-8 mr-4" />
        </a>
        <a :href="socialLinks.instagram" class="text-white hover:text-blue-300">
          <img src="./assets/img/instagram-2-1-logo-svgrepo-com.svg" alt="Instagram" class="w-8 h-8 mr-4" />
        </a>
        <a :href="socialLinks.github" class="text-white hover:text-blue-300">
          <img src="./assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-8 h-8 mr-4" />
        </a>
        <a :href="socialLinks.linkedin" class="text-white hover:text-blue-300">
          <img src="./assets/img/linkedin-svgrepo-com.svg" alt="LinkedIn" class="w-9 h-9" />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap mt-10">
      <BaseCard :projects="projects"></BaseCard>
    </div>
  </div>
</template>

<script setup>
import BaseCard from './components/BaseCard.vue'

const socialLinks = {
  whatsapp: 'https://api.whatsapp.com/send?phone=5568992490198',
  instagram: 'https://www.instagram.com/dev_garbson/',
  github: 'https://github.com/Garbson',
  linkedin: 'https://www.linkedin.com/in/garbson-souza-0744a825a/'
}
const projects = [
{
    title: 'Feedel',
    description: 'Loja de Vendas, em escala mundial.',
    img: 'feedel.png',
    vue: true,
    Quasar: true,
    node: true,
    nuxt: true,
    github: 'https://github.com/hellenictechnologies/feedel-dashboard-garbson',
    link: 'https://feedel.app/login'
  },
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
    title: 'Dangerous Dragons',
    description: 'Jogo RPG, feito com javasScript puro.',
    img: 'dangerous.png',
    html: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/Dangerous-dragon',
    link: 'https://dangerous-dragon.pages.dev'
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
  },
  {
    title: 'City Skyline',
    description: 'diminua o tamanho da janela da pagina e veja a magica.',
    img: 'city.png',
    html: true,
    css: true,
    javascript: true,
    github: 'https://github.com/Garbson/city',
    link: 'https://city-du9.pages.dev'
  }

]
</script>

<style scoped>
@media (max-width: 800px) {
  .biografia {
    width: 90%;
  }
  .bb {
    margin-top: 20px;
  }
}
</style>
