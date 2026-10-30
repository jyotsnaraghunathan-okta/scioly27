import { habitabilityFundamentalsFR } from './habitabilityFundamentals'
import { solarSystemHabitabilityFR } from './solarSystemHabitability'
import { exoplanetSystemsFR } from './exoplanetSystems'
import { biosignaturesDetectionFR } from './biosignaturesDetection'
import { missionsInstrumentsFR } from './missionsInstruments'

export const allFreeResponseQuestions = [
  ...habitabilityFundamentalsFR,
  ...solarSystemHabitabilityFR,
  ...exoplanetSystemsFR,
  ...biosignaturesDetectionFR,
  ...missionsInstrumentsFR,
]
