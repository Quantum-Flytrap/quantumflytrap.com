<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{ $page.pageA.title }}</h1>
      <p class="post-date">
        {{ $page.pageA.date }} | {{ $page.pageA.timeToRead }} min read
      </p>
    </div>
    <div class="post-content">
      <p v-html="$page.pageA.content" />
    </div>
  </Layout>
</template>

<page-query>
query PageA ($path: String!) {
   pageA (path: $path) {
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>