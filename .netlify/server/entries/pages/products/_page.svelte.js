import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".row.svelte-tflqff{margin:3rem 0}.product__container.svelte-tflqff{margin:0 auto}.product__img.svelte-tflqff{height:20vh;margin-right:5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-80fqc6_START -->${$$result.title = `<title>Products 45b.io</title>`, ""}<!-- HEAD_svelte-80fqc6_END -->`, ""}



<div class="container"><h1 class="heading">Our products</h1>
  <hr>
  <br>
  <div class="product__container svelte-tflqff"><div class="row svelte-tflqff"><div class="col"><h2 class="sub-heading">Learn</h2>

              <ul class="list"><li class="list__item"><p class="paragraph">Onboarding for non-technical end users  
                    </p></li>
                <li class="list__item"><p class="paragraph">Personalized training for partners, corporations and communities 
                    </p></li></ul></div>
          <div class="col"><img src="learn__image.png" alt="learn icon" class="product__img svelte-tflqff"></div></div>
      <div class="row svelte-tflqff"><div class="col"><h2 class="sub-heading">Manage</h2>

              <ul class="list"><li class="list__item"><p class="paragraph">Onboarding for non-technical end users  
                    </p></li>
                <br>
                <li class="list__item"><p class="paragraph">Personalized training for partners, corporations and communities 
                    </p></li></ul></div>
          <div class="col"><img src="manage__image.png" alt="learn icon" class="product__img svelte-tflqff"></div></div>
      <div class="row svelte-tflqff"><div class="col"><h2 class="sub-heading">Build</h2>

              <ul class="list"><li class="list__item"><p class="paragraph">Create collections, communities and web3 websites.  
                    </p></li>
                <br>
                <li class="list__item"><p class="paragraph">Concierge service to help you manage the development processes.
                    </p></li></ul></div>
          <div class="col"><img src="build__image.png" alt="learn icon" class="product__img svelte-tflqff"></div></div></div></div>`;
});
export {
  Page as default
};
