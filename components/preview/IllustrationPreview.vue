<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Illustration Style</h3>
    </template>
    
    <div class="p-8 aspect-video rounded-lg relative overflow-hidden" :style="{ backgroundColor: palette?.[100] }">
      <!-- Abstract Shapes -->
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Circle -->
        <div class="absolute w-48 h-48 rounded-full"
          :style="{ backgroundColor: palette?.[300] }">
        </div>
        <!-- Square -->
        <div class="absolute w-32 h-32 rotate-45"
          :style="{ backgroundColor: palette?.[500] }">
        </div>
        <!-- Triangle -->
        <div class="absolute w-0 h-0 border-l-[50px] border-r-[50px] border-b-[100px]"
          :style="{ 
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: palette?.[700]
          }">
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute bottom-4 right-4 flex gap-2">
        <div v-for="shade in [200, 400, 600]" :key="shade"
          class="w-3 h-3 rounded-full"
          :style="{ backgroundColor: palette?.[shade] }">
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