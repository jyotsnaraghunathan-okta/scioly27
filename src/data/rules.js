// Official 2027 Science Olympiad Division B Rules Manual excerpts
// Solar System B: p. B55, Dynamic Planet B: p. B20-B21

export const rulesData = {
  'solar-system': {
    eventName: 'Solar System B',
    source: 'Science Olympiad Division B Rules Manual, © 2027 Science Olympiad, Inc. (p. B55)',
    description:
      'Participants will demonstrate their knowledge of habitability within and beyond the Solar System.',
    teamSize: 'Up to 2',
    time: '50 minutes',
    calculator: 'Not allowed',
    eventParameters: [
      'Each team may bring writing utensils.',
      'Each team may bring two 8.5" × 11" sheets of paper, which may be in a sheet protector sealed by tape or laminated, that may contain information on both sides in any form and from any source without any annotations or labels affixed.',
      'Calculators are not allowed.',
    ],
    competitionNote:
      'Exams should emphasize mathematical reasoning, conceptual understanding, and interpretation of data presented in maps, graphs, images, photographs, charts, and/or tables (i.e., minimize trivia). Questions should focus on Solar System objects more than extrasolar systems, and exams should not include detailed questions about objects/systems that are not listed below.',
    objectTables: [
      {
        title: 'Testable Objects & Systems',
        columns: ['Category', 'Named Objects/Systems'],
        rows: [
          [
            'Objects in the Solar System',
            'Venus, Mars, Ganymede, Europa, Enceladus, Titan, Makemake, 101955 Bennu, 67P/Churyumov–Gerasimenko',
          ],
          ['Extrasolar Systems', 'TRAPPIST-1, Kepler-452, LHS 1140'],
        ],
      },
    ],
    topicTable: {
      title: 'Content Topics',
      columns: ['Topic Area', 'Examples Given in the Rules'],
      rows: [
        [
          'Conditions relevant to habitability',
          'Temperature; atmospheric composition and retention; presence of stable liquids (surface and subsurface); tidal heating; chemical disequilibrium.',
        ],
        [
          'Geologic & chemical evidence relevant to habitability',
          'Inferring historical evidence of liquid water from morphology; identifying surface/atmospheric composition from spectral features; delivery of water and organic material from small Solar System bodies.',
        ],
        [
          'Basic biology & chemistry relevant to habitability',
          'Building blocks of life (proteins, nucleic acids, lipids, carbohydrates); phases/forms of water (liquid, amorphous and crystalline ice, brines, clathrates); extremophiles (e.g., chemolithoautotrophs, tardigrades).',
        ],
        [
          'Exoplanet detection techniques',
          'Limited to: transits, radial velocity, microlensing, and direct imaging.',
        ],
        [
          'Missions & instrumentation',
          'General engineering principles, science objectives, instrumentation, and tradeoffs underlying spacecraft/telescope design. Participants may be asked specific questions about only the named missions below.',
        ],
      ],
    },
    missionsList: [
      'Venus Express', 'DAVINCI', 'VERITAS', 'Perseverance', 'Mars Reconnaissance Orbiter',
      'MAVEN', 'Galileo', 'Europa Clipper', 'JUICE', 'Cassini-Huygens',
      'Dragonfly', 'OSIRIS-REx', 'Rosetta', 'Kepler', 'JWST', 'Roman Space Telescope',
    ],
    mathTable: {
      title: 'Mathematical Concepts (No Calculator Allowed)',
      note: 'Questions should emphasize algebraic manipulation (e.g., rearranging/deriving equations), order-of-magnitude estimation, dimensional analysis, sketching graphs, and proportions.',
      columns: ['Category', 'Concepts'],
      rows: [
        [
          'Light, radiation & temperature',
          'Doppler shift, flux, inverse-square law, albedo, Stefan–Boltzmann law, Wien\'s displacement law, equilibrium temperature.',
        ],
        [
          'Gravity, orbits & tides',
          'Kinetic and potential energy, Newton\'s law of gravitation, Kepler\'s laws, escape velocity, tidal forces.',
        ],
        [
          'Chemistry',
          'Ideal gas law, kinetics (e.g., Arrhenius equation), chemical (dis)equilibrium.',
        ],
      ],
    },
    scoring: [
      'High Score wins.',
      'Points will be awarded for the quality and accuracy of responses.',
      'Preselected questions will be used as tiebreakers.',
    ],
  },
  'dynamic-planet': {
    eventName: 'Dynamic Planet B',
    source: 'Science Olympiad Division B Rules Manual, © 2027 Science Olympiad, Inc. (p. B20-B21)',
    description:
      "Teams will complete tasks related to the properties and processes of Earth's fresh waters.",
    teamSize: 'Up to 2',
    time: '50 minutes',
    calculator: 'Class II',
    eventParameters: [
      'Each team may bring writing utensils.',
      'Each team may bring two Class II calculators.',
      'Each team may bring a binder of any size containing information in any form and from any source. Sheet protectors, lamination, tabs, and labels are permitted. If the event features a rotation through a series of laboratory stations where the participants interact with samples, specimens, or displays, no material may be removed from the binder throughout the event.',
    ],
    competitionNote:
      'Participants will be assessed through an exam and/or timed stations on the topics below.',
    objectTables: [],
    topicTable: {
      title: 'Content Topics',
      columns: ['Topic Area', 'Examples Given in the Rules'],
      rows: [
        [
          'Hydrologic cycle, water budgets & the critical zone',
          'Components/fluxes of the hydrologic cycle (precipitation, evaporation, transpiration, evapotranspiration, infiltration, runoff, condensation); storage reservoirs, residence times, and water budgets.',
        ],
        [
          'Climatic controls on freshwater distribution',
          'Precipitation/atmospheric inputs (rainfall, snowfall, seasonality, intensity, spatial patterns); topographic/geographic controls (orographic lift, rain shadow effect, continentality, lake effect, elevation); the arid–semiarid–humid spectrum (perennial vs. ephemeral streams, playas, evaporite deposits).',
        ],
        [
          'Drainage basins & stream networks',
          'Watersheds, drainage divides, and drainage basin characteristics; stream order and networks; drainage patterns, density, and texture.',
        ],
        [
          'Fluvial sediment processes & channel form',
          'Channel types/planform (braided, meandering, straight, anastomosing) and sinuosity; sediment properties (grain size, shape, sorting, rounding); sediment transport/deposition (bed, suspended, dissolved load); fluvial bedforms (ripples, dunes, antidunes, bars).',
        ],
        [
          'Fluvial geomorphology — landforms & valley processes',
          'Longitudinal profile, gradient, base level; dynamic equilibrium and graded streams; erosional features (knickpoints, waterfalls, v-shaped valleys) and processes (stream capture, downcutting, abrasion, meandering, hydraulic action); channel/floodplain landforms (point bars, cut banks, oxbow lakes, floodplains, natural levees, deltas, alluvial fans).',
        ],
        [
          'Streamflow & floods',
          'Flow regimes (perennial, intermittent, ephemeral); discharge, velocity, and load; mathematical relationships describing open-channel flow; floods, flood frequency, and recurrence intervals.',
        ],
        [
          'Groundwater & karst',
          'Subsurface zones (aeration, saturation, water table); aquifers and properties (confined, unconfined, artesian; porosity, permeability); hydraulic gradient and groundwater flow; recharge, discharge, capillarity; surface water–groundwater interactions including saltwater intrusion; karst processes, hydrology, and landforms (sinkholes, solution valleys, caves, disappearing streams, springs).',
        ],
        [
          'Lakes & wetlands',
          'Lake formation and types (tectonic/rifting, volcanic, glacial, fluvial damming); lake water budgets (inflow/outflow); physical/chemical properties and stratification (seasonal turnover); shoreline processes; wetland types, formation, and hydrology (bogs, marshes, swamps, fens).',
        ],
        [
          'Geologic & paleohydrologic record',
          'Sedimentary structures as flow indicators (ripple marks, raindrop imprints, mud cracks, cross-bedding, graded bedding); paleochannels and preserved fluvial/lacustrine deposits.',
        ],
        [
          'Human impacts & water quality',
          'Effects of land-use change (altered runoff, sedimentation, ecological change); engineering structures and water extraction effects (dams, levees, channelization, diversion, downcutting; wells and groundwater pumping — aquifer depletion, land subsidence); water pollution (types, sources, transport).',
        ],
        [
          'Measuring & monitoring freshwater',
          'Interpreting freshwater features on topographic maps; mapping the water table from well data; stream gauging, discharge measurement, and hydrographs; monitoring networks and techniques (observation wells, tracer studies, remote sensing).',
        ],
      ],
    },
    missionsList: [],
    mathTable: null,
    scoring: [
      'High Score wins.',
      'Points will be awarded for the quality and accuracy of answers, the quality of supporting reasoning, and the use of proper scientific methods in responses.',
      'Preselected questions will be used as tiebreakers.',
    ],
    partnership: 'In partnership with the National Oceanic and Atmospheric Administration (NOAA) and the North American Association for Environmental Education (NAAEE)',
  },
}

export function getRulesForSubject(subjectId) {
  return rulesData[subjectId]
}
