<template>
  <div class="body bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
    <div class="md:w-[72%] mx-auto pt-20">
      <NavBarComponent />
      <Apresentacao />
    </div>
    <SobreMim />
    <Experiencia />
    <SocialLinks :links="socialLinks" />
    <Projetos />
    <Depoimentos />
    <Certificados />
  </div>
</template>

<script setup>
import Apresentacao from "./components/Apresentacao.vue";
import Certificados from "./components/Certificados.vue";
import Depoimentos from "./components/Depoimentos.vue";
import Experiencia from "./components/Experiencia.vue";
import NavBarComponent from "./components/NavBar.vue";
import Projetos from "./components/Projetos.vue";
import SobreMim from "./components/SobreMim.vue";
import SocialLinks from "./components/SocialLinks.vue";

const socialLinks = {
  whatsapp: "https://api.whatsapp.com/send?phone=5568992490198",
  github: "https://github.com/Garbson",
  linkedin: "https://www.linkedin.com/in/garbson-souza-0744a825a/",
};
</script>

<style scoped>
.body {
  padding-top: 4rem; /* Espaço para o NavBar */
  padding-bottom: 20px;
}
</style>
