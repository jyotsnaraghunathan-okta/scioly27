import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { useProgress } from '../../hooks/useProgress'

export default function TopicRadarChart({ topicIds }) {
  const { getAllMastery } = useProgress()

  const mastery = topicIds
    ? getAllMastery.filter((m) => topicIds.includes(m.topicId))
    : getAllMastery

  const data = mastery.map((m) => ({
    topic: m.name,
    mastery: m.mastery,
    fullMark: 100,
  }))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">Topic Mastery</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="topic" tick={{ fontSize: 11 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
          <Radar
            name="Mastery"
            dataKey="mastery"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
          <Tooltip formatter={(v) => `${v}%`} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
