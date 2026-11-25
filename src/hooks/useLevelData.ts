import { useCallback, useState } from 'react'
import { generateLevel } from '@/utils/generateLevel'

export function useLevelData(level: number) {
  const [current, setCurrent] = useState(() => ({ level, data: generateLevel(level) }))

  if (!Object.is(current.level, level)) {
    setCurrent({ level, data: generateLevel(level) })
  }

  const regenerate = useCallback(() => {
    setCurrent({ level, data: generateLevel(level) })
  }, [level])

  return { levelData: current.data, regenerate }
}
