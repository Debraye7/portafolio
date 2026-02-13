export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Desarrollo de interfaces modernas, mantenibles y orientadas a rendimiento, utilizando tecnologías actuales del ecosistema JavaScript y buenas prácticas de arquitectura basada en componentes.",
    items: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Astro",
      "Consumo de APIs REST",
      "Manejo de estado"
    ],
  },
  {
    title: "UI / UX",
    description: "Aplicación de principios de diseño centrado en el usuario para construir experiencias claras, accesibles y consistentes, priorizando usabilidad, jerarquía visual y coherencia en la interacción.",
    items: [
      "Diseño de interfaces centradas en usuario",
      "Responsive design",
      "Arquitectura basada en componentes",
      "Principios de accesibilidad (a11y)",
      "Consistencia visual y sistemas de diseño básicos"
    ],
  },
  {
    title: "Herramientas y flujo de trabajo",
    description: "Uso de herramientas y prácticas que facilitan el trabajo colaborativo, el control de versiones y la evolución continua del código, manteniendo estándares de calidad y organización en proyectos reales.",
    items: [
      "Git y GitHub (control de versiones)",
      "Trabajo con requerimientos de negocio",
      "Refactorización y mejora continua",
      "Mantenimiento y evolución de sistemas existentes",
      "Organización de código y buenas prácticas"
    ],
  },
  {
    title: "Bases de datos",
    description: "Fundamentos en modelado y manejo de bases de datos, entendiendo la persistencia de información y su impacto en el diseño y rendimiento de aplicaciones.",
    items: [
      "MongoDB",
      "MySQL",
      "Supabase",
    ],
  },
  {
    title: "Backend",
    description: "Conocimientos en desarrollo backend orientados a la integración de APIs y lógica de servidor, comprendiendo la estructura de servicios y su interacción con aplicaciones frontend.",
    items: [
      "Node js",
    ],
  },
];
