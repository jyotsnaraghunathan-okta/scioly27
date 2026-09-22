// SM-2 Spaced Repetition Algorithm
// Rating: 0=Again, 1=Hard, 2=Good, 3=Easy

export function sm2(card, rating) {
  let { easeFactor = 2.5, interval = 0, repetitions = 0 } = card

  if (rating < 2) {
    // Failed - reset
    repetitions = 0
    interval = 0
  } else {
    // Passed
    if (repetitions === 0) {
      interval = 1
    } else if (repetitions === 1) {
      interval = 6
    } else {
      interval = Math.round(interval * easeFactor)
    }
    repetitions += 1
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02))
  if (easeFactor < 1.3) easeFactor = 1.3

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000

  return {
    easeFactor: Math.round(easeFactor * 100) / 100,
    interval,
    repetitions,
    nextReview,
    lastReview: Date.now(),
    lastRating: rating,
  }
}

export function isDue(card) {
  if (!card.nextReview) return true
  return Date.now() >= card.nextReview
}

export function sortByDue(cards, cardStates) {
  return [...cards].sort((a, b) => {
    const stateA = cardStates[a.id]
    const stateB = cardStates[b.id]
    const dueA = stateA?.nextReview || 0
    const dueB = stateB?.nextReview || 0
    return dueA - dueB
  })
}
