<script context="module">
  import axios from 'axios';
  // import { posts } from './_posts';

  export function preload({ params, query }) {
    return axios
      .get('process.env.WP_SITE')
      .then((res) => {
        return { posts: res.data.posts };
      })
      .catch((err) => this.error(500, err));

  }
</script>

<script>
  export let posts;
  import PostSummary from './_PostSummary.svelte';
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="px-8 mx-auto max-w-4xl bg-gray-900 mt-1 sm:mt-6 mb-8 sm:mb-16">
  <h1 class="text-4xl text-indigo-400">Recent posts</h1>

  <section>
    <article>
      {#each posts as post}
        <PostSummary {post} />
      {/each}
    </article>
  </section>
</div>
