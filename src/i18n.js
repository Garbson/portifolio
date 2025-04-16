import { createI18n } from 'vue-i18n';

// Importando os arquivos de idiomas separados
import en from './locales/en.js';
import es from './locales/es.js';
import gr from './locales/gr.js';
import pt from './locales/pt.js';
import ru from './locales/ru.js';

// Configuração do i18n com os idiomas importados
const messages = {
  en,
  pt,
  es,
  ru,
  gr
};

const i18n = createI18n({
  locale: 'en', // Idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages,
});

export default i18n;
