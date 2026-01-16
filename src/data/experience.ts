export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  tech: string[];
}

export const experiences:Experience[] = [
  {
    role: "Desarrollador de Software Jr. / Responsable Tecnológico",
    company: "Neva",
    period: "2023 – 2025",
    description:
      "Desarrollo de un sistema interno orientado a centralizar y optimizar procesos operativos del negocio.",
    responsibilities: [
      "Diseño e implementación de interfaces frontend",
      "Trabajo directo con requerimientos reales de negocio",
      "Colaboración en priorización de tareas y mejoras",
      "Mantenimiento y evolución de funcionalidades existentes"
    ],
    tech: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
];