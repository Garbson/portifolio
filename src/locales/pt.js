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
    👋 Olá, sou Garbson Souza Santos, um desenvolvedor front-end apaixonado por criar interfaces de usuário intuitivas e responsivas.
    Com uma sólida base em tecnologias modernas, Vue.js, Quasar, Node.js, Nuxt.js, Vuex e Pinia, transformo ideias em experiências
    digitais excepcionais. 💡 Desde os 16 anos, tenho me aprofundado no universo da programação, acumulando uma vasta experiência em
    projetos freelancer que abrangem diferentes setores e geografias. Já trabalhei com uma empresa americana, desenvolvendo soluções
    inovadoras, e colaborei com empresas de biotecnologia, além de um hotel em Cusco, no Peru, sempre focado em entregar produtos de
    alta qualidade e valor agregado. 🌍 Atualmente, trabalho como desenvolvedor para a Hellenic Technologies, uma empresa grega, e para
    o KNN Group, onde continuo a aplicar e expandir minhas competências. Minha expertise inclui o consumo de APIs para a criação de
    aplicações web robustas e responsivas, garantindo uma performance otimizada e uma experiência de usuário (UX) de excelência. 🚀
    Além da minha experiência prática, estou cursando Sistemas de Informação na Universidade Federal do Acre, o que me permite alinhar
    conhecimentos teóricos e práticos, mantendo-me atualizado com as últimas tendências e inovações do mercado de tecnologia. 🎓
  `,
  },
  skills: {
    title: "Minhas Habilidades",
    categories: [
      {
        name: "Front-end",
        items: [
          { name: "Vue.js", level: 90 },
          { name: "Quasar", level: 85 },
          { name: "React", level: 75 },
          { name: "Next.js", level: 70 },
          { name: "HTML5", level: 95 },
          { name: "CSS3/SCSS", level: 90 },
          { name: "Tailwind CSS", level: 85 },
          { name: "JavaScript", level: 90 },
          { name: "TypeScript", level: 80 }
        ]
      },
      {
        name: "Back-end & Ferramentas",
        items: [
          { name: "Node.js", level: 75 },
          { name: "Firebase", level: 80 },
          { name: "Git/GitHub", level: 85 },
          { name: "RESTful APIs", level: 85 },
          { name: "Responsive Design", level: 95 },
          { name: "Nuxt.js", level: 75 },
          { name: "UI/UX Design", level: 70 }
        ]
      }
    ]
  },
  projects: [
    {
      title: "Clube da Luta CT",
      description: "Uma plataforma de clube de treinamento de combate construída com tecnologias modernas.",
      img: "CtClube.png",
      firebase: true,
      typescript: true,
      react: true,
      nextjs: true,
      github: "https://github.com/Garbson/grecieCT",
      link: "https://github.com/Garbson/grecieCT",
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
        role: "Desenvolvedor Front-end",
        company: "Hellenic Technologies",
        period: "2022 - Presente",
        description: "Desenvolvimento de interfaces para o marketplace global Feedel, utilizando Vue.js, Quasar e Node.js."
      },
      {
        role: "Desenvolvedor Front-end",
        company: "KNN Group",
        period: "2023 - Presente",
        description: "Implementação de soluções personalizadas para diferentes clientes usando tecnologias modernas de front-end."
      },
      {
        role: "Freelancer",
        company: "Diversos Projetos",
        period: "2021 - Presente",
        description: "Desenvolvimento de websites e aplicações web para clientes internacionais, incluindo empresas de biotecnologia e hotelaria."
      }
    ]
  },
  testimonials: {
    title: "Depoimentos",
    items: [
      {
        name: "Carlos Silva",
        role: "CEO, Amazon Nano Forest",
        text: "O Garbson desenvolveu nossa plataforma com excelência, superando todas as nossas expectativas. O resultado foi uma interface intuitiva e profissional."
      },
      {
        name: "Maria Santos",
        role: "Gerente de Projetos, KNN Group",
        text: "Trabalhando com o Garbson, notamos seu compromisso com prazos e qualidade. Sua habilidade técnica e capacidade de resolver problemas complexos são impressionantes."
      }
    ]
  }
};