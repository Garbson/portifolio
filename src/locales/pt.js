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
        company: "KNN Idiomas Brasil",
        period: "Out 2024 - Presente",
        description: "Na KNN idiomas Brasil, trabalho como desenvolvedor Front-end, principalmente usando Vue.js (v2, v3) com Vuetify (v2, v3), e também com API Rest."
      },
      {
        role: "Desenvolvedor Front-end",
        company: "Hellenic Technologies",
        period: "Abr 2024 - Presente",
        description: "Desenvolvimento com Vue.js e Nuxt.js, consumo de APIs REST, gerenciamento de estado com Pinia, implementação de funcionalidades complexas em JavaScript, resolução de problemas e otimização de desempenho, colaborando com designers e desenvolvedores back-end para entregar experiências de usuário de alta qualidade."
      },
      {
        role: "Desenvolvedor Front-end",
        company: "NeuroAEye (Freelance)",
        period: "Abr 2024 - Ago 2024",
        description: "Desenvolvimento com Vue.js, consumo de APIs REST, JavaScript, Pixi.js para gráficos 2D de alta performance, e resolução de bugs para otimizar o desempenho da aplicação."
      },
      {
        role: "Desenvolvedor Front-end",
        company: "AmazonNanoForest (Freelance)",
        period: "2021 - 2023",
        description: "Desenvolvimento de website para empresa de biotecnologia, criando interfaces intuitivas e responsivas com tecnologias modernas."
      },
      {
        role: "Desenvolvedor Front-end",
        company: "Hostel Pachacuteq (Freelance)",
        period: "2022",
        description: "Criação de site para hotel em Cusco, Peru, com foco em experiência do usuário e design responsivo."
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
      }
    ]
  }
};