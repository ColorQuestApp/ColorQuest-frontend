import { COLORS, type PaletteColor } from '@/constants/colors'
import {
    GRID_COLUMNS,
    GRID_ROWS,
    MAX_CELLS,
    MAX_COLORS, MIN_CELLS,
    MIN_COLORS,
    TOTAL_LEVELS,
} from '@/constants/levels'
import { randomInt, shuffle } from '@/utils/random'

export interface LevelColor extends PaletteColor {
  number: number
}

export type LevelCell =
  | { id: string; isOut: false; number: number }
  | { id: string; isOut: true; number: null }

export interface LevelData {
  level: number
  cellCount: number
  colors: LevelColor[]
  grid: LevelCell[][]
}

function clampLevel(level: number): number {
  return Math.min(Math.max(Math.trunc(level) || 1, 1), TOTAL_LEVELS)
}

export function getCellCount(level: number): number {
  const steps = MAX_CELLS - MIN_CELLS + 1
  return MIN_CELLS + Math.floor(((clampLevel(level) - 1) * steps) / TOTAL_LEVELS)
}

function buildGrid(numbers: number[]): LevelCell[][] {
  return Array.from({ length: GRID_ROWS }, (_row, row) =>
    Array.from({ length: GRID_COLUMNS }, (_column, column): LevelCell => {
      const index = row * GRID_COLUMNS + column
      const id = `cell-${index}`
      return index < numbers.length
        ? { id, isOut: false, number: numbers[index] }
        : { id, isOut: true, number: null }
    }),
  )
}

export function generateLevel(requestedLevel: number): LevelData {
  const level = clampLevel(requestedLevel)
  const cellCount = getCellCount(level)
  const colorCount = randomInt(MIN_COLORS, Math.min(MAX_COLORS, cellCount))

  const colors = shuffle(COLORS)
    .slice(0, colorCount)
    .map((color, index) => ({ ...color, number: index + 1 }))

  const numbers = Array.from({ length: cellCount }, (_, index) =>
    index < colorCount ? index + 1 : randomInt(1, colorCount),
  )

  return { level, cellCount, colors, grid: buildGrid(shuffle(numbers)) }
}
