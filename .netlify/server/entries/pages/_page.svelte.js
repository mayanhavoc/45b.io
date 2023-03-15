import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-1jgtiib{width:80%;max-width:1100px;display:flex;justify-content:space-between;align-items:center;margin:0 auto;padding:100px 0;position:relative}.hero__img.svelte-1jgtiib{width:32%;align-self:flex-start}.align-end.svelte-1jgtiib{display:flex;flex-direction:column;justify-content:end;align-items:end;text-align:end}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ypov8x_START -->${$$result.title = `<title>45b.io - Embrace the blockchain</title>`, ""}<!-- HEAD_svelte-1ypov8x_END -->`, ""}



<section class="hero svelte-1jgtiib"><div><h1 class="heading">Embrace the blockchain</h1>
            <a href="#" class="btn">Get started</a></div>
        <img src="hero__img.png" alt="hero image"></section>
<section class="container row"><div><h2 class="heading">Learn</h2>
        <p class="paragraph">No ID or expensive investments. Install a digital wallet and get $10 Ada or BTC in less than 5 minutes</p></div>
    <img src="learn__image.png" alt="learn icon" class="hero__img svelte-1jgtiib"></section>
<section class="container row"><img src="manage__image.png" alt="manage icon" class="hero__img svelte-1jgtiib">
    <div class="align-end svelte-1jgtiib"><h2 class="heading">Manage</h2>
        <p class="paragraph">Learn how to manage your crypto portfolio, keep Ada in your balance sheets and accept accept payments in Ada</p></div></section>
<section class="container row"><div><h2 class="heading">Build</h2>
        <p class="paragraph">Let us help you manage web3 projects. Create a website with web3 capabilities and integrate solutions through our partners.</p></div>
    <img src="build__image.png" alt="build icon" class="hero__img svelte-1jgtiib"></section>`;
});
export {
  Page as default
};
