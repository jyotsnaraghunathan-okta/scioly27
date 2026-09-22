import { useState, useMemo } from 'react'
import { allDefinitions } from '../data/definitions'
import { topics } from '../data/topics'
import { subjects } from '../data/subjects'
import { useSubject } from '../context/SubjectContext'
import SearchBar from '../components/common/SearchBar'
import Badge from '../components/common/Badge'

export default function Definitions() {
  const [search, setSearch] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const { selectedSubjectId } = useSubject()

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const subjectTopicIds = subject.topicIds
  const subjectTopics = topics.filter((t) => subjectTopicIds.includes(t.id))

  const filtered = useMemo(() => {
    let defs = allDefinitions.filter((d) => subjectTopicIds.includes(d.topic))
    if (selectedTopic) {
      defs = defs.filter((d) => d.topic === selectedTopic)
    }
    if (search) {
      const q = search.toLowerCase()
      defs = defs.filter(
        (d) =>
          d.term.toLowerCase().includes(q) ||
          d.definition.toLowerCase().includes(q)
      )
    }
    return defs.sort((a, b) => a.term.localeCompare(b.term))
  }, [search, selectedTopic, subjectTopicIds])

  // Reset topic filter when subject changes
  useMemo(() => { setSelectedTopic('') }, [selectedSubjectId])

  const letters = useMemo(() => {
    const set = new Set(filtered.map((d) => d.term[0].toUpperCase()))
    return [...set].sort()
  }, [filtered])

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Glossary</h1>
      <p className="text-gray-500 mb-6">{filtered.length} terms · {subject.icon} {subject.name}</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search terms..." />
        </div>
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Topics</option>
          {subjectTopics.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* Alphabet index */}
      <div className="flex flex-wrap gap-1 mb-6">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-blue-700 no-underline"
          >
            {letter}
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-400 mb-4">{filtered.length} results</p>

      <div className="space-y-2">
        {letters.map((letter) => {
          const letterDefs = filtered.filter((d) => d.term[0].toUpperCase() === letter)
          return (
            <div key={letter} id={`letter-${letter}`}>
              <h3 className="text-lg font-bold text-blue-600 mt-4 mb-2">{letter}</h3>
              {letterDefs.map((def) => (
                <div key={def.id} className="bg-white rounded-lg border border-gray-200 p-4 mb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{def.term}</h4>
                      <p className="text-sm text-gray-600 mt-1">{def.definition}</p>
                      {def.example && (
                        <p className="text-xs text-gray-500 mt-2 italic">Example: {def.example}</p>
                      )}
                      {def.relatedTerms && def.relatedTerms.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {def.relatedTerms.map((rt) => (
                            <Badge key={rt}>{rt}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
