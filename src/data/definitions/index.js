import { habitabilityFundamentalsDefinitions } from './habitabilityFundamentals'
import { solarSystemHabitabilityDefinitions } from './solarSystemHabitability'
import { exoplanetSystemsDefinitions } from './exoplanetSystems'
import { biosignaturesDetectionDefinitions } from './biosignaturesDetection'
import { missionsInstrumentsDefinitions } from './missionsInstruments'

export {
  habitabilityFundamentalsDefinitions,
  solarSystemHabitabilityDefinitions,
  exoplanetSystemsDefinitions,
  biosignaturesDetectionDefinitions,
  missionsInstrumentsDefinitions,
}

export const allDefinitions = [
  ...habitabilityFundamentalsDefinitions,
  ...solarSystemHabitabilityDefinitions,
  ...exoplanetSystemsDefinitions,
  ...biosignaturesDetectionDefinitions,
  ...missionsInstrumentsDefinitions,
]
