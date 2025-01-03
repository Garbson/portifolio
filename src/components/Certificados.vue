<template>
  <section id="certificates" class="w-[90%] md:w-[72%] mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg">
    <h1 class="text-2xl md:text-3xl font-bold mb-4">{{ $t("certificates.title") }}</h1>
    <ul class="list-disc pl-5">
      <li>
        <a 
          href="https://www.freecodecamp.org/portuguese/certification/garbson_souza/responsive-web-design" 
          class="text-blue-300 underline hover:text-blue-400">
          {{ $t("certificates.items.responsiveWebDesign") }}
        </a>
        - <strong>FreeCodeCamp</strong>
      </li>
      <li>
        <a 
          href="https://www.freecodecamp.org/certification/garbson_souza/javascript-algorithms-and-data-structures" 
          class="text-blue-300 underline hover:text-blue-400">
          {{ $t("certificates.items.jsAlgorithms") }}
        </a>
        - <strong>FreeCodeCamp</strong>
      </li>
      <li>
        <a 
          href="https://www.linkedin.com/in/garbson-souza-0744a825a/overlay/1635529817666/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw" 
          class="text-blue-300 underline hover:text-blue-400">
          {{ $t("certificates.items.cs50") }}
        </a>
        - <strong>Harvard University</strong>
      </li>
    </ul>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Estilize conforme necessário */
</style>
