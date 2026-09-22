import { useParams, Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { allQuestions } from '../data/questions'
import { getTopicById } from '../data/topics'
import QuestionRenderer from '../components/questions/QuestionRenderer'

function getTestQuestions(testId) {
  const parts = testId.split('-test-')
  if (parts.length !== 2) return { topicId: null, questions: [] }
  const topicId = parts[0]
  const testNum = parseInt(parts[1])
  const difficulty = testNum <= 2 ? 'easy' : testNum <= 4 ? 'medium' : 'hard'
  const topicQuestions = allQuestions.filter((q) => q.topic === topicId)
  const diffQuestions = topicQuestions.filter((q) => q.difficulty === difficulty)
  const offset = ((testNum - 1) % 2) * 15
  const selected = diffQuestions.slice(offset, offset + 15)
  if (selected.length < 15) {
    const remaining = topicQuestions.filter((q) => !selected.includes(q))
    selected.push(...remaining.slice(0, 15 - selected.length))
  }
  return { topicId, testNum, questions: selected.slice(0, 15) }
}

export default function TestReview() {
  const { testId } = useParams()
  const [savedAnswers] = useLocalStorage(`sc27-test-${testId}`, null)
  const { topicId, testNum, questions } = getTestQuestions(testId)
  const topic = getTopicById(topicId)

  if (!savedAnswers || !topic) {
    return (
      <div className="text-center py-12">
        <p className="text-4xl mb-3">📋</p>
        <p className="text-gray-500">No saved answers found for this test.</p>
        <Link to="/tests" className="text-blue-600 mt-4 block">Back to Tests</Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link to="/tests" className="hover:text-blue-600 no-underline text-gray-500">Tests</Link>
        <span>/</span>
        <span className="text-gray-900">{topic.icon} {topic.name} - Test {testNum} Review</span>
      </div>

      <h1 className="text-xl font-bold text-gray-900 mb-6">Answer Review</h1>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <QuestionRenderer
            key={q.id}
            question={q}
            index={i}
            showResult={true}
            selectedAnswer={savedAnswers[q.id]}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/tests"
          className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 no-underline"
        >
          Back to Tests
        </Link>
      </div>
    </div>
  )
}
