import { habitabilityFundamentalsExplanations } from './habitabilityFundamentals'
import { solarSystemHabitabilityExplanations } from './solarSystemHabitability'
import { exoplanetSystemsExplanations } from './exoplanetSystems'
import { biosignaturesDetectionExplanations } from './biosignaturesDetection'
import { missionsInstrumentsExplanations } from './missionsInstruments'
import { missionsPreviousQuestions } from './missionsPreviousQuestions'
import { fluvialGeomorphologyExplanations } from './fluvialGeomorphology'
import { measuringMonitoringExplanations } from './measuringMonitoring'
import { geologicRecordExplanations } from './geologicRecord'
import { humanImpactsExplanations } from './humanImpacts'
import { lakesWetlandsExplanations } from './lakesWetlands'

export {
  habitabilityFundamentalsExplanations,
  solarSystemHabitabilityExplanations,
  exoplanetSystemsExplanations,
  biosignaturesDetectionExplanations,
  missionsInstrumentsExplanations,
  fluvialGeomorphologyExplanations,
  measuringMonitoringExplanations,
  geologicRecordExplanations,
  humanImpactsExplanations,
  lakesWetlandsExplanations,
}

export const allExplanations = [
  ...habitabilityFundamentalsExplanations,
  ...solarSystemHabitabilityExplanations,
  ...exoplanetSystemsExplanations,
  ...biosignaturesDetectionExplanations,
  ...missionsInstrumentsExplanations,
  ...missionsPreviousQuestions,
  ...fluvialGeomorphologyExplanations,
  ...measuringMonitoringExplanations,
  ...geologicRecordExplanations,
  ...humanImpactsExplanations,
  ...lakesWetlandsExplanations,
]
