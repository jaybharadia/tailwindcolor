<template>
  <section class="py-12 h-screen">
    <UContainer>
      <div class="space-y-8 h-full">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-2">Preview Components</h2>
          <p class="text-gray-600 dark:text-gray-300">
            See how your color palette looks in real-world components
          </p>
        </div>
        
        <PreviewGrid :palette="palette" />
        <PreviewWebsite :palette="palette" />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  palette?: Record<string, string>
}>()
</script>