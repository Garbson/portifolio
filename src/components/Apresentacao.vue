<template>
  <div id="about" class="apresentacao flex flex-col items-center md:flex-row justify-left md:w-[100%]">
    <img class="foto w-64 h-82 md:w-70 md:h-70 rounded-full" src="/public/profile.png" alt="Minha Foto" />
    <div class="bb md:text-left">
      <h2 class="text-3xl md:text-5xl font-semibold text-white">{{ $t('introduction.greeting') }}</h2>
      <p class="text-2xl text-white mt-2 md:mt-4">{{ $t('introduction.role') }}</p>
      
      <!-- Botão de Download do Currículo -->
      <a href="/public/GarbsonSouza_CV.pdf" download 
         class="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {{ $t('introduction.cta') }}
        </span>
      </a>
    </div>
  </div>
</template>
