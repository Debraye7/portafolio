import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CCnU_o8r.mjs';
import 'piccolore';
import { a as $$Section, $ as $$BaseLayout } from '../chunks/BaseLayout_CRUUUc0F.mjs';
import 'clsx';
import { c as contactMeans } from '../chunks/contact_Dur6YSvb.mjs';
import { p as projects, P as PROJECT_TYPES, $ as $$ProjectCard } from '../chunks/ProjectCard__7RMgnvk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ContactMeans = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactMeans;
  const { style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(style, "class")}> ${contactMeans.map((mean) => renderTemplate`<li class="badge"> ${mean.value} </li>`)} </ul>`;
}, "C:/Github/Portafolio/src/components/ui/ContactMeans.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "hero" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col-reverse sm:flex-row sm:items-center gap-2 mb-3"> <span class="badge-status">Disponible</span> ${renderComponent($$result2, "ContactMeans", $$ContactMeans, { "style": "hidden sm:flex items-center gap-2" })} </div> <h1 class="text-4xl sm:text-5xl font-bold text-text-light-title dark:text-text-dark-title">
Desarrollador Frontend Jr. enfocado en UI y Experiencia de Usuario
</h1> <p class="text-lg sm:text-xl max-w-3xl text-text-light-primary dark:text-text-dark-primary">
Desarrollo interfaces modernas, eficientes y bien estructuradas,
    con especial atención al detalle visual, buenas prácticas y
    colaboración efectiva con equipos de producto en entornos profesionales.
</p> <div class="flex flex-wrap gap-4 pt-2"> <a href="#projects" class="btn-primary">
Ver proyectos
</a> <!-- <a href="/cv" class="btn-secondary">
      CV
    </a> --> </div> ` })}`;
}, "C:/Github/Portafolio/src/components/sections/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Stack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Stack;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "stack" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-3xl font-bold text-text-light-title dark:text-text-dark-title">
Stack tecnológico
</h2> <p class="max-w-xl text-text-light-primary dark:text-text-dark-primary">
Trabajo principalmente con un stack frontend moderno, enfocado en construir
    interfaces mantenibles, reutilizables y bien estructuradas.
</p> <div class="flex flex-col md:flex-row gap-10 pt-6"> <!-- Base --> <div> <h3 class="mb-3 font-semibold text-lg text-text-light-title dark:text-text-dark-title">
Básicos
</h3> <ul class="flex flex-wrap gap-3"> <li class="badge">HTML</li> <li class="badge">CSS</li> <li class="badge">JavaScript</li> </ul> </div> <!-- Principales --> <div> <h3 class="mb-3 font-semibold text-lg text-text-light-title dark:text-text-dark-title">
Principales
</h3> <ul class="flex flex-wrap gap-3"> <li class="badge-active">Tailwind CSS</li> <li class="badge-active">TypeScript</li> <li class="badge-active">React</li> <li class="badge-active">Next.js</li> </ul> </div> <!-- Otros --> <div> <h3 class="mb-3 font-semibold text-lg text-text-light-title dark:text-text-dark-title">
Otros
</h3> <ul class="flex flex-wrap gap-3"> <li class="badge">Astro</li> <li class="badge">Node.js</li> <li class="badge">MongoDB</li> <li class="badge">MySQL</li> </ul> </div> </div> ` })}`;
}, "C:/Github/Portafolio/src/components/sections/Stack.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const MAX_ITEMS = 3;
  const filteredProjects = projects.filter((project) => project.featured).slice(0, MAX_ITEMS);
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-6"> <h2 class="text-3xl font-bold text-text-light-title dark:text-text-dark-title">
Proyectos
</h2> <a href="/projects" class="link-muted text-sm">
Ver todos los proyectos -->
</a> </div> <p class="max-w-xl mb-6 text-text-light-secondary dark:text-text-dark-secondary">
Una selección de proyectos que reflejan mi experiencia práctica,
    enfoque en frontend y trabajo con requerimientos reales.
</p>  <div class="flex flex-wrap items-center gap-2 mb-8"> ${Object.values(PROJECT_TYPES).map((t) => renderTemplate`<a${addAttribute(`/projects?type=${t.value}`, "href")} class="badge-filter"> ${t.label} </a>`)} </div>  <div class="grid md:grid-cols-3 gap-8"> ${filteredProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "img": project.img, "title": project.title, "description": project.description, "problem": project.problem, "tech": project.tech, "liveUrl": project.liveUrl, "repoUrl": project.repoUrl, "type": project.type })}`)} </div> ` })}`;
}, "C:/Github/Portafolio/src/components/sections/Projects.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-3xl font-bold text-text-light-title dark:text-text-dark-title">
Sobre mí
</h2> <div class="space-y-4 leading-relaxed text-text-light-primary dark:text-text-dark-primary"> <p>
Soy Desarrollador Frontend Junior, con formación en Ingeniería en Sistemas
      Computacionales y experiencia práctica desarrollando soluciones de software
      en un entorno real de negocio.
