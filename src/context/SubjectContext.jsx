import { createContext, useContext, useState } from 'react'

const SubjectContext = createContext(null)

export function SubjectProvider({ children }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    () => localStorage.getItem('sc27-selected-subject') || 'solar-system'
  )

  function selectSubject(id) {
    localStorage.setItem('sc27-selected-subject', id)
    setSelectedSubjectId(id)
  }

  return (
    <SubjectContext.Provider value={{ selectedSubjectId, selectSubject }}>
      {children}
    </SubjectContext.Provider>
  )
}

export function useSubject() {
  const ctx = useContext(SubjectContext)
  if (!ctx) throw new Error('useSubject must be used inside SubjectProvider')
  return ctx
}
