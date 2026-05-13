export default {
  navbar: {
    about: "Σχετικά με μένα",
    projects: "Έργα",
    certificates: "Πιστοποιητικά",
    skills: "Δεξιότητες",
    experience: "Εμπειρία",
    testimonials: "Μαρτυρίες"
  },
  introduction: {
    greeting: "Γεια σας! Είμαι ο Garbson Souza",
    role: "Προγραμματιστής Front-End",
    cta: "Κατεβάστε το Βιογραφικό"
  },
  biography: {
    title: "Σχετικά με μένα",
    description: `Frontend Προγραμματιστής με 3+ χρόνια δημιουργίας web εφαρμογών για διεθνείς εταιρείες σε 4 χώρες. Αυτή τη στιγμή αναπτύσσω κρίσιμα συστήματα φορολογικής συμμόρφωσης στην NFCOM που επηρεάζουν εκατομμύρια χρήστες σε μεγάλους βραζιλιάνους τηλεπικοινωνιακούς παρόχους (Claro/Embratel).`,
  },
  featuredProjects: [
    {
      title: "Guty Ακίνητα",
      description: "Επαγγελματική landing page για κτηματομεσίτη εστιασμένη στη μετατροπή leads. Υλοποίησα responsive σχεδιασμό με Vue.js και Tailwind CSS, βελτιστοποιημένο για κινητές συσκευές, με εμφανή call-to-action και διατομή παρουσίασης ακινήτων για μέγιστη εμπλοκή πελατών.",
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
      title: "Fernando Ακίνητα",
      description: "Landing page για κτηματομεσίτη εστιασμένη στην απόκτηση πελατών. Σχεδιάστηκε με Vue.js, Tailwind CSS και JavaScript, με επαγγελματική παρουσίαση υπηρεσιών, τμήμα μαρτυριών και ενσωματωμένα κανάλια επικοινωνίας για αύξηση μετατροπών.",
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
      description: "Πλήρες e-commerce για αθλητικό και outdoor εξοπλισμό με κατάλογο 1000+ προϊόντων, καλάθι αγορών, σύστημα αναζήτησης με προηγμένα φίλτρα και ενσωμάτωση με APIs πληρωμών. Υλοποίησα σύστημα διαχείρισης αποθέματος, διοικητικό πάνελ για διαχείριση παραγγελιών και ασφαλή checkout. Εστίαση σε απόδοση και SEO για μετατροπή πωλήσεων.",
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
      title: "Προσωπικό Πορτφόλιο",
      description: "Το προσωπικό μου πορτφόλιο αναπτυγμένο με Vue 3 και Vite, παρουσιάζοντας την επαγγελματική μου πορεία, έργα και δεξιότητες. Υλοποίησα σύστημα διεθνοποίησης (i18n) για 5 γλώσσες, ανταποκρινόμενο σχεδιασμό με Tailwind CSS και ελαφριές ανιμάτιονς με AOS. Λύση που αποδεικνύει την τεχνική μου ικανότητα και δημιουργικότητα στην ανάπτυξη frontend.",
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
      title: "Hostel Pachacutec",
      description: "Πλήρες σύστημα κρατήσεων για περουβιανό ξενοδοχείο με πολυγλωσσικό interface, ημερολόγιο διαθεσιμότητας σε πραγματικό χρόνο, επεξεργασία πληρωμών και διαχείριση επισκεπτών. Υλοποίησα responsive σχεδιασμό βελτιστοποιημένο για mobile ταξιδιώτες με ενσωματωμένες τοπικές τουριστικές πληροφορίες και σύστημα επιβεβαίωσης κρατήσεων.",
      img: "pachacutec.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      node: true,
      github: "https://github.com/Garbson/pachacuteq",
      link: "https://pachacuteq.pages.dev/",
      tech: "Vue.js, Tailwind CSS, Σύστημα Κρατήσεων",
      featured: true
    },
  ],
  projects: [
    {
      title: "Σύστημα Χρέωσης Τηλεπικοινωνιών",
      description: "Προσωπικό εκπαιδευτικό έργο — δεν είναι το επίσημο σύστημα της Claro/Embratel. Προσομοίωση δημιουργίας τιμολογίων στα μοντέλα NFCom 62 και 22, με αυτόματο υπολογισμό φόρων (ICMS, PIS, COFINS) και εξαγωγή XML σύμφωνα με το βραζιλιάνικο φορολογικό πρότυπο. Αναπτύχθηκε για εμβάθυνση στις διαδικασίες χρέωσης τηλεπικοινωνιών που αποκτήθηκαν στην εργασία.",
      img: "nfcom.png",
      react: true,
      javascript: true,
      css: true,
      github: "https://github.com/Garbson/GeradorDeTributa--o",
      link: "https://geradordetributa--o.pages.dev/",
    },
    {
      title: "Golfim",
      description: "Επαγγελματική πλατφόρμα για υπηρεσίες επισκευής και αποκατάστασης πισινών με σύστημα προγραμματισμού υπηρεσιών, διαχείριση πελατών και παρακολούθηση προϋπολογισμών. Υλοποίησα πλήρη ροή εργασιών υπηρεσιών από αρχική επαφή έως ολοκλήρωση έργου με φωτογραφική τεκμηρίωση και παρακολούθηση προόδου.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
      tech: "Vue.js, Quasar, Διαχείριση Υπηρεσιών"
    },
    {
      title: "AmazonNanoForest",
      description: "Ιδρυματικός ιστότοπος για εταιρεία αμαζόνιας βιοτεχνολογίας με εστίαση σε οπτική αφήγηση και παρουσίαση καινοτόμων έργων. Υλοποίησα responsive interface, διαδραστικό κατάλογο φυσικών προϊόντων και σύστημα παρουσίασης βιώσιμων έργων. Έργο που αύξησε την εμπλοκή και παρήγαγε διεθνή leads.",
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
      description: "Κατάστημα πωλήσεων όπλων, ψαρέματος, κάμπινγκ και πολλά άλλα.",
      img: "atapera.png",
      tailwind: true,
      typescript: true,
      vue: true,
      nuxt: true,
      github: "https://github.com/Garbson/atapera-ecommerce",
      link: "https://atapera.shop/",
      metrics: [
        "50+ ενεργοί χρήστες",
        "Αύξηση 30% στους πελάτες",
        "Συστήματα διαδικτυακών πωλήσεων"
      ]
    },
    {
      title: "Feedel",
      description: "Μια παγκόσμια αγορά που συνδέει πωλητές και πελάτες σε όλο τον κόσμο.",
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
      description: "Μια ιστοσελίδα για να βοηθήσει τους ανθρώπους να δώσουν δεκάτη και να προσφέρουν με ευκολία.",
      img: "dizeMe.jpg",
      typescript: true,
      vue: true,
      tailwind: true,
      github: "https://github.com/Garbson/IgrejaAdventistaCentralHumaita",
      link: "https://igreja-adventista-25-de-dezembro.pages.dev",
      metrics: [
        "Διευκόλυνση για 100+ μέλη της εκκλησίας",
        "Διαισθητική διεπαφή για δωρεές"
      ]
    },
    {
      title: "Wedding Memories",
      description: "Μια ιστοσελίδα για αποθήκευση και κοινή χρήση αναμνήσεων μέσω φωτογραφιών.",
      img: "memories.jpeg",
      vue: true,
      typescript: true,
      tailwind: true,
      github: "https://github.com/Garbson/wedding-memories",
      link: "https://wedding-memories.pages.dev/",
    },
    {
      title: "Hostel Pachacuteq",
      description: "Ιστότοπος για ένα περουβιανό ξενοδοχείο που σχεδιάστηκε για ταξιδιώτες που αναζητούν περιπέτεια και άνεση.",
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
      description: "Μια πρωτοβουλία βιοτεχνολογίας που συνδυάζει τη φύση και την καινοτομία στον Αμαζόνιο.",
      img: "NanoForest.png",
      vue: true,
      tailwind: true,
      Quasar: true,
      github: "https://github.com/Garbson/AMAZON-NANO-FOREST",
      link: "https://amazonnanoforest.com/",
    },
    {
      title: "Golfim",
      description: "Πλατφόρμα για την παροχή υπηρεσιών επισκευής και αποκατάστασης πισινών.",
      img: "Golfim.png",
      vue: true,
      javascript: true,
      Quasar: true,
      github: "https://github.com/leonardo-cordeiro/golfim",
      link: "https://golfim.pages.dev/",
    },
    {
      title: "Crypto Tracker",
      description: "Ένα εργαλείο για την παρακολούθηση καθημερινών διακυμάνσεων κρυπτονομισμάτων σε πραγματικό χρόνο.",
      img: "Crypto.png",
      vue: true,
      tailwind: true,
      javascript: true,
      firebase: true,
      github: "https://github.com/leonardo-cordeiro/CryptoTracker/tree/Garbson",
      link: "https://cryptotracker-5hk.pages.dev/",
    },
    {
      title: "Υπολογιστής",
      description: "Μια απλή αλλά λειτουργική εφαρμογή για γρήγορους υπολογισμούς, αναπτυγμένη με το Pinia.",
      img: "Calculadora.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/calculadora",
      link: "https://calculadora-e7p.pages.dev/",
    },
    {
      title: "Λίστα υποχρεώσεων",
      description: "Ένας διαισθητικός διαχειριστής εργασιών για την καθημερινή σας οργάνωση.",
      img: "Todolist.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/To-do-list",
      link: "https://to-do-list-aky.pages.dev/",
    },
    {
      title: "Brasileiro.ninja",
      description: "Μια εθνική βάση δεδομένων με χρήσιμες πληροφορίες, όπως ταχυδρομικούς κώδικες, ISBN και άλλα.",
      img: "Brasileiro.jpeg",
      vue: true,
      css: true,
      javascript: true,
      github: "https://github.com/arnonrdp/Brasileiro-Ninja",
      link: "https://brasileiro.ninja/",
    },
    {
      title: "Πορτφόλιο",
      description: "Το προσωπικό μου πορτφόλιο που παρουσιάζει έργα και δεξιότητες τεχνολογίας.",
      img: "garbson.png",
      vue: true,
      tailwind: true,
      javascript: true,
      github: "https://github.com/Garbson/portifolio",
      link: "https://portifolio-by1.pages.dev",
    },
    {
      title: "Θερμοκρασία",
      description: "Μια απλή και πρακτική εφαρμογή για παγκόσμια αναζήτηση θερμοκρασίας.",
      img: "temperatures.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/projeto-site-pra-ver-a-temperatura",
      link: "https://temperature-9ta.pages.dev/",
    },
    {
      title: "Μετατροπέας Νομισμάτων",
      description: "Ένα αποτελεσματικό εργαλείο για διεθνή μετατροπή νομισμάτων.",
      img: "Conversor.jpeg",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Currency-Converter",
      link: "https://currency-converter-cgn.pages.dev/",
    },
    {
      title: "Ορίζοντας Πόλης",
      description: "Μια διαδραστική οπτική εμπειρία κατά την αλλαγή του μεγέθους του παραθύρου του παραθύρου του προγράμματος περιήγησης.",
      img: "city.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/city",
      link: "https://city-du9.pages.dev/",
    },
    {
      title: "Επικίνδυνοι Δράκοι",
      description: "Ένα παιχνίδι RPG που αναπτύχθηκε με καθαρή JavaScript.",
      img: "dangerous.png",
      html: true,
      css: true,
      javascript: true,
      github: "https://github.com/Garbson/Dangerous-dragon",
      link: "https://dangerous-dragon.pages.dev/",
    },
  ],
  certificates: {
    title: "Πιστοποιητικά",
    items: {
      responsiveWebDesign: "Ευέλικτος Σχεδιασμός Ιστού",
      jsAlgorithms: "Αλγόριθμοι και Δομές Δεδομένων σε JavaScript",
      cs50: "CS50: Εισαγωγή στην Επιστήμη Υπολογιστών",
    },
  },
  skills: {
    title: "Οι Δεξιότητές μου",
    categories: [
      {
        name: "Front-end",
        items: [
          { name: "Vue.js", level: 90, icon: "vue-svgrepo-com.svg", description: "Framework Vue.js για δημιουργία διαδραστικών διεπαφών" },
          { name: "Quasar", level: 85, icon: "Quasar.svg", description: "Framework Quasar για εφαρμογές Vue πολλαπλών πλατφορμών" },
          { name: "React", level: 75, icon: "react.svg", description: "Βιβλιοθήκη React.js για δημιουργία διεπαφών χρήστη" },
          { name: "Next.js", level: 70, icon: "nextjs.svg", description: "Framework Next.js για εφαρμογές React" },
          { name: "Bootstrap", level: 85, icon: "bootstrap.png", description: "Framework CSS Bootstrap για αποκρίσιμη ανάπτυξη ιστού" },
          { name: "HTML5", level: 95, icon: "html.svg", description: "Γλώσσα σήμανσης HTML5 για περιεχόμενο ιστού" },
          { name: "CSS3/SCSS", level: 90, icon: "css-3-svgrepo-com.svg", description: "CSS3 και SCSS για στυλιστική επεξεργασία εφαρμογών ιστού" },
          { name: "Tailwind CSS", level: 85, icon: "tailwind.svg", description: "Framework Tailwind CSS utility-first" },
          { name: "JavaScript", level: 90, icon: "javascript-svgrepo-com.svg", description: "Γλώσσα προγραμματισμού JavaScript" },
          { name: "TypeScript", level: 80, icon: "typescript.png", description: "TypeScript, υπερσύνολο της JavaScript με τύπους" }
        ]
      },
      {
        name: "Back-end & Εργαλεία",
        items: [
          { name: "Node.js", level: 75, icon: "node.svg", description: "Περιβάλλον εκτέλεσης Node.js για JavaScript" },
          { name: "PHP", level: 70, icon: "php.svg", description: "Γλώσσα προγραμματισμού PHP για ανάπτυξη ιστοσελίδων" },
          { name: "Python", level: 65, icon: "python.svg", description: "Γλώσσα προγραμματισμού Python για διάφορους σκοπούς" },
          { name: "Bash", level: 60, icon: "bash.svg", description: "Shell script Bash για αυτοματοποίηση εργασιών" },
          { name: "MySQL", level: 75, icon: "mysql.svg", description: "Σύστημα διαχείρισης σχεσιακών βάσεων δεδομένων MySQL" },
          { name: "PostgreSQL", level: 70, icon: "postgresql.svg", description: "Σύστημα σχεσιακών βάσεων δεδομένων PostgreSQL" },
          { name: "Docker", level: 65, icon: "docker.svg", description: "Πλατφόρμα εμπορευματοκιβωτίων Docker" },
          { name: "Firebase", level: 80, icon: "firebase.svg", description: "Πλατφόρμα Firebase για ανάπτυξη εφαρμογών" },
          { name: "Git/GitHub", level: 85, icon: "github-color-svgrepo-com.svg", description: "Σύστημα ελέγχου εκδόσεων Git και πλατφόρμα GitHub" },
          { name: "RESTful APIs", level: 85, description: "Σχεδιασμός και κατανάλωση RESTful APIs" },
          { name: "Responsive Design", level: 95, description: "Δημιουργία αποκρίσιμων διατάξεων για όλες τις συσκευές" },
          { name: "Nuxt.js", level: 75, icon: "nuxt.png", description: "Framework Nuxt.js για εφαρμογές Vue" },
          { name: "UI/UX Design", level: 70, description: "Αρχές σχεδιασμού διεπαφής και εμπειρίας χρήστη" }
        ]
      }
    ]
  },
  experience: {
    title: "Επαγγελματική Εμπειρία",
    current: "Τρέχων",
    achievements: "Κύρια επιτεύγματα:",
    tech: "Τεχνολογίες:",
    items: [
      {
        role: "Analista Desenvolvedor",
        company: "NFCOM (Grupo Easy)",
        location: "Ρίο Μπράνκο, Άκρε",
        period: "Ιούλ 2025 - Τρέχον",
        description: "Ανάπτυξη συστήματος φορολογικής ανάλυσης για το Grupo Easy. Εργασία στα έργα NFCOM και RGC με τεχνολογίες IBM mainframe και Natural Language. Ανάπτυξη λύσεων για επεξεργασία φορολογικών δεδομένων. Συνεισφορά σε εταιρικά έργα μεγάλης κλίμακας. Παροχή υπηρεσιών για Claro και Embratel.",
        achievements: [
          "Υλοποίησα σύστημα φορολογικής ανάλυσης που επεξεργάζεται δεδομένα εκατομμυρίων πελατών",
          "Εργάζομαι με legacy τεχνολογίες (IBM Mainframe + Natural Language) ενσωματωμένες με σύγχρονο frontend",
          "Ανάπτυξη λύσεων για συστήματα χρέωσης μεγάλης κλίμακας"
        ],
        tech: "Vue.js, Natural Language, IBM Mainframe, Tax Systems",
        current: true
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "KNN Idiomas",
        location: "Μπαλνεάριο Καμπορίου, SC",
        period: "Σεπ 2024 - Ιούν 2025",
        description: "Εργάστηκα ως Frontend Developer στην KNN Idiomas, μία από τις μεγαλύτερες εταιρείες εκπαίδευσης γλωσσών στη Λατινική Αμερική, εξυπηρετώντας χιλιάδες μαθητές σε ολόκληρη την περιοχή.",
        achievements: [
          "Ανέπτυξα και συντήρησα web εφαρμογές με Vue.js (v2 και v3) και Vuetify (v2 και v3) για εκπαιδευτικές πλατφόρμες",
          "Δημιούργησα ανταποκρινόμενες και φιλικές διεπαφές για εκπαιδευτικές πλατφόρμες που εξυπηρετούν χιλιάδες εκπαιδευόμενους",
          "Ενσωμάτωσα REST APIs για σύνδεση frontend υπηρεσιών με backend συστήματα",
          "Συνέβαλα στον ψηφιακό μετασχηματισμό της γλωσσικής εκπαίδευσης σε ολόκληρη τη Λατινική Αμερική",
          "Συνεργάστηκα με ομάδες σχεδιασμού και backend για απρόσκοπτες εμπειρίες χρήστη",
          "Βελτιστοποίησα την απόδοση εφαρμογών για υποστήριξη μεγάλου όγκου ταυτόχρονων χρηστών σε ώρες αιχμής",
          "Υλοποίησα διαδραστικά εκπαιδευτικά συστατικά που βελτίωσαν τη συμμετοχή και διατήρηση μαθητών",
          "Ανέπτυξα πολυγλωσσικές διεπαφές για υποστήριξη διαφόρων λατινοαμερικανικών αγορών"
        ],
        tech: "Vue.js (v2, v3), Vuetify (v2, v3), JavaScript, REST APIs, Responsive Design, Educational Technology"
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "Hellenic Technologies",
        location: "Αθήνα, Ελλάδα (Απομακρυσμένα)",
        period: "Ιαν 2024 - Φεβ 2025",
        description: "Frontend Developer στην Hellenic Technologies, δημιουργώντας και συντηρώντας δυναμικές και διαισθητικές διεπαφές χρήστη χρησιμοποιώντας σύγχρονες τεχνολογίες για την ευρωπαϊκή αγορά.",
        achievements: [
          "Ανέπτυξα εφαρμογές με Vue.js και Nuxt.js για βελτιστοποίηση απόδοσης και εμπειρίας χρήστη σε ευρωπαϊκές αγορές",
          "Δημιούργησα δυναμικά συστατικά και universal εφαρμογές με Server-Side Rendering (SSR) για βέλτιστη απόδοση",
          "Ενσωμάτωσα πολλαπλά REST APIs, διασφαλίζοντας αποδοτική επικοινωνία μεταξύ frontend και backend συστημάτων",
          "Υλοποίησα κεντρικοποιημένη διαχείριση κατάστασης με Pinia για βελτίωση της κλιμακωσιμότητας και συντηρησιμότητας",
          "Ανέπτυξα σύνθετες λειτουργίες JavaScript και προηγμένες αλληλεπιδράσεις χρήστη για ευρωπαίους πελάτες",
          "Συνεργάστηκα με διεθνείς ομάδες σε διαφορετικές ζώνες ώρας για παράδοση ποιοτικών λύσεων",
          "Βελτιστοποίησα εφαρμογές για συμβατότητα μεταξύ περιηγητών και ευρωπαϊκά πρότυπα προσβασιμότητας",
          "Υλοποίησα responsive design patterns βελτιστοποιημένα για διαφορετικά μοτίβα χρήσης συσκευών στην Ευρώπη"
        ],
        tech: "Vue.js, Nuxt.js, Pinia, JavaScript, REST APIs, Server-Side Rendering, State Management"
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "NeuroAEye",
        location: "Μαϊάμι, Φλόριντα (Απομακρυσμένα)",
        period: "Μαρ 2024 - Οκτ 2024",
        description: "Ανάπτυξη διεπαφής για εφαρμογή τεχνητής νοημοσύνης. Ενσωμάτωση προηγμένων οπτικών συστατικών χρησιμοποιώντας Pixi.js. Εργασία με ιατρικά δεδομένα και διαδραστικές οπτικοποιήσεις.",
        achievements: [
          "Ανέπτυξα διεπαφή για εφαρμογή AI με εστίαση σε ιατρικά δεδομένα και οπτικοποιήσεις",
          "Υλοποίησα προηγμένα οπτικά συστατικά με Pixi.js για διαδραστικές εμπειρίες",
          "Εργάστηκα με ευαίσθητα ιατρικά δεδομένα διασφαλίζοντας ασφάλεια και προστασία"
        ],
        tech: "Vue.js, Pixi.js, AI/ML Integration, Medical Data Visualization"
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "Hostal Pachacuteq Inn",
        location: "Κούσκο, Περού (Απομακρυσμένα)",
        period: "Ιαν 2024",
        description: "Ανάπτυξη συστήματος κρατήσεων ξενοδοχείου. Υλοποίηση ανταποκρινόμενης πολυγλωσσικής διεπαφής. Ενσωμάτωση με APIs πληρωμών και κρατήσεων.",
        achievements: [
          "Ανέπτυξα ολοκληρωμένο σύστημα κρατήσεων για περουβιανό ξενοδοχείο με πολυγλωσσική υποστήριξη",
          "Υλοποίησα ανταποκρινόμενη διεπαφή βελτιστοποιημένη για ταξιδιώτες mobile",
          "Ενσωμάτωσα APIs πληρωμών και παροχής τοπικών τουριστικών πληροφοριών"
        ],
        tech: "Vue.js, Tailwind CSS, Booking System, Payment APIs"
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "AmazonNanoForest",
        location: "Ρίο Μπράνκο, Άκρε (Απομακρυσμένα)",
        period: "Νοε 2023",
        description: "Ανάπτυξη εταιρικής ιστοσελίδας για εταιρεία φυσικών προϊόντων. Δημιουργία ανταποκρινόμενης διεπαφής για e-commerce προϊόντων του Αμαζονίου. Υλοποίηση διαδραστικού καταλόγου και συστήματος παρουσίασης προϊόντων.",
        achievements: [
          "Δημιούργησα εταιρική ιστοσελίδα που παρήγαγε διεθνή leads για εταιρεία βιοτεχνολογίας",
          "Υλοποίησα διαδραστικό κατάλογο φυσικών προϊόντων με εστίαση σε οπτική αφήγηση",
          "Ανέπτυξα responsive interface που αύξησε την εμπλοκή επισκεπτών κατά 40%"
        ],
        tech: "Vue.js, Tailwind CSS, Quasar, Product Showcase System"
      }
    ]
  },
  callToAction: {
    title: "Ας Δουλέψουμε Μαζί",
    description: "Αυτή τη στιγμή είμαι ανοιχτός σε νέες ευκαιρίες και ενδιαφέροντα έργα. Είτε χρειάζεστε έναν αφοσιωμένο frontend developer είτε θέλετε να συζητήσετε ένα προκλητικό πρόβλημα, θα χαρώ να ακούσω από εσάς.",
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
      text: "Κατεβάστε το Βιογραφικό",
      link: "#resume" // Placeholder - update with actual resume link
    }
  },
  certificates: {
    title: "Πιστοποιητικά",
    viewCertificate: "Δείτε το πιστοποιητικό",
    items: [
      {
        title: "Ανάπτυξη Back End και APIs",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/back-end-development-and-apis"
      },
      {
        title: "Scrum: Agile Προγραμματισμός και Ανάπτυξη",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/808e796b79aae092046d6b35bcfad80a5987c1efdd834582268590c9929ea7e2"
      },
      {
        title: "Scrum Fundamentals Certified (SFC™)",
        organization: "SCRUMstudy",
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1106530"
      },
      {
        title: "Βασικός Προγραμματισμός Natural",
        organization: "LinkedIn Learning",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/details/certifications/1758668296353/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      },
      {
        title: "Ευφράδεια ΤΝ: Πλαίσιο και Θεμέλια",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Ευφράδεια ΤΝ για Φοιτητές",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/7ewkgwxbuqib"
      },
      {
        title: "Claude Code σε Δράση",
        organization: "Skilljar",
        link: "https://verify.skilljar.com/c/tub3be6py75w"
      },
      {
        title: "Ανταποκρινόμενος Σχεδιασμός Ιστού",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/portuguese/certification/garbson_souza/responsive-web-design"
      },
      {
        title: "Αλγόριθμοι και Δομές Δεδομένων JavaScript",
        organization: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/garbson_souza/javascript-algorithms-and-data-structures"
      },
      {
        title: "CS50: Εισαγωγή στην Επιστήμη Υπολογιστών",
        organization: "Harvard/edX",
        link: "https://www.linkedin.com/in/garbson-souza-0744a825a/overlay/1635529817666/single-media-viewer/?profileId=ACoAAD_J8FgB8waCdbKs9jUYL414eL1ggGo9gMw"
      }
    ],
  },
  testimonials: {
    title: "Μαρτυρίες",
    items: [
      {
        name: "Arnon Rodrigues de Paula",
        role: "Front-End Expert | Lead Developer | Agile",
        text: "Συνιστώ τον Garbson, έναν ταλαντούχο νέο που καθοδήγησα τους τελευταίους μήνες. Ο Garbson έχει αξιοσημείωτη περιέργεια και επιθυμία για μάθηση, πάντα αναζητώντας να αναπτυχθεί και να ξεπεράσει προκλήσεις. Ξεχωρίζει για τις εξαιρετικές soft skills του, συμπεριλαμβανομένης της αποτελεσματικής επικοινωνίας, της ενσυναίσθησης και της ικανότητας για ομαδική εργασία. Η θετική του στάση και η προθυμία του να βοηθήσει τους άλλους τον καθιστούν πολύτιμο συνάδελφο. Ο Garbson επίσης επιδεικνύει εντυπωσιακή ικανότητα επίλυσης προβλημάτων με πρακτικό και καινοτόμο τρόπο. Πάνω απ' όλα, ο Garbson είναι ένα άτομο με ακεραιότητα και αξιοπιστία, με υποδειγματική εργασιακή ηθική. Η αφοσίωση και ο ενθουσιασμός του είναι ορατά σε ό,τι κάνει."
      },
      {
        name: "Jesiel Monteiro de Oliveira",
        role: "SAFe® 4 Agilist | CSS Senior Specialist at NTT Data | Product Owner",
        text: "Συνιστώ ισχυρά τον Garbson, έναν νέο προγραμματιστή front-end, εξαιρετικά αφοσιωμένο και με εντυπωσιακή ικανότητα γρήγορης μάθησης. Κατά τη διάρκεια του χρόνου που εργαστήκαμε μαζί, επέδειξε στέρεες δεξιότητες στις τεχνολογίες front-end, καθώς και απίστευτη ικανότητα επίλυσης σύνθετων προβλημάτων αποτελεσματικά και δημιουργικά. Η προθυμία του να μαθαίνει και να προσαρμόζεται σε νέες προκλήσεις τον καθιστά πολύτιμο στοιχείο για οποιαδήποτε ομάδα. Με την προδραστικότητά του, τη δέσμευση και τη συνεχή αναζήτηση βελτίωσης, είμαι βέβαιος ότι θα έχει ένα λαμπρό μέλλον στην ανάπτυξη ιστού."
      },
      {
        name: "Stavros Tsiogkas",
        role: "Digital Account Manager @ Hellenic Technologies",
        text: "Με χαρά συστήνω τον Garbson Souza, με τον οποίο έχω συνεργαστεί σε πολλαπλά έργα ανάπτυξης, ιδιαίτερα στην ανάπτυξη σε επίπεδο προϊόντος. Η τεχνική εμπειρογνωμοσύνη του Garbson, η καινοτόμος σκέψη και η αφοσίωσή του στην παροχή λύσεων υψηλής ποιότητας με έχουν εντυπωσιάσει συνεχώς. Η ικανότητά του να αντιμετωπίζει σύνθετες προκλήσεις και να εργάζεται αποτελεσματικά σε ομάδα τον καθιστά ανεκτίμητο. Είμαι βέβαιος ότι ο Garbson θα διακριθεί σε οποιαδήποτε προσπάθεια επιδιώξει."
      },
      {
        name: "Gabriel Bodenmüller",
        role: "Software Developer | Python | Vue | JavaScript | Typescript | PostgreSQL | Computer engineer",
        text: "Είχα την ευχαρίστηση να παρακολουθήσω τη δουλειά του Garbson και μπορώ να πω με βεβαιότητα: είναι ένας εκπληκτικός επαγγελματίας στον κόσμο της ανάπτυξης front-end! Με οξυμένες δεξιότητες στο Vue, TypeScript, προηγμένο CSS και βελτιστοποίηση απόδοσης, δεν παραδίδει μόνο καθαρό και καλά δομημένο κώδικα, αλλά ενδιαφέρεται επίσης για την εμπειρία του χρήστη και τη χρηστικότητα του προϊόντος. Επιπλέον, η ικανότητά του να μαθαίνει γρήγορα και να προσαρμόζεται σε νέες τεχνολογίες είναι εντυπωσιακή. Αν ψάχνετε έναν ταλαντούχο, συνεργάσιμο και αφοσιωμένο προγραμματιστή front-end, ο Garbson είναι η σωστή επιλογή!"
      },
      {
        name: "Tiago Lopes",
        role: "Αναλυτής BI | Αναλυτής Δεδομένων | SQL | BigQuery | Power BI | Looker Studio",
        text: "Με μεγάλη ικανοποίηση συστήνω τον Garbson Souza για ευκαιρίες ως Frontend Developer. Είχα το προνόμιο να εργαστώ μαζί του στην KNN Idiomas, όπου επέδειξε συνεχώς τις τεχνικές του ικανότητες και τη δέσμευσή του για αποτελέσματα υψηλής ποιότητας. Ο Garbson είναι ένας ταλαντούχος επαγγελματίας, με γνώσεις σε τεχνολογίες όπως Vue.js, Quasar, Vuex/Pinia, Node.js, JavaScript, Nuxt.js, REST API, Vuetify και TypeScript. Η ικανότητά του να δημιουργεί σύγχρονες, διαισθητικές και αποτελεσματικές διεπαφές είναι αξιοσημείωτη, εκτός από την ικανότητά του να ενσωματώνει σύνθετα συστήματα με REST APIs. Κατά τη διάρκεια του χρόνου που εργαστήκαμε μαζί, ο Garbson ξεχώρισε για τη συνεργατική του προσέγγιση και την επίλυση προβλημάτων."
      },
      {
        name: "Anielli Martiniano Lemos",
        role: "Σχεδιάστρια στην KNN Idiomas Brasil",
        text: "Ως σχεδιάστρια, είναι ανακούφιση να έχεις κάποιον που καταλαβαίνει κάθε προσαρμογή στο κενό, κάθε γωνία του layout, και μετατρέπει τα πάντα σε κώδικα με πολλή φροντίδα και προσοχή στις λεπτομέρειες. Στο frontend, ο Garbson παραδίδει με πραγματική ποιότητα. Δεν πρόκειται μόνο για το να λειτουργεί — πρόκειται για το να το κάνει καλά, σκεπτόμενος την απόδοση, τη χρηστικότητα και εκείνη την εμπειρία που νιώθουμε περήφανοι να παραδώσουμε. Για να μη μιλήσω ότι, μέρα με τη μέρα, είναι συνεργάτης σε όλα: ανταλλάσσει ιδέες, βοηθάει, λύνει προβλήματα μαζί και κάνει την ατμόσφαιρα της ομάδας πολύ πιο ελαφριά. Το να εργάζεσαι μαζί του είναι εκείνος ο σπάνιος συνδυασμός καλής παράδοσης + ελαφρύς διαδικασίας — κάτι που κάνει όλη τη διαφορά στο αποτέλεσμα (και στον δρόμο προς αυτό). Είναι ο τύπος ανθρώπου που κάθε ομάδα αξίζει να έχει κοντά."
      }
    ]
  }
};