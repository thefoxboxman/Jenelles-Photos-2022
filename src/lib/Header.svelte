<script context="module">
  import {page} from '$app/stores'
</script>

<script>
 

  let path
  $: ({path} = $page)
</script>

<header>
  
  <nav class="navbar column">
    <div class="siteTitle">
      <h2>Jenelle's Photos 2022</h2>
    </div>
    <ul class="nav">
      
      <li><a class="nav-link" data-selected={path === '/roll'} href="/roll">Roll</a></li>
      <li><a class="nav-link" data-selected={path === '/blog'} href="/blog">Blog</a></li>
      <li><a class="nav-link" data-selected={path === '/flora'} href="/flora">Flora</a></li>
      <li><a class="nav-link" data-selected={path === '/fauna'} href="/fauna">Fauna</a></li>
      <li><a class="nav-link" data-selected={path === '/awards'} href="/awards">Awards</a></li>
      <li><a class="nav-link" data-selected={path === '/macro'} href="/macro">Macro</a></li>
      <li><a class="nav-link" data-selected={path === '/astro'} href="/astro">Astro</a></li>
      <li><a class="nav-link" data-selected={path === '/scapes'} href="/scapes">Scapes</a></li>
    </ul>
  </nav>
</header>

<style>
header {
  width: 100%;
}
   .navbar {
     background-color: black;
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 10px;
    z-index: 999;
    
  }
  .column {
    
    flex-direction: column;
    flex-wrap: wrap;
  }
  .siteTitle {
    margin: 0 auto;
  }
  .siteTitle h2 {
    font-size: 1rem;
    color: orange;
    letter-spacing: 0.3em;
    font-style: italic;
    margin: 0.5em 0 1em 0;
  }
  .nav {
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav li:first-child{
    margin-left: .2rem;
  }
  .nav-link {
    text-decoration: none;
    color: orange;
    border: solid 0.1rem white;
    border-radius: 0.75rem;
    
    font-size: 0.75rem;
    padding: 0.1rem 0.2rem;
    margin: 0.1rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
  }


.nav a[data-selected='true'] {
    font-weight: 400;
    color: rgb(182, 175, 175);
  }

  .nav-link:hover {
    font-size: 0.9rem;
    background: white;
    color: black;
    cursor: pointer;
  }


  /*Mid range style the navbar with media query*/
  @media screen and (min-width: 600px) {
    .nav-link {
      font-size: 1rem;
      padding: 0.2rem 0.4rem;
      margin: 0.5rem;
    }

  .nav-link:hover {
    font-size: 1.3rem;
    background: white;
    color: black;
    cursor: pointer;
  }
  } /* end mid range*/

  /*Large range style the navbar with media query*/
  @media screen and (min-width: 1000px) {
  
  .navbar {
    position: fixed;
    top: 0;
    width: 80%;
    padding-top: 10px;
    
  }
  .nav-link:hover {
    font-size: 1.3rem;
    background: white;
    color: black;
    cursor: pointer;
  }
    
  } /* End large range*/




</style>
