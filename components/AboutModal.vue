<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold">About the Creator</h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            @click="isOpen = false"
          />
        </div>
      </template>

      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row gap-6 items-center">
          <img
            src="https://creatorspace.imgix.net/users/clhpw83ja00aonz01bujxn9p4/mdlwSMk9Q3Hqcbs1-IMG_20240922_113433_789.jpg?w=300&h=300"
            alt="Jay Bharadia"
            class="w-32 h-32 rounded-full object-cover"
          />
          <div class="space-y-4 text-center sm:text-left">
            <h4 class="text-lg font-semibold">Jay Bharadia</h4>
            <p class="text-gray-600 dark:text-gray-300">
              Creator of TailwindCSS Color Palette Generator
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <a
            href="https://www.linkedin.com/in/jaybharadia/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
          >
            <UIcon name="i-simple-icons-linkedin" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/jay_bharadia"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
          >
            <UIcon name="i-simple-icons-twitter" />
            <span>Twitter</span>
          </a>
          <a
            href="mailto:jay.p.bharadia@gmail.com"
            class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
          >
            <UIcon name="i-heroicons-envelope-20-solid" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>('modelValue')
</script>