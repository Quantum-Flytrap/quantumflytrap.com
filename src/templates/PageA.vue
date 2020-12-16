<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Go Back</g-link>
    <div class="post-title prose">
      <h1>{{ $page.pageA.title }}</h1>
    </div>
    <div class="post-content prose" v-html="$page.pageA.content"></div>
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
