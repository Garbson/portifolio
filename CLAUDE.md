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
- `App.vue` - Componente raiz que organiza as seções; também atualiza título, descrição e `lang` da página conforme o idioma
- `src/components/` - Componentes Vue:
  - `MainframeBackground.vue` - Fundo em canvas: sessão de código sendo digitada (JCL, COBOL, Vue)
  - `BootSequence.vue` - Tela de boot (IPL) exibida uma vez por sessão
  - `NavBar.vue` - Navegação principal (hambúrguer abaixo de 1000px)
  - `Apresentacao.vue` - Hero no estilo terminal ISPF
  - `SobreMim.vue` - Seção sobre mim
  - `SocialLinks.vue` - Links para redes sociais
  - `Projetos.vue` + `BaseCard.vue` - Projetos em destaque (a lista "outros" só aparece se houver itens)
  - `Experiencia.vue` + `WorldMap.vue` - Linha do tempo com mapa de pontos e pings
  - `Backlog.vue` - Ferramentas e linguagens em formato de backlog
  - `Depoimentos.vue` - Depoimentos (exibe os 4 primeiros)
  - `Certificados.vue` - Certificações
  - `CallToAction.vue` - Contato no estilo submissão de job

### Sistema de internacionalização
- Arquivos de tradução em `src/locales/` (pt.js, en.js, es.js, ru.js, gr.js); `pt.js` é a fonte de verdade e os demais seguem a mesma estrutura
- Todo texto visível vem do i18n (chave `ui` para a interface); não deixar texto fixo nos componentes
- Configuração centralizada em `src/i18n.js`
- Idioma padrão: português, com fallback para inglês

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