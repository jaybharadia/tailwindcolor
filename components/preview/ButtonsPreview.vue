<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Buttons & UI Elements</h3>
    </template>
    
    <div class="space-y-6 p-4">
      <!-- Primary Buttons -->
      <div class="flex flex-wrap gap-4">
        <button class="px-4 py-2 rounded-lg flex items-center gap-2 text-white transition-transform hover:scale-105"
          :style="{ backgroundColor: palette?.[500] }">
          <UIcon name="i-heroicons-plus-20-solid" />
          <span>Create New</span>
        </button>
        <button class="px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
          :style="{ 
            backgroundColor: palette?.[100],
            color: palette?.[700],
            borderWidth: '2px',
            borderColor: palette?.[300]
          }">
          <UIcon name="i-heroicons-arrow-path-20-solid" />
          <span>Refresh</span>
        </button>
      </div>

      <!-- Toggle & Badge -->
      <div class="flex items-center gap-6">
        <div class="w-12 h-6 rounded-full relative cursor-pointer"
          :style="{ backgroundColor: palette?.[200] }">
          <div class="absolute w-5 h-5 rounded-full top-0.5 right-0.5 transition-transform"
            :style="{ backgroundColor: palette?.[500] }">
          </div>
        </div>
        <div class="px-3 py-1 rounded-full text-sm"
          :style="{ 
            backgroundColor: palette?.[100],
            color: palette?.[700]
          }">
          New Feature
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  palette?: Record<string, string>
}>()
</script>