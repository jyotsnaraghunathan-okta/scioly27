export function calculateScore(answers, questions) {
  let correct = 0
  let total = questions.length

  questions.forEach((q) => {
    const answer = answers[q.id]
    if (answer === undefined) return
    if (q.type === 'fill-in-blank' || q.type === 'calculation') {
      const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]
      if (accepted.some(a => String(a).toLowerCase().trim() === String(answer).toLowerCase().trim())) {
        correct++
      }
    } else {
      if (answer === q.answer) correct++
    }
  })

  return { correct, total, percentage: total > 0 ? Math.round((correct / total) * 100) : 0 }
}

export function calculateSubtopicScores(answers, questions) {
  const subtopicMap = {}

  questions.forEach((q) => {
    if (!subtopicMap[q.subtopic]) {
      subtopicMap[q.subtopic] = { correct: 0, total: 0 }
    }
    subtopicMap[q.subtopic].total++

    const answer = answers[q.id]
    if (answer === undefined) return

    if (q.type === 'fill-in-blank' || q.type === 'calculation') {
      const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]
      if (accepted.some(a => String(a).toLowerCase().trim() === String(answer).toLowerCase().trim())) {
        subtopicMap[q.subtopic].correct++
      }
    } else {
      if (answer === q.answer) subtopicMap[q.subtopic].correct++
    }
  })

  return Object.entries(subtopicMap).map(([name, data]) => ({
    subtopic: name,
    correct: data.correct,
    total: data.total,
    percentage: Math.round((data.correct / data.total) * 100),
  }))
}

export function getMasteryLevel(percentage) {
  if (percentage >= 70) return 'mastered'
  if (percentage >= 40) return 'learning'
  return 'weak'
}

export function getMasteryColor(percentage) {
  if (percentage >= 70) return '#22c55e'
  if (percentage >= 40) return '#f59e0b'
  return '#ef4444'
}
