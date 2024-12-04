/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab$1, d as $$TabItem, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Tab, TabItem } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Tab, TabItem } from 'free-astro-components'
---

<Tab
  tabs={[{ label: 'Tab 1', active: true }, { label: 'Tab 2' }]}
>
  <TabItem active>Content for Tab 1</TabItem>
  <TabItem>Content for Tab 2</TabItem>
</Tab>
`;
const tableTabHead = ["Attribute", "Type", "Description", "Default"];
const tableTabRows = [
  [
    { head: "Attribute", label: "tabs" },
    {
      head: "Type",
      label: "<code>{ label: string, active?: boolean }[]</code>"
    },
    {
      head: "Description",
      label: "An array of objects defining the tabs. Each object should have a <code>label</code> for the tab title and an optional <code>active</code> boolean to indicate the active tab."
    },
    {
      head: "Default",
      label: "<code>[{ label: 'tab 1', active: true }, { label: 'tab 2' }]</code>"
    }
  ],
  [
    { head: "Attribute", label: "children" },
    {
      head: "Type",
      label: "<code>TabItem | TabItem[]</code>"
    },
    {
      head: "Description",
      label: "The <code>TabItem</code> components that correspond to each tab."
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
const tableTabItemHead = ["Attribute", "Type", "Description", "Default"];
const tableTabItemRows = [
  [
    { head: "Attribute", label: "active" },
    { head: "Type", label: "<code>boolean</code>" },
    { head: "Description", label: "Indicates whether the tab is active." },
    { head: "Default", label: "<code>false</code>" }
  ],
  [
    { head: "Attribute", label: "children" },
    {
      head: "Type",
      label: "<code>any</code>"
    },
    {
      head: "Description",
      label: "The content to display when the tab is active."
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
const $$Tab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tab;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Tab" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The Tab component provides a way to organize content into different
            sections, each accessible through a tab. It includes the TabItem
            subcomponent for defining the content of each tab.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the Tab component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Here’s how you can use the Tab component in your Astro project:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The Tab component requires a <code>tabs</code> attribute to define the
            tab labels and their active state. Each tab is associated with a corresponding
<code>TabItem</code> component.
` })} ${renderComponent($$result5, "TabAc", $$Tab$1, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "TabAc", $$Tab$1, { "tabs": [{ label: "Tab 1", active: true }, { label: "Tab 2" }] }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "TabItem", $$TabItem, { "active": true }, { "default": ($$result10) => renderTemplate`Content for Tab 1` })} ${renderComponent($$result9, "TabItem", $$TabItem, {}, { "default": ($$result10) => renderTemplate`Content for Tab 2` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
In the above example, <code>Tab 1</code> is marked as active by setting
<code>active: true</code> in the tabs array, and the corresponding <code>TabItem</code> also has the
<code>active</code> attribute.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "Tab" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableTabHead, "rows": tableTabRows })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "TabItem" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableTabItemHead, "rows": tableTabItemRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Navigation</strong>: Ensure that the tab list
                is navigable using the keyboard. Users should be able to move
                focus between tabs using the arrow keys.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>ARIA Attributes</strong>: Use <code>aria-controls</code>
to link each tab with its corresponding panel and <code>aria-selected</code> to indicate the active tab.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Tab" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/tab.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/tab.astro";
const $$url = "/components/tab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tab,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
