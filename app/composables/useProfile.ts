export interface Project {
  id: string;
  title: string;
  subtitle: { en: string; es: string };
  description: { en: string; es: string };
  image: string;
  gallery?: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;
  category?: { en: string; es: string };
  context?: { en: string; es: string };
  solution?: { en: string; es: string };
  challenge?: { en: string; es: string };
  roles?: { en: string[]; es: string[] };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: { en: string; es: string };
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
  startYear?: number;
  color: string;
  docsUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export function useProfile() {
  const name = "Dario Ruiz";
  const fullName = "Dario Julian Ruiz Padilla";
  const email = "dario.jruiz31@gmail.com";
  const location = "Jalisco, México";
  const avatar = "/avatar.jpg";
  const siteName = "daruiz.dev";

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/djruizz",
      icon: "i-simple-icons-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dario-julian-ruiz-padilla-a71b42395/",
      icon: "i-simple-icons-linkedin",
    },
    {
      name: "Email",
      url: "mailto:dario.jruiz31@gmail.com",
      icon: "i-lucide-mail",
    },
  ];

  const techStack: Skill[] = [
    {
      name: "Vue 3",
      icon: "i-simple-icons-vuedotjs",
      category: "frontend",
      startYear: 2022,
      color: "#42b883",
      docsUrl: "https://vuejs.org/",
    },
    {
      name: "Nuxt.js",
      icon: "i-simple-icons-nuxtdotjs",
      category: "frontend",
      startYear: 2024,
      color: "#00dc82",
      docsUrl: "https://nuxt.com/",
    },
    {
      name: "TypeScript",
      icon: "i-simple-icons-typescript",
      category: "frontend",
      startYear: 2024,
      color: "#3178c6",
      docsUrl: "https://www.typescriptlang.org/",
    },
    {
      name: "JavaScript",
      icon: "i-simple-icons-javascript",
      category: "frontend",
      startYear: 2021,
      color: "#f7df1e",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML5",
      icon: "i-simple-icons-html5",
      category: "frontend",
      startYear: 2020,
      color: "#e34f26",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: "i-simple-icons-css3",
      category: "frontend",
      startYear: 2020,
      color: "#1572b6",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Tailwind CSS",
      icon: "i-simple-icons-tailwindcss",
      category: "frontend",
      startYear: 2023,
      color: "#06b6d4",
      docsUrl: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "i-simple-icons-bootstrap",
      category: "frontend",
      startYear: 2023,
      color: "#7952b3",
      docsUrl: "https://getbootstrap.com/",
    },
    {
      name: "Supabase",
      icon: "i-simple-icons-supabase",
      category: "backend",
      startYear: 2024,
      color: "#3ecf8e",
      docsUrl: "https://supabase.com/",
    },
    {
      name: "Laravel",
      icon: "i-simple-icons-laravel",
      category: "backend",
      startYear: 2023,
      color: "#ff2d20",
      docsUrl: "https://laravel.com/",
    },
    {
      name: "MySQL",
      icon: "i-simple-icons-mysql",
      category: "backend",
      startYear: 2023,
      color: "#4479a1",
      docsUrl: "https://dev.mysql.com/doc/",
    },
    {
      name: "Node.js",
      icon: "i-simple-icons-nodedotjs",
      category: "backend",
      startYear: 2022,
      color: "#5fa04e",
      docsUrl: "https://nodejs.org/",
    },
    {
      name: "Python",
      icon: "i-simple-icons-python",
      category: "backend",
      startYear: 2024,
      color: "#3776ab",
      docsUrl: "https://www.python.org/",
    },
    {
      name: "Git",
      icon: "i-simple-icons-git",
      category: "tools",
      startYear: 2021,
      color: "#f05032",
      docsUrl: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: "i-simple-icons-github",
      category: "tools",
      startYear: 2021,
      color: "#ffffff",
      docsUrl: "https://github.com/",
    },
    {
      name: "pnpm",
      icon: "i-simple-icons-pnpm",
      category: "tools",
      startYear: 2023,
      color: "#f69220",
      docsUrl: "https://pnpm.io/",
    },
    {
      name: "Composer",
      icon: "i-simple-icons-composer",
      category: "tools",
      startYear: 2023,
      color: "#885630",
      docsUrl: "https://getcomposer.org/",
    },
  ];

  const projects: Project[] = [
    {
      id: "repsy",
      title: "Repsy",
      subtitle: {
        en: "Workout tracking, routines & strength progress PWA",
        es: "Aplicación PWA de rutinas, rachas y progreso en entrenamiento",
      },
      description: {
        en: "Built a mobile-first workout and strength tracking PWA featuring weekly routine planning, guided exercise sessions with rest timers and RPE targets, streak calendars, and per-exercise weight progression charts.",
        es: "Desarrollé una PWA mobile-first de seguimiento de entrenamiento y fuerza con planificación semanal de rutinas, sesiones guiadas con temporizadores y RPE, calendario de rachas y gráficas de evolución de peso por ejercicio.",
      },
      image: "/projects/repsy/Progress.png",
      gallery: [
        "/projects/repsy/Week.png",
        "/projects/repsy/Workout.png",
        "/projects/repsy/Calendar.png",
        "/projects/repsy/Progress.png",
      ],
      technologies: [
        "Nuxt.js",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "PWA",
      ],
      liveUrl: "https://repsy.pages.dev",
      repoUrl: "https://github.com/Djruizz/repsy",
      featured: true,
      year: 2026,
      category: {
        en: "Fitness & Productivity",
        es: "Fitness y Productividad",
      },
      context: {
        en: "Athletes and gym-goers needed a fast, distraction-free mobile app to follow structured weekly training splits, track sets, reps, RPE, and rest intervals during workouts, and visualize long-term strength progression without bloated social feeds or slow interfaces.",
        es: "Las personas que entrenan necesitaban una aplicación móvil rápida y sin distracciones para seguir rutinas semanales estructuradas, registrar series, repeticiones, RPE y descansos en tiempo real durante la sesión, y visualizar su progreso de fuerza a largo plazo.",
      },
      solution: {
        en: "I built a Progressive Web App (PWA) with Nuxt, Tailwind CSS, and Firebase tailored for one-handed gym usage. It includes a weekly routine planner, live workout runner with warmups and rest timers, a monthly streak calendar, and an analytics view showing max weights, deltas, and historical set breakdowns per exercise.",
        es: "Construí una aplicación web progresiva (PWA) con Nuxt, Tailwind CSS y Firebase pensada para usarse cómodamente en el gimnasio. Incluye planificador semanal de rutinas, modo de ejecución con calentamiento y tiempos de descanso, calendario mensual de rachas y analíticas de evolución de cargas por ejercicio.",
      },
      challenge: {
        en: "The main challenge was keeping workout logging instantaneous under variable gym connectivity while calculating accurate streaks, session totals, and per-exercise weight progression across historical logs. I structured the data model in Firebase for fast per-user reads and implemented offline-ready PWA caching alongside reactive client-side aggregations.",
        es: "El principal reto fue mantener un registro ágil durante el entrenamiento incluso con conectividad inestable, calculando con precisión rachas, sesiones mensuales y evolución histórica de pesos por ejercicio. Estructuré el modelo de datos en Firebase para lecturas rápidas por usuario e integré caché PWA junto con agregaciones reactivas en el cliente.",
      },
      roles: {
        en: [
          "Full-stack PWA development",
          "Firebase data modeling & synchronization",
          "Workout runner & rest timer UX",
          "Streak & weight progression analytics",
          "Mobile-first dark UI design",
        ],
        es: [
          "Desarrollo full-stack de PWA",
          "Modelado de datos y sincronización con Firebase",
          "UX de ejecución de rutinas y temporizadores",
          "Analíticas de rachas y evolución de cargas",
          "Diseño de interfaz mobile-first",
        ],
      },
    },
    {
      id: "agendia",
      title: "Agendia",
      subtitle: {
        en: "Appointment scheduling, bookings & business management platform",
        es: "Plataforma integral de gestión de citas y negocios",
      },
      description: {
        en: "Built a full-stack appointment scheduling and business management PWA for independent professionals and service businesses, featuring 24/7 online booking pages, conflict-free calendars, client and inventory tracking, and net profit analytics.",
        es: "Desarrollé una plataforma web progresiva (PWA) para la gestión de citas y negocios dirigida a profesionales independientes y comercios, con reservas en línea 24/7, calendario sin empalmes, control de clientes e inventario y cálculo de ganancias netas.",
      },
      image: "/projects/agendia/BusinessDesktop.png",
      gallery: [
        "/projects/agendia/BusinessDesktop.png",
        "/projects/agendia/Home.png",
        "/projects/agendia/Calendar.png",
        "/projects/agendia/Features.png",
      ],
      technologies: [
        "Nuxt.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "Nuxt UI",
        "PWA",
      ],
      liveUrl: "https://tuagendia.app",
      featured: true,
      year: 2026,
      category: {
        en: "SaaS & Business Management",
        es: "SaaS y Gestión de Negocios",
      },
      context: {
        en: "Independent professionals, salons, barbershops, and appointment-based businesses needed an all-in-one platform to prevent overlapping bookings, accept 24/7 online reservations without friction, and track real net profits. Existing solutions were often expensive, fragmented across chats and spreadsheets, or poorly optimized for mobile daily operations.",
        es: "Los profesionales independientes, salones, barberías y negocios con cita previa necesitaban una plataforma centralizada para evitar empalmes de horarios, recibir reservas en línea 24/7 sin fricción y conocer su utilidad neta real. Las opciones existentes solían ser costosas, fragmentadas entre chats y hojas de cálculo, o poco prácticas para operar desde el celular.",
      },
      solution: {
        en: "I architected a mobile-first Progressive Web App (PWA) using Nuxt.js, Nuxt UI, and Supabase. It unifies a conflict-free multi-staff calendar, customizable public booking pages with WhatsApp integration, a catalog for services and stock-tracked products, direct sales, operating expense tracking, and real-time earnings summaries.",
        es: "Arquitecté una aplicación web progresiva (PWA) mobile-first usando Nuxt.js, Nuxt UI y Supabase. Unifica un calendario multi-profesional sin empalmes, páginas públicas personalizables con integración de WhatsApp para reservas directas, catálogo de servicios y productos con control de stock, ventas directas, registro de gastos y resúmenes de ganancias en tiempo real.",
      },
      challenge: {
        en: "The main architectural challenge was preventing double bookings across multiple staff schedules while keeping public booking pages fast and isolating each business's data. I solved this by combining availability conflict validation with PostgreSQL Row Level Security (RLS) policies in Supabase and role-based access control for owners and staff in Nuxt.js.",
        es: "El principal reto arquitectónico fue evitar traslapes de citas entre múltiples profesionales manteniendo rápidas las páginas públicas de reserva y aislando los datos de cada negocio. Lo resolví combinando validaciones de disponibilidad sin empalmes con políticas de Row Level Security (RLS) en Supabase y control de acceso basado en roles para dueños y colaboradores en Nuxt.js.",
      },
      roles: {
        en: [
          "Full-stack architecture & development",
          "Multi-tenant database & RLS design",
          "Booking engine & conflict-free calendar",
          "Mobile-first PWA & UI/UX implementation",
          "Financial, inventory & client management modules",
        ],
        es: [
          "Arquitectura y desarrollo full-stack",
          "Diseño de base de datos multi-tenant y políticas RLS",
          "Motor de reservas y calendario sin empalmes",
          "Implementación de PWA mobile-first y UI/UX",
          "Módulos de finanzas, inventario y gestión de clientes",
        ],
      },
    },
    {
      id: "nutri-app",
      title: "Nutri App",
      subtitle: {
        en: "Full-stack nutrition management platform",
        es: "Plataforma integral de gestión nutricional",
      },
      description: {
        en: "Built a full-stack nutrition management platform designed for nutritionists and patients, featuring role-based access control, personalized meal plans, progress tracking, and real-time data synchronization.",
        es: "Desarrollé una plataforma integral de gestión nutricional para nutriólogos y pacientes, con control de acceso basado en roles, planes de alimentación personalizados, seguimiento de progreso y sincronización de datos en tiempo real.",
      },
      image: "/projects/nutri-app.png",
      gallery: ["/projects/nutri-app.png", "/projects/nutri-app2.png"],
      technologies: ["Nuxt.js", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "https://nutritionist-app-659.pages.dev/",
      featured: true,
      year: 2026,
      category: {
        en: "Health & Wellness",
        es: "Salud y Bienestar",
      },
      context: {
        en: "Nutritionists needed a centralized platform to manage multiple patients, track their progress, and create personalized meal plans. Existing solutions were either too complex or lacked real-time collaboration features between nutritionists and their patients.",
        es: "Los nutriólogos necesitaban una plataforma centralizada para gestionar múltiples pacientes, seguir su progreso y crear planes de alimentación personalizados. Las soluciones existentes eran demasiado complejas o carecían de funciones de colaboración en tiempo real entre nutriólogos y sus pacientes.",
      },
      solution: {
        en: "I architected a full-stack application using Nuxt.js for the frontend and Supabase as the backend. Implemented role-based access control (RBAC) to separate nutritionist and patient views, real-time data synchronization using Supabase Realtime, and a comprehensive dashboard for tracking nutritional goals and progress over time.",
        es: "Arquitecté una aplicación full-stack usando Nuxt.js para el frontend y Supabase como backend. Implementé control de acceso basado en roles (RBAC) para separar las vistas de nutriólogos y pacientes, sincronización de datos en tiempo real usando Supabase Realtime, y un dashboard comprehensivo para seguir objetivos nutricionales y progreso a lo largo del tiempo.",
      },
      challenge: {
        en: "The main architectural challenge was designing a flexible permission system that allowed nutritionists to manage their patients' data while ensuring patients could only access their own information. I solved this by implementing Row Level Security (RLS) policies in Supabase combined with middleware-based route guards in Nuxt.js, creating a secure multi-tenant architecture without compromising performance.",
        es: "El principal reto arquitectónico fue diseñar un sistema de permisos flexible que permitiera a los nutriólogos gestionar los datos de sus pacientes mientras aseguraba que los pacientes solo pudieran acceder a su propia información. Resolví esto implementando políticas de Row Level Security (RLS) en Supabase combinadas con guards de rutas basados en middleware en Nuxt.js, creando una arquitectura multi-tenant segura sin comprometer el rendimiento.",
      },
      roles: {
        en: [
          "Full-stack development",
          "Database architecture design",
          "Authentication & authorization implementation",
          "Real-time features integration",
          "UI/UX design and implementation",
        ],
        es: [
          "Desarrollo full-stack",
          "Diseño de arquitectura de base de datos",
          "Implementación de autenticación y autorización",
          "Integración de funciones en tiempo real",
          "Diseño e implementación de UI/UX",
        ],
      },
    },
  ];

  const experiences: Experience[] = [
    {
      id: "corporativo-elizalde",
      role: "Frontend Intern Developer",
      company: "Corporativo Elizalde",
      period: "2023 - 2025",
      description: {
        en: "Built and maintained a web application for financial management, developing interactive dashboards, integrating RESTful APIs, and automating business processes for portfolio management, employee administration, and document generation.",
        es: "Desarrollé y mantuve una aplicación web financiera, creando dashboards interactivos, integrando APIs RESTful y automatizando procesos de negocio para la gestión de portafolios, administración de empleados y generación de documentos.",
      },
      technologies: ["Vue.js", "Laravel", "REST APIs", "GitHub", "Bootstrap"],
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  return {
    name,
    fullName,
    email,
    location,
    siteName,
    avatar,
    socialLinks,
    techStack,
    projects,
    experiences,
    featuredProjects,
  };
}
