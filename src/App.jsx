import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/layout/Layout'
import RequireAuth from './components/auth/RequireAuth'
import OktaCallback from './components/auth/OktaCallback'
import Dashboard from './pages/Dashboard'
import StudyGuide from './pages/StudyGuide'
import Flashcards from './pages/Flashcards'
import Definitions from './pages/Definitions'
import Practice from './pages/Practice'
import Tests from './pages/Tests'
import FreeResponseTest from './pages/FreeResponseTest'
import ReviewTest from './pages/ReviewTest'
import TestTaking from './pages/TestTaking'
import TestReview from './pages/TestReview'
import Progress from './pages/Progress'
import ReviseAgain from './pages/ReviseAgain'
import Admin from './pages/Admin'
import Profile from './pages/Profile'

function ProtectedLayout() {
  return (
    <RequireAuth>
      <Layout>
        <Outlet />
      </Layout>
    </RequireAuth>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login/callback" element={<OktaCallback />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study/:topicId?/:subtopicId?" element={<StudyGuide />} />
        <Route path="/flashcards/:topicId?" element={<Flashcards />} />
        <Route path="/glossary" element={<Definitions />} />
        <Route path="/practice/:topicId?" element={<Practice />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/fr/:topicId" element={<FreeResponseTest />} />
        <Route path="/tests/review/:reviewId" element={<ReviewTest />} />
        <Route path="/tests/:testId" element={<TestTaking />} />
        <Route path="/tests/:testId/review" element={<TestReview />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/revise" element={<ReviseAgain />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
