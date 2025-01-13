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
