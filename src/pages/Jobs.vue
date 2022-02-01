<template>
  <Layout>
    <div class="container max-w-xl mx-auto py-4">
      <div class="post-title prose max-w-full pb-4">
        <h1 class="job-opening">Job openings</h1>
      </div>
      <div class="post-content prose max-w-full">
        <ul>
          <li v-for="(edge, index) in $page.allPageJob.edges" :key="index">
            <g-link :to="edge.node.path" class="read">{{ edge.node.title }}</g-link>
            - {{ edge.node.description }}
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPageJob(filter: { open: { eq: true }}) {
    edges {
      node {
        id
        title
        description
        path
        open
      }
    }
  }
}
</page-query>