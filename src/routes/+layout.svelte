<script>
    import '$lib/styles/globals.css'
    import Header from '$lib/components/Header.svelte';
    import 'iconify-icon';
</script>


<Header />

<main>
    <slot />
</main>


<!-- {#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
</main>
{/key} -->
