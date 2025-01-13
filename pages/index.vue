<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <main class="pt-16">
      <ColorGenerator />
      <div class="space-y-12 px-4">
        <DefaultColorGrid />
      </div>
    </main>

    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const showAbout = ref(false);
</script>
