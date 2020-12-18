<template>
  <Layout>
    <div class="container max-w-xl mx-auto py-4">
      <div class="post-content prose" v-html="$page.pageA.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query PageA ($path: String!) {
   pageA (path: $path) {
    content
  }
}
</page-query>
