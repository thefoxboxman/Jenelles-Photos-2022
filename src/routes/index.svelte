


<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/photos/allphotos.json')
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
  
  import PhotoRoll from '$lib/PhotoRoll.svelte'

  export let photos
  
</script>

<svelte:head>
  <title>Photo Roll 2022</title>
</svelte:head>



<h1>is this working</h1>






<style>
 h1{color: bisque}
  
</style>

