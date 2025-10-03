# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de desenvolvimento

### Desenvolvimento
```bash
npm run dev       # Inicia servidor de desenvolvimento Vite com hot-reload
```

### Build e produção
```bash
npm run build     # Build de produção com minificação
npm run preview   # Preview do build de produção
```

### Instalação
```bash
npm install       # Instala todas as dependências
```

## Arquitetura do projeto

Este é um portfólio pessoal construído com Vue 3 + Vite, usando Tailwind CSS para estilização e vue-i18n para internacionalização.

### Stack principal
- **Vue 3** com Composition API
- **Vite** como bundler e servidor de desenvolvimento
- **Tailwind CSS** com configuração customizada para responsividade
- **Vue I18n** para suporte a múltiplos idiomas (pt, en, es, ru, gr)
- **AOS** (Animate On Scroll) para animações
- **Prettier** para formatação de código

### Estrutura de componentes
- `App.vue` - Componente raiz que organiza todas as seções do portfólio
- `src/components/` - Componentes Vue organizados por funcionalidade:
  - `NavBar.vue` - Navegação principal
  - `Apresentacao.vue` - Seção de apresentação/hero
  - `SobreMim.vue` - Seção sobre mim
  - `Experiencia.vue` - Experiências profissionais
  - `Projetos.vue` - Portfólio de projetos
  - `Habilidades.vue` - Skills técnicas
  - `Depoimentos.vue` - Testimonials
  - `Certificados.vue` - Certificações
  - `SocialLinks.vue` - Links para redes sociais
  - `BaseCard.vue` - Componente base reutilizável

### Sistema de internacionalização
- Arquivos de tradução em `src/locales/` (pt.js, en.js, es.js, ru.js, gr.js)
- Configuração centralizada em `src/i18n.js`
- Idioma padrão: inglês, com fallback para inglês

### Configurações importantes
- **Tailwind**: Breakpoints customizados, principalmente `sm: '777px'`
- **Prettier**: Formatação sem ponto e vírgula, aspas simples, largura 140 caracteres
- **Alias**: `@` configurado para `./src`
- **VSCode**: Extensões recomendadas para Vue 3 (Volar)

### Padrões de desenvolvimento
- Componentes usam Composition API (`<script setup>`)
- Classes Tailwind para estilização
- Componentes scoped quando necessário
- Estrutura de pastas por tipo de arquivo (components, locales)