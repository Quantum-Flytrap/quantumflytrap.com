<template>
  <Layout>
    <div class="container max-w-xl mx-auto py-4">
      <div class="post-title prose max-w-full pb-4">
        <h1 class="post-title">{{ $page.blogPost.title }}</h1>
      </div>
      <p class="post-date">{{ $page.blogPost.date }} | {{ $page.blogPost.timeToRead }} min read</p>
      <div class="post-content prose max-w-full" v-html="$page.blogPost.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
   blogPost (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
h1.post-title {
  font-size: 1.75em;
}

p.post-date {
  margin-bottom: 1em;
}

.prose.post-content a {
  color: #111827;
}
</style>