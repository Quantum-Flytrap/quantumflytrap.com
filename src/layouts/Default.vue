<template>
  <div>
    <header class="bg-brand-violet text-white">
      <div class="container mx-auto px-4 flex-row">
        <nav class="nav flex flex-row space-x-6 uppercase">
          <g-link class="landing--link" to="/">
            <g-image
              src="~/imgs/quantum_flytrap_logo_wave_white.png"
              width="100"
              :alt="$static.metadata.siteName"
          /></g-link>
          <a href="https://lab.quantumflytrap.com">Virtual Lab</a>
          <g-link to="/course/">Quantum Course</g-link>
          <g-link to="/scientists/">For Scientists</g-link>
          <g-link to="/invest/">For Investors</g-link>
          <g-link to="/press/">Press Kit</g-link>
          <div class="monetization" v-if="monetizationState === 'started'">
            Thank you for supporting us with web monetization.
          </div>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      monetizationState: "",
    };
  },
  mounted() {
    if (!this.$monetization.isEnabled()) {
      this.$monetization.enable();
    }
    this.monetizationState = this.$monetization.getState();
    this.$monetization.onStateChange((event) => {
      this.monetizationState = this.$monetization.getEventStateString(event);
    });
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Montserrat, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

.nav a {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.nav .monetization {
  display: flex;
  align-items: center;
  padding: 5px 0;
  text-transform: none;
}

.nav a.active--exact:not(.landing--link) {
  color: rgba(255, 255, 255, 0.7);
}

.nav a:hover {
  color: rgba(255, 255, 255, 0.7);
}
</style>
