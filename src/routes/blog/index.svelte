<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/blog/all.json')
      const data = await res.json()
      return {
        props: data
      }
    } catch (err) {
      console.log('500:', err)
    }
  }
</script>

<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
  export let authors
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Jenelle's Recent Blog Posts</h1>

<PostsGrid {posts} />

<h2 style="margin-top: 4rem">Author{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each}


<style>
  h1 {
    color: orange;
  }

  h2 {
    color: white;
  }
</style>
