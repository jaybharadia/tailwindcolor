<template>
  <div>
    <div class="flex items-center gap-4 justify-center">
      <div class="w-48">
        <UInput
          :model-value="modelValue"
          :color="isValidHex ? 'primary' : 'red'"
          placeholder="Enter hex color"
          class="font-mono"
          icon="i-heroicons-swatch-20-solid"
          autofocus
          :ui="{
            input: {
              base: 'transition-all duration-200',
              padding: { sm: 'p-2' },
              border: {
                base: 'border-2',
              },
              color: {
                gray: {
                  outline: isValidHex ? `border-[#${modelValue}]` : '',
                },
              },
            },
          }"
          @update:model-value="handleInput"
          @keyup.enter="$emit('generate')"
        />
      </div>
      <UButton
        :disabled="!isValidHex"
        @click="$emit('generate')"
        icon="i-heroicons-sparkles-20-solid"
        :color="isValidHex ? 'primary' : 'gray'"
        :style="
          isValidHex
            ? {
                backgroundColor: `#${modelValue}`,
                color: getTextColor(`#${modelValue}`),
              }
            : {}
        "
      >
        Generate Colors
      </UButton>
    </div>
    <div v-if="colorName" class="text-sm mt-2">
      Suggested name: <span class="font-semibold">{{ colorName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import chroma from "chroma-js";

const props = defineProps<{
  modelValue: string;
  colorName?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "generate"): void;
}>();

const isValidHex = computed(() => {
  return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(props.modelValue);
});

function handleInput(value: string) {
  emit("update:modelValue", value.replace(/[^A-Fa-f0-9]/g, ""));
}

function getTextColor(bgColor: string) {
  return chroma(bgColor).luminance() > 0.5 ? "#000000" : "#ffffff";
}
</script>
