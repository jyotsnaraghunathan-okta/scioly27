import { useState } from 'react'

export default function FreeResponse({ question, showResult = false }) {
  const [value, setValue] = useState('')
  const [score, setScore] = useState(null) // 'full' | 'partial' | 'missed'

  return (
    <div>
      <p className="text-gray-900 font-medium mb-1 leading-relaxed">{question.question}</p>
      {question.points && (
        <p className="text-xs text-gray-400 mb-4">{question.points} points</p>
      )}

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={showResult}
        placeholder="Write your answer here..."
        rows={5}
        className={`w-full px-4 py-3 border-2 rounded-lg text-sm focus:outline-none resize-y leading-relaxed ${
          showResult ? 'border-gray-200 bg-gray-50 text-gray-600' : 'border-gray-300 focus:border-blue-500'
        }`}
      />

      {showResult && (
        <div className="mt-4 space-y-3 animate-fade-in">
          {/* Model answer */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Model Answer</p>
            <p className="text-sm text-blue-900 leading-relaxed whitespace-pre-line">{question.modelAnswer}</p>
          </div>

          {/* Key points checklist */}
          {question.keyPoints?.length > 0 && (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Points</p>
              <ul className="space-y-1.5">
                {question.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-violet-500 mt-0.5 flex-shrink-0">•</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Self-grade */}
          {!score && (
            <div>
              <p className="text-xs text-gray-500 mb-2">How did you do?</p>
              <div className="flex gap-2">
                <button onClick={() => setScore('full')}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-transparent cursor-pointer border-green-300 text-green-700 hover:bg-green-50">
                  ✓ Got it
                </button>
                <button onClick={() => setScore('partial')}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-transparent cursor-pointer border-yellow-300 text-yellow-700 hover:bg-yellow-50">
                  ~ Partial
                </button>
                <button onClick={() => setScore('missed')}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border bg-transparent cursor-pointer border-red-300 text-red-700 hover:bg-red-50">
                  ✕ Missed
                </button>
              </div>
            </div>
          )}
          {score && (
            <p className={`text-sm font-medium ${score === 'full' ? 'text-green-600' : score === 'partial' ? 'text-yellow-600' : 'text-red-600'}`}>
              {score === 'full' ? '✓ Got it — great work!' : score === 'partial' ? '~ Partial — review the key points above' : '✕ Missed — study this concept before the test'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
