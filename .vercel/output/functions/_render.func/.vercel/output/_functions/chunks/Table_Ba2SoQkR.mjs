import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, u as unescapeHTML, b as createAstro } from './astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Table = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Table;
  const {
    head = ["Name", "Age"],
    rows = [
      [
        { head: "Name", label: "John Doe" },
        { head: "Age", label: 30 }
      ],
      [
        { head: "Name", label: "Jane Doe" },
        { head: "Age", label: 25 }
      ]
    ]
  } = Astro2.props;
  const codeClasses = "[&>code]:inline-block [&>code]:h-fit [&>code]:bg-neutral-200/50 [&>code]:text-neutral-600 [&>code]:text-sm [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded";
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none rounded-lg p-px"> <table class="w-full bg-neutral-100/90 text-neutral-500 text-sm text-left rounded-lg overflow-hidden"> <thead class="hidden lg:table-header-group bg-neutral-200/50 border-b border-neutral-300/50"> <tr> ${head.map((item) => renderTemplate`<th class="text-neutral-700 font-medium p-4">${item}</th>`)} </tr> </thead> <tbody class="font-light divide-y divide-neutral-300/50"> ${rows.map((row) => renderTemplate`<tr> ${row.map((cell) => renderTemplate`<td${addAttribute(cell.head, "data-cell")}${addAttribute([
    'grid grid-cols-2 gap-4 lg:table-cell px-4 py-1.5 first:pt-5 last:pb-5 lg:py-3 before:content-[attr(data-cell)":"] lg:before:content-none before:text-neutral-700 before:font-medium'
  ], "class:list")}> <span${addAttribute(codeClasses, "class")}>${unescapeHTML(cell.label)}</span> </td>`)} </tr>`)} </tbody> </table> </div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Table.astro", void 0);

export { $$Table as $ };
