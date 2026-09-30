export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "nuxt-gtag",
    "@nuxtjs/color-mode",
    "@nuxt/scripts",
    "@nuxtjs/seo",
  ],
  site: {
    url: "https://tailwindcolors.meticha.com",
    name: "TailwindColors",
    description:
      "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
    defaultLocale: "en",
  },
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
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s | TailwindColors",
      title: "Tailwind CSS Color Palette Generator & Shades Builder",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0f172a" },
        {
          name: "description",
          content:
            "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
        },
        {
          name: "keywords",
          content:
            "tailwind css color generator, tailwind color palette, tailwind shades generator, tailwind config colors, 50 950 color scale, custom tailwind colors, oklch tailwind colors",
        },
        { name: "author", content: "Jay Bharadia - Meticha" },
        {
          property: "og:title",
          content: "Tailwind CSS Color Palette Generator & Shades Builder",
        },
        {
          property: "og:description",
          content:
            "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://tailwindcolors.meticha.com/social-preview.png" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Tailwind CSS Color Palette Generator & Shades Builder",
        },
        {
          name: "twitter:description",
          content:
            "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
        },
        { name: "twitter:image", content: "https://tailwindcolors.meticha.com/social-preview.png" },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TailwindCSS Color Palette Generator",
            "url": "https://tailwindcolors.meticha.com",
            "description": "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview and instant tailwind.config.js export.",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Meticha",
              "url": "https://www.meticha.com"
            }
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Generate Custom Tailwind CSS Color Palettes",
            "description": "Step-by-step guide to generating custom 50–950 color shades and exporting tailwind.config.js code.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Select or Enter a Base HEX Color",
                "text": "Enter any HEX color code (e.g., #3b82f6) into the color picker input."
              },
              {
                "@type": "HowToStep",
                "name": "Preview Generated 50 to 950 Shades",
                "text": "View the automatically calculated 10-shade color scale ranging from light background tints (50) to dark mode neutrals (950)."
              },
              {
                "@type": "HowToStep",
                "name": "Copy Tailwind Config Code",
                "text": "Click 'Copy Config' to copy the JavaScript theme object directly into your tailwind.config.js file under theme.extend.colors."
              }
            ]
          })
        }
      ]
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-11-30",
});
