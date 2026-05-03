<template>
  <div class="min-h-screen relative overflow-x-hidden bg-[#020817]">
    <!-- Animated background blobs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
    </div>

    <!-- DevTools Ghost -->
    <DevToolsGhost />

    <div class="relative z-10">
      <NavBarComponent />
      <div class="md:w-[72%] mx-auto pt-28 px-4">
        <Apresentacao />
      </div>
      <SobreMim />
      <SocialLinks :links="socialLinks" />
      <Projetos />
      <Experiencia />
      <Depoimentos />
      <Certificados />
      <CallToAction />
    </div>
  </div>
</template>

<script setup>
import Apresentacao from './components/Apresentacao.vue'
import DevToolsGhost from './components/DevToolsGhost.vue'
import CallToAction from './components/CallToAction.vue'
import Certificados from './components/Certificados.vue'
import Depoimentos from './components/Depoimentos.vue'
import Experiencia from './components/Experiencia.vue'
import NavBarComponent from './components/NavBar.vue'
import Projetos from './components/Projetos.vue'
import SobreMim from './components/SobreMim.vue'
import SocialLinks from './components/SocialLinks.vue'

const socialLinks = {
  whatsapp: 'https://api.whatsapp.com/send?phone=5568992490198',
  github: 'https://github.com/Garbson',
  linkedin: 'https://www.linkedin.com/in/garbson-souza-0744a825a/',
  instagram: 'https://instagram.com/garbsondev/',
}
</script>

<style>
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: blobFloat 15s ease-in-out infinite;
}

.blob-1 {
  width: 650px;
  height: 650px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.25), rgba(37, 99, 235, 0.15));
  top: -200px;
  right: -150px;
  animation-delay: 0s;
}

.blob-2 {
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2), rgba(79, 70, 229, 0.12));
  top: 40%;
  left: -180px;
  animation-delay: -5s;
}

.blob-3 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.2), rgba(8, 145, 178, 0.12));
  bottom: 15%;
  right: 5%;
  animation-delay: -10s;
}

.blob-4 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.08));
  bottom: 35%;
  left: 30%;
  animation-delay: -7s;
}

@keyframes blobFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(40px, -30px) scale(1.08);
  }
  50% {
    transform: translate(-25px, 35px) scale(0.94);
  }
  75% {
    transform: translate(25px, 15px) scale(1.03);
  }
}
</style>
