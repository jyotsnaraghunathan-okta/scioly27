import { habitabilityFundamentalsExplanations } from './habitabilityFundamentals'
import { solarSystemHabitabilityExplanations } from './solarSystemHabitability'
import { exoplanetSystemsExplanations } from './exoplanetSystems'
import { biosignaturesDetectionExplanations } from './biosignaturesDetection'
import { missionsInstrumentsExplanations } from './missionsInstruments'
import { streamsRiversExplanations } from './streamsRivers'
import { lakesPondsExplanations } from './lakesPonds'
import { groundwaterAquifersExplanations } from './groundwaterAquifers'
import { wetlandsExplanations } from './wetlands'
import { humanImpactFreshwaterExplanations } from './humanImpactFreshwater'

export {
  habitabilityFundamentalsExplanations,
  solarSystemHabitabilityExplanations,
  exoplanetSystemsExplanations,
  biosignaturesDetectionExplanations,
  missionsInstrumentsExplanations,
  streamsRiversExplanations,
  lakesPondsExplanations,
  groundwaterAquifersExplanations,
  wetlandsExplanations,
  humanImpactFreshwaterExplanations,
}

export const allExplanations = [
  ...habitabilityFundamentalsExplanations,
  ...solarSystemHabitabilityExplanations,
  ...exoplanetSystemsExplanations,
  ...biosignaturesDetectionExplanations,
  ...missionsInstrumentsExplanations,
  ...streamsRiversExplanations,
  ...lakesPondsExplanations,
  ...groundwaterAquifersExplanations,
  ...wetlandsExplanations,
  ...humanImpactFreshwaterExplanations,
]
