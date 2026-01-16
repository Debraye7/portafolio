import { c as createComponent, d as createAstro, m as maybeRenderHead, f as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CCnU_o8r.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Section } from '../chunks/BaseLayout_CRUUUc0F.mjs';
import { c as contactMeans } from '../chunks/contact_Dur6YSvb.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$IconMapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IconMapPin;
  const {
    size = 24,
    class: className = "",
    ariaHidden = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")}${addAttribute(ariaHidden, "aria-hidden")} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> </svg>`;
}, "C:/Github/Portafolio/src/components/icons/IconMapPin.astro", void 0);

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Curr\xEDculum Vitae - Bryan Flores", "description": "Descarga el curr\xEDculum vitae de Bryan Flores, desarrollador web. Conoce su experiencia laboral, habilidades y formaci\xF3n acad\xE9mica." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "id": "cv", "spacing": "space-y-8" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-1"> <h1 class="font-bold text-2xl text-text-light-title dark:text-text-dark-title">Bryan Flores</h1> <p class="font-semibold text-base text-text-light-primary dark:text-text-dark-primary">Desarrollador Frontend Jr. enfocado en UI y Experiencia de Usuario</p> <div class="flex gap-2"> <p class="flex items-center font-semibold text-xs text-text-light-secondary dark:text-text-dark-secondary"> ${renderComponent($$result3, "IconMapPin", $$IconMapPin, { "class": "inline w-3 h-3" })}
CDMX, México
</p> ${contactMeans.map((mean) => renderTemplate`<a${addAttribute(mean.href, "href")} class="font-semibold text-xs"> ${mean.value} </a>`)} </div> <ul class="flex gap-1"></ul> </div> ` })} ` })}`;
}, "C:/Github/Portafolio/src/pages/cv.astro", void 0);

const $$file = "C:/Github/Portafolio/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
