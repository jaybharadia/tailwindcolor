<template>
  <div class="space-y-2">
    <div 
      v-for="shade in shades"
      :key="shade"
      class="relative group cursor-pointer"
      @click="$emit('copy', getShadeColor(shade))"
    >
      <div 
        class="h-12 rounded-lg transition-transform hover:scale-105"
        :style="{ backgroundColor: getShadeColor(shade) }"
      >
        <div class="absolute inset-0 flex justify-between items-center px-3">
          <span class="font-medium" :class="getTextColor(getShadeColor(shade))">
            {{ shade }}
          </span>
          <span class="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity" 
            :class="getTextColor(getShadeColor(shade))"
          >
            {{ getShadeColor(shade).toUpperCase() }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import chroma from 'chroma-js'

const props = defineProps<{
  baseColor: string
}>()

defineEmits<{
  (e: 'copy', hex: string): void
}>()

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const getTextColor = (bgColor: string) => {
  return chroma(bgColor).luminance() > 0.5 ? 'text-gray-900' : 'text-white'
}

const getShadeColor = (shade: number) => {
  const base = chroma(props.baseColor)
  if (shade === 500) return base.hex()
  
  if (shade < 500) {
    const mix = 1 - ((500 - shade) / 500)
    return chroma.mix('white', base, mix).hex()
  } else {
    const mix = 1 - ((shade - 500) / 500)
    return chroma.mix('black', base, mix).hex()
  }
}
</script>