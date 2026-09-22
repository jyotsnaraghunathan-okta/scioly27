import { Link } from 'react-router-dom'
import { useProgress } from '../../hooks/useProgress'
import { getMasteryColor } from '../../utils/scoring'

export default function WeakAreasList({ topicIds }) {
  const { getWeakAreas } = useProgress()

  const areas = topicIds
    ? getWeakAreas.filter((a) => topicIds.includes(a.topicId))
    : getWeakAreas

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">Areas Ranked by Mastery</h3>
      <div className="space-y-3">
        {areas.map((area, i) => (
          <div key={area.topicId} className="flex items-center gap-3">
            <span className="text-sm font-mono text-gray-400 w-5">{i + 1}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <Link
                  to={`/study/${area.topicId}`}
                  className="text-sm font-medium text-gray-800 hover:text-blue-600 no-underline"
                >
                  {area.name}
                </Link>
                <span
                  className="text-sm font-bold"
                  style={{ color: getMasteryColor(area.mastery) }}
                >
                  {area.mastery}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${area.mastery}%`, backgroundColor: getMasteryColor(area.mastery) }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
