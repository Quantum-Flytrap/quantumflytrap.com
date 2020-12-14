<template>
  <Layout>
    <div class="post-list">
      <div v-for="(edge, index) in $page.allLandingSection.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <p class="description" v-html="edge.node.order" />
        <hr class="line" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allLandingSection {
    edges {
      node {
        id
        title
        order
        content
      }
    }
  }
}
</page-query>
