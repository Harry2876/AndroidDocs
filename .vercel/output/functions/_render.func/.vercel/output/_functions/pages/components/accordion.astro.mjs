/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, f as $$Accordion$1, g as $$AccordionItem, b as $$Layout } from '../../chunks/Sidebar_CxOVtieV.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const variantLightCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='light'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const variantShadowCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='shadow'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const variantBorderedCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='bordered'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const variantSplittedCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion variant='splitted'>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const openCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion>
  <AccordionItem title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 2" open>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const interactionCode = `
---
import { Accordion, AccordionItem } from 'free-astro-components'
---

<Accordion>
  <AccordionItem name="accordion-example" title="Accordion 1">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem name="accordion-example" title="Accordion 2">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
  <AccordionItem name="accordion-example" title="Accordion 3">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Quidem asperiores, ut, atque non inventore, fugit sed
      totam explicabo quisquam itaque omnis eius eveniet rem vel
      pariatur. Alias, expedita ratione! Animi.
    </p>
  </AccordionItem>
</Accordion>
`;
const customVariablesCode = `
--ac-accordion-background-color
--ac-accordion-border-color
--ac-accordion-border-width
--ac-accordion-rounded
--ac-accordion-spacing
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    {
      head: "Attribute",
      label: "variant"
    },
    {
      head: "Type",
      label: "<code>light | shadow | bordered | splitted</code>"
    },
    {
      head: "Description",
      label: "The visual variant of the accordion"
    },
    {
      head: "Default",
      label: "<code>light</code>"
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
      label: "children"
    },
    {
      head: "Type",
      label: "<code>AccordionItem | AccordionItem[]</code>"
    },
    {
      head: "Description",
      label: "The <code>AccordionItem</code> components contained within the accordion."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];
const tableItemRows = [
  [
    {
      head: "Attribute",
      label: "title"
    },
    {
      head: "Type",
      label: "<code>string</code>"
    },
    {
      head: "Description",
      label: "The title displayed in the accordion header."
    },
    {
      head: "Default",
      label: "-"
    }
  ],
  [
    {
      head: "Attribute",
      label: "open"
    },
    {
      head: "Type",
      label: "<code>boolean</code>"
    },
    {
      head: "Description",
      label: "Indicates whether the accordion should be open initially."
    },
    {
      head: "Default",
      label: "<code>false</code>"
    }
  ],
  [
    {
      head: "Attribute",
      label: "name"
    },
    {
      head: "Type",
      label: "<code>string</code>"
    },
    {
      head: "Description",
      label: "Optional name to identify the accordion and allow them to interact with each other."
    },
    {
      head: "Default",
      label: "-"
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
      label: "children"
    },
    {
      head: "Type",
      label: "<code>any</code>"
    },
    {
      head: "Description",
      label: "The content displayed when the accordion is open."
    },
    {
      head: "Default",
      label: "-"
    }
  ]
];

const $$Astro = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Accordion", "data-astro-cid-xsbippcz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-xsbippcz": true })} ${renderComponent($$result2, "Sidebar", $$Sidebar, { "data-astro-cid-xsbippcz": true })} ${renderComponent($$result2, "Content", $$Content, { "data-astro-cid-xsbippcz": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-xsbippcz> ${renderComponent($$result3, "Article", $$Article, { "data-astro-cid-xsbippcz": true }, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-xsbippcz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
The Accordion component is a flexible container that organizes
            expandable content items. It can be used to group multiple
            AccordionItem components and offers various style variants.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-xsbippcz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
To use the Accordion component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode, "data-astro-cid-xsbippcz": true })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-xsbippcz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
The Accordion component consists of an Accordion container and
            AccordionItem children. The AccordionItem component is used to
            define each expandable content item within the Accordion container.
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 2", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Variants", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
Accordion has 4 variants: <code data-astro-cid-xsbippcz>light</code>, <code data-astro-cid-xsbippcz>shadow</code>, <code data-astro-cid-xsbippcz>bordered</code> and <code data-astro-cid-xsbippcz>splitted</code>.
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 5, "text": "Light variant", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "variant": "light", "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 2", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": variantLightCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 5, "text": "Shadow variant", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "variant": "shadow", "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 2", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": variantShadowCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 5, "text": "Bordered variant", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "variant": "bordered", "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 2", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": variantBorderedCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 5, "text": "Splitted variant", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "variant": "splitted", "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 2", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": variantSplittedCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Default expanded", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
You can set the default expanded item by passing the <code data-astro-cid-xsbippcz>open</code> prop to the AccordionItem component.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 2", "open": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": openCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Interaction between AccordionItems", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
The <code data-astro-cid-xsbippcz>name</code> attribute in the <code data-astro-cid-xsbippcz>AccordionItem</code> component
            allows the items to interact with each other. For example, if multiple
<code data-astro-cid-xsbippcz>AccordionItem</code>
components share the same <code data-astro-cid-xsbippcz>name</code> value, opening one will automatically
            close the others, creating mutually exclusive behavior.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }], "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true, "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "AccordionAc", $$Accordion$1, { "data-astro-cid-xsbippcz": true }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "name": "accordion-example", "title": "Accordion 1", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "name": "accordion-example", "title": "Accordion 2", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ${renderComponent($$result9, "AccordionItem", $$AccordionItem, { "name": "accordion-example", "title": "Accordion 3", "data-astro-cid-xsbippcz": true }, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result11) => renderTemplate`
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem asperiores, ut, atque non inventore, fugit sed
                      totam explicabo quisquam itaque omnis eius eveniet rem vel
                      pariatur. Alias, expedita ratione! Animi.
` })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": interactionCode, "data-astro-cid-xsbippcz": true })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-xsbippcz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Custom Styles", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
You can customize the styles of both components using CSS variables
            defined within the component. These variables include:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Available Variables", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "code": customVariablesCode, "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate`
These styles allow you to adapt the appearance of the accordion and
            its items to suit your project's needs.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-xsbippcz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Accordion", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows, "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "AccordionItem", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableItemRows, "data-astro-cid-xsbippcz": true })} ` })} ${renderComponent($$result4, "Prose", $$Prose, { "data-astro-cid-xsbippcz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility", "data-astro-cid-xsbippcz": true })} ${renderComponent($$result5, "List", $$List, { "data-astro-cid-xsbippcz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` <strong data-astro-cid-xsbippcz>Keyboard Navigation</strong>: Ensure that users can
                navigate the accordion using the keyboard. The <code data-astro-cid-xsbippcz>summary</code> element should be focusable, and pressing the <code data-astro-cid-xsbippcz>Enter</code> or <code data-astro-cid-xsbippcz>Space</code> key should toggle the expanded state of the
<code data-astro-cid-xsbippcz>AccordionItem</code>.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` <strong data-astro-cid-xsbippcz>Focus Management</strong>: When an accordion item is
                expanded, focus should be managed to ensure that the content
                inside the <code data-astro-cid-xsbippcz>AccordionItem</code> is accessible. Ensure that
                tabbing through the accordion leads to expected behavior.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, { "data-astro-cid-xsbippcz": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, { "data-astro-cid-xsbippcz": true }, { "default": ($$result8) => renderTemplate` <strong data-astro-cid-xsbippcz>Semantic HTML</strong>: The use of <code data-astro-cid-xsbippcz>details</code>
and <code data-astro-cid-xsbippcz>summary</code>
elements provides inherent accessibility benefits, as these elements
                are recognized by screen readers and provide the expected behavior.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Accordion", "data-astro-cid-xsbippcz": true })}` })} </section> ` })} ` })} `;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/accordion.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/accordion.astro";
const $$url = "/components/accordion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Accordion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
