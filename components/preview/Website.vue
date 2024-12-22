<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">Website Preview</h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-arrows-pointing-out-20-solid"
          @click="isFullscreen = !isFullscreen"
        >
          {{ isFullscreen ? 'Exit Preview' : 'Full Preview' }}
        </UButton>
      </div>
    </template>

    <div :class="[
      'transition-all duration-300',
      isFullscreen ? 'fixed inset-4 z-50 bg-white dark:bg-gray-900 rounded-lg p-4 overflow-auto' : ''
    ]">
      <!-- Mock Website Layout -->
      <div class="space-y-8">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b" :style="{ borderColor: palette?.[200] }">
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 rounded" :style="{ backgroundColor: palette?.[500] }"></div>
            <div class="space-y-2">
              <div class="w-32 h-4 rounded" :style="{ backgroundColor: palette?.[200] }"></div>
            </div>
          </div>
          <div class="flex gap-4">
            <div v-for="i in 3" :key="i" class="w-16 h-4 rounded" :style="{ backgroundColor: palette?.[200] }"></div>
          </div>
        </div>

        <!-- Hero Section -->
        <div class="p-8 rounded-lg" :style="{ backgroundColor: palette?.[100] }">
          <div class="max-w-2xl mx-auto space-y-4">
            <div class="w-3/4 h-8 rounded" :style="{ backgroundColor: palette?.[300] }"></div>
            <div class="space-y-2">
              <div v-for="i in 3" :key="i" class="w-full h-4 rounded" :style="{ backgroundColor: palette?.[200] }"></div>
            </div>
            <div class="flex gap-4">
              <div class="w-32 h-10 rounded" :style="{ backgroundColor: palette?.[500] }"></div>
              <div class="w-32 h-10 rounded" :style="{ backgroundColor: palette?.[200] }"></div>
            </div>
          </div>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="i in 3" :key="i" class="p-4 rounded-lg border" :style="{ borderColor: palette?.[200] }">
            <div class="space-y-4">
              <div class="w-16 h-16 rounded" :style="{ backgroundColor: palette?.[400] }"></div>
              <div class="w-3/4 h-4 rounded" :style="{ backgroundColor: palette?.[300] }"></div>
              <div class="space-y-2">
                <div v-for="j in 2" :key="j" class="w-full h-3 rounded" :style="{ backgroundColor: palette?.[200] }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t p-4" :style="{ borderColor: palette?.[200] }">
          <div class="flex justify-between items-center">
            <div class="w-32 h-4 rounded" :style="{ backgroundColor: palette?.[200] }"></div>
            <div class="flex gap-4">
              <div v-for="i in 4" :key="i" class="w-8 h-8 rounded" :style="{ backgroundColor: palette?.[300] }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const isFullscreen = ref(false)

const props = defineProps<{
  palette?: Record<string, string>
}>()

// Close fullscreen preview when clicking escape
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      isFullscreen.value = false
    }
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>