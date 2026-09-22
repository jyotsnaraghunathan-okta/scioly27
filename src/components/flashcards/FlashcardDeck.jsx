import { useState, useMemo } from 'react'
import FlashcardCard from './FlashcardCard'
import { useSpacedRepetition } from '../../hooks/useSpacedRepetition'

export default function FlashcardDeck({ cards, topicName }) {
  const { getDueCards, rateCard, getStats } = useSpacedRepetition()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sessionRatings, setSessionRatings] = useState([])
  const [sessionComplete, setSessionComplete] = useState(false)

  const dueCards = useMemo(() => getDueCards(cards), [cards, getDueCards])
  const sessionCards = useMemo(() => dueCards.length > 0 ? dueCards.slice(0, 20) : cards.slice(0, 20), [dueCards, cards])
  const stats = getStats(cards)

  const currentCard = sessionCards[currentIndex]

  const handleRate = (rating) => {
    rateCard(currentCard.id, rating)
    setSessionRatings((prev) => [...prev, { cardId: currentCard.id, rating }])

    if (currentIndex + 1 >= sessionCards.length) {
      setSessionComplete(true)
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  const restart = () => {
    setCurrentIndex(0)
    setSessionRatings([])
    setSessionComplete(false)
  }

  if (cards.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">🃏</p>
        <p>No flashcards available for this topic.</p>
      </div>
    )
  }

  if (sessionComplete) {
    const ratingLabels = ['Again', 'Hard', 'Good', 'Easy']
    const ratingCounts = [0, 0, 0, 0]
    sessionRatings.forEach((r) => ratingCounts[r.rating]++)
    const accuracy = sessionRatings.length > 0
      ? Math.round((sessionRatings.filter((r) => r.rating >= 2).length / sessionRatings.length) * 100)
      : 0

    return (
      <div className="max-w-xl mx-auto text-center py-8 animate-fade-in">
        <p className="text-5xl mb-4">🎉</p>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Session Complete!</h2>
        <p className="text-gray-500 mb-6">You reviewed {sessionRatings.length} cards</p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="text-3xl font-bold text-blue-600 mb-1">{accuracy}%</div>
          <p className="text-sm text-gray-500 mb-4">Cards rated Good or Easy</p>
          <div className="grid grid-cols-4 gap-2">
            {ratingLabels.map((label, i) => (
              <div key={label} className="text-center">
                <div className="text-lg font-semibold">{ratingCounts[i]}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm text-gray-600">
          <p className="font-medium mb-1">Deck Stats</p>
          <p>New: {stats.newCount} | Learning: {stats.learningCount} | Review: {stats.reviewCount}</p>
        </div>

        <button
          onClick={restart}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer border-none"
        >
          Study Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-gray-900">{topicName}</h3>
          <p className="text-sm text-gray-500">
            Card {currentIndex + 1} of {sessionCards.length}
            {dueCards.length > 0 && ` (${dueCards.length} due for review)`}
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">New: {stats.newCount}</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Learning: {stats.learningCount}</span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Review: {stats.reviewCount}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div
          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
        />
      </div>

      <FlashcardCard card={currentCard} onRate={handleRate} />
    </div>
  )
}
