<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <AppHeader v-model="showAbout" />
    
    <main class="pt-16 pb-24">
      <PreviewSection :palette="currentPalette" />
    </main>
    
    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import { generateRandomPalette } from '~/utils/colors'

const showAbout = ref(false)
const currentPalette = ref(generateRandomPalette())

// Handle spacebar for new palette generation
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault()
      currentPalette.value = generateRandomPalette()
    }
  }
  
  window.addEventListener('keydown', handleKeydown)
  onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
})
</script>