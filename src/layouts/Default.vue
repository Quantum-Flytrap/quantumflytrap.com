<template>
  <div>
    <header class="bg-brand-violet text-white">
      <div class="container mx-auto px-4 flex-row">
        <nav class="nav flex flex-row space-x-10 uppercase">
          <g-link to="/">
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
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

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
</style>
