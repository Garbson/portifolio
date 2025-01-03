<template>
  <div id="about" class="apresentacao flex flex-col items-center md:flex-row justify-left md:w-[100%]">
    <img class="foto w-64 h-82 md:w-70 md:h-70 rounded-full" src="/profile.png" alt="Minha Foto" />
    <div class="bb md:text-left">
      <h2 class="text-3xl md:text-5xl font-semibold text-white">{{ $t('introduction.greeting') }}</h2>
      <p class="text-2xl text-white mt-2 md:mt-4">{{ $t('introduction.role') }}</p>
    </div>
  </div>
</template>
