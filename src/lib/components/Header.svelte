<script>
    let navVisible = false;

    function toggleNav(){
        navVisible = !navVisible;
    }

    function closeNav(){
        setTimeout(() => {
            navVisible = false;
        }, 300)
    }
</script>

<style>

    header {
        padding: 1rem 0;
        position: fixed;
        background-color: var(--background-color);
        font-family: var(--primary-font);
        font-size: var(--x-small);
        text-align: center;
    }

    .nav__container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        color: var(--highlight-color);
    }

    .nav {
        visibility: hidden;
        height: 0;
        position: relative;
        z-index: 0;
    }

    .nav--visible {
        visibility: visible;
        height: auto;
        position: relative;
        transition: 0.5s ease-in-out;
        z-index: 1;
    }

    .logo {
        margin-right: 1em;
    }
    
    .nav__list {
      margin: 0 auto;
      padding: 1rem 0;
      list-style: none;
      gap: 1rem;
    }

    .nav__item {
        margin-top: 1rem;
    }
    
    .nav__link {
      text-decoration: none;
      color: var(--font-color);
    }

    .nav__link:hover,
    .nav__link:focus {
        opacity: 0.75;
    }

    .nav-toggle {
        cursor: pointer;
        border: 0;
        border-radius: 100%;
        width: 3rem;
        height: 3rem;
        padding: 0em;
        transition: opacity 250ms ease;
        position: absolute;
        left: 0;
        background: var(--font-color)
    }

    .nav-toggle:focus,
    .nav-toggle:hover {
        opacity: 0.75;
    }

    .hamburger {
        width: 50%;
        position: relative;
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
        display: block;
        margin: 0 auto;
        height: 3px;
        background: var(--background-color);
    }

    .hamburger::before,
    .hamburger::after {
        content: "";
        width: 100%;
    }

    .hamburger::before {
        transform: translateY(-6px);
    }

    .hamburger::after {
        transform: translateY(3px);
    }


    @media (min-width: 800px) { 
        header {
            width: 100%;
        }

        .nav-toggle {
            display:none;
        }

        .nav {
            visibility: visible;
            display: flex;
            align-items: center;
            position: relative;
            height: auto;
        }

        .nav__list {
            display: flex;
            margin: 0 auto;
        }

        .nav__item {
          margin: 0 0 0 1.5em;
        }
    
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
    }
</style>

<header>
  <div class="nav__container row">
      <button class="nav-toggle" aria-label="open navigation" on:click={toggleNav}>
          <span class="hamburger"></span>
      </button>
      <a class="logo" href="/">
        <img src="45b_logo.svg" alt="45B logo">
        </a>
      <nav class={navVisible ? 'nav--visible' : 'nav'}>
          <ul class="nav__list">
              <li class="nav__item">
                  <a href="/" class="nav__link" on:click={closeNav}>
                      Home
                  </a>
              </li>
              <li class="nav__item">
                  <a href="/about" class="nav__link" on:click={closeNav}>
                      About
                  </a>
              </li>
              <li class="nav__item">
                  <a href="/products" class="nav__link" on:click={closeNav}>
                      Products
                  </a>
              </li>
              <li class="nav__item">
                  <a href="/solutions" class="nav__link" on:click={closeNav}>
                      Solutions
                  </a>
              </li>
              <li class="nav__item">
                  <a href="/contact" class="nav__link" on:click={closeNav}>
                      Contact
                  </a>
              </li>
          </ul>
      </nav>
  </div>
</header>