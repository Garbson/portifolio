<template>
  <div class="body bg-gradient-to-t from-teal-400 to-blue-900">
    <!-- Apresentação -->
    <div class="md:w-[72%] mx-auto">
      <div class="apresentacao flex flex-col items-center md:flex-row justify-left md:w-[100%]">
        <img class="foto w-64 h-82 md:w-70 md:h-70 rounded-full" src="./assets/img/ddd.png" alt="Minha Foto" />
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
        Olá, sou Garbson, um desenvolvedor front-end brasileiro. Desde os 16 anos, sou apaixonado por programação e atualmente estudo
        Sistemas de Informação na Universidade Federal do Acre.
        <br />
        Nasci e cresci na região norte do Brasil e cursei o ensino médio no Colégio Militar. Sou um desenvolvedor comunicativo, competitivo
        e proativo, sempre disposto a abraçar novos desafios.
        <br />
        Além disso, sou dedicado e sempre interessado em aprender coisas novas, resolver problemas e enfrentar desafios complexos. 💪
      </p>
      <div class="redes flex items-center mt-3">
        <a href="https://api.whatsapp.com/send?phone=5568992490198" class="text-white hover:text-blue-300">
          <img src="./assets/img/whatsapp-svgrepo-com.svg" alt="WhatsApp" class="w-8 h-8 mr-4" />
        </a>
        <a href="https://www.instagram.com/dev_garbson/" class="text-white hover:text-blue-300">
          <img src="./assets/img/instagram-2-1-logo-svgrepo-com.svg" alt="Instagram" class="w-8 h-8 mr-4" />
        </a>
        <a href="https://github.com/Garbson" class="text-white hover:text-blue-300">
          <img src="./assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-8 h-8 mr-4" />
        </a>
        <a href="https://www.linkedin.com/in/garbson-souza-santos-0744a825a" class="text-white hover:text-blue-300">
          <img src="./assets/img/linkedin-svgrepo-com.svg" alt="LinkedIn" class="w-9 h-9" />
        </a>
      </div>
    </div>
    <div class="flex flex-wrap mt-10">
      <BaseCard></BaseCard>
    </div>
  </div>
</template>

<script setup>
import BaseCard from './components/BaseCard.vue'
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
