export interface Experience {
  role: string;
  company: string;
  period: string;
  card: {
    description: string;
    responsibilities: string[];
  };
  highlights: string[];
  tech: string[];
}

export const experiences:Experience[] = [
  {
    role: "Desarrollador de Software Jr. / Responsable Tecnológico",
    company: "Neva",
    period: "2023 – 2025",
    card: {
      description:
        "Desarrollo de un sistema interno orientado a centralizar y optimizar procesos operativos del negocio.",
      responsibilities: [
        "Diseño e implementación de interfaces frontend",
        "Trabajo directo con requerimientos reales de negocio",
        "Colaboración en priorización de tareas y mejoras",
        "Mantenimiento y evolución de funcionalidades existentes"
      ],
    },
    highlights: [
      "Diseñé y desarrollé un sistema interno tipo ERP con múltiples módulos, centralizando las operaciones del negocio y sustituyendo el uso de herramientas externas.",
      "Implementé módulos clave como inventario, finanzas, gestión de tareas, calendario, asistencias y reportes, mejorando la visibilidad de la información y apoyando la toma de decisiones.",
      "Trabajé de forma autónoma en la priorización de requerimientos, planificación técnica y entrega de soluciones, proponiendo mejoras continuas con impacto directo en la operación.",
      "Asumí la gestión del área tecnológica, brindando soporte técnico, automatizando procesos operativos y apoyando en capacitación básica en seguridad digital."
    ],
    tech: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
];