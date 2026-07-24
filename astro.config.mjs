import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://quantumflytrap.com",
  output: "static",
  trailingSlash: "always",
  image: {
    service: passthroughImageService(),
  },
});
