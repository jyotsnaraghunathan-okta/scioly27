import { useState, useEffect } from 'react'

export default function FlashcardCard({ card, onRate, showAnswer = false }) {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    setFlipped(showAnswer)
  }, [card.id, showAnswer])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
      if (flipped && onRate) {
        if (e.key === '1') onRate(0) // Again
        if (e.key === '2') onRate(1) // Hard
        if (e.key === '3') onRate(2) // Good
        if (e.key === '4') onRate(3) // Easy
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [flipped, onRate])

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        className="relative cursor-pointer"
        style={{ perspective: '1000px', minHeight: '280px' }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`flashcard-inner w-full h-full ${flipped ? 'flipped' : ''}`} style={{ minHeight: '280px' }}>
          {/* Front */}
          <div className="flashcard-face bg-white rounded-xl border-2 border-blue-200 p-8 flex flex-col items-center justify-center text-center shadow-lg w-full" style={{ minHeight: '280px' }}>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">{card.subtopic}</p>
            <p className="text-lg font-medium text-gray-900 leading-relaxed">{card.front}</p>
            <p className="text-xs text-gray-400 mt-6">Click or press Space to flip</p>
          </div>
          {/* Back */}
          <div className="flashcard-face flashcard-back bg-blue-700 rounded-xl border-2 border-blue-800 p-8 flex flex-col items-center justify-center text-center shadow-lg w-full" style={{ minHeight: '280px' }}>
            <p className="text-xs text-blue-200 mb-4 uppercase tracking-wide">Answer</p>
            <p className="text-lg text-white leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>

      {/* Rating buttons */}
      {flipped && onRate && (
        <div className="flex justify-center gap-3 mt-6 animate-fade-in">
          <RateButton onClick={() => onRate(0)} color="red" label="Again" shortcut="1" />
          <RateButton onClick={() => onRate(1)} color="orange" label="Hard" shortcut="2" />
          <RateButton onClick={() => onRate(2)} color="green" label="Good" shortcut="3" />
          <RateButton onClick={() => onRate(3)} color="blue" label="Easy" shortcut="4" />
        </div>
      )}
    </div>
  )
}

function RateButton({ onClick, color, label, shortcut }) {
  const colors = {
    red: 'bg-red-100 hover:bg-red-200 text-red-700 border-red-200',
    orange: 'bg-orange-100 hover:bg-orange-200 text-orange-700 border-orange-200',
    green: 'bg-green-100 hover:bg-green-200 text-green-700 border-green-200',
    blue: 'bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200',
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition-colors ${colors[color]}`}
    >
      {label} <span className="text-xs opacity-60">({shortcut})</span>
    </button>
  )
}
