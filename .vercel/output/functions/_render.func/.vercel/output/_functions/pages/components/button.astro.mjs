/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, e as $$Button$1, b as $$Layout } from '../../chunks/Sidebar_CxOVtieV.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Button } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button' />
`;
const disabledCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button disabled' disabled />
`;
const sizesCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button small' size='small' />
<Button label='Button medium' size='medium' />
`;
const variantsCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button primary' variant='primary' />
<Button label='Button secondary' variant='secondary' />
<Button label='Button dark' variant='dark' />
<Button label='Button light' variant='light' />
`;
const withIconCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Button' icon='arrow-left' iconPosition='left' />
<Button label='Button' icon='arrow-right' iconPosition='right' />
`;
const iconOnlyCode = `
---
import { Button } from 'free-astro-components'
---

<Button icon='star' />
`;
const customVariablesCode = `
--ac-btn-border-radius
--ac-btn-font-weight
--ac-btn-gap
--ac-btn-icon-medium-size
--ac-btn-icon-small-size
--ac-btn-medium-font-size
--ac-btn-medium-height
--ac-btn-medium-icon-size
--ac-btn-medium-padding
--ac-btn-small-font-size
--ac-btn-small-height
--ac-btn-small-icon-size
--ac-btn-small-padding
`;
const customStylesCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Click me' class='custom-button' />

<style>
/* Example of custom button styles */
.custom-button {
  --ac-btn-border-radius: 999px;
  --ac-btn-font-weight: 600;
  border-width: 0;
  background-image: linear-gradient(
    90deg,
    rgb(var(--ac-primary)) 0%,
    rgb(var(--ac-secondary)) 100%
  );
}
</style>
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "label" },
    { head: "Type", label: "<code>string</code>" },
    { head: "Description", label: "The text displayed on the button" },
    { head: "Default", label: "-" }
  ],
  [
    {
      head: "Attribute",
      label: "size"
    },
    {
      head: "Type",
      label: "<code>small | medium</code>"
    },
    {
      head: "Description",
      label: "The size of the button"
    },
    {
      head: "Default",
      label: "<code>medium</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "variant"
    },
    {
      head: "Type",
      label: "<code>primary | secondary | dark | light</code>"
    },
    {
      head: "Description",
      label: "The visual variant of the button"
    },
    {
      head: "Default",
      label: "<code>primary</code>"
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
      label: 'The name of the icon to display on the button from the available <a href="/components/icon" class="text-primary hover:text-primary/90 hover:underline underline-offset-2 transition duration-300">icon list.</a>'
    },
    {
      head: "Default",
      label: "-"
    }
  ],
  [
    {
      head: "Attribute",
      label: "iconPosition"
    },
    {
      head: "Type",
      label: "<code>left | right</code>"
    },
    {
      head: "Description",
      label: "The position of the icon relative to the label"
    },
    {
      head: "Default",
      label: "<code>right</code>"
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
      label: "Any other props will be passed to the <code>button</code> element"
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Button", "data-astro-cid-ri5wi4ig": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result2, "Content", $$Content, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-ri5wi4ig> ${renderComponent($$result3, "Article", $$Article, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
The button component is a versatile UI element for triggering
            actions or navigating through your application. Below are the
            available configurations and usage examples.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
To use the button component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode, "data-astro-cid-ri5wi4ig": true })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
To button component can be easily added to your project. Below are
            various use cases.
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button", "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Disabled", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
To disable the button, use the <code data-astro-cid-ri5wi4ig>disabled</code> prop.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4" data-astro-cid-ri5wi4ig> ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button disabled", "disabled": true, "data-astro-cid-ri5wi4ig": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": disabledCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Sizes", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
The component supports two sizes: <code data-astro-cid-ri5wi4ig>medium</code> and <code data-astro-cid-ri5wi4ig>small</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4" data-astro-cid-ri5wi4ig> ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Buton small", "size": "small", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button medium", "size": "medium", "data-astro-cid-ri5wi4ig": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": sizesCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Variants", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
Choose from four visual variants to match different design contexts:
<code data-astro-cid-ri5wi4ig>'primary' | 'secondary' | 'dark' | 'light'</code>.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4" data-astro-cid-ri5wi4ig> ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button primary", "variant": "primary", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button secondary", "variant": "secondary", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button dark", "variant": "dark", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button light", "variant": "light", "data-astro-cid-ri5wi4ig": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": variantsCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "With Icon", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
You can add an icon to the button, either on the left or right side
            of the label.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4" data-astro-cid-ri5wi4ig> ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button", "icon": "arrow-left", "iconPosition": "left", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Button", "icon": "arrow-right", "iconPosition": "right", "data-astro-cid-ri5wi4ig": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": withIconCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Icon Only", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
For an icon-only button, omit the <code data-astro-cid-ri5wi4ig>label</code> prop.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4" data-astro-cid-ri5wi4ig> ${renderComponent($$result8, "ButtonAc", $$Button$1, { "icon": "star", "data-astro-cid-ri5wi4ig": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": iconOnlyCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Custom Styles", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
The button component offers various CSS variables that you can
            customize to match your design needs. Below are the available
            variables and an example of how to use them:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Available Variables", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "code": customVariablesCode, "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Example Customization", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate`
To customize the button styles, you can override these variables in
            your CSS:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4" data-astro-cid-ri5wi4ig> ${renderComponent($$result8, "ButtonAc", $$Button$1, { "label": "Custom button", "class": "custom-button", "data-astro-cid-ri5wi4ig": true })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": customStylesCode, "data-astro-cid-ri5wi4ig": true })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows, "data-astro-cid-ri5wi4ig": true })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility", "data-astro-cid-ri5wi4ig": true })} ${renderComponent($$result5, "List", $$List, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <strong data-astro-cid-ri5wi4ig>Keyboard Accessibility</strong>: Ensure that all buttons
                are reachable and operable using a keyboard. Focus should be
                clearly visible, and buttons should respond to keyboard events.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <strong data-astro-cid-ri5wi4ig>ARIA Attributes</strong>: Use appropriate ARIA roles and
                attributes to convey the button's purpose and state to assistive
                technologies.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, { "data-astro-cid-ri5wi4ig": true }, { "default": ($$result8) => renderTemplate` <strong data-astro-cid-ri5wi4ig>Visual Clarity</strong>: Buttons should have sufficient
                contrast against their background to be easily distinguishable.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Button", "data-astro-cid-ri5wi4ig": true })}` })} </section> ` })} ` })} `;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/button.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/button.astro";
const $$url = "/components/button";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Button,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
