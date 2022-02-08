<script>
  import SanityImage from './SanityImage.svelte'

  export let photo
</script>

<article>
  <div class="title">{photo.title}</div>
  {#if photo.image}
    <div class="image">
      <SanityImage image={photo.image}  />
    </div>
  {/if}
  <div class="description">{photo.description} <!-- <span>{photo.createdAt}</span>--></div>
</article>

<style>

  article {
    text-align: center;
    color: whitesmoke;
   padding-bottom: 2rem;
   max-width: 90%;
  }

  .title {
    font-size: larger;
    color:rgb(255, 187, 0);
  }

  .description{
    font-size: smaller;
  }
 
  .image {
   
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    
  }
</style>
