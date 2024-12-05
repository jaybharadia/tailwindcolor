<template>
  <div>
    <div class="text-center mb-6 hidden md:block">
      <UBadge color="gray" class="mb-4">
        <UIcon name="i-heroicons-keyboard-20-solid" class="mr-1" />
        Press spacebar to generate new colors
      </UBadge>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="group relative"
      >
        <ColorShades
          :base-color="color"
          @copy="copyHex"
        />
        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <UButton
            color="white"
            variant="solid"
            size="xs"
            icon="i-heroicons-clipboard-20-solid"
            @click="copyColorConfig(color, index)"
          >
            Copy Config
          </UButton>
        </div>
      </div>
    </div>

    <!-- Floating Action Button -->
    <button
      class="fixed bottom-6 right-6 bg-primary-500 hover:bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 active:scale-95 pulse-animation"
      @click="generateNewColors"
    >
      <UIcon name="i-heroicons-sparkles-20-solid" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import chroma from 'chroma-js'
import colorNamer from 'color-namer'

const { copy } = useClipboard()
const toast = useToast()

const colors = ref<string[]>([])

const generateRandomColor = () => {
  return chroma.random().hex()
}

const generateNewColors = () => {
  colors.value = Array.from({ length: 4 }, () => generateRandomColor())
  // Vibrate on mobile devices
  if (navigator.vibrate) {
    navigator.vibrate(100)
  }
  toast.add({
    title: 'New colors generated!',
    description: 'Press spacebar or the button to generate more colors.',
    icon: 'i-heroicons-sparkles-20-solid'
  })
}

const copyHex = async (hex: string) => {
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

const copyColorConfig = async (color: string, index: number) => {
  const base = chroma(color)
  const name = colorNamer(color).ntc[0].name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
  
  const palette: Record<string, string> = {}

  // Generate lighter shades (50-400)
  for (let i = 0; i < 5; i++) {
    const shade = [50, 100, 200, 300, 400][i]
    const mix = 1 - (i * 0.2)
    palette[shade] = chroma.mix('white', base, mix).hex()
  }

  // Base color for 500
  palette[500] = base.hex()

  // Generate darker shades (600-900)
  for (let i = 1; i <= 4; i++) {
    const shade = [600, 700, 800, 900][i - 1]
    const mix = 1 - (i * 0.2)
    palette[shade] = chroma.mix('black', base, mix).hex()
  }

  const config = {
    theme: {
      extend: {
        colors: {
          [name]: palette
        }
      }
    }
  }

  await copy(JSON.stringify(config, null, 2))
  if (navigator.vibrate) {
    navigator.vibrate(50)
  }
  toast.add({
    title: 'Config copied!',
    description: `Tailwind config for ${name} has been copied to your clipboard.`,
    icon: 'i-heroicons-check-circle-20-solid'
  })
}

onMounted(() => {
  generateNewColors()
  
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault()
      generateNewColors()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('keydown', () => {})
})
</script>

<style scoped>
.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-primary-500), 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--color-primary-500), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-primary-500), 0);
  }
}
</style>