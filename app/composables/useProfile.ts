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
      role: "Frontend Developer",
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
    avatar,
    socialLinks,
    techStack,
    projects,
    experiences,
    featuredProjects,
  };
}
