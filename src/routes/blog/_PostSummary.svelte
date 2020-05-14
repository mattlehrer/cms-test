<script>
  export let post;
  const { title, date, author, excerpt, slug, featured_image } = post;
</script>

<div class="mt-3 mb-12">
  {#if featured_image}
    <img src={featured_image} alt='Featured Image for {title}' class="max-w-xs pb-2 pt-5" />
  {/if}
  <div class="text-xl text-gray-200"><a rel='prefetch' href="/blog/{slug}">{title}</a></div>
  <div class="text-md text-gray-500 cms-content">{@html excerpt}</div>
  <div class="my-1 text-lg text-gray-200"><a rel='prefetch' href="/blog/{slug}">Continue Reading -></a></div>
  <div class="text-md text-gray-600">
    <span>{author.first_name ? author.first_name + ' ' + author.last_name : author.name}</span>
    <span>{new Date(date).toLocaleDateString()}</span>
  </div>
</div>