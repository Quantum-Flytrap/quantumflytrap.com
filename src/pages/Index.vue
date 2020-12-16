<template>
  <Layout>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 flex-row py-20">
        <div class="flex flex-row space-x-4">
          <g-image alt="Experiment" src="~/imgs/experiment-1.png" />
          <div class="flex-1 prose text-white p-16">
            <h1 class="uppercase text-white">Your quantum lab</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              corporis quasi nihil quibusdam accusamus labore, dolore sit nulla
              autem, vero tenetur! Sint a, provident nostrum nihil quibusdam
              quasi magni nisi?
            </p>

            <div class="flex flex-row space-x-4">
              <button class="bg-intense-violet flex-auto px-5 py-0.5">
                VIRTUAL LAB
              </button>
              <button class="border border-white flex-auto px-5 py-0.5">
                Go to this experiment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="sections" layout="column u10">
      <Testimonials class="testimonials" />
    </div>
    <div class="landing-sections">
      <section
        v-for="(edge, index) in $page.allLandingSection.edges"
        :key="index"
        :class="edge.node.extClass"
      >
        <div class="container mx-auto">
          <h1 class="title" v-html="edge.node.title" />
          <div v-html="edge.node.content" />
        </div>
      </section>
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
        extClass
      }
    }
  }
}
</page-query>

<style>
.bg-brand-violet .prose h1 {
  color: white;
}
</style>
