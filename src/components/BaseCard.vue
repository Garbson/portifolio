<template>
  <div class="w-[100%]">
    <div class="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      <div
        v-for="project in projects"
        :key="project.title"
        class="projeto shadow-md rounded-lg bg-gradient-to-tl from-blue-800 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105"
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
              <img v-if="project.firebase" src="@/assets/img/firebase.svg" alt="Firebase" class="w-6 h-6" title="Firebase" />
              <img v-if="project.html" src="@/assets/img/html.svg" alt="HTML" class="w-6 h-6" title="HTML" />
              <img v-if="project.vue" src="@/assets/img/vue-svgrepo-com.svg" alt="Vue" class="w-6 h-6" title="Vue.js" />
              <img v-if="project.css" src="@/assets/img/css-3-svgrepo-com.svg" alt="CSS" class="w-6 h-6" title="CSS" />
              <img v-if="project.tailwind" src="@/assets/img/tailwind.svg" alt="Tailwind" class="w-6 h-6" title="Tailwind" />
              <img v-if="project.javascript" src="@/assets/img/javascript.svg.png" alt="JavaScript" class="w-6 h-6" title="JavaScript" />
              <img v-if="project.Quasar" src="@/assets/img/Quasar.svg" alt="Quasar" class="w-6 h-6" title="Quasar" />
              <img v-if="project.node" src="@/assets/img/node.svg" alt="Node.js" class="w-6 h-6" title="Node.js" />
              <img v-if="project.nuxt" src="@/assets/img/nuxt.png" alt="Nuxt.js" class="w-6 h-6" title="Nuxt.js" />
            </div>
            <a :href="project.github">
              <img src="@/assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-6 h-6" title="GitHub" />
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})
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
