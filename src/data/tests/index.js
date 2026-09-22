import { topics } from '../topics'

// Tests are dynamically composed from question pools
// Each topic has 5 tests: 2 easy, 2 medium, 1 hard
// Test IDs follow format: {topicId}-test-{1-5}

export const testMeta = topics.flatMap((topic) => [
  { id: `${topic.id}-test-1`, topicId: topic.id, topicName: topic.name, num: 1, difficulty: 'easy', questionCount: 15 },
  { id: `${topic.id}-test-2`, topicId: topic.id, topicName: topic.name, num: 2, difficulty: 'easy', questionCount: 15 },
  { id: `${topic.id}-test-3`, topicId: topic.id, topicName: topic.name, num: 3, difficulty: 'medium', questionCount: 15 },
  { id: `${topic.id}-test-4`, topicId: topic.id, topicName: topic.name, num: 4, difficulty: 'medium', questionCount: 15 },
  { id: `${topic.id}-test-5`, topicId: topic.id, topicName: topic.name, num: 5, difficulty: 'hard', questionCount: 15 },
])

// Fixed baseline tests (full competition-style, fixed question set) — none yet
export const baselineTestRegistry = []

// Review tests (mixed MCQ + free response, untimed, self-paced) — none yet
export const reviewTestRegistry = []

export function getTestMeta(testId) {
  return testMeta.find((t) => t.id === testId)
}

export function getBaselineTest(testId) {
  return baselineTestRegistry.find((t) => t.id === testId)
}

export function getReviewTest(reviewId) {
  return reviewTestRegistry.find((t) => t.id === reviewId)
}
