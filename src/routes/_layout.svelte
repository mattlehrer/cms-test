<script>
  // import { stores } from '@sapper/app';

  // const { preloading } = stores();

  // console.log('Preloading', preloading);

  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Nav />

<main>
  <slot></slot>
</main>

<Footer />
