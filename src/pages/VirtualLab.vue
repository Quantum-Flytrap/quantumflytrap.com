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
              <p>Virtual Lab by Quantum Flytrap is a no-code online laboratory with a real-time simulation of an optical table, supporting up to three entangled particles. A drag-and-drop graphical interface gives an easy way to create advanced quantum experiments.</p>
              <p>Virtual Lab is a tech demo of our proprietary quantum simulation numeric engine: installation-free, supporting a billion dimensions, performing computations in less than 100µs.</p>
              <p>
                More details in our recent publication,
                <a
                  href="https://doi.org/10.1117/1.OE.61.8.081808"
                >P. Migdał, K. Jankiewicz, P. Grabarz, et al. "Visualizing quantum mechanics in an interactive simulation - Virtual Lab by Quantum Flytrap" Optical Engineering 61(8), 081808 (2022)</a>.
              </p>
            </div>

            <div class="flex flex-row space-x-4 max-w-full">
              <a href="https://lab.quantumflytrap.com/">
                <button class="button-primary uppercase">virtual lab</button>
              </a>
              <a href="https://lab.quantumflytrap.com/lab/mach-zehnder">
                <button class="button-secondary uppercase">go to this experiment</button>
              </a>
            </div>
          </div>
          <div class="flex items-center flex-1">
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
            Virtual Lab makes it possible to explore the nature of quantum physics (state evolution, entanglement, and measurement), to simulate quantum computing (e.g. the
            <a
              href="https://lab.quantumflytrap.com/lab/deutsch-jozsa"
            >Deutsch-Jozsa algorithm</a>), to use quantum cryptography (e.g. the
            <a
              href="https://lab.quantumflytrap.com/lab/ekert-protocol?mode=waves"
            >Ekert protocol</a>), to explore counterintuitive quantum phenomena (e.g.
            <a
              href="https://lab.quantumflytrap.com/lab/quantum-teleportation?mode=waves"
            >quantum teleportation</a> & the
            <a
              href="https://lab.quantumflytrap.com/lab/bell-inequality?mode=waves"
            >Bell inequality violation)</a>, and to recreate historical experiments (e.g. the
            <a
              href="https://lab.quantumflytrap.com/lab/mach-zehnder?mode=laser"
            >Mach-Zehnder interferometer</a>).
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
    title: "Virtual Lab",
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
.prose .text-white,
.prose a {
  color: white;
}
</style>
