<template>
  <Layout>
    <div class="flex flex-col" v-html="$page.pageRaw.content"></div>
  </Layout>
</template>

<script>
export default {
  name: "PageRaw",
  metaInfo() {
    return { title: this.$page.pageRaw.title };
  },
};
</script>

<page-query>
query PageRaw ($path: String!) {
   pageRaw (path: $path) {
    content
  }
}
</page-query>

<style>
.link {
  font-size: 0.8rem;
  color: rgba(37, 11, 56, 0.5);
}
.prose.text-white {
  color: white;
}
.prose.text-white h1 {
  color: white;
}
.prose.text-white h2 {
  color: white;
}
.prose.text-white h3 {
  color: white;
}
.prose.text-white a {
  color: #e5e7eb;
}
</style>
