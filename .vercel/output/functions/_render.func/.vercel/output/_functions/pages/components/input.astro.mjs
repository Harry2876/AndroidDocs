/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, j as $$Input$1, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Link } from '../../chunks/Link_DDQGWXhr.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Input } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Input } from 'free-astro-components'
---

<Input label="Basic input" placeholder="Enter text..." />
`;
const disabledCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Disabled Input"
  placeholder="Disabled input"
  disabled
/>
<Input
  label="Disabled Input"
  value="Disabled input"
  placeholder="Disabled input"
  disabled
/>
`;
const readonlyCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Readonly Input"
  value="Readonly Input"
  readonly
/>
`;
const searchCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Search"
  placeholder="Search..."
  type="search"
/>
`;
const passwordCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Password"
  placeholder="Password..."
  type="password"
/>
`;
const helperTextCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Input with Helper Text"
  placeholder="Enter text..."
  helperText="This is some helper text."
/>
`;
const withIconCode = `
---
import { Input } from 'free-astro-components'
---
<Input
  icon="star"
  label="Input with Icon"
  placeholder="Enter text..."
/>
`;
const statusCode = `
---
import { Input } from 'free-astro-components'
---

<Input
  label="Default State"
  placeholder="Default state"
  status="default"
  helperText="This is some helper text."
/>
<Input
  label="Success State"
  value="Success state"
  placeholder="Success state"
  status="success"
  helperText="This is a success message."
/>
<Input
  label="Error State"
  placeholder="Error state"
  status="error"
  helperText="This is an error message."
/>
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "type" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The type of the input (text, search, password, etc.)."
    },
    { head: "Default", label: "text" }
  ],
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The text label associated with the input field."
    },
    { head: "Default", label: "-" }
  ],
  [
    { head: "Attribute", label: "placeholder" },
    { head: "Type", label: "<code>string</code>" },
    { head: "Description", label: "The placeholder text for the input field." },
    { head: "Default", label: "-" }
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
      label: "Disables the input field."
    },
    {
      head: "Default",
      label: "<code>false</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "readonly"
    },
    {
      head: "Type",
      label: "<code>boolean</code>"
    },
    {
      head: "Description",
      label: "Makes the input field read-only."
    },
    {
      head: "Default",
      label: "<code>false</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "icon"
    },
    {
      head: "Type",
      label: "<code>string</code>"
    },
    {
      head: "Description",
      label: "The icon to display in the input field, on the right side. The icon can be selected from a list of available icons."
    },
    {
      head: "Default",
      label: "-"
    }
  ],
  [
    {
      head: "Attribute",
      label: "helperText"
    },
    {
      head: "Type",
      label: "<code>string</code>"
    },
    {
      head: "Description",
      label: "Additional text to assist the user."
    },
    {
      head: "Default",
      label: "-"
    }
  ],
  [
    {
      head: "Attribute",
      label: "status"
    },
    {
      head: "Type",
      label: "<code>default | success | error</code>"
    },
    {
      head: "Description",
      label: "The status of the input field."
    },
    {
      head: "Default",
      label: "<code>default</code>"
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
      label: "Any other props will be passed to the <code>input</code> element."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Input;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Input" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The input component is a versatile input field that supports various
            configurations and states. It can be used for standard text inputs,
            search fields, password inputs, and more.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the input component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here’s how you can use the input component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate` To create a basic input field, use the following code: ` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Basic input", "placeholder": "Enter text..." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Disabled" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To disable the input field, set the <code>disabled</code> prop to <code>true</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Disabled Input", "placeholder": "Disabled input", "disabled": true })} ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Disabled Input", "value": "Disabled input", "placeholder": "Disabled input", "disabled": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": disabledCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Readonly" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To make the input field readonly, set the <code>readonly</code> prop
            to <code>true</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Readonly Input", "value": "Readonly Input", "readonly": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": readonlyCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Search" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To style the input field as a search input, set the <code>type</code> prop to <code>search</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Search", "placeholder": "Search...", "type": "search" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": searchCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Password" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the input field for passwords, set the <code>type</code> prop
            to <code>password</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Password", "placeholder": "Password...", "type": "password" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": passwordCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "With Icon" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can include an icon in the input field using the <code>icon</code> attribute. The icon will be displayed on the right side of the input
            field. The icon can be selected from a ${renderComponent($$result6, "Link", $$Link, { "href": "/resources/available-icons" }, { "default": ($$result7) => renderTemplate`list of available icons` })}.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "icon": "star", "label": "Input with Icon", "placeholder": "Enter text..." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": withIconCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Helper Text" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can provide additional information using the <code>helperText</code> prop.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Input with Helper Text", "placeholder": "Enter text...", "helperText": "This is some helper text." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": helperTextCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Status" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To indicate a specific state of the input field, use the <code>status</code> attribute. Possible values are <code>default</code>, <code>success</code>, and <code>error</code>. You can use <code>helperText</code> to provide
            additional context.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Default State", "placeholder": "Default state", "status": "default", "helperText": "This is some helper text." })} ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Success State", "value": "Success state", "placeholder": "Success state", "status": "success", "helperText": "This is a success message." })} ${renderComponent($$result8, "InputAc", $$Input$1, { "label": "Error State", "placeholder": "Error state", "status": "error", "helperText": "This is an error message." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": statusCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Accessibility</strong>: Ensure that the input
                field can be focused and used with the keyboard.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>ARIA Attributes</strong>: Use appropriate ARIA
                attributes to describe the state of the input, such as <code>aria-invalid</code> for error states.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Labeling</strong>: Provide clear labels for each input
                field to assist screen reader users.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Input" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/input.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/input.astro";
const $$url = "/components/input";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Input,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
