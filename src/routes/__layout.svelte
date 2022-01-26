<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header  />

<main >
  <slot />
</main>

<Footer />

<style>
  

main {
    background-color: black;
    margin-top: 6rem;
    padding: 1rem ;
  }
</style>
