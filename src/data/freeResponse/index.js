import { habitabilityFundamentalsFR } from './habitabilityFundamentals'
import { solarSystemHabitabilityFR } from './solarSystemHabitability'
import { exoplanetSystemsFR } from './exoplanetSystems'
import { biosignaturesDetectionFR } from './biosignaturesDetection'
import { missionsInstrumentsFR } from './missionsInstruments'
import { streamsRiversFR } from './streamsRivers'
import { lakesPondsFR } from './lakesPonds'
import { groundwaterAquifersFR } from './groundwaterAquifers'
import { wetlandsFR } from './wetlands'
import { humanImpactFreshwaterFR } from './humanImpactFreshwater'

export const allFreeResponseQuestions = [
  ...habitabilityFundamentalsFR,
  ...solarSystemHabitabilityFR,
  ...exoplanetSystemsFR,
  ...biosignaturesDetectionFR,
  ...missionsInstrumentsFR,
  ...streamsRiversFR,
  ...lakesPondsFR,
  ...groundwaterAquifersFR,
  ...wetlandsFR,
  ...humanImpactFreshwaterFR,
]
