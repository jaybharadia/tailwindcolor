<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
    <AppHeader v-model="showAbout" />

    <main class="pt-16 pb-24">
      <NuxtPage />
      <footer>
        <UContainer>
          <div class="flex justify-center">
            <a href="https://www.buymeacoffee.com/jaybharadia" target="_blank"
              ><img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
                alt="Buy Me A Coffee"
                style="height: 40px !important"
            /></a>
          </div>

          <hr class="my-4" />
          <div class="flex justify-center items-center">
            <div>
              © 2025
              <a
                href="https://www.meticha.com/"
                class="hover:underline bg-gradient-to-r from-[#FF4A98] to-[#9D61FF] bg-clip-text text-transparent"
                >Meticha</a
              >. All rights reserved.
            </div>
            <!-- <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Powered By</p>
              <img
                src="/meticha-light-logo.png"
                alt="Meticha Light Logo"
                class="w-24 mt-2 hidden dark:block"
              />
              <img
                src="/meticha-dark-logo.png"
                alt="Meticha Dark Logo"
                class="w-24 mt-2 dark:hidden"
              />
            </div>
            <div></div> -->
          </div>
        </UContainer>
      </footer>
    </main>

    <AboutModal v-model="showAbout" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const showAbout = ref(false);
</script>
