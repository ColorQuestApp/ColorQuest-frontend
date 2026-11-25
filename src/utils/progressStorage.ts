import { PROGRESS_KEY } from '@/constants/storage'

export type Progress = Record<string, Record<number, number>>

export function readProgress(): Progress {
  return JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? '{}')
}

export function saveProgress(progress: Progress): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}
