import Badge from '../common/Badge'

export default function SubtopicAccordion({ subtopic, explanation }) {
  const firstSection = explanation?.sections?.[0]

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-400">▶</span>
          <span className="font-medium text-gray-900">{subtopic.name}</span>
          <Badge variant={subtopic.level === 'State' ? 'state' : 'regional'}>
            {subtopic.level}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          {explanation ? (
            <>
              <span>{explanation.sections.length} sections</span>
              {explanation.workedExamples?.length > 0 && (
                <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                  {explanation.workedExamples.length} examples
                </span>
              )}
              {explanation.khanAcademyLinks?.length > 0 && (
                <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                  📚 KA
                </span>
              )}
            </>
          ) : (
            <span className="text-gray-300">No content yet</span>
          )}
          <span className="text-blue-500 font-medium">View →</span>
        </div>
      </div>
      {firstSection && (
        <div className="px-4 pb-3 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
            {firstSection.content.slice(0, 180)}…
          </p>
        </div>
      )}
    </div>
  )
}
