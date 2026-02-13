export const PROJECT_TYPES = {
  todos: {
    value: "todos",
    label: "Todos",
    badgeClass: "badge badge-basic",
  },
  real: {
    // experiencia profesional
    value: "real",
    label: "Proyecto real",
    badgeClass: "badge badge-active",
  },
  demo: {
    // proyectos propios
    value: "demo",
    label: "Demo técnica",
    badgeClass: "badge badge-basic",
  },
  personal: {
    // ejercicios y pruebas
    value: "personal",
    label: "Proyecto personal",
    badgeClass: "badge badge-basic",
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
  liveUrl?: string;
  repoUrl?: string;
  type: ProjectType;
  freelance?: boolean;
};

export const projects: Project[] = [
  {
    featured: false,
    img: "/projects/Portafolio.webp",
    title: "Portafolio Personal",
    description: "Portafolio personal con proyectos y habilidades técnicas.",
    problem: "Desarrollo de un portafolio personal que refleje mi experiencia, habilidades y proyectos de manera clara y atractiva, utilizando tecnologías modernas y buenas prácticas de desarrollo web.",
    tech: ["Astro", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://bryan-flores-dev.netlify.app",
    repoUrl: "https://github.com/Debraye7/portafolio",
    type: "personal",
  },
  {
    featured: true,
    img: "/projects/matb.webp",
    title: "MATB",
    description: "E-commerce full-stack con panel administrativo.",
    problem: "Desarrollo de un flujo completo de e-commerce, integrando frontend, backend y base de datos, con diferenciación de roles y administración de pedidos, de acuerdo a las necesidades del cliente.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://matb-shop.vercel.app",
    repoUrl: "https://github.com/Debraye7/MATB",
    type: "real",
    freelance: true,
  },
  {
    featured: true,
    img: "/projects/FleetTracker.webp",
    title: "FleetTracker",
    description: "Aplicación frontend para la gestión básica de una flota vehicular.",
    problem: "Este proyecto fue desarrollado como parte de un reto técnico, priorizando claridad arquitectónica, buenas prácticas y mantenibilidad del código.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Axios", "React Router", "json-server"],
    // liveUrl: "https://...",
    repoUrl: "https://github.com/Debraye7/Reto_Tecnico_Frontend_FleetTracker",
    type: "demo",
  },
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