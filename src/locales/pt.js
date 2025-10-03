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
Desenvolvedor Frontend com 3+ anos criando aplicações web para empresas internacionais em 4 países. Atualmente desenvolvendo sistemas críticos de compliance fiscal na NFCOM que impactam milhões de usuários nas principais operadoras brasileiras de telecom (Claro/Embratel).

🌍 Jornada Internacional:
🇬🇷 Grécia (1+ ano) - Painel administrativo eBay | Nuxt.js + SSR
🇺🇸 Miami (5 meses) - Startup com gráficos 2D | Vue.js + Pixi.js
🇵🇪 Peru (projeto) - Site de hotel | Networking orgânico durante viagens
🇧🇷 Brasil (atual) - KNN Idiomas + Claro & Embratel | EdTech + Sistemas críticos de telecom
`
  },
  techStack: {
    title: "Tech Stack",
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "Vue.js 3", level: "expert", icon: "vue-svgrepo-com.svg" },
          { name: "Nuxt.js", level: "expert", icon: "nuxt.png" },
          { name: "TypeScript", level: "advanced", icon: "typescript.png" },
          { name: "React", level: "intermediate", icon: "react.svg" },
          { name: "JavaScript (ES6+)", level: "expert", icon: "javascript-svgrepo-com.svg" }
        ]
      },
      {
        name: "Styling",
        items: [
          { name: "Tailwind CSS", level: "expert", icon: "tailwind.svg" },
          { name: "SASS/SCSS", level: "advanced", icon: "css-3-svgrepo-com.svg" },
          { name: "CSS3", level: "expert", icon: "css-3-svgrepo-com.svg" },
          { name: "Responsive Design", level: "expert" }
        ]
      },
      {
        name: "Backend & Tools",
        items: [
          { name: "Node.js", level: "intermediate", icon: "node.svg" },
          { name: "Firebase", level: "advanced", icon: "firebase.svg" },
          { name: "Git/GitHub", level: "advanced", icon: "github-color-svgrepo-com.svg" },
          { name: "REST APIs", level: "advanced" },
          { name: "Agile/Scrum", level: "intermediate" }
        ]
      },
      {
        name: "Current Focus",
        items: [
          { name: "Aplicações empresariais", description: "Soluções de negócios em larga escala" },
          { name: "Integração de sistemas legados", description: "Mainframe + Frontend Moderno" },
          { name: "Otimização de performance", description: "Foco em velocidade e eficiência" }
        ]
      }
    ]
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
  featuredProjects: [
    {
      title: "Atapera",
      description: "E-commerce completo para equipamentos esportivos e outdoor com catálogo de 1000+ produtos, carrinho de compras, sistema de busca com filtros avançados, e integração com APIs de pagamento. Implementei sistema de gerenciamento de estoque, painel administrativo para gestão de pedidos, e checkout seguro. Foco em performance e SEO para conversão de vendas.",
      img: "atapera.jpg",
      tailwind: true,
      typescript: true,
      vue: true,
      nuxt: true,
      github: "https://github.com/Garbson/atapera-ecommerce",
      link: "https://atapera.shop/",
      tech: "Vue.js, Nuxt.js, TypeScript",
      featured: true
    },
    {
      title: "Feedel",
      description: "Marketplace global que conecta vendedores e compradores internacionalmente, com sistema complexo de gerenciamento de produtos, carreiras de compras, e processamento de pagamentos. Implementei autenticação, sistema de busca avançada com filtros, e painel administrativo completo. Projeto focado em escalabilidade e performance para múltiplos usuários simultâneos.",
      img: "feedel.png",
      vue: true,
      Quasar: true,
      node: true,
      nuxt: true,
      github: "https://github.com/hellenictechnologies/feedel-dashboard-garbson",
      link: "https://feedel.app/login",
      tech: "Vue.js, Nuxt.js, Node.js",
      featured: true
    },
    {
      title: "Clube da Luta CT",
      description: "Plataforma completa para academia de artes marciais com agendamento de aulas em tempo real, tracking de progresso dos alunos, sistema de pagamentos recorrentes, e área administrativa para instrutores. Implementei dashboard com métricas de frequência, sistema de notificações, e integração com gateway de pagamento. Solução que gerencia 500+ alunos ativos.",
      img: "CtClube.png",
      firebase: true,
      typescript: true,
      react: true,
      nextjs: true,
      github: "https://github.com/Garbson/grecieCT",
      link: "https://clubedaluta.pages.dev/",
      tech: "Nuxt.js, Firebase, Stripe/Payment Gateway",
      featured: true
    },
    {
      title: "Golfim",
      description: "Plataforma profissional para serviços de reparo e restauração de piscinas com sistema de agendamento de serviços, gestão de clientes e acompanhamento de orçamentos. Implementei fluxo completo de serviço desde contato inicial até conclusão do projeto com documentação fotográfica e tracking de progresso.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
      tech: "Vue.js, Quasar, Gestão de Serviços",
      featured: true
    },
    {
      title: "Hostel Pachacuteq",
      description: "Sistema completo de reservas para hotel peruano com interface multilíngue, calendário de disponibilidade em tempo real, processamento de pagamentos e gestão de hóspedes. Implementei design responsivo otimizado para viajantes mobile com informações turísticas locais integradas e sistema de confirmação de reservas.",
      img: "pachacuteq.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
      tech: "Vue.js, Tailwind CSS, Sistema de Reservas",
      featured: true
    },
    {
      title: "AmazonNanoForest",
      description: "Website institucional para empresa de biotecnologia amazônica com foco em storytelling visual e apresentação de projetos inovadores. Implementei interface responsiva, catálogo interativo de produtos naturais, e sistema de apresentação de projetos sustentáveis. Projeto que aumentou engajamento e gerou leads internacionais.",
      img: "NanoForest.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      github: "https://github.com/Garbson/AMAZON-NANO-FOREST",
      link: "https://amazonnanoforest.com/",
      tech: "Vue.js, Tailwind CSS, Quasar",
      featured: true
    }
  ],
  projects: [
    {
      title: "DizeME",
      description: "Um site para ajudar as pessoas a dizimar e Ofertar com facilidade.",
      img: "dizeMe.jpg",
      typescript: true,
      vue: true,
      tailwind: true,
      github: "https://github.com/Garbson/IgrejaAdventistaCentralHumaita",
      link: "https://igreja-adventista-25-de-dezembro.pages.dev",
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
      title: "Wedding Memories",
      description: "Um site para guardar e compartilhar lembranças marcantes com fotos.",
      img: "memories.jpeg",
      vue: true,
      typescript: true,
      tailwind: true,
      github: "https://github.com/Garbson/wedding-memories",
      link: "https://wedding-memories.pages.dev/",
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
      title: "Duolingo Clone",
      description: "Uma plataforma de aprendizado de idiomas inspirada no Duolingo.",
      img: "duolingo-clone.jpeg",
      vue: true,
      javascript: true,
      bootstrap: true,
      github: "https://github.com/Garbson/duolingo-clone",
      link: "https://duolingo-clone-6jg.pages.dev/exercise/1",
    },
  ],
  callToAction: {
    title: "Vamos Trabalhar Juntos",
    description: "Atualmente estou aberto a novas oportunidades e projetos interessantes. Se você precisa de um desenvolvedor frontend dedicado ou quer discutir um problema desafiador, adoraria ouvir de você.",
    email: {
      text: "Email",
      link: "mailto:garbsonsouzasantos@gmail.com"
    },
    whatsapp: {
      text: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=5568992490198"
    },
    linkedin: {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/garbson-souza-0744a825a/"
    },
    resume: {
      text: "Baixar Currículo",
      link: "#resume" // Placeholder - update with actual resume link
    }
  },
  certificates: {
    title: "Certificados",
    viewCertificate: "Ver certificado",
    items: [
      {
        title: "Back End Development and APIs",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/back-end-development-and-apis"
      },
      {
        title: "Scrum: Planejamento e Desenvolvimento Ágeis",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/808e796b79aae092046d6b35bcfad80a5987c1efdd834582268590c9929ea7e2"
      },
      {
        title: "Scrum Fundamentals Certified (SFC™)",
        organization: "SCRUMstudy",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1106530"
      },
      {
        title: "Natural Programming Basic",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/details/certifications/1758668296353/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      },
      {
        title: "AI Fluency: Framework & Foundations",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "AI Fluency for Students",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/7ewkgwxbuqib"
      },
      {
        title: "Claude Code in Action",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Design Responsivo para Web",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/portuguese/certification/garbson_souza/responsive-web-design"
      },
      {
        title: "Algoritmos e Estruturas de Dados em JavaScript",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/javascript-algorithms-and-data-structures"
      },
      {
        title: "CS50: Introdução à Ciência da Computação",
        organization: "Harvard/edX",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/overlay/1635529817666/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      }
    ],
  },
  experience: {
    title: "Experiência Profissional",
    current: "Atual",
    achievements: "Principais conquistas:",
    tech: "Tech:",
    items: [
      {
        role: "Analista Desenvolvedor",
        company: "NFCOM (Grupo Easy)",
        location: "Rio Branco, Acre",
        period: "Jul 2025 - Atual",
        description: "Desenvolvo sistemas críticos de compliance fiscal para grandes operadoras de telecom brasileiras (Claro/Embratel), impactando milhões de usuários finais. Trabalho nos projetos NFCOM e RGC com integração entre tecnologias mainframe IBM e frontend moderno.",
        achievements: [
          "Implementei sistema de análise tributária que processa dados de milhões de clientes",
          "Trabalho com tecnologias legadas (Mainframe IBM + Natural Language) integradas a frontend moderno",
          "Desenvolvimento de soluções para sistemas de faturamento de larga escala"
        ],
        tech: "Vue.js, Natural Language, IBM Mainframe, Tax Systems",
        current: true
      },
      {
        role: "Desenvolvedor Frontend",
        company: "KNN Idiomas",
        location: "Balneário Camboriú, SC",
        period: "Set 2024 - Jun 2025",
        description: "Desenvolvi plataforma educacional moderna com foco em experiência do usuário e integração com sistemas de gestão de aprendizado (LMS).",
        achievements: [
          "Criei interface responsiva e intuitiva que melhorou a experiência de aprendizado",
          "Implementei integração com sistemas LMS para tracking de progresso dos alunos",
          "Otimizei performance da plataforma para acesso em diferentes dispositivos"
        ],
        tech: "Vue.js, Nuxt.js, LMS Integration"
      },
      {
        role: "Desenvolvedor Frontend",
        company: "Hellenic Technologies",
        location: "Atenas, Grécia (Remoto)",
        period: "Jan 2024 - Fev 2025",
        description: "Trabalhei com time internacional usando metodologias ágeis, desenvolvendo soluções frontend para mercado europeu.",
        achievements: [
          "Desenvolvi componentes reutilizáveis em Vue.js para aplicações enterprise",
          "Colaborei com equipe distribuída em diferentes fusos horários",
          "Implementei soluções seguindo padrões de acessibilidade europeus (WCAG)"
        ],
        tech: "Vue.js, Agile, International Team Collaboration"
      },
      {
        role: "Desenvolvedor Frontend",
        company: "NeuroAEye",
        location: "Miami, Flórida (Remoto)",
        period: "Mar 2024 - Out 2024",
        description: "Desenvolvi interface para aplicação de inteligência artificial na área médica, trabalhando com visualização de dados complexos.",
        achievements: [
          "Criei componentes de visualização para dados médicos usando Pixi.js",
          "Implementei interface para análise de imagens médicas com feedback em tempo real",
          "Trabalhei com dados sensíveis seguindo padrões de segurança da área de saúde"
        ],
        tech: "Pixi.js, Vue.js, Medical Data Visualization"
      },
      {
        role: "Desenvolvedor Frontend",
        company: "Hostal Pachacuteq Inn",
        location: "Cusco, Peru (Remoto)",
        period: "Jan 2024",
        description: "Projeto freelance de sistema de reservas para hotel no Peru.",
        achievements: [
          "Website responsivo multilíngue (3 idiomas)",
          "Sistema de reservas com calendário de disponibilidade em tempo real",
          "Integração com APIs de pagamento (Stripe)"
        ],
        tech: "Vue.js, Stripe API, Multilingual System"
      },
      {
        role: "Desenvolvedor Frontend",
        company: "AmazonNanoForest",
        location: "Rio Branco, Acre (Remoto)",
        period: "Nov 2023",
        description: "Projeto de website corporativo para empresa de biotecnologia focada em inovação sustentável na Amazônia.",
        achievements: [
          "Website institucional responsivo com foco em storytelling visual",
          "Catálogo interativo de produtos amazônicos",
          "Interface para apresentação de projetos de inovação"
        ],
        tech: "Vue.js, Responsive Design, E-commerce"
      }
    ]
  },
  testimonials: {
    title: "Depoimentos",
    items: [
      {
        name: "Anielli Martiniano Lemos",
        role: "Designer na KNN Idiomas Brasil",
        text: "Como designer, é um alívio ter alguém que entende cada ajuste de espaçamento, cada cantinho do layout, e transforma tudo em código com muito capricho e atenção aos detalhes. No front-end, o Garbson entrega com qualidade de verdade. Não é só sobre fazer funcionar — é sobre fazer bem feito, pensando em performance, usabilidade e aquela experiência que a gente sente orgulho de entregar. Sem contar que, no dia a dia, ele é parceiro pra tudo: troca ideia, ajuda, resolve pepino junto e ainda deixa o clima da equipe muito mais leve. Trabalhar com ele é aquela combinação rara de entrega boa + processo leve — coisa que faz toda a diferença no resultado (e no caminho até ele). É o tipo de pessoa que todo time merece ter por perto."
      },
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