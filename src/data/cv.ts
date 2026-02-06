import IconBriefcaseBusiness from "../components/icons/IconBriefcaseBusiness.astro";
import IconGithub from "../components/icons/IconGithub.astro";
import IconLinkedin from "../components/icons/IconLinkedin.astro";

const info = {
  name: "Bryan Flores",
  job: "Desarrollador Frontend Jr. enfocado en UI y Experiencia de Usuario",
  location: "Tlalnepantla de Baz, Estado de México",
  email: "Bryan_Flores7@outlook.com",
  phone: "+52 55 7910 1562",
  socialMedia: [
    {
      label: "Portafolio",
      href: "https://bryan-flores-dev.netlify.app",
      Icon: IconBriefcaseBusiness,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bryanflores-dev",
      Icon: IconLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/Debraye7",
      Icon: IconGithub,
    },
  ],
  about: "Soy Desarrollador Frontend Junior, con formación en Ingeniería en Sistemas Computacionales y experiencia práctica desarrollando soluciones de software en un entorno real de negocio.",
  experience: [
    {
      position: "Desarrollador de Software Jr. / Responsable Tecnológico",
      company: "Neva",
      location: "Remoto",
      startDate: "2023",
      endDate: "2025",
      highlights: [
        "Diseño y desarrollo de un ERP interno con 6 módulos (inventario, finanzas, tareas, calendario, asistencias y reportes) utilizado por 3 usuarios activos, centralizando las operaciones del equipo y eliminando el uso de herramientas externas, lo que mejoró la visibilidad de información para la toma de decisiones.",
        "Implementación de un sistema de gestión y seguimiento de tareas dentro del ERP, fortaleciendo la trazabilidad de actividades y la comunicación interna en la ejecución de proyectos.",
        "Gestión del área tecnológica, brindando soporte técnico, automatizando procesos operativos, evaluando herramientas digitales y apoyando en capacitación básica en seguridad cibernética.",
        "Trabajo autónomo en la priorización de requerimientos y entrega de soluciones técnicas, proponiendo mejoras continuas con impacto directo en la operación del negocio.",
      ],
    },
    {
      position: "E-commerce full-stack con panel administrativo.",
      company: "MATB",
      location: "Remoto",
      startDate: "2025",
      endDate: "2025",
      highlights: [
        "Desarrollo de un flujo completo de e-commerce, integrando frontend, backend y base de datos, con diferenciación de roles y administración de pedidos.",
        "Aprendizaje en organización de proyectos full-stack y toma de decisiones técnicas orientadas a funcionalidad y mantenimiento."
      ],
    },
  ],
};