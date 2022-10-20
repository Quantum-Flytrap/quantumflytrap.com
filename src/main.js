// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  const url = "https://quantumflytrap.com";
  const twitter = "QuantumFlytrap";
  const image = url + require("~/imgs/QF_logo_for_thumbnail.jpg");

  // Twitter
  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
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
    property: "og:type",
    content: "website",
  });
  head.meta.push({
    property: "og:image",
    content: image,
  });

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  })
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: true,
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lora&display=swap',
  })
}
