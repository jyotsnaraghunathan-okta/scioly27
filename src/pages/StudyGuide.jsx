import { useParams, Link, useNavigate } from 'react-router-dom'
import { topics, getTopicById } from '../data/topics'
import { subjects } from '../data/subjects'
import { useSubject } from '../context/SubjectContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import SubtopicAccordion from '../components/study/SubtopicAccordion'
import ExplanationView from '../components/study/ExplanationView'
import SolvedQuestionsView from '../components/study/SolvedQuestionsView'
import { allExplanations } from '../data/explanations'

export default function StudyGuide() {
  const { topicId, subtopicId } = useParams()
  const topic = topicId ? getTopicById(topicId) : null
  const { selectedSubjectId } = useSubject()
  const [studyLevel, setStudyLevel] = useLocalStorage('sc27-study-level', 'study')

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const subjectTopics = topics.filter((t) => subject.topicIds.includes(t.id))

  const isSolvedMode = studyLevel === 'solved'
  const explanationPool = allExplanations

  const explanation = (!isSolvedMode && subtopicId)
    ? explanationPool.find((e) => e.topic === topicId && e.subtopic === subtopicId)
    : null

  return (
    <div className="animate-fade-in flex gap-6 items-start">

      {/* ── Left sidebar nav ──────────────────────────────────── */}
      <aside className="w-52 flex-shrink-0 sticky top-20">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-3 py-2.5 bg-gray-50 border-b border-gray-200">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {subject.icon} {subject.name}
            </p>
          </div>

          {subjectTopics.map((t) => {
            const isActiveTopic = t.id === topicId
            return (
              <div key={t.id}>
                {/* Topic row */}
                <Link
                  to={`/study/${t.id}`}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm no-underline border-b border-gray-100 last:border-b-0 transition-colors ${
                    isActiveTopic
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base flex-shrink-0">{t.icon}</span>
                  <span className="leading-snug">{t.shortName}</span>
                </Link>

                {/* Subtopics — visible only for the active topic */}
                {isActiveTopic && (
                  <div className="bg-blue-50/40 border-b border-gray-100">
                    {t.subtopics.map((st) => {
                      const isActiveSub = st.id === subtopicId
                      return (
                        <Link
                          key={st.id}
                          to={`/study/${t.id}/${st.id}`}
                          className={`flex items-center gap-2 pl-8 pr-3 py-2 text-xs no-underline transition-colors ${
                            isActiveSub
                              ? 'bg-blue-100 text-blue-800 font-semibold'
                              : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActiveSub ? 'bg-blue-600' : 'bg-gray-300'}`} />
                          <span className="leading-snug">{st.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </aside>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Level toggle — always visible */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Level</span>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => setStudyLevel('study')}
              className={`px-4 py-1.5 text-sm font-medium border-none cursor-pointer transition-colors ${
                studyLevel === 'study'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Study
            </button>
            <button
              onClick={() => setStudyLevel('solved')}
              className={`px-4 py-1.5 text-sm font-medium border-none cursor-pointer transition-colors border-l border-gray-200 ${
                studyLevel === 'solved'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Solved
            </button>
          </div>
          {studyLevel === 'solved' && (
            <span className="text-xs text-green-600 font-medium">Answers shown</span>
          )}
        </div>

        {!topic ? (
          // Landing — no topic selected
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Study Guide</h1>
            <p className="text-gray-500 mb-6">Select a topic from the sidebar to begin.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjectTopics.map((t) => (
                <Link
                  key={t.id}
                  to={`/study/${t.id}`}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all no-underline"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{t.icon}</span>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{t.subtopics.length} subtopics</p>
                </Link>
              ))}
            </div>
          </div>
        ) : isSolvedMode ? (
          // Solved questions view
          <>
            <Breadcrumb topicId={topicId} topic={topic} subtopicId={subtopicId} />
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{topic.icon} {topic.name}</h1>
            {subtopicId && (
              <p className="text-gray-500 mb-4">
                {topic.subtopics.find((s) => s.id === subtopicId)?.name}
              </p>
            )}
            <SolvedQuestionsView topicId={topicId} subtopicId={subtopicId} />
          </>
        ) : subtopicId && explanation ? (
          // Explanation view
          <>
            <Breadcrumb topicId={topicId} topic={topic} subtopicId={subtopicId} />
            <ExplanationView topic={topic} explanation={explanation} />
          </>
        ) : (
          // Topic overview — list of subtopics
          <>
            <Breadcrumb topicId={topicId} topic={topic} />
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{topic.icon} {topic.name}</h1>
            <p className="text-gray-500 mb-6">{topic.subtopics.length} subtopics</p>
            <div className="space-y-2">
              {topic.subtopics.map((st) => {
                const exp = explanationPool.find((e) => e.topic === topicId && e.subtopic === st.id)
                return (
                  <Link key={st.id} to={`/study/${topicId}/${st.id}`} className="block no-underline">
                    <SubtopicAccordion subtopic={st} explanation={exp} />
                  </Link>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Breadcrumb({ topic, subtopicId }) {
  const subtopic = subtopicId ? topic.subtopics.find((s) => s.id === subtopicId) : null
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
      <Link to="/study" className="hover:text-blue-600 no-underline text-gray-500">Study Guide</Link>
      <span>/</span>
      <Link to={`/study/${topic.id}`} className={`no-underline ${subtopic ? 'hover:text-blue-600 text-gray-500' : 'text-gray-900'}`}>
        {topic.icon} {topic.name}
      </Link>
      {subtopic && (
        <>
          <span>/</span>
          <span className="text-gray-900">{subtopic.name}</span>
        </>
      )}
    </div>
  )
}
