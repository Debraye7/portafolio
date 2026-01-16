import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, j as renderSlot, r as renderTemplate, i as renderComponent, k as renderScript, l as renderHead } from './astro/server_CCnU_o8r.mjs';
import 'piccolore';
import 'clsx';
/* empty css                      */

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, spacing = "space-y-6" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="py-16 md:py-24"> <div${addAttribute(`container ${spacing}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Github/Portafolio/src/components/ui/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$IconTerminal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$IconTerminal;
  const {
    size = 24,
    class: className = "",
    ariaHidden = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")}${addAttribute(ariaHidden, "aria-hidden")} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 19h8"></path> <path d="m4 17 6-6-6-6"></path> </svg>`;
}, "C:/Github/Portafolio/src/components/icons/IconTerminal.astro", void 0);

const NAV_LINKS = [
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Acerca de mí" },
  { href: "#contact", label: "Contacto" }
];

const $$NavLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${NAV_LINKS.map((link) => renderTemplate`${maybeRenderHead()}<a${addAttribute(link.href, "href")} class="nav-link">${link.label}</a>`)}`;
}, "C:/Github/Portafolio/src/components/ui/NavLinks.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" role="dialog" aria-modal="true" class="
    fixed left-0 right-0 z-40 hidden
    top-(--header-height)
    h-[calc(100vh-var(--header-height))]
    bg-background-light-primary dark:bg-background-dark-primary
    opacity-0 translate-y-2
    transition-all duration-200 ease-out
    overflow-hidden
  "> <nav class="flex flex-col h-full gap-6 p-6 overflow-y-auto text-lg font-medium"> ${renderComponent($$result, "NavLinks", $$NavLinks, {})} </nav> </div>`;
}, "C:/Github/Portafolio/src/components/ui/Menu.astro", void 0);

const $$Astro$2 = createAstro();
const $$IconMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IconMenu;
  const {
    size = 24,
    class: className = "",
    ariaHidden = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")}${addAttribute(ariaHidden, "aria-hidden")}> <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg>`;
}, "C:/Github/Portafolio/src/components/icons/IconMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$IconX = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconX;
  const {
    size = 24,
    class: className = "",
    ariaHidden = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")}${addAttribute(ariaHidden, "aria-hidden")} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> </svg>`;
}, "C:/Github/Portafolio/src/components/icons/IconX.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center gap-4"> <div class="hidden sm:flex items-center gap-4"> ${renderComponent($$result, "NavLinks", $$NavLinks, {})} </div> <button id="menu-toggle" class="sm:hidden focus-visible:outline-2 focus-visible:outline-accent-primary hover:text-accent-hover transition-colors cursor-pointer" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"> ${renderComponent($$result, "IconMenu", $$IconMenu, { "class": "icon-menu w-6 h-6 transition-colors" })} ${renderComponent($$result, "IconX", $$IconX, { "class": "icon-close w-6 h-6 transition-colors hidden" })} </button> ${renderComponent($$result, "MobileMenu", $$Menu, {})} </nav> ${renderScript($$result, "C:/Github/Portafolio/src/components/ui/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Github/Portafolio/src/components/ui/Nav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="w-full transition-[background-color,backdrop-filter,transform,opacity] duration-300"> <div class="container flex items-center justify-between py-4"> <a href="/" class="flex items-center font-semibold text-xl text-text-light-title dark:text-text-dark-title hover:text-accent-primary transition-colors"> ${renderComponent($$result, "IconTerminal", $$IconTerminal, { "class": "w-6 h-6" })}
Bryan Flores
</a> ${renderComponent($$result, "Nav", $$Nav, {})} </div> </header> ${renderScript($$result, "C:/Github/Portafolio/src/components/ui/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Github/Portafolio/src/components/ui/Header.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Bryan Flores | Desarrollador Frontend Jr.",
    description = "Desarrollador Frontend Junior enfocado en UI, UX y buenas pr\xE1cticas, con experiencia en React, TypeScript y Tailwind CSS."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-background-light-primary dark:bg-background-dark-primary text-text-light-primary dark:text-text-dark-primary"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Github/Portafolio/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Section as a };
