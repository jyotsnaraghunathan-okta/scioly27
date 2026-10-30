import { habitabilityFundamentalsQuestions } from './habitabilityFundamentals'
import { solarSystemHabitabilityQuestions } from './solarSystemHabitability'
import { exoplanetSystemsQuestions } from './exoplanetSystems'
import { biosignaturesDetectionQuestions } from './biosignaturesDetection'
import { missionsInstrumentsQuestions } from './missionsInstruments'

export {
  habitabilityFundamentalsQuestions,
  solarSystemHabitabilityQuestions,
  exoplanetSystemsQuestions,
  biosignaturesDetectionQuestions,
  missionsInstrumentsQuestions,
}

export const allQuestions = [
  ...habitabilityFundamentalsQuestions,
  ...solarSystemHabitabilityQuestions,
  ...exoplanetSystemsQuestions,
  ...biosignaturesDetectionQuestions,
  ...missionsInstrumentsQuestions,
]
