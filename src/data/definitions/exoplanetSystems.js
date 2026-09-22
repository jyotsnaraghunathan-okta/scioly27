export const exoplanetSystemsDefinitions = [
  {
    id: 'def-exo-001',
    term: 'Transit Method',
    definition:
      "A planet detection technique that measures the periodic, tiny dip in a star's observed brightness as an orbiting planet passes directly in front of it (from our line of sight), which can also reveal the planet's size and orbital period.",
    example:
      'The Kepler and TESS space telescopes both use the transit method to detect thousands of exoplanets by continuously monitoring the brightness of many stars at once.',
    relatedTerms: ['transit depth', 'Kepler', 'TESS'],
    topic: 'exoplanet-systems',
    subtopic: 'Detection Methods',
  },
  {
    id: 'def-exo-002',
    term: 'Radial Velocity (Doppler) Method',
    definition:
      "A detection technique that measures the small periodic wobble of a star caused by the gravitational pull of an orbiting planet, detected as a shift in the star's spectral lines (redshift and blueshift) as it moves slightly toward and away from Earth.",
    example:
      'Proxima Centauri b was discovered using the radial velocity method, detecting the tiny back-and-forth wobble it induces in its host star.',
    relatedTerms: ['Doppler shift', 'stellar wobble', 'minimum mass (m sin i)'],
    topic: 'exoplanet-systems',
    subtopic: 'Detection Methods',
  },
  {
    id: 'def-exo-003',
    term: 'Direct Imaging',
    definition:
      'A detection technique that captures an actual image of an exoplanet by blocking out the overwhelming glare of its host star, most effective for large, young, hot planets orbiting far from their star.',
    example:
      'Direct imaging has successfully photographed giant young exoplanets orbiting far from their stars, though it is far more difficult for small, rocky, close-in habitable-zone planets.',
    relatedTerms: ['coronagraph', 'starshade', 'contrast ratio'],
    topic: 'exoplanet-systems',
    subtopic: 'Detection Methods',
  },
  {
    id: 'def-exo-004',
    term: 'Transit Depth',
    definition:
      "The fractional decrease in a star's observed brightness during a planetary transit, which is proportional to the ratio of the planet's cross-sectional area to the star's, allowing astronomers to estimate planet radius.",
    example:
      "A Jupiter-sized planet transiting a Sun-like star produces a much deeper transit (~1% brightness dip) than an Earth-sized planet (~0.01% dip), since transit depth scales with the square of the planet's radius.",
    relatedTerms: ['transit method', 'planet radius', 'light curve'],
    topic: 'exoplanet-systems',
    subtopic: 'Detection Methods',
  },
  {
    id: 'def-exo-005',
    term: 'Super-Earth',
    definition:
      'A class of exoplanet with a mass and/or radius larger than Earth\'s but smaller than that of ice giants like Neptune, without necessarily being rocky (composition varies).',
    example:
      "TOI-700 d, with a radius about 1.16 times Earth's, is classified as a super-Earth-sized planet within its star's habitable zone.",
    relatedTerms: ['sub-Neptune', 'mini-Neptune', 'rocky planet'],
    topic: 'exoplanet-systems',
    subtopic: 'Exoplanet Classification',
  },
  {
    id: 'def-exo-006',
    term: 'Hot Jupiter',
    definition:
      'A class of giant, gas-dominated exoplanet with a mass comparable to or greater than Jupiter\'s that orbits extremely close to its host star, resulting in very high surface/atmospheric temperatures.',
    example:
      "51 Pegasi b, discovered in 1995, was the first hot Jupiter found around a Sun-like star and helped launch the modern era of exoplanet science.",
    relatedTerms: ['gas giant', 'radial velocity method', 'planetary migration'],
    topic: 'exoplanet-systems',
    subtopic: 'Exoplanet Classification',
  },
  {
    id: 'def-exo-007',
    term: 'Sub-Neptune (Mini-Neptune)',
    definition:
      'A class of exoplanet intermediate in size between Earth and Neptune, typically with a substantial hydrogen-helium envelope surrounding a rocky/icy core, making it distinct in composition from a rocky super-Earth of similar size.',
    example:
      'Sub-Neptunes are extremely common in the galaxy despite having no direct analog in our own solar system.',
    relatedTerms: ['super-Earth', 'radius gap', 'gas envelope'],
    topic: 'exoplanet-systems',
    subtopic: 'Exoplanet Classification',
  },
  {
    id: 'def-exo-008',
    term: 'TRAPPIST-1 System',
    definition:
      'A system of seven roughly Earth-sized rocky planets orbiting an ultra-cool red dwarf star about 40 light-years away, with three to four planets (e, f, and g, with d near the inner edge) located within or near the habitable zone.',
    example:
      "TRAPPIST-1e is considered one of the most promising rocky planets for habitability studies because it lies solidly within the system's habitable zone and has a density suggesting a rocky, Earth-like composition.",
    relatedTerms: ['ultra-cool dwarf star', 'TRAPPIST-1e', 'tidal locking'],
    topic: 'exoplanet-systems',
    subtopic: 'TRAPPIST-1 System',
  },
  {
    id: 'def-exo-009',
    term: 'Orbital Resonance Chain',
    definition:
      'A configuration in which multiple orbiting bodies have orbital periods related by ratios of small whole numbers, gravitationally reinforcing each other\'s orbits over time.',
    example:
      "The seven TRAPPIST-1 planets form a tightly linked orbital resonance chain, with their orbital periods closely matching a repeating ratio pattern.",
    relatedTerms: ['TRAPPIST-1', 'orbital period', 'gravitational interaction'],
    topic: 'exoplanet-systems',
    subtopic: 'TRAPPIST-1 System',
  },
  {
    id: 'def-exo-010',
    term: 'Kepler-186f',
    definition:
      "The first Earth-sized planet discovered within the habitable zone of another star, orbiting the red dwarf Kepler-186 roughly 580 light-years away, receiving about one-third the energy Earth receives from the Sun.",
    example:
      "Kepler-186f, discovered in 2014 using the transit method, is located near the outer edge of its star's habitable zone.",
    relatedTerms: ['Kepler space telescope', 'habitable zone', 'transit method'],
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-186 & TOI-700 Systems',
  },
  {
    id: 'def-exo-011',
    term: 'TOI-700 d and e',
    definition:
      "Two roughly Earth-sized planets within the habitable zone of TOI-700, a small, cool M-dwarf star about 100 light-years away, discovered by the TESS mission (d in 2020, e in 2023).",
    example:
      "TOI-700 d has an orbital period of about 37.4 days, while the smaller TOI-700 e has an orbital period of about 27.8 days; both orbit within their star's habitable zone.",
    relatedTerms: ['TESS', 'M-dwarf star', 'habitable zone'],
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-186 & TOI-700 Systems',
  },
  {
    id: 'def-exo-012',
    term: 'Proxima Centauri b',
    definition:
      "A roughly Earth-mass exoplanet orbiting Proxima Centauri, the closest star to the Sun, discovered via the radial velocity method in 2016; it orbits within its star's habitable zone but is likely exposed to frequent, intense stellar flares that could threaten atmospheric retention.",
    example:
      'Proxima Centauri b, at just about 4.2 light-years away, is the closest known exoplanet to Earth, making it a high-priority target for future direct imaging missions, though its host star\'s powerful flares raise questions about long-term habitability.',
    relatedTerms: ['radial velocity method', 'red dwarf flares', 'closest exoplanet'],
    topic: 'exoplanet-systems',
    subtopic: 'Proxima Centauri b & Nearby Systems',
  },
  {
    id: 'def-exo-013',
    term: 'Kepler-452b',
    definition:
      "An exoplanet about 60% larger in radius than Earth, orbiting a Sun-like (G-type) star in its habitable zone with an orbital period of roughly 385 days, very close to Earth's own year length; discovered by the Kepler mission in 2015.",
    example:
      "Kepler-452b's Sun-like host star and near-Earth-length orbital period led to its popular nickname as \"Earth's cousin,\" though its larger radius means its true composition (rocky vs. gas-rich sub-Neptune) remains uncertain.",
    relatedTerms: ['Kepler space telescope', 'habitable zone', 'super-Earth'],
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-452b & LHS 1140 b',
  },
  {
    id: 'def-exo-014',
    term: 'LHS 1140 b',
    definition:
      'A rocky super-Earth exoplanet orbiting within the habitable zone of LHS 1140, a relatively quiet (low-flare-activity) red dwarf star about 41 light-years away, discovered via the transit and radial velocity methods in 2017.',
    example:
      "Because its host star is unusually quiet for a red dwarf, LHS 1140 b is considered a higher-priority target than more flare-prone systems for JWST atmospheric characterization attempts.",
    relatedTerms: ['transit method', 'radial velocity method', 'red dwarf habitability'],
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-452b & LHS 1140 b',
  },
  {
    id: 'def-exo-015',
    term: 'Habitable-Zone Radius Ambiguity',
    definition:
      'The uncertainty in whether a habitable-zone exoplanet somewhat larger than Earth (a super-Earth-sized radius) is truly rocky or is instead a gas-enveloped sub-Neptune, since radius alone cannot fully distinguish composition without an accompanying mass measurement.',
    example:
      "Kepler-452b's radius of about 1.6 Earth radii places it near the boundary where planets could be either rocky super-Earths or gas-rich sub-Neptunes, illustrating why radius alone is an incomplete guide to habitability.",
    relatedTerms: ['super-Earth', 'sub-Neptune', 'radius gap'],
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-452b & LHS 1140 b',
  },
  {
    id: 'def-exo-016',
    term: 'Complementary Detection Methods (Transit + Radial Velocity)',
    definition:
      "Transit observations alone (with known stellar properties) can yield a planet's radius, orbital period, and orbital inclination, but not its mass; radial velocity observations alone yield orbital period and a minimum mass, but not radius. Combining both methods for the same planet yields mass, radius, and therefore bulk density and inferred composition.",
    example:
      'For planets discovered first via radial velocity, a confirmed transit detection allows scientists to finally combine a real mass measurement with a radius measurement to calculate density.',
    relatedTerms: ['transit method', 'radial velocity method', 'bulk density'],
    topic: 'exoplanet-systems',
    subtopic: 'Detection Methods',
  },
]
