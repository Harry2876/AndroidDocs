/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderComponent, d as renderSlot, b as createAstro } from '../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { a as $$Sidebar, $ as $$Header, e as $$Button, b as $$Layout } from '../chunks/Sidebar_C84z1cLN.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="fixed bottom-0 left-0 z-10 right-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent"> <div class="max-w-7xl w-full mx-auto text-center"> <p class="text-white max-w-full mb-4 w-full">
Crafted With ❤️ By Hariom Harsh
</p> <div class="flex justify-center space-x-6"> <a href="https://github.com/your-repo" class="text-white hover:text-white transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="https://linkedin.com/in/your-profile" class="text-white hover:text-white transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div></div></footer>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Particles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="animated-dots" data-astro-cid-kcjrzsbh> ', ' </div>  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" integrity="sha512-jq8sZI0I9Og0nnZ+CfJRnUzNSDKxr/5Bvha5bn7AHzTnRyxUfpUArMzfH++mwE/hb2efOo1gCAgI+1RMzf8F7g==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script> --> <!-- \n<script>\n  const dots = document.querySelectorAll(\'.dot\')\n\n  dots.forEach((dot) => {\n    dot.style.left = `${Math.random() * 100}vw`\n    dot.style.top = `${Math.random() * 100}vh`\n    dot.style.setProperty(\'--duration\', `${15 + Math.random() * 10}s`)\n  })\n<\/script> -->'], ["", '<div class="animated-dots" data-astro-cid-kcjrzsbh> ', ' </div>  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" integrity="sha512-jq8sZI0I9Og0nnZ+CfJRnUzNSDKxr/5Bvha5bn7AHzTnRyxUfpUArMzfH++mwE/hb2efOo1gCAgI+1RMzf8F7g==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script> --> <!-- \n<script>\n  const dots = document.querySelectorAll(\'.dot\')\n\n  dots.forEach((dot) => {\n    dot.style.left = \\`\\${Math.random() * 100}vw\\`\n    dot.style.top = \\`\\${Math.random() * 100}vh\\`\n    dot.style.setProperty(\'--duration\', \\`\\${15 + Math.random() * 10}s\\`)\n  })\n<\/script> -->'])), maybeRenderHead(), Array.from({ length: 100 }).map((_, i) => renderTemplate`<div class="dot"${addAttribute(`--delay: ${Math.random() * 4}s; --size: ${Math.random() * 4 + 2}px`, "style")} data-astro-cid-kcjrzsbh></div>`));
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Particles.astro", void 0);

const $$HeroBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute dark:opacity-20 inset-0 -z-10 h-full w-full
   bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> <div class="absolute invert dark:invert-0 animate-color transition-all -z-20 h-full w-full 
  bg-transparent [background:var(--theme-gradient)]"></div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/HeroBackground.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, description, align = "left" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-svh w-full text-neutral-700 overflow-clip"> <div class="relative flex items-center w-full h-full bg-gradient-to-b from-primary/5 via-primary/0 via-70% to-secondary/5 overflow-clip"> <!-- Background Components --> ${renderComponent($$result, "HeroGradientBg", $$HeroBackground, {})} ${renderComponent($$result, "Particle", $$Particles, {})} <!-- Content Section --> <div${addAttribute([
    "relative container w-full flex flex-col gap-16",
    align === "center" ? "text-center" : ""
  ], "class:list")}> <div class="flex flex-col items-center gap-8 w-full"> ${title && renderTemplate`<h1${addAttribute([
    "text-4xl sm:text-[7.5vw] md:text-[7vw] lg:text-[6vw] xl:text-[5vw] leading-none [&>strong]:font-medium",
    align === "center" ? "mx-auto" : ""
  ], "class:list")}> ${title} </h1>`} <div class="text-foreground text-center py-6 text-5xl font-medium tracking-normal sm:text-4xl md:text-6xl !leading-[1.15] w-full font-heading">
Elevate Development with
<span class="text-transparent animate-color bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] bg-clip-text inline-block">
Crafted Libraries
</span> </div> ${description && renderTemplate`<p class="text-neutral-500 text-center lg:text-lg">${description}</p>`} </div> <!-- Slot for Additional Content --> <div class="flex flex-col gap-4"> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </section>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/sections/Hero.astro", void 0);

const $$CodeSnippet = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-black/40 max-w-xl mx-auto backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-white"> <div class="flex items-center space-x-2 mb-2"> <div class="w-3 h-3 rounded-full bg-[red]"></div> <div class="w-3 h-3 rounded-full bg-[yellow]"></div> <div class="w-3 h-3 rounded-full bg-[green]"></div> </div> <pre class="text-sm"><code>implementation 'com.android.harry:android-library:1.0.0'</code></pre> </div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/CodeSnippet.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sidebar", $$Sidebar, { "class": "lg:hidden" })} ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "align": "center", "description": "You can use these components to build your Astro projects faster." }, { "default": ($$result3) => renderTemplate` <div> ${renderComponent($$result3, "Button", $$Button, { "href": "/guide/installation", "label": "Get started", "class": "bg-[#63e] animate-color" })} </div> <div> <!-- <Code code="npm install free-astro-components" /> --> ${renderComponent($$result3, "CodeSnippet", $$CodeSnippet, {})} </div>  ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/index.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
