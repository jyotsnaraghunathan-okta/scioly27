import { useState, useMemo } from 'react'

export default function MatchingQuestion({ question, onAnswer, showResult = false, selectedAnswer }) {
  const shuffledRight = useMemo(
    () => [...question.pairs.map((p) => p.right)].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id]
  )

  const [selectedLeft, setSelectedLeft] = useState(null)
  const [userMatches, setUserMatches] = useState(selectedAnswer ?? {})

  const handleLeftClick = (i) => {
    setSelectedLeft(i === selectedLeft ? null : i)
  }

  const handleRightClick = (item) => {
    if (selectedLeft === null) return
    const newMatches = { ...userMatches, [selectedLeft]: item }
    setUserMatches(newMatches)
    onAnswer?.(newMatches)
    setSelectedLeft(null)
  }

  const handleReset = () => {
    setUserMatches({})
    setSelectedLeft(null)
    onAnswer?.({})
  }

  // ── Analyze mode ──────────────────────────────────────────────────────────
  if (showResult) {
    const matches = selectedAnswer ?? {}
    return (
      <div>
        <p className="text-gray-900 font-medium mb-4 leading-relaxed">{question.question}</p>
        <div className="space-y-2 mb-4">
          {question.pairs.map((pair, i) => {
            const userAnswer = matches[i]
            const correct = userAnswer === pair.right
            const answered = userAnswer !== undefined
            return (
              <div
                key={i}
                className={`p-3 rounded-lg border-2 ${
                  !answered
                    ? 'border-gray-200 bg-gray-50'
                    : correct
                    ? 'border-green-400 bg-green-50'
                    : 'border-red-300 bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    <span className="text-gray-400 mr-1.5">{i + 1}.</span>
                    {pair.left}
                  </span>
                  {answered && (
                    <span className={`text-base font-bold flex-shrink-0 ${correct ? 'text-green-600' : 'text-red-500'}`}>
                      {correct ? '✓' : '✗'}
                    </span>
                  )}
                </div>
                <div className="mt-1.5 text-sm space-y-0.5 ml-4">
                  {answered ? (
                    <p className={correct ? 'text-green-700' : 'text-red-600'}>
                      Your answer: {userAnswer}
                    </p>
                  ) : (
                    <p className="text-gray-400 italic">Not answered</p>
                  )}
                  {!correct && (
                    <p className="text-green-700 font-medium">Correct: {pair.right}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {question.explanation && (
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 animate-fade-in">
            <p className="text-sm font-semibold text-blue-700 mb-1">Explanation</p>
            <p className="text-sm text-blue-800">{question.explanation}</p>
          </div>
        )}
      </div>
    )
  }

  // ── Test mode (interactive matching, no answer reveal) ────────────────────
  const matchedRights = Object.values(userMatches)

  return (
    <div>
      <p className="text-gray-900 font-medium mb-3 leading-relaxed">{question.question}</p>
      {selectedLeft !== null && (
        <p className="text-xs text-blue-600 mb-2 font-medium">
          Now select a definition to match with term {selectedLeft + 1} →
        </p>
      )}
      <div className="grid grid-cols-2 gap-4 mb-3">
        {/* Left: terms */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Terms</p>
          <div className="space-y-2">
            {question.pairs.map((pair, i) => {
              const matched = userMatches[i]
              let style = 'border-gray-200 bg-gray-50 hover:border-blue-300'
              if (selectedLeft === i) style = 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
              else if (matched) style = 'border-emerald-300 bg-emerald-50'
              return (
                <button
                  key={i}
                  onClick={() => handleLeftClick(i)}
                  className={`w-full text-left p-2.5 rounded-lg border-2 text-sm transition-all cursor-pointer ${style}`}
                >
                  <span className="font-medium text-gray-500 mr-2">{i + 1}.</span>
                  {pair.left}
                  {matched && <span className="ml-1 text-xs text-emerald-600 font-normal"> ✓ matched</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: shuffled definitions */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            {selectedLeft !== null ? 'Select a definition →' : 'Definitions'}
          </p>
          <div className="space-y-2">
            {shuffledRight.map((item, i) => {
              const isUsed = matchedRights.includes(item)
              return (
                <button
                  key={i}
                  onClick={() => handleRightClick(item)}
                  disabled={isUsed || selectedLeft === null}
                  className={`w-full text-left p-2.5 rounded-lg border-2 text-sm transition-all ${
                    isUsed
                      ? 'border-gray-200 bg-gray-100 opacity-40 cursor-not-allowed'
                      : selectedLeft !== null
                      ? 'border-blue-200 bg-blue-50 hover:border-blue-500 hover:bg-blue-100 cursor-pointer'
                      : 'border-gray-200 bg-gray-50 cursor-default'
                  }`}
                >
                  <span className="font-medium text-gray-400 mr-2">{String.fromCharCode(65 + i)}.</span>
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {Object.keys(userMatches).length > 0 && (
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 cursor-pointer bg-white"
        >
          Reset Matches
        </button>
      )}
    </div>
  )
}
