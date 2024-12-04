/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, e as $$Button, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, d as $$Heading, c as $$Text, f as $$List, g as $$ListItem, e as $$CodeBlock } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Link } from '../../chunks/Link_DDQGWXhr.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Installation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Installation;
  const importComponentCode = `
---
import { Button } from 'free-astro-components'
---
`;
  const useComponentCode = `
---
import { Button } from 'free-astro-components'
---

<Button label='Click me' />
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Installation Guide" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Prerequisites" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Before you can start using the Free Astro Components, you need to
            have the following prerequisites installed on your machine:
` })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Node.js</strong>: Make sure you have Node.js installed.
                You can download it from ${renderComponent($$result8, "Link", $$Link, { "href": "https://nodejs.org/", "target": "_blank" }, { "default": ($$result9) => renderTemplate`Node.js` })}.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Astro</strong>: Your project should be set up with
                Astro. You can follow the ${renderComponent($$result8, "Link", $$Link, { "href": "https://docs.astro.build/en/getting-started/", "target": "_blank" }, { "default": ($$result9) => renderTemplate`Astro documentation` })} to get started.
` })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Installing the Components" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "1. Install the Package" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the Free Astro Components, you need to install the package
            via npm. Run the following command in your project directory:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "frame": "terminal", "lang": "bash", "code": "npm install free-astro-components" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "2. Import the Components" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Once the package is installed, you can import the components you
            need into your Astro pages or components. For example:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importComponentCode })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "3. Use the Components" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
After importing, you can use the components in your project. Here's
            an example of how to use a Button component:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4"> ${renderComponent($$result8, "Button", $$Button, { "label": "Click me" })} </div> ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": useComponentCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Additional Information" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Support</strong>: If you encounter any issues or have
                questions, feel free to open an issue on our ${renderComponent($$result8, "Link", $$Link, { "href": "https://github.com/denv17/free-astro-components", "target": "_blank" }, { "default": ($$result9) => renderTemplate`GitHub repository.` })} ` })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Next Steps" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
Now that you have the components installed, you can start
            integrating them into your project. Check out the ${renderComponent($$result6, "Link", $$Link, { "href": "/components/button" }, { "default": ($$result7) => renderTemplate`Component Guide` })} for detailed information on how to use each component.
` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Installation Guide" })}` })} </section> ` })} ` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/guide/installation.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/guide/installation.astro";
const $$url = "/guide/installation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Installation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
