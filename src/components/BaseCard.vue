<template>
  <div class="w-[100%]">
    <div
      class="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto"
    >
      <div
        v-for="(project, index) in projects"
        :key="project.title"
        class="projeto shadow-md rounded-lg bg-gradient-to-tl from-blue-800 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
        data-aos="flip-up"
        :data-aos-delay="index * 100"
      >
        <a :href="project.link" target="_blank" class="flex flex-col h-full w-full">
          <img
            :src="project.img"
            :alt="project.title"
            class="w-full h-40 object-cover rounded-t-lg cursor-pointer shadow-xl"
            :title="project.title"
          />
          <div class="p-5 flex-grow">
            <h3 class="titulo text-lg font-semibold mt-2">{{ project.title }}</h3>
            <p class="border-t-2"></p>
            <div class="h-full">
              <p class="description text-sm h-[100%] mt-2">{{ project.description }}</p>
              
              <!-- Métricas do projeto (se existirem) -->
              <div v-if="project.metrics" class="mt-2 bg-blue-800 rounded p-2">
                <h4 class="text-xs font-bold text-blue-300 mb-1">IMPACTO:</h4>
                <ul class="list-disc list-inside text-xs text-blue-100 space-y-1">
                  <li v-for="metric in project.metrics" :key="metric">{{ metric }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="linguagens-projeto flex justify-between items-center p-4 border-black mt-auto"
          >
            <div class="flex space-x-2">
              <img
                v-if="project.firebase"
                src="@/assets/img/firebase.svg"
                alt="Firebase"
                class="w-6 h-6"
                title="Firebase"
              />
              <img
                v-if="project.react"
                src="@/assets/img/react.svg"
                alt="React"
                class="w-6 h-6"
                title="React"
              />
              <img
                v-if="project.nextjs"
                src="@/assets/img/nextjs.svg"
                alt="Next.js"
                class="w-6 h-6"
                title="Next.js"
              />
              <img
                v-if="project.html"
                src="@/assets/img/html.svg"
                alt="HTML"
                class="w-6 h-6"
                title="HTML"
              />
              <img
                v-if="project.vue"
                src="@/assets/img/vue-svgrepo-com.svg"
                alt="Vue"
                class="w-6 h-6"
                title="Vue.js"
              />
              <img
                v-if="project.css"
                src="@/assets/img/css-3-svgrepo-com.svg"
                alt="CSS"
                class="w-6 h-6"
                title="CSS"
              />
              <img
                v-if="project.tailwind"
                src="@/assets/img/tailwind.svg"
                alt="Tailwind"
                class="w-6 h-6"
                title="Tailwind"
              />
              <img
                v-if="project.javascript"
                src="@/assets/img/javascript.svg.png"
                alt="JavaScript"
                class="w-6 h-6"
                title="JavaScript"
              />
              <img
                v-if="project.typescript"
                src="@/assets/img/typescript.png"
                alt="typescript"
                class="w-6 h-6"
                title="typescript"
              />
              <img
                v-if="project.Quasar"
                src="@/assets/img/Quasar.svg"
                alt="Quasar"
                class="w-6 h-6"
                title="Quasar"
              />
              <img
                v-if="project.node"
                src="@/assets/img/node.svg"
                alt="Node.js"
                class="w-6 h-6"
                title="Node.js"
              />
              <img
                v-if="project.nuxt"
                src="@/assets/img/nuxt.png"
                alt="Nuxt.js"
                class="w-6 h-6"
                title="Nuxt.js"
              />
              <img
                v-if="project.bootstrap"
                src="@/assets/img/bootstrap.png"
                alt="bootstrap"
                class="w-6 h-6"
                title="bootstrap"
              />
            </div>
            <a :href="project.github">
              <img
                src="@/assets/img/github-142-svgrepo-com.svg"
                alt="GitHub"
                class="w-6 h-6"
                title="GitHub"
              />
            </a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Recebe os projetos como prop do componente pai
const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.content {
  width: 72%;
  margin-bottom: 50px;
}

.projeto {
  display: flex;
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

@media (max-width: 768px) {
  .content {
    width: 90%;
  }
}
</style>
