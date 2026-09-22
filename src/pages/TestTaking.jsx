import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { allQuestions } from '../data/questions'
import { getTopicById } from '../data/topics'
import { calculateScore } from '../utils/scoring'
import { getBaselineTest } from '../data/tests'
import TestRunner from '../components/test/TestRunner'
import TestResults from '../components/test/TestResults'

function getTestQuestions(testId) {
  // Baseline tests: fixed question sets
  if (testId.endsWith('-baseline')) {
    const baseline = getBaselineTest(testId)
    if (!baseline) return { topicId: null, testNum: 0, questions: [] }
    return {
      topicId: baseline.topicId,
      testNum: 0,
      difficulty: 'mixed',
      isBaseline: true,
      label: baseline.name,
      questions: baseline.questions,
    }
  }

  // testId format: "topic-id-test-N"
  const parts = testId.split('-test-')
  if (parts.length !== 2) return { topicId: null, testNum: 0, questions: [] }

  const topicId = parts[0]
  const testNum = parseInt(parts[1])
  const difficulty = testNum <= 2 ? 'easy' : testNum <= 4 ? 'medium' : 'hard'

  const topicQuestions = allQuestions.filter((q) => q.topic === topicId)
  const diffQuestions = topicQuestions.filter((q) => q.difficulty === difficulty)

  // Use testNum as seed offset for consistent question selection
  const offset = ((testNum - 1) % 2) * 15
  const selected = diffQuestions.slice(offset, offset + 15)

  // Pad with other difficulty questions if not enough
  if (selected.length < 15) {
    const remaining = topicQuestions.filter((q) => !selected.includes(q))
    selected.push(...remaining.slice(0, 15 - selected.length))
  }

  return { topicId, testNum, difficulty, questions: selected.slice(0, 15) }
}

export default function TestTaking() {
  const { testId } = useParams()
  const navigate = useNavigate()
  const { recordTestResult } = useProgress()
  const [savedAnswers, setSavedAnswers] = useLocalStorage(`sc27-test-${testId}`, null)
  const [completed, setCompleted] = useState(!!savedAnswers)

  const { topicId, testNum, difficulty, isBaseline, label, questions } = getTestQuestions(testId)
  const topic = getTopicById(topicId)

  if (!topic || questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-4xl mb-3">❌</p>
        <p className="text-gray-500">Test not found or no questions available.</p>
        <button onClick={() => navigate('/tests')} className="mt-4 text-blue-600 bg-transparent border-none cursor-pointer">
          Back to Tests
        </button>
      </div>
    )
  }

  const handleComplete = (answers) => {
    const score = calculateScore(answers, questions)
    setSavedAnswers(answers)
    recordTestResult({
      testId,
      topicId,
      testNum,
      difficulty,
      ...score,
    })
    setCompleted(true)
  }

  const handleReset = () => {
    setSavedAnswers(null)
    setCompleted(false)
  }

  if (completed && savedAnswers) {
    return (
      <div className="animate-fade-in">
        <TestResults questions={questions} answers={savedAnswers} testId={testId} onReset={handleReset} />
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900">
          {topic.icon} {topic.name} — {isBaseline ? label : `Test ${testNum}`}
        </h1>
        <p className="text-sm text-gray-500 capitalize">
          {isBaseline ? `${questions.length} questions · mixed difficulty` : `${difficulty} difficulty`}
        </p>
      </div>
      <TestRunner questions={questions} testId={testId} onComplete={handleComplete} />
    </div>
  )
}
