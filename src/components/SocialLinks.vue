<template>
  <div class="redes flex items-center justify-center mt-3">
    <a :href="links.whatsapp" class="text-white hover:text-blue-300">
      <img src="../assets/img/whatsapp-svgrepo-com.svg" alt="WhatsApp" class="w-8 h-8 mr-4" />
    </a>
    <a :href="links.instagram" class="text-white hover:text-blue-300">
      <img src="../assets/img/instagram-2-1-logo-svgrepo-com.svg" alt="Instagram" class="w-8 h-8 mr-4" />
    </a>
    <a :href="links.github" class="text-white hover:text-blue-300">
      <img src="../assets/img/github-142-svgrepo-com.svg" alt="GitHub" class="w-8 h-8 mr-4" />
    </a>
    <a :href="links.linkedin" class="text-white hover:text-blue-300">
      <img src="../assets/img/linkedin-svgrepo-com.svg" alt="LinkedIn" class="w-9 h-9" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
};
</script>
