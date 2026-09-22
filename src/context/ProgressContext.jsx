import { createContext, useCallback, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DIAGNOSTIC_SCORES } from '../utils/constants'
import { topics } from '../data/topics'

export const ProgressContext = createContext(null)

export function ProgressProvider({ children, userId = 'guest' }) {
  const [testResults, setTestResults] = useLocalStorage(`${userId}:sc27-test-results`, [])
  const [practiceResults, setPracticeResults] = useLocalStorage(`${userId}:sc27-practice-results`, [])
  const [completedStudy, setCompletedStudy] = useLocalStorage(`${userId}:sc27-completed-study`, [])

  const recordTestResult = useCallback((result) => {
    setTestResults((prev) => [...prev, { ...result, timestamp: Date.now() }])
  }, [setTestResults])

  const recordPracticeResult = useCallback((result) => {
    setPracticeResults((prev) => [...prev, { ...result, timestamp: Date.now() }])
  }, [setPracticeResults])

  const markStudyComplete = useCallback((subtopicId) => {
    setCompletedStudy((prev) => prev.includes(subtopicId) ? prev : [...prev, subtopicId])
  }, [setCompletedStudy])

  const getTopicMastery = useCallback((topicId) => {
    const topicTests = testResults.filter((r) => r.topicId === topicId)
    if (topicTests.length === 0) return DIAGNOSTIC_SCORES[topicId] || 0
    const recent = topicTests.slice(-3)
    return Math.round(recent.reduce((sum, r) => sum + r.percentage, 0) / recent.length)
  }, [testResults])

  const getAllMastery = useMemo(() => {
    return topics.map((t) => ({
      topicId: t.id,
      name: t.shortName,
      mastery: getTopicMastery(t.id),
    }))
  }, [getTopicMastery])

  const getWeakAreas = useMemo(() => {
    return [...getAllMastery].sort((a, b) => a.mastery - b.mastery)
  }, [getAllMastery])

  const getScoreTimeline = useMemo(() => {
    return testResults.map((r) => ({
      date: new Date(r.timestamp).toLocaleDateString(),
      score: r.percentage,
      topic: r.topicId,
      testId: r.testId,
    }))
  }, [testResults])

  const value = {
    testResults,
    practiceResults,
    completedStudy,
    recordTestResult,
    recordPracticeResult,
    markStudyComplete,
    getTopicMastery,
    getAllMastery,
    getWeakAreas,
    getScoreTimeline,
  }

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}
