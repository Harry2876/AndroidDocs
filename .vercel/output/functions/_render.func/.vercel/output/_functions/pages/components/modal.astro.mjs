/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Sidebar, c as $$Tab, d as $$TabItem, e as $$Button, k as $$Modal$1, l as $$ModalHeader, m as $$ModalBody, n as $$ModalFooter, j as $$Input, b as $$Layout } from '../../chunks/Sidebar_C84z1cLN.mjs';
import { $ as $$Content, a as $$Article, b as $$Prose, c as $$Text, d as $$Heading, e as $$CodeBlock, f as $$List, g as $$ListItem } from '../../chunks/Text_ojr4Afgw.mjs';
import { $ as $$Preview } from '../../chunks/Preview_BXljXZGL.mjs';
import { $ as $$Table } from '../../chunks/Table_Ba2SoQkR.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const importCode = `
---
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---
`;
const basicUsageCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---

<Button label="Open Modal" data-modal-trigger="modal-id" />

<Modal id="modal-id">
  <ModalHeader>
    <h4>Modal Title</h4>
  </ModalHeader>
  <ModalBody>
    <p>
      This is the modal body. You can add any content here.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button label="Close" data-modal-close />
  </ModalFooter>
</Modal>
`;
const openModalExampleCode = `
---
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'free-astro-components'
---

<form id="example-form">
  <Input label="Name" placeholder="Enter your name" required />
  <Button type="submit" label="Submit" />
</form>

<Modal id="modal-example">
  <ModalHeader>
    <h3>Form Submitted Successfully</h3>
  </ModalHeader>
  <ModalBody>
    <p>Thank you for submitting the form. This modal will close automatically after a few seconds.</p>
  </ModalBody>
  <ModalFooter>
    <Button label="Close now" data-modal-close>
  </ModalFooter>
</Modal>

<script>
  import { openModal, closeModal } from 'free-astro-components';

  const form = document.querySelector('#example-form');
  const modal = document.querySelector('#modal-example');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    openModal(modal);

    setTimeout(() => {
      closeModal(modal)
    }, 3000);
  });
<\/script>
`;
const sizesCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'

const modalSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']
---

{
  modalSizes.map((size) => (
    <Button
      label={'Open' + size}
      data-modal-trigger={'modal-' + size}
    />
  ))
}

