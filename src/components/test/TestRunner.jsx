import { useState, useCallback } from 'react'
import { useTimer } from '../../hooks/useTimer'
import { TEST_DURATION_MINUTES } from '../../utils/constants'
import MultipleChoice from '../questions/MultipleChoice'
import FillInBlank from '../questions/FillInBlank'
import CalculationQuestion from '../questions/CalculationQuestion'
import Badge from '../common/Badge'

export default function TestRunner({ questions, testId, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [flagged, setFlagged] = useState(new Set())
  const [submitted, setSubmitted] = useState(false)

  const handleExpire = useCallback(() => {
    handleSubmit()
  }, [])

  const { formatted, isRunning, start, timeLeft } = useTimer(TEST_DURATION_MINUTES, handleExpire)

  const [started, setStarted] = useState(false)

  const handleStart = () => {
    setStarted(true)
    start()
  }

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const toggleFlag = (index) => {
    setFlagged((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    onComplete?.(answers)
  }

  if (!started) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <p className="text-5xl mb-4">📝</p>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to begin?</h2>
        <p className="text-gray-500 mb-2">{questions.length} questions | {TEST_DURATION_MINUTES} minutes</p>
        <p className="text-sm text-gray-400 mb-6">Timer starts when you click Begin. Auto-submits when time expires.</p>
        <button
          onClick={handleStart}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 cursor-pointer border-none text-lg"
        >
          Begin Test
        </button>
      </div>
    )
  }

  if (submitted) return null // Parent handles results display

  const q = questions[currentIndex]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="flex gap-6 flex-col lg:flex-row">
      {/* Question area */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-gray-500">Q{currentIndex + 1}/{questions.length}</span>
            <Badge variant={q.difficulty}>{q.difficulty}</Badge>
          </div>
          <div className={`font-mono text-lg font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-700'}`}>
            {formatted}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {q.type === 'multiple-choice' && (
            <MultipleChoice
              key={q.id}
              question={q}
              onAnswer={(a) => handleAnswer(q.id, a)}
              showResult={false}
              selectedAnswer={answers[q.id]}
            />
          )}
          {q.type === 'fill-in-blank' && (
            <FillInBlank
              key={q.id}
              question={q}
              onAnswer={(a) => handleAnswer(q.id, a)}
              showResult={false}
              selectedAnswer={answers[q.id]}
            />
          )}
          {q.type === 'calculation' && (
            <CalculationQuestion
              key={q.id}
              question={q}
              onAnswer={(a) => handleAnswer(q.id, a)}
              showResult={false}
              selectedAnswer={answers[q.id]}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 cursor-pointer bg-white"
          >
            ← Previous
          </button>
          <button
            onClick={() => toggleFlag(currentIndex)}
            className={`px-3 py-2 rounded-lg text-sm cursor-pointer border ${
              flagged.has(currentIndex)
                ? 'bg-yellow-100 border-yellow-300 text-yellow-700'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {flagged.has(currentIndex) ? '🚩 Flagged' : '🏳️ Flag'}
          </button>
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 cursor-pointer border-none"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 cursor-pointer border-none"
            >
              Submit Test
            </button>
          )}
        </div>
      </div>

      {/* Question navigation sidebar */}
      <div className="lg:w-48">
        <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-20">
          <p className="text-xs font-medium text-gray-500 mb-3">
            {answeredCount}/{questions.length} answered
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-8 h-8 rounded text-xs font-medium cursor-pointer border transition-colors ${
                  i === currentIndex
                    ? 'bg-blue-600 text-white border-blue-600'
                    : flagged.has(i)
                    ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                    : answers[questions[i].id] !== undefined
                    ? 'bg-green-100 text-green-700 border-green-200'
                    : 'bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-4 px-3 py-2 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 cursor-pointer border-none"
          >
            Submit ({answeredCount}/{questions.length})
          </button>
        </div>
      </div>
    </div>
  )
}
