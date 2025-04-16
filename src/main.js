import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';

// Importando AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importando os estilos do AOS

// Inicializando AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 50,
  delay: 100
});

const app = createApp(App); 
app.use(i18n); 
app.mount('#app');
