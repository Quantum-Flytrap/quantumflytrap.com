<template>
  <Layout>
    <g-image alt="Example image" src="~/imgs/QF_logo_wave.png" width="400" />

    <div class="sections" layout="column u10">
      <Testimonials class="testimonials" />
    </div>
    <div class="landing-sections">
      <div v-for="(edge, index) in $page.allLandingSection.edges" :key="index">
        <h1 class="title" v-html="edge.node.title" />
        <div v-html="edge.node.content" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Testimonials from "~/components/Testimonials.vue";
export default {
  name: "Index",
  components: {
    Testimonials,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query {
  allLandingSection(sortBy: "order", order: ASC) {
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


<style>
.home-links a {
  margin-right: 1rem;
}

.sections {
  width: 35%;
  display: flex;
  position: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1259px) {
    width: 60%;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
  }
}

.testimonials {
  max-width: 1300px;
  width: 100vw;
}
</style>
