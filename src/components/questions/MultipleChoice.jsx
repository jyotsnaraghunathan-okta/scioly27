import { useState } from 'react'

export default function MultipleChoice({ question, onAnswer, showResult = false, selectedAnswer }) {
  const [selected, setSelected] = useState(selectedAnswer ?? null)
  const answered = showResult

  const handleSelect = (index) => {
    if (answered) return
    setSelected(index)
    onAnswer?.(index)
  }

  return (
    <div>
      <p className="text-gray-900 font-medium mb-4 leading-relaxed">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, i) => {
          let style = 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
          if (selected === i && !answered) {
            style = 'border-blue-500 bg-blue-50'
          }
          if (answered) {
            if (i === question.answer) {
              style = 'border-green-500 bg-green-50'
            } else if (i === selected && i !== question.answer) {
              style = 'border-red-500 bg-red-50'
            } else {
              style = 'border-gray-200 opacity-60'
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm cursor-pointer bg-white ${style}`}
            >
              <span className="font-medium text-gray-500 mr-2">{String.fromCharCode(65 + i)}.</span>
              {option.replace(/^[A-D]\)\s*/, '')}
              {answered && i === question.answer && <span className="ml-2 text-green-600">✓</span>}
              {answered && i === selected && i !== question.answer && <span className="ml-2 text-red-600">✕</span>}
            </button>
          )
        })}
      </div>
      {answered && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-fade-in">
          <p className="text-sm font-semibold text-blue-700 mb-1">Explanation</p>
          <p className="text-sm text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
