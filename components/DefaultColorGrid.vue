<template>
  <div class="overflow-x-auto">
    <!-- Color Grid Container -->
    <div class="min-w-[768px]">
      <!-- Color Names Header -->
      <div class="grid grid-cols-22 gap-1 mb-1">
        <div v-for="color in colorNames" :key="color" class="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
          {{ color }}
        </div>
      </div>

      <!-- Color Shades Grid -->
      <div class="grid grid-cols-22 gap-1">
        <div v-for="colorName in colorNames" :key="colorName" class="space-y-1">
          <div
            v-for="shade in shades"
            :key="`${colorName}-${shade}`"
            class="group relative h-10 rounded-md transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
            :style="{ backgroundColor: getTailwindColor(colorName, shade) }"
            tabindex="0"
            role="button"
            :aria-label="`Copy ${colorName}-${shade} color`"
            @click="copyColorValue(colorName, shade)"
            @keydown.enter="copyColorValue(colorName, shade)"
            @keydown.space.prevent="copyColorValue(colorName, shade)"
          >
            <!-- Shade Label Overlay -->
            <div 
              class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity text-xs"
              :class="getTextColorClass(getTailwindColor(colorName, shade))"
            >
              {{ shade }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import chroma from "chroma-js";

const { copy } = useClipboard();
const toast = useToast();

const colorNames = [
  'Slate', 'Gray', 'Zinc', 'Neutral', 'Stone',
  'Red', 'Orange', 'Amber', 'Yellow', 'Lime',
  'Green', 'Emerald', 'Teal', 'Cyan', 'Sky',
  'Blue', 'Indigo', 'Violet', 'Purple', 'Fuchsia',
  'Pink', 'Rose'
];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Tailwind color mapping
const tailwindColors = {
  Slate: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a'],
  Gray: ['#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827'],
  Zinc: ['#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b'],
  Neutral: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717'],
  Stone: ['#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e', '#44403c', '#292524', '#1c1917'],
  Red: ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'],
  Orange: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12'],
  Amber: ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f'],
  Yellow: ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12'],
  Lime: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314'],
  Green: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'],
  Emerald: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b'],
  Teal: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a'],
  Cyan: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63'],
  Sky: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'],
  Blue: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a'],
  Indigo: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81'],
  Violet: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'],
  Purple: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87'],
  Fuchsia: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75'],
  Pink: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843'],
  Rose: ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337']
} as const;

// Get color for a specific shade
const getTailwindColor = (colorName: string, shade: number) => {
  const index = shades.indexOf(shade);
  return tailwindColors[colorName as keyof typeof tailwindColors][index];
};

// Get text color class based on background
const getTextColorClass = (bgColor: string) => {
  return chroma(bgColor).luminance() > 0.5 ? 'text-gray-900' : 'text-white';
};

// Copy color value
const copyColorValue = async (colorName: string, shade: number) => {
  const color = getTailwindColor(colorName, shade);
  await copy(color);
  
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  toast.clear();
  toast.add({
    title: "Color copied!",
    description: `${colorName}-${shade}: ${color.toUpperCase()}`,
    icon: "i-heroicons-check-circle-20-solid",
  });
};
</script>

<style scoped>
.grid-cols-22 {
  grid-template-columns: repeat(22, minmax(0, 1fr));
}
</style>