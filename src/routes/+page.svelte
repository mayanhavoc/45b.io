<svelte:head>
	<title>45b.io - Embrace the blockchain</title>
</svelte:head>

<section class="hero">
	<img class="hero__img" src="hero__img.png" alt="hero image" />
	<div class="hero-headline">
		<h1 class="heading">Embrace the blockchain</h1>
		<div class="hero-btn">
			<button class="btn">
				<a href="#" class="item__link">Get in touch</a>
			</button>
		</div>
	</div>
</section>
<section class="container row">
	<img src="learn__image.png" alt="learn icon" class="hero__img" />
	<div>
		<h2 class="heading">Learn</h2>
		<p class="paragraph">
			No ID or expensive investments. Install a digital wallet and get $10 Ada or BTC in less than 5
			minutes
		</p>
	</div>
</section>
<section class="container row reverse">
	<img src="manage__image.png" alt="manage icon" class="hero__img" />
	<div class="align-end">
		<h2 class="heading heading--reverse">Manage</h2>
		<p class="paragraph paragraph--reverse">
			Learn how to manage your crypto portfolio, keep Ada in your balance sheets and accept accept
			payments in Ada
		</p>
	</div>
</section>
<section class="container row">
	<img src="build__image.png" alt="build icon" class="hero__img" />
	<div>
		<h2 class="heading">Build</h2>
		<p class="paragraph">
			Let us help you manage web3 projects. Create a website with web3 capabilities and integrate
			solutions through our partners.
		</p>
	</div>
</section>

<style>
	.hero {
		width: 80%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin: 0 auto;
		position: relative;
	}

	.hero-headline {
		display: flex;
		flex-direction: column;
	}

	.heading {
		text-align: center;
		margin: 2rem 0;
	}

	.hero-btn {
		display: block;
		align-self: center;
	}

	.hero__img {
		margin-top: 2rem;
		width: 100%;
		max-width: 200px;
		align-self: center;
	}

	@media (min-width: 280px) and (max-width: 359px) {
		.hero {
			height: 71vh;
			justify-content: center;
		}
	}

	@media (min-width: 390px) {
		.hero {
			height: 80vh;
			justify-content: center;
		}
	}

	@media (min-width: 768px) {
		.hero {
			flex-direction: row;
			justify-content: space-between;
		}

		.hero-headline {
			margin-top: 2rem;
			max-width: 50vw;
		}

		.hero-btn {
			margin: 0;
		}

		.hero__img {
			min-width: 40%;
		}
	}

	@media (min-width: 820px) {
		.hero {
			height: 90vh;
		}
	}

	@media (min-width: 912px) {
		.hero {
			height: 83vh;
		}
	}
</style>
