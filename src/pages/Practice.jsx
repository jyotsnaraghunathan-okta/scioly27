import { useState, useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { topics, getTopicById } from '../data/topics'
import { allQuestions } from '../data/questions'
import { allFreeResponseQuestions } from '../data/freeResponse'
import { subjects } from '../data/subjects'
import { useSubject } from '../context/SubjectContext'
import QuestionRenderer from '../components/questions/QuestionRenderer'
import Badge from '../components/common/Badge'

export default function Practice() {
  const { topicId } = useParams()
  const { selectedSubjectId } = useSubject()

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const subjectTopicIds = subject.topicIds
  const subjectTopics = topics.filter((t) => subjectTopicIds.includes(t.id))

  const [selectedTopic, setSelectedTopic] = useState(
    topicId && subjectTopicIds.includes(topicId) ? topicId : ''
  )
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedSource, setSelectedSource] = useState('')
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState({})
  const [page, setPage] = useState(0)

  // Reset filters and answers when subject changes
  useEffect(() => {
    setSelectedTopic('')
    setSelectedDifficulty('')
    setSelectedType('')
    setSelectedSource('')
    setAnswers({})
    setShowResults({})
    setPage(0)
  }, [selectedSubjectId])

  const combinedQuestions = useMemo(() => [
    ...allQuestions,
    ...allFreeResponseQuestions,
  ], [])

  const filtered = useMemo(() => {
    let qs = combinedQuestions.filter((q) => subjectTopicIds.includes(q.topic))
    if (selectedTopic) qs = qs.filter((q) => q.topic === selectedTopic)
    if (selectedDifficulty) qs = qs.filter((q) => q.difficulty === selectedDifficulty)
    if (selectedType) qs = qs.filter((q) => q.type === selectedType)
    if (selectedSource === 'ai') qs = qs.filter((q) => q.aiGenerated)
    if (selectedSource === 'human') qs = qs.filter((q) => !q.aiGenerated)
    return qs
  }, [selectedTopic, selectedDifficulty, selectedType, selectedSource, subjectTopicIds, combinedQuestions])

  const PAGE_SIZE = 10
  const pageQuestions = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    setShowResults((prev) => ({ ...prev, [questionId]: true }))
  }

  const answeredCount = Object.keys(answers).length
  const correctCount = filtered.filter((q) => {
    const a = answers[q.id]
    if (a === undefined) return false
    if (q.type === 'multiple-choice') return a === q.answer
    const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]
    return accepted.some((acc) => String(acc).toLowerCase().trim() === String(a).toLowerCase().trim())
  }).length

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Practice Questions</h1>
      <p className="text-gray-500 mb-6">{filtered.length} questions · {subject.icon} {subject.name}</p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <select
          value={selectedTopic}
          onChange={(e) => { setSelectedTopic(e.target.value); setPage(0) }}
          className="px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-sm"
        >
          <option value="">All Topics</option>
          {subjectTopics.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <select
          value={selectedDifficulty}
          onChange={(e) => { setSelectedDifficulty(e.target.value); setPage(0) }}
          className="px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-sm"
        >
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          value={selectedType}
          onChange={(e) => { setSelectedType(e.target.value); setPage(0) }}
          className="px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-sm"
        >
          <option value="">All Types</option>
          <option value="multiple-choice">Multiple Choice</option>
          <option value="fill-in-blank">Fill in Blank</option>
          <option value="calculation">Calculation</option>
          <option value="free-response">Free Response</option>
        </select>
        <select
          value={selectedSource}
          onChange={(e) => { setSelectedSource(e.target.value); setPage(0) }}
          className="px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-sm"
        >
          <option value="">All Sources</option>
          <option value="ai">✨ AI Generated</option>
          <option value="human">Human Written</option>
        </select>
        <div className="flex items-center gap-2 text-sm text-gray-500 ml-auto">
          {answeredCount > 0 && (
            <span>{correctCount}/{answeredCount} correct ({Math.round((correctCount / answeredCount) * 100)}%)</span>
          )}
          <Badge>{filtered.length} questions</Badge>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4 mb-6">
        {pageQuestions.map((q, i) => (
          <QuestionRenderer
            key={q.id}
            question={q}
            index={page * PAGE_SIZE + i}
            onAnswer={(a) => handleAnswer(q.id, a)}
            showResult={showResults[q.id] || false}
            selectedAnswer={answers[q.id]}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">Page {page + 1} of {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
