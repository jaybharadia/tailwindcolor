<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <LogoPreview :palette="palette" />
    <ButtonsPreview :palette="palette" />
    <DashboardPreview :palette="palette" />
    <IllustrationPreview :palette="palette" />
  </div>
</template>

<script setup lang="ts">
import LogoPreview from './LogoPreview.vue'
import ButtonsPreview from './ButtonsPreview.vue'
import DashboardPreview from './DashboardPreview.vue'
import IllustrationPreview from './IllustrationPreview.vue'

defineProps<{
  palette?: Record<string, string>
}>()
</script>