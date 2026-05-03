<template>
  <div id="about" class="apresentacao flex flex-col items-center md:flex-row justify-start gap-8 md:gap-12 py-8 md:py-16">
    <!-- Foto com efeito glass -->
    <div class="foto-wrapper flex-shrink-0">
      <div class="foto-ring">
        <img
          class="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover"
          src="/logo.png"
          alt="Foto de perfil de Garbson Souza, desenvolvedor front-end"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Texto -->
    <div class="text-center md:text-left">
      <p class="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-2 opacity-80">Portfolio</p>
      <h2 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
        {{ $t('introduction.greeting') }}
      </h2>
      <p class="text-lg md:text-xl text-slate-300 mb-8 max-w-md">{{ $t('introduction.role') }}</p>

      <!-- Botão download -->
      <a
        href="/GarbsonSouza_CV.pdf"
        download
        class="cta-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {{ $t('introduction.cta') }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.foto-ring {
  position: relative;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(37, 99, 235, 0.8), rgba(139, 92, 246, 0.8));
  box-shadow: 0 0 40px rgba(20, 184, 166, 0.3), 0 0 80px rgba(37, 99, 235, 0.2);
  animation: rotateBorder 6s linear infinite;
}

.foto-ring img {
  display: block;
}

@keyframes rotateBorder {
  0% {
    background: linear-gradient(0deg, rgba(20, 184, 166, 0.9), rgba(37, 99, 235, 0.9), rgba(139, 92, 246, 0.9));
  }
  33% {
    background: linear-gradient(120deg, rgba(37, 99, 235, 0.9), rgba(139, 92, 246, 0.9), rgba(20, 184, 166, 0.9));
  }
  66% {
    background: linear-gradient(240deg, rgba(139, 92, 246, 0.9), rgba(20, 184, 166, 0.9), rgba(37, 99, 235, 0.9));
  }
  100% {
    background: linear-gradient(360deg, rgba(20, 184, 166, 0.9), rgba(37, 99, 235, 0.9), rgba(139, 92, 246, 0.9));
  }
}

.cta-btn {
  background: rgba(20, 184, 166, 0.15);
  border: 1px solid rgba(20, 184, 166, 0.4);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 20px rgba(20, 184, 166, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.cta-btn:hover {
  background: rgba(20, 184, 166, 0.25);
  border-color: rgba(20, 184, 166, 0.7);
  box-shadow: 0 0 30px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}
</style>
