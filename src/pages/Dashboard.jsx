import { Link } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { topics } from '../data/topics'
import { subjects } from '../data/subjects'
import { useSubject } from '../context/SubjectContext'
import { allFlashcards } from '../data/flashcards'
import { allQuestions } from '../data/questions'
import { allFreeResponseQuestions } from '../data/freeResponse'
import ProgressBar from '../components/common/ProgressBar'

export default function Dashboard() {
  const { getAllMastery, getWeakAreas, testResults } = useProgress()
  const { selectedSubjectId } = useSubject()

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const subjectTopics = topics.filter((t) => subject.topicIds.includes(t.id))
  const weakAreas = getWeakAreas.filter((a) => subject.topicIds.includes(a.topicId)).slice(0, 4)

  const totalTests = testResults.length
  const avgScore = totalTests > 0
    ? Math.round(testResults.reduce((s, r) => s + r.percentage, 0) / totalTests)
    : 0

  const totalFlashcards = allFlashcards.length
  const totalQuestions = allQuestions.length + allFreeResponseQuestions.length
  const totalTopicTests = topics.length * 5

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Science Olympiad Prep — Regional + State Level</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Events" value={subjects.length} icon="🏆" />
        <StatCard label="Tests Taken" value={totalTests} icon="📝" />
        <StatCard label="Avg Score" value={totalTests > 0 ? `${avgScore}%` : '—'} icon="📊" />
        <StatCard label="Flashcards" value={totalFlashcards} icon="🃏" />
      </div>

      {/* Subject content */}
      <SubjectSection
        subject={subject}
        subjectTopics={subjectTopics}
        getAllMastery={getAllMastery}
        weakAreas={weakAreas}
      />

      {/* Quick actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <QuickAction to="/flashcards" icon="🃏" label="Review Flashcards" desc="Spaced repetition" />
          <QuickAction to="/practice" icon="✏️" label="Practice Questions" desc={`${totalQuestions} questions`} />
          <QuickAction to="/tests" icon="📝" label="Take a Test" desc={`${totalTopicTests} topic tests`} />
          <QuickAction to="/progress" icon="📈" label="View Progress" desc="Charts & analytics" />
        </div>
      </div>
    </div>
  )
}

function SubjectSection({ subject, subjectTopics, getAllMastery, weakAreas }) {
  const isEmpty = subjectTopics.length === 0

  return (
    <div>
      {/* Subject header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{subject.icon}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{subject.name}</h2>
          <p className="text-sm text-gray-500">{subject.description}</p>
        </div>
      </div>

      {isEmpty ? (
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-gray-400 text-sm">Content coming soon</p>
        </div>
      ) : (
        <>
          {/* Weak areas banner — only for subjects with data */}
          {weakAreas.length > 0 && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold mb-1">Priority Areas</h3>
              <p className="text-blue-100 text-xs mb-3">Based on your most recent test results</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {weakAreas.map((area) => (
                  <div key={area.topicId} className="bg-white/15 rounded-lg p-2">
                    <div className="text-xl font-bold">{area.mastery}%</div>
                    <div className="text-blue-100 text-xs">{area.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Topic grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjectTopics.map((topic) => {
              const mastery = getAllMastery.find((m) => m.topicId === topic.id)?.mastery || 0
              return (
                <div key={topic.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{topic.name}</h3>
                      <p className="text-xs text-gray-500">{topic.subtopics.length} subtopics</p>
                    </div>
                  </div>
                  <ProgressBar value={mastery} className="mb-3" />
                  <div className="flex gap-2">
                    <Link to={`/study/${topic.id}`} className="text-xs text-blue-600 hover:underline no-underline">Study</Link>
                    <span className="text-gray-300">|</span>
                    <Link to={`/flashcards/${topic.id}`} className="text-xs text-blue-600 hover:underline no-underline">Cards</Link>
                    <span className="text-gray-300">|</span>
                    <Link to={`/practice/${topic.id}`} className="text-xs text-blue-600 hover:underline no-underline">Practice</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}

function QuickAction({ to, icon, label, desc }) {
  return (
    <Link to={to} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow no-underline">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-medium text-gray-900 text-sm">{label}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </Link>
  )
}
