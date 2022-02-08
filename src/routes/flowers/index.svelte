
<script context="module">
  export async function load({fetch}) {
    try {
      const res = await fetch('/birds/birdphotos.json')
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
  <title>Birds Only</title>

</svelte:head>



<PhotoRoll {photos} />

