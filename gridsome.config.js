// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Quantum Flytrap",
  siteDescription:
    "Quantum Flytrap is a startup developing the no-code IDE for quantum computing. Check our real-time in-browser tech demo, Virtual Lab.",
  titleTemplate: "%s - Quantum Flytrap",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "BlogPost",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/landing/**/*.md",
        typeName: "LandingSection",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/testimonials/**/*.md",
        typeName: "Testimonial",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/*.md",
        typeName: "PageProse"
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/raw/*.md",
        typeName: "PageRaw",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/jobs/*.md",
        typeName: "PageJob",
      },
    },
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'quantumflytrap.com',
        outboundLinkTracking: false
      }
    }
  ],
  templates: {
    BlogPost: "/blog/:slug",
    PageProse: "/:slug",
    PageJob: "/jobs/:slug",
  },
};
