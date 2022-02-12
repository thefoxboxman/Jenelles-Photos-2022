<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article>
  <h2>
    <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
  </h2>
  {#if post.image}
    <div class="image">
      <SanityImage image={post.image}  />
    </div>
  {/if}
</article>

<style>
  article {
    display: flex;
   
  }

  

 

  .image {
    padding-bottom: 66%;
    position: relative;
    
     width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }

  
</style>
