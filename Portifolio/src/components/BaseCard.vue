<template>
  <div class="projeto">
    <a :href="link" target="_blank">
      <img :src="img" :alt="title" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="linguaguens-projeto">
        <div>
          <img v-if="html" src="src/assets/img/html-5-svgrepo-com.svg" alt="HTML" />
          <img v-if="vue" src="src/assets/img/vue-svgrepo-com.svg" alt="">
          <img v-if="css" src="src/assets/img/css-3-svgrepo-com.svg" alt="CSS" />
          <img v-if="javascript" src="src/assets/img/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc201e143.7543356315282503060077.png" alt="JavaScript" />
        </div>
          <a :href="github"><img src="src/assets/img/github-142-svgrepo-com.svg" alt="" /></a>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  img: String,
  html: Boolean,
  css: Boolean,
  javascript: Boolean,
  vue: Boolean,
  link: String,
  github: String
})
</script>

<style scoped>
.projeto {   
  margin: 15px;
  border: 2px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: calc(33% - 30px);
  height: 100%;
}

.projeto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

/* To center the content of each project (text) */
.projeto a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  flex-grow: 1;
}

.linguaguens-projeto {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  padding: 4px;
}

.linguaguens-projeto img {
  width: 30px !important;
  height: 100% !important;
  /* margin-right: 5px; */
}

.linguaguens-projeto img:last-child {
  margin-left: auto;
  margin-right: 0;
}

.projeto img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

/* To center the content of each project (text) */
.projeto a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #3ccac3;
}

.linguaguens-projeto {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  padding: 4px;
}

.linguaguens-projeto img {
  width: 30px !important;
  height: 100% !important;
  /* margin-right: 5px; */
}

.linguaguens-projeto img:last-child {
  margin-left: auto;
  margin-right: 0;
}

@media (max-width: 900px) {
  .projeto {
    width: calc(50% - 30px);
    height: 100%;
  }
}

@media (max-width: 700px) {
  .projeto {
    width: 100%;
  
  }
}

h3{
  font-weight: bolder;
}


</style>
