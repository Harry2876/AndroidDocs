import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import 'clsx';

const $$Preview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none rounded-lg p-px"> <div class="bg-neutral-100/90 text-neutral-500 rounded-lg p-5"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Preview.astro", void 0);

export { $$Preview as $ };
