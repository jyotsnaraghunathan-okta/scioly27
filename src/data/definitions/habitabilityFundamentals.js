export const habitabilityFundamentalsDefinitions = [
  {
    id: 'def-hf-001',
    term: 'Circumstellar Habitable Zone (CHZ)',
    definition:
      'The range of orbital distances around a star within which a rocky planet with a suitable atmosphere could maintain liquid water on its surface, given the right atmospheric pressure and greenhouse warming.',
    example:
      'Earth, and arguably Mars in its early history, orbit within the Sun\'s habitable zone, while Venus orbits just inside its inner edge.',
    relatedTerms: ['equilibrium temperature', 'greenhouse effect', 'liquid water'],
    topic: 'habitability-fundamentals',
    subtopic: 'Habitable Zone',
  },
  {
    id: 'def-hf-002',
    term: 'Inner Edge of the Habitable Zone',
    definition:
      'The closest distance to a star at which a planet can retain liquid water before a runaway or moist greenhouse effect boils away its oceans and drives a rapid loss of water to space.',
    example:
      'Venus is thought to lie inside the Sun\'s inner habitable zone edge, which is why it likely underwent a runaway greenhouse early in its history.',
    relatedTerms: ['runaway greenhouse effect', 'moist greenhouse', 'Venus habitability'],
    topic: 'habitability-fundamentals',
    subtopic: 'Habitable Zone',
  },
  {
    id: 'def-hf-003',
    term: 'Outer Edge of the Habitable Zone',
    definition:
      'The farthest distance from a star at which enough greenhouse warming (typically from CO2 clouds/ice) could still keep water liquid before CO2 condenses out and stops warming the surface.',
    example:
      'Mars sits near or just beyond the outer edge of the Sun\'s habitable zone, which is one reason its surface is now cold and dry despite evidence of ancient rivers.',
    relatedTerms: ['CO2 greenhouse', 'Mars habitability', 'maximum greenhouse limit'],
    topic: 'habitability-fundamentals',
    subtopic: 'Habitable Zone',
  },
  {
    id: 'def-hf-004',
    term: 'Equilibrium Temperature',
    definition:
      'The theoretical temperature a planet would have if it behaved as a blackbody in radiative balance with the energy it absorbs from its star, ignoring atmospheric greenhouse warming.',
    example:
      "Earth's equilibrium temperature is about -18°C, well below its actual average surface temperature of about 15°C because the atmosphere traps additional heat.",
    relatedTerms: ['albedo', 'greenhouse effect', 'energy budget'],
    topic: 'habitability-fundamentals',
    subtopic: 'Equilibrium Temperature',
  },
  {
    id: 'def-hf-005',
    term: 'Albedo',
    definition:
      "The fraction of incoming radiation that a planet or surface reflects rather than absorbs, usually expressed as a value between 0 (perfectly absorbing) and 1 (perfectly reflecting).",
    example:
      "Venus has a very high albedo (~0.75) because its thick sulfuric acid clouds reflect most sunlight, which partly offsets its close distance to the Sun.",
    relatedTerms: ['equilibrium temperature', 'energy budget', 'clouds'],
    topic: 'habitability-fundamentals',
    subtopic: 'Equilibrium Temperature',
  },
  {
    id: 'def-hf-007',
    term: 'Greenhouse Effect',
    definition:
      'The warming of a planet\'s surface that occurs when its atmosphere absorbs and re-radiates infrared radiation, trapping heat that would otherwise escape to space.',
    example:
      "Venus experiences an extreme greenhouse effect from its dense CO2 atmosphere, giving it a surface temperature around 465°C, hot enough to melt lead.",
    relatedTerms: ['runaway greenhouse effect', 'CO2', 'equilibrium temperature'],
    topic: 'habitability-fundamentals',
    subtopic: 'Greenhouse Effect',
  },
  {
    id: 'def-hf-008',
    term: 'Runaway Greenhouse Effect',
    definition:
      'A positive feedback process in which increasing surface temperature evaporates more water (or other greenhouse gas) into the atmosphere, which traps more heat, driving temperatures up further until oceans are entirely vaporized.',
    example:
      "Venus is the best example of a runaway greenhouse in the solar system: its early oceans, if they existed, would have boiled away entirely, leaving a dense CO2 atmosphere.",
    relatedTerms: ['moist greenhouse', 'inner edge of habitable zone', 'Venus habitability'],
    topic: 'habitability-fundamentals',
    subtopic: 'Greenhouse Effect',
  },
  {
    id: 'def-hf-009',
    term: "Kepler's Third Law",
    definition:
      "A mathematical relationship stating that the square of a planet's orbital period is proportional to the cube of its semi-major axis (T² ∝ a³ for objects orbiting the same central mass).",
    example:
      "Kepler's third law lets astronomers calculate an exoplanet's orbital distance once its orbital period and host star's mass are known.",
    relatedTerms: ['semi-major axis', 'orbital period', 'orbital mechanics'],
    topic: 'habitability-fundamentals',
    subtopic: "Kepler's Laws",
  },
  {
    id: 'def-hf-011',
    term: 'Tidal Locking',
    definition:
      'A state in which an orbiting body\'s rotation period matches its orbital period, so it always shows the same face toward the object it orbits, caused by gravitational tidal torques over time.',
    example:
      "Many close-in exoplanets around red dwarf stars, such as TRAPPIST-1e, are thought to be tidally locked, with a permanent dayside and nightside.",
    relatedTerms: ['tidal heating', 'tidal forces', 'red dwarf habitability'],
    topic: 'habitability-fundamentals',
    subtopic: 'Tidal Forces',
  },
  {
    id: 'def-hf-012',
    term: 'Tidal Heating',
    definition:
      "Internal heating of a moon or planet generated by friction from time-varying gravitational tidal forces, typically caused by an eccentric orbit or orbital resonance with other bodies.",
    example:
      "Jupiter's gravity combined with orbital resonances with Ganymede and Ganymede's neighbors drives intense tidal heating in Io and contributes to a subsurface ocean in Europa.",
    relatedTerms: ['tidal locking', 'orbital resonance', 'subsurface ocean'],
    topic: 'habitability-fundamentals',
    subtopic: 'Tidal Forces',
  },
  {
    id: 'def-hf-013',
    term: 'Orbital Eccentricity',
    definition:
      "A measure of how much an orbit deviates from a perfect circle, ranging from 0 (circular) to just under 1 (highly elongated ellipse); it is defined as e = c/a where c is the distance from center to focus and a is the semi-major axis.",
    example:
      "Mars has a relatively high orbital eccentricity (about 0.093) compared to Earth (about 0.017), which contributes to larger seasonal temperature swings on Mars.",
    relatedTerms: ['semi-major axis', 'climate stability', 'insolation'],
    topic: 'habitability-fundamentals',
    subtopic: 'Orbital Eccentricity',
  },
  {
    id: 'def-hf-014',
    term: 'Climate Stability',
    definition:
      'The tendency of a planetary climate to remain within a survivable range over long timescales rather than swinging between extremes, influenced by orbital eccentricity, axial tilt, and feedback mechanisms like the carbonate-silicate cycle.',
    example:
      "Earth's relatively low eccentricity and the stabilizing influence of the Moon on its axial tilt help keep its climate more stable than that of a planet with a highly eccentric orbit.",
    relatedTerms: ['orbital eccentricity', 'axial tilt', 'carbonate-silicate cycle'],
    topic: 'habitability-fundamentals',
    subtopic: 'Orbital Eccentricity',
  },
  {
    id: 'def-hf-015',
    term: 'CHNOPS',
    definition:
      'An acronym for Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorus, and Sulfur — the six elements that make up the overwhelming majority of the mass of all known life on Earth, forming proteins, nucleic acids, lipids, and carbohydrates.',
    example:
      "DNA's backbone relies on phosphorus, while proteins are built from carbon, hydrogen, nitrogen, oxygen, and sulfur-containing amino acids, illustrating why CHNOPS elements are considered the essential building blocks of known biochemistry.",
    relatedTerms: ['carbon-based life', 'silicon-based biochemistry', 'amino acids'],
    topic: 'habitability-fundamentals',
    subtopic: 'CHNOPS & Biochemistry',
  },
  {
    id: 'def-hf-016',
    term: 'Silicon-Based Biochemistry Hypothesis',
    definition:
      "A hypothetical alternative to carbon-based life in which silicon, which like carbon can form four stable covalent bonds, serves as the molecular backbone; considered less likely because silicon dioxide (unlike CO2) is solid rather than gaseous at biological temperatures, and Si-Si/Si-O bonds are less versatile than carbon's for building diverse complex chains.",
    example:
      'While science fiction often imagines silicon-based aliens, the solid nature of silicon dioxide at Earth-like temperatures would make gas exchange and metabolism far more difficult than for carbon-based life.',
    relatedTerms: ['CHNOPS', 'carbon-based life', 'alternative biochemistry'],
    topic: 'habitability-fundamentals',
    subtopic: 'CHNOPS & Biochemistry',
  },
  {
    id: 'def-hf-017',
    term: 'Deuterium / D/H Ratio',
    definition:
      "Deuterium is a heavy isotope of hydrogen containing one proton and one neutron (versus just one proton in ordinary hydrogen); the ratio of deuterium to hydrogen (D/H) in a body's water serves as an isotopic fingerprint used to trace the water's origin and history.",
    example:
      "Venus's atmosphere shows a D/H ratio roughly 100 times higher than Earth's oceans, interpreted as evidence that Venus lost a large ocean's worth of water over time as lighter hydrogen escaped to space faster than heavier deuterium.",
    relatedTerms: ['heavy water', 'isotopic fingerprint', 'atmospheric escape'],
    topic: 'habitability-fundamentals',
    subtopic: 'CHNOPS & Biochemistry',
  },
  {
    id: 'def-hf-018',
    term: 'Protein Denaturation (Thermal Limit for Life)',
    definition:
      "The unfolding or breakdown of a protein's three-dimensional structure, typically caused by heat, which destroys its biological function; this sets a rough upper thermal limit on carbon-based, protein-dependent life as we know it.",
    example:
      'Cooking an egg denatures (coagulates) its proteins, illustrating the same thermal process thought to place an upper temperature limit on carbon-based life — one reason extremely hot environments like Venus\'s surface are considered inhospitable even before considering other factors.',
    relatedTerms: ['thermal limit of life', 'carbon-based life', 'Venus habitability'],
    topic: 'habitability-fundamentals',
    subtopic: 'CHNOPS & Biochemistry',
  },
  {
    id: 'def-hf-019',
    term: 'The Drake Equation',
    definition:
      "A probabilistic equation estimating the number of currently communicating extraterrestrial civilizations in the galaxy, calculated as the product of factors including the rate of star formation, the fraction of stars with planets, the number of habitable planets per system, and the fractions of those where life, intelligence, and detectable technology successively arise, multiplied by the average lifetime of a civilization's detectable signals.",
    example:
      'Plugging in highly conservative (skeptical) estimates for each factor of the Drake Equation tends to produce a very low expected number of communicating civilizations, fueling debate over the Fermi Paradox.',
    relatedTerms: ['Fermi Paradox', 'f_i (fraction of intelligent life)', 'SETI'],
    topic: 'habitability-fundamentals',
    subtopic: 'Drake Equation & Fermi Paradox',
  },
  {
    id: 'def-hf-020',
    term: 'The Fermi Paradox',
    definition:
      'The apparent contradiction between the high estimated likelihood of intelligent extraterrestrial civilizations existing (given the vast size and age of the universe) and the total lack of observed evidence for them.',
    example:
      'Physicist Enrico Fermi\'s question "Where is everybody?" captures the paradox: if intelligent life should be common, why have we detected no signals or signs of it?',
    relatedTerms: ['Drake Equation', 'technosignature', 'SETI'],
    topic: 'habitability-fundamentals',
    subtopic: 'Drake Equation & Fermi Paradox',
  },
]
