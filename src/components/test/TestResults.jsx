import { useState } from 'react'
import { Link } from 'react-router-dom'
import { calculateScore, calculateSubtopicScores, getMasteryColor } from '../../utils/scoring'
import Badge from '../common/Badge'

function isCorrect(q, answer) {
  if (answer === undefined) return false
  if (q.type === 'fill-in-blank' || q.type === 'calculation') {
    const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]
    return accepted.some((a) => String(a).toLowerCase().trim() === String(answer).toLowerCase().trim())
  }
  return answer === q.answer
}

function getStudyTip(subtopic, percentage) {
  if (percentage >= 70) return null
  const tips = {
    'Mendel\'s Laws': 'Review the definitions of Segregation, Independent Assortment, and Dominance with examples from Mendel\'s original pea plant experiments.',
    'Dihybrid Crosses': 'Practice filling out 4×4 Punnett squares. Memorise the 9:3:3:1 ratio and the product rule shortcut.',
    'Test Crosses': 'Remember: a testcross partner is always homozygous recessive (aa). The offspring ratio directly reveals the unknown genotype.',
    'Incomplete Dominance': 'The phenotypic ratio from Rr×Rr mirrors the genotypic ratio (1:2:1) — no dominant masking.',
    'Codominance': 'Distinguish codominance (both alleles fully expressed simultaneously, e.g. roan cattle) from incomplete dominance (intermediate phenotype).',
    'Multiple Alleles & Blood Types': 'Memorise I^A I^B (type AB), I^A I^O (type A), I^B I^O (type B), I^O I^O (type O). I^A and I^B are codominant; both dominate I^O.',
    'Epistasis': 'Learn the four ratios: 9:7 (complementary), 12:3:1 (dominant), 9:3:4 (recessive), 15:1 (duplicate dominant). Identify which locus is epistatic.',
    'Penetrance & Expressivity': 'Penetrance = fraction of genotype carriers who show any phenotype. Expressivity = how severe the phenotype is in those who show it.',
    'Complementation': 'If two recessive mutants cross and give wild-type F1, they complement → different genes. Same wild-type in F1 = same gene.',
    'Linkage & Recombination': 'RF = (recombinant offspring / total) × 100. Parental gametes = most frequent; recombinant gametes = least frequent.',
    'Gene Mapping': 'Step 1: identify DCO (rarest class). Step 2: compare DCO to parental to find the middle gene. Step 3: count SCO + DCO for each interval.',
    'Chi-Square Analysis': 'χ² = Σ[(O−E)²/E]. If χ² < χ²_critical, fail to reject H₀. df = number of phenotypic classes − 1.',
    'Polygenic Inheritance': 'Many genes, each with small additive effects, produce a continuous bell-shaped distribution. More loci = smoother curve.',
    'Lethal Alleles': 'A 2:1 live-born ratio (instead of 3:1) signals a homozygous lethal allele. The homozygous dominant class dies before birth.',
    'ABC Model': 'Whorls 1–4 are specified by: A | A+B | B+C | C. When one class is lost, A and C expand into each other\'s territory.',
    'Imprinting': 'Imprinted genes are expressed from only one parental allele (maternal or paternal). Only the expressed allele matters for phenotype.',
  }
  return tips[subtopic] ?? `Review the core concepts and worked examples for ${subtopic}.`
}

function QuestionDetail({ item }) {
  const [open, setOpen] = useState(false)
  const { index, q, correct, userAnswer } = item
  const accepted = Array.isArray(q.answer) ? q.answer : [q.answer]

  return (
    <li>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-2 text-left py-1 cursor-pointer border-none bg-transparent"
      >
        <span className={`shrink-0 text-sm font-bold ${correct ? 'text-green-500' : 'text-red-500'}`}>
          {correct ? '✓' : '✗'}
        </span>
        <span className="font-mono text-xs text-gray-400 shrink-0">Q{index}</span>
        <span className={`text-xs flex-1 line-clamp-1 ${correct ? 'text-gray-500' : 'text-gray-700'}`}>
          {q.question}
        </span>
        <span className="text-gray-300 text-xs shrink-0">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="mt-1 mb-2 ml-6 rounded-lg border border-gray-100 bg-gray-50 p-3 text-xs space-y-2 animate-fade-in">
          <p className="text-gray-700 font-medium leading-snug">{q.question}</p>

          {q.options && (
            <ul className="space-y-1">
              {q.options.map((opt, i) => {
                const isCorrectOpt = accepted.includes(i)
                const isUserOpt = userAnswer === i
                return (
                  <li key={i} className={`flex items-center gap-1.5 px-2 py-0.5 rounded ${isCorrectOpt ? 'bg-green-100 text-green-800 font-medium' : isUserOpt && !correct ? 'bg-red-100 text-red-700 line-through' : 'text-gray-500'}`}>
                    <span>{String.fromCharCode(65 + i)}.</span>
                    <span>{opt}</span>
                    {isCorrectOpt && <span className="ml-auto">✓</span>}
                    {isUserOpt && !correct && !isCorrectOpt && <span className="ml-auto">✗</span>}
                  </li>
                )
              })}
            </ul>
          )}

          {!q.options && (
            <div className="space-y-1">
              <p className="text-green-700 font-medium">
                Correct answer: <span className="font-semibold">{accepted.join(' or ')}</span>
              </p>
              {!correct && userAnswer !== undefined && (
                <p className="text-red-600">
                  Your answer: <span className="line-through">{String(userAnswer)}</span>
                </p>
              )}
              {!correct && userAnswer === undefined && (
                <p className="text-gray-400 italic">Not answered</p>
              )}
            </div>
          )}
        </div>
      )}
    </li>
  )
}

