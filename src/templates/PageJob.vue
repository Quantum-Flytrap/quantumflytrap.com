<template>
  <Layout>
    <div class="container max-w-xl mx-auto py-4">
      <div class="post-title prose max-w-full">
        <h1>
          JOB OPENING: {{ $page.pageJob.title }} <br />({{
            $page.pageJob.description
          }})
        </h1>
      </div>
      <div
        class="post-content prose max-w-full"
        v-html="$page.pageJob.content"
      ></div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "PageJob",
  metaInfo() {
    return { title: this.$page.pageJob.title };
  },
};
</script>

<page-query>
query PageJob ($path: String!) {
   pageJob (path: $path) {
    title,
    description,
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
