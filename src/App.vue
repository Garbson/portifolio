<template>
  <div class="mainframe-app min-h-screen relative">
    <MainframeBackground />

    <BootSequence />

    <div class="relative z-10">
      <NavBarComponent />
      <div class="w-[90%] md:w-[80%] mx-auto pt-28">
        <Apresentacao />
      </div>
      <SobreMim />
      <SocialLinks :links="socialLinks" />
      <Projetos />
      <Experiencia />
      <Backlog />
      <Depoimentos />
      <Certificados />
      <CallToAction />
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import MainframeBackground from './components/MainframeBackground.vue'
import Backlog from './components/Backlog.vue'
import BootSequence from './components/BootSequence.vue'
import Apresentacao from './components/Apresentacao.vue'
import CallToAction from './components/CallToAction.vue'
import Certificados from './components/Certificados.vue'
import Depoimentos from './components/Depoimentos.vue'
import Experiencia from './components/Experiencia.vue'
import NavBarComponent from './components/NavBar.vue'
import Projetos from './components/Projetos.vue'
import SobreMim from './components/SobreMim.vue'
import SocialLinks from './components/SocialLinks.vue'

// título, descrição e idioma da página acompanham o idioma escolhido
const { t, locale } = useI18n()
const htmlLang = { pt: 'pt-BR', en: 'en', es: 'es', ru: 'ru', gr: 'el' }
watch(
  locale,
  (code) => {
    document.documentElement.lang = htmlLang[code] || code
    document.title = t('ui.meta.title')
    ;['meta[name="description"]', 'meta[property="og:description"]', 'meta[property="twitter:description"]'].forEach((sel) =>
      document.querySelector(sel)?.setAttribute('content', t('ui.meta.description'))
    )
    ;['meta[property="og:title"]', 'meta[property="twitter:title"]'].forEach((sel) => document.querySelector(sel)?.setAttribute('content', t('ui.meta.title')))
  },
  { immediate: true }
)

const socialLinks = {
  whatsapp: 'https://api.whatsapp.com/send?phone=5568992490198',
  github: 'https://github.com/Garbson',
  linkedin: 'https://www.linkedin.com/in/garbson-souza-0744a825a/',
  instagram: 'https://instagram.com/garbsondev/',
}
</script>
