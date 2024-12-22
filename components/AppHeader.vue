<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-800"
  >
    <UContainer class="h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" class="w-8 h-8 text-primary-500" />
          <h1 class="text-xl font-bold hidden sm:block">
            TailwindCSS Color Palette Generator
          </h1>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <UButton
          variant="link"
          to="/visualizer"
          color="gray"
          active-class="text-primary-500"
        >
          Palette Visualizer
        </UButton>
        <UButton color="gray" variant="ghost" @click="showAbout = true">
          About
        </UButton>
        <ThemeToggle />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const showAbout = defineModel<boolean>("modelValue");
</script>
