/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, s as $$ThemeSwitch$1, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { ThemeSwitch } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { ThemeSwitch } from 'free-astro-components'
---

<ThemeSwitch label="Toggle theme" />
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The text label associated with the theme switch."
    },
    { head: "Default", label: "-" }
  ],
  [
    {
      head: "Attribute",
      label: "class"
    },
    {
      head: "Type",
      label: "<code>string</code>"
    },
    {
      head: "Description",
      label: "CSS class for custom styling."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$ThemeSwitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeSwitch;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - ThemeSwitch" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The ThemeSwitch component allows users to toggle between light and
            dark themes in your Astro project.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the ThemeSwitch component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here's how you can use the textarea component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To create a basic textarea field, use the following code:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "ThemeSwitchAc", $$ThemeSwitch$1, { "label": "Toggle theme" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Accessibility</strong>: Ensure the ThemeSwitch
                component can be toggled using keyboard interactions (e.g.,
                Enter key).
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "ThemeSwitch" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/theme-switch.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/theme-switch.astro";
const $$url = "/components/theme-switch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThemeSwitch,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