</p> <p>
Inicié mi camino de forma autodidacta, lo que me permitió
      construir una base sólida desde etapas tempranas. Posteriormente, consolidé
      estos conocimientos a través de una formación universitaria formal.
</p> <p>
A nivel profesional, trabajé de manera autónoma en el diseño y desarrollo de
      un sistema interno orientado a centralizar procesos operativos, participando
      directamente en la definición de requerimientos, priorización de tareas y
      mejora continua de soluciones técnicas.
</p> <p>
En el desarrollo de interfaces priorizo una estructura clara desde el inicio,
      la legibilidad del código y la calidad visual del resultado. Me interesa
      especialmente el trabajo con UI y UX, entendiendo el frontend como el punto
      de conexión entre el producto y las personas que lo utilizan.
</p> <p>
Busco integrarme a un equipo profesional donde pueda seguir aprendiendo,
      aplicar buenas prácticas y crecer como desarrollador frontend a través del
      trabajo colaborativo.
</p> </div> ` })}`;
}, "C:/Github/Portafolio/src/components/sections/About.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-center text-3xl font-bold text-text-light-title dark:text-text-dark-title">
Contacto
</h2> <p class="text-center max-w-xl mx-auto text-text-light-primary dark:text-text-dark-primary">
Si te interesa mi perfil o quieres conocer más sobre mi trabajo,
    estaré encantado de conversar.
</p> <div class="flex justify-center"> ${renderComponent($$result2, "ContactMeans", $$ContactMeans, { "style": "flex flex-wrap items-center justify-center gap-2" })} </div> <div class="justify-self-center flex flex-wrap items-center justify-center gap-4 pt-4 w-fit"> <a href="mailto:tuemail@email.com" class="flex-1 btn-primary">
Enviar email
</a> <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" class="flex-1 btn-secondary">
LinkedIn
</a> <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" class="flex-1 btn-secondary">
GitHub
</a> </div> ` })}`;
}, "C:/Github/Portafolio/src/components/sections/Contact.astro", void 0);

const $$Astro = createAstro();
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const {
    role,
    company,
    period,
    description,
    responsibilities,
    tech
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-6 rounded-lg border border-dividers-light dark:border-dividers-dark bg-background-light-secondary dark:bg-background-dark-secondary space-y-4"> <div class="flex flex-wrap items-center justify-between"> <div> <h3 class="text-lg font-semibold text-text-light-title dark:text-text-dark-title"> ${role} </h3> <p class="text-sm text-text-light-secondary dark:text-text-dark-secondary"> ${company} </p> </div> <span class="text-xs text-text-light-secondary dark:text-text-dark-secondary"> ${period} </span> </div> <p class="text-text-light-primary dark:text-text-dark-primary"> ${description} </p> <ul class="list-disc list-inside text-sm space-y-1 text-text-light-secondary dark:text-text-dark-secondary"> ${responsibilities.map((item) => renderTemplate`<li>${item}</li>`)} </ul> <ul class="flex flex-wrap gap-1 pt-2"> ${tech.map((t) => renderTemplate`<li class="badge">${t}</li>`)} </ul> </div>`;
}, "C:/Github/Portafolio/src/components/ui/ExperienceCard.astro", void 0);

const experiences = [
  {
    role: "Desarrollador de Software Jr. / Responsable Tecnológico",
    company: "Neva",
    period: "2023 – 2025",
    description: "Desarrollo de un sistema interno orientado a centralizar y optimizar procesos operativos del negocio.",
    responsibilities: [
      "Diseño e implementación de interfaces frontend",
      "Trabajo directo con requerimientos reales de negocio",
      "Colaboración en priorización de tareas y mejoras",
      "Mantenimiento y evolución de funcionalidades existentes"
    ],
    tech: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  }
];

const $$ExperienceTimeline = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative space-y-10"> <!-- Línea vertical --> <span class="absolute left-3 top-0 h-full w-px bg-dividers-light dark:bg-dividers-dark"></span> ${experiences.map((exp) => renderTemplate`<div class="relative pl-10">  <span class="absolute left-1.5 top-8 w-3 h-3 rounded-full bg-accent-primary"></span> ${renderComponent($$result, "ExperienceCard", $$ExperienceCard, { "role": exp.role, "company": exp.company, "period": exp.period, "description": exp.description, "responsibilities": exp.responsibilities, "tech": exp.tech })} </div>`)} </div>`;
}, "C:/Github/Portafolio/src/components/ui/ExperienceTimeline.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "experience" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-3xl font-bold mb-6 text-text-light-title dark:text-text-dark-title">
Experiencia profesional
</h2> ${renderComponent($$result2, "ExperienceTimeline", $$ExperienceTimeline, {})} ` })}`;
}, "C:/Github/Portafolio/src/components/sections/Experience.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bryan Flores | Desarrollador Frontend Jr.", "description": "Desarrollador Frontend Junior enfocado en UI y UX, con experiencia en React, TypeScript y Tailwind CSS." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Stack", $$Stack, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Github/Portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Github/Portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
