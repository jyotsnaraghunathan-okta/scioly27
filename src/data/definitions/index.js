import { habitabilityFundamentalsDefinitions } from './habitabilityFundamentals'
import { solarSystemHabitabilityDefinitions } from './solarSystemHabitability'
import { exoplanetSystemsDefinitions } from './exoplanetSystems'
import { biosignaturesDetectionDefinitions } from './biosignaturesDetection'
import { missionsInstrumentsDefinitions } from './missionsInstruments'
import { streamsRiversDefinitions } from './streamsRivers'
import { lakesPondsDefinitions } from './lakesPonds'
import { groundwaterAquifersDefinitions } from './groundwaterAquifers'
import { wetlandsDefinitions } from './wetlands'
import { humanImpactFreshwaterDefinitions } from './humanImpactFreshwater'

export {
  habitabilityFundamentalsDefinitions,
  solarSystemHabitabilityDefinitions,
  exoplanetSystemsDefinitions,
  biosignaturesDetectionDefinitions,
  missionsInstrumentsDefinitions,
  streamsRiversDefinitions,
  lakesPondsDefinitions,
  groundwaterAquifersDefinitions,
  wetlandsDefinitions,
  humanImpactFreshwaterDefinitions,
}

export const allDefinitions = [
  ...habitabilityFundamentalsDefinitions,
  ...solarSystemHabitabilityDefinitions,
  ...exoplanetSystemsDefinitions,
  ...biosignaturesDetectionDefinitions,
  ...missionsInstrumentsDefinitions,
  ...streamsRiversDefinitions,
  ...lakesPondsDefinitions,
  ...groundwaterAquifersDefinitions,
  ...wetlandsDefinitions,
  ...humanImpactFreshwaterDefinitions,
]
