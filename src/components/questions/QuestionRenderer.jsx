import MultipleChoice from './MultipleChoice'
import FillInBlank from './FillInBlank'
import CalculationQuestion from './CalculationQuestion'
import FreeResponse from './FreeResponse'
import MatchingQuestion from './MatchingQuestion'
import Badge from '../common/Badge'

export default function QuestionRenderer({ question, index, onAnswer, showResult, selectedAnswer }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono text-gray-400">#{index + 1}</span>
        <Badge variant={question.difficulty}>{question.difficulty}</Badge>
        <span className="text-xs text-gray-400">{question.subtopic}</span>
        {question.aiGenerated && (
          <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-600 font-medium">✨ AI Generated</span>
        )}
      </div>
      {question.image && (
        <div className="mb-4 text-center">
          <img
            src={question.image.url}
            alt={question.image.alt || 'Question diagram'}
            className="max-h-60 max-w-full mx-auto rounded-lg border border-gray-200 object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          {question.image.caption && (
            <p className="text-xs text-gray-400 mt-1.5 italic">{question.image.caption}</p>
          )}
        </div>
      )}
      {question.type === 'multiple-choice' && (
        <MultipleChoice
          question={question}
          onAnswer={onAnswer}
          showResult={showResult}
          selectedAnswer={selectedAnswer}
        />
      )}
      {question.type === 'fill-in-blank' && (
        <FillInBlank
          question={question}
          onAnswer={onAnswer}
          showResult={showResult}
          selectedAnswer={selectedAnswer}
        />
      )}
      {question.type === 'calculation' && (
        <CalculationQuestion
          question={question}
          onAnswer={onAnswer}
          showResult={showResult}
          selectedAnswer={selectedAnswer}
        />
      )}
      {question.type === 'free-response' && (
        <FreeResponse question={question} showResult={showResult} />
      )}
      {question.type === 'matching' && (
        <MatchingQuestion
          question={question}
          onAnswer={onAnswer}
          showResult={showResult}
          selectedAnswer={selectedAnswer}
        />
      )}
    </div>
  )
}
