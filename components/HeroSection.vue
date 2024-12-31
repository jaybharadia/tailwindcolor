<template>
  <section class="relative overflow-hidden py-16 mb-12">
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 opacity-50"
    ></div>

    <UContainer>
      <div class="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <div class="space-y-4">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
            Generate Your Perfect Color Palette
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Create beautiful color palettes for your Tailwind CSS projects with
            live preview
          </p>
        </div>

        <ColorInput
          v-model="color"
          :color-name="colorName"
          @generate="$emit('generate', color, colorName)"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import colorNamer from "color-namer";

const color = ref("");
const colorName = ref("");

defineEmits<{
  (e: "generate", color: string, colorName: string): void;
}>();

watch(color, (newColor) => {
  if (newColor && /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(newColor)) {
    const name = colorNamer(`#${newColor}`)
      .ntc[0].name.toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    colorName.value = name;
  } else {
    colorName.value = "";
  }
});
</script>
