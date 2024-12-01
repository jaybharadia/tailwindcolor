<template>
  <div>
    <HeroSection
      @generate="generatePalette"
    />
    
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
import chroma from 'chroma-js'
import colorNamer from 'color-namer'
import { useClipboard } from '@vueuse/core'
import { useToast } from '#imports'

const { copy } = useClipboard()
const toast = useToast()

const baseColor = ref('')
const palette = ref<Record<string, string>>()
const colorName = ref('')
const showPalette = ref(false)

const configOutput = computed(() => {
  if (!palette.value) return ''
  
  const config = {
    theme: {
      extend: {
        colors: {
          [colorName.value]: palette.value
        }
      }
    }
  }
  
  return JSON.stringify(config, null, 2)
})

async function copyHex(hex: string) {
  await copy(hex)
  if (navigator.vibrate) {
    navigator.vibrate(50)
  }
  toast.add({
    title: 'Color copied!',
    description: `${hex.toUpperCase()} has been copied to your clipboard.`,
    icon: 'i-heroicons-check-circle-20-solid'
  })
}

async function copyConfig() {
  if (!configOutput.value) return
  await copy(configOutput.value)
  if (navigator.vibrate) {
    navigator.vibrate(50)
  }
  toast.add({
    title: 'Config copied!',
    description: 'The Tailwind config has been copied to your clipboard.',
    icon: 'i-heroicons-check-circle-20-solid'
  })
}

function generatePalette(color: string) {
  baseColor.value = '#' + color
  const base = chroma(baseColor.value)
  const name = colorNamer(baseColor.value).ntc[0].name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
  
  colorName.value = name
  palette.value = {}

  // Generate lighter shades (50-400)
  for (let i = 0; i < 5; i++) {
    const shade = [50, 100, 200, 300, 400][i]
    const mix = 1 - (i * 0.2)
    palette.value[shade] = chroma.mix('white', base, mix).hex()
  }

  // Base color for 500
  palette.value[500] = base.hex()

  // Generate darker shades (600-900)
  for (let i = 1; i <= 4; i++) {
    const shade = [600, 700, 800, 900][i - 1]
    const mix = 1 - (i * 0.2)
    palette.value[shade] = chroma.mix('black', base, mix).hex()
  }

  showPalette.value = true
  toast.add({
    title: 'Palette generated!',
    description: `Color palette for ${name} has been generated successfully.`,
    icon: 'i-heroicons-sparkles-20-solid'
  })
}
</script>