import TestSelector from '../components/test/TestSelector'
import { useSubject } from '../context/SubjectContext'
import { subjects } from '../data/subjects'

export default function Tests() {
  const { selectedSubjectId } = useSubject()
  const subject = subjects.find((s) => s.id === selectedSubjectId)

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Tests</h1>
      <p className="text-gray-500 mb-6">
        5 tests per topic (2 Easy, 2 Medium, 1 Hard) · {subject.icon} {subject.name}
      </p>
      <TestSelector topicIds={subject.topicIds} />
    </div>
  )
}
