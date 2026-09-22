import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTopicById } from '../data/topics'
import { getReviewTest } from '../data/tests'
import QuestionRenderer from '../components/questions/QuestionRenderer'
import Badge from '../components/common/Badge'

function scoreQuestion(q, answer) {
  if (answer === undefined || answer === null) return null
  if (q.type === 'multiple-choice') return answer === q.answer
  if (q.type === 'fill-in-blank' || q.type === 'calculation') {
    if (answer === '') return null
    const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]
    return accepted.some(
      (a) => String(a).toLowerCase().trim() === String(answer).toLowerCase().trim()
    )
  }
  if (q.type === 'matching') {
    if (typeof answer !== 'object' || Object.keys(answer).length === 0) return null
    return q.pairs.every((pair, i) => answer[i] === pair.right)
  }
  return null
}

export default function ReviewTest() {
  const { reviewId } = useParams()
  const test = getReviewTest(reviewId)
  const topic = test ? getTopicById(test.topicId) : null

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  if (!test || !topic) {
    return (
      <div className="animate-fade-in text-center py-16">
        <p className="text-gray-400">Review test not found.</p>
        <Link to="/tests" className="text-blue-600 text-sm mt-4 inline-block">← Back to Tests</Link>
      </div>
    )
  }

  const mcqQuestions = test.questions.filter((q) => q.type !== 'free-response')
  const frQuestions = test.questions.filter((q) => q.type === 'free-response')
  const hasMatching = mcqQuestions.some((q) => q.type === 'matching')
  const hasPicture = mcqQuestions.some((q) => q.image)

  const handleAnswer = (id, answer) =>
    setAnswers((prev) => ({ ...prev, [id]: answer }))

  // Scoring (MCQ/matching/fill-in-blank/calculation only — not free response)
  const scores = mcqQuestions.map((q) => ({
    q,
    result: scoreQuestion(q, answers[q.id]),
  }))
  const correctCount = scores.filter((s) => s.result === true).length
  const attemptedCount = scores.filter((s) => s.result !== null).length
  const scorePercent = mcqQuestions.length > 0
    ? Math.round((correctCount / mcqQuestions.length) * 100)
    : 0

  const answeredMCQ = mcqQuestions.filter((q) => {
    const a = answers[q.id]
    if (a === undefined || a === null) return false
    if (q.type === 'matching') return typeof a === 'object' && Object.keys(a).length > 0
    return true
  }).length

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link to="/tests" className="hover:text-blue-600 no-underline text-gray-500">Tests</Link>
        <span>/</span>
        <span className="text-gray-900">{topic.icon} {topic.name} — {test.name}</span>
      </div>

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {topic.icon} {topic.name} — {test.name}
        </h1>
        <p className="text-gray-500 text-sm">
          {mcqQuestions.length} MCQ/matching/picture · {frQuestions.length} free response · untimed · self-paced
        </p>
      </div>

      {/* ── Test mode ──────────────────────────────────────────────────────── */}
      {!submitted && (
        <>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
            <strong>How to use:</strong> Answer all questions below, then click <strong>Submit Test</strong> at the bottom.
            {hasMatching && <> For matching questions, click a term then click its definition to pair them.</>}
            {hasPicture && <> Some questions include diagrams — examine the image before answering.</>}
            {' '}Answers are revealed only after submission.
          </div>

          {/* Part A */}
          <div className="mb-8">
            <h2 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-500">Part A</span>
              Multiple Choice, Picture ID & Matching
              <span className="text-xs text-gray-400 font-normal">({mcqQuestions.length} questions)</span>
            </h2>
            <div className="space-y-4">
              {mcqQuestions.map((q, i) => (
                <QuestionRenderer
                  key={q.id}
                  question={q}
                  index={i}
                  showResult={false}
                  onAnswer={(a) => handleAnswer(q.id, a)}
                  selectedAnswer={answers[q.id]}
                />
              ))}
            </div>
          </div>

          {/* Part B */}
          {frQuestions.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-violet-100 rounded text-xs font-mono text-violet-600">Part B</span>
                Free Response
                <span className="text-xs text-gray-400 font-normal">({frQuestions.length} questions)</span>
              </h2>
              <div className="space-y-4">
                {frQuestions.map((q, i) => (
                  <div key={q.id}>
                    <div className="flex items-center gap-2 mb-2 ml-1">
                      <Badge variant={q.difficulty}>{q.difficulty}</Badge>
                      {q.points && <span className="text-xs text-gray-400">{q.points} pts</span>}
                      <span className="text-xs text-gray-400">{q.subtopic}</span>
                    </div>
                    <QuestionRenderer
                      question={q}
                      index={mcqQuestions.length + i}
                      showResult={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="sticky bottom-4 flex justify-center">
            <button
              onClick={() => setSubmitted(true)}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold text-base hover:bg-green-700 shadow-lg cursor-pointer border-none"
            >
              Submit Test ({answeredMCQ}/{mcqQuestions.length} answered)
            </button>
          </div>
        </>
      )}

      {/* ── Post-submit: score card ─────────────────────────────────────────── */}
      {submitted && (
        <div className={`rounded-xl border-2 p-6 mb-8 text-center animate-fade-in ${
          scorePercent >= 70 ? 'border-green-400 bg-green-50' :
          scorePercent >= 40 ? 'border-yellow-400 bg-yellow-50' :
          'border-red-400 bg-red-50'
        }`}>
          <p className="text-5xl font-bold mb-2 text-gray-900">{scorePercent}%</p>
          <p className="text-lg font-medium text-gray-700 mb-1">
            {correctCount} / {mcqQuestions.length} correct
          </p>
          <p className="text-sm text-gray-500 mb-5">
            {attemptedCount} of {mcqQuestions.length} Part A questions attempted ·{' '}
            {frQuestions.length} free response (self-graded)
          </p>
          {!analyzing && (
            <button
              onClick={() => setAnalyzing(true)}
              className="px-7 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 cursor-pointer border-none"
            >
              Analyze Test
            </button>
          )}
        </div>
      )}

      {/* ── Analyze mode ───────────────────────────────────────────────────── */}
      {analyzing && (
        <div className="animate-fade-in">
          {/* Part A analysis */}
          <div className="mb-8">
            <h2 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-mono text-gray-500">Part A</span>
              Multiple Choice, Picture ID & Matching
              <span className="text-xs text-gray-400 font-normal">({mcqQuestions.length} questions)</span>
            </h2>
            <div className="space-y-4">
              {scores.map(({ q, result }, i) => {
                const outerStyle =
                  result === true
                    ? 'ring-2 ring-green-400'
                    : result === false
                    ? 'ring-2 ring-red-400'
                    : 'ring-1 ring-gray-200'
                const headerBg =
                  result === true
                    ? 'bg-green-100'
                    : result === false
                    ? 'bg-red-100'
                    : 'bg-gray-100'
                const statusLabel =
                  result === true ? (
                    <span className="flex items-center gap-1 text-green-700 font-semibold text-sm">
                      <span className="text-base">✓</span> Correct
                    </span>
                  ) : result === false ? (
                    <span className="flex items-center gap-1 text-red-600 font-semibold text-sm">
                      <span className="text-base">✗</span> Incorrect
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm">— Not answered</span>
                  )

                return (
                  <div key={q.id} className={`rounded-xl overflow-hidden ${outerStyle}`}>
                    <div className={`flex items-center justify-between px-4 py-2 ${headerBg}`}>
                      <span className="text-xs text-gray-500 font-medium">
                        Q{i + 1} · {q.subtopic}
                      </span>
                      {statusLabel}
                    </div>
                    <QuestionRenderer
                      question={q}
                      index={i}
                      showResult={true}
                      selectedAnswer={answers[q.id]}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Part B analysis (free response — model answers auto-revealed) */}
          {frQuestions.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-violet-100 rounded text-xs font-mono text-violet-600">Part B</span>
                Free Response
                <span className="text-xs text-gray-400 font-normal">({frQuestions.length} questions — self-graded)</span>
              </h2>
              <div className="space-y-4">
                {frQuestions.map((q, i) => (
                  <div key={q.id} className="rounded-xl overflow-hidden ring-1 ring-violet-300">
                    <div className="flex items-center justify-between px-4 py-2 bg-violet-50">
                      <div className="flex items-center gap-2">
                        <Badge variant={q.difficulty}>{q.difficulty}</Badge>
                        {q.points && <span className="text-xs text-gray-400">{q.points} pts</span>}
                        <span className="text-xs text-gray-400">{q.subtopic}</span>
                      </div>
                      <span className="text-xs text-violet-500">Self-graded</span>
                    </div>
                    <QuestionRenderer
                      question={q}
                      index={mcqQuestions.length + i}
                      showResult={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

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
