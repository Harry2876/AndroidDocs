/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, r as $$Textarea$1, b as $$Layout } from '../../chunks/Sidebar_CxOVtieV.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
import { $ as $$Link } from '../../chunks/Link_DDQGWXhr.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Textarea } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea label="Basic Textarea" placeholder="Enter your text..." />
`;
const disabledCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Disabled Textarea"
  placeholder="Disabled Textarea"
  disabled
/>
<Textarea
  label="Disabled Textarea"
  value="Disabled Textarea"
  placeholder="Disabled Textarea"
  disabled
/>
`;
const readonlyCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Readonly Textarea"
  value="This textarea is read-only"
  placeholder="This textarea is read-only"
  readonly
/>
`;
const withIconCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  icon="star"
  label="Textarea with icon"
  placeholder="Enter your text..."
/>
`;
const helperTextCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Textarea with Helper Text"
  placeholder="Enter your text..."
  helperText="This is some helper text."
/>
`;
const statusCode = `
---
import { Textarea } from 'free-astro-components'
---

<Textarea
  label="Default State"
  placeholder="Default state"
  status="default"
/>
<Textarea
  label="Success State"
  value="Success state"
  placeholder="Success state"
  status="success"
  helperText="This is a success message."
/>
<Textarea
  label="Error State"
  placeholder="Error state"
  status="error"
  helperText="This is an error message."
/>
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The text label associated with the textarea field."
    },
    { head: "Default", label: "-" }
  ],
  [
    { head: "Attribute", label: "placeholder" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The placeholder text for the textarea field."
    },
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
      label: "Whether the textarea field is disabled."
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
      label: "Whether the textarea field is read-only."
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
      label: "The icon to display in the textarea field, on the right side. The icon can be selected from a list of available icons."
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
      label: "The status of the textarea field."
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
      label: "Any other props will be passed to the <code>textarea</code> element."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Textarea;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Textarea" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The textarea component provides a multi-line text input field,
            allowing users to enter longer blocks of text. It supports various
            configurations and states, similar to the input component.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the textarea component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here's how you can use the textarea component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To create a basic textarea field, use the following code:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Basic Textarea", "placeholder": "Enter your text..." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Disabled" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To disable the textarea field, set the <code>disabled</code> prop to
<code>true</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Disabled Textarea", "placeholder": "Disabled Textarea", "disabled": true })} ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Disabled Textarea", "value": "Disabled Textarea", "placeholder": "Disabled Textarea", "disabled": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": disabledCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Readonly" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To make the textarea field read-only, set the <code>readonly</code> prop
            to <code>true</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Readonly Textarea", "value": "This textarea is read-only", "placeholder": "This textarea is read-only", "readonly": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": readonlyCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "With Icon" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can include an icon in the textarea field using the <code>icon</code> attribute. The icon will be displayed on the right side of the textarea.
            The icon can be selected from a ${renderComponent($$result6, "Link", $$Link, { "href": "/resources/available-icons" }, { "default": ($$result7) => renderTemplate`list of available icons` })}.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "icon": "star", "label": "Textarea with icon", "placeholder": "Enter your text..." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": withIconCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Helper Text" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can provide additional information using the <code>helperText</code> prop.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Textarea with Helper Text", "placeholder": "Enter your text...", "helperText": "This is some helper text." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": helperTextCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Status" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To indicate a specific state of the textarea field, use the <code>status</code> attribute. Possible values are <code>default</code>, <code>success</code>, and <code>error</code>. You can use <code>helperText</code> to provide
            additional context.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Default State", "placeholder": "Default state", "status": "default" })} ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Success State", "value": "Success state", "placeholder": "Success state", "status": "success", "helperText": "This is a success message." })} ${renderComponent($$result8, "TextareaAc", $$Textarea$1, { "label": "Error State", "placeholder": "Error state", "status": "error", "helperText": "This is an error message." })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": statusCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Accessibility</strong>: Ensure that the input
                field can be focused and used with the keyboard.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>ARIA Attributes</strong>: Use appropriate ARIA
                attributes to describe the state of the input, such as <code>aria-invalid</code> for error states.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Labeling</strong>: Provide clear labels for each input
                field to assist screen reader users.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Textarea" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/textarea.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/textarea.astro";
const $$url = "/components/textarea";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Textarea,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
