import TopicRadarChart from '../components/progress/TopicRadarChart'
import ProgressTimeline from '../components/progress/ProgressTimeline'
import WeakAreasList from '../components/progress/WeakAreasList'
import { useProgress } from '../hooks/useProgress'
import { useSubject } from '../context/SubjectContext'
import { subjects } from '../data/subjects'

export default function Progress() {
  const { testResults, practiceResults } = useProgress()
  const { selectedSubjectId } = useSubject()

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const subjectTopicIds = subject.topicIds

  const subjectTestResults = testResults.filter((r) =>
    subjectTopicIds.includes(r.topicId)
  )
  const subjectPracticeResults = practiceResults.filter((r) =>
    subjectTopicIds.includes(r.topicId)
  )

  const avgScore =
    subjectTestResults.length > 0
      ? `${Math.round(subjectTestResults.reduce((s, r) => s + r.percentage, 0) / subjectTestResults.length)}%`
      : '—'

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Progress</h1>
      <p className="text-gray-500 mb-6">{subject.icon} {subject.name} · mastery across all topics</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatBox label="Tests Taken" value={subjectTestResults.length} />
        <StatBox label="Questions Practiced" value={subjectPracticeResults.length} />
        <StatBox label="Average Score" value={avgScore} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <TopicRadarChart topicIds={subjectTopicIds} />
        <ProgressTimeline topicIds={subjectTopicIds} />
      </div>

      <WeakAreasList topicIds={subjectTopicIds} />
    </div>
  )
}

function StatBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  )
}
