<template>
  <Layout>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 flex-row py-10 lg:py-20">
        <div
          class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-20 items-stretch"
        >
          <div class="flex-1 prose text-white lg:p-4 max-w-full self-center">
            <div>
              <h1 class="text-white">Virtual Lab</h1>
              <p>
                Virtual Lab is a tech demo by Quantum Flytrap. It explores novel
                ways to represent quantum phenomena in an interactive and
                intuitive way. It is a no-code online laboratory with a
                real-time simulation of an optical table, supporting up to 3
                entangled particles. Users can place typical optical elements
                (such as beam splitters, polarizers, Faraday rotators, and
                detectors) with a drag & drop graphical interface.
              </p>
            </div>

            <div class="flex flex-row space-x-4 max-w-full">
              <a href="https://lab.quantumflytrap.com/">
                <button class="button-primary uppercase">
                  virtual lab
                </button>
              </a>
              <a href="https://lab.quantumflytrap.com/lab/mach-zehnder">
                <button class="button-secondary uppercase">
                  go to this experiment
                </button>
              </a>
            </div>
          </div>
          <div class="flex items-center flex-1 ">
            <g-link to="https://lab.quantumflytrap.com/lab/mach-zehnder">
              <g-image src="~/../content/pages/lab-preview.png" />
            </g-link>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-brand-violet">
      <div class="container mx-auto px-4 py-10 lg:py-20">
        <div class="prose text-white md:p-4 max-w-full self-center">
          <p>
            Virtual Lab provides a way to explore exact quantum states,
            entanglement, and the probabilistic nature of quantum physics. Users
            can simulate quantum computing (e.g. Deutsch-Jozsa algorithm), use
            quantum cryptography (e.g. Ekert protocol), explore counterintuitive
            quantum phenomena (e.g. quantum teleportation & Bell inequality
            violation), and recreate historical experiments (e.g.
            Michelson-Morley interferometer).
          </p>
        </div>
      </div>
    </section>
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
