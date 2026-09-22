import { useState, useMemo } from 'react'
import { reviseAgainTopics } from '../data/reviseAgain'
import { useSubject } from '../context/SubjectContext'

const colorMap = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   badge: 'bg-blue-100 text-blue-800',   active: 'bg-blue-600 text-white',   dot: 'bg-blue-500' },
  red:    { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    badge: 'bg-red-100 text-red-800',     active: 'bg-red-600 text-white',    dot: 'bg-red-500' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  badge: 'bg-amber-100 text-amber-800', active: 'bg-amber-600 text-white',  dot: 'bg-amber-500' },
  green:  { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  badge: 'bg-green-100 text-green-800', active: 'bg-green-600 text-white',  dot: 'bg-green-500' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-800',active: 'bg-purple-600 text-white', dot: 'bg-purple-500' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   badge: 'bg-teal-100 text-teal-800',   active: 'bg-teal-600 text-white',   dot: 'bg-teal-500' },
}

// ── Worked Example (collapsible) ──────────────────────────────────
function WorkedExample({ example, index, color }) {
  const [open, setOpen] = useState(false)
  const c = colorMap[color] || colorMap.blue
  return (
    <div className={`mb-3 last:mb-0 border ${c.border} rounded-lg overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 ${c.bg} hover:opacity-90 transition-opacity text-left border-none cursor-pointer`}
      >
        <span className={`text-sm font-medium ${c.text}`}>Example {index + 1}: {example.title}</span>
        <span className={`text-xs ${c.text}`}>{open ? '▲ Hide' : '▼ Show solution'}</span>
      </button>
      <div className="px-4 py-3 bg-white">
        <p className="text-sm text-gray-700 mb-2 font-medium">Problem:</p>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{example.problem}</p>
        {open && (
          <div className="animate-fade-in">
            <p className="text-sm text-gray-700 mb-2 font-medium">Step-by-step solution:</p>
            {example.steps?.map((step, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <span className={`flex-shrink-0 w-5 h-5 rounded-full ${c.dot} text-white text-xs font-bold flex items-center justify-center mt-0.5`}>{i + 1}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
              </div>
            ))}
            {example.answer && (
              <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm font-semibold text-green-800">Answer: <span className="font-normal">{example.answer}</span></p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Topic Detail View ─────────────────────────────────────────────
function TopicDetail({ topic }) {
  const c = colorMap[topic.color] || colorMap.blue
  const [openSections, setOpenSections] = useState(() => {
    const init = {}
    topic.sections.forEach((_, i) => { init[i] = i === 0 })
    return init
  })

  const toggleSection = (i) => setOpenSections(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className={`${c.bg} ${c.border} border rounded-xl p-5 mb-5`}>
        <div className="flex items-start gap-3">
          <span className="text-3xl">{topic.icon}</span>
          <div className="flex-1">
            <h2 className={`text-xl font-bold ${c.text}`}>{topic.title}</h2>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{topic.summary}</p>
          </div>
        </div>
      </div>

      {/* Collapsible Content Sections */}
      <div className="space-y-2 mb-5">
        {topic.sections.map((section, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left border-none bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-800 text-sm">{section.heading}</h3>
              <span className="text-gray-400 text-xs ml-4 flex-shrink-0">{openSections[i] ? '▲' : '▼'}</span>
            </button>

            {openSections[i] && (
              <div className="px-5 pb-5 animate-fade-in">
                <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line mb-4">
                  {section.content}
                </div>
                {section.keyPoints?.length > 0 && (
                  <div className={`${c.bg} rounded-lg p-4 border ${c.border}`}>
                    <p className={`text-xs font-semibold ${c.text} mb-2 uppercase tracking-wide`}>Key Points</p>
                    <ul className="space-y-1.5">
                      {section.keyPoints.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className={`${c.dot} rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0`} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Worked Examples */}
      {topic.workedExamples?.length > 0 && (
        <div className="bg-white border border-amber-200 rounded-xl p-5 mb-5">
          <h3 className="font-semibold text-amber-800 mb-1">✏️ Worked Examples</h3>
          <p className="text-xs text-amber-600 mb-4">Click each example to reveal the step-by-step solution.</p>
          {topic.workedExamples.map((ex, i) => (
            <WorkedExample key={i} example={ex} index={i} color={topic.color} />
          ))}
        </div>
      )}

      {/* Common Misconceptions */}
      {topic.commonMisconceptions?.length > 0 && (
        <div className="bg-white border border-red-200 rounded-xl p-5">
          <h3 className="font-semibold text-red-800 mb-1">⚠️ Common Misconceptions</h3>
          <p className="text-xs text-red-500 mb-4">Mistakes that commonly appear on Science Olympiad exams for this topic.</p>
          <div className="space-y-3">
            {topic.commonMisconceptions.map((item, i) => (
              <div key={i} className="rounded-lg border border-red-100 overflow-hidden">
                <div className="bg-red-50 px-4 py-2 flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✗</span>
                  <p className="text-sm text-red-800 font-medium">{item.misconception}</p>
                </div>
                <div className="bg-green-50 px-4 py-2 flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-sm text-green-800">{item.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────
export default function ReviseAgain() {
  const { selectedSubjectId } = useSubject()
  const subjectTopics = useMemo(
    () => reviseAgainTopics.filter((t) => t.subjectId === selectedSubjectId),
    [selectedSubjectId]
  )
  const [selectedId, setSelectedId] = useState(subjectTopics[0]?.id)
  const selected = subjectTopics.find(t => t.id === selectedId) || subjectTopics[0]

  if (subjectTopics.length === 0) {
    return (
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">🔁 Revise Again</h1>
        <div className="mt-12 text-center py-16 bg-white rounded-xl border border-dashed border-gray-200">
          <p className="text-lg font-semibold text-gray-700 mb-2">No deep-dive content yet for this subject</p>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">🔁 Revise Again</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Targeted deep-dives on the topics most likely to trip you up.
        </p>
      </div>

      <div className="flex gap-5 items-start">
        {/* Sidebar */}
        <div className="w-52 flex-shrink-0 sticky top-20">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-3 py-2 bg-gray-50 border-b border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Topics</p>
            </div>
            {subjectTopics.map((topic) => {
              const c = colorMap[topic.color] || colorMap.blue
              const isActive = topic.id === selected?.id
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-3 text-left border-none cursor-pointer transition-colors text-sm border-b border-gray-100 last:border-b-0 ${
                    isActive ? `${c.active} font-medium` : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base flex-shrink-0">{topic.icon}</span>
                  <span className="leading-snug">{topic.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {selected && <TopicDetail topic={selected} />}
        </div>
      </div>
    </div>
  )
}
