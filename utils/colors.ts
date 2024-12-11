import chroma from 'chroma-js'
import colorNamer from 'color-namer'

export interface ColorPalette {
  [key: number]: string
}

export function generateShades(baseColor: string): ColorPalette {
  const base = chroma(baseColor)
  const palette: ColorPalette = {}

  // Generate lighter shades (50-400)
  for (let i = 0; i < 5; i++) {
    const shade = [50, 100, 200, 300, 400][i]
    const mix = 1 - (i * 0.2)
    palette[shade] = chroma.mix('white', base, mix).hex()
  }

  // Base color for 500
  palette[500] = base.hex()

  // Generate darker shades (600-900)
  for (let i = 1; i <= 4; i++) {
    const shade = [600, 700, 800, 900][i - 1]
    const mix = 1 - (i * 0.2)
    palette[shade] = chroma.mix('black', base, mix).hex()
  }

  return palette
}

export function getColorName(hex: string): string {
  return colorNamer(hex).ntc[0].name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
}

export function isValidHex(color: string): boolean {
  return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color.replace('#', ''))
}

export function getTextColor(bgColor: string): string {
  return chroma(bgColor).luminance() > 0.5 ? '#000000' : '#ffffff'
}

export function generateRandomColor(): string {
  return chroma.random().hex()
}

export function generateRandomPalette(): ColorPalette {
  return generateShades(generateRandomColor())
}

export function getTailwindConfig(colorName: string, palette: ColorPalette) {
  return {
    theme: {
      extend: {
        colors: {
          [colorName]: palette
        }
      }
    }
  }
}