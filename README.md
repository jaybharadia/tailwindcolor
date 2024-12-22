# TailwindCSS Color Palette Generator

A powerful and intuitive tool for generating beautiful color palettes for your Tailwind CSS projects. Create, preview, and export color configurations with live previews of UI components.

## Features

- 🎨 Generate complete color palettes from a single hex color
- 👁️ Live preview with real UI components
- 🌗 Dark/Light mode support
- 📱 Responsive design for all devices
- ⌨️ Keyboard shortcuts for quick generation
- 📋 One-click config copying
- 🎯 Real-time color validation
- 💅 Interactive color previews

## Project Structure

```
├── components/
│   ├── color/              # Color-related components
│   │   ├── ColorInput.vue
│   │   └── ColorShades.vue
│   ├── palette/           # Palette visualization
│   │   ├── PaletteViewer.vue
│   │   └── ColorGrid.vue
│   ├── preview/           # UI preview components
│   │   ├── ButtonsPreview.vue
│   │   ├── DashboardPreview.vue
│   │   ├── LogoPreview.vue
│   │   └── WebsitePreview.vue
│   └── layout/            # Layout components
│       ├── AppHeader.vue
│       └── AboutModal.vue
├── utils/
│   └── colors.ts         # Color manipulation utilities
├── composables/
│   └── useColorPalette.ts # Color palette logic
└── pages/
    ├── index.vue         # Main page
    └── visualizer.vue    # Color visualizer

```

## Tech Stack

- 🛠️ Nuxt 3 - Vue.js Framework
- 🎨 Tailwind CSS - Utility-first CSS
- 🎯 Nuxt UI - Component Library
- 📊 Chroma.js - Color manipulation
- 🔍 Color Namer - Color naming utility

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

```

## Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use composition API for logic
   - Implement proper prop validation
   - Document component usage
2. **State Management**
   - Use composables for shared logic
   - Implement proper reactive state
   - Handle side effects appropriately
3. **Performance**
   - Lazy load components when possible
   - Optimize color calculations
   - Implement proper memoization
4. **Accessibility**
   - Maintain proper contrast ratios
   - Implement keyboard navigation
   - Add proper ARIA labels
5. **Code Style**
   - Follow Vue.js style guide
   - Use TypeScript for type safety
   - Implement proper error handling
