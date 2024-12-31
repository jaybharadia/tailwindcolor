export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "nuxt-gtag",
    "@nuxtjs/color-mode",
    "@nuxt/scripts",
  ],
  hub: {},
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: "Hello from the Edge 👋",
    },
  },

  ui: {
    global: true,
    icons: ["heroicons", "simple-icons", "ic"],
  },

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  $production: {
    scripts: {
      registry: {
        clarity: {
          id: "pmjxogos4m",
        },
      },
    },
  },

  gtag: {
    id: "G-JD018Z5SJW",
  },

  app: {
    head: {
      title: "TailwindCSS Color Palette Generator",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Generate beautiful color palettes for Tailwind CSS with live preview and instant configuration",
        },
        {
          name: "keywords",
          content:
            "tailwind, css, color, palette, generator, design, web development, color shades, color scale",
        },
        { name: "author", content: "Jay Bharadia" },
        {
          property: "og:title",
          content: "TailwindCSS Color Palette Generator",
        },
        {
          property: "og:description",
          content:
            "Generate beautiful color palettes for Tailwind CSS with live preview and instant configuration",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/social-preview.png" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "TailwindCSS Color Palette Generator",
        },
        {
          name: "twitter:description",
          content:
            "Generate beautiful color palettes for Tailwind CSS with live preview and instant configuration",
        },
        { name: "twitter:image", content: "/social-preview.png" },
      ],
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-11-30",
});
