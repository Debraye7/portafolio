export const PROJECT_TYPES = {
  real: {
    // experiencia profesional
    value: "real",
    label: "Proyecto real",
    badgeClass: "bg-accent-soft text-accent-primary",
  },
  demo: {
    // proyectos propios
    value: "demo",
    label: "Demo técnica",
    badgeClass: "bg-background-light-primary text-text-light-secondary",
  },
  personal: {
    // ejercicios y pruebas
    value: "personal",
    label: "Proyecto personal",
    badgeClass: "bg-background-light-primary text-text-light-secondary",
  },
} as const;

export type ProjectType = keyof typeof PROJECT_TYPES;

export interface Project {
  featured?: boolean;
  img: string;
  title: string;
  description: string;
  problem: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  type: ProjectType;
  freelance?: boolean;
};

export const projects: Project[] = [
  {
    featured: true,
    img: "/projects/matb.webp",
    title: "MATB",
    description: "E-commerce full-stack con panel administrativo.",
    problem: "Desarrollo de un flujo completo de e-commerce, integrando frontend, backend y base de datos, con diferenciación de roles y administración de pedidos, de acuerdo a las necesidades del cliente.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://matb-shop.vercel.app",
    repoUrl: "https://github.com/Debraye7/MATB",
    type: "real",
    freelance: true,
  },
  // {
  //   featured: true,
  //   img: "/projects/default.webp",
  //   title: "Dashboard de Productos",
  //   description: "Interfaz para visualización y gestión de productos.",
  //   problem: "Crear una UI clara y reutilizable para un panel administrativo.",
  //   tech: ["React", "TypeScript", "Tailwind CSS"],
  //   liveUrl: "https://...",
  //   repoUrl: "https://github.com/...",
  //   type: "demo",
  // },
  // {
  //   featured: true,
  //   img: "/projects/default.webp",
  //   title: "Buscador de Películas",
  //   description: "Aplicación para buscar y filtrar películas desde una API.",
  //   problem: "Manejo de estado, carga de datos y errores de red.",
  //   tech: ["React", "TypeScript"],
  //   liveUrl: "https://...",
  //   repoUrl: "https://github.com/...",
  //   type: "demo",
  // },
  // {
  //   img: "/projects/default.webp",
  //   title: "Blog Técnico",
  //   description: "Sitio con páginas dinámicas y renderizado optimizado.",
  //   problem: "Implementar routing y renderizado eficiente.",
  //   tech: ["Next.js", "TypeScript"],
  //   liveUrl: "https://...",
  //   repoUrl: "https://github.com/...",
  //   type: "personal",
  // },
];

//! real
// Proyectos desarrollados en el contexto de una relación laboral o profesional formal, con impacto real en una organización.
// Incluye: empleo en empresa, prácticas profesionales, proyectos internos, sistemas usados por usuarios reales
// Características clave: hubo stakeholders, hubo requerimientos reales, hubo trade-offs, hubo responsabilidad
// Responde a la pregunta: “¿Puede trabajar en un entorno profesional real?”

//! freelance
// Proyectos desarrollados para clientes externos, bajo acuerdos puntuales o contratos independientes.
// Incluye: clientes individuales, pequeños negocios, encargos pagados, entregas definidas
// Características clave: relación cliente–proveedor, negociación de alcance, autonomía técnica, presión por resultados
// Responde a la pregunta: “¿Puede hacerse cargo de un proyecto de punta a punta?”

//! personal
// Proyectos iniciados y definidos por ti, con una intención clara de producto, aprendizaje profundo o exploración técnica.
// Incluye: ideas propias, refactors importantes, side projects, proyectos incompletos pero bien pensados
// Características clave: decisiones técnicas conscientes, arquitectura propia, enfoque en calidad y evolución, no son ejercicios
// Responde a la pregunta: “¿Cómo piensa cuando nadie le dice qué hacer?”

//! demo
// Proyectos acotados creados con fines demostrativos, educativos o de práctica específica.
// Incluye: pruebas de concepto, challenges, clones, pequeños experimentos
// Características clave: alcance limitado, foco técnico puntual, rápida ejecución, no intención de producto
// Responde a la pregunta: “¿Domina esta tecnología o patrón?”