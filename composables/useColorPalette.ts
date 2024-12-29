import { ref, computed } from "vue";
import chroma from "chroma-js";
import colorNamer from "color-namer";
import { useClipboard } from "@vueuse/core";
import { useToast } from "#imports";
import confetti from "canvas-confetti";

export function useColorPalette() {
  const { copy } = useClipboard();
  const toast = useToast();

  const baseColor = ref("");
  const palette = ref<Record<string, string>>({});

  const isValidHex = computed(() => {
    return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(baseColor.value);
  });

  const colorName = computed(() => {
    if (!isValidHex.value) return "";
    return colorNamer(`#${baseColor.value}`)
      .ntc[0].name.toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
  });

  const configOutput = computed(() => {
    if (!palette.value || Object.keys(palette.value).length === 0) return "";

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

  function generatePalette(color: string) {
    baseColor.value = color.replace("#", "");
    const base = chroma(`#${baseColor.value}`);

    // Generate lighter shades (50-400)
    for (let i = 0; i < 5; i++) {
      const shade = [50, 100, 200, 300, 400][i];
      const mix = 1 - i * 0.2;
      palette.value[shade] = chroma.mix("white", base, mix).hex();
    }

    // Base color for 500
    palette.value[500] = base.hex();

    // Generate darker shades (600-900)
    for (let i = 1; i <= 4; i++) {
      const shade = [600, 700, 800, 900][i - 1];
      const mix = 1 - i * 0.2;
      palette.value[shade] = chroma.mix("black", base, mix).hex();
    }

    console.log("palette", palette.value);

    // Vibrate on mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    confetti({
      particleCount: 400,
      spread: 200,
    });

    return palette.value;
  }

  async function copyConfig() {
    if (!configOutput.value) return;

    await copy(configOutput.value);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    toast.add({
      title: "Config copied!",
      description: "The Tailwind config has been copied to your clipboard.",
      icon: "i-heroicons-check-circle-20-solid",
    });
  }

  async function copyHex(hex: string) {
    await copy(hex);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    toast.add({
      title: "Color copied!",
      description: `${hex.toUpperCase()} has been copied to your clipboard.`,
      icon: "i-heroicons-check-circle-20-solid",
    });
  }

  return {
    baseColor,
    palette,
    isValidHex,
    colorName,
    configOutput,
    generatePalette,
    copyConfig,
    copyHex,
  };
}
