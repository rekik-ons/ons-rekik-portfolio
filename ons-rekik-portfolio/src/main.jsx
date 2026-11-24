import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  UserRound, GraduationCap, BriefcaseBusiness, Code2, FolderGit2, Languages,
  Award, Mail, Sun, Moon, ArrowDown, ArrowUpRight, Github, Linkedin,
  MapPin, Sparkles, Send, ExternalLink, Menu, X, ChevronRight,
  Database, BrainCircuit, Smartphone, Terminal, Check, CodeXml, MessageCircle,
  Cloud, GitBranch, Stethoscope, BarChart3, Eye
} from 'lucide-react';

import './style.css';

const PROFILE = {
  name: 'Ons Rekik',
  linkedin: 'https://www.linkedin.com/in/rekik-ons',
  github: 'https://github.com/rekik-ons',
  email: 'onsrekik9@gmail.com',
  phone: '+216 50 663 039',
  cvFr: '/cv_ons_rekik_fr.pdf', // Ajouter les CV dans le dossier public
  cvEn: '/cv_ons_rekik_en.pdf'
};

// Ouvre Gmail avec un nouveau message adressé à toi
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`;

// Formulaire : crée un formulaire sur formspree.io et colle ton URL ici
const FORMSPREE_URL = 'https://formspree.io/f/xppdoaee';

// Photos : tu peux les remplacer par '/moon.jpg' et '/sun.jpg' (dossier public)
const MOON_IMG = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg';
const SUN_IMG = 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~large.jpg';

/* ===================== TRADUCTIONS (FR / EN) ===================== */
const translations = {
  fr: {
    nav: ['À propos','Formation','Expérience','Compétences','Projets','Langues','Certifications','Contact'],
    translateBtn: 'EN', translateTitle: 'Switch the website to English', themeTitle: 'Changer de thème',
    pageTitle: 'Ons Rekik — Portfolio personnel',
    topbar: 'PORTFOLIO PERSONNEL', topAvail: 'OUVERTE AUX OPPORTUNITÉS', menuLabel: 'MENU',
    explore: 'Explore mon parcours', cv: 'Consulter CV', contact: 'Me contacter',
    available: 'Disponible', open: 'Ouverte aux opportunités', remote: 'Remote / Présentiel', location: 'Tunis, Tunisie', looking: 'À la recherche de', pfe: 'Stage PFE', freelance: 'Freelance', contribution: 'Contribution à des projets',
    about: 'À propos', hello: 'Bonjour, je suis', role: 'Étudiante en génie logiciel', roleExtra: 'Full-Stack, mobile & IA',
    intro: 'Étudiante en Génie Logiciel et Systèmes d’Information, orientée développement Full-Stack, mobile et intelligence artificielle. Ouverte aux opportunités pour valoriser mes compétences en développement d’applications, conception d’API REST et solutions intelligentes, et contribuer à des projets concrets.',
    services: 'Centres d’intérêt', interests: 'Centres d’intérêt', service1: 'IA & Data Science', service2: 'Business Intelligence', service3: 'Dév. Web Full-Stack', service4: 'Dév. mobile', service5: 'Data Analytics',
    strengths: 'Points forts', strength1: 'Développement Full-Stack (Angular, FastAPI, Spring Boot, Java EE)', strength2: 'Business Intelligence & Data Warehousing', strength3: 'Bases de données relationnelles & Oracle', strength4: 'Méthodes Agile Scrum & gestion Git',
    dayNight: 'JOUR / NUIT', moonMode: 'MODE CLAIR DE LUNE', sunMode: 'MODE SOLEIL', moonCap: 'Un peu de lumière dans le noir', sunCap: 'Un esprit brillant, un jour lumineux', scroll: 'DÉFILER POUR DÉCOUVRIR',
    journey: 'PARCOURS',
    formation: 'Formation', subEducation: 'LE PARCOURS D’APPRENTISSAGE',
    bac: 'Baccalauréat Informatique', bacdate: 'Juin 2023', bacDesc: '',
    uni: 'Licence en Génie Logiciel et Systèmes d’Information', unidate: 'Sept. 2024 — Présent', school: 'ISTIC · Borj Cédria, Tunis',
    uniDesc: 'Développement logiciel, bases de données, BI & data. Projets Agile Scrum · Notions de tests logiciels (ISTQB Foundation Level).',
    tagProgress: 'EN COURS', tagFoundation: 'FONDATIONS', codeTitle: 'un aperçu de mon univers', compiled: 'COMPILÉ AVEC CURIOSITÉ',
    experience: 'Expérience professionnelle', subExperience: 'ACQUÉRIR UNE EXPÉRIENCE RÉELLE', expTag: 'STAGE · 1 MOIS', internship: 'Développeuse Full-Stack & IA', company: 'Taysir Microfinance', expdate: 'Juillet — Août 2026',
    expdesc: 'Développement d’un assistant conversationnel intelligent dédié à la qualification des prospects.',
    tasks: ['Conception du backend avec Python, FastAPI, SQLAlchemy et SQLite','Mise en place du parcours conversationnel, du scoring et des règles de qualification et d’éligibilité','Développement des API REST et gestion des prospects et des conversations','Développement et amélioration de l’interface utilisateur avec React','Réalisation de tests fonctionnels avec Swagger et Postman'],
    demo: 'Voir sur GitHub', stats: ['Compétences','Projets','Dépôts GitHub','Certification'], curiosity: 'La curiosité est mon moteur',
    universe: 'MON UNIVERS', liveCounters: 'COMPTEURS EN DIRECT', statNight: 'EXPLORER L’INCONNU', statDay: 'CONTINUER À DÉCOUVRIR',
    skills: 'Compétences', tree: 'Arborescence technique',
    development: 'Développement', progLang: 'Langages', fullstack: 'Développement web', mobile: 'Développement mobile',
    ai: 'IA & Data', aiTech: 'Intelligence artificielle', dataBi: 'Data & BI',
    mlDl: 'ML & Deep Learning', vision: 'Vision par ordinateur', nlpLlm: 'NLP & LLM',
    databases: 'Bases de données', dbsys: 'Systèmes de bases de données',
    cloud: 'Cloud', cloudVirt: 'Cloud & virtualisation', methods: 'Méthodes', methodsList: 'Méthodes de travail',
    tools: 'Technologies & outils', toolsDesc: 'Les outils que j’utilise pour construire, explorer et créer.', toolkit: 'BOÎTE À OUTILS / 02', alwaysLearning: 'TOUJOURS EN APPRENTISSAGE', showLess: 'Réduire', more: 'autres',
    projects: 'Projets académiques & personnels', subProjects: 'TRAVAUX SÉLECTIONNÉS / 2024 — 2026', all: 'Tous', academic: 'Académique', professional: 'Professionnel', personal: 'Personnel', repo: 'Voir sur GitHub', projectWord: 'PROJET', team: 'En équipe', solo: 'Individuel',
    pr1: 'Analyse cinématique des mouvements humains et sécurisation des zones restreintes par Computer Vision', pr1d: 'Système intelligent de surveillance vidéo basé sur la Computer Vision et le Machine Learning : analyse des mouvements humains et détection des comportements anormaux dans les zones restreintes, tout en préservant la vie privée grâce à l’analyse des Human Pose Landmarks plutôt qu’à la reconnaissance faciale.', pr1c: 'VISION PAR ORDINATEUR',
    pr2: 'Assistant conversationnel intelligent — Taysir Microfinance', pr2d: 'Assistant de qualification des prospects : parcours conversationnel, scoring, règles de qualification et d’éligibilité, API REST et interface React.', pr2c: 'IA CONVERSATIONNELLE',
    pr3: 'Portfolio personnel', pr3d: 'Conception et développement de ce portfolio interactif avec React.', pr3c: 'DÉVELOPPEMENT CRÉATIF',
    pr4: 'Sa7tiPlus — Application web de gestion médicale', pr4d: 'Deux versions : Angular/FastAPI (API REST, CRUD) et Java EE (architecture MVC, Servlets, JSP, EJB, JPA, Oracle DB, Bootstrap).', pr4c: 'DÉVELOPPEMENT FULL-STACK',
    pr5: 'Business Intelligence & Data Warehouse — Analyse des ventes', pr5d: 'Data Mart en schéma étoile, processus ETL avec Pentaho, rapports OLAP et tableau de bord Power BI.', pr5c: 'BUSINESS INTELLIGENCE',
    languages: 'Langues', subLanguages: 'COMMUNIQUER SANS FRONTIÈRES', french: 'Français', arabic: 'Arabe', english: 'Anglais', german: 'Allemand', native: 'Langue maternelle', veryGood: 'Très bon niveau', good: 'Bon niveau', intermediate: 'Intermédiaire', viewLangCert: 'Voir le certificat',
    certificates: 'Certifications', subCerts: 'L’APPRENTISSAGE NE S’ARRÊTE JAMAIS', certEmpty: 'Clique sur une certification pour ouvrir le certificat et vérifier son authenticité.', viewCert: 'Voir la certification',
    send: 'Envoyer un message', subContact: 'ENGAGEONS LA CONVERSATION', contactTitle: 'Et maintenant, quelle est la prochaine étape ?', contactText: 'Un stage PFE, un projet intéressant, une discussion tech ? J’aimerais beaucoup échanger des idées avec toi.',
    reason1: 'Stage PFE', reason2: 'Projet intéressant', reason3: 'Discussions tech', reason4: 'Échangeons nos idées',
    name: 'Nom', email: 'Email', subject: 'Objet', message: 'Message', phName: 'Ton nom', phSubject: 'Comment pouvons-nous collaborer ?', phMessage: 'Écris ton message ici...',
    sendBtn: 'Envoyer le message', sending: 'Envoi...', formIdle: 'Ton message sera envoyé directement.', formSent: 'Message envoyé, merci !', formError: 'Erreur, réessaie ou écris-moi par email.',
    donutTitle: 'Langages les plus utilisés', donutSub: 'SELON MES DÉPÔTS GITHUB', donutEmpty: 'Aucune donnée disponible.', repos: 'dépôts',
    footer: 'Portfolio personnel', made: 'Conçu avec élégance & curiosité', madeWith: 'Fait avec curiosité',
  },
  en: {
    nav: ['About','Education','Experience','Skills','Projects','Languages','Certifications','Contact'],
    translateBtn: 'FR', translateTitle: 'Passer le site en français', themeTitle: 'Toggle theme',
    pageTitle: 'Ons Rekik — Personal Portfolio',
    topbar: 'PERSONAL PORTFOLIO', topAvail: 'OPEN FOR OPPORTUNITIES', menuLabel: 'MENU',
    explore: 'Explore my journey', cv: 'View CV', contact: 'Contact me',
    available: 'Available', open: 'Open for opportunities', remote: 'Remote / On-site', location: 'Tunis, Tunisia', looking: 'Looking for', pfe: 'PFE internship', freelance: 'Freelance', contribution: 'Project contribution',
    about: 'About me', hello: "Hi, I'm", role: 'Software Engineering Student', roleExtra: 'Full-Stack, mobile & AI',
    intro: 'Software Engineering and Information Systems student focused on Full-Stack, mobile and artificial intelligence development. Open for opportunities to put my skills in application development, REST API design and intelligent solutions to work on real projects.',
    services: 'Interests', interests: 'Interests', service1: 'AI & Data Science', service2: 'Business Intelligence', service3: 'Full-Stack Web Dev', service4: 'Mobile Dev', service5: 'Data Analytics',
    strengths: 'Strengths', strength1: 'Full-Stack development (Angular, FastAPI, Spring Boot, Java EE)', strength2: 'Business Intelligence & Data Warehousing', strength3: 'Relational databases & Oracle', strength4: 'Agile Scrum methods & Git workflow',
    dayNight: 'DAY / NIGHT', moonMode: 'MOONLIGHT MODE', sunMode: 'SUNSHINE MODE', moonCap: 'A little light in the dark', sunCap: 'A bright mind, a bright day', scroll: 'SCROLL TO DISCOVER',
    journey: 'JOURNEY',
    formation: 'Education', subEducation: 'THE LEARNING PATH',
    bac: 'High School Diploma in Computer Science', bacdate: 'June 2023', bacDesc: '',
    uni: 'Bachelor’s Degree in Software Engineering & Information Systems', unidate: 'Sept. 2024 — Present', school: 'ISTIC · Borj Cédria, Tunis',
    uniDesc: 'Software development, databases, BI & data. Agile Scrum projects · Software testing fundamentals (ISTQB Foundation Level).',
    tagProgress: 'IN PROGRESS', tagFoundation: 'FOUNDATION', codeTitle: 'a glimpse into my world', compiled: 'COMPILED WITH CURIOSITY',
    experience: 'Professional experience', subExperience: 'BUILDING REAL-WORLD EXPERIENCE', expTag: 'INTERNSHIP · 1 MONTH', internship: 'Full-Stack & AI Developer', company: 'Taysir Microfinance', expdate: 'July — August 2026',
    expdesc: 'Developed an intelligent conversational assistant dedicated to prospect qualification.',
    tasks: ['Backend design with Python, FastAPI, SQLAlchemy and SQLite','Built the conversational flow, scoring, and qualification and eligibility rules','Developed REST APIs and managed prospects and conversations','Developed and improved the React user interface','Functional testing with Swagger and Postman'],
    demo: 'View on GitHub', stats: ['Skills','Projects','GitHub repos','Certification'], curiosity: 'Curiosity is my driving force',
    universe: 'MY UNIVERSE', liveCounters: 'LIVE COUNTERS', statNight: 'EXPLORE THE UNKNOWN', statDay: 'KEEP DISCOVERING',
    skills: 'Skills', tree: 'Technical skill tree',
    development: 'Development', progLang: 'Programming languages', fullstack: 'Web development', mobile: 'Mobile development',
    ai: 'AI & Data', aiTech: 'Artificial intelligence', dataBi: 'Data & BI',
    mlDl: 'ML & Deep Learning', vision: 'Computer Vision', nlpLlm: 'NLP & LLMs',
    databases: 'Databases', dbsys: 'Database Systems',
    cloud: 'Cloud', cloudVirt: 'Cloud & virtualization', methods: 'Methods', methodsList: 'Working methods',
    tools: 'Technologies & tools', toolsDesc: 'Tools I use to build, explore and create.', toolkit: 'TOOLKIT / 02', alwaysLearning: 'ALWAYS LEARNING', showLess: 'Show less', more: 'more',
    projects: 'Academic & personal projects', subProjects: 'SELECTED WORK / 2024 — 2026', all: 'All', academic: 'Academic', professional: 'Professional', personal: 'Personal', repo: 'View on GitHub', projectWord: 'PROJECT', team: 'Team', solo: 'Solo',
    pr1: 'Kinematic Analysis of Human Movement and Restricted-Area Security with Computer Vision', pr1d: 'Intelligent video surveillance system based on Computer Vision and Machine Learning: analyzes human movement and detects abnormal behavior in restricted areas, while preserving privacy by analyzing Human Pose Landmarks instead of using facial recognition.', pr1c: 'COMPUTER VISION',
    pr2: 'Intelligent Conversational Assistant — Taysir Microfinance', pr2d: 'Prospect qualification assistant: conversational flow, scoring, qualification and eligibility rules, REST APIs and React interface.', pr2c: 'CONVERSATIONAL AI',
    pr3: 'Personal Portfolio', pr3d: 'Design and development of this interactive portfolio using React.', pr3c: 'CREATIVE DEVELOPMENT',
    pr4: 'Sa7tiPlus — Medical Management Web Application', pr4d: 'Two implementations: Angular/FastAPI (REST API, CRUD) and Java EE (MVC architecture, Servlets, JSP, EJB, JPA, Oracle DB, Bootstrap).', pr4c: 'FULL-STACK DEVELOPMENT',
    pr5: 'Business Intelligence & Data Warehouse — Sales Analysis', pr5d: 'Star-schema Data Mart, ETL process with Pentaho, OLAP reports and Power BI dashboard.', pr5c: 'BUSINESS INTELLIGENCE',
    languages: 'Languages', subLanguages: 'COMMUNICATION WITHOUT BORDERS', french: 'French', arabic: 'Arabic', english: 'English', german: 'German', native: 'Native', veryGood: 'Very good', good: 'Good', intermediate: 'Intermediate', viewLangCert: 'View certificate',
    certificates: 'Certifications', subCerts: 'LEARNING NEVER STOPS', certEmpty: 'Click a certification to open the certificate and verify its authenticity.', viewCert: 'View certificate',
    send: 'Send me a message', subContact: "LET'S START A CONVERSATION", contactTitle: "What's the next step?", contactText: "A PFE internship, an interesting project, a tech talk? I'd love to hear ideas from you.",
    reason1: 'PFE internship', reason2: 'Interesting project', reason3: 'Tech talks', reason4: 'Let’s exchange ideas',
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', phName: 'Your name', phSubject: 'How can we collaborate?', phMessage: 'Write your message here...',
    sendBtn: 'Send message', sending: 'Sending...', formIdle: 'Your message will be sent directly.', formSent: 'Message sent, thank you!', formError: 'Error, please try again or email me.',
    donutTitle: 'Most used languages', donutSub: 'BASED ON MY GITHUB REPOS', donutEmpty: 'No data available.', repos: 'repos',
    footer: 'Personal Portfolio', made: 'Built with elegance & curiosity', madeWith: 'Made with curiosity',
  }
};

const skillGroups = [
  { key: 'development', icon: Code2, children: [
    { key: 'progLang', skills: ['Python','Java','JavaScript','SQL','PL/SQL','HTML5','CSS3'] },
    { key: 'fullstack', skills: ['React','Angular','FastAPI','Spring Boot','Java EE','Bootstrap','REST APIs'] },
    { key: 'mobile', skills: ['Flutter','React Native'] }
  ]},
  { key: 'ai', icon: BrainCircuit, children: [
    { key: 'mlDl', skills: ['Machine Learning','Neural Networks','TensorFlow/Keras','PyTorch'] },
    { key: 'vision', skills: ['Computer Vision','OpenCV','MediaPipe','Human Pose Estimation','Pose Landmarks','Anomaly Detection','Image Processing'] },
    { key: 'nlpLlm', skills: ['NLP','LLMs','Agents IA & Chatbots','Rasa','Ollama','Qwen3'] },
    { key: 'dataBi', skills: ['Power BI','Pentaho ETL','OLAP','Data Warehouse','Data Visualization','Pandas','NumPy','Matplotlib'] }
  ]},
  { key: 'databases', icon: Database, children: [
    { key: 'dbsys', skills: ['MySQL','Oracle','SQLite','SQLAlchemy'] }
  ]},
  { key: 'cloud', icon: Cloud, children: [
    { key: 'cloudVirt', skills: ['Cloud Computing','Virtualisation','Docker'] }
  ]},
  { key: 'methods', icon: GitBranch, children: [
    { key: 'methodsList', skills: ['Agile Scrum'] }
  ]}
];

// Traduction des compétences génériques (les noms de technologies restent identiques)
const skillFr = { 'Machine Learning': 'Apprentissage automatique', 'Data Analysis': 'Analyse de données', 'Image Processing': 'Traitement d’images', 'Human Pose Estimation': 'Estimation de pose humaine', 'Neural Networks': 'Réseaux de neurones', 'Pose Landmarks': 'Points de repère corporels', 'Anomaly Detection': 'Détection d’anomalies', 'Data Visualization': 'Visualisation de données' };
const skillEn = { 'Virtualisation': 'Virtualization', 'Agents IA & Chatbots': 'AI Agents & Chatbots' };
const toolsList = ['Git','GitHub','Linux','VS Code','Eclipse','Google Colab','OpenCV','MediaPipe','XAMPP','Swagger','Postman','Docker'];
const toolIcons = ['⌘','⌁','▰','◫','◇','◉','◈','⌖','⌬','▣','◬','◎'];

// Nombre de compétences uniques (calculé automatiquement)
const SKILLS_COUNT = new Set(skillGroups.flatMap(g => g.children.flatMap(c => c.skills))).size;

// sort = 'AAAA-MM' (sert uniquement au tri, du plus récent au plus ancien)
const projects = [
  {
    id: 1, sort: '2026-10', category: 'academic',
    date: { fr: 'Oct. 2026 — présent', en: 'Oct. 2026 — present' },
    tkey: 'pr1', team: true, icon: Eye,
    repoUrl: 'https://github.com/rekik-ons/Analyse-cinematique-flux-humains',
    repoApi: 'https://api.github.com/repos/rekik-ons/Analyse-cinematique-flux-humains',
    tech: ['Python','OpenCV','MediaPipe','NumPy','Pandas','Matplotlib','TensorFlow/Keras','PyTorch','Google Colab']
  },
  {
    id: 2, sort: '2026-08', category: 'professional',
    date: { fr: 'Juil. — Août 2026', en: 'Jul. — Aug. 2026' },
    tkey: 'pr2', icon: MessageCircle,
    repoUrl: 'https://github.com/rekik-ons/Assistant-conversationnel-intelligent',
    repoApi: 'https://api.github.com/repos/rekik-ons/Assistant-conversationnel-intelligent',
    tech: ['Python','FastAPI','React','Rasa','Qwen3','SQLAlchemy','SQLite']
  },
  {
    id: 3, sort: '2026-07', category: 'personal', date: '2026',
    tkey: 'pr3', icon: CodeXml,
    repoUrl: 'https://github.com/rekik-ons/ons-rekik-portfolio',
    repoApi: 'https://api.github.com/repos/rekik-ons/ons-rekik-portfolio',
    tech: ['React','Vite','CSS','JavaScript']
  },
  {
    id: 4, sort: '2026-05', category: 'academic',
    date: { fr: 'Fév. — Mai 2026', en: 'Feb. — May 2026' },
    tkey: 'pr4', team: true, icon: Stethoscope,
    repoUrl: 'https://github.com/rekik-ons/Sa7tiPlus',
    repoApi: 'https://api.github.com/repos/rekik-ons/Sa7tiPlus',
    tech: ['Angular','FastAPI','Java EE','JPA','Oracle','Bootstrap']
  },
  {
    id: 5, sort: '2026-04', category: 'academic',
    date: { fr: 'Avr. 2026', en: 'Apr. 2026' },
    tkey: 'pr5', icon: BarChart3,
    repoUrl: null,
    repoApi: null,
    tech: ['Pentaho Kettle', 'Power BI', 'OLAP', 'MySQL']
  }
];

// Langues + certificat de niveau (mets cert:null / certUrl:null s'il n'y en a pas)
const languagesData = [
  { key: 'arabic',  level: 'native',   width: '100%', code: 'AR', cert: null, certUrl: null },
  { key: 'french',  level: 'veryGood', width: '92%',  code: 'FR', cert: null, certUrl: null },
  { key: 'english', level: 'good',     width: '68%',  code: 'EN', cert: null, certUrl: null }
];

const certifications = [
  { id: 'cisco-ai', title: { fr: 'AI Fundamentals : les bases pour comprendre l’IA', en: 'AI Fundamentals: Foundations for Understanding AI' }, org: 'Cisco Networking Academy', date: { fr: 'Août 2026', en: 'August 2026' }, sort: '2026-08', url: '/AI_Fundamentals-_Foundations_for_Understanding_AI_certificate_ons-rekik4182-istic-ucar-tn_330291c4-14b1-4449-9cb2-83d6f0b3ac37.pdf' },
  { id: 'scrum', title: { fr: 'Management de projet : Option Agile Scrum', en: 'Project Management: Agile Scrum Option' }, org: '4C-ISTIC', date: { fr: 'Février 2026', en: 'February 2026' }, sort: '2026-02', url: '/certificat_management_de_projet_agile_scrum.pdf' }
];

const educationData = [
  { sort: '2024-09', dateKey: 'unidate', titleKey: 'uni', subKey: 'school', tagKey: 'tagProgress', current: true },
  { sort: '2023-06', dateKey: 'bacdate', titleKey: 'bac', subKey: 'bacSub', tagKey: 'tagFoundation', current: false }
];
const byDateDesc = (a, b) => b.sort.localeCompare(a.sort);
const pad = n => String(Math.max(n, 0)).padStart(2, '0');

function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('fr');
  const [active, setActive] = useState('about');
  const [mobileNav, setMobileNav] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [filter, setFilter] = useState('all');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [repoCount, setRepoCount] = useState(0);
  const [repoLangs, setRepoLangs] = useState([]);
  const [repoLoading, setRepoLoading] = useState(true);
  const [repoStatus, setRepoStatus] = useState({});

  const t = translations[lang];
  const L = v => (v && typeof v === 'object' ? v[lang] : v);
  const skillLabel = s => (lang === 'fr' ? skillFr[s] : skillEn[s]) || s;
  const ids = ['about','education','experience','skills','projects','languages','certifications','contact'];
  const visibleProjects = useMemo(() => projects.filter(p => filter === 'all' || p.category === filter).sort(byDateDesc), [filter]);
  const sortedEducation = [...educationData].sort(byDateDesc);
  const sortedCerts = [...certifications].sort(byDateDesc);

  // Récupère le nombre de dépôts + les langages les plus utilisés
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/rekik-ons");
        if (!response.ok) throw new Error("Impossible de récupérer les dépôts");
        const data = await response.json();
        setRepoCount(data.public_repos);

        // Récupère TOUS les dépôts publics (pagination) puis additionne les langages de chacun
        let allRepos = [];
        for (let page = 1; page <= 10; page++) {
          const reposRes = await fetch(`https://api.github.com/users/rekik-ons/repos?per_page=100&page=${page}`);
          if (!reposRes.ok) break;
          const chunk = await reposRes.json();
          allRepos = allRepos.concat(chunk);
          if (chunk.length < 100) break;
        }

        const langResults = await Promise.all(
          allRepos.map(r =>
            fetch(r.languages_url).then(res => (res.ok ? res.json() : {})).catch(() => ({}))
          )
        );

        const totals = {};
        langResults.forEach(langs => {
          Object.entries(langs).forEach(([name, bytes]) => { totals[name] = (totals[name] || 0) + bytes; });
        });

        setRepoLangs(
          Object.entries(totals)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
        );
      } catch (error) {
        console.error("GitHub API error:", error);
      } finally {
        setRepoLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  // Vérifie quels dépôts GitHub sont réellement accessibles publiquement.
  useEffect(() => {
    let isMounted = true;

    const checkProjectRepositories = async () => {
      const results = await Promise.all(
        projects.map(async project => {
          if (!project.repoApi) return [project.id, false];

          try {
            const response = await fetch(project.repoApi);
            return [project.id, response.ok];
          } catch (error) {
            console.error(`GitHub repository check failed for project ${project.id}:`, error);
            return [project.id, false];
          }
        })
      );

      if (isMounted) {
        setRepoStatus(Object.fromEntries(results));
      }
    };

    checkProjectRepositories();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
  }, [theme, lang, t.pageTitle]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const sections = document.querySelectorAll('main section[id]');
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach(section => navObserver.observe(section));
    return () => { observer.disconnect(); navObserver.disconnect(); };
  }, [lang, filter]);

  const toggleGroup = name => setExpanded(prev => ({ ...prev, [name]: !prev[name] }));

  const submitMessage = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message })
      });
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileNav(false); };
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr');

  // Appelé comme une fonction ({controls()}) pour éviter le remontage à chaque rendu
  const controls = () => <>
    <button className="icon-control" title={t.themeTitle} onClick={toggleTheme}>{theme==='dark'?<Sun size={16}/>:<Moon size={16}/>}</button>
    <button className="icon-control translate-btn" title={t.translateTitle} onClick={toggleLang}><Languages size={15}/><span>{t.translateBtn}</span></button>
  </>;

  const navIcons = [UserRound,GraduationCap,BriefcaseBusiness,Code2,FolderGit2,Languages,Award,Mail];

  return <div className="app-shell">
    <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
      <a className="brand" href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}><span className="brand-mark">O</span><span>ONS REKIK<span className="brand-sub">PORTFOLIO / 2026</span></span></a>
      <div className="side-label">{t.menuLabel} / 0{ids.indexOf(active)+1}</div>
      <nav className="side-nav">{ids.map((id, i) => {
        const Icon = navIcons[i];
        return <button key={id} className={`nav-link ${active===id?'active':''}`} onClick={() => scrollTo(id)}><Icon size={16}/><span>{t.nav[i]}</span><small>0{i+1}</small></button>;
      })}</nav>
      <div className="sidebar-bottom">
        <div className="sidebar-social"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={GMAIL_LINK} target="_blank" rel="noreferrer" aria-label="Email"><Mail size={17}/></a></div>
        <p className="side-copy">© 2026 · {t.madeWith}</p>
      </div>
      <button className="mobile-close" onClick={() => setMobileNav(false)}><X/></button>
    </aside>

    <main className="main-content">
      <header className="mobile-top"><a className="brand" href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}><span className="brand-mark">O</span><span>ONS REKIK</span></a><div className="header-controls">{controls()}<button className="menu-button" onClick={() => setMobileNav(true)}><Menu/></button></div></header>
      <div className="topline"><span>{t.topbar}</span><span className="topline-right"><i className="live-dot"/> {t.topAvail}</span><div className="header-controls desktop-controls">{controls()}</div></div>

      <section id="about" className="hero-section section-pad">
        <div className="hero-topline"><span className="eyebrow">01 — {t.about}</span></div>
        <div className="journey-row"><button onClick={() => scrollTo('education')}>{t.explore} <ArrowDown size={15}/></button><div className="journey-links"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={lang === 'fr' ? PROFILE.cvFr : PROFILE.cvEn} target="_blank" rel="noreferrer">{t.cv} <ArrowUpRight size={13}/></a><a href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact')}}>{t.contact} <ArrowUpRight size={13}/></a></div></div>
        <div className="hero-grid">
          <div className="availability-card reveal">
            <div className="availability-head"><span className="pulse-dot"/><span>{t.available}</span><span className="availability-live"></span></div>
            <h3>{t.open}</h3><p>{t.remote}</p><p className="location"><MapPin size={14}/>{t.location}</p>
            <div className="looking-for"><span>{t.looking}</span><div><b>{t.pfe}</b><b>{t.freelance}</b><b>{t.contribution}</b></div></div>
          </div>
          <div className="hero-intro reveal">
            <span className="eyebrow">{t.hello}</span><h1>Ons <span>Rekik</span><sup>✦</sup></h1><p className="hero-role">{t.role} <span>·</span> {t.roleExtra}</p><p className="hero-description">{t.intro}</p>
            <div className="service-block"><span className="mono muted">{t.services}</span><div className="service-chips"><span><BrainCircuit size={14}/>{t.service1}</span><span><BarChart3 size={14}/>{t.service2}</span><span><Code2 size={14}/>{t.service3}</span><span><Smartphone size={14}/>{t.service4}</span><span><Database size={14}/>{t.service5}</span></div></div>
            <a className="text-link" href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact')}}>{t.contact} <ArrowUpRight size={16}/></a>
          </div>
          <div className={`celestial-card reveal ${theme}`}>
            <div className="celestial-meta"><span>{t.dayNight}</span></div>
            <div className="sky-scene">
              <div className="starfield"><i/><i/><i/><i/><i/><i/><i/></div>
              {theme==='dark'
                ? <div className="moon"><img src={MOON_IMG} alt="Full Moon" loading="lazy"/><span/></div>
                : <div className="sun-orb"><img src={SUN_IMG} alt="The Sun seen by NASA's Solar Dynamics Observatory" loading="lazy"/></div>}
              <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-planet"/>
            </div>
            <div className="celestial-caption"><strong>{theme==='dark'?t.moonMode:t.sunMode}</strong><span>{theme==='dark'?t.moonCap:t.sunCap}</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>{t.scroll} <ArrowDown size={13}/></span><span>01 — 08</span></div>
      </section>

      <section id="education" className="content-section section-pad">
        <SectionHeading number="02" title={t.formation} subtitle={t.subEducation} word={t.journey} />
        <div className="education-layout">
          <div className="timeline">
            {sortedEducation.map(e =>
              <div className="timeline-item reveal" key={e.titleKey}>
                <div className={`timeline-node ${e.current ? 'current' : ''}`}/>
                <article className={`education-card ${e.current ? 'current-card' : ''}`}>
                  <span className="card-date">{t[e.dateKey]}</span>
                  <h3>{t[e.titleKey]}</h3>
                  {t[e.subKey] && <p>{t[e.subKey]}</p>}
                  <span className="card-index">{t[e.tagKey]}</span>
                </article>
              </div>
            )}
          </div>
          <CodeWindow title="ons-rekik-portfolio.ts" subtitle={t.codeTitle} bottom={t.compiled}/>
        </div>
      </section>

      <section id="experience" className="content-section section-pad">
        <SectionHeading number="03" title={t.experience} subtitle={t.subExperience} word={t.journey} />
        <div className="experience-layout">
          <article className="experience-card reveal"><div className="experience-top"><span className="tag tag-green">{t.expTag}</span><span className="mono muted">{t.expdate}</span></div><div className="experience-title"><div><h3>{t.internship}</h3><h4>{t.company}</h4></div><span className="company-icon"><BriefcaseBusiness/></span></div><p className="experience-desc">{t.expdesc}</p><ul className="task-list">{t.tasks.map(task=><li key={task}><Check size={14}/>{task}</li>)}</ul><div className="tech-list">{['React','FastAPI','Rasa','Qwen3','SQLite','Python'].map(x=><span key={x}>{x}</span>)}</div><a className="text-link" href="https://github.com/rekik-ons/Assistant-conversationnel-intelligent" target="_blank" rel="noreferrer">{t.demo} <ArrowUpRight size={15}/></a>
          </article>

          <SolarStats
            theme={theme}
            t={t}
            skillsCount={SKILLS_COUNT}
            projectsCount={projects.length}
            repoCount={repoCount}
            certsCount={certifications.length}
          />
        </div>
        <div className="curiosity-line"><span className="infinity">∞</span><span>{t.curiosity}</span><span className="line-fill"/></div>
      </section>

      <section id="skills" className="content-section section-pad">
        <SectionHeading number="04" title={t.skills} subtitle={t.tree.toUpperCase()} word={t.journey} />
        <div className="skills-layout"><div className="skill-tree"><div className="tree-root"><Code2 size={17}/>{t.skills}</div>{skillGroups.map(group=>{const Icon=group.icon;return <div className="tree-group reveal" key={group.key}><div className="tree-branch"><span className="tree-stem"/><button className="tree-folder" onClick={()=>toggleGroup(group.key)}><Icon size={16}/><span>{t[group.key]}</span><ChevronRight className={expanded[group.key]?'rotated':''} size={15}/></button></div>{!expanded[group.key]&&group.children.map(child=><div className="tree-child" key={child.key}><span className="child-line"/><div className="child-content"><span className="child-name">{t[child.key]}</span><div className="skill-pills">{child.skills.slice(0, expanded[child.key]?99:5).map(skill=><span className="skill-pill" key={skill}>{skillLabel(skill)}</span>)}{child.skills.length>5&&<button className="more-pill" onClick={()=>toggleGroup(child.key)}>{expanded[child.key]?t.showLess:`+${child.skills.length-5} ${t.more}`}</button>}</div></div></div>)}</div>})}</div>
          <div className="tools-panel reveal"><div className="panel-head"><span className="eyebrow">{t.toolkit}</span><Terminal size={18}/></div><h3>{t.tools}</h3><p>{t.toolsDesc}</p><div className="tool-grid">{toolsList.map((tool,i)=><span key={tool} style={{'--delay':`${i*55}ms`}}><i>{toolIcons[i]}</i>{tool}</span>)}</div>
            <LanguagesDonut data={repoLangs} t={t} />
            <div className="tools-footer"><span>{t.alwaysLearning}</span><Sparkles size={15}/></div></div></div>
      </section>

      <section id="projects" className="content-section section-pad">
        <SectionHeading number="05" title={t.projects} subtitle={t.subProjects} word={t.journey} />
        <div className="project-filters">
          <button className={filter==='all'?'selected':''} onClick={()=>setFilter('all')}>{t.all} / {projects.length}</button>
          <button className={filter==='academic'?'selected':''} onClick={()=>setFilter('academic')}>{t.academic}</button>
          <button className={filter==='professional'?'selected':''} onClick={()=>setFilter('professional')}>{t.professional}</button>
          <button className={filter==='personal'?'selected':''} onClick={()=>setFilter('personal')}>{t.personal}</button>
        </div>
        <div className="projects-grid">{visibleProjects.map((p,i)=>{
          const Icon = p.icon;
          return <article className="project-card reveal" key={p.id} style={{'--delay':`${i*80}ms`}}>
            <div className="project-card-top"><span className="project-number">{pad(p.id)} / {t.projectWord}</span><span className="project-date">{L(p.date)}</span></div>
            <div className="project-art"><div className={`project-symbol symbol-${p.id}`}><Icon/></div><span className="art-orbit art-orbit-a"/><span className="art-orbit art-orbit-b"/><span className="art-caption">{t[p.tkey+'c']}</span></div>
            <div className="project-info">
              <div className="project-label"><span>{t[p.category]}</span><span>{p.team?t.team:t.solo}</span></div>
              <h3>{t[p.tkey]}</h3>
              <p>{t[p.tkey+'d']}</p>
              <div className="tech-list">{p.tech.map(x=><span key={x}>{x}</span>)}</div>
              {p.repoUrl && (
                <a href={p.repoUrl} target="_blank" rel="noreferrer" className="project-link">
                  {t.repo}<ArrowUpRight size={15}/>
                </a>
              )}
            </div>
          </article>;
        })}</div>
      </section>

      <section id="languages" className="content-section section-pad">
        <SectionHeading number="06" title={t.languages} subtitle={t.subLanguages} word={t.journey} />
        <div className="language-grid">{languagesData.map(item =>
          <article className="language-card reveal" key={item.key}>
            <span className="language-code">{item.code}</span>
            <div>
              <h3>{t[item.key]}</h3>
              <p>{t[item.level]}</p>
              <div className="language-track"><span style={{width:item.width}}/></div>
              {item.cert && <a className="lang-cert" href={item.certUrl} target="_blank" rel="noreferrer"><Award size={11}/>{item.cert}</a>}
            </div>
            {item.certUrl
              ? <a className="language-arrow" href={item.certUrl} target="_blank" rel="noreferrer" aria-label={t.viewLangCert}><ArrowUpRight size={17}/></a>
              : <span className="language-arrow"><ArrowUpRight size={17}/></span>}
          </article>
        )}</div>
      </section>

      <section id="certifications" className="content-section section-pad">
        <SectionHeading number="07" title={t.certificates} subtitle={t.subCerts} word={t.journey} />
        <div className="cert-grid">
          <div className="cert-list">
            {sortedCerts.map(c =>
              <article className="cert-card reveal" key={c.id}>
                <div className="cert-icon"><Award size={22}/></div>
                <div className="cert-content"><span className="card-date">{L(c.date)}</span><h3>{L(c.title)}</h3><p>{c.org}</p></div>
                <a href={c.url} target="_blank" rel="noreferrer" aria-label={t.viewCert}><ExternalLink size={17}/></a>
              </article>
            )}
          </div>
          <div className="cert-note reveal"><Sparkles size={18}/><p>{t.certEmpty}</p></div>
        </div>
      </section>

      <section id="contact" className="content-section contact-section section-pad">
        <SectionHeading number="08" title={t.send} subtitle={t.subContact} word={t.journey} />
        <div className="contact-layout"><div className="contact-copy reveal"><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-reasons"><span>↗ {t.reason1}</span><span>↗ {t.reason2}</span><span>↗ {t.reason3}</span><span>↗ {t.reason4}</span></div><div className="contact-details"><a href={GMAIL_LINK} target="_blank" rel="noreferrer"><Mail size={16}/>{PROFILE.email}<ArrowUpRight size={13}/></a><a href={`tel:${PROFILE.phone}`}><MessageCircle size={16}/>{PROFILE.phone}<ArrowUpRight size={13}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn<ArrowUpRight size={13}/></a><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub<ArrowUpRight size={13}/></a></div></div>
          <form className="contact-form reveal" onSubmit={submitMessage}><div className="form-heading"><span className="eyebrow">{t.send}</span><Send size={18}/></div><label>{t.name}<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder={t.phName}/></label><label>{t.email}<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="name@example.com"/></label><label>{t.subject}<input required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder={t.phSubject}/></label><label>{t.message}<textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder={t.phMessage}/></label><button className="send-button" type="submit" disabled={status==='sending'}>{status==='sending'?t.sending:t.sendBtn}<ArrowUpRight size={17}/></button><p className="form-note">{status==='sent'&&<><Check size={13}/>{t.formSent}</>}{status==='error'&&t.formError}{(status==='idle'||status==='sending')&&t.formIdle}</p></form>
        </div>
      </section>

      <footer className="footer section-pad"><a className="footer-brand" href="#about" onClick={e=>{e.preventDefault();scrollTo('about')}}>Ons Rekik <span>— {t.footer}</span></a><div className="footer-right"><span>{t.made}</span><span className="footer-infinity">∞</span><span>2026 </span></div></footer>
    </main>
  </div>;
}

