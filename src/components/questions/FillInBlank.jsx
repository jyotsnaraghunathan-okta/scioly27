import { useState } from 'react'

export default function FillInBlank({ question, onAnswer, showResult = false, selectedAnswer }) {
  const [value, setValue] = useState(selectedAnswer ?? '')
  const [submitted, setSubmitted] = useState(showResult)

  const accepted = Array.isArray(question.answer) ? question.answer : [question.answer]
  const isCorrect = accepted.some(
    (a) => String(a).toLowerCase().trim() === String(value).toLowerCase().trim()
  )

  const handleSubmit = () => {
    setSubmitted(true)
    onAnswer?.(value)
  }

  return (
    <div>
      <p className="text-gray-900 font-medium mb-4 leading-relaxed">{question.question}</p>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !submitted && value && handleSubmit()}
          disabled={submitted}
          placeholder="Type your answer..."
          className={`flex-1 px-4 py-2.5 border-2 rounded-lg text-sm focus:outline-none ${
            submitted
              ? isCorrect
                ? 'border-green-500 bg-green-50'
                : 'border-red-500 bg-red-50'
              : 'border-gray-300 focus:border-blue-500'
          }`}
        />
        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={!value}
            className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 cursor-pointer border-none"
          >
            Check
          </button>
        )}
      </div>
      {submitted && (
        <div className={`mt-3 p-3 rounded-lg text-sm animate-fade-in ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {isCorrect ? (
            <p className="text-green-700 font-medium">✓ Correct!</p>
          ) : (
            <p className="text-red-700">
              <span className="font-medium">✕ Incorrect.</span> Accepted answer{accepted.length > 1 ? 's' : ''}: {accepted.join(', ')}
            </p>
          )}
        </div>
      )}
      {submitted && question.explanation && (
        <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-fade-in">
          <p className="text-sm font-semibold text-blue-700 mb-1">Explanation</p>
          <p className="text-sm text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
