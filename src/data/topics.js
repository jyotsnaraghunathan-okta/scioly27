export const topics = [
  // ===== SOLAR SYSTEM (Habitability) =====
  {
    id: 'habitability-fundamentals',
    subjectId: 'solar-system',
    name: 'Habitability Fundamentals',
    shortName: 'Habitability',
    icon: '🌡️',
    color: '#f59e0b',
    subtopics: [
      { id: 'habitable-zone', name: 'Circumstellar Habitable Zone', level: 'Regional' },
      { id: 'equilibrium-temp', name: 'Equilibrium Temperature & Energy Budgets', level: 'Regional' },
      { id: 'greenhouse-effect', name: 'Greenhouse Effect & Atmospheres', level: 'Regional' },
      { id: 'keplers-laws', name: "Kepler's Laws & Orbital Mechanics", level: 'Regional' },
      { id: 'tidal-forces', name: 'Tidal Forces, Heating & Locking', level: 'State' },
      { id: 'orbital-eccentricity', name: 'Orbital Eccentricity & Climate Stability', level: 'State' },
      { id: 'chnops-biochemistry', name: 'CHNOPS Elements, Deuterium & Alternative Biochemistries', level: 'State' },
      { id: 'drake-fermi', name: 'The Drake Equation & Fermi Paradox', level: 'State' },
    ],
  },
  {
    id: 'solar-system-habitability',
    subjectId: 'solar-system',
    name: 'Habitability in Our Solar System',
    shortName: 'Solar Habitability',
    icon: '🔴',
    color: '#ef4444',
    subtopics: [
      { id: 'mars-habitability', name: 'Mars: Past & Present Habitability', level: 'Regional' },
      { id: 'venus-habitability', name: 'Venus: Runaway Greenhouse & Cloud Habitability', level: 'Regional' },
      { id: 'europa-enceladus', name: 'Europa & Enceladus: Subsurface Oceans', level: 'Regional' },
      { id: 'ganymede', name: 'Ganymede: Magnetosphere & Internal Differentiation', level: 'Regional' },
      { id: 'titan', name: 'Titan: Hydrocarbon Lakes & Prebiotic Chemistry', level: 'State' },
      { id: 'ceres-dwarf-planets', name: 'Ceres & Other Dwarf Planets', level: 'State' },
      { id: 'makemake', name: 'Makemake & Other Trans-Neptunian Dwarf Planets', level: 'State' },
    ],
  },
  {
    id: 'exoplanet-systems',
    subjectId: 'solar-system',
    name: 'Exoplanet Systems',
    shortName: 'Exoplanets',
    icon: '🌍',
    color: '#8b5cf6',
    subtopics: [
      { id: 'detection-methods', name: 'Detection Methods (Transit, RV, Direct Imaging)', level: 'Regional' },
      { id: 'exoplanet-classification', name: 'Exoplanet Classification & Types', level: 'Regional' },
      { id: 'trappist-1', name: 'TRAPPIST-1 System', level: 'Regional' },
      { id: 'kepler-toi-systems', name: 'Kepler-186 & TOI-700 Systems', level: 'State' },
      { id: 'proxima-centauri', name: 'Proxima Centauri b & Nearby Systems', level: 'State' },
      { id: 'kepler452-lhs1140', name: 'Kepler-452b & LHS 1140 b', level: 'State' },
    ],
  },
  {
    id: 'biosignatures-detection',
    subjectId: 'solar-system',
    name: 'Biosignatures & Detection',
    shortName: 'Biosignatures',
    icon: '🔬',
    color: '#22c55e',
    subtopics: [
      { id: 'atmospheric-biosignatures', name: 'Atmospheric Biosignature Gases', level: 'Regional' },
      { id: 'spectroscopy', name: 'Spectroscopy Techniques', level: 'Regional' },
      { id: 'surface-feature-imaging', name: 'Surface Feature Imaging & Geologic Activity', level: 'State' },
      { id: 'technosignatures', name: 'Technosignatures', level: 'State' },
    ],
  },
  {
    id: 'missions-instruments',
    subjectId: 'solar-system',
    name: 'Missions & Instruments',
    shortName: 'Missions',
    icon: '🛰️',
    color: '#06b6d4',
    subtopics: [
      { id: 'mars-missions', name: 'Mars Missions (Rovers & Landers)', level: 'Regional' },
      { id: 'outer-planet-missions', name: 'Outer Planet Missions (Cassini, Galileo, Europa Clipper, Dragonfly)', level: 'Regional' },
      { id: 'small-body-missions', name: 'Small Body Missions (OSIRIS-REx, Rosetta, DAVINCI+, VERITAS)', level: 'State' },
      { id: 'space-telescopes', name: 'Space Telescopes (JWST, Kepler, TESS, Spitzer)', level: 'Regional' },
    ],
  },
  // ===== DYNAMIC PLANET (Earth's Fresh Waters) =====
  {
    id: 'streams-rivers',
    subjectId: 'dynamic-planet',
    name: 'Streams, Rivers & Drainage',
    shortName: 'Streams',
    icon: '🏞️',
    color: '#0ea5e9',
    subtopics: [
      { id: 'stream-flow-discharge', name: 'Stream Flow & Discharge', level: 'Regional' },
      { id: 'drainage-patterns', name: 'Drainage Patterns & Basins', level: 'Regional' },
      { id: 'stream-order', name: 'Stream Order & Channel Morphology', level: 'Regional' },
      { id: 'erosion-deposition', name: 'Erosion & Deposition Processes', level: 'Regional' },
      { id: 'floodplains-meanders', name: 'Floodplains & Meanders', level: 'State' },
    ],
  },
  {
    id: 'lakes-ponds',
    subjectId: 'dynamic-planet',
    name: 'Lakes & Ponds',
    shortName: 'Lakes',
    icon: '🏔️',
    color: '#3b82f6',
    subtopics: [
      { id: 'lake-formation', name: 'Lake Formation Types', level: 'Regional' },
      { id: 'thermal-stratification', name: 'Thermal Stratification & Turnover', level: 'Regional' },
      { id: 'trophic-states', name: 'Trophic States & Eutrophication', level: 'Regional' },
      { id: 'lake-zones', name: 'Lake Zones (Littoral, Limnetic, Profundal, Benthic)', level: 'State' },
    ],
  },
  {
    id: 'groundwater-aquifers',
    subjectId: 'dynamic-planet',
    name: 'Groundwater & Aquifers',
    shortName: 'Groundwater',
    icon: '💧',
    color: '#06b6d4',
    subtopics: [
      { id: 'porosity-permeability', name: 'Porosity & Permeability', level: 'Regional' },
      { id: 'water-table', name: 'Water Table & Unsaturated Zone', level: 'Regional' },
      { id: 'aquifer-types', name: 'Confined vs Unconfined Aquifers', level: 'Regional' },
      { id: 'wells-springs', name: 'Wells & Springs', level: 'State' },
      { id: 'recharge-contamination', name: 'Aquifer Recharge & Contamination', level: 'State' },
    ],
  },
  {
    id: 'wetlands',
    subjectId: 'dynamic-planet',
    name: 'Wetlands',
    shortName: 'Wetlands',
    icon: '🌾',
    color: '#10b981',
    subtopics: [
      { id: 'wetland-types', name: 'Wetland Types (Marsh, Swamp, Bog, Fen)', level: 'Regional' },
      { id: 'wetland-hydrology', name: 'Wetland Hydrology', level: 'Regional' },
      { id: 'wetland-functions', name: 'Ecological Functions & Services', level: 'Regional' },
      { id: 'wetland-delineation', name: 'Wetland Delineation & Regulation', level: 'State' },
    ],
  },
  {
    id: 'human-impact-freshwater',
    subjectId: 'dynamic-planet',
    name: 'Human Impact & Water Resources',
    shortName: 'Human Impact',
    icon: '🏭',
    color: '#f59e0b',
    subtopics: [
      { id: 'pollution-sources', name: 'Point & Nonpoint Pollution Sources', level: 'Regional' },
      { id: 'water-rights-management', name: 'Water Rights & Management', level: 'State' },
      { id: 'dams-reservoirs', name: 'Dams & Reservoirs', level: 'Regional' },
      { id: 'climate-change-freshwater', name: 'Climate Change Effects on Freshwater', level: 'State' },
      { id: 'conservation-practices', name: 'Conservation & Best Management Practices', level: 'Regional' },
    ],
  },
]

export function getTopicById(id) {
  return topics.find((t) => t.id === id)
}

export function getSubtopic(topicId, subtopicId) {
  const topic = getTopicById(topicId)
  return topic?.subtopics.find((s) => s.id === subtopicId)
}
