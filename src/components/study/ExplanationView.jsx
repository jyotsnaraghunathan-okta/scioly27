import { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../common/Badge'

function OrganismImage({ url, caption, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
          📷 Image unavailable
        </div>
        {caption && <p className="text-xs text-gray-500 text-center py-1 px-2 bg-gray-50">{caption}</p>}
      </div>
    )
  }
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <img
        src={url}
        alt={alt}
        className="w-full h-40 object-cover"
        onError={() => setFailed(true)}
      />
      {caption && <p className="text-xs text-gray-500 text-center py-1 px-2 bg-gray-50">{caption}</p>}
    </div>
  )
}

function WorkedExample({ example, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-3 last:mb-0 border border-amber-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-amber-50 hover:bg-amber-100 transition-colors text-left border-none cursor-pointer"
      >
        <span className="text-sm font-medium text-amber-900">Example {index + 1}: {example.title}</span>
        <span className="text-amber-600 text-xs">{open ? '▲ Hide' : '▼ Show solution'}</span>
      </button>
      <div className="px-4 py-3 bg-white">
        <p className="text-sm text-gray-700 mb-2 font-medium">Problem:</p>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{example.problem}</p>
        {open && (
          <div className="animate-fade-in">
            <p className="text-sm text-gray-700 mb-2 font-medium">Solution:</p>
            {example.steps?.map((step, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
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

export default function ExplanationView({ topic, explanation }) {
  if (!explanation) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">📖</p>
        <p>Select a subtopic to view its explanation.</p>
      </div>
    )
  }

  if (explanation.comingSoon) {
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">{explanation.title}</h2>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="default">{topic?.name}</Badge>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">Level 202</span>
          </div>
        </div>
        {explanation.availableIn202 ? (
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-10 text-center">
            <p className="text-4xl mb-4">📖</p>
            <h3 className="text-lg font-semibold text-green-900 mb-2">Full Content Available in Level 202</h3>
            <p className="text-sm text-green-800 max-w-md mx-auto">
              A detailed explanation of <strong>{explanation.title}</strong> is available at Level 202.
              Switch your study level to <strong>Level 202</strong> using the toggle at the top of the page to access it.
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl p-10 text-center">
            <p className="text-4xl mb-4">🚧</p>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Level 202 Content Coming Soon</h3>
            <p className="text-sm text-blue-700 max-w-md mx-auto">
              Advanced content for <strong>{explanation.title}</strong> is being prepared.
              Check back after content instructions are added.
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">{explanation.title}</h2>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant={topic ? 'default' : 'default'}>{topic?.name}</Badge>
          <Link to={`/flashcards/${topic?.id}`} className="text-xs text-blue-600 hover:underline no-underline">
            Related Flashcards →
          </Link>
          <Link to={`/practice/${topic?.id}`} className="text-xs text-blue-600 hover:underline no-underline">
            Practice Questions →
          </Link>
        </div>
      </div>

      <div className="space-y-5">
        {/* Main content sections */}
        {explanation.sections.map((section, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">{section.heading}</h3>
            <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-4">
              {section.content}
            </div>
            {section.keyPoints && section.keyPoints.length > 0 && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                <p className="text-sm font-semibold text-blue-700 mb-2">Key Points</p>
                <ul className="text-sm text-blue-800 space-y-1.5">
                  {section.keyPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {section.images && section.images.length > 0 && (
              <div className={`mt-4 grid gap-3 ${section.images.length === 1 ? 'grid-cols-1 max-w-xs' : 'grid-cols-2'}`}>
                {section.images.map((img, k) => (
                  <OrganismImage key={k} url={img.url} caption={img.caption} alt={img.alt} />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Worked Examples */}
        {explanation.workedExamples?.length > 0 && (
          <div className="bg-white rounded-lg border border-amber-200 p-5">
            <h3 className="font-semibold text-amber-800 mb-1 text-lg">✏️ Worked Examples</h3>
            <p className="text-xs text-amber-600 mb-4">Click each example to reveal the step-by-step solution.</p>
            {explanation.workedExamples.map((ex, i) => (
              <WorkedExample key={i} example={ex} index={i} />
            ))}
          </div>
        )}

        {/* Common Misconceptions */}
        {explanation.commonMisconceptions?.length > 0 && (
          <div className="bg-white rounded-lg border border-red-200 p-5">
            <h3 className="font-semibold text-red-800 mb-1 text-lg">⚠️ Common Misconceptions</h3>
            <p className="text-xs text-red-500 mb-4">Mistakes that frequently appear on Science Olympiad exams.</p>
            <div className="space-y-3">
              {explanation.commonMisconceptions.map((item, i) => (
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

        {/* Khan Academy Resources */}
        {explanation.khanAcademyLinks?.length > 0 && (
          <div className="bg-white rounded-lg border border-green-200 p-5">
            <h3 className="font-semibold text-green-800 mb-1 text-lg">📚 Khan Academy Resources</h3>
            <p className="text-xs text-green-600 mb-4">Recommended videos and articles for deeper understanding.</p>
            <div className="space-y-2">
              {explanation.khanAcademyLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-green-100 hover:bg-green-50 transition-colors no-underline group"
                >
                  <span className="text-lg mt-0.5 flex-shrink-0">{link.type === 'video' ? '▶️' : '📄'}</span>
                  <div>
                    <p className="text-sm font-medium text-green-900 group-hover:underline">{link.title}</p>
                    {link.description && (
                      <p className="text-xs text-green-600 mt-0.5">{link.description}</p>
                    )}
                  </div>
                  <span className="ml-auto text-green-400 text-xs self-center flex-shrink-0">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
