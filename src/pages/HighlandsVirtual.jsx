import { useState } from 'react'
import { formatNotes, pastPaperPatterns, predictedTest2027 } from '../data/highlandsVirtual'
import { imageGallery } from '../data/imageGallery'

function QuestionImage({ imageId }) {
  const [failed, setFailed] = useState(false)
  const img = imageGallery.find((i) => i.id === imageId)
  if (!img) return null
  if (failed) {
    return (
      <div className="w-full max-w-xs h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs rounded-lg mb-3">
        📷 Image unavailable
      </div>
    )
  }
  return (
    <div className="mb-3 max-w-xs">
      <img
        src={img.imageUrl}
        alt={img.name}
        className="w-full h-32 object-cover rounded-lg border border-gray-200"
        onError={() => setFailed(true)}
      />
      <p className="text-[10px] text-gray-400 mt-1">{img.name} — {img.credit}</p>
    </div>
  )
}

function PredictedQuestion({ q, showAnswers }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs font-mono text-gray-400">{q.id}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
          {q.points} pt{q.points > 1 ? 's' : ''}
        </span>
      </div>
      {q.imageId && <QuestionImage imageId={q.imageId} />}
      <p className="text-sm text-gray-900 font-medium mb-3">{q.prompt}</p>
      {q.options && (
        <div className="space-y-1.5 mb-2">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`text-sm px-3 py-1.5 rounded-lg border ${
                showAnswers && i === q.answer
                  ? 'border-green-400 bg-green-50 text-green-800 font-medium'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
      {showAnswers && (q.explanation || q.modelAnswer) && (
        <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
          <p className="text-xs font-semibold text-blue-700 mb-1">
            {q.modelAnswer ? 'Model Answer' : 'Explanation'}
          </p>
          <p className="text-xs text-blue-800 leading-relaxed">{q.explanation || q.modelAnswer}</p>
        </div>
      )}
    </div>
  )
}

export default function HighlandsVirtual() {
  const [view, setView] = useState('patterns')
  const [showAnswers, setShowAnswers] = useState(false)

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">🏔️ Highlands Virtual — 2027 Prep</h1>
        <p className="text-gray-500 text-sm">{predictedTest2027.disclaimer}</p>
      </div>

      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setView('patterns')}
          className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-colors ${
            view === 'patterns' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          📚 Past Paper Patterns
        </button>
        <button
          onClick={() => setView('predicted')}
          className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer transition-colors ${
            view === 'predicted' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          📝 Predicted 2027 Test
        </button>
      </div>

      {view === 'patterns' && (
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
            <h3 className="font-semibold text-gray-800 mb-1 text-lg">Highlands Virtual Test Format</h3>
            <p className="text-xs text-gray-500 mb-3">{formatNotes.source}</p>
            <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
              {formatNotes.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
            <p className="text-sm text-blue-800 leading-relaxed">
              The sections below group recurring topics and objects across several 2022-2023 season Solar
              System B tests — the last time the event covered Habitability, matching the 2026-2027 topic.
              Each section notes what's historically been high-yield and flags anything that no longer
              applies under the 2027 object list.
            </p>
          </div>

          <div className="space-y-4">
            {pastPaperPatterns.map((p) => (
              <div key={p.id} className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-800 mb-2 text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.summary}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">High-Yield Topics</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {p.highYield.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'predicted' && (
        <div>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{predictedTest2027.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {predictedTest2027.totalPoints} points total · {predictedTest2027.timeLimit}
              </p>
            </div>
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                showAnswers ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {showAnswers ? '✓ Answers Shown' : 'Show Answers'}
            </button>
          </div>

          <div className="space-y-6">
            {predictedTest2027.sections.map((section) => (
              <div key={section.id}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{section.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                    {section.points} pts
                  </span>
                </div>
                <div className="space-y-3">
                  {section.questions.map((q) => (
                    <PredictedQuestion key={q.id} q={q} showAnswers={showAnswers} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
