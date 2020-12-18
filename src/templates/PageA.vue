<template>
  <Layout>
    <div class="container max-w-xl mx-auto">
      <br />
      <g-link to="/" class="link"> &larr; Go Back</g-link>
      <div class="post-title prose">
        <h1>{{ $page.pageA.title }}</h1>
      </div>
      <div class="post-content prose" v-html="$page.pageA.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query PageA ($path: String!) {
   pageA (path: $path) {
    title
    content
  }
}
</page-query>

<style>
.link {
  font-size: 0.8rem;
  color: rgba(37, 11, 56, 0.5);
}
</style>