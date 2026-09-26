import { useSubject } from '../context/SubjectContext'
import { subjects } from '../data/subjects'
import { getRulesForSubject } from '../data/rules'

function InfoStat({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  )
}

function DataTable({ title, note, columns, rows }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <h3 className="font-semibold text-gray-800 mb-1 text-lg">{title}</h3>
      {note && <p className="text-xs text-gray-500 mb-4">{note}</p>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="text-left font-semibold text-gray-700 border border-gray-200 px-3 py-2 align-top"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                {row.map((cell, j) => (
                  <td key={j} className="border border-gray-200 px-3 py-2 align-top text-gray-700 leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Rules() {
  const { selectedSubjectId } = useSubject()
  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const rules = getRulesForSubject(selectedSubjectId)

  if (!rules) {
    return (
      <div className="animate-fade-in text-center py-12 text-gray-500">
        <p className="text-4xl mb-3">📋</p>
        <p>No rules content available for this subject yet.</p>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {subject?.icon} {rules.eventName} — Official Rules
        </h1>
        <p className="text-gray-500 text-sm">{rules.source}</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Description</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{rules.description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <InfoStat label="Team Size" value={rules.teamSize} />
          <InfoStat label="Approx. Time" value={rules.time} />
          <InfoStat label="Calculator" value={rules.calculator} />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
        <h3 className="font-semibold text-gray-800 mb-3 text-lg">Event Parameters</h3>
        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
          {rules.eventParameters.map((p, i) => (
            <li key={i} className="leading-relaxed">{p}</li>
          ))}
        </ul>
      </div>

      {rules.competitionNote && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5">
          <p className="text-sm text-blue-800 leading-relaxed">{rules.competitionNote}</p>
        </div>
      )}

      <div className="space-y-5 mb-5">
        {rules.objectTables?.map((t, i) => (
          <DataTable key={i} title={t.title} columns={t.columns} rows={t.rows} />
        ))}

        {rules.topicTable && (
          <DataTable
            title={rules.topicTable.title}
            columns={rules.topicTable.columns}
            rows={rules.topicTable.rows}
          />
        )}

        {rules.missionsList?.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-800 mb-1 text-lg">Testable Missions & Instruments</h3>
            <p className="text-xs text-gray-500 mb-4">
              Participants may be asked specific questions about only the following missions/telescopes.
            </p>
            <div className="flex flex-wrap gap-2">
              {rules.missionsList.map((m, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        )}

        {rules.mathTable && (
          <DataTable
            title={rules.mathTable.title}
            note={rules.mathTable.note}
            columns={rules.mathTable.columns}
            rows={rules.mathTable.rows}
          />
        )}
      </div>

      <div className="bg-white rounded-lg border border-green-200 p-5">
        <h3 className="font-semibold text-green-800 mb-3 text-lg">Scoring</h3>
        <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-5">
          {rules.scoring.map((s, i) => (
            <li key={i} className="leading-relaxed">{s}</li>
          ))}
        </ul>
        {rules.partnership && (
          <p className="text-xs text-gray-500 mt-4 italic">{rules.partnership}</p>
        )}
      </div>
    </div>
  )
}
