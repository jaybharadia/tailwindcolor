<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-800">
    <UContainer class="h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8 text-primary-500" />
          <h1 class="text-xl font-bold">
            TailwindCSS Color Palette Generator
          </h1>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink 
          to="/visualizer"
          class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
        >
          Visualizer
        </NuxtLink>
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
</template>

<script setup lang="ts">
const showAbout = defineModel<boolean>('modelValue')
</script>