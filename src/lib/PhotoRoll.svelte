<script>
  import PhotoCard from '$lib/PhotoCard.svelte'

  export let photos = []
</script>

<section>
  {#each photos as photo}
    <PhotoCard {photo} />
  {/each}
</section>

<style>
  section {
    position: relative;
  }
</style>
