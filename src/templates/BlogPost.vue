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

<script>
export default {
  name: "BlogPost",
  metaInfo() {
    const title = this.$page.blogPost.title;
    const description = this.$page.blogPost.description;
    const baseUrl = "https://quantumflytrap.com"
    const url = `${baseUrl}/blog/${this.$page.blogPost.slug}`;

    // quick and dirty
    const image = (this.$page.blogPost.slug === "virtual-lab-updates-oct-2022") ? baseUrl + require("/content/posts/virtual-lab-updates-oct-2022/virtual-lab-interface-redesign.png") :  baseUrl + require("~/imgs/QF_logo_for_thumbnail.jpg");

    return {
      title: title,
      meta: [
        { name: "og:title", content: title },
        { name: "twitter:title", content: title },
        { name: "description", content: description },
        { name: "og:description", content: description },
        { name: "twitter:description", content: description },
        { name: "url", content: url },
        { name: "og:url", content: url },
        { name: "twitter:url", content: url },
        { name: "og:image", content: image },
        { name: "twitter:image", content: image },
      ],
    };
  },
};
</script>

<page-query>
query BlogPost ($path: String!) {
   blogPost (path: $path) {
    id
    title
    description
    content
    date (format: "D MMMM YYYY")
    timeToRead
    slug
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