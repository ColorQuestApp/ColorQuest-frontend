import { useState } from 'react'
import { calculateStars } from '@/utils/calculateStars'
import { readProgress, saveProgress } from '@/utils/progressStorage'

interface LevelResult {
  storyName: string
  level: number
  correctAnswers: number
  totalAnswers: number
}

export function useLevelStars() {
  const [progress, setProgress] = useState(readProgress)

  function getStars(storyName: string, level: number): number {
    return progress[storyName]?.[level] ?? 0
  }

  function completeLevel({ storyName, level, correctAnswers, totalAnswers }: LevelResult): number {
    const stars = calculateStars(correctAnswers, totalAnswers)
    const saved = readProgress()
    const best = Math.max(stars, saved[storyName]?.[level] ?? 0)
    const updated = { ...saved, [storyName]: { ...saved[storyName], [level]: best } }

    saveProgress(updated)
    setProgress(updated)
    return stars
  }

  return { progress, getStars, completeLevel }
}
