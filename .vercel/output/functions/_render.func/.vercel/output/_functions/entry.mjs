import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DQ4MJVBN.mjs';
import { manifest } from './manifest_NuU5JhK5.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/components/accordion.astro.mjs');
const _page2 = () => import('./pages/components/button.astro.mjs');
const _page3 = () => import('./pages/components/checkbox.astro.mjs');
const _page4 = () => import('./pages/components/icon.astro.mjs');
const _page5 = () => import('./pages/components/input.astro.mjs');
const _page6 = () => import('./pages/components/modal.astro.mjs');
const _page7 = () => import('./pages/components/radio.astro.mjs');
const _page8 = () => import('./pages/components/select.astro.mjs');
const _page9 = () => import('./pages/components/switch.astro.mjs');
const _page10 = () => import('./pages/components/tab.astro.mjs');
const _page11 = () => import('./pages/components/textarea.astro.mjs');
const _page12 = () => import('./pages/components/theme-switch.astro.mjs');
const _page13 = () => import('./pages/guide/colors.astro.mjs');
const _page14 = () => import('./pages/guide/customize-colors.astro.mjs');
const _page15 = () => import('./pages/guide/installation.astro.mjs');
const _page16 = () => import('./pages/resources/available-icons.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/components/accordion.astro", _page1],
    ["src/pages/components/button.astro", _page2],
    ["src/pages/components/checkbox.astro", _page3],
    ["src/pages/components/icon.astro", _page4],
    ["src/pages/components/input.astro", _page5],
    ["src/pages/components/modal.astro", _page6],
    ["src/pages/components/radio.astro", _page7],
    ["src/pages/components/select.astro", _page8],
    ["src/pages/components/switch.astro", _page9],
    ["src/pages/components/tab.astro", _page10],
    ["src/pages/components/textarea.astro", _page11],
    ["src/pages/components/theme-switch.astro", _page12],
    ["src/pages/guide/colors.astro", _page13],
    ["src/pages/guide/customize-colors.astro", _page14],
    ["src/pages/guide/installation.astro", _page15],
    ["src/pages/resources/available-icons.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "76efb143-4da2-465b-b3d3-8adb20c4957c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
