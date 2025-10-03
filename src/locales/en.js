export default {
  navbar: {
    about: "About Me",
    projects: "Projects",
    certificates: "Certificates",
    skills: "Skills",
    experience: "Experience",
    testimonials: "Testimonials"
  },
  introduction: {
    greeting: "Hello, I'm Garbson Souza!",
    role: "Front-End Developer",
    cta: "Download Resume"
  },
  biography: {
    title: "About Me",
    description: `
Frontend Developer with 3+ years building web applications for international companies across 4 countries. Currently developing critical tax compliance systems at NFCOM that impact millions of users across major Brazilian telecom operators (Claro/Embratel).

🌍 International Journey:
🇬🇷 Greece (1+ year) - eBay admin panel | Nuxt.js + SSR
🇺🇸 Miami (5 months) - Startup with 2D graphics | Vue.js + Pixi.js
🇵🇪 Peru (project) - Hotel website | Organic networking while traveling
🇧🇷 Brazil (current) - KNN Idiomas + Claro & Embratel | EdTech + Critical telecom systems
  `,
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
          { name: "Enterprise applications", description: "Large-scale business solutions" },
          { name: "Legacy system integration", description: "Mainframe + Modern Frontend" },
          { name: "Performance optimization", description: "Speed and efficiency focus" }
        ]
      }
    ]
  },
  featuredProjects: [
    {
      title: "Atapera",
      description: "Complete e-commerce for sports and outdoor equipment with catalog of 1000+ products, shopping cart, advanced search system with filters, and payment API integration. Implemented inventory management system, administrative panel for order management, and secure checkout. Focus on performance and SEO for sales conversion.",
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
      description: "Global marketplace connecting sellers and buyers internationally, with complex product management system, shopping carts, and payment processing. Implemented authentication, advanced search system with filters, and complete administrative panel. Project focused on scalability and performance for multiple simultaneous users.",
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
      description: "Complete platform for martial arts academy with real-time class scheduling, student progress tracking, recurring payment system, and administrative area for instructors. Implemented dashboard with attendance metrics, notification system, and payment gateway integration. Solution that manages 500+ active students.",
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
      description: "Professional platform for pool repair and restoration services with service scheduling system, customer management, and budget tracking. Implemented complete service workflow from initial contact to project completion with photo documentation and progress tracking.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
      tech: "Vue.js, Quasar, Service Management",
      featured: true
    },
    {
      title: "Hostel Pachacuteq",
      description: "Complete booking system for Peruvian hotel with multilingual interface, real-time availability calendar, payment processing, and guest management. Implemented responsive design optimized for mobile travelers with integrated local tourism information and booking confirmation system.",
      img: "pachacuteq.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
      tech: "Vue.js, Tailwind CSS, Booking System",
      featured: true
    },
    {
      title: "AmazonNanoForest",
      description: "Institutional website for Amazon biotechnology company with focus on visual storytelling and innovative project presentation. Implemented responsive interface, interactive catalog of natural products, and sustainable project presentation system. Project that increased engagement and generated international leads.",
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
      description: "A website to help people tithe and offer with ease.",
      img: "dizeMe.jpg",
      typescript: true,
      vue: true,
      tailwind: true,
      github: "https://github.com/Garbson/IgrejaAdventistaCentralHumaita",
      link: "https://igreja-adventista-25-de-dezembro.pages.dev",
    },
    {
      title: "Trote UFAC",
      description: "A gamified website for an interactive university hazing experience.",
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
      description: "A national database with useful information like ZIP codes, ISBNs, DDDs, and more.",
      img: "Brasileiro.jpeg",
      vue: true,
      css: true,
      javascript: true,
      github: "https://github.com/arnonrdp/Brasileiro-Ninja",
      link: "https://brasileiro.ninja/",
    },
    {
      title: "Wedding Memories",
      description: "A website to store and share memorable moments through photos.",
      img: "memories.jpeg",
      vue: true,
      typescript: true,
      tailwind: true,
      github: "https://github.com/Garbson/wedding-memories",
      link: "https://wedding-memories.pages.dev/",
    },
    {
      title: "Crypto Tracker",
      description: "A tool for tracking daily cryptocurrency fluctuations in real-time.",
      img: "Crypto.png",
      vue: true,
      tailwind: true,
      javascript: true,
      firebase: true,
      github: "https://github.com/leonardo-cordeiro/CryptoTracker/tree/Garbson",
      link: "https://cryptotracker-5hk.pages.dev/",
    },
    {
      title: "Currency Converter",
      description: "An efficient tool for international currency conversion.",
      img: "Conversor.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Currency-Converter",
      link: "https://currency-converter-cgn.pages.dev/",
    },
    {
      title: "Temperature",
      description: "A simple and practical global temperature consultation app.",
      img: "temperatures.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/projeto-site-pra-ver-a-temperatura",
      link: "https://temperature-9ta.pages.dev/",
    },
    {
      title: "Duolingo Clone",
      description: "An interactive language learning platform inspired by Duolingo.",
      img: "duolingo-clone.jpeg",
      vue: true,
      javascript: true,
      bootstrap: true,
      github: "https://github.com/Garbson/duolingo-clone",
      link: "https://duolingo-clone-6jg.pages.dev/exercise/1",
    },
  ],
  callToAction: {
    title: "Let's Work Together",
    description: "I'm currently open to new opportunities and interesting projects. Whether you need a dedicated frontend developer or want to discuss a challenging problem, I'd love to hear from you.",
    email: {
      text: "Email Me",
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
      text: "Download Resume",
      link: "#resume" // Placeholder - update with actual resume link
    }
  },
  certificates: {
    title: "Certificates",
    viewCertificate: "View certificate",
    items: [
      {
        title: "Back End Development and APIs",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/back-end-development-and-apis"
      },
      {
        title: "Scrum: Agile Planning and Development",
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
        title: "Responsive Web Design",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/portuguese/certification/garbson_souza/responsive-web-design"
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/javascript-algorithms-and-data-structures"
      },
      {
        title: "CS50's Introduction to Computer Science",
        organization: "Harvard/edX",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/overlay/1635529817666/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      }
    ],
  },
  skills: {
    title: "My Skills",
    categories: [
      {
        name: "Front-end",
        items: [
          { name: "Vue.js", level: 90, icon: "vue-svgrepo-com.svg", description: "Vue.js framework for building interactive UIs" },
          { name: "Quasar", level: 85, icon: "Quasar.svg", description: "Quasar framework for cross-platform Vue applications" },
          { name: "React", level: 75, icon: "react.svg", description: "React.js library for building user interfaces" },
          { name: "Next.js", level: 70, icon: "nextjs.svg", description: "Next.js framework for React applications" },
          { name: "Bootstrap", level: 85, icon: "bootstrap.png", description: "Bootstrap CSS framework for responsive web development" },
          { name: "HTML5", level: 95, icon: "html.svg", description: "HTML5 markup language for web content" },
          { name: "CSS3/SCSS", level: 90, icon: "css-3-svgrepo-com.svg", description: "CSS3 and SCSS for styling web applications" },
          { name: "Tailwind CSS", level: 85, icon: "tailwind.svg", description: "Tailwind CSS utility-first framework" },
          { name: "JavaScript", level: 90, icon: "javascript-svgrepo-com.svg", description: "JavaScript programming language" },
          { name: "TypeScript", level: 80, icon: "typescript.png", description: "TypeScript superset of JavaScript with types" }
        ]
      },
      {
        name: "Back-end & Tools",
        items: [
          { name: "Node.js", level: 75, icon: "node.svg", description: "Node.js runtime environment for JavaScript" },
          { name: "PHP", level: 70, icon: "php.svg", description: "PHP programming language for web development" },
          { name: "Python", level: 65, icon: "python.svg", description: "Python programming language for various purposes" },
          { name: "Bash", level: 60, icon: "bash.svg", description: "Bash shell scripting for task automation" },
          { name: "MySQL", level: 75, icon: "mysql.svg", description: "MySQL relational database management system" },
          { name: "PostgreSQL", level: 70, icon: "postgresql.svg", description: "PostgreSQL relational database system" },
          { name: "Docker", level: 65, icon: "docker.svg", description: "Docker containerization platform" },
          { name: "Firebase", level: 80, icon: "firebase.svg", description: "Firebase platform for app development" },
          { name: "Git/GitHub", level: 85, icon: "github-color-svgrepo-com.svg", description: "Git version control system and GitHub platform" },
          { name: "RESTful APIs", level: 85, description: "Design and consumption of RESTful APIs" },
          { name: "Responsive Design", level: 95, description: "Creating responsive layouts for all devices" },
          { name: "Nuxt.js", level: 75, icon: "nuxt.png", description: "Nuxt.js framework for Vue applications" },
          { name: "UI/UX Design", level: 70, description: "User interface and experience design principles" }
        ]
      }
    ]
  },
  experience: {
    title: "Professional Experience",
    current: "Current",
    achievements: "Key achievements:",
    tech: "Tech:",
    items: [
      {
        role: "Developer Analyst",
        company: "NFCOM (Grupo Easy)",
        location: "Rio Branco, Acre",
        period: "Jul 2025 - Current",
        description: "Developing critical tax compliance systems for major Brazilian telecom operators (Claro/Embratel), impacting millions of end users. Working on NFCOM and RGC projects with integration between IBM mainframe technologies and modern frontend.",
        achievements: [
          "Implemented tax analysis system that processes data from millions of customers",
          "Working with legacy technologies (IBM Mainframe + Natural Language) integrated with modern frontend",
          "Development of solutions for large-scale billing systems"
        ],
        tech: "Vue.js, Natural Language, IBM Mainframe, Tax Systems",
        current: true
      },
      {
        role: "Frontend Developer",
        company: "KNN Idiomas",
        location: "Balneário Camboriú, SC",
        period: "Sep 2024 - Jun 2025",
        description: "Developed modern educational platform with focus on user experience and integration with learning management systems (LMS).",
        achievements: [
          "Created responsive and intuitive interface that improved learning experience",
          "Implemented integration with LMS systems for student progress tracking",
          "Optimized platform performance for access on different devices"
        ],
        tech: "Vue.js, Nuxt.js, LMS Integration"
      },
      {
        role: "Frontend Developer",
        company: "Hellenic Technologies",
        location: "Athens, Greece (Remote)",
        period: "Jan 2024 - Feb 2025",
        description: "Worked with international team using agile methodologies, developing frontend solutions for European market.",
        achievements: [
          "Developed reusable Vue.js components for enterprise applications",
          "Collaborated with distributed team across different time zones",
          "Implemented solutions following European accessibility standards (WCAG)"
        ],
        tech: "Vue.js, Agile, International Team Collaboration"
      },
      {
        role: "Frontend Developer",
        company: "NeuroAEye",
        location: "Miami, Florida (Remote)",
        period: "Mar 2024 - Oct 2024",
        description: "Developed interface for artificial intelligence application in the medical field, working with complex data visualization.",
        achievements: [
          "Created visualization components for medical data using Pixi.js",
          "Implemented interface for medical image analysis with real-time feedback",
          "Worked with sensitive data following healthcare security standards"
        ],
        tech: "Pixi.js, Vue.js, Medical Data Visualization"
      },
      {
        role: "Frontend Developer",
        company: "Hostal Pachacuteq Inn",
        location: "Cusco, Peru (Remote)",
        period: "Jan 2024",
        description: "Freelance project for hotel reservation system in Peru.",
        achievements: [
          "Multilingual responsive website (3 languages)",
          "Reservation system with real-time availability calendar",
          "Integration with payment APIs (Stripe)"
        ],
        tech: "Vue.js, Stripe API, Multilingual System"
      },
      {
        role: "Frontend Developer",
        company: "AmazonNanoForest",
        location: "Rio Branco, Acre (Remote)",
        period: "Nov 2023",
        description: "Corporate website project for biotechnology company focused on sustainable innovation in the Amazon.",
        achievements: [
          "Responsive institutional website with focus on visual storytelling",
          "Interactive catalog of Amazon products",
          "Interface for innovation project presentation"
        ],
        tech: "Vue.js, Responsive Design, E-commerce"
      }
    ]
  },
  testimonials: {
    title: "Testimonials",
    items: [
      {
        name: "Anielli Martiniano Lemos",
        role: "Designer at KNN Idiomas Brasil",
        text: "As a designer, it's a relief to have someone who understands every spacing adjustment, every corner of the layout, and transforms everything into code with great care and attention to detail. In frontend, Garbson delivers with real quality. It's not just about making it work — it's about doing it well, thinking about performance, usability, and that experience we feel proud to deliver. Not to mention that, day by day, he's a partner for everything: exchanges ideas, helps, solves problems together and still makes the team atmosphere much lighter. Working with him is that rare combination of good delivery + light process — something that makes all the difference in the result (and the path to it). He's the kind of person every team deserves to have around."
      },
      {
        name: "Arnon Rodrigues de Paula",
        role: "Front-End Expert | Lead Developer | Agile",
        text: "I recommend Garbson, a talented young man whom I mentored in recent months. Garbson has a remarkable curiosity and desire to learn, always seeking to develop himself and overcome challenges. He stands out for his excellent soft skills, including effective communication, empathy, and teamwork ability. His positive attitude and willingness to help others make him a valuable colleague. Garbson also demonstrates an impressive ability to solve problems in a practical and innovative way. Above all, Garbson is a person of integrity and reliability, with exemplary work ethics. His dedication and enthusiasm are visible in everything he does."
      },
      {
        name: "Jesiel Monteiro de Oliveira",
        role: "SAFe® 4 Agilist | CSS Senior Specialist at NTT Data | Product Owner",
        text: "I strongly recommend Garbson, a young front-end programmer, extremely dedicated and with an impressive capacity for quick learning. During the time we worked together, he demonstrated solid skills in front-end technologies, as well as an incredible ability to solve complex problems efficiently and creatively. His willingness to learn and adapt to new challenges makes him a valuable asset to any team. With his proactivity, commitment, and constant search for improvement, I am certain that he will have a bright future in web development."
      },
      {
        name: "Stavros Tsiogkas",
        role: "Digital Account Manager @ Hellenic Technologies",
        text: "I am pleased to recommend Garbson Souza, with whom I have collaborated on multiple development projects, particularly in product-level development. Garbson's technical expertise, innovative thinking, and dedication to delivering high-quality solutions have consistently impressed me. His ability to tackle complex challenges and work effectively in a team makes him an invaluable asset. I am confident that Garbson will excel in any endeavor he pursues."
      },
      {
        name: "Gabriel Bodenmüller",
        role: "Software Developer | Python | Vue | JavaScript | Typescript | PostgreSQL | Computer engineer",
        text: "I had the pleasure of following Garbson's work and I can say with certainty: he is an amazing professional in the front-end development world! With sharp skills in Vue, TypeScript, advanced CSS, and performance optimization, he not only delivers clean and well-structured code but also cares about user experience and product usability. Additionally, his ability to learn quickly and adapt to new technologies is impressive. If you're looking for a talented, collaborative, and committed front-end developer, Garbson is the right choice!"
      },
      {
        name: "Tiago Lopes",
        role: "BI Analyst | Data Analyst | SQL | BigQuery | Power BI | Looker Studio",
        text: "It is with great satisfaction that I recommend Garbson Souza for opportunities as a Frontend Developer. I had the privilege of working with him at KNN Idiomas, where he consistently demonstrated his technical skills and commitment to high-quality results. Garbson is a talented professional with knowledge in technologies such as Vue.js, Quasar, Vuex/Pinia, Node.js, JavaScript, Nuxt.js, REST API, Vuetify, and TypeScript. His ability to create modern, intuitive, and efficient interfaces is notable, in addition to his ability to integrate complex systems with REST APIs. During the time we worked together, Garbson stood out for his collaborative approach and problem-solving skills."
      }
    ]
  }
};