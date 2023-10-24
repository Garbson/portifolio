<template>
  <div class="body bg-gradient-to-b from-blue-500 to-teal-600">
    <div class="apresentacao flex flex-col items-center md:flex-row justify-center">
      <img class="foto w-60 h-82 md:w-70 md:h-70 rounded-full" src="./assets/img/logo.png" alt="Minha Foto" />
      <div class="text-center md:text-left md:ml-8 mt-4 md:mt-0">
        <h2 class="text-3xl md:text-5xl font-semibold text-white">
          Olá, sou Garbson!
          <img src="@/assets/img/programador.svg" alt="Emoji de Programador" class="w-8 h-8 inline-block ml-2" />
        </h2>
        <p class="text-base md:text-xl text-white mt-2 md:mt-4">Desenvolvedor Front-End Brasileiro</p>
      </div>
    </div>

    <div class="redes mt-4 md:mt-5 flex justify-center items-center space-x-4 md:space-x-8">
      <a href="https://www.instagram.com/dev_garbson/" class="text-white hover:text-blue-300">
        <img src="./assets/img/instagram-2-1-logo-svgrepo-com.svg" alt="Instagram" class="w-12 h-12" />
      </a>
      <a href="https://github.com/Garbson" class="text-white hover:text-blue-300">
        <img src="./assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-12 h-12" />
      </a>
      <a href="https://www.linkedin.com/in/garbson-souza-santos-0744a825a" class="text-white hover:text-blue-300">
        <img src="./assets/img/linkedin-svgrepo-com.svg" alt="LinkedIn" class="w-12 h-12" />
      </a>
    </div>

    <div class="biografia bg-blue-900 text-white p-4 md:p-8 mx-4 md:mx-32 my-4 rounded-lg flex flex-col md:flex-row">
      <div class="w-full md:w-1/2">
        <img src="../public/biografia.jpg" alt="" class="w-full rounded-lg" />
      </div>
      <div class="w-full md:w-1/2 mt-4 md:mt-0 ml-0 md:ml-4">
        <p class="text-xl md:text-2xl font-semibold mb-4">Biografia</p>
        <p class="text-base md:text-lg">
          Olá, sou Garbson, um desenvolvedor front-end brasileiro. Desde os 16 anos, sou apaixonado por programação e atualmente estudo
          Sistemas de Informação na Universidade Federal do Acre.
        </p>
        <p class="text-base md:text-lg mt-4">
          Nasci e cresci na região norte do Brasil e cursei o ensino médio no Colégio Militar. Sou um desenvolvedor comunicativo,
          competitivo e proativo, sempre disposto a abraçar novos desafios. 👨‍💻
        </p>
        <p class="text-base md:text-lg mt-4">
          Além disso, sou dedicado e sempre interessado em aprender coisas novas, resolver problemas e enfrentar desafios complexos. 💪
        </p>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="con flex flex-wrap justify-center gap-5 md:gap-8 mt-10">
        <BaseCard></BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