const DONUT_COLORS = ['#a8c0ff', '#a8e6cf', '#ffe3a3', '#ffb3c6', '#d4b8f0', '#b5e3f5', '#ffcfa8', '#cfd8dc'];

function LanguagesDonut({ data, t }) {
  const total = data.reduce((s, d) => s + d.count, 0);
  const R = 70, C = 2 * Math.PI * R;
  let acc = 0;
  return <div className="donut-block">
    <div className="donut-head"><span className="eyebrow">{t.donutTitle}</span><span className="mono muted">{t.donutSub}</span></div>
    {total === 0 ? <p className="donut-empty">{t.donutEmpty}</p> :
      <div className="donut-body">
        <svg viewBox="0 0 200 200" className="donut-svg" role="img" aria-label={t.donutTitle}>
          <g transform="rotate(-90 100 100)">
            <circle cx="100" cy="100" r={R} fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth="26" />
            {data.map((d, i) => {
              const len = (d.count / total) * C;
              const el = <circle key={d.name} cx="100" cy="100" r={R} fill="none"
                stroke={DONUT_COLORS[i % DONUT_COLORS.length]} strokeWidth="26"
                strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-acc} />;
              acc += len;
              return el;
            })}
          </g>
        </svg>
        <ul className="donut-legend">
          {data.map((d, i) => <li key={d.name}>
            <i style={{ background: DONUT_COLORS[i % DONUT_COLORS.length] }} />
            <span>{d.name}</span>
            <b>{Math.round((d.count / total) * 100)}%</b>
          </li>)}
        </ul>
      </div>}
  </div>;
}

