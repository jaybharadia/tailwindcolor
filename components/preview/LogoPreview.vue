<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Logo & Branding</h3>
    </template>
    
    <div class="space-y-8 p-4">
      <!-- Minimal Logo -->
      <div class="flex items-center justify-center p-8" :style="{ backgroundColor: palette?.[50] }">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl" :style="{ backgroundColor: palette?.[500] }">
            <div class="w-6 h-6 rounded-full translate-x-4 translate-y-2" :style="{ backgroundColor: palette?.[300] }"></div>
          </div>
          <div class="text-2xl font-bold" :style="{ color: palette?.[900] }">brand</div>
        </div>
      </div>

      <!-- Color Variations -->
      <div class="grid grid-cols-4 gap-4">
        <div v-for="shade in [200, 400, 600, 800]" :key="shade" 
          class="aspect-square rounded-lg flex items-center justify-center"
          :style="{ backgroundColor: palette?.[shade] }">
          <div class="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L4 9V21H20V9L12 3Z" :fill="palette?.[shade >= 500 ? 200 : 800]"/>
            </svg>
          </div>
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