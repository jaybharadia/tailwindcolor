<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-800">
      <UContainer class="h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8 text-primary-500" />
          <h1 class="text-xl font-bold">
            TailwindCSS Color Palette Generator
          </h1>
        </div>
        <div class="flex items-center gap-4">
          <UButton
            color="gray"
            variant="ghost"
            @click="showAbout = true"
          >
            About
          </UButton>
          <ThemeToggle />
        </div>
      </UContainer>
    </header>

    <main class="pt-16 pb-24">
      <ColorGenerator />
      <UContainer>
        <div class="space-y-12">
          <DefaultColorGrid />
        </div>
      </UContainer>
    </main>
    
    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import DefaultColorGrid from '~/components/DefaultColorGrid.vue'

const showAbout = ref(false)
</script>