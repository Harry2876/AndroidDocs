/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Colors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Colors;
  const colorVariables = `
:root {
  --ac-transparent: transparent;
  --ac-current: currentColor;
  --ac-white: 255, 255, 255;
  --ac-primary: #30dc80;
  --ac-secondary: 98, 251, 213;
  --ac-dark: 22, 22, 22;
  --ac-gray-100: 232, 232, 232;
  --ac-gray-200: 185, 185, 185;
  --ac-gray-300: 139, 139, 139;
  --ac-gray-400: 92, 92, 92;
  --ac-gray-500: 45, 45, 45;
  --ac-success: 0, 255, 0;
  --ac-warning: 255, 255, 0;
  --ac-danger: 255, 0, 0;
}
`;
  const lightModeVariables = `
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
  const darkModeVariables = `
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
  const examplesCodes = `
body {
  background-color: rgb(var(--ac-color-100));
  color: rgb(var(--ac-color-700));
}

.card {
  background-color: rgb(var(--ac-color-200));
  border: 1px solid rgb(var(--ac-color-300));
}

.button {
  background-color: rgb(var(--ac-primary));
  color: rgb(var(--ac-white));
}
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Colors" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
This section describes the CSS variables that define the color
            palette used in the components. It also explains how light and dark
            modes are implemented to enhance user experience.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Color Variables" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Base Variables" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
These variables are used to define primary, secondary, dark, and
            neutral colors. They are applied consistently across the project to
            maintain a coherent visual identity.
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "Variables" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "code": colorVariables })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Color Modes" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To enhance user experience, we use light and dark color modes that
            adjust automatically based on user preferences or system settings.
            This is achieved using specific classes and data attributes to
            determine the current theme.
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Light Mode" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "code": lightModeVariables })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Description</strong>: In light mode, we use lighter
                colors for backgrounds and primary elements, while text and
                prominent elements are darker.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Color Variables</strong>: Variables <code>--ac-color-100</code> to <code>--ac-color-700</code> are mapped to lighter colors, ending
                with <code>--ac-dark</code> for text and important elements.
` })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Dark Mode" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "code": darkModeVariables })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Description</strong>: In dark mode, we use darker colors
                for backgrounds and lighter colors for text and highlighted
                elements, reducing visual fatigue in low-light environments.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Color Variables</strong>: Variables <code>--ac-color-100</code> to <code>--ac-color-700</code> are inverted compared to light mode,
                starting with <code>--ac-dark</code> and ending with <code>--ac-white</code> for text and important elements.
` })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage Examples" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "General Styles" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "title": "css", "code": examplesCodes })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Colors" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/guide/colors.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/guide/colors.astro";
const $$url = "/guide/colors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Colors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
