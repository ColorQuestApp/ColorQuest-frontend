export interface PaletteColor {
  id: string
  hex: string
}

export const COLORS: readonly PaletteColor[] = [
  { id: 'red', hex: '#E53935' },
  { id: 'orange', hex: '#FB8C00' },
  { id: 'yellow', hex: '#FDD835' },
  { id: 'green', hex: '#43A047' },
  { id: 'turquoise', hex: '#26C6DA' },
  { id: 'blue', hex: '#1E50D8' },
  { id: 'purple', hex: '#8E24AA' },
  { id: 'pink', hex: '#F48FB1' },
  { id: 'brown', hex: '#795548' },
  { id: 'gray', hex: '#9E9E9E' },
]
