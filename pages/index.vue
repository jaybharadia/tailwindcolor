<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <AppHeader v-model="showAbout" />
    
    <main class="pt-16 pb-24">
      <ColorGenerator />
      <UContainer>
        <div class="space-y-12">
          <DefaultColorGrid />
        </div>
      </UContainer>
    </main>
    
    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const showAbout = ref(false)
</script>