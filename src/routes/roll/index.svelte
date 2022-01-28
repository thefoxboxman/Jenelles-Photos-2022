<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/roll/allphotos.json')
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
  <title>Roll</title>

</svelte:head>



<PhotoRoll {photos} />



<h1>roll here</h1>
