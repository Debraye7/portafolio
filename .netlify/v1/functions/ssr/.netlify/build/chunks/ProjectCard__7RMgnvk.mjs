import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_CCnU_o8r.mjs';
import 'piccolore';
import 'clsx';

const PROJECT_TYPES = {
  real: {
    // experiencia profesional
    value: "real",
    label: "Proyecto real",
    badgeClass: "bg-accent-soft text-accent-primary"
  },
  demo: {
    // proyectos propios
    value: "demo",
    label: "Demo técnica",
    badgeClass: "bg-background-light-primary text-text-light-secondary"
  },
  personal: {
    // ejercicios y pruebas
    value: "personal",
    label: "Proyecto personal",
    badgeClass: "bg-background-light-primary text-text-light-secondary"
  }
};
const projects = [
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
    freelance: true
  }
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
//! freelance
//! personal
//! demo

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { img, title, description, problem, tech, liveUrl, repoUrl, type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col p-6 rounded-lg space-y-4
        bg-background-light-secondary dark:bg-background-dark-secondary
        border border-dividers-light dark:border-dividers-dark"> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} class="rounded-md object-cover"> <!-- Tipo de proyecto --> <span${addAttribute(`w-fit text-xs font-medium px-3 py-1 rounded-full ${PROJECT_TYPES[type].badgeClass}`, "class")}> ${PROJECT_TYPES[type].label} </span> <h3 class="font-display text-xl font-semibold text-text-light-title dark:text-text-dark-title"> ${title} </h3> <p class="text-text-light-primary dark:text-text-dark-primary"> ${description} </p> <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary"> <strong>Reto:</strong> ${problem} </p> <ul class="flex flex-wrap gap-1"> ${tech.map((t) => renderTemplate`<li class="badge">${t}</li>`)} </ul> <div class="mt-auto flex flex-wrap gap-4 pt-2"> <a${addAttribute(liveUrl, "href")} class="link">Ver proyecto</a> <a${addAttribute(repoUrl, "href")} class="link-muted">Código</a> </div> </div>`;
}, "C:/Github/Portafolio/src/components/ui/ProjectCard.astro", void 0);

export { $$ProjectCard as $, PROJECT_TYPES as P, projects as p };
