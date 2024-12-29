<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <main class="pt-16 pb-24">
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
const currentPalette = ref(generateRandomPalette());
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
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === "Space" && e.target === document.body) {
      e.preventDefault();
      currentPalette.value = generateRandomPalette();
    }
  };

  window.addEventListener("keydown", handleKeydown);
  onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
});
</script>
