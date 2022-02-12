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
 <!--  <div class="description">{photo.description}  <span>{photo.createdAt}</span></div> -->
</article>

<style>

  article {
    position: relative;
    
    color: orange;
  border: 1px solid orange;
  border-radius: 10px;
   max-width: 100%;
  margin-bottom: 2rem;
  }

  .title {
    position: absolute;
    top: 1rem;
    padding-left: 1rem;
    z-index: 90;
    background-color: black;
  }
  
 
  .image {
  
    padding-bottom: 110%;
    position: relative;
    
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    
  }
</style>
