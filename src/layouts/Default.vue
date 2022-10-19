<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-brand-violet text-white">
      <div class="container mx-auto px-4 flex-row">
        <nav class="nav flex flex-col md:flex-row md:space-x-6 py-4 justify-between">
          <div class="flex flex-row space-x-6">
            <button id="hamburger-button" class="md:hidden" @click="toggleMenu">
              <svg viewBox="0 0 100 70" width="40" height="40" fill="white">
                <rect width="100" height="10" />
                <rect y="30" width="100" height="10" />
                <rect y="60" width="100" height="10" />
              </svg>
            </button>
            <g-link class="flex landing--link w-full" to="/">
              <g-image
                src="~/imgs/QF-logo-white.png"
                width="708"
                :alt="$static.metadata.siteName"
                class="md:max-w-150px mx-auto"
              />
            </g-link>
          </div>
          <div
            class="flex md:flex flex-col md:flex-row md:space-x-6 menu-items"
            :class="{ hidden: !menuOpen }"
          >
            <g-link to="/about/">About</g-link>
            <g-link to="/virtual-lab/">Virtual Lab</g-link>
            <g-link to="/contact/">Contact</g-link>
          </div>
        </nav>
      </div>
    </header>
    <main class="flex flex-col flex-1">
      <slot />
      <footer class="bg-footer-violet flex-auto h-16"></footer>
    </main>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
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
h1,
h2,
h3 {
  font-family: Lora, serif;
}

body {
  font-family: Montserrat, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

button.button-primary,
button.button-secondary {
  padding: 1em 1.75em;
  color: white;
  font-size: 0.7em;
  line-height: 1em;
  font-weight: bold;
  border: 1px solid white;
}

button.button-primary {
  border-color: #5d00d3;
  background: #5d00d3;
}

.nav a {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.nav a.active--exact:not(.landing--link) {
  color: rgba(255, 255, 255, 0.7);
}

.nav a:hover {
  color: rgba(255, 255, 255, 0.7);
}

.hamburger-button {
  border: none;
  background: none;
}

.menu-items a {
  border-top: 1px solid #ffffff30;
  padding-left: 15px;
}

@screen md {
  .menu-items a {
    border-top: none;
    padding-left: 0;
  }
}
</style>
