/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, h as $$Checkbox$1, b as $$Layout } from '../../chunks/Sidebar_CxOVtieV.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Checkbox } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Checkbox } from 'free-astro-components'
---

<Checkbox label='Checkbox' />
`;
const statesCode = `
---
import { Checkbox } from 'free-astro-components'
---

<Checkbox label="Checkbox unchecked" />
<Checkbox label="Checkbox checked" checked />
<Checkbox label="Checkbox unchecked disabled" disabled />
<Checkbox label="Checkbox checked disabled" checked disabled />
<Checkbox label="Checkbox error" error />
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The text label associated with the checkbox."
    },
    { head: "Default", label: "-" }
  ],
  [
    {
      head: "Attribute",
      label: "checked"
    },
    {
      head: "Type",
      label: "<code>boolean</code>"
    },
    {
      head: "Description",
      label: "Applies a checked state if <code>true</code>."
    },
    {
      head: "Default",
      label: "<code>false</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "disabled"
    },
    {
      head: "Type",
      label: "<code>boolean</code>"
    },
    {
      head: "Description",
      label: "Disables the checkbox if <code>true</code>."
    },
    {
      head: "Default",
      label: "<code>false</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "error"
    },
    {
      head: "Type",
      label: "<code>boolean</code>"
    },
    {
      head: "Description",
      label: "Applies an error class if <code>true</code>. Useful for indicating validation errors."
    },
    {
      head: "Default",
      label: "<code>false</code>"
    }
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
      label: "Any other props will be passed to the <code>checkbox</code> element"
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkbox;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Checkbox" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The checkbox component allows users to select one or more options
            from a set of choices. It supports various configurations and
            customization options.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the checkbox component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here’s how you can use the checkbox component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "CheckboxAc", $$Checkbox$1, { "label": "Checkbox" })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "States" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The component supports different states to indicate whether it is
            checked or unchecked.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4"> ${renderComponent($$result8, "CheckboxAc", $$Checkbox$1, { "label": "Checkbox unchecked" })} ${renderComponent($$result8, "CheckboxAc", $$Checkbox$1, { "label": "Checkbox checked", "checked": true })} ${renderComponent($$result8, "CheckboxAc", $$Checkbox$1, { "label": "Checkbox unchecked disabled", "disabled": true })} ${renderComponent($$result8, "CheckboxAc", $$Checkbox$1, { "label": "Checkbox checked disabled", "checked": true, "disabled": true })} ${renderComponent($$result8, "CheckboxAc", $$Checkbox$1, { "label": "Checkbox error", "error": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": statesCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Accessibility</strong>: Ensure that the
                checkbox can be toggled using keyboard interactions (e.g., Space
                key).
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>ARIA Attributes</strong>: Use <code>aria-checked</code> to
                indicate the state of the checkbox and <code>aria-disabled</code> for the disabled state.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Labeling</strong>: Ensure that each checkbox has a label
                associated with it for screen readers.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Checkbox" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/checkbox.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/checkbox.astro";
const $$url = "/components/checkbox";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkbox,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
