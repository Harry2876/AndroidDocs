/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$CustomizeColors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CustomizeColors;
  const customBaseColors = `
:root {
  --ac-primary: 48, 220, 128; /* New primary color */
  --ac-secondary: 213, 98, 251; /* New secondary color */
  --ac-dark: 33, 33, 33; /* New dark color */
  --ac-gray-100: 240, 240, 240; /* New light gray */
  --ac-gray-200: 200, 200, 200; /* New medium gray */
  --ac-gray-300: 160, 160, 160; /* New dark gray */
  --ac-success: 0, 200, 0; /* New success color */
  --ac-warning: 255, 220, 0; /* New warning color */
  --ac-danger: 255, 50, 50; /* New danger color */
}
`;
  const customLightColors = `
.light,
:root,
[data-theme='light'] {
  color-scheme: light;
  --ac-color-100: var(--ac-white);
  --ac-color-200: var(--ac-gray-100);
  --ac-color-300: var(--ac-gray-200);
  --ac-color-400: var(--ac-gray-300);
  --ac-color-500: var(--ac-gray-400);
  --ac-color-600: var(--ac-gray-500);
  --ac-color-700: var(--ac-dark);
}
`;
  const customDarkColors = `
.dark,
[data-theme='dark'] {
  color-scheme: dark;
  --ac-color-100: var(--ac-dark);
  --ac-color-200: var(--ac-gray-500);
  --ac-color-300: var(--ac-gray-400);
  --ac-color-400: var(--ac-gray-300);
  --ac-color-500: var(--ac-gray-200);
  --ac-color-600: var(--ac-gray-100);
  --ac-color-700: var(--ac-white);
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Customize Colors" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
This section explains how to customize the color variables to fit
            your project's visual identity. You can adjust the colors by
            modifying the CSS variables used throughout the project.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Customization Example" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "Base Colors" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can change the base colors by updating the following variables
            in your main stylesheet:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "title": "css", "code": customBaseColors })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "Customized Color Modes" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can adjust the colors for both light and dark modes by modifying
            the corresponding variables in your stylesheet:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Customized Light Mode" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "title": "css", "code": customLightColors })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Customized Dark Mode" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "title": "css", "code": customDarkColors })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Tips" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Consistency</strong>: Use these colors consistently to
                maintain a cohesive visual experience.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Contrast</strong>: Ensure that text and interactive
                elements are clearly visible and accessible.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Accessibility</strong>: Verify that the chosen colors
                are accessible to all users, including those with visual
                impairments.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Customize Colors" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/guide/customize-colors.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/guide/customize-colors.astro";
const $$url = "/guide/customize-colors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CustomizeColors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
