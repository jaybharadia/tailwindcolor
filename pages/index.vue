<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <main class="pt-16">
      <ColorGenerator />
      <div class="space-y-12 px-4">
        <DefaultColorGrid />
        <FaqSection />
      </div>
    </main>

    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const showAbout = ref(false);

useSeoMeta({
  title: "Tailwind CSS Color Palette Generator & Shades Builder",
  ogTitle: "Tailwind CSS Color Palette Generator & Shades Builder",
  twitterTitle: "Tailwind CSS Color Palette Generator & Shades Builder",
  description:
    "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
  ogDescription:
    "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
  twitterDescription:
    "Generate custom 50–950 color shades for Tailwind CSS with real-time UI preview, instant tailwind.config.js export, and HEX/RGB conversions. 100% free tool.",
  keywords:
    "tailwind css color generator, tailwind color palette, tailwind shades generator, tailwind config colors, 50 950 color scale, custom tailwind colors, oklch tailwind colors, hex to tailwind, color palette generator, meticha tailwind colors",
  ogType: "website",
  ogUrl: "https://tailwindcolors.meticha.com",
  ogImage: "https://tailwindcolors.meticha.com/social-preview.png",
  twitterCard: "summary_large_image",
  twitterImage: "https://tailwindcolors.meticha.com/social-preview.png",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://tailwindcolors.meticha.com",
    },
  ],
});
</script>
