<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`/blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  export let posts;
  import PostSummary from './_PostSummary.svelte';
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="px-2 mx-4 sm:mx-auto max-w-2xl mt-1 sm:mt-6 mb-8 sm:mb-16">
  <h1 class="text-4xl text-primary-400">Recent posts</h1>

  <section>
    <article>
      {#each posts as post}
        <PostSummary {post} />
      {/each}
    </article>
  </section>
</div>
