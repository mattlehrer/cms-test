<script>
  let isOpen = false;
</script>

<div class="mx-auto">
  <header class="mx-auto sm:flex sm:justify-between sm:items-center px-2 md:mx-16 sm:py-3">
    <div class="flex text-gray-300 items-center justify-between px-2 py-3 sm:p-0">
      <div>
        <a href="/">
          <img class="h-6" src="/img/logo-inverted.svg" alt="Muse">
        </a>
      </div>
      <div class="sm:hidden">
        <button on:click={() => isOpen = !isOpen} type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {#if isOpen}
              <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            {:else}
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            {/if}
          </svg>
        </button>
      </div>
    </div>
    <nav class="{isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0 text-gray-400">
      <a rel='prefetch' href="/services" class="block px-2 py-1 font-semibold rounded hover:bg-gray-800">Services</a>
      <a rel='prefetch' href="/case-studies" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Case Studies</a>
      <a rel='prefetch' href="/blog" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Blog</a>
      <a rel='prefetch' href="/about" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">About</a>
      <a rel='prefetch' href="/contact" class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Contact</a>
    </nav>
  </header>
</div>
