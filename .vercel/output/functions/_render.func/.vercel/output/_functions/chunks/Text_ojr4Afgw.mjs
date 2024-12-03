import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, e as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment, a as addAttribute, s as spreadAttributes } from './astro/server_Ds4EK5TR.mjs';
import 'kleur/colors';
import 'clsx';
import { addClassName, toHtml } from 'rehype-expressive-code/hast';
/* empty css                             */

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-start divide-y divide-neutral-300/50"> <header class="w-full py-8"> ${renderSlot($$result, $$slots["header"])} </header> <div class="flex flex-col gap-12 lg:gap-16 w-full py-8"> ${renderSlot($$result, $$slots["default"])} </div> </article>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Article.astro", void 0);

const pageDataMap = /* @__PURE__ */ new Map();
function getPageData(request) {
  let data = pageDataMap.get(request);
  if (!data) {
    data = {
      url: request.url,
      blockGroupIndex: -1
    };
    pageDataMap.set(request, data);
  }
  return data;
}

let cachedRenderer = void 0;
async function getRenderer() {
  if (!cachedRenderer) {
    cachedRenderer = createRenderer();
  }
  return await cachedRenderer;
}
async function createRenderer() {
  const { astroConfig, ecConfigFileOptions, ecIntegrationOptions = {} } = await import('./config_C68c__Uy.mjs');
  const { createAstroRenderer } = await import('./index_DaVK51eC.mjs');
  const strIntegrationOptions = JSON.stringify(ecIntegrationOptions);
  if (strIntegrationOptions.includes('"[Function]"') || strIntegrationOptions.includes("'[Circular]'")) {
    throw new Error(
      `Your Astro config file contains Expressive Code options that are not serializable to JSON.
			To use the \`<Code>\` component, please create a separate config file called \`ec.config.mjs\`
			in your project root, move your Expressive Code options object into the config file,
			and export it as the default export.`.replace(/\s+/g, " ")
    );
  }
  let mergedEcConfig = { ...ecConfigFileOptions, ...ecIntegrationOptions };
  try {
    const { default: preprocessEcConfig } = await import('./preprocess-config_ZwO-SzyF.mjs');
    mergedEcConfig = await preprocessEcConfig({ ecConfig: mergedEcConfig, astroConfig }) || mergedEcConfig;
  } catch (error) {
    const msg = error instanceof Error ? error.message : error;
    throw new Error(`Failed to preprocess Expressive Code config for the Code component: ${msg}`, { cause: error });
  }
  return await createAstroRenderer({
    astroConfig,
    ecConfig: mergedEcConfig
  });
}

const $$Astro$3 = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Code;
  function formatMessage(...messageParts) {
    return messageParts.map((part) => part.replace(/\s+/g, " ")).join("\n\n");
  }
  async function renderToHtml() {
    const defaultSlotContent = await Astro2.slots.render("default");
    if (defaultSlotContent?.trim().length) {
      throw new Error(
        formatMessage(
          `Unsupported child content was found inside the component.
				The code to render must be passed to the \`code\` prop as a string.`,
          `Please remove the following child content:
${defaultSlotContent}`
        )
      );
    }
    let { code, lang = "", meta = "", locale, class: className, ...props } = Astro2.props;
    if (!code || !code.trim().length) {
      throw new Error("Missing code to render. The `code` prop must be set to a non-empty string.");
    }
    const pageData = getPageData(Astro2.request);
    const groupIndex = ++pageData.blockGroupIndex;
    const renderer = await getRenderer();
    const { renderedGroupAst } = await renderer.ec.render({
      code,
      language: lang,
      meta,
      locale,
      parentDocument: {
        positionInDocument: {
          groupIndex
        }
      },
      props
    });
    if (renderedGroupAst?.type === "element") {
      if (className) {
        const classNames = className.split(" ");
        classNames.forEach((className2) => addClassName(renderedGroupAst, className2));
      }
    }
    return toHtml(renderedGroupAst);
  }
  let html = "";
  try {
    html = await renderToHtml();
  } catch (err) {
    const prefix = `Failed to render a \`<Code>\` component on page ${Astro2.request.url}:`;
    const error = err instanceof Error ? err : new Error(String(err));
    throw new Error(`${prefix}

${error.message}`, { cause: error });
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/hariomharsh/Developer/Loader Docs/node_modules/astro-expressive-code/components/Code.astro", void 0);

const Code = $$Code;

const $$Astro$2 = createAstro();
const $$CodeBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CodeBlock;
  const { frame, title, lang, code } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none rounded-lg p-px"> <div class="bg-neutral-100/90 text-neutral-500 rounded-lg overflow-clip"> ${renderComponent($$result, "Code", Code, { "frame": frame, "title": title, "lang": lang, "code": code })} </div> </div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/CodeBlock.astro", void 0);

