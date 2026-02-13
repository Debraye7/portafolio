export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  highlights: string[];
  tech: string[];
  current?:boolean;
};

export const experiences:Experience[] = [
  {
    role: "Desarrollador de Software Jr. / Responsable Tecnológico",
    company: "Neva",
    period: "2023 – 2025",
    description: "Desempeñé el rol de desarrollador frontend y responsable tecnológico, participando activamente en el diseño, desarrollo y evolución de soluciones internas utilizadas en la operación diaria del negocio.",
    responsibilities: [
      "Diseño y desarrollo de interfaces frontend para sistemas internos de uso operativo",
      "Análisis y traducción de requerimientos reales de negocio a soluciones técnicas",
      "Colaboración en la priorización de funcionalidades y mejoras continuas del sistema",
      "Mantenimiento, refactorización y evolución de funcionalidades existentes",
    ],
    highlights: [
      "Diseñé y desarrollé un sistema interno tipo ERP con múltiples módulos, centralizando las operaciones del negocio y reduciendo la dependencia de herramientas externas.",
      "Implementé módulos clave como inventario, finanzas, gestión de tareas, calendario, asistencias y reportes, mejorando la visibilidad de la información para la toma de decisiones.",
      "Trabajé de forma autónoma en la planificación técnica, priorización de requerimientos y entrega de soluciones, proponiendo mejoras continuas con impacto directo en la operación.",
      "Asumí la responsabilidad del área tecnológica, brindando soporte técnico, automatizando procesos operativos y apoyando en capacitación básica en buenas prácticas digitales.",
    ],
    tech: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
];