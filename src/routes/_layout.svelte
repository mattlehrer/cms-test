<script>
  // import { stores } from '@sapper/app';

  // const { preloading } = stores();

  // console.log('Preloading', preloading);

  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<div class="bg-gray-900 inset-0 h-full w-full">
  <Nav />

  <main>
    <slot></slot>
  </main>

  <Footer />
</div>
