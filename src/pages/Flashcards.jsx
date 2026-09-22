import { useParams, Link } from 'react-router-dom'
import { topics, getTopicById } from '../data/topics'
import { allFlashcards } from '../data/flashcards'
import FlashcardDeck from '../components/flashcards/FlashcardDeck'
import { useSpacedRepetition } from '../hooks/useSpacedRepetition'
import { useSubject } from '../context/SubjectContext'
import { subjects } from '../data/subjects'

export default function Flashcards() {
  const { topicId } = useParams()
  const topic = topicId ? getTopicById(topicId) : null
  const { getStats } = useSpacedRepetition()
  const { selectedSubjectId } = useSubject()

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const subjectTopics = topics.filter((t) => subject.topicIds.includes(t.id))

  if (!topic) {
    return (
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Flashcards</h1>
        <p className="text-gray-500 mb-6">SM-2 spaced repetition. Select a topic deck to study.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectTopics.map((t) => {
            const cards = allFlashcards.filter((c) => c.topic === t.id)
            const stats = getStats(cards)
            return (
              <Link
                key={t.id}
                to={`/flashcards/${t.id}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all no-underline"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{t.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.shortName}</h3>
                    <p className="text-xs text-gray-500">{cards.length} cards</p>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">New: {stats.newCount}</span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Learning: {stats.learningCount}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Review: {stats.reviewCount}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  const cards = allFlashcards.filter((c) => c.topic === topic.id)

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/flashcards" className="hover:text-blue-600 no-underline text-gray-500">Flashcards</Link>
        <span>/</span>
        <span className="text-gray-900">{topic.icon} {topic.name}</span>
      </div>
      <FlashcardDeck cards={cards} topicName={topic.name} />
    </div>
  )
}
