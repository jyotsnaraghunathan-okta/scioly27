import { Link } from 'react-router-dom'
import Badge from '../common/Badge'
import { useProgress } from '../../hooks/useProgress'
import { topics } from '../../data/topics'
import { baselineTestRegistry, reviewTestRegistry } from '../../data/tests'
import { allFreeResponseQuestions } from '../../data/freeResponse'

export default function TestSelector({ topicIds }) {
  const { testResults } = useProgress()

  const visibleTopics = topicIds
    ? topics.filter((t) => topicIds.includes(t.id))
    : topics

  const getTopicReviewTests = (topicId) =>
    reviewTestRegistry.filter((r) => r.topicId === topicId)

  const getTestStatus = (testId) => {
    const results = testResults.filter((r) => r.testId === testId)
    if (results.length === 0) return null
    return results[results.length - 1]
  }

  return (
    <div className="space-y-6">
      {visibleTopics.map((topic) => {
        const topicBaselines = baselineTestRegistry.filter((b) => b.topicId === topic.id)
        const topicReviews = getTopicReviewTests(topic.id)
        const frCount = allFreeResponseQuestions.filter((q) => q.topic === topic.id).length
        return (
          <div key={topic.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{topic.icon}</span>
              <h3 className="font-semibold text-gray-900">{topic.name}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                { num: 1, diff: 'easy' },
                { num: 2, diff: 'easy' },
                { num: 3, diff: 'medium' },
                { num: 4, diff: 'medium' },
                { num: 5, diff: 'hard' },
              ].map(({ num, diff }) => {
                const testId = `${topic.id}-test-${num}`
                const result = getTestStatus(testId)
                return (
                  <Link
                    key={num}
                    to={`/tests/${testId}`}
                    className="flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all no-underline"
                  >
                    <Badge variant={diff}>{diff}</Badge>
                    <span className="text-sm font-medium text-gray-700 mt-2">Test {num}</span>
                    {result ? (
                      <span className={`text-xs mt-1 font-medium ${result.percentage >= 70 ? 'text-green-600' : result.percentage >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {result.percentage}%
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400 mt-1">Not taken</span>
                    )}
                  </Link>
                )
              })}
              {topicBaselines.map((baseline) => {
                const result = getTestStatus(baseline.id)
                return (
                  <Link
                    key={baseline.id}
                    to={`/tests/${baseline.id}`}
                    className="flex flex-col items-center p-3 rounded-lg border-2 border-blue-200 bg-blue-50 hover:border-blue-400 hover:shadow-md transition-all no-underline"
                  >
                    <Badge variant="hard">baseline</Badge>
                    <span className="text-sm font-medium text-blue-800 mt-2">{baseline.name}</span>
                    <span className="text-xs text-blue-500 mt-0.5">{baseline.questionCount}Q · mixed</span>
                    {result ? (
                      <span className={`text-xs mt-1 font-medium ${result.percentage >= 70 ? 'text-green-600' : result.percentage >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {result.percentage}%
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400 mt-1">Not taken</span>
                    )}
                  </Link>
                )
              })}
              {topicReviews.map((review) => (
                <Link
                  key={review.id}
                  to={`/tests/review/${review.id}`}
                  className="flex flex-col items-center p-3 rounded-lg border-2 border-emerald-200 bg-emerald-50 hover:border-emerald-400 hover:shadow-md transition-all no-underline"
                >
                  <Badge variant="medium">📋 Review</Badge>
                  <span className="text-sm font-medium text-emerald-800 mt-2">{review.name}</span>
                  <span className="text-xs text-emerald-600 mt-0.5">{review.questionCount}Q · mixed</span>
                </Link>
              ))}
              {frCount > 0 && (
                <Link
                  to={`/tests/fr/${topic.id}`}
                  className="flex flex-col items-center p-3 rounded-lg border-2 border-violet-200 bg-violet-50 hover:border-violet-400 hover:shadow-md transition-all no-underline"
                >
                  <Badge variant="medium">✍️ FR</Badge>
                  <span className="text-sm font-medium text-violet-800 mt-2">Free Response</span>
                  <span className="text-xs text-violet-500 mt-0.5">{frCount}Q · open-ended</span>
                </Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
