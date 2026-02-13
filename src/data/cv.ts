// src/data/cv.ts

export type EducationType = "Licenciatura" | "Diplomado";

export interface Education {
  type: EducationType;
  degree: string;
  institution: string;
  period: string;
  notes?: string;
}

export const profile = {
  name: "Bryan Flores",
  job: "Desarrollador Frontend",
  location: "México",
  summary: [
    "Desarrollador Frontend con formación en Ingeniería en Sistemas Computacionales y experiencia construyendo aplicaciones internas orientadas a optimizar procesos operativos. He trabajado de forma autónoma en el diseño, implementación y evolución de interfaces, participando en la definición técnica de soluciones alineadas a necesidades de negocio.",
    "Me especializo en el desarrollo de interfaces claras, escalables y mantenibles, aplicando principios de UI, UX y arquitectura basada en componentes. Busco consolidar mi crecimiento profesional dentro de equipos colaborativos, aportando criterio técnico, enfoque a producto y compromiso con la calidad del código.",
  ],
};

export const education: Education[] = [
  {
    type: "Licenciatura",
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "UMOV",
    period: "2019 – 2024",
  },
  {
    type: "Diplomado",
    degree: "Administración de Proyectos Tecnológicos",
    institution: "UMOV",
    period: "2024",
  },
  {
    type: "Diplomado",
    degree: "Seguridad Informática",
    institution: "UMOV",
    period: "2024",
  },
  {
    type: "Diplomado",
    degree: "Transformación Digital",
    institution: "UMOV",
    period: "2024",
  },
];
