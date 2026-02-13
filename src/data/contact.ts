import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import IconGithub from "../components/icons/IconGithub.astro";
import IconLinkedin from "../components/icons/IconLinkedin.astro";
import IconMail from "../components/icons/IconMail.astro";
import IconSmartphone from "../components/icons/IconSmartphone.astro";

export interface ContactItem {
  Icon: AstroComponentFactory;
  label: string;
  href?: string;
}

export const email:ContactItem = {
  Icon: IconMail,
  label: "Bryan_Flores7@outlook.com",
  href: "mailto:bryan_flores7@outlook.com"
};
export const phoneNumber = {
  Icon: IconSmartphone,
  label: "+52 55 7910 1562",
  href: "tel:+525579101562"
}
export const linkedin = {
  Icon: IconLinkedin,
  label: "LinkedIn · bryanflores-dev",
  href: "https://www.linkedin.com/in/bryanflores-dev"
};
export const github = {
  Icon: IconGithub,
  label: "GitHub · Debraye7",
  href: "https://github.com/Debraye7",
};