import { useMemo } from 'react'
import { allQuestions } from '../../data/questions'
import { allFreeResponseQuestions } from '../../data/freeResponse'
import { getTopicById } from '../../data/topics'
import Badge from '../common/Badge'

function getAnswerDisplay(q) {
  if (q.type === 'multiple-choice') {
    return q.options?.[q.answer] ?? String(q.answer)
  }
  if (Array.isArray(q.answer)) return q.answer[0]
  return String(q.answer)
}

function SolvedCard({ question, index }) {
  const answerDisplay = getAnswerDisplay(question)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Question header */}
      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-gray-400">#{index + 1}</span>
          <Badge variant={question.difficulty}>{question.difficulty}</Badge>
          <span className="text-xs text-gray-400">{question.subtopic}</span>
          {question.aiGenerated && (
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-600 font-medium">✨ AI</span>
          )}
        </div>
        <p className="text-sm text-gray-800 leading-relaxed font-medium">{question.question}</p>
      </div>

      {/* Options for MC (all shown, correct highlighted) */}
      {question.type === 'multiple-choice' && question.options && (
        <div className="px-5 py-3 border-b border-gray-100 space-y-1.5">
          {question.options.map((opt, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                i === question.answer
                  ? 'bg-green-50 border border-green-300 text-green-800 font-medium'
                  : 'bg-gray-50 text-gray-500'
              }`}
            >
              {i === question.answer && <span className="text-green-600 font-bold flex-shrink-0">✓</span>}
              <span>{opt}</span>
            </div>
          ))}
        </div>
      )}

      {/* Answer for non-MC types */}
      {question.type !== 'multiple-choice' && (
        <div className="px-5 py-3 border-b border-gray-100">
          <div className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5">
            <span className="text-green-600 font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
            <div>
              <p className="text-xs text-green-700 font-medium mb-0.5">Answer</p>
              <p className="text-sm text-green-900">
                {Array.isArray(question.answer) ? question.answer.join(' / ') : String(question.answer)}
              </p>
            </div>
          </div>
          {question.hint && (
            <p className="text-xs text-amber-700 mt-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              Hint: {question.hint}
            </p>
          )}
        </div>
      )}

      {/* Explanation */}
      {question.explanation && (
        <div className="px-5 py-3">
          <p className="text-xs font-semibold text-blue-700 mb-1">Explanation</p>
          <p className="text-sm text-gray-600 leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

export default function SolvedQuestionsView({ topicId, subtopicId }) {
  const allCombined = useMemo(() => [...allQuestions, ...allFreeResponseQuestions], [])

  // Resolve subtopicId (e.g. 'hw-calculations') to its display name (e.g. 'Hardy-Weinberg Calculations')
  // because questions store subtopic as the display name, not the URL id.
  const subtopicName = useMemo(() => {
    if (!subtopicId || !topicId) return null
    const topic = getTopicById(topicId)
    return topic?.subtopics.find((s) => s.id === subtopicId)?.name ?? null
  }, [topicId, subtopicId])

  const questions = useMemo(() => {
    let qs = allCombined.filter((q) => q.topic === topicId)
    if (subtopicName) qs = qs.filter((q) => q.subtopic === subtopicName)
    return qs
  }, [allCombined, topicId, subtopicName])

  // Group by subtopic when viewing a whole topic
  const grouped = useMemo(() => {
    if (subtopicId) return null
    const map = {}
    for (const q of questions) {
      const key = q.subtopic || 'General'
      if (!map[key]) map[key] = []
      map[key].push(q)
    }
    return map
  }, [questions, subtopicId])

  if (!topicId) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">✅</p>
        <p>Select a topic from the sidebar to view solved questions.</p>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">📭</p>
        <p className="font-medium text-gray-700 mb-1">No questions available</p>
        <p className="text-sm">No practice questions found for this {subtopicId ? 'subtopic' : 'topic'} yet.</p>
      </div>
    )
  }

  // Subtopic view — flat list
  if (subtopicId || !grouped) {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-4">{questions.length} solved question{questions.length !== 1 ? 's' : ''} — answers and explanations shown</p>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <SolvedCard key={q.id} question={q} index={i} />
          ))}
        </div>
      </div>
    )
  }

  // Topic view — grouped by subtopic
  let counter = 0
  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">{questions.length} solved question{questions.length !== 1 ? 's' : ''} — answers and explanations shown</p>
      <div className="space-y-8">
        {Object.entries(grouped).map(([subtopic, qs]) => (
          <div key={subtopic}>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {subtopic}
              <span className="text-xs text-gray-400 font-normal">({qs.length})</span>
            </h3>
            <div className="space-y-4">
              {qs.map((q) => {
                const idx = counter++
                return <SolvedCard key={q.id} question={q} index={idx} />
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