function SectionHeading({number,title,subtitle,word}) { return <div className="section-heading reveal"><div><span className="eyebrow">{number} — {word}</span><h2>{title}</h2></div><span className="section-subtitle">{subtitle}</span></div>; }

function CodeWindow({title,subtitle,bottom}) { return <div className="code-window reveal"><div className="code-top"><div className="window-dots"><i/><i/><i/></div><span>{title}</span><span className="code-lang">TYPESCRIPT</span></div><div className="code-subtitle">// {subtitle}</div><pre><code><span className="code-purple">const</span> <span className="code-blue">onsRekik</span> = {'{'}{'\n'}  <span className="code-green">role</span>: <span className="code-yellow">"Software Engineer"</span>,{'\n'}  <span className="code-green">interests</span>: [{'\n'}    <span className="code-yellow">"AI & Data Science"</span>,{'\n'}    <span className="code-yellow">"Machine Learning"</span>,{'\n'}    <span className="code-yellow">"Computer Vision"</span>,{'\n'}    <span className="code-yellow">"Full-Stack & Mobile"</span>{'\n'}  ],{'\n'}  <span className="code-green">mindset</span>: <span className="code-yellow">"Always curious"</span>,{'\n'}  <span className="code-green">status</span>: <span className="code-yellow">"Open to opportunities"</span>{'\n'}{'}'};{'\n\n'}<span className="code-purple">export default</span> onsRekik;</code></pre><div className="code-bottom"><span>{bottom}</span></div></div>; }

function SolarStats({theme,t,skillsCount,projectsCount,repoCount,certsCount}) { const labels=t.stats; return <div className={`solar-panel ${theme} reveal`}><div className="solar-heading"><span className="eyebrow">{t.universe}</span><span className="mono muted">{t.liveCounters}</span></div><div className="solar-system"><div className="solar-sun"><Sparkles size={20}/></div><div className="solar-orbit o1"><i className="planet p1"/></div><div className="solar-orbit o2"><i className="planet p2"/></div><div className="solar-orbit o3"><i className="planet p3"/></div><div className="solar-orbit o4"><i className="planet p4"/></div></div><div className="stats-grid"><div><strong><span>+ </span>{pad(skillsCount)}</strong><small>{labels[0]}</small></div><div><strong><span>+ </span>{pad(projectsCount)}</strong><small>{labels[1]}</small></div><div><strong><span>+ </span>{pad(repoCount)}</strong><small>{labels[2]}</small></div><div><strong>{pad(certsCount)}</strong><small>{labels[3]}</small></div></div><span className="solar-foot">∞ &nbsp; {theme==='dark'?t.statNight:t.statDay}</span></div>; }

createRoot(document.getElementById('root')).render(<App/>);