const $$ContentGradient = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-[15%] right-0 w-1/3 translate-x-1/2 -translate-y-1/3 xl:-translate-y-2/3 aspect-square"> <div class="w-full h-full bg-primary/30 rounded-full blur-2.5xl sm:blur-3xl md:blur-4xl lg:blur-5xl xl:blur-6xl animate-move-circle-reverse"></div> </div> <div class="fixed top-0 right-[15%] w-1/3 translate-x-1/2 -translate-y-1/3 xl:-translate-y-3/4 aspect-square"> <div class="w-full h-full bg-secondary/25 rounded-full blur-2.5xl sm:blur-3xl md:blur-4xl lg:blur-5xl xl:blur-6xl animate-move-circle"></div> </div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/ContentGradient.astro", void 0);

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="relative min-h-dvh lg:pl-72 pt-16"> ${renderComponent($$result, "ContentGradient", $$ContentGradient, {})} <div class="relative w-full max-w-3xl mx-auto p-6"> ${renderSlot($$result, $$slots["default"])} </div> </main>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/layouts/Content.astro", void 0);

const $$Astro$1 = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const { level = 2, text, gradient, class: className, ...props } = Astro2.props;
  const levelClasses = {
    1: "text-4xl lg:text-5xl",
    2: "text-3xl lg:text-4xl",
    3: "text-2xl lg:text-3xl",
    4: "text-xl lg:text-2xl",
    5: "text-lg lg:text-xl",
    6: "text-base lg:text-lg"
  }[level];
  const gradientClasses = gradient ? "bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" : "";
  const headingClasses = [levelClasses, gradientClasses, className].filter(Boolean).join(" ");
  return renderTemplate`${level === 1 && renderTemplate`${maybeRenderHead()}<h1${addAttribute(headingClasses, "class")}${spreadAttributes(props)}>${text}</h1>`}${level === 2 && renderTemplate`<h2${addAttribute(headingClasses, "class")}${spreadAttributes(props)}>${text}</h2>`}${level === 3 && renderTemplate`<h3${addAttribute(headingClasses, "class")}${spreadAttributes(props)}>${text}</h3>`}${level === 4 && renderTemplate`<h4${addAttribute(headingClasses, "class")}${spreadAttributes(props)}>${text}</h4>`}${level === 5 && renderTemplate`<h5${addAttribute(headingClasses, "class")}${spreadAttributes(props)}>${text}</h5>`}${level === 6 && renderTemplate`<h6${addAttribute(headingClasses, "class")}${spreadAttributes(props)}>${text}</h6>`}`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Heading.astro", void 0);

const $$List = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col gap-2 list-disc marker:text-neutral-500/100 pl-4"> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/List.astro", void 0);

const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li> ${renderSlot($$result, $$slots["default"])} </li>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/ListItem.astro", void 0);

const $$Prose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Prose.astro", void 0);

const $$Astro = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Text;
  const { class: className, ...props } = Astro2.props;
  const strongClasses = "[&>strong]:text-neutral-700 [&>strong]:font-medium";
  const codeClasses = "[&>code]:inline-block [&>code]:h-fit [&>code]:bg-neutral-200/50 [&>code]:text-neutral-600 [&>code]:text-sm [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded";
  return renderTemplate`${maybeRenderHead()}<p${addAttribute([
    "text-neutral-500 leading-relaxed",
    strongClasses,
    codeClasses,
    className
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/hariomharsh/Developer/Loader Docs/src/components/Text.astro", void 0);

export { $$Content as $, $$Article as a, $$Prose as b, $$Text as c, $$Heading as d, $$CodeBlock as e, $$List as f, $$ListItem as g };
