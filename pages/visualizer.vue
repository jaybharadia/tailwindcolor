<template>
  <div class="bg-gray-50 dark:bg-gray-950">
    <main class="pt-16">
      <HeroSection @generate="handleGenerate" />
      <PreviewSection :palette="currentPalette" />
    </main>

    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import { generateRandomPalette } from "~/utils/colors";

const showAbout = ref(false);
const currentPalette = ref(null);
const route = useRoute();
const { generatePalette } = useColorPalette();

useSeoMeta({
  title: "Tailwind CSS Color Palette Visualizer & UI Preview",
  ogTitle: "Tailwind CSS Color Palette Visualizer & UI Preview",
  twitterTitle: "Tailwind CSS Color Palette Visualizer & UI Preview",
  description:
    "Preview custom Tailwind CSS color palettes on real UI components instantly. Test buttons, cards, badges, and background contrast before exporting config.",
  ogDescription:
    "Preview custom Tailwind CSS color palettes on real UI components instantly. Test buttons, cards, badges, and background contrast before exporting config.",
  twitterDescription:
    "Preview custom Tailwind CSS color palettes on real UI components instantly. Test buttons, cards, badges, and background contrast before exporting config.",
  keywords:
    "tailwind color visualizer, tailwind palette preview, test tailwind colors, tailwind ui contrast checker, tailwind component color preview, custom tailwind palette tester, web design color preview",
  ogType: "website",
  ogUrl: "https://tailwindcolors.meticha.com/visualizer",
  ogImage: "https://tailwindcolors.meticha.com/social-preview.png",
  twitterCard: "summary_large_image",
  twitterImage: "https://tailwindcolors.meticha.com/social-preview.png",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://tailwindcolors.meticha.com/visualizer",
    },
  ],
});

function handleGenerate(color) {
  if (color) {
    currentPalette.value = generatePalette(color);
  } else {
    currentPalette.value = generateRandomPalette();
  }
}

// Handle spacebar for new palette generation
onMounted(() => {
  try {
    const color = decodeURIComponent(route.query.color);
    if (color) {
      handleGenerate(color);
    } else {
      try {
        currentPalette.value = generateRandomPalette();
      } catch (e) {
        console.log(e);
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        currentPalette.value = generateRandomPalette();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
  } catch (e) {
    console.log(e);
  }
});
</script>
