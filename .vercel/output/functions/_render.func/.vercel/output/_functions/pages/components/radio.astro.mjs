/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, o as $$Radio$1, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Radio } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Radio } from 'free-astro-components'
---

<Radio label='Radio' />
`;
const statesCode = `
---
import { Radio } from 'free-astro-components'
---

<Radio label="Radio unselected" />
<Radio label="Radio selected" checked />
<Radio label="Radio unselected disabled" disabled />
<Radio label="Radio selected disabled" checked disabled />
<Radio label="Radio error" error />
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    { head: "Description", label: "The text label associated with the Radio." },
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
      label: "Disables the Radio."
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
      label: "Any other props will be passed to the <code>radio</code> element"
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Radio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Radio;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Radio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The radio component allows users to select one option from a set of
            choices. It supports various configurations and customization
            options.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the radio component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here’s how you can use the radio component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "RadioAc", $$Radio$1, { "label": "Radio" })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "States" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The component supports different states to indicate whether it is
            selected or unselected.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4"> ${renderComponent($$result8, "RadioAc", $$Radio$1, { "label": "Radio unselected" })} ${renderComponent($$result8, "RadioAc", $$Radio$1, { "label": "Radio selected", "checked": true })} ${renderComponent($$result8, "RadioAc", $$Radio$1, { "label": "Radio unselected disabled", "disabled": true })} ${renderComponent($$result8, "RadioAc", $$Radio$1, { "label": "Radio selected disabled", "checked": true, "disabled": true })} ${renderComponent($$result8, "RadioAc", $$Radio$1, { "label": "Radio error", "error": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": statesCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Accessibility</strong>: Ensure that the radio
                button can be toggled using keyboard interactions (e.g., Arrow
                keys for navigation and Space key for selection).
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>ARIA Attributes</strong>: Use <code>aria-checked</code> to
                indicate the state of the radio button and <code>aria-disabled</code> for the disabled state.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Labeling</strong>: Ensure that each radio button has a
                label associated with it for screen readers.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Radio" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/radio.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/radio.astro";
const $$url = "/components/radio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Radio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
