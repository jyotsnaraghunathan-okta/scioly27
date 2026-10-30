import { habitabilityFundamentalsCards } from './habitabilityFundamentals'
import { solarSystemHabitabilityCards } from './solarSystemHabitability'
import { exoplanetSystemsCards } from './exoplanetSystems'
import { biosignaturesDetectionCards } from './biosignaturesDetection'
import { missionsInstrumentsCards } from './missionsInstruments'

export {
  habitabilityFundamentalsCards,
  solarSystemHabitabilityCards,
  exoplanetSystemsCards,
  biosignaturesDetectionCards,
  missionsInstrumentsCards,
}

export const allFlashcards = [
  ...habitabilityFundamentalsCards,
  ...solarSystemHabitabilityCards,
  ...exoplanetSystemsCards,
  ...biosignaturesDetectionCards,
  ...missionsInstrumentsCards,
]
