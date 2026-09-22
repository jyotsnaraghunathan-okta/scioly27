import { getMasteryColor } from '../../utils/scoring'

export default function ProgressBar({ value, max = 100, showLabel = true, className = '' }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  const color = getMasteryColor(pct)

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">{pct}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
