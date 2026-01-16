import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_CCnU_o8r.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/BaseLayout_CRUUUc0F.mjs';
import { P as PROJECT_TYPES, p as projects, $ as $$ProjectCard } from '../chunks/ProjectCard__7RMgnvk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const { searchParams } = Astro2.url;
  const typeParam = searchParams.get("type");
  const validTypes = Object.values(PROJECT_TYPES).map((t) => t.value);
  const activeType = validTypes.includes(typeParam) ? typeParam : "all";
  const filteredProjects = activeType === "all" ? projects : projects.filter((p) => p.type === activeType);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bryan Flores | Desarrollador Frontend Jr.", "description": "Desarrollador Frontend Junior enfocado en UI y UX, con experiencia en React, TypeScript y Tailwind CSS." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "id": "projects" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-6 text-text-light-title dark:text-text-dark-title">
Proyectos
</h1> <p class="max-w-xl mb-8 text-text-light-secondary dark:text-text-dark-secondary">
Una selección completa de proyectos que reflejan mi experiencia,
      desde soluciones reales hasta demos técnicas y proyectos personales.
</p> <div class="flex flex-wrap gap-2 mb-10"> ${Object.values(PROJECT_TYPES).map((t) => renderTemplate`<a${addAttribute(`/projects?type=${t.value}`, "href")}${addAttribute(`badge-filter ${activeType === t.value ? "badge-filter-active" : ""}`, "class")}> ${t.label} </a>`)} </div> <div class="grid md:grid-cols-3 gap-8"> ${filteredProjects.length > 0 ? filteredProjects.map((project) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "img": project.img, "title": project.title, "description": project.description, "problem": project.problem, "tech": project.tech, "liveUrl": project.liveUrl, "repoUrl": project.repoUrl, "type": project.type })}`) : renderTemplate`<p class="text-center font-medium text-xs text-text-light-secondary dark:text-text-dark-secondary">
No hay proyectos para mostrar en esta categoría.
</p>`} </div> ` })} ` })}`;
}, "C:/Github/Portafolio/src/pages/projects.astro", void 0);

const $$file = "C:/Github/Portafolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
