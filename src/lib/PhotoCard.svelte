<script>
  import SanityImage from './SanityImage.svelte'

  export let photo
</script>

<article>
 
  {#if photo.image}
    <div class="image">
      <SanityImage image={photo.image}  />
    </div>
  {/if}
  <div class="title">{photo.title}</div>
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
    text-align: center;
    margin-bottom: 2rem;
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
