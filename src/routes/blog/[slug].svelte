<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		return res.ok ? { post: await res.json() } : this.error(404, 'Not found');
	}
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article class="max-w-2xl mx-4 sm:mx-auto mt-4 sm:mt-8 mb-12 sm:mb-20 text-gray-200">
  <h1 class="text-3xl my-4 font-semibold leading-tight">
    {post.title}
  </h1>
  <div class="cms-content">
    {@html post.content}
  </div>
</article>
