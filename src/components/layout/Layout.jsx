import Navbar from './Navbar'
import { useSubject } from '../../context/SubjectContext'

export default function Layout({ children }) {
  const { selectedSubjectId } = useSubject()
  const isDynamicPlanet = selectedSubjectId === 'dynamic-planet'
  const isSolarSystem = selectedSubjectId === 'solar-system'

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDynamicPlanet ? 'theme-freshwater' : isSolarSystem ? 'theme-solar' : 'bg-gray-50'}`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6 relative" style={{ zIndex: 1 }}>
        {children}
      </main>
    </div>
  )
}
