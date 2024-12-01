<template>
  <section class="relative overflow-hidden py-16 mb-12">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
    
    <UContainer>
      <div class="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <div class="space-y-4">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
            Generate Your Perfect Palette
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Enter a hex color code to generate a complete color palette with light and dark shades
          </p>
        </div>

        <ColorInput 
          v-model="color"
          :color-name="colorName"
          @generate="generatePalette"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const color = ref('')
const colorName = ref('')

const emit = defineEmits<{
  (e: 'generate', color: string): void
}>()

function generatePalette() {
  emit('generate', color.value)
}
</script>