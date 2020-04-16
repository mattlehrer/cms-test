<script>
  export let post;
  const { title, date, author, excerpt, slug } = post;
</script>

<div class="mt-3 mb-5">
  <div class="mb-2 text-xl text-gray-200"><a rel='prefetch' href="/blog/{slug}">{title}</a></div>
  <div class="text-md text-gray-500">{@html excerpt}...</div>
  <div class="my-1 text-lg text-gray-200"><a rel='prefetch' href="/blog/{slug}">Continue Reading -></a></div>
  <div class="text-md text-gray-600">
    <span>{author.first_name ? author.first_name + ' ' + author.last_name : author.name}</span>
    <span>{new Date(date).toLocaleDateString()}</span>
  </div>
</div>