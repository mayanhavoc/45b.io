import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-z2p5qu_START -->${$$result.title = `<title>Contact -</title>`, ""}<!-- HEAD_svelte-z2p5qu_END -->`, ""}

<div class="container"><h1 class="heading">Get in touch</h1>
    <hr>
    <br>
    <ul class="list"><li class="list__item"><a href="https://chat.whatsapp.com/GnhFsjDSY5SAXkvzfNHkzN" class="item__link"><p class="list__heading"><iconify-icon icon="logos:whatsapp-icon"></iconify-icon> Whatsapp</p></a></li>
        <li class="item"><a href="https://discord.com/invite/nXZJ24qaRZ" class="item__link"><p class="list__heading"><iconify-icon icon="logos:discord-icon"></iconify-icon> Discord</p></a></li>
        <li class="item"><a href="mailto:cardanost@gmail.com" class="item__link"><p class="list__heading"><iconify-icon icon="material-symbols:alternate-email"></iconify-icon> Email</p></a></li></ul></div>`;
});
export {
  Page as default
};
