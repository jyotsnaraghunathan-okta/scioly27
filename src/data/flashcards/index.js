import { habitabilityFundamentalsCards } from './habitabilityFundamentals'
import { solarSystemHabitabilityCards } from './solarSystemHabitability'
import { exoplanetSystemsCards } from './exoplanetSystems'
import { biosignaturesDetectionCards } from './biosignaturesDetection'
import { missionsInstrumentsCards } from './missionsInstruments'
import { streamsRiversCards } from './streamsRivers'
import { lakesPondsCards } from './lakesPonds'
import { groundwaterAquifersCards } from './groundwaterAquifers'
import { wetlandsCards } from './wetlands'
import { humanImpactFreshwaterCards } from './humanImpactFreshwater'

export {
  habitabilityFundamentalsCards,
  solarSystemHabitabilityCards,
  exoplanetSystemsCards,
  biosignaturesDetectionCards,
  missionsInstrumentsCards,
  streamsRiversCards,
  lakesPondsCards,
  groundwaterAquifersCards,
  wetlandsCards,
  humanImpactFreshwaterCards,
}

export const allFlashcards = [
  ...habitabilityFundamentalsCards,
  ...solarSystemHabitabilityCards,
  ...exoplanetSystemsCards,
  ...biosignaturesDetectionCards,
  ...missionsInstrumentsCards,
  ...streamsRiversCards,
  ...lakesPondsCards,
  ...groundwaterAquifersCards,
  ...wetlandsCards,
  ...humanImpactFreshwaterCards,
]
