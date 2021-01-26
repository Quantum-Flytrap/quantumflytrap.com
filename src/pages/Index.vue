<template>
  <Layout>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 flex-row py-20">
        <div
          class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
        >
          <div class="flex items-center">
            <g-link to="https://lab.quantumflytrap.com/lab/mach-zehnder">
              <video
                :poster="require('~/../content/pages/mach-zehnder-poster.png')"
                autoplay
                muted
                loop
                class="max-w-xl"
              >
                <source
                  type="video/webm"
                  :src="
                    require('~/../content/pages/interference_mach_zehnder.webm')
                  "
                />
                <source
                  type="video/mp4"
                  :src="
                    require('~/../content/pages/interference_mach_zehnder.mp4')
                  "
                />
              </video>
            </g-link>
          </div>
          <div class="flex-1 prose text-white md:p-4 lg:py-16 max-w-full">
            <div>
              <h1 class="uppercase text-white">Your quantum lab</h1>
              <p>
                Quantum "LEGO Bricks". An in-browser simulation &amp;
                visualization of quantum mechanics. The go-to place for learning
                quantum before the quantum computing revolution takes off.
              </p>
            </div>

            <div
              class="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0 max-w-full"
            >
              <a href="https://lab.quantumflytrap.com/">
                <button
                  class="bg-intense-violet text-white flex-auto px-5 py-0.5"
                >
                  VIRTUAL LAB
                </button>
              </a>
              <a href="https://lab.quantumflytrap.com/lab/mach-zehnder">
                <button
                  class="border border-white text-white flex-auto px-5 py-0.5"
                >
                  Go to this experiment
                </button>
              </a>
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
        :class="sectionClass(index)"
      >
        <div class="container mx-auto py-6">
          <div class="section prose max-w-4xl" v-html="edge.node.content" />
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
    title: "Welcome to the",
  },
  methods: {
    sectionClass(index) {
      return index % 2 === 0 ? "bg-dark-violet text-white" : "bg-pink-beige";
    },
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
.bg-dark-violet.text-white .section.prose {
  color: #e5e7eb;
}
.bg-dark-violet.text-white .section.prose a {
  color: #e5e7eb;
}
.prose .text-white {
  color: white;
}
</style>
