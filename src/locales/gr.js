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
    description: `
Frontend Προγραμματιστής με 3+ χρόνια δημιουργίας web εφαρμογών για διεθνείς εταιρείες σε 4 χώρες.

Στα 20 μου, εστιάζω σε τεχνικές δεξιότητες και ποιοτική παράδοση.

🌍 Διεθνές Ταξίδι:
🇬🇷 Ελλάδα (1+ χρόνος) - Διαχειριστικό panel για προϊόντα eBay | Nuxt.js + SSR
🇺🇸 Μαϊάμι (5 μήνες) - Startup με 2D graphics | Vue.js + Pixi.js 
🇵🇪 Περού (έργο) - Ιστοσελίδα ξενοδοχείου | Οργανικό networking κατά τη διάρκεια ταξιδιού
🇧🇷 Βραζιλία (τρέχον) - KNN Idiomas + Claro & Embratel | EdTech + Κρίσιμα τηλεπικοινωνιακά συστήματα

🚀 Βασικές Δεξιότητες:
- Vue.js Οικοσύστημα (Vue 3, Nuxt.js, Pinia) - Αναπτυσσόμενη εξειδίκευση
- Σύγχρονη ανάπτυξη JavaScript/TypeScript
- Εφαρμογές επιχειρηματικής κλίμακας (EdTech/Telecom/Φορολογικά συστήματα)
- Διαπολιτισμική απομακρυσμένη συνεργασία μέσω chat πλατφορμών
- Ενσωμάτωση legacy συστημάτων (Mainframe IBM + Σύγχρονο Frontend)

💼 Τρέχουσα Εστίαση:
Συνεισφορά σε κρίσιμα συστήματα φορολογικής συμμόρφωσης για μεγάλους βραζιλιάνους τηλεπικοινωνιακούς παρόχους (Claro/Embratel), ενώ επεκτείνω την frontend εξειδίκευσή μου και μαθαίνω προχωρημένα Vue.js patterns.

📱 Παράλληλα Έργα:
Δημιούργησα το δικό μου SaaS - ένα κοινωνικό δίκτυο για αναγνώστες βιβλίων για παρακολούθηση ανάγνωσης και δημιουργία φιλιών.

- Η δημιουργία προϊόντων διαφέρει από τη δημιουργία χαρακτηριστικών

🌱 Στόχοι 2025-2026:
Εξέλιξη προς Senior Frontend Developer ρόλο, εξειδίκευση σε προχωρημένες Vue.js έννοιες, βελτιστοποίηση απόδοσης. Αναζητώ ευκαιρίες να μάθω από έμπειρες διεθνείς ομάδες ενώ συνεισφέρω σε σημαντικά έργα.

Πάντα πρόθυμος να μάθω και να συνεργαστώ με άλλους προγραμματιστές! Απόδειξη ότι η ηλικία και τα γλωσσικά εμπόδια δεν καθορίζουν τις δυνατότητές σου - η δουλειά σου τις καθορίζει.
  `,
  },
  projects: [
    {
      title: "Atapera",
      description: "Κατάστημα πωλήσεων όπλων, ψαρέματος, κάμπινγκ και πολλά άλλα.",
      img: "atapera.jpg",
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
      title: "Clube da Luta CT",
      description: "Μια πλατφόρμα εκπαίδευσης μάχης κατασκευασμένη με σύγχρονες τεχνολογίες.",
      img: "CtClube.png",
      firebase: true,
      typescript: true,
      react: true,
      nextjs: true,
      github: "https://github.com/Garbson/grecieCT",
      link: "https://clubedaluta.pages.dev/",
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
      title: "Duolingo Clone",
      description: "Μια διαδραστική πλατφόρμα εκμάθησης γλωσσών εμπνευσμένη από το Duolingo.",
      img: "duolingo-clone.jpeg",
      vue: true,
      javascript: true,
      bootstrap: true,
      github: "https://github.com/Garbson/duolingo-clone",
      link: "https://duolingo-clone-6jg.pages.dev/exercise/1",
      metrics: [
        "Υλοποίηση 15+ διαδραστικών ασκήσεων",
        "Gamified σύστημα σειρών και βαθμολόγησης"
      ]
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
      title: "Trote UFAC",
      description: "Μια gamified ιστοσελίδα για διαδραστική πανεπιστημιακή εμπειρία μύησης.",
      img: "trote.jpg",
      tailwind: true,
      supabase: true,
      vue: true,
      Quasar: true,
      github: "https://github.com/Garbson/trote/tree/main",
      link: "https://trote.pages.dev/",
      metrics: [
        "50+ ενεργοί χρήστες",
        "Gamified σύστημα βαθμολόγησης"
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
      img: "pachacuteq.png",
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
      img: "portfolio.png",
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
    items: [
      {
        role: "Frontend Προγραμματιστής",
        company: "NFCOM (Grupo Easy)",
        location: "Ρίο Μπράνκο, Άκρε",
        period: "Ιούλ 2025 - Τρέχον",
        description: "Ανάπτυξη συστήματος φορολογικής ανάλυσης για το Grupo Easy. Εργασία με τεχνολογίες IBM mainframe και Natural Language. Ανάπτυξη λύσεων για επεξεργασία φορολογικών δεδομένων. Συνεισφορά σε εταιρικά έργα μεγάλης κλίμακας. Παροχή υπηρεσιών για Claro και Embratel.",
        current: true
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "KNN Idiomas",
        location: "Μπαλνεάριο Καμπορίου, SC",
        period: "Σεπ 2024 - Ιούν 2025",
        description: "Ανάπτυξη σύγχρονης εκπαιδευτικής πλατφόρμας χρησιμοποιώντας Vue.js και Nuxt.js. Υλοποίηση ανταποκρινόμενης και διαισθητικής διεπαφής για σύστημα μάθησης. Ενσωμάτωση με συστήματα LMS και βελτιστοποίηση εμπειρίας χρήστη."
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "Hellenic Technologies",
        location: "Αθήνα, Ελλάδα (Απομακρυσμένα)",
        period: "Ιαν 2024 - Φεβ 2025",
        description: "Ανάπτυξη frontend λύσεων για την ευρωπαϊκή αγορά. Συνεργασία σε διεθνή ομάδα χρησιμοποιώντας agile μεθοδολογίες. Υλοποίηση επαναχρησιμοποιήσιμων συστατικών στο Vue.js."
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "NeuroAEye",
        location: "Μαϊάμι, Φλόριντα (Απομακρυσμένα)",
        period: "Μαρ 2024 - Οκτ 2024",
        description: "Ανάπτυξη διεπαφής για εφαρμογή τεχνητής νοημοσύνης. Ενσωμάτωση προηγμένων οπτικών συστατικών χρησιμοποιώντας Pixi.js. Εργασία με ιατρικά δεδομένα και διαδραστικές οπτικοποιήσεις."
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "Hostal Pachacuteq Inn",
        location: "Κούσκο, Περού (Απομακρυσμένα)",
        period: "Ιαν 2024",
        description: "Ανάπτυξη συστήματος κρατήσεων ξενοδοχείου. Υλοποίηση ανταποκρινόμενης πολυγλωσσικής διεπαφής. Ενσωμάτωση με APIs πληρωμών και κρατήσεων."
      },
      {
        role: "Frontend Προγραμματιστής",
        company: "AmazonNanoForest",
        location: "Ρίο Μπράνκο, Άκρε (Απομακρυσμένα)",
        period: "Νοε 2023",
        description: "Ανάπτυξη εταιρικής ιστοσελίδας για εταιρεία φυσικών προϊόντων. Δημιουργία ανταποκρινόμενης διεπαφής για e-commerce προϊόντων του Αμαζονίου. Υλοποίηση διαδραστικού καταλόγου και συστήματος παρουσίασης προϊόντων."
      }
    ]
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