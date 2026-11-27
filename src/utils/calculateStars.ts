export function calculateStars(correctAnswers: number, totalAnswers: number): number {
  return Math.floor((correctAnswers * 3) / totalAnswers)
}
