<template>
  <Layout>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 flex-row py-20">
        <div
          class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
        >
          <div class="flex items-center">
            <g-image alt="Experiment" src="~/imgs/experiment-1.png" />
          </div>
          <div class="flex-1 prose text-white md:p-4 lg:py-16 max-w-full">
            <h1 class="uppercase text-white">Your quantum lab</h1>
            <p>
              Quantum "LEGO Bricks". An in-browser simulation &amp;
              visualization of quantum mechanics. The go-to place for learning
              quantum before the quantum computing revolution takes off.
            </p>

            <div
              class="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0 max-w-full"
            >
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

    <div class="landing-sections">
      <section class="bg-pink-beige">
        <div class="container mx-auto">
          <Testimonials
            class="testimonials"
            :testimonials="$page.allTestimonial.edges.map((e) => e.node)"
          />
        </div>
      </section>

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

  allTestimonial {
    edges {
      node {
        title
        institute
        photo
        link {
          text
          url
        }
        content
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
