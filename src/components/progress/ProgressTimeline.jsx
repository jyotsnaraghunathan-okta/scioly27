import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { useProgress } from '../../hooks/useProgress'

export default function ProgressTimeline({ topicIds }) {
  const { getScoreTimeline } = useProgress()

  const timeline = topicIds
    ? getScoreTimeline.filter((e) => topicIds.includes(e.topic))
    : getScoreTimeline

  if (timeline.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-4">Score Timeline</h3>
        <div className="text-center py-8 text-gray-400">
          <p className="text-3xl mb-2">📈</p>
          <p className="text-sm">Take some tests to see your progress over time.</p>
        </div>
      </div>
    )
  }

  const data = timeline.map((entry, i) => ({
    name: entry.date,
    score: entry.score,
    index: i + 1,
  }))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-900 mb-4">Score Timeline</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
          <Tooltip formatter={(v) => `${v}%`} />
          <ReferenceLine y={70} stroke="#22c55e" strokeDasharray="3 3" label={{ value: 'Goal', fontSize: 10 }} />
          <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
