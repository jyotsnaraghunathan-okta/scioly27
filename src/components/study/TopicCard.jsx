import { Link } from 'react-router-dom'
import Badge from '../common/Badge'
import ProgressBar from '../common/ProgressBar'
import { useProgress } from '../../hooks/useProgress'

export default function TopicCard({ topic }) {
  const { getTopicMastery } = useProgress()
  const mastery = getTopicMastery(topic.id)

  return (
    <Link
      to={`/study/${topic.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all no-underline group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{topic.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {topic.name}
            </h3>
            <p className="text-xs text-gray-500">{topic.subtopics.length} subtopics</p>
          </div>
        </div>
        {topic.diagnosticScore < 30 && <Badge variant="hard">Priority</Badge>}
      </div>
      <ProgressBar value={mastery} className="mb-2" />
      <div className="flex flex-wrap gap-1 mt-3">
        {topic.subtopics.slice(0, 4).map((st) => (
          <Badge key={st.id} variant={st.level === 'State' ? 'state' : 'regional'}>
            {st.name.length > 20 ? st.name.slice(0, 20) + '...' : st.name}
          </Badge>
        ))}
        {topic.subtopics.length > 4 && (
          <Badge>+{topic.subtopics.length - 4} more</Badge>
        )}
      </div>
    </Link>
  )
}