export default function TestResults({ questions, answers, testId, onReset }) {
  const [showAnalysis, setShowAnalysis] = useState(false)

  const score = calculateScore(answers, questions)
  const subtopicScores = calculateSubtopicScores(answers, questions).sort((a, b) => a.percentage - b.percentage)

  // Build per-subtopic question list (all questions, with correctness)
  const questionsBySubtopic = {}
  questions.forEach((q, i) => {
    const key = q.subtopic || 'General'
    if (!questionsBySubtopic[key]) questionsBySubtopic[key] = []
    questionsBySubtopic[key].push({ index: i + 1, q, correct: isCorrect(q, answers[q.id]), userAnswer: answers[q.id] })
  })

  const weakSubtopics = subtopicScores.filter((s) => s.percentage < 70)

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <p className="text-5xl mb-4">{score.percentage >= 70 ? '🎉' : score.percentage >= 40 ? '📊' : '💪'}</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Test Complete</h2>
        <p className="text-gray-500">Here are your results</p>
      </div>

      {/* Score card */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center mb-6">
        <div className="text-5xl font-bold mb-2" style={{ color: getMasteryColor(score.percentage) }}>
          {score.percentage}%
        </div>
        <p className="text-gray-500">{score.correct} of {score.total} correct</p>
      </div>

      {/* Subtopic breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Subtopic Breakdown</h3>
        <div className="space-y-3">
          {subtopicScores.map((st) => (
            <div key={st.subtopic} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{st.subtopic}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${st.percentage}%`, backgroundColor: getMasteryColor(st.percentage) }}
                  />
                </div>
                <span className="text-sm font-medium w-16 text-right" style={{ color: getMasteryColor(st.percentage) }}>
                  {st.correct}/{st.total} ({st.percentage}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setShowAnalysis((v) => !v)}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 cursor-pointer border-none"
        >
          {showAnalysis ? 'Hide Analysis' : '🔍 Analyze Results'}
        </button>
        <Link
          to={`/tests/${testId}/review`}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 no-underline"
        >
          Review Answers
        </Link>
        {onReset && (
          <button
            onClick={onReset}
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 cursor-pointer border-solid"
          >
            Retake Test
          </button>
        )}
        <Link
          to="/tests"
          className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 no-underline"
        >
          Back to Tests
        </Link>
      </div>

      {/* Analysis panel */}
      {showAnalysis && (
        <div className="space-y-4 animate-fade-in">

          {/* Score distribution header */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Performance by Subtopic</h3>
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-2xl font-bold text-green-600">
                  {subtopicScores.filter((s) => s.percentage >= 70).length}
                </p>
                <p className="text-xs text-green-700 mt-1">Strong (≥70%)</p>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <p className="text-2xl font-bold text-yellow-600">
                  {subtopicScores.filter((s) => s.percentage >= 40 && s.percentage < 70).length}
                </p>
                <p className="text-xs text-yellow-700 mt-1">Developing (40–69%)</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg border border-red-100">
                <p className="text-2xl font-bold text-red-600">
                  {subtopicScores.filter((s) => s.percentage < 40).length}
                </p>
                <p className="text-xs text-red-700 mt-1">Weak (&lt;40%)</p>
              </div>
            </div>

            {/* Detailed per-subtopic rows */}
            <div className="space-y-4">
              {subtopicScores.map((st) => {
                const tip = getStudyTip(st.subtopic, st.percentage)
                return (
                  <div
                    key={st.subtopic}
                    className="rounded-lg border p-4"
                    style={{ borderColor: getMasteryColor(st.percentage) + '40', backgroundColor: getMasteryColor(st.percentage) + '08' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800 text-sm">{st.subtopic}</span>
                      <span className="text-sm font-bold" style={{ color: getMasteryColor(st.percentage) }}>
                        {st.correct}/{st.total} — {st.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                      <div
                        className="h-1.5 rounded-full transition-all"
                        style={{ width: `${st.percentage}%`, backgroundColor: getMasteryColor(st.percentage) }}
                      />
                    </div>

                    {(questionsBySubtopic[st.subtopic] || []).length > 0 && (
                      <div className="mb-2">
                        <p className="text-xs font-medium text-gray-500 mb-1">Questions:</p>
                        <ul className="space-y-0.5">
                          {(questionsBySubtopic[st.subtopic] || []).map((item) => (
                            <QuestionDetail key={item.index} item={item} />
                          ))}
                        </ul>
                      </div>
                    )}

                    {tip && (
                      <div className="mt-2 flex gap-2 items-start">
                        <span className="text-xs shrink-0">💡</span>
                        <p className="text-xs text-gray-600">{tip}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Priority study list */}
          {weakSubtopics.length > 0 && (
            <div className="bg-white rounded-xl border border-orange-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">Priority Study Areas</h3>
              <p className="text-xs text-gray-500 mb-4">Focus on these subtopics before your next test attempt.</p>
              <ol className="space-y-2">
                {weakSubtopics.map((st, i) => (
                  <li key={st.subtopic} className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: getMasteryColor(st.percentage) }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-gray-800">{st.subtopic}</span>
                      <span className="text-xs text-gray-400 ml-2">{st.correct}/{st.total} correct</span>
                    </div>
                    <span className="text-xs font-semibold" style={{ color: getMasteryColor(st.percentage) }}>
                      {st.percentage}%
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {score.percentage >= 70 && (
            <div className="bg-green-50 rounded-xl border border-green-200 p-5 text-center">
              <p className="text-green-700 font-medium">Strong performance across all subtopics!</p>
              <p className="text-green-600 text-sm mt-1">Consider moving to a harder test or a new topic.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
