<template>
  <USlideover
    :model-value="modelValue"
    :ui="{
      width: 'w-full sm:w-[32rem]',
      overlay: { background: 'bg-gray-950/50 dark:bg-gray-950/75' },
      base: 'overflow-hidden'
    }"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #header>
      <div class="flex justify-between items-center p-4 border-b dark:border-gray-800">
        <h3 class="text-lg font-semibold">Generated Palette</h3>
        <div class="flex gap-2">
          <UButton
            icon="i-heroicons-clipboard-20-solid"
            @click="$emit('copy-config')"
          >
            Copy Config
          </UButton>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            @click="$emit('update:modelValue', false)"
            class="!ml-2"
          >
            <span class="sr-only">Close panel</span>
          </UButton>
        </div>
      </div>
    </template>

    <div class="p-4 space-y-8 h-[calc(100vh-4rem)] overflow-y-auto">
      <ColorShades
        v-if="palette"
        :base-color="baseColor"
        @copy="$emit('copy-hex', $event)"
      />

      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Tailwind Config</h3>
        </template>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code>{{ configOutput }}</code></pre>
      </UCard>
    </div>

    <!-- Mobile close button at bottom -->
    <div class="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <UButton
        block
        color="gray"
        variant="soft"
        @click="$emit('update:modelValue', false)"
      >
        Close
      </UButton>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  baseColor: string
  palette?: Record<string, string>
  configOutput: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'copy-config'): void
  (e: 'copy-hex', hex: string): void
}>()
</script>