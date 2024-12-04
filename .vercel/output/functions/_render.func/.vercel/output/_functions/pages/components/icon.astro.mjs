/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, i as $$Icon$1, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Link } from '../../chunks/Link_DDQGWXhr.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Icon } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Icon } from 'free-astro-components'
---

<Icon icon='star' class="icon-class" />

<style>
  .icon-class {
    width: 2rem;
    height: 2rem;
    color: rgb(64, 93, 255);
  }
<style>
`;
const customizationCode = `
---
import { Icon } from 'free-astro-components'
---

<Icon icon='star' class="icon-small" />
<Icon icon='star' class="icon-medium" />
<Icon icon='star' class="icon-large" />

<style>
  .icon-small {
    width: 1.5rem;
    height: 1.5rem;
    color: rgb(64, 93, 255);
  }

  .icon-medium {
    width: 2rem;
    height: 2rem;
    color: rgb(64, 93, 255);
  }

  .icon-large {
    width: 2.5rem;
    height: 2.5rem;
    color: rgb(64, 93, 255);
  }
<style>
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "icon" },
    { head: "Type", label: "<code>string</code>" },
    { head: "Description", label: "The name of the icon to display." },
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
      label: "CSS class to apply to the icon for defining size and color."
    },
    {
      head: "Default",
      label: "-"
    }
  ],
  [
    {
      head: "Attribute",
      label: "other"
    },
    {
      head: "Type",
      label: "<code>any</code>"
    },
    {
      head: "Description",
      label: "Any other props will be passed to the <code>svg</code> element of the icon."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Icon" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The icon component provides a consistent way to display icons
            throughout your Astro projects. It includes a set of predefined
            icons that you can style using CSS.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the icon component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here’s how you can use the icon component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To display an icon, you must use a CSS class to define the icon's
            size and color.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "IconAc", $$Icon$1, { "icon": "star", "class": "w-8 h-8 text-primary" })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
In this example, the <code>icon-class</code> should define the desired
            size and color for the icon.
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Customization" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Since the icon component relies on CSS for styling, you can use any
            CSS properties to style the icons. This includes size, color,
            margin, etc. Here's an example of a CSS class for customization:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4"> ${renderComponent($$result8, "IconAc", $$Icon$1, { "icon": "star", "class": "w-6 h-6 text-primary" })} ${renderComponent($$result8, "IconAc", $$Icon$1, { "icon": "star", "class": "w-8 h-8 text-primary" })} ${renderComponent($$result8, "IconAc", $$Icon$1, { "icon": "star", "class": "w-10 h-10 text-primary" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": customizationCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Labeling</strong>: Ensure each icon has an appropriate
                label for screen readers. Use the <code>aria-label</code> attribute
                to provide a description of the icon's purpose.
` })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Available Icons" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To view the list of all available icons that you can use with this
            component, please visit the ${renderComponent($$result6, "Link", $$Link, { "href": "/resources/available-icons" }, { "default": ($$result7) => renderTemplate`Available Icons` })}. There, you'll find a complete list of icons and examples of how
            to use them.
` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Icon" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/icon.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/icon.astro";
const $$url = "/components/icon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Icon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
