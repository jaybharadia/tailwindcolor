<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Dashboard Layout</h3>
    </template>
    
    <div class="p-4 rounded-lg" :style="{ backgroundColor: palette?.[50] }">
      <!-- Sidebar -->
      <div class="flex gap-4">
        <div class="w-16 flex flex-col gap-4" :style="{ backgroundColor: palette?.[900] }">
          <div v-for="i in 4" :key="i" 
            class="w-8 h-8 mx-auto mt-4 rounded-lg"
            :style="{ backgroundColor: palette?.[700] }">
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 space-y-4">
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div v-for="i in 3" :key="i" 
              class="p-4 rounded-lg"
              :style="{ backgroundColor: palette?.[i * 100] }">
              <div class="w-full h-2 rounded-full" :style="{ backgroundColor: palette?.[i * 200] }"></div>
            </div>
          </div>

          <!-- Chart -->
          <div class="h-32 rounded-lg flex items-end gap-2 p-4"
            :style="{ backgroundColor: 'white' }">
            <div v-for="i in 6" :key="i"
              class="flex-1 rounded-t-lg"
              :style="{ 
                height: `${Math.random() * 100}%`,
                backgroundColor: palette?.[500]
              }">
            </div>
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