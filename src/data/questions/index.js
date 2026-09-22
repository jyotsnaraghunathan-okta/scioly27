import { habitabilityFundamentalsQuestions } from './habitabilityFundamentals'
import { solarSystemHabitabilityQuestions } from './solarSystemHabitability'
import { exoplanetSystemsQuestions } from './exoplanetSystems'
import { biosignaturesDetectionQuestions } from './biosignaturesDetection'
import { missionsInstrumentsQuestions } from './missionsInstruments'
import { streamsRiversQuestions } from './streamsRivers'
import { lakesPondsQuestions } from './lakesPonds'
import { groundwaterAquifersQuestions } from './groundwaterAquifers'
import { wetlandsQuestions } from './wetlands'
import { humanImpactFreshwaterQuestions } from './humanImpactFreshwater'

export {
  habitabilityFundamentalsQuestions,
  solarSystemHabitabilityQuestions,
  exoplanetSystemsQuestions,
  biosignaturesDetectionQuestions,
  missionsInstrumentsQuestions,
  streamsRiversQuestions,
  lakesPondsQuestions,
  groundwaterAquifersQuestions,
  wetlandsQuestions,
  humanImpactFreshwaterQuestions,
}

export const allQuestions = [
  ...habitabilityFundamentalsQuestions,
  ...solarSystemHabitabilityQuestions,
  ...exoplanetSystemsQuestions,
  ...biosignaturesDetectionQuestions,
  ...missionsInstrumentsQuestions,
  ...streamsRiversQuestions,
  ...lakesPondsQuestions,
  ...groundwaterAquifersQuestions,
  ...wetlandsQuestions,
  ...humanImpactFreshwaterQuestions,
]
