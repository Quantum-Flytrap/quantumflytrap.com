// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  const title = "Quantum Flytrap";
  const url = "https://quantumflytrap.com";
  const description =
    '"Quantum simulation LEGO bricks." An in-browser simulation & visualization of quantum mechanics. The go-to place for learning quantum before the quantum computing revolution takes off.';
  const twitter = "QuantumGameIO";
  const image = "~/imgs/experiment-1.png";

  // general
  head.meta.push({
    name: "url",
    content: url,
  });
  head.meta.push({
    name: "description",
    content: description,
  });

  // Twitter
  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
  });
  head.meta.push({
    name: "twitter:url",
    content: url,
  });
  head.meta.push({
    name: "twitter:title",
    content: title,
  });
  head.meta.push({
    name: "twitter:description",
    content: description,
  });
  head.meta.push({
    name: "twitter:image",
    content: image,
  });
  head.meta.push({
    name: "twitter:site",
    content: twitter,
  });

  // Facebook
  head.meta.push({
    name: "og:type",
    content: "website",
  });
  head.meta.push({
    name: "og:title",
    content: title,
  });
  head.meta.push({
    name: "og:description",
    content: descriptiom,
  });
  head.meta.push({
    name: "og:url",
    content: url,
  });
  head.meta.push({
    name: "og:image",
    content: image,
  });
}
