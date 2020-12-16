// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Quantum Flytrap",
  siteDescription: "A simple blog designed with Gridsome",
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
        path: "content/pages/**/*.md",
        typeName: "PageA",
      },
    },
  ],
  templates: {
    BlogPost: "/blog/:slug",
    PageA: "/:slug",
  },
};
