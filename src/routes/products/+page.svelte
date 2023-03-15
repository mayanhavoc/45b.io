<svelte:head>
  <title>Products 45b.io</title>
</svelte:head>

<style>
    .row {
        margin: 3rem 0;
    }

    .product__container {
        margin: 0 auto;
    }

    .product__img {
        height: 20vh;
        margin-right: 5em;
    }

    .col-left {
        max-width: 60%;
    }
</style>

<div class="container">
  <h1 class="heading">Our products</h1>
  <hr>
  <br>
  <div class="product__container">
      <div class="row">
          <div class="col">
              <h2 class="sub-heading">Learn</h2>

              <ul class="list">
                <li class="list__item">
                    <p class="paragraph">
                        Onboarding for non-technical end users  
                    </p>
                </li>
                <li class="list__item">
                    <p class="paragraph">
                        Personalized training for partners, corporations and communities 
                    </p>
                </li>
              </ul>
          </div>
          <div class="col">
              <img src="learn__image.png" alt="learn icon" class="product__img">
          </div>
      </div>
      <div class="row">
          <div class="col">
              <h2 class="sub-heading">Manage</h2>

              <ul class="list">
                <li class="list__item">
                    <p class="paragraph">
                        Onboarding for non-technical end users  
                    </p>
                </li>
                <br>
                <li class="list__item">
                    <p class="paragraph">
                        Personalized training for partners, corporations and communities 
                    </p>
                </li>
              </ul>
          </div>
          <div class="col">
              <img src="manage__image.png" alt="learn icon" class="product__img">
          </div>
      </div>
      <div class="row">
          <div class="col">
              <h2 class="sub-heading">Build</h2>

              <ul class="list">
                <li class="list__item">
                    <p class="paragraph">
                        Create collections, communities and web3 websites.  
                    </p>
                </li>
                <br>
                <li class="list__item">
                    <p class="paragraph">
                        Concierge service to help you manage the development processes.
                    </p>
                </li>
              </ul>
          </div>
          <div class="col">
              <img src="build__image.png" alt="learn icon" class="product__img">
          </div>
      </div>
  </div>
</div>