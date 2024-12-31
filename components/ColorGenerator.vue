<template>
  <div>
    <HeroSection @generate="onGenerate" />

    <PaletteViewer
      v-model="showPalette"
      :base-color="baseColor"
      :palette="palette"
      :config-output="configOutput"
      @copy-config="copyConfig"
      @copy-hex="copyHex"
    />
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

const { generatePalette } = useColorPalette();

const { copy } = useClipboard();
const toast = useToast();

const baseColor = ref("");
const palette = ref<Record<string, string>>();
const colorName = ref("");
const showPalette = ref(false);

const configOutput = computed(() => {
  if (!palette.value) return "";

  const config = {
    theme: {
      extend: {
        colors: {
          [colorName.value]: palette.value,
        },
      },
    },
  };

  return JSON.stringify(config, null, 2);
});

const onGenerate = (color, name) => {
  baseColor.value = `#${color}`;
  palette.value = generatePalette(color);
  colorName.value = name;
  showPalette.value = true;
};

async function copyHex(hex: string) {
  await copy(hex);
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  toast.clear();
  toast.add({
    title: "Color copied!",
    description: `${hex.toUpperCase()} has been copied to your clipboard.`,
    icon: "i-heroicons-check-circle-20-solid",
  });
}

async function copyConfig() {
  if (!configOutput.value) return;
  await copy(configOutput.value);
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
  toast.clear();
  toast.add({
    title: "Config copied!",
    description: "The Tailwind config has been copied to your clipboard.",
    icon: "i-heroicons-check-circle-20-solid",
  });
}
</script>
