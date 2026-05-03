export default {
  navbar: {
    about: "Обо мне",
    projects: "Проекты",
    certificates: "Сертификаты",
    skills: "Навыки",
    experience: "Опыт",
    testimonials: "Отзывы"
  },
  introduction: {
    greeting: "Привет, я Гарбсон Соуза!",
    role: "Front-End Разработчик",
    cta: "Скачать Резюме"
  },
  biography: {
    title: "Обо мне",
    description: `
Frontend разработчик с 3+ годами создания веб-приложений для международных компаний в 4 странах. В настоящее время разрабатываю критические системы налогового соответствия в NFCOM, которые влияют на миллионы пользователей основных бразильских телекоммуникационных операторов (Claro/Embratel).

🌍 Международное путешествие:
🇬🇷 Греция (1+ год) - Административная панель eBay | Nuxt.js + SSR
🇺🇸 Майами (5 месяцев) - Стартап с 2D графикой | Vue.js + Pixi.js
🇵🇪 Перу (проект) - Сайт отеля | Органичное нетворкинг во время путешествий
🇧🇷 Бразилия (текущее) - KNN Idiomas + Claro & Embratel | EdTech + Критические телекоммуникационные системы
  `,
  },
  featuredProjects: [
    {
      title: "Fernando Недвижимость",
      description: "Лендинг для риелтора, направленный на привлечение клиентов и генерацию квалифицированных лидов. Элегантный адаптивный интерфейс с портфолио объектов, отзывами клиентов и интегрированными каналами связи. Высокая производительность и дизайн, ориентированный на конверсию.",
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
      description: "Полноценный e-commerce для спортивного и outdoor оборудования с каталогом 1000+ товаров, корзиной покупок, системой поиска с расширенными фильтрами и интеграцией с платежными API. Реализовал систему управления инвентарем, административную панель для управления заказами и безопасную оплату. Фокус на производительности и SEO для конверсии продаж.",
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
      title: "Личное Портфолио",
      description: "Мое личное портфолио, разработанное с Vue 3 и Vite, представляющее мой профессиональный путь, проекты и навыки. Реализовал систему интернационализации (i18n) для 5 языков, адаптивный дизайн с Tailwind CSS и плавные анимации с AOS. Решение, которое демонстрирует мои технические возможности и креативность в frontend разработке.",
      img: "garbson.png",
      vue: true,
      tailwind: true,
      javascript: true,
      vite: true,
      github: "https://github.com/Garbson/portifolio",
      link: "https://garbsonsouza.dev/",
      tech: "Vue.js 3, Vite, Tailwind CSS, Vue I18n",
      featured: true
    },
    {
      title: "Hostel Pachacuteq",
      description: "Полная система бронирования для перуанского отеля с многоязычным интерфейсом, календарем доступности в реальном времени, обработкой платежей и управлением гостями. Реализовал адаптивный дизайн, оптимизированный для мобильных путешественников с интегрированной местной туристической информацией и системой подтверждения бронирования.",
      img: "pachacutec.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
      tech: "Vue.js, Tailwind CSS, Система Бронирования",
      featured: true
    },
    {
      title: "Guty Недвижимость",
      description: "Профессиональный лендинг для риелтора, ориентированный на конверсию лидов. Современный адаптивный дизайн с презентацией объектов и преимуществами риелтора. Оптимизирован для производительности и мобильного опыта.",
      img: "guty.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/corretor-landing",
      link: "https://gutthierryimoveis.com/",
      tech: "Vue.js, Tailwind CSS, JavaScript",
      featured: true
    },
  ],
  projects: [
    {
      title: "Система Биллинга Телеком",
      description: "Личный учебный проект — не является официальной системой Claro/Embratel. Симуляция генерации счетов по моделям NFCom 62 и 22 с автоматическим расчётом налогов (ICMS, PIS, COFINS) и экспортом XML по бразильскому налоговому стандарту. Разработан для углубления знаний о процессах биллинга в телекоме, полученных на работе.",
      img: "nfcom.png",
      react: true,
      javascript: true,
      css: true,
      github: "https://github.com/Garbson/GeradorDeTributa--o",
      link: "https://geradordetributa--o.pages.dev/",
    },
    {
      title: "Golfim",
      description: "Профессиональная платформа для услуг ремонта и реставрации бассейнов с системой планирования услуг, управления клиентами и отслеживания бюджета. Реализовал полный рабочий процесс услуг от первого контакта до завершения проекта с фотодокументацией и отслеживанием прогресса.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
      tech: "Vue.js, Quasar, Управление Услугами"
    },
    {
      title: "AmazonNanoForest",
      description: "Институциональный веб-сайт для амазонской биотехнологической компании с фокусом на визуальном повествовании и презентации инновационных проектов. Реализовал адаптивный интерфейс, интерактивный каталог натуральных продуктов и систему презентации устойчивых проектов. Проект, который увеличил вовлеченность и сгенерировал международные лиды.",
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
      description: "Магазин продаж оружия, рыбалки, кемпинга и многого другого.",
      img: "atapera.png",
      tailwind: true,
      typescript: true,
      vue: true,
      nuxt: true,
      github: "https://github.com/Garbson/atapera-ecommerce",
      link: "https://atapera.shop/",
      metrics: [
        "50+ активных пользователей",
        "Увеличение клиентов на 30%",
        "Системы онлайн продаж"
      ]
    },
    {
      title: "Feedel",
      description: "Глобальный маркетплейс, соединяющий продавцов и клиентов по всему миру.",
      img: "feedel.png",
      vue: true,
      Quasar: true,
      node: true,
      nuxt: true,
      github: "https://github.com/hellenictechnologies/feedel-dashboard-garbson",
      link: "https://feedel.app/login",
    },
    {
      title: "DizeME",
      description: "Веб-сайт для помощи людям в пожертвованиях и предложениях с легкостью.",
      img: "dizeMe.jpg",
      typescript: true,
      vue: true,
      tailwind: true,
      github: "https://github.com/Garbson/IgrejaAdventistaCentralHumaita",
      link: "https://igreja-adventista-25-de-dezembro.pages.dev",
      metrics: [
        "Упрощение для 100+ членов церкви",
        "Интуитивный интерфейс для пожертвований"
      ]
    },
    {
      title: "Wedding Memories",
      description: "Веб-сайт для хранения и обмена памятными моментами в фотографиях.",
      img: "memories.jpeg",
      vue: true,
      typescript: true,
      tailwind: true,
      github: "https://github.com/Garbson/wedding-memories",
      link: "https://wedding-memories.pages.dev/",
    },
    {
      title: "Hostel Pachacuteq",
      description: "Веб-сайт для перуанского отеля, созданный для любителей приключений и комфорта.",
      img: "pachacutec.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
    },
    {
      title: "AmazonNanoForest",
      description: "Биотехнологическая инициатива, объединяющая природу и инновации в Амазонии.",
      img: "NanoForest.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      github: "https://github.com/Garbson/AMAZON-NANO-FOREST",
      link: "https://amazonnanoforest.com/",
    },
    {
      title: "Golfim",
      description: "Платформа для предоставления услуг по ремонту и восстановлению бассейнов.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
    },
    {
      title: "Crypto Tracker",
      description: "Инструмент для отслеживания ежедневных колебаний криптовалют в реальном времени.",
      img: "Crypto.png",
      vue: true,
      tailwind: true,
      javascript: true,
      firebase: true,
      github: "https://github.com/leonardo-cordeiro/CryptoTracker/tree/Garbson",
      link: "https://cryptotracker-5hk.pages.dev/",
    },
    {
      title: "Калькулятор",
      description: "Простое и функциональное приложение для быстрых расчетов, разработанное с использованием Pinia.",
      img: "Calculadora.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/calculadora",
      link: "https://calculadora-e7p.pages.dev/",
    },
    {
      title: "To Do List",
      description: "Интуитивно понятный менеджер задач для организации повседневных дел.",
      img: "Todolist.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/To-do-list",
      link: "https://to-do-list-aky.pages.dev/",
    },
    {
      title: "Brasileiro.ninja",
      description: "Национальная база данных с полезной информацией, такой как индексы, ISBN, DDD и другие.",
      img: "Brasileiro.jpeg",
      vue: true,
      css: true,
      javascript: true,
      github: "https://github.com/arnonrdp/Brasileiro-Ninja",
      link: "https://brasileiro.ninja/",
    },
    {
      title: "Портфолио",
      description: "Мое личное портфолио, демонстрирующее проекты и навыки в области технологий.",
      img: "garbson.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/portifolio",
      link: "https://portifolio-by1.pages.dev",
    },
    {
      title: "Температура",
      description: "Приложение для глобальной консультации температуры, простое и удобное.",
      img: "temperatures.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/projeto-site-pra-ver-a-temperatura",
      link: "https://temperature-9ta.pages.dev/",
    },
    {
      title: "Конвертер валют",
      description: "Эффективный инструмент для международного обмена валют.",
      img: "Conversor.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Currency-Converter",
      link: "https://currency-converter-cgn.pages.dev/",
    },
    {
      title: "Городской пейзаж",
      description: "Интерактивный визуальный опыт при изменении размера окна браузера.",
      img: "city.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/city",
      link: "https://city-du9.pages.dev/",
    },
    {
      title: "Опасные драконы",
      description: "RPG-игра, разработанная на чистом JavaScript.",
      img: "dangerous.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Dangerous-dragon",
      link: "https://dangerous-dragon.pages.dev/",
    },
  ],
  certificates: {
    title: "Сертификаты",
    items: {
      responsiveWebDesign: "Адаптивный веб-дизайн",
      jsAlgorithms: "Алгоритмы и структуры данных на JavaScript",
      cs50: "CS50: Введение в компьютерные науки",
    },
  },
  skills: {
    title: "Мои Навыки",
    categories: [
      {
        name: "Front-end",
        items: [
          { name: "Vue.js", level: 90, icon: "vue-svgrepo-com.svg", description: "Фреймворк Vue.js для создания интерактивных интерфейсов" },
          { name: "Quasar", level: 85, icon: "Quasar.svg", description: "Фреймворк Quasar для кросс-платформенных Vue приложений" },
          { name: "React", level: 75, icon: "react.svg", description: "Библиотека React.js для создания пользовательских интерфейсов" },
          { name: "Next.js", level: 70, icon: "nextjs.svg", description: "Фреймворк Next.js для React приложений" },
          { name: "Bootstrap", level: 85, icon: "bootstrap.png", description: "Фреймворк CSS Bootstrap для адаптивной веб-разработки" },
          { name: "HTML5", level: 95, icon: "html.svg", description: "Язык разметки HTML5 для веб-контента" },
          { name: "CSS3/SCSS", level: 90, icon: "css-3-svgrepo-com.svg", description: "CSS3 и SCSS для стилизации веб-приложений" },
          { name: "Tailwind CSS", level: 85, icon: "tailwind.svg", description: "Utility-first фреймворк Tailwind CSS" },
          { name: "JavaScript", level: 90, icon: "javascript-svgrepo-com.svg", description: "Язык программирования JavaScript" },
          { name: "TypeScript", level: 80, icon: "typescript.png", description: "TypeScript, надмножество JavaScript с типами" }
        ]
      },
      {
        name: "Back-end и Инструменты",
        items: [
          { name: "Node.js", level: 75, icon: "node.svg", description: "Среда выполнения Node.js для JavaScript" },
          { name: "PHP", level: 70, icon: "php.svg", description: "Язык программирования PHP для веб-разработки" },
          { name: "Python", level: 65, icon: "python.svg", description: "Язык программирования Python для различных целей" },
          { name: "Bash", level: 60, icon: "bash.svg", description: "Скриптовый язык Bash для автоматизации задач" },
          { name: "MySQL", level: 75, icon: "mysql.svg", description: "Система управления реляционными базами данных MySQL" },
          { name: "PostgreSQL", level: 70, icon: "postgresql.svg", description: "Система реляционных баз данных PostgreSQL" },
          { name: "Docker", level: 65, icon: "docker.svg", description: "Платформа контейнеризации Docker" },
          { name: "Firebase", level: 80, icon: "firebase.svg", description: "Платформа Firebase для разработки приложений" },
          { name: "Git/GitHub", level: 85, icon: "github-color-svgrepo-com.svg", description: "Система контроля версий Git и платформа GitHub" },
          { name: "RESTful APIs", level: 85, description: "Проектирование и потребление RESTful API" },
          { name: "Responsive Design", level: 95, description: "Создание адаптивных макетов для всех устройств" },
          { name: "Nuxt.js", level: 75, icon: "nuxt.png", description: "Фреймворк Nuxt.js для Vue приложений" },
          { name: "UI/UX Design", level: 70, description: "Принципы дизайна интерфейса и пользовательского опыта" }
        ]
      }
    ]
  },
  experience: {
    title: "Профессиональный Опыт",
    current: "Текущий",
    achievements: "Ключевые достижения:",
    tech: "Технологии:",
    items: [
      {
        role: "Analista Desenvolvedor",
        company: "NFCOM (Grupo Easy)",
        location: "Рио-Бранко, Акри",
        period: "июл 2025 - Настоящее время",
        description: "Разработка системы налогового анализа для Grupo Easy. Работа над проектами NFCOM и RGC с технологиями IBM mainframe и Natural Language. Разработка решений для обработки налоговых данных. Вклад в крупномасштабные корпоративные проекты. Предоставление услуг для Claro и Embratel.",
        achievements: [
          "Реализовал систему налогового анализа, обрабатывающую данные миллионов клиентов",
          "Работаю с legacy технологиями (IBM Mainframe + Natural Language), интегрированными с современным frontend",
          "Разработка решений для крупномасштабных биллинговых систем"
        ],
        tech: "Vue.js, Natural Language, IBM Mainframe, Tax Systems",
        current: true
      },
      {
        role: "Frontend Разработчик",
        company: "KNN Idiomas",
        location: "Балнеарио-Камбориу, СК",
        period: "сен 2024 - июн 2025",
        description: "Работал Frontend разработчиком в KNN Idiomas, одной из крупнейших компаний по обучению языкам в Латинской Америке, обслуживающей тысячи студентов по всему региону.",
        achievements: [
          "Разрабатывал и поддерживал веб-приложения на Vue.js (v2 и v3) с Vuetify (v2 и v3) для образовательных платформ",
          "Создавал отзывчивые и удобные интерфейсы для образовательных платформ, обслуживающих тысячи студентов",
          "Интегрировал REST API для связи frontend сервисов с backend системами",
          "Вносил вклад в цифровую трансформацию языкового образования по всей Латинской Америке",
          "Сотрудничал с командами дизайна и backend для обеспечения бесшовного пользовательского опыта",
          "Оптимизировал производительность приложений для поддержки высокого числа одновременных пользователей в часы пик",
          "Реализовал интерактивные обучающие компоненты, повысившие вовлечённость и удержание студентов",
          "Разработал многоязычные интерфейсы для поддержки разнообразных латиноамериканских рынков"
        ],
        tech: "Vue.js (v2, v3), Vuetify (v2, v3), JavaScript, REST APIs, Responsive Design, Educational Technology"
      },
      {
        role: "Frontend Разработчик",
        company: "Hellenic Technologies",
        location: "Афины, Греция (Удалённо)",
        period: "янв 2024 - фев 2025",
        description: "Frontend разработчик в Hellenic Technologies, создающий и поддерживающий динамичные и интуитивные пользовательские интерфейсы с использованием современных технологий для европейского рынка.",
        achievements: [
          "Разрабатывал приложения на Vue.js и Nuxt.js для оптимизации производительности и пользовательского опыта на европейских рынках",
          "Создавал динамичные компоненты и универсальные приложения с серверным рендерингом (SSR) для оптимальной производительности",
          "Интегрировал различные REST API, обеспечивая эффективную коммуникацию между frontend и backend системами",
          "Реализовал централизованное управление состоянием с Pinia для улучшения масштабируемости и обслуживаемости приложений",
          "Разрабатывал сложный функционал на JavaScript и продвинутые пользовательские взаимодействия для европейских клиентов",
          "Сотрудничал с международными командами в разных часовых поясах для доставки качественных решений",
          "Оптимизировал приложения для кросс-браузерной совместимости и европейских стандартов доступности",
          "Реализовал адаптивные паттерны дизайна, оптимизированные под особенности использования устройств в Европе"
        ],
        tech: "Vue.js, Nuxt.js, Pinia, JavaScript, REST APIs, Server-Side Rendering, State Management"
      },
      {
        role: "Frontend Разработчик",
        company: "NeuroAEye",
        location: "Майами, Флорида (Удалённо)",
        period: "мар 2024 - окт 2024",
        description: "Разработка интерфейса для приложения искусственного интеллекта. Интеграция продвинутых визуальных компонентов с использованием Pixi.js. Работа с медицинскими данными и интерактивными визуализациями.",
        achievements: [
          "Создал компоненты визуализации для медицинских данных с использованием Pixi.js",
          "Реализовал интерфейс для анализа медицинских изображений с обратной связью в реальном времени",
          "Работал с чувствительными данными, следуя стандартам безопасности здравоохранения"
        ],
        tech: "Pixi.js, Vue.js, Medical Data Visualization"
      },
      {
        role: "Frontend Разработчик",
        company: "Hostal Pachacuteq Inn",
        location: "Куско, Перу (Удалённо)",
        period: "янв 2024",
        description: "Разработка системы бронирования отелей. Реализация отзывчивого многоязычного интерфейса. Интеграция с APIs платежей и бронирования.",
        achievements: [
          "Многоязычный отзывчивый веб-сайт (3 языка)",
          "Система бронирования с календарём доступности в реальном времени",
          "Интеграция с APIs платежей (Stripe)"
        ],
        tech: "Vue.js, Stripe API, Multilingual System"
      },
      {
        role: "Frontend Разработчик",
        company: "AmazonNanoForest",
        location: "Рио-Бранко, Акри (Удалённо)",
        period: "ноя 2023",
        description: "Разработка корпоративного веб-сайта для компании натуральных продуктов. Создание отзывчивого интерфейса для электронной коммерции амазонских продуктов. Реализация интерактивного каталога и системы презентации продуктов.",
        achievements: [
          "Отзывчивый институциональный веб-сайт с фокусом на визуальном повествовании",
          "Интерактивный каталог амазонских продуктов",
          "Интерфейс для презентации инновационных проектов"
        ],
        tech: "Vue.js, Responsive Design, E-commerce"
      }
    ]
  },
  callToAction: {
    title: "Давайте Работать Вместе",
    description: "В настоящее время я открыт для новых возможностей и интересных проектов. Нужен ли вам преданный frontend разработчик или хотите обсудить сложную проблему, я буду рад услышать от вас.",
    email: {
      text: "Электронная почта",
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
      text: "Скачать Резюме",
      link: "#resume" // Placeholder - update with actual resume link
    }
  },
  certificates: {
    title: "Сертификаты",
    viewCertificate: "Посмотреть сертификат",
    items: [
      {
        title: "Back End разработка и APIs",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/back-end-development-and-apis"
      },
      {
        title: "Scrum: Гибкое планирование и разработка",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/808e796b79aae092046d6b35bcfad80a5987c1efdd834582268590c9929ea7e2"
      },
      {
        title: "Scrum Fundamentals Certified (SFC™)",
        organization: "SCRUMstudy",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1106530"
      },
      {
        title: "Основы программирования Natural",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/details/certifications/1758668296353/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      },
      {
        title: "Владение ИИ: Фреймворк и основы",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Владение ИИ для студентов",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/7ewkgwxbuqib"
      },
      {
        title: "Claude Code в действии",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Адаптивный веб-дизайн",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/portuguese/certification/garbson_souza/responsive-web-design"
      },
      {
        title: "Алгоритмы и структуры данных JavaScript",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/javascript-algorithms-and-data-structures"
      },
      {
        title: "CS50: Введение в компьютерные науки",
        organization: "Harvard/edX",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/overlay/1635529817666/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      }
    ],
  },
  testimonials: {
    title: "Отзывы",
    items: [
      {
        name: "Arnon Rodrigues de Paula",
        role: "Front-End Expert | Lead Developer | Agile",
        text: "Я рекомендую Гарбсона, талантливого молодого человека, которого я наставлял в последние месяцы. Гарбсон обладает замечательным любопытством и желанием учиться, всегда стремясь развиваться и преодолевать трудности. Он выделяется своими отличными навыками межличностного общения, включая эффективную коммуникацию, эмпатию и способность работать в команде. Его позитивный настрой и готовность помочь другим делают его ценным коллегой. Гарбсон также демонстрирует впечатляющую способность решать проблемы практичным и инновационным способом. Прежде всего, Гарбсон - человек честный и надежный, с образцовой рабочей этикой. Его преданность делу и энтузиазм видны во всем, что он делает."
      },
      {
        name: "Jesiel Monteiro de Oliveira",
        role: "SAFe® 4 Agilist | CSS Senior Specialist at NTT Data | Product Owner",
        text: "Я решительно рекомендую Гарбсона, молодого front-end программиста, чрезвычайно преданного своему делу и обладающего впечатляющей способностью к быстрому обучению. За время нашей совместной работы он продемонстрировал твердые навыки во front-end технологиях, а также невероятную способность эффективно и творчески решать сложные проблемы. Его готовность учиться и адаптироваться к новым вызовам делает его ценным активом для любой команды. С его проактивностью, преданностью делу и постоянным стремлением к совершенствованию, я уверен, что его ждет блестящее будущее в веб-разработке."
      },
      {
        name: "Stavros Tsiogkas",
        role: "Digital Account Manager @ Hellenic Technologies",
        text: "Я рад рекомендовать Гарбсона Соуза, с которым я сотрудничал по многим проектам разработки, особенно на уровне продукта. Техническая экспертиза Гарбсона, инновационное мышление и приверженность к предоставлению высококачественных решений постоянно впечатляли меня. Его способность решать сложные задачи и эффективно работать в команде делает его бесценным ресурсом. Я уверен, что Гарбсон преуспеет в любом начинании, за которое возьмется."
      },
      {
        name: "Gabriel Bodenmüller",
        role: "Software Developer | Python | Vue | JavaScript | Typescript | PostgreSQL | Computer engineer",
        text: "Я имел удовольствие следить за работой Гарбсона и могу с уверенностью сказать: он удивительный профессионал в мире front-end разработки! С острыми навыками в Vue, TypeScript, продвинутом CSS и оптимизации производительности, он не только предоставляет чистый и хорошо структурированный код, но и заботится о пользовательском опыте и удобстве использования продукта. Кроме того, его способность быстро учиться и адаптироваться к новым технологиям впечатляет. Если вы ищете талантливого, коллаборативного и преданного front-end разработчика, Гарбсон - правильный выбор!"
      },
      {
        name: "Tiago Lopes",
        role: "BI Аналитик | Аналитик данных | SQL | BigQuery | Power BI | Looker Studio",
        text: "С большим удовлетворением я рекомендую Гарбсона Соуза для возможностей в качестве Frontend-разработчика. У меня была привилегия работать с ним в KNN Idiomas, где он последовательно демонстрировал свои технические навыки и приверженность к высококачественным результатам. Гарбсон - талантливый профессионал, знающий такие технологии, как Vue.js, Quasar, Vuex/Pinia, Node.js, JavaScript, Nuxt.js, REST API, Vuetify и TypeScript. Его способность создавать современные, интуитивно понятные и эффективные интерфейсы заметна, помимо его умения интегрировать сложные системы с REST API. За время нашей совместной работы Гарбсон выделялся своим совместным подходом и решением проблем."
      },
      {
        name: "Anielli Martiniano Lemos",
        role: "Дизайнер в KNN Idiomas Brasil",
        text: "Как дизайнер, это облегчение иметь кого-то, кто понимает каждую корректировку расстояния, каждый уголок макета и превращает все в код с большой тщательностью и вниманием к деталям. Во frontend, Гарбсон доставляет с настоящим качеством. Речь идет не только о том, чтобы заставить это работать — речь идет о том, чтобы сделать это хорошо, думая о производительности, удобстве использования и том опыте, которым мы гордимся доставить. Не говоря уже о том, что день за днем он партнер во всем: обменивается идеями, помогает, решает проблемы вместе и все еще делает атмосферу команды намного легче. Работать с ним - это редкое сочетание хорошей доставки + легкого процесса — что-то, что делает всю разницу в результате (и пути к нему). Он тот тип человека, которого заслуживает иметь рядом каждая команда."
      }
    ]
  }
};