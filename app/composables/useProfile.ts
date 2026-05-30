export interface Project {
  id: string;
  title: string;
  description: { en: string; es: string };
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;
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
  yearsOfExperience?: number;
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
      name: "Vue.js",
      icon: "i-simple-icons-vuedotjs",
      category: "frontend",
      yearsOfExperience: 4,
    },
    {
      name: "Nuxt",
      icon: "i-simple-icons-nuxtdotjs",
      category: "frontend",
      yearsOfExperience: 3,
    },
    {
      name: "TypeScript",
      icon: "i-simple-icons-typescript",
      category: "frontend",
      yearsOfExperience: 4,
    },
    {
      name: "Tailwind CSS",
      icon: "i-simple-icons-tailwindcss",
      category: "frontend",
      yearsOfExperience: 3,
    },
    {
      name: "React",
      icon: "i-simple-icons-react",
      category: "frontend",
      yearsOfExperience: 2,
    },
    {
      name: "Node.js",
      icon: "i-simple-icons-nodedotjs",
      category: "backend",
      yearsOfExperience: 4,
    },
    {
      name: "PostgreSQL",
      icon: "i-simple-icons-postgresql",
      category: "backend",
      yearsOfExperience: 3,
    },
    {
      name: "Docker",
      icon: "i-simple-icons-docker",
      category: "tools",
      yearsOfExperience: 2,
    },
    { name: "Git", icon: "i-simple-icons-git", category: "tools", yearsOfExperience: 5 },
    {
      name: "Figma",
      icon: "i-simple-icons-figma",
      category: "tools",
    },
    {
      name: "Python",
      icon: "i-simple-icons-python",
      category: "backend",
      yearsOfExperience: 2,
    },
    {
      name: "MongoDB",
      icon: "i-simple-icons-mongodb",
      category: "backend",
      yearsOfExperience: 3,
    },
  ];

  const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: {
        en: "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard.",
        es: "Una plataforma de e-commerce completa con gestión de inventario en tiempo real, procesamiento de pagos y panel de administración.",
      },
      image: "/projects/ecommerce.jpg",
      technologies: ["Nuxt", "Vue.js", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/dario/ecommerce",
      featured: true,
      year: 2025,
    },
    {
      id: "task-management",
      title: "Task Management App",
      description: {
        en: "A collaborative task management application with drag-and-drop, real-time updates, and team workspaces.",
        es: "Una aplicación colaborativa de gestión de tareas con arrastrar y soltar, actualizaciones en tiempo real y espacios de trabajo en equipo.",
      },
      image: "/projects/tasks.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/dario/task-app",
      featured: true,
      year: 2025,
    },
    {
      id: "ai-dashboard",
      title: "AI Analytics Dashboard",
      description: {
        en: "An intelligent analytics dashboard with AI-powered insights, custom reports, and data visualization.",
        es: "Un dashboard de análisis inteligente con insights potenciados por IA, reportes personalizados y visualización de datos.",
      },
      image: "/projects/dashboard.jpg",
      technologies: ["Nuxt", "Python", "TensorFlow", "D3.js", "Docker"],
      liveUrl: "https://example.com",
      featured: true,
      year: 2024,
    },
    {
      id: "social-network",
      title: "Social Network API",
      description: {
        en: "A RESTful API for a social network with real-time messaging, notifications, and media handling.",
        es: "Una API RESTful para una red social con mensajería en tiempo real, notificaciones y manejo de medios.",
      },
      image: "/projects/social.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "WebSocket"],
      repoUrl: "https://github.com/dario/social-api",
      featured: false,
      year: 2024,
    },
    {
      id: "portfolio-v1",
      title: "Portfolio v1",
      description: {
        en: "My first portfolio website built with vanilla HTML, CSS, and JavaScript.",
        es: "Mi primer sitio web de portafolio construido con HTML, CSS y JavaScript vanilla.",
      },
      image: "/projects/portfolio.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://example.com",
      featured: false,
      year: 2023,
    },
    {
      id: "weather-app",
      title: "Weather App",
      description: {
        en: "A beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.",
        es: "Una hermosa aplicación del clima con pronósticos basados en ubicación, mapas interactivos y alertas de clima severo.",
      },
      image: "/projects/weather.jpg",
      technologies: ["Vue.js", "OpenWeather API", "Mapbox", "Tailwind CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/dario/weather-app",
      featured: false,
      year: 2024,
    },
  ];

  const experiences: Experience[] = [
    {
      id: "senior-dev",
      role: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: {
        en: "Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the team.",
        es: "Liderando el desarrollo de aplicaciones web escalables, mentorizando desarrolladores junior e implementando mejores prácticas en el equipo.",
      },
      technologies: ["Nuxt", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "fullstack-dev",
      role: "Full Stack Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description: {
        en: "Developed custom web applications for clients across various industries, from e-commerce to SaaS platforms.",
        es: "Desarrollé aplicaciones web personalizadas para clientes de diversas industrias, desde e-commerce hasta plataformas SaaS.",
      },
      technologies: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "frontend-dev",
      role: "Frontend Developer",
      company: "Startup",
      period: "2019 - 2021",
      description: {
        en: "Built responsive and accessible user interfaces for a SaaS product, improving user engagement by 40%.",
        es: "Construí interfaces de usuario responsivas y accesibles para un producto SaaS, mejorando la participación del usuario en un 40%.",
      },
      technologies: ["React", "TypeScript", "Styled Components", "Jest"],
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
