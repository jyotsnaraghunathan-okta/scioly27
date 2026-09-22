import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { sm2, isDue, sortByDue } from '../utils/spacedRepetition'

export function useSpacedRepetition() {
  const [cardStates, setCardStates] = useLocalStorage('sc27-flashcard-states', {})

  const rateCard = useCallback((cardId, rating) => {
    setCardStates((prev) => ({
      ...prev,
      [cardId]: sm2(prev[cardId] || {}, rating),
    }))
  }, [setCardStates])

  const getDueCards = useCallback((cards) => {
    const due = cards.filter((c) => isDue(cardStates[c.id] || {}))
    return sortByDue(due, cardStates)
  }, [cardStates])

  const getCardState = useCallback((cardId) => cardStates[cardId] || null, [cardStates])

  const getStats = useCallback((cards) => {
    let newCount = 0, learningCount = 0, reviewCount = 0
    cards.forEach((c) => {
      const state = cardStates[c.id]
      if (!state) { newCount++; return }
      if (state.repetitions < 2) learningCount++
      else reviewCount++
    })
    return { newCount, learningCount, reviewCount, total: cards.length }
  }, [cardStates])

  return { cardStates, rateCard, getDueCards, getCardState, getStats }
}
