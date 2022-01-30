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
      <li><a class="nav-link" data-selected={path === '/flowers'} href="/flowers">Flowers</a></li>
      <li><a class="nav-link" data-selected={path === '/birds'} href="/birds">Birds</a></li>
      <li><a class="nav-link" data-selected={path === '/awards'} href="/awards">Awards</a></li>
      <li><a class="nav-link" data-selected={path === '/macro'} href="/macro">Macro</a></li>
      <li><a class="nav-link" data-selected={path === '/astro'} href="/astro">Astro</a></li>
      <li><a class="nav-link" data-selected={path === '/scapes'} href="/scapes">Scapes</a></li>
    </ul>
  </nav>
</header>

<style>
header{
  max-width: 90%;
}
   .navbar {
    position: fixed;
    top: 0;
    width: 90%;
    padding-top: 10px;
    
  }
  .column {
    display: flex;
    flex-direction: column;
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
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav li:first-child{
    margin-left: 2rem;
  }
  .nav-link {
    text-decoration: none;
    color: orange;

    border: solid 0.1rem white;
    border-radius: 0.2rem;
    font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.75rem;
    padding: 0.1rem 0.2rem;
    margin: 0.1rem;
    text-transform: capitalize;
  }


 .nav a[data-selected='true'] {
     font-weight: 600;
     color: rgb(182, 175, 175);
   }

  /*Mid range style the navbar with media query*/
  @media screen and (min-width: 600px) {
    .nav-link {
      font-size: 1.1rem;
      padding: 0.2rem 0.4rem;
      margin: 0.5rem;
    }
  }

  /*Large range style the navbar with media query*/
  @media screen and (min-width: 1000px) {
   
   .navbar {
    position: fixed;
    top: 0;
    width: 80%;
    padding-top: 10px;
    
  }
    .nav-link {
      font-size: 1.1rem;
      padding: 0.2rem 0.4rem;
      margin: 0.5rem;
    }
  }



  .nav-link:hover {
    font-size: 1.1rem;
    background: white;
    color: black;
    cursor: pointer;
  }
  /* ul {
  /*   list-style: none;
  /*   margin: 0;
  /*   padding: 0;
  /* }
  /* 
  /* a {
  /*   text-decoration: none;
  /*   display: block;
  /* }

  /* header {
  /*   display: flex;
  /*   flex-direction: column;
  /*   justify-content: space-between;
  /*   align-items: flex-start;
  /*   padding: 1em;
  /* }
  /* @media screen and (min-width: 400px) {
  /*   header {
  /*     flex-direction: row-reverse;
  /*     align-items: center;
  /*   }
  /* }
</style>
