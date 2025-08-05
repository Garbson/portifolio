export default {
  navbar: {
    about: "Sobre Mim",
    projects: "Projetos",
    certificates: "Certificados",
    skills: "Habilidades",
    experience: "Experiência",
    testimonials: "Depoimentos"
  },
  introduction: {
    greeting: "Olá, sou Garbson Souza!",
    role: "Desenvolvedor Front-End",
    cta: "Baixar Currículo"
  },
  biography: {
    title: "Sobre mim",
    description: `
Desenvolvedor Frontend com 3+ anos criando aplicações web para empresas internacionais em 4 países.

Aos 20 anos, foco em habilidades técnicas e entrega de qualidade.

🌍 Jornada Internacional:
🇬🇷 Grécia (1+ ano) - Painel administrativo para produtos eBay | Nuxt.js + SSR
🇺🇸 Miami (5 meses) - Startup com gráficos 2D | Vue.js + Pixi.js
🇵🇪 Peru (projeto) - Site de hotel | Networking orgânico durante viagens
🇧🇷 Brasil (atual) - KNN Idiomas + Claro & Embratel | EdTech + Sistemas críticos de telecom

🚀 Habilidades Principais:
- Ecossistema Vue.js (Vue 3, Nuxt.js, Pinia) - Expertise crescente
- Desenvolvimento JavaScript/TypeScript moderno
- Aplicações em escala empresarial (EdTech/Telecom/Sistemas fiscais)
- Colaboração remota intercultural via plataformas de chat
- Integração de sistemas legados (Mainframe IBM + Frontend Moderno)

💼 Foco Atual:
Contribuindo para sistemas críticos de compliance fiscal para grandes operadoras brasileiras de telecom (Claro/Embratel), enquanto expando minha expertise frontend e aprendo padrões avançados do Vue.js.

📱 Projetos Paralelos:
Construí meu próprio SaaS - uma rede social para leitores acompanharem suas leituras e fazerem amizades.

- Construir produtos é diferente de construir funcionalidades

🌱 Metas 2025-2026:
Crescendo em direção ao papel de Desenvolvedor Frontend Sênior, dominando conceitos avançados do Vue.js e otimização de performance. Buscando oportunidades para aprender com equipes internacionais experientes enquanto contribuo para projetos significativos.

Sempre ansioso para aprender e colaborar com outros desenvolvedores! Prova de que barreiras de idade e idioma não definem seu potencial - seu trabalho define.
`
  },
  skills: {
    title: "Minhas Habilidades",
    categories: [
      {
        name: "Front-end",
        items: [
          { name: "Vue.js", level: 90, icon: "vue-svgrepo-com.svg", description: "Framework Vue.js para construção de interfaces interativas" },
          { name: "Quasar", level: 85, icon: "Quasar.svg", description: "Framework Quasar para aplicações Vue multiplataforma" },
          { name: "React", level: 75, icon: "react.svg", description: "Biblioteca React.js para construção de interfaces de usuário" },
          { name: "Next.js", level: 70, icon: "nextjs.svg", description: "Framework Next.js para aplicações React" },
          { name: "Bootstrap", level: 85, icon: "bootstrap.png", description: "Framework CSS Bootstrap para desenvolvimento web responsivo" },
          { name: "HTML5", level: 95, icon: "html.svg", description: "Linguagem de marcação HTML5 para conteúdo web" },
          { name: "CSS3/SCSS", level: 90, icon: "css-3-svgrepo-com.svg", description: "CSS3 e SCSS para estilização de aplicações web" },
          { name: "Tailwind CSS", level: 85, icon: "tailwind.svg", description: "Framework Tailwind CSS utility-first" },
          { name: "JavaScript", level: 90, icon: "javascript-svgrepo-com.svg", description: "Linguagem de programação JavaScript" },
          { name: "TypeScript", level: 80, icon: "typescript.png", description: "TypeScript, superconjunto de JavaScript com tipagem" }
        ]
      },
      {
        name: "Back-end & Ferramentas",
        items: [
          { name: "Node.js", level: 75, icon: "node.svg", description: "Ambiente de execução Node.js para JavaScript" },
          { name: "PHP", level: 70, icon: "php.svg", description: "Linguagem de programação PHP para desenvolvimento web" },
          { name: "Python", level: 65, icon: "python.svg", description: "Linguagem de programação Python para diversos fins" },
          { name: "Bash", level: 60, icon: "bash.svg", description: "Shell script Bash para automação de tarefas" },
          { name: "MySQL", level: 75, icon: "mysql.svg", description: "Sistema de gerenciamento de banco de dados relacional MySQL" },
          { name: "PostgreSQL", level: 70, icon: "postgresql.svg", description: "Sistema de banco de dados relacional PostgreSQL" },
          { name: "Docker", level: 65, icon: "docker.svg", description: "Plataforma de containerização Docker" },
          { name: "Firebase", level: 80, icon: "firebase.svg", description: "Plataforma Firebase para desenvolvimento de aplicações" },
          { name: "Git/GitHub", level: 85, icon: "github-color-svgrepo-com.svg", description: "Sistema de controle de versão Git e plataforma GitHub" },
          { name: "RESTful APIs", level: 85, description: "Design e consumo de APIs RESTful" },
          { name: "Responsive Design", level: 95, description: "Criação de layouts responsivos para todos os dispositivos" },
          { name: "Nuxt.js", level: 75, icon: "nuxt.png", description: "Framework Nuxt.js para aplicações Vue" },
          { name: "UI/UX Design", level: 70, description: "Princípios de design de interface e experiência do usuário" }
        ]
      }
    ]
  },
  projects: [
    {
      title: "Atapera",
      description: "loja de vendas de armas, pesca, camping e muito mais.",
      img: "atapera.jpg",
      tailwind: true,
      typescript: true,
      vue: true,
      nuxt: true,
      github: "https://github.com/Garbson/atapera-ecommerce",
      link: "https://atapera.shop/",
      metrics: [
        "50+ usuários ativos",
        "Aumento de 30%  de clientes",
        "sistemas de vendas online"
      ]
    },
    {
      title: "Clube da Luta CT",
      description: "Uma plataforma de clube de treinamento de combate construída com tecnologias modernas.",
      img: "CtClube.png",
      firebase: true,
      typescript: true,
      react: true,
      nextjs: true,
      github: "https://github.com/Garbson/grecieCT",
      link: "https://clubedaluta.pages.dev/",
      metrics: [
        "50+ usuários ativos",
        "Aumento de 30% na retenção de clientes",
        "Sistema de agendamento reduziu faltas em 25%"
      ]
    },
    {
      title: "Feedel",
      description: "Um marketplace global que conecta vendedores e clientes ao redor do mundo.",
      img: "feedel.png",
      vue: true,
      Quasar: true,
      node: true,
      nuxt: true,
      github: "https://github.com/hellenictechnologies/feedel-dashboard-garbson",
      link: "https://feedel.app/login",
      metrics: [
        "120+ vendedores cadastrados",
        "Tempo de carregamento reduzido em 40%",
        "Interface otimizada para 5 idiomas diferentes"
      ]
    },
    {
      title: "Golfim",
      description: "Plataforma para serviços de reparo e restauração de piscinas.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
    },
    {
      title: "Duolingo Clone",
      description: "Uma plataforma de aprendizado de idiomas inspirada no Duolingo.",
      img: "duolingo-clone.jpeg",
      vue: true,
      javascript: true,
      bootstrap: true,
      github: "https://github.com/Garbson/duolingo-clone",
      link: "https://duolingo-clone-6jg.pages.dev/exercise/1",
      metrics: [
        "Implementação de 15+ exercícios interativos",
        "Sistema de streak e pontuação gamificada"
      ]
    },
    {
      title: "DizeME",
      description: "Um site para ajudar as pessoas a dizimar e Ofertar com facilidade.",
      img: "dizeMe.jpg",
      typescript: true,
      vue: true,
      tailwind: true,
      github: "https://github.com/Garbson/IgrejaAdventistaCentralHumaita",
      link: "https://igreja-adventista-25-de-dezembro.pages.dev",
      metrics: [,
        "Facilitação para 100+ membros da igreja",
        "Interface intuitiva para doações",
      ]
    },
    {
      title: "Trote UFAC",
      description: "Um site gamificado para realização de um trote universitário interativo.",
      img: "trote.jpg",
      tailwind: true,
      supabase: true,
      vue: true,
      Quasar: true,
      github: "https://github.com/Garbson/trote/tree/main",
      link: "https://trote.pages.dev/",
      metrics: [
        "50+ usuários ativos",
        "Sistema de pontuação gamificada"
      ]
    },
    {
      title: "Wedding Memories",
      description: "Um site para guardar e compartilhar lembranças marcantes com fotos.",
      img: "memories.jpeg",
      vue: true,
      typescript: true,
      tailwind: true,
      github: "https://github.com/Garbson/wedding-memories",
      link: "https://wedding-memories.pages.dev/",
      metrics: [
        "1000+ fotos armazenadas",
        "Compartilhamento automático via redes sociais",
        "Cache otimizado para carregamento rápido"
      ]
    },
    {
      title: "AmazonNanoForest",
      description: "Uma iniciativa de biotecnologia que combina natureza e inovação na Amazônia.",
      img: "NanoForest.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      github: "https://github.com/Garbson/AMAZON-NANO-FOREST",
      link: "https://amazonnanoforest.com/",
      metrics: [
        "Aumento de 70% no tráfego orgânico",
        "20+ contatos de parceiros internacionais",
        "Tempo na página aumentou 45%"
      ]
    },
    {
      title: "Hostel Pachacuteq",
      description: "Site para um hotel no Peru, projetado para viajantes que buscam aventura e conforto.",
      img: "pachacuteq.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
    },
    {
      title: "Crypto Tracker",
      description: "Ferramenta para monitorar flutuações diárias de criptomoedas em tempo real.",
      img: "Crypto.png",
      vue: true,
      tailwind: true,
      javascript: true,
      firebase: true,
      github: "https://github.com/leonardo-cordeiro/CryptoTracker/tree/Garbson",
      link: "https://cryptotracker-5hk.pages.dev/",
    },
    {
      title: "Calculadora",
      description: "Aplicação simples e funcional para cálculos rápidos, desenvolvida com Pinia.",
      img: "Calculadora.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/calculadora",
      link: "https://calculadora-e7p.pages.dev/",
    },
    {
      title: "To Do List",
      description: "Gerenciador de tarefas intuitivo para organização diária.",
      img: "Todolist.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/To-do-list",
      link: "https://to-do-list-aky.pages.dev/",
    },
    {
      title: "Brasileiro.ninja",
      description: "Base de dados nacional com informações úteis como CEP, ISBN, DDD e CNPJ.",
      img: "Brasileiro.jpeg",
      vue: true,
      css: true,
      javascript: true,
      github: "https://github.com/arnonrdp/Brasileiro-Ninja",
      link: "https://brasileiro.ninja/",
    },
    {
      title: "Portfólio",
      description: "Meu portfólio pessoal, exibindo projetos e habilidades tecnológicas.",
      img: "portfolio.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/portifolio",
      link: "https://portifolio-by1.pages.dev",
    },
    {
      title: "Temperature",
      description: "Consulta global de temperatura de maneira prática e simples.",
      img: "temperatures.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/projeto-site-pra-ver-a-temperatura",
      link: "https://temperature-9ta.pages.dev/",
    },
    {
      title: "Conversor",
      description: "Ferramenta eficiente para conversão de moedas internacionais.",
      img: "Conversor.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Currency-Converter",
      link: "https://currency-converter-cgn.pages.dev/",
    },
    {
      title: "City Skyline",
      description: "Experiência visual interativa ao redimensionar a janela do navegador.",
      img: "city.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/city",
      link: "https://city-du9.pages.dev/",
    },
    {
      title: "Dangerous Dragons",
      description: "Um jogo RPG desenvolvido com JavaScript puro.",
      img: "dangerous.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Dangerous-dragon",
      link: "https://dangerous-dragon.pages.dev/",
    },
  ],
  certificates: {
    title: "Certificados",
    items: {
      responsiveWebDesign: "Design Responsivo para Web",
      jsAlgorithms: "Algoritmos e Estruturas de Dados em JavaScript",
      cs50: "CS50: Introdução à Ciência da Computação",
    },
  },
  experience: {
    title: "Experiência Profissional",
    items: [
      {
        role: "Desenvolvedor Front-End",
        company: "NFCOM (Grupo Easy)",
        location: "Rio Branco, Acre",
        period: "Jul 2025 - Atual",
        description: "Desenvolvimento de sistema de análise tributária para o Grupo Easy. Trabalho com tecnologias mainframe IBM e Natural Language. Desenvolvimento de soluções para processamento de dados tributários. Contribuição em projetos de grande escala corporativa. Prestação de serviços para Claro e Embratel.",
        current: true
      },
      {
        role: "Desenvolvedor Front-End",
        company: "KNN Idiomas",
        location: "Balneário Camboriú, SC",
        period: "Set 2024 - Jun 2025",
        description: "Desenvolvimento de plataforma educacional moderna utilizando Vue.js e Nuxt.js. Implementação de interface responsiva e intuitiva para sistema de aprendizado. Integração com sistemas de LMS e otimização de experiência do usuário."
      },
      {
        role: "Desenvolvedor Front-End",
        company: "Hellenic Technologies",
        location: "Atenas, Grécia (Remoto)",
        period: "Jan 2024 - Fev 2025",
        description: "Desenvolvimento de soluções front-end para mercado europeu. Colaboração em equipe internacional utilizando metodologias ágeis. Implementação de componentes reutilizáveis em Vue.js."
      },
      {
        role: "Desenvolvedor Front-End",
        company: "NeuroAEye",
        location: "Miami, Flórida (Remoto)",
        period: "Mar 2024 - Out 2024",
        description: "Desenvolvimento de interface para aplicação de inteligência artificial. Integração de componentes visuais avançados utilizando Pixi.js. Trabalho com dados médicos e visualizações interativas."
      },
      {
        role: "Desenvolvedor Front-End",
        company: "Hostal Pachacuteq Inn",
        location: "Cusco, Peru (Remoto)",
        period: "Jan 2024",
        description: "Desenvolvimento de sistema de reservas hoteleiras. Implementação de interface multilíngue responsiva. Integração com APIs de pagamento e booking."
      },
      {
        role: "Desenvolvedor Front-End",
        company: "AmazonNanoForest",
        location: "Rio Branco, Acre (Remoto)",
        period: "Nov 2023",
        description: "Desenvolvimento do website corporativo para empresa de produtos naturais. Criação de interface responsiva para e-commerce de produtos amazônicos. Implementação de catálogo interativo e sistema de apresentação de produtos."
      }
    ]
  },
  testimonials: {
    title: "Depoimentos",
    items: [
      {
        name: "Arnon Rodrigues de Paula",
        role: "Front-End Expert | Lead Developer | Agile",
        text: "Recomendo Garbson, um jovem talentoso que mentorei nos últimos meses. Garbson possui uma notável curiosidade e desejo de aprender, sempre buscando se desenvolver e superar desafios. Ele se destaca por suas excelentes soft skills, incluindo comunicação eficaz, empatia e habilidade para trabalhar em equipe. Sua atitude positiva e disposição para ajudar os outros o tornam um colega valioso. Garbson também demonstra uma capacidade impressionante de resolver problemas de maneira prática e inovadora. Acima de tudo, Garbson é uma pessoa de caráter íntegro e confiável, com uma ética de trabalho exemplar. Sua dedicação e entusiasmo são visíveis em tudo o que faz."
      },
      {
        name: "Jesiel Monteiro de Oliveira",
        role: "SAFe® 4 Agilist | CSS Senior Specialist at NTT Data | Product Owner",
        text: "Recomendo fortemente Garbson, um jovem programador front-end, extremamente dedicado e com uma impressionante capacidade de aprendizado rápido. Durante o tempo em que trabalhamos juntos, ele demonstrou habilidades sólidas em tecnologias de front-end, além de uma incrível capacidade de resolver problemas complexos com eficiência e criatividade. Sua vontade de aprender e se adaptar a novos desafios o torna um ativo valioso para qualquer equipe. Com sua proatividade, comprometimento e busca constante por aperfeiçoamento, estou certo de que ele terá um futuro brilhante no desenvolvimento web."
      },
      {
        name: "Stavros Tsiogkas",
        role: "Digital Account Manager @ Hellenic Technologies",
        text: "Tenho o prazer de recomendar Garbson Souza, com quem colaborei em vários projetos de desenvolvimento, particularmente no desenvolvimento em nível de produto. A expertise técnica de Garbson, seu pensamento inovador e dedicação em entregar soluções de alta qualidade têm me impressionado constantemente. Sua capacidade de enfrentar desafios complexos e trabalhar efetivamente em equipe o torna um recurso inestimável. Estou confiante de que Garbson se destacará em qualquer empreendimento que buscar."
      },
      {
        name: "Gabriel Bodenmüller",
        role: "Software Developer | Python | Vue | JavaScript | Typescript | PostgreSQL | Computer engineer",
        text: "Tive o prazer de acompanhar o trabalho de Garbson e posso dizer com certeza: ele é um profissional incrível no mundo do desenvolvimento front-end! Com habilidades afiadas em Vue, TypeScript, CSS avançado e otimização de performance, ele não só entrega código limpo e bem estruturado, mas também se preocupa com a experiência do usuário e a usabilidade do produto. Além disso, sua capacidade de aprender rapidamente e se adaptar a novas tecnologias é impressionante. Se você procura um desenvolvedor front-end talentoso, colaborativo e comprometido, Garbson é a escolha certa!"
      },
      {
        name: "Tiago Lopes",
        role: "Analista de BI | Analista de Dados | SQL | BigQuery | Power BI | Looker Studio",
        text: "É com grande satisfação que recomendo Garbson Souza para oportunidades como Frontend Developer. Tive o privilégio de trabalhar com ele na KNN Idiomas, onde ele demonstrou consistentemente suas habilidades técnicas e seu comprometimento com resultados de alta qualidade. Garbson é um profissional talentoso, com conhecimento em tecnologias como Vue.js, Quasar, Vuex/Pinia, Node.js, JavaScript, Nuxt.js, API REST, Vuetify e TypeScript. Sua capacidade de criar interfaces modernas, intuitivas e eficientes é notável, além de sua habilidade em integrar sistemas complexos com APIs REST. Durante o tempo em que trabalhamos juntos, Garbson destaca-se por sua abordagem colaborativa e solução de problemas."
      },
      {
        name: "Anielli Martiniano Lemos",
        role: "Designer na KNN Idiomas Brasil",
        text: "Como designer, é um alívio ter alguém que entende cada ajuste de espaçamento, cada cantinho do layout, e transforma tudo em código com muito capricho e atenção aos detalhes. No front-end, o Garbson entrega com qualidade de verdade. Não é só sobre fazer funcionar — é sobre fazer bem feito, pensando em performance, usabilidade e aquela experiência que a gente sente orgulho de entregar. Sem contar que, no dia a dia, ele é parceiro pra tudo: troca ideia, ajuda, resolve pepino junto e ainda deixa o clima da equipe muito mais leve. Trabalhar com ele é aquela combinação rara de entrega boa + processo leve — coisa que faz toda a diferença no resultado (e no caminho até ele). É o tipo de pessoa que todo time merece ter por perto."
      }
    ]
  }
};