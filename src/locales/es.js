export default {
  navbar: {
    about: "Sobre Mí",
    projects: "Proyectos",
    certificates: "Certificados",
    skills: "Habilidades",
    experience: "Experiencia",
    testimonials: "Testimonios"
  },
  introduction: {
    greeting: "¡Hola! Soy Garbson Souza",
    role: "Desarrollador Front-End",
    cta: "Descargar Currículum"
  },
  biography: {
    title: "Sobre Mí",
    description: `
Desarrollador Frontend con 3+ años creando aplicaciones web para empresas internacionales en 4 países. Actualmente desarrollando sistemas críticos de compliance fiscal en NFCOM que impactan millones de usuarios en las principales operadoras brasileñas de telecomunicaciones (Claro/Embratel).

🌍 Viaje Internacional:
🇬🇷 Grecia (1+ año) - Panel administrativo eBay | Nuxt.js + SSR
🇺🇸 Miami (5 meses) - Startup con gráficos 2D | Vue.js + Pixi.js
🇵🇪 Perú (proyecto) - Sitio web de hotel | Networking orgánico mientras viajaba
🇧🇷 Brasil (actual) - KNN Idiomas + Claro & Embratel | EdTech + Sistemas críticos de telecomunicaciones
  `,
  },
  featuredProjects: [
    {
      title: "Guty Inmuebles",
      description: "Landing page profesional para corredor de bienes raíces enfocada en conversión de leads. Diseño moderno y responsivo con presentación de propiedades y diferenciadores del corredor. Optimizada para rendimiento y experiencia mobile.",
      img: "guty.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/corretor-landing",
      link: "https://gutthierryimoveis.com/",
      tech: "Vue.js, Tailwind CSS, JavaScript",
      featured: true
    },
    {
      title: "Fernando Inmuebles",
      description: "Landing page para corredor de bienes raíces enfocada en captación de clientes y generación de leads calificados. Interfaz elegante con portafolio de propiedades, testimonios de clientes y canales de contacto integrados. Entregada con alto rendimiento y diseño orientado a la conversión.",
      img: "fernando.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/fernandoimoveis",
      link: "https://fernandoimoveis.garbsonsouza2602.workers.dev/",
      tech: "Vue.js, Tailwind CSS, JavaScript",
      featured: true
    },
    {
      title: "Atapera",
      description: "E-commerce completo para equipos deportivos y outdoor con catálogo de 1000+ productos, carrito de compras, sistema de búsqueda con filtros avanzados, e integración con APIs de pago. Implementé sistema de gestión de inventario, panel administrativo para gestión de pedidos, y checkout seguro. Enfoque en rendimiento y SEO para conversión de ventas.",
      img: "atapera.png",
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
      title: "Portafolio Personal",
      description: "Mi portafolio personal desarrollado con Vue 3 y Vite, mostrando mi trayectoria profesional, proyectos y habilidades. Implementé sistema de internacionalización (i18n) para 5 idiomas, diseño responsivo con Tailwind CSS, y animaciones fluidas con AOS. Solución que demuestra mi capacidad técnica y creatividad en desarrollo frontend.",
      img: "garbson.png",
      vue: true,
      tailwind: true,
      javascript: true,
      vite: true,
      github: "https://github.com/Garbson/portifolio",
      link: "https://garbson.dev/",
      tech: "Vue.js 3, Vite, Tailwind CSS, Vue I18n",
      featured: true
    },
    {
      title: "Hostel Pachacuteq",
      description: "Sistema completo de reservas para hotel peruano con interfaz multilingüe, calendario de disponibilidad en tiempo real, procesamiento de pagos y gestión de huéspedes. Implementé diseño responsivo optimizado para viajeros móviles con información turística local integrada y sistema de confirmación de reservas.",
      img: "pachacutec.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
      tech: "Vue.js, Tailwind CSS, Sistema de Reservas",
      featured: true
    },
  ],
  projects: [
    {
      title: "Sistema de Facturación Telecom",
      description: "Proyecto personal de estudio — no es el sistema oficial utilizado por Claro/Embratel. Simulación de generación de facturas en los modelos NFCom 62 y 22, con cálculo automático de impuestos (ICMS, PIS, COFINS) y exportación de XML según el estándar fiscal brasileño. Desarrollado para profundizar el conocimiento en los procesos de facturación telecom adquiridos en el trabajo.",
      img: "nfcom.png",
      react: true,
      javascript: true,
      css: true,
      github: "https://github.com/Garbson/GeradorDeTributa--o",
      link: "https://geradordetributa--o.pages.dev/",
    },
    {
      title: "Golfim",
      description: "Plataforma profesional para servicios de reparación y restauración de piscinas con sistema de programación de servicios, gestión de clientes y seguimiento de presupuestos. Implementé flujo completo de servicio desde contacto inicial hasta conclusión del proyecto con documentación fotográfica y seguimiento de progreso.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
      tech: "Vue.js, Quasar, Gestión de Servicios"
    },
    {
      title: "AmazonNanoForest",
      description: "Sitio web institucional para empresa de biotecnología amazónica con enfoque en storytelling visual y presentación de proyectos innovadores. Implementé interfaz responsiva, catálogo interactivo de productos naturales, y sistema de presentación de proyectos sostenibles. Proyecto que aumentó el engagement y generó leads internacionales.",
      img: "NanoForest.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      github: "https://github.com/Garbson/AMAZON-NANO-FOREST",
      link: "https://amazonnanoforest.com/",
      tech: "Vue.js, Tailwind CSS, Quasar"
    },
    {
      title: "Atapera",
      description: "Tienda de ventas de armas, pesca, camping y mucho más.",
      img: "atapera.png",
      tailwind: true,
      typescript: true,
      vue: true,
      nuxt: true,
      github: "https://github.com/Garbson/atapera-ecommerce",
      link: "https://atapera.shop/",
      metrics: [
        "50+ usuarios activos",
        "Aumento del 30% de clientes",
        "Sistemas de ventas en línea"
      ]
    },
    {
      title: "Clube da Luta CT",
      description: "Una plataforma de club de entrenamiento de combate construida con tecnologías modernas.",
      img: "CtClube.png",
      firebase: true,
      typescript: true,
      react: true,
      nextjs: true,
      github: "https://github.com/Garbson/grecieCT",
      link: "https://clubedaluta.pages.dev/",
    },
    {
      title: "DizeME",
      description: "Un sitio web para ayudar a las personas a dar diezmos y ofrecer con facilidad.",
      img: "dizeMe.jpg",
      typescript: true,
      vue: true,
      tailwind: true,
      github: "https://github.com/Garbson/IgrejaAdventistaCentralHumaita",
      link: "https://igreja-adventista-25-de-dezembro.pages.dev",
      metrics: [
        "Facilitación para 100+ miembros de la iglesia",
        "Interfaz intuitiva para donaciones"
      ]
    },
    {
      title: "Wedding Memories",
      description: "Un sitio web para guardar y compartir recuerdos especiales en fotos.",
      img: "memories.jpeg",
      vue: true,
      typescript: true,
      tailwind: true,
      github: "https://github.com/Garbson/wedding-memories",
      link: "https://wedding-memories.pages.dev/",
    },
    {
      title: "AmazonNanoForest",
      description: "Una iniciativa biotecnológica que combina naturaleza e innovación en el Amazonas.",
      img: "NanoForest.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      github: "https://github.com/Garbson/AMAZON-NANO-FOREST",
      link: "https://amazonnanoforest.com/",
    },
    {
      title: "Golfim",
      description: "Plataforma para servicios de reparación y restauración de piscinas.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
    },
    {
      title: "Hostel Pachacuteq",
      description: "Sitio web para un hotel en Perú, diseñado para viajeros que buscan aventura y comodidad.",
      img: "pachacutec.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
    },
    {
      title: "Crypto Tracker",
      description: "Herramienta para monitorear las fluctuaciones diarias de criptomonedas en tiempo real.",
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
      description: "Aplicación sencilla y funcional para cálculos rápidos, desarrollada con Pinia.",
      img: "Calculadora.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/calculadora",
      link: "https://calculadora-e7p.pages.dev/",
    },
    {
      title: "To Do List",
      description: "Gestor de tareas intuitivo para la organización diaria.",
      img: "Todolist.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/To-do-list",
      link: "https://to-do-list-aky.pages.dev/",
    },
    {
      title: "Brasileiro.ninja",
      description: "Base de datos nacional con información útil como códigos postales, ISBN, DDD y más.",
      img: "Brasileiro.jpeg",
      vue: true,
      css: true,
      javascript: true,
      github: "https://github.com/arnonrdp/Brasileiro-Ninja",
      link: "https://brasileiro.ninja/",
    },
    {
      title: "Portfolio",
      description: "Mi portafolio personal, mostrando proyectos y habilidades tecnológicas.",
      img: "garbson.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/portifolio",
      link: "https://portifolio-by1.pages.dev",
    },
    {
      title: "Temperature",
      description: "Consulta global de temperatura de manera práctica y sencilla.",
      img: "temperatures.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/projeto-site-pra-ver-a-temperatura",
      link: "https://temperature-9ta.pages.dev/",
    },
    {
      title: "Conversor",
      description: "Herramienta eficiente para la conversión de monedas internacionales.",
      img: "Conversor.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Currency-Converter",
      link: "https://currency-converter-cgn.pages.dev/",
    },
    {
      title: "City Skyline",
      description: "Experiencia visual interactiva al redimensionar la ventana del navegador.",
      img: "city.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/city",
      link: "https://city-du9.pages.dev/",
    },
    {
      title: "Dangerous Dragons",
      description: "Un juego RPG desarrollado con JavaScript puro.",
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
      responsiveWebDesign: "Diseño Web Responsivo",
      jsAlgorithms: "Algoritmos y Estructuras de Datos en JavaScript",
      cs50: "CS50: Introducción a la Ciencia de la Computación",
    },
  },
  skills: {
    title: "Mis Habilidades",
    categories: [
      {
        name: "Front-end",
        items: [
          { name: "Vue.js", level: 90, icon: "vue-svgrepo-com.svg", description: "Framework Vue.js para construir interfaces interactivas" },
          { name: "Quasar", level: 85, icon: "Quasar.svg", description: "Framework Quasar para aplicaciones Vue multiplataforma" },
          { name: "React", level: 75, icon: "react.svg", description: "Biblioteca React.js para construir interfaces de usuario" },
          { name: "Next.js", level: 70, icon: "nextjs.svg", description: "Framework Next.js para aplicaciones React" },
          { name: "Bootstrap", level: 85, icon: "bootstrap.png", description: "Framework CSS Bootstrap para desarrollo web responsivo" },
          { name: "HTML5", level: 95, icon: "html.svg", description: "Lenguaje de marcado HTML5 para contenido web" },
          { name: "CSS3/SCSS", level: 90, icon: "css-3-svgrepo-com.svg", description: "CSS3 y SCSS para estilizar aplicaciones web" },
          { name: "Tailwind CSS", level: 85, icon: "tailwind.svg", description: "Framework Tailwind CSS utility-first" },
          { name: "JavaScript", level: 90, icon: "javascript-svgrepo-com.svg", description: "Lenguaje de programación JavaScript" },
          { name: "TypeScript", level: 80, icon: "typescript.png", description: "Superconjunto de JavaScript con tipos" }
        ]
      },
      {
        name: "Back-end y Herramientas",
        items: [
          { name: "Node.js", level: 75, icon: "node.svg", description: "Entorno de ejecución Node.js para JavaScript" },
          { name: "PHP", level: 70, icon: "php.svg", description: "Lenguaje de programación PHP para desarrollo web" },
          { name: "Python", level: 65, icon: "python.svg", description: "Lenguaje de programación Python para diversos fines" },
          { name: "Bash", level: 60, icon: "bash.svg", description: "Shell script Bash para automatización de tareas" },
          { name: "MySQL", level: 75, icon: "mysql.svg", description: "Sistema de gestión de bases de datos relacional MySQL" },
          { name: "PostgreSQL", level: 70, icon: "postgresql.svg", description: "Sistema de base de datos relacional PostgreSQL" },
          { name: "Docker", level: 65, icon: "docker.svg", description: "Plataforma de contenedorización Docker" },
          { name: "Firebase", level: 80, icon: "firebase.svg", description: "Plataforma Firebase para desarrollo de aplicaciones" },
          { name: "Git/GitHub", level: 85, icon: "github-color-svgrepo-com.svg", description: "Sistema de control de versiones Git y plataforma GitHub" },
          { name: "RESTful APIs", level: 85, description: "Diseño y consumo de APIs RESTful" },
          { name: "Responsive Design", level: 95, description: "Creación de diseños responsivos para todos los dispositivos" },
          { name: "Nuxt.js", level: 75, icon: "nuxt.png", description: "Framework Nuxt.js para aplicaciones Vue" },
          { name: "UI/UX Design", level: 70, description: "Principios de diseño de interfaz y experiencia de usuario" }
        ]
      }
    ]
  },
  experience: {
    title: "Experiencia Profesional",
    current: "Actual",
    achievements: "Principales logros:",
    tech: "Tech:",
    items: [
      {
        role: "Analista Desenvolvedor",
        company: "NFCOM (Grupo Easy)",
        location: "Rio Branco, Acre",
        period: "Jul 2025 - Actual",
        description: "Desarrollo de sistema de análisis tributario para Grupo Easy. Trabajo en los proyectos NFCOM y RGC con tecnologías mainframe IBM y Natural Language. Desarrollo de soluciones para procesamiento de datos tributarios. Contribución en proyectos de gran escala corporativa. Prestación de servicios para Claro y Embratel.",
        achievements: [
          "Implementé sistema de análisis tributario que procesa datos de millones de clientes",
          "Trabajo con tecnologías legacy (IBM Mainframe + Natural Language) integradas con frontend moderno",
          "Desarrollo de soluciones para sistemas de facturación a gran escala"
        ],
        tech: "Vue.js, Natural Language, IBM Mainframe, Tax Systems",
        current: true
      },
      {
        role: "Desarrollador Frontend",
        company: "KNN Idiomas",
        location: "Balneário Camboriú, SC",
        period: "Sep 2024 - Jun 2025",
        description: "Trabajé como Desarrollador Frontend en KNN Idiomas, una de las mayores empresas de educación en idiomas de América Latina, atendiendo a miles de estudiantes en toda la región.",
        achievements: [
          "Desarrollé y mantuve aplicaciones web con Vue.js (v2 y v3) y Vuetify (v2 y v3) para plataformas educativas",
          "Construí interfaces responsivas y amigables para plataformas educativas que sirven a miles de estudiantes de idiomas",
          "Integré APIs REST para conectar servicios frontend con sistemas backend",
          "Contribuí a la transformación digital de la educación en idiomas en América Latina",
          "Colaboré con equipos de diseño y backend para entregar experiencias de usuario fluidas en aplicaciones educativas",
          "Optimicé el rendimiento de la aplicación para soportar alto volumen de usuarios concurrentes en horarios pico",
          "Implementé componentes de aprendizaje interactivos que mejoraron el compromiso y la retención de estudiantes",
          "Desarrollé interfaces multilingües para apoyar los diversos mercados latinoamericanos"
        ],
        tech: "Vue.js (v2, v3), Vuetify (v2, v3), JavaScript, REST APIs, Responsive Design, Educational Technology"
      },
      {
        role: "Desarrollador Frontend",
        company: "Hellenic Technologies",
        location: "Atenas, Grecia (Remoto)",
        period: "Ene 2024 - Feb 2025",
        description: "Desarrollador Frontend en Hellenic Technologies, creando y manteniendo interfaces de usuario dinámicas e intuitivas usando tecnologías modernas para el mercado europeo.",
        achievements: [
          "Desarrollé aplicaciones con Vue.js y Nuxt.js para optimizar el rendimiento y la experiencia del usuario en mercados europeos",
          "Creé componentes dinámicos y aplicaciones universales con renderización del lado del servidor (SSR) para rendimiento óptimo",
          "Integré diversas APIs REST, asegurando comunicación eficiente entre sistemas de frontend y backend",
          "Implementé gestión de estado centralizado con Pinia para mejorar la escalabilidad y el mantenimiento de la aplicación",
          "Desarrollé funcionalidades complejas en JavaScript e interacciones avanzadas con el usuario para clientes europeos",
          "Colaboré con equipos internacionales en diferentes zonas horarias para entregar soluciones de alta calidad",
          "Optimicé aplicaciones para compatibilidad entre navegadores y estándares de accesibilidad europeos",
          "Implementé patrones de diseño responsivo optimizados para diversos patrones de uso de dispositivos en Europa"
        ],
        tech: "Vue.js, Nuxt.js, Pinia, JavaScript, REST APIs, Server-Side Rendering, State Management"
      },
      {
        role: "Desarrollador Frontend",
        company: "NeuroAEye",
        location: "Miami, Florida (Remoto)",
        period: "Mar 2024 - Oct 2024",
        description: "Desarrollo de interfaz para aplicación de inteligencia artificial. Integración de componentes visuales avanzados utilizando Pixi.js. Trabajo con datos médicos y visualizaciones interactivas.",
        achievements: [
          "Creé componentes de visualización para datos médicos usando Pixi.js",
          "Implementé interfaz para análisis de imágenes médicas con feedback en tiempo real",
          "Trabajé con datos sensibles siguiendo estándares de seguridad de salud"
        ],
        tech: "Pixi.js, Vue.js, Medical Data Visualization"
      },
      {
        role: "Desarrollador Frontend",
        company: "Hostal Pachacuteq Inn",
        location: "Cusco, Perú (Remoto)",
        period: "Ene 2024",
        description: "Desarrollo de sistema de reservas hoteleras. Implementación de interfaz multiidioma responsiva. Integración con APIs de pago y booking.",
        achievements: [
          "Sitio web responsivo multilingüe (3 idiomas)",
          "Sistema de reservas con calendario de disponibilidad en tiempo real",
          "Integración con APIs de pago (Stripe)"
        ],
        tech: "Vue.js, Stripe API, Multilingual System"
      },
      {
        role: "Desarrollador Frontend",
        company: "AmazonNanoForest",
        location: "Rio Branco, Acre (Remoto)",
        period: "Nov 2023",
        description: "Desarrollo del sitio web corporativo para empresa de productos naturales. Creación de interfaz responsiva para e-commerce de productos amazónicos. Implementación de catálogo interactivo y sistema de presentación de productos.",
        achievements: [
          "Sitio web institucional responsivo con enfoque en storytelling visual",
          "Catálogo interactivo de productos amazónicos",
          "Interfaz para presentación de proyectos de innovación"
        ],
        tech: "Vue.js, Responsive Design, E-commerce"
      }
    ]
  },
  callToAction: {
    title: "Trabajemos Juntos",
    description: "Actualmente estoy abierto a nuevas oportunidades y proyectos interesantes. Si necesitas un desarrollador frontend dedicado o quieres discutir un problema desafiante, me encantaría escucharte.",
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
      text: "Descargar Currículum",
      link: "#resume" // Placeholder - update with actual resume link
    }
  },
  certificates: {
    title: "Certificados",
    viewCertificate: "Ver certificado",
    items: [
      {
        title: "Desarrollo Back End y APIs",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/back-end-development-and-apis"
      },
      {
        title: "Scrum: Planificación y Desarrollo Ágiles",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/808e796b79aae092046d6b35bcfad80a5987c1efdd834582268590c9929ea7e2"
      },
      {
        title: "Scrum Fundamentals Certified (SFC™)",
        organization: "SCRUMstudy",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1106530"
      },
      {
        title: "Programación Natural Básica",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/details/certifications/1758668296353/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      },
      {
        title: "Fluidez en IA: Marco y Fundamentos",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Fluidez en IA para Estudiantes",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/7ewkgwxbuqib"
      },
      {
        title: "Claude Code en Acción",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Diseño Web Responsivo",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/portuguese/certification/garbson_souza/responsive-web-design"
      },
      {
        title: "Algoritmos y Estructuras de Datos de JavaScript",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/javascript-algorithms-and-data-structures"
      },
      {
        title: "CS50: Introducción a las Ciencias de la Computación",
        organization: "Harvard/edX",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/overlay/1635529817666/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      }
    ],
  },
  testimonials: {
    title: "Testimonios",
    items: [
      {
        name: "Arnon Rodrigues de Paula",
        role: "Front-End Expert | Lead Developer | Agile",
        text: "Recomiendo a Garbson, un joven talentoso a quien he mentoreado en los últimos meses. Garbson posee una notable curiosidad y deseo de aprender, siempre buscando desarrollarse y superar desafíos. Se destaca por sus excelentes habilidades interpersonales, incluyendo comunicación efectiva, empatía y capacidad para trabajar en equipo. Su actitud positiva y disposición para ayudar a otros lo convierten en un colega valioso. Garbson también demuestra una impresionante capacidad para resolver problemas de manera práctica e innovadora. Sobre todo, Garbson es una persona de carácter íntegro y confiable, con una ética de trabajo ejemplar. Su dedicación y entusiasmo son visibles en todo lo que hace."
      },
      {
        name: "Jesiel Monteiro de Oliveira",
        role: "SAFe® 4 Agilist | CSS Senior Specialist at NTT Data | Product Owner",
        text: "Recomiendo fuertemente a Garbson, un joven programador front-end, extremadamente dedicado y con una impresionante capacidad de aprendizaje rápido. Durante el tiempo que trabajamos juntos, demostró sólidas habilidades en tecnologías front-end, además de una increíble capacidad para resolver problemas complejos con eficiencia y creatividad. Su voluntad de aprender y adaptarse a nuevos desafíos lo convierte en un activo valioso para cualquier equipo. Con su proactividad, compromiso y búsqueda constante de perfeccionamiento, estoy seguro de que tendrá un futuro brillante en el desarrollo web."
      },
      {
        name: "Stavros Tsiogkas",
        role: "Digital Account Manager @ Hellenic Technologies",
        text: "Me complace recomendar a Garbson Souza, con quien he colaborado en múltiples proyectos de desarrollo, particularmente en el desarrollo a nivel de producto. La experiencia técnica de Garbson, su pensamiento innovador y dedicación para entregar soluciones de alta calidad me han impresionado constantemente. Su capacidad para abordar desafíos complejos y trabajar eficazmente en equipo lo convierte en un recurso invaluable. Estoy seguro de que Garbson se destacará en cualquier esfuerzo que emprenda."
      },
      {
        name: "Gabriel Bodenmüller",
        role: "Software Developer | Python | Vue | JavaScript | Typescript | PostgreSQL | Computer engineer",
        text: "Tuve el placer de seguir el trabajo de Garbson y puedo decir con certeza: ¡es un profesional increíble en el mundo del desarrollo front-end! Con habilidades afiladas en Vue, TypeScript, CSS avanzado y optimización de rendimiento, no solo entrega código limpio y bien estructurado, sino que también se preocupa por la experiencia del usuario y la usabilidad del producto. Además, su capacidad para aprender rápidamente y adaptarse a nuevas tecnologías es impresionante. Si buscas un desarrollador front-end talentoso, colaborativo y comprometido, ¡Garbson es la elección correcta!"
      },
      {
        name: "Tiago Lopes",
        role: "Analista de BI | Analista de Datos | SQL | BigQuery | Power BI | Looker Studio",
        text: "Es con gran satisfacción que recomiendo a Garbson Souza para oportunidades como Desarrollador Frontend. Tuve el privilegio de trabajar con él en KNN Idiomas, donde demostró consistentemente sus habilidades técnicas y su compromiso con resultados de alta calidad. Garbson es un profesional talentoso, con conocimiento en tecnologías como Vue.js, Quasar, Vuex/Pinia, Node.js, JavaScript, Nuxt.js, API REST, Vuetify y TypeScript. Su capacidad para crear interfaces modernas, intuitivas y eficientes es notable, además de su habilidad para integrar sistemas complejos con APIs REST. Durante el tiempo que trabajamos juntos, Garbson se destacó por su enfoque colaborativo y resolución de problemas."
      },
      {
        name: "Anielli Martiniano Lemos",
        role: "Diseñadora en KNN Idiomas Brasil",
        text: "Como diseñadora, es un alivio tener a alguien que entiende cada ajuste de espaciado, cada rincón del diseño, y transforma todo en código con mucho cuidado y atención a los detalles. En frontend, Garbson entrega con calidad real. No se trata solo de hacer que funcione — se trata de hacerlo bien, pensando en rendimiento, usabilidad y esa experiencia de la que nos sentimos orgullosos de entregar. Sin mencionar que, día a día, es un compañero para todo: intercambia ideas, ayuda, resuelve problemas juntos y aún hace que el ambiente del equipo sea mucho más ligero. Trabajar con él es esa combinación rara de buena entrega + proceso ligero — algo que hace toda la diferencia en el resultado (y en el camino hacia él). Es el tipo de persona que todo equipo merece tener cerca."
      }
    ]
  }
};