{
  modalSizes.map((size) => (
    <Modal id={'modal-' + size} size={size}>
      <ModalHeader>
        <Heading level={4} text={'Modal ' + size} />
      </ModalHeader>
      <ModalBody>
        <Text>
          This is the modal body. You can add any content here.
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button label="Close" data-modal-close />
      </ModalFooter>
    </Modal>
  ))
}
`;
const overflowScrollCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---

<Button label="Open Modal" data-modal-trigger="modal-overflow" />

<Modal id="modal-overflow">
  <ModalHeader>
    <h4>Modal Overflow</h4>
  </ModalHeader>
  <ModalBody>
    {
      Array.from({ length: 10 }).map((_) => (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Obcaecati tenetur voluptatibus vero similique
          alias ab odio commodi sint maiores facere voluptate
          nostrum atque magni, delectus perferendis laborum
          minima saepe asperiores.
        </p>
      ))
    }
  </ModalBody>
  <ModalFooter>
    <Button label="Close" data-modal-close />
  </ModalFooter>
</Modal>
`;
const customVariablesCode = `
--ac-modal-backdrop-color
--ac-modal-backdrop-filter
--ac-modal-background-color
--ac-modal-border-radius
--ac-modal-width-xs
--ac-modal-width-sm
--ac-modal-width-md
--ac-modal-width-lg
--ac-modal-width-xl
--ac-modal-width-2xl
--ac-modal-width-3xl
--ac-modal-width-4xl
`;
const customStylesCode = `
---
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'free-astro-components'
---

<Button label="Open Modal" data-modal-trigger="modal-custom" />

<Modal id="modal-custom" class="custom-modal">
  <ModalHeader>
    <h4>Custom Modal</h4>
  </ModalHeader>
  <ModalBody>
    <p>
      This is the modal body. You can add any content here.
    </p>
  </ModalBody>
  <ModalFooter>
    <Button label="Close" data-modal-close />
  </ModalFooter>
</Modal>

<style>
  .custom-modal {
    --ac-modal-border-radius: 0;
    --ac-modal-backdrop-filter: grayscale(100%);
  }
</style>
`;
const tableHead = ["Attribute", "Type", "Description", "Default"];
const tableRows = [
  [
    { head: "Attribute", label: "id" },
    { head: "Type", label: "<code>string</code>" },
    {
      head: "Description",
      label: "The unique identifier for the modal."
    },
    { head: "Default", label: "-" }
  ],
  [
    { head: "Attribute", label: "size" },
    {
      head: "Type",
      label: "<code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'</code>"
    },
    {
      head: "Description",
      label: "The size of the modal."
    },
    { head: "Default", label: "<code>md</code>" }
  ],
  [
    { head: "Attribute", label: "children" },
    {
      head: "Type",
      label: "<code>ModalHeader | ModalBody | ModalFooter | [ModalHeader, ModalBody, ModalFooter]</code>"
    },
    {
      head: "Description",
      label: "The content of the modal, including <code>ModalHeader</code>, <code>ModalBody</code>, and <code>ModalFooter</code> components."
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
const tableHeaderRows = [
  [
    { head: "Attribute", label: "children" },
    {
      head: "Type",
      label: "<code>any</code>"
    },
    {
      head: "Description",
      label: "The content of the header. Typically includes a title."
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
const tableBodyRows = [
  [
    { head: "Attribute", label: "children" },
    {
      head: "Type",
      label: "<code>any</code>"
    },
    {
      head: "Description",
      label: "The content of the body. Supports scrollable content."
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
const tableFooterRows = [
  [
    { head: "Attribute", label: "children" },
    {
      head: "Type",
      label: "<code>any</code>"
    },
    {
      head: "Description",
      label: "The content of the footer. Typically includes action buttons."
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
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Modal;
  const modalSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "full"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Free Astro Components - Modal" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${renderComponent($$result2, "Content", $$Content, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result3, "Article", $$Article, {}, { "default": ($$result4) => renderTemplate`  ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The Modal component provides a flexible way to display content in a
            dialog. It supports various sizes and customizable content through
            its child components.
` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Import" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the Modal component, first import it into your project:
` })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": importCode })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Usage" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To use the Modal, you need to pass an <code>id</code> to the component
            and include the <code>data-modal-trigger</code> attribute with the same
            id in the trigger element (e.g., a Button).
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Basic Usage" })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex flex-wrap gap-4"> ${renderComponent($$result8, "Button", $$Button, { "label": "Open Modal", "data-modal-trigger": "modal-id" })} </div> ${renderComponent($$result8, "ModalAc", $$Modal$1, { "id": "modal-id" }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "ModalHeader", $$ModalHeader, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Heading", $$Heading, { "level": 4, "text": "Modal Title" })} ` })} ${renderComponent($$result9, "ModalBody", $$ModalBody, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, {}, { "default": ($$result11) => renderTemplate`
This is the modal body. You can add any content here.
` })} ` })} ${renderComponent($$result9, "ModalFooter", $$ModalFooter, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Button", $$Button, { "label": "Close", "data-modal-close": true })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": basicUsageCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Programmatic Control" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
You can control the modal programmatically using the <code>openModal</code> and <code>closeModal</code> functions. Below is an example that combines
            both:
` })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate` <strong>Example: Open Modal on Form Submit and Close Automatically</strong> ` })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
This example demonstrates how to open a modal programmatically when
            a form is submitted and then automatically close it after a few
            seconds.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <form class="flex flex-col gap-6" id="example-form"> ${renderComponent($$result8, "Input", $$Input, { "label": "Name", "placeholder": "Enter your name", "required": true })} <div> ${renderComponent($$result8, "Button", $$Button, { "type": "submit", "label": "Submit" })} </div> </form> ${renderComponent($$result8, "ModalAc", $$Modal$1, { "id": "modal-example" }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "ModalHeader", $$ModalHeader, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Heading", $$Heading, { "level": 4, "text": "Form Submitted Successfully" })} ` })} ${renderComponent($$result9, "ModalBody", $$ModalBody, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, {}, { "default": ($$result11) => renderTemplate`
Thank you for submitting the form. This modal will close
                      automatically after a few seconds.
` })} ` })} ${renderComponent($$result9, "ModalFooter", $$ModalFooter, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Button", $$Button, { "label": "Close now", "data-modal-close": true })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": openModalExampleCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Sizes" })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex flex-wrap gap-4"> ${modalSizes.map((size) => renderTemplate`${renderComponent($$result8, "Button", $$Button, { "label": `Open ${size}`, "data-modal-trigger": `modal-${size}` })}`)} </div> ${modalSizes.map((size) => renderTemplate`${renderComponent($$result8, "ModalAc", $$Modal$1, { "id": `modal-${size}`, "size": size }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "ModalHeader", $$ModalHeader, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Heading", $$Heading, { "level": 4, "text": `Modal ${size}` })} ` })} ${renderComponent($$result9, "ModalBody", $$ModalBody, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, {}, { "default": ($$result11) => renderTemplate`
This is the modal body. You can add any content here.
` })} ` })} ${renderComponent($$result9, "ModalFooter", $$ModalFooter, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Button", $$Button, { "label": "Close", "data-modal-close": true })} ` })} ` })}`)}` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": sizesCode })} ` })} ` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Overflow scroll" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The <code>ModalBody</code> component is prepared to handle long content.
            It includes an overflow scroll to ensure that content can be scrolled
            within the modal if it exceeds the available space.
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex flex-wrap gap-4"> ${renderComponent($$result8, "Button", $$Button, { "label": "Open Modal", "data-modal-trigger": "modal-overflow" })} </div> ${renderComponent($$result8, "ModalAc", $$Modal$1, { "id": "modal-overflow" }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "ModalHeader", $$ModalHeader, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Heading", $$Heading, { "level": 4, "text": "Modal overflow" })} ` })} ${renderComponent($$result9, "ModalBody", $$ModalBody, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Prose", $$Prose, {}, { "default": ($$result11) => renderTemplate`${Array.from({ length: 10 }).map((_) => renderTemplate`${renderComponent($$result11, "Text", $$Text, {}, { "default": ($$result12) => renderTemplate`
Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati tenetur voluptatibus vero similique
                            alias ab odio commodi sint maiores facere voluptate
                            nostrum atque magni, delectus perferendis laborum
                            minima saepe asperiores.
` })}`)}` })} ` })} ${renderComponent($$result9, "ModalFooter", $$ModalFooter, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Button", $$Button, { "label": "Close", "data-modal-close": true })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": overflowScrollCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Custom Styles" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
The Modal component includes several customizable CSS variables,
            allowing you to tailor its appearance to fit your design needs:
` })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Available Variables" })} ${renderComponent($$result5, "CodeBlock", $$CodeBlock, { "lang": "css", "code": customVariablesCode })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 3, "text": "Example Customization" })} ${renderComponent($$result5, "Text", $$Text, {}, { "default": ($$result6) => renderTemplate`
To customize the Modal styles, you can override these variables in
            your CSS:
` })} ${renderComponent($$result5, "Tab", $$Tab, { "tabs": [{ label: "Preview", active: true }, { label: "Code" }] }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TabItem", $$TabItem, { "active": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Preview", $$Preview, {}, { "default": ($$result8) => renderTemplate` <div class="flex items-center flex-wrap gap-4"> ${renderComponent($$result8, "Button", $$Button, { "label": "Open Modal", "data-modal-trigger": "custom-modal" })} </div> ${renderComponent($$result8, "ModalAc", $$Modal$1, { "id": "custom-modal", "class": "custom-modal" }, { "default": ($$result9) => renderTemplate` ${renderComponent($$result9, "ModalHeader", $$ModalHeader, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Heading", $$Heading, { "level": 4, "text": "Custom Modal" })} ` })} ${renderComponent($$result9, "ModalBody", $$ModalBody, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Text", $$Text, {}, { "default": ($$result11) => renderTemplate`
This is the modal body. You can add any content here.
` })} ` })} ${renderComponent($$result9, "ModalFooter", $$ModalFooter, {}, { "default": ($$result10) => renderTemplate` ${renderComponent($$result10, "Button", $$Button, { "label": "Close", "data-modal-close": true })} ` })} ` })} ` })} ` })} ${renderComponent($$result6, "TabItem", $$TabItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "CodeBlock", $$CodeBlock, { "lang": "astro", "code": customStylesCode })} ` })} ` })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Props" })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "Modal" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableRows })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "ModalHeader" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableHeaderRows })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "ModalBody" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableBodyRows })} ${renderComponent($$result5, "Heading", $$Heading, { "level": 4, "text": "ModalFooter" })} ${renderComponent($$result5, "Table", $$Table, { "head": tableHead, "rows": tableFooterRows })} ` })} ${renderComponent($$result4, "Prose", $$Prose, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "level": 2, "text": "Accessibility" })} ${renderComponent($$result5, "List", $$List, {}, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Focus Management</strong>: Ensure that focus is trapped
                within the modal when it is open, and returned to the trigger
                element when closed.
` })} ` })} ${renderComponent($$result6, "ListItem", $$ListItem, {}, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Text", $$Text, {}, { "default": ($$result8) => renderTemplate` <strong>Keyboard Interactions</strong>: Allow users to close the
                modal with the <code>Esc</code> key and navigate interactive elements
                within the modal using the <code>Tab</code> key.
` })} ` })} ` })} ` })} `, "header": ($$result4) => renderTemplate`${renderComponent($$result4, "Heading", $$Heading, { "slot": "header", "level": 1, "gradient": true, "class": "inline-block", "text": "Modal" })}` })} </section> ` })} ` })}  `;
}, "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/modal.astro", void 0);

const $$file = "/Users/hariomharsh/Developer/Loader Docs/src/pages/components/modal.astro";
const $$url = "/components/modal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Modal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
