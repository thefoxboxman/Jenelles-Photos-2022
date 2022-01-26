<script>
  import SanityImage from './SanityImage.svelte'

  export let photo
</script>

<article>
 
  {#if photo.image}
    <div class="image">
      <SanityImage image={photo.image} maxWidth={300} />
    </div>
  {/if}
</article>

<style>
  

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>
