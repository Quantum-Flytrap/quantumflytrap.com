<template>
  <Layout>
    <div :class="$page.pageProse.class || ''">
      <div class="container max-w-xl mx-auto py-4">
        <div class="post-content prose max-w-full" v-html="$page.pageProse.content"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "PageProse",
  metaInfo() {
    return { title: this.$page.pageProse.title };
  },
};
</script>

<page-query>
query PageProse ($path: String!) {
   pageProse (path: $path) {
    title,
    content,
    class
  }
}
</page-query>

<style>
.brand {
  background: #2e006a;
}

.prose hr {
  border-color: #2e006a;
}

.brand .prose,
.brand .prose h1,
.brand .prose h2,
.brand .prose strong {
  color: white;
}

.brand .prose a {
  color: rgb(227, 187, 255);
}

.link {
  font-size: 0.8rem;
  color: rgba(37, 11, 56, 0.5);
}
</style>
