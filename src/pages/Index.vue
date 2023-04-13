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
              <h1 class="text-white">
                No-code IDE for
                <br />Quantum Computing
              </h1>
              <p>
                Building a bridge between the end-users and quantum computing
                with visual, easy-to-use software development tools.
              </p>
            </div>
            <a
              href="https://vote.webbyawards.com/PublicVoting#/2023/websites-and-mobile-sites/general-websites-and-mobile-sites/science"
            >
              <g-image src="~/imgs/webby_awards_bar.png" />
            </a>
            <div class="flex flex-row space-x-4 max-w-full">
              <a href="/virtual-lab">
                <button class="button-primary uppercase">virtual lab</button>
              </a>
              <a href="/contact">
                <button class="button-secondary uppercase">contact us</button>
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
                Virtual Lab by Quantum Flytrap has been
                <a href="https://bit.ly/vote-quantum"
                  >nominated for the 27th Webby Awards</a
                >, so-called
                <a href="https://en.wikipedia.org/wiki/Webby_Awards"
                  >"the Oscars of the Internet"</a
                >. In the science websites category, along with NASA and OpenAI.
                More in
                <a
                  href="https://quantumzeitgeist.com/quantum-flytraps-virtual-quantum-lab-receives-webby-award-nomination-quantum-game-gets-worldwide-recognition/"
                  >Quantum Zeitgeist</a
                >
                and
                <a
                  href="https://www.insidequantumtechnology.com/news-archive/quantum-flytraps-virtual-quantum-lab-is-nominated-for-a-webby-award/"
                  >Inside Quantum Technology</a
                >.
              </p>
              <p>
                We designed and developed
                <a href="https://www.pasqal.com/services/pulser-studio"
                  >Pulser Studio</a
                >
                for Pasqal, a no-code neutral atom quantum programming platform.
              </p>
              <p>
                Our publication
                <a href="https://doi.org/10.1117/1.OE.61.8.081808"
                  >Visualizing quantum mechanics in an interactive simulation -
                  Virtual Lab by Quantum Flytrap</a
                >
                has been downloaded over 11,000 times.
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
const title = "Quantum Flytrap";
const description =
  "Intuitive user interfaces for quantum computing - make it an accessible & business-available technology. We aim to build the standard for interaction with quantum systems.";
const url = "https://quantumflytrap.com";
const image = url + require("~/imgs/QF_logo_for_thumbnail.jpg");

import Testimonials from "~/components/Testimonials.vue";
export default {
  name: "Index",
  components: {
    Testimonials,
  },
  metaInfo() {
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
.prose a {
  color: white;
}

a.text-link {
  color: white;
}
</style>
