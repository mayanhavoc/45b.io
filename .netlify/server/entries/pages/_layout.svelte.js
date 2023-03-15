import { c as create_ssr_component, e as escape, b as null_to_empty, v as validate_component } from "../../chunks/index.js";
import "iconify-icon";
const globals = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: 'header.svelte-yxcgxw{padding:1rem 0;position:fixed;background-color:var(--background-color);font-family:var(--primary-font);font-size:var(--x-small);text-align:center}.nav__container.svelte-yxcgxw{width:90%;max-width:1200px;margin:0 auto;position:relative;color:var(--highlight-color)}.nav.svelte-yxcgxw{visibility:hidden;height:0;position:relative;z-index:0}.nav--visible.svelte-yxcgxw{visibility:visible;height:auto;position:relative;transition:0.5s ease-in-out;z-index:1}.logo.svelte-yxcgxw{margin-right:1em}.nav__list.svelte-yxcgxw{margin:0 auto;padding:1rem 0;list-style:none;gap:1rem}.nav__item.svelte-yxcgxw{margin-top:1rem}.nav__link.svelte-yxcgxw{text-decoration:none;color:var(--font-color)}.nav__link.svelte-yxcgxw:hover,.nav__link.svelte-yxcgxw:focus{opacity:0.75}.nav-toggle.svelte-yxcgxw{cursor:pointer;border:0;border-radius:100%;width:3rem;height:3rem;padding:0em;transition:opacity 250ms ease;position:absolute;left:0;background:var(--font-color)\n    }.nav-toggle.svelte-yxcgxw:focus,.nav-toggle.svelte-yxcgxw:hover{opacity:0.75}.hamburger.svelte-yxcgxw{width:50%;position:relative}.hamburger.svelte-yxcgxw,.hamburger.svelte-yxcgxw::before,.hamburger.svelte-yxcgxw::after{display:block;margin:0 auto;height:3px;background:var(--background-color)}.hamburger.svelte-yxcgxw::before,.hamburger.svelte-yxcgxw::after{content:"";width:100%}.hamburger.svelte-yxcgxw::before{transform:translateY(-6px)}.hamburger.svelte-yxcgxw::after{transform:translateY(3px)}@media(min-width: 800px){header.svelte-yxcgxw{width:100%}.nav-toggle.svelte-yxcgxw{display:none}.nav.svelte-yxcgxw{visibility:visible;display:flex;align-items:center;position:relative;height:auto}.nav__list.svelte-yxcgxw{display:flex;margin:0 auto}.nav__item.svelte-yxcgxw{margin:0 0 0 1.5em}.row.svelte-yxcgxw{display:flex;justify-content:space-between;align-items:center}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-yxcgxw"><div class="nav__container row svelte-yxcgxw"><button class="nav-toggle svelte-yxcgxw" aria-label="open navigation"><span class="hamburger svelte-yxcgxw"></span></button>
      <a class="logo svelte-yxcgxw" href="/"><img src="45b_logo.svg" alt="45B logo"></a>
      <nav class="${escape(null_to_empty("nav"), true) + " svelte-yxcgxw"}"><ul class="nav__list svelte-yxcgxw"><li class="nav__item svelte-yxcgxw"><a href="/" class="nav__link svelte-yxcgxw">Home
                  </a></li>
              <li class="nav__item svelte-yxcgxw"><a href="/about" class="nav__link svelte-yxcgxw">About
                  </a></li>
              <li class="nav__item svelte-yxcgxw"><a href="/products" class="nav__link svelte-yxcgxw">Products
                  </a></li>
              <li class="nav__item svelte-yxcgxw"><a href="/solutions" class="nav__link svelte-yxcgxw">Solutions
                  </a></li>
              <li class="nav__item svelte-yxcgxw"><a href="/contact" class="nav__link svelte-yxcgxw">Contact
                  </a></li></ul></nav></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>


`;
});
export {
  Layout as default
};
