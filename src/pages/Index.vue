<template>
  <Layout>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 flex-row py-10 lg:py-20">
        <div
          class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
        >
          <div class="flex items-center flex-1 xl:flex-initial">
            <g-link to="https://lab.quantumflytrap.com/lab/mach-zehnder">
              <g-image src="~/../content/pages/hero.svg" />
            </g-link>
          </div>
          <div class="flex-1 prose text-white md:p-4 max-w-full self-center">
            <div>
              <h1 class="text-white">No-code IDE for<br />Quantum Computing</h1>
              <p>
                Building a bridge between the end-users and quantum computing
                with visual, easy-to-use software development tools.
              </p>
              <p>
                For faster value creation and more efficient use of quantum
                devices.
              </p>
            </div>

            <div class="flex flex-row space-x-4 max-w-full">
              <a href="/contact">
                <button class="button-primary uppercase">
                  contact us
                </button>
              </a>
              <a href="/tech-demo">
                <button class="button-secondary uppercase">
                  tech demo
                </button>
              </a>
            </div>
            <div class="flex flex-row items-center space-x-5">
              <g-link to="https://twitter.com/QuantumFlytrap/">
                <g-image src="~/../content/pages/social-twitter.svg" />
              </g-link>
              <g-link to="https://www.linkedin.com/company/quantum-flytrap">
                <g-image src="~/../content/pages/social-linkedin.svg" />
              </g-link>
              <g-link to="https://github.com/Quantum-flytrap/">
                <g-image src="~/../content/pages/social-github.svg" />
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="landing-sections">
      <section class="bg-section-violet">
        <div class="container mx-auto px-4 flex-row py-10 lg:py-20">
          <div
            class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 items-stretch"
          >
            <div class="flex-1 prose text-white md:p-4 max-w-full self-center">
              <p>
                Our solution enables users to program a quantum computer in
                order to solve business-specific tasks, with or without
                immediate access to the quantum device.
              </p>
              <p>
                It allows real-time interaction with the actual machine as well
                as simulation of the device on a regular PC thanks to
                proprietary engine developed by Quantum Flytrap.
              </p>
              <p>
                This way users on a broad spectrum of technical skills can
                resolve given business problem and later analyze the result in
                order to optimize their products or services without necessarily
                relying on understanding of physics nor coding.
              </p>
            </div>
            <div class="flex-1 flex items-center">
              <g-link to="https://lab.quantumflytrap.com/lab/mach-zehnder">
                <g-image src="~/../content/pages/section1.svg" />
              </g-link>
            </div>
          </div>
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
    title: "Home",
  },
  methods: {
    sectionClass(index) {
      return index % 2 === 0 ? "bg-dark-violet text-white" : "bg-pink-beige";
    },
  },
};
</script>

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
