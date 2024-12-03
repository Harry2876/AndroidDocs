/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, p as $$Select$1, b as $$Layout } from '../../chunks/Sidebar_CxOVtieV.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Select } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Select an option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  placeholder="Choose an option"
/>
`;
const disabledCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Disabled Select"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  disabled
  placeholder="Cannot select"
/>
<Select
  label="Disabled Select"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: '3', label: 'Option 3' },
  ]}
  disabled
  placeholder="Cannot select"
/>
`;
const helperTextCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Select with Helper Text"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]}
  helperText="Choose an option from the list."
  placeholder="Choose an option"
/>
`;
const statusCode = `
---
import { Select } from 'free-astro-components'
---

<Select
  label="Default State"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  status="default"
  placeholder="Select an option"
/>
<Select
  label="Success State"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
  ]}
  status="success"
  helperText="Selection successful."
  placeholder="Select an option"
/>
<Select
  label="Error State"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  status="error"
  helperText="There was an error with your selection."
  placeholder="Select an option"
/>
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The text label associated with the select field."
    },
    { head: "Default", label: "-" }
  ],
  [
    { head: "Attribute", label: "options" },
    {
      head: "Type",
      label: "<code>{ value: string, label: string, selected?: boolean }[]</code>"
    },
    {
      head: "Description",
      label: "The list of options available for selection. The selected property indicates the pre-selected option."
    },
    {
      head: "Default",
      label: "<code>[{ value: '1', label: 'Option 1' },{ value: '2', label: 'Option 2' },{ value: '3', label: 'Option 3' },]</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "placeholder"
    },
    {
      head: "Type",
      label: "<code>string</code>"
    },
    {
      head: "Description",
      label: "A placeholder text displayed when no option is selected."
    },
    {
      head: "Default",
      label: "-"
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
      label: "Whether the select field is disabled."
    },
    {
      head: "Default",
      label: "<code>false</code>"
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
      label: "The status of the select field."
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
      label: "Any other props will be passed to the select element."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Select" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The select component allows users to choose from a dropdown list of
            options. It supports various configurations and customization
            options, including disabled states, helper text, and custom styles.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the select component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here’s how you can use the select component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To create a basic dropdown select field, use the following code:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Select an option", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" }
  ], "placeholder": "Choose an option" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Disabled" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To disable the select field, set the <code>disabled</code> prop to <code>true</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Disabled Select", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" }
  ], "disabled": true, "placeholder": "Cannot select" })} ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Disabled Select", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2", selected: true },
    { value: "3", label: "Option 3" }
  ], "disabled": true, "placeholder": "Cannot select" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": disabledCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Helper Text" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can provide additional information using the <code>helperText</code> prop.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Select with Helper Text", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" }
  ], "helperText": "Choose an option from the list.", "placeholder": "Choose an option" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": helperTextCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Status" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To indicate a specific state of the select field, use the <code>status</code> attribute. Possible values are <code>default</code>, <code>success</code>, and <code>error</code>. You can use <code>helperText</code> to provide
            additional context.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Default State", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ], "status": "default", "placeholder": "Select an option" })} ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Success State", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2", selected: true }
  ], "status": "success", "helperText": "Selection successful.", "placeholder": "Select an option" })} ${renderComponent($$result8, "SelectAc", $$Select$1, { "label": "Error State", "options": [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ], "status": "error", "helperText": "There was an error with your selection.", "placeholder": "Select an option" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": statusCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Accessibility</strong>: Ensure that users can
                navigate and interact with the select options using the
                keyboard.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>ARIA Attributes</strong>: Use appropriate ARIA
                attributes such as <code>aria-expanded</code> to indicate the dropdown
                state and <code>aria-selected</code> for selected options.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Labeling</strong>: Provide clear labels for each select
                field to assist screen reader users.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Select" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/select.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/select.astro";
const $$url = "/components/select";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Select,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
