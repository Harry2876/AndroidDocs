import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, d as renderSlot, b as createAstro } from './astro/server_Ds4EK5TR.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, target, class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "text-primary hover:text-primary/90 hover:underline underline-offset-2 transition duration-300",
    className
  ], "class:list")}${addAttribute(href, "href")}${addAttribute(target, "target")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Link.astro", void 0);

export { $$Link as $ };
