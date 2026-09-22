import { useParams, Link } from 'react-router-dom'
import { topics, getTopicById } from '../data/topics'
import { allFreeResponseQuestions } from '../data/freeResponse'
import QuestionRenderer from '../components/questions/QuestionRenderer'
import Badge from '../components/common/Badge'

export default function FreeResponseTest() {
  const { topicId } = useParams()
  const topic = getTopicById(topicId)
  const questions = allFreeResponseQuestions.filter((q) => q.topic === topicId)

  if (!topic || questions.length === 0) {
    return (
      <div className="animate-fade-in text-center py-16">
        <p className="text-gray-400">No free response questions found for this topic.</p>
        <Link to="/tests" className="text-blue-600 text-sm mt-4 inline-block">← Back to Tests</Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link to="/tests" className="hover:text-blue-600 no-underline text-gray-500">Tests</Link>
        <span>/</span>
        <span className="text-gray-900">{topic.icon} {topic.name} — Free Response</span>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {topic.icon} {topic.name} — Free Response
        </h1>
        <p className="text-gray-500 text-sm">
          {questions.length} questions · Write your answer, then reveal the model answer and self-grade.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
        <strong>How to use:</strong> Read each question carefully and write a complete answer in the text box.
        When ready, click <strong>Reveal Model Answer</strong> to compare and self-grade.
      </div>

      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-gray-400">#{i + 1}</span>
              <Badge variant={q.difficulty}>{q.difficulty}</Badge>
              {q.points && <span className="text-xs text-gray-400">{q.points} pts</span>}
              <span className="text-xs text-gray-400">{q.subtopic}</span>
            </div>
            <QuestionRenderer question={q} index={i} />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/tests"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 no-underline"
        >
          ← Back to Tests
        </Link>
      </div>
    </div>
  )
}
