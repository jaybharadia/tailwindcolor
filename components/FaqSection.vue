<template>
  <section class="max-w-4xl mx-auto my-16 px-4">
    <div class="text-center mb-12 space-y-3">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
        Frequently Asked Questions & Guide
      </h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Everything you need to know about generating, customizing, and exporting color palettes for Tailwind CSS v3 & v4.
      </p>
    </div>

    <div class="space-y-6">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm transition-all hover:shadow-md"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <UIcon name="i-heroicons-question-mark-circle-20-solid" class="text-primary-500 shrink-0" />
          {{ faq.question }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: "How do I generate custom color shades for Tailwind CSS?",
    answer:
      "Enter any HEX color value or use our random generator above. Our algorithm automatically computes a full 10-shade palette (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950) with optimized lightness and color contrast curves."
  },
  {
    question: "How do I add generated colors to tailwind.config.js?",
    answer:
      "After generating your palette, click 'Copy Config'. Open your tailwind.config.js file and paste the object inside theme.extend.colors. For example: module.exports = { theme: { extend: { colors: { brand: { 50: '#f8fafc', ..., 950: '#0f172a' } } } } }."
  },
  {
    question: "Does this Tailwind color generator support Tailwind v4?",
    answer:
      "Yes! The generated HEX values are 100% compatible with Tailwind CSS v3 and Tailwind CSS v4 (@theme directives and OKLCH color spaces)."
  },
  {
    question: "How do Tailwind CSS color shade numbers (50 to 950) work?",
    answer:
      "Shade 50 is the lightest tint (ideal for backgrounds and soft badges), shade 500 is the base brand color, and shade 950 is the darkest shade (ideal for dark mode, borders, and high-contrast text elements)."
  },
  {
    question: "Is this Tailwind Color Generator free to use?",
    answer:
      "Yes! Tailwindcolors by Meticha is completely free, client-side, and requires no registration or server overhead."
  }
];

// Inject FAQPage Schema for Google AEO & AI Overviews
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      })
    }
  ]
});
</script>
