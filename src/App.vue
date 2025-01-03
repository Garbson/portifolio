<template>
  <div class="body bg-gradient-to-t  from-teal-400 to-blue-900">
    <div class="md:w-[72%] mx-auto pt-20"> <!-- Ajuste o padding -->
      <NavBarComponent />
      <Apresentacao />
    </div>
    <SobreMim />
    <SocialLinks :links="socialLinks" />
    <Projetos />
    <Certificados />
  </div>
</template>

<script setup>
import Apresentacao from "./components/Apresentacao.vue";
import Certificados from "./components/Certificados.vue";
import NavBarComponent from "./components/NavBar.vue";
import Projetos from "./components/Projetos.vue";
import SobreMim from "./components/SobreMim.vue";
import SocialLinks from "./components/SocialLinks.vue";

const socialLinks = {
  whatsapp: "https://api.whatsapp.com/send?phone=5568992490198",
  instagram: "https://www.instagram.com/dev_garbson/",
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
