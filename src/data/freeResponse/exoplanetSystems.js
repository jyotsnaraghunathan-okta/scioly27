export const exoplanetSystemsFR = [
  {
    id: 'fr-exo-001',
    topic: 'exoplanet-systems',
    subtopic: 'Detection Methods',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Compare the transit method and the radial velocity method for detecting exoplanets. What does each method directly measure, and what key information can each provide about a detected planet?',
    modelAnswer:
      "The transit method detects exoplanets by measuring the periodic dimming of a star's observed brightness that occurs when a planet passes directly in front of it, as seen from Earth. Because transit depth is proportional to the square of the ratio of the planet's radius to the star's radius, this method directly reveals the planet's size (radius) and, from the time between transits, its orbital period. It requires the planet's orbital plane to be aligned edge-on relative to our line of sight, so it only detects a fraction of all planetary systems. The radial velocity method instead measures the tiny periodic wobble of a star caused by the gravitational tug of an orbiting planet, detected through a repeating Doppler shift (alternating redshift and blueshift) in the star's spectral lines. This method reveals the planet's orbital period and a minimum mass (since only the line-of-sight component of the star's motion is measured, and the true orbital inclination is often unknown). When both methods can be applied to the same planet, combining the radius from transits with the mass from radial velocity allows scientists to calculate the planet's density and infer its likely composition (rocky, gas-rich, etc.).",
    keyPoints: [
      'Transit method measures brightness dips; reveals planet radius and orbital period',
      'Radial velocity method measures Doppler shift from stellar wobble; reveals orbital period and minimum mass',
      'Transit method requires edge-on orbital alignment',
      'Combining both methods allows density and composition estimates',
    ],
  },
  {
    id: 'fr-exo-002',
    topic: 'exoplanet-systems',
    subtopic: 'TRAPPIST-1 System',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      "Describe the TRAPPIST-1 planetary system, including its host star, the number and general characteristics of its planets, and the key habitability challenges its planets face due to their close orbits.",
    modelAnswer:
      "TRAPPIST-1 is an ultra-cool red dwarf star located about 40 light-years from Earth, hosting seven roughly Earth-sized rocky planets, designated b through h, all orbiting closer to their star than Mercury orbits the Sun, with orbital periods ranging from about 1.5 to about 18.8 days. Because TRAPPIST-1 is much dimmer and cooler than the Sun, its habitable zone is compressed into this close-in region, and three to four planets (roughly d, e, f, and g) orbit within or near this zone, with TRAPPIST-1e generally regarded as the most promising candidate due to its rocky density and position solidly within the habitable zone. The system's planets form a tightly linked orbital resonance chain, where their orbital periods are related by near-whole-number ratios that gravitationally stabilize the whole system. However, the planets' close proximity to their star means they are subject to extremely strong tidal forces, and most or all are thought to be tidally locked, always showing the same face toward the star, producing permanent day and night hemispheres. Additionally, red dwarf stars like TRAPPIST-1 tend to be magnetically active with frequent flares, which could strip away planetary atmospheres over billions of years. These open questions about atmospheric retention and heat redistribution on a tidally locked world are actively being investigated with observations from JWST.",
    keyPoints: [
      'TRAPPIST-1 is an ultra-cool red dwarf ~40 light-years away with seven Earth-sized planets',
      'Compact habitable zone places several planets (d/e/f/g) in or near habitable conditions',
      'Orbital resonance chain stabilizes the system',
      'Close orbits likely cause tidal locking; flare activity threatens atmospheric retention',
    ],
  },
  {
    id: 'fr-exo-003',
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-186 & TOI-700 Systems',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Explain the historical significance of Kepler-186f and describe how TOI-700 d and TOI-700 e were discovered.',
    modelAnswer:
      "Kepler-186f, announced in 2014, was the first planet with a radius close to Earth's (about 1.17 Earth radii) discovered within the habitable zone of another star, marking an important milestone in the search for potentially habitable worlds beyond the solar system. It orbits the red dwarf Kepler-186 roughly 580 light-years away, near the outer edge of the star's habitable zone, receiving about one-third the energy Earth receives from the Sun, and was found using the transit method by the Kepler space telescope. TOI-700 d and TOI-700 e are two roughly Earth-sized planets orbiting within the habitable zone of TOI-700, a small, cool star about 100 light-years away. Both were discovered using the transit method by NASA's TESS (Transiting Exoplanet Survey Satellite) mission: TOI-700 d was found in 2020 with an orbital period of about 37.4 days, and the slightly smaller TOI-700 e was found in 2023 with a shorter orbital period of about 27.8 days. Together, these discoveries show how successive transit-survey missions have continued to expand the catalog of Earth-sized, potentially habitable worlds around nearby stars.",
    keyPoints: [
      'Kepler-186f: first Earth-sized planet found in a habitable zone (2014), via transit method, using Kepler',
      "Kepler-186f orbits near the outer edge of its star's habitable zone",
      'TOI-700 d and e discovered via transit method by TESS (2020 and 2023 respectively)',
      'Both TOI-700 planets orbit within their star\'s habitable zone',
    ],
  },
  {
    id: 'fr-exo-004',
    topic: 'exoplanet-systems',
    subtopic: 'Kepler-452b & LHS 1140 b',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Compare Kepler-452b and LHS 1140 b in terms of their host stars and what these differences imply for habitability assessments.',
    modelAnswer:
      "Kepler-452b orbits a G-type, Sun-like star at a distance giving it an orbital period of about 385 days, very close to Earth's own year length, which is part of why it earned the nickname \"Earth's cousin\" after its discovery in 2015. Because its host star is Sun-like, it does not face the flare-activity concerns associated with red dwarf systems, but at roughly 1.6 Earth radii, its bulk composition (rocky super-Earth vs. gas-enveloped sub-Neptune) remains uncertain without a confident mass measurement. LHS 1140 b, by contrast, orbits a red dwarf star about 41 light-years away, discovered in 2017 using both the transit and radial velocity methods. While red dwarf systems in general raise concerns about atmosphere-stripping stellar flares (as seen with Proxima Centauri b), LHS 1140 is notably quieter and less flare-prone than many other red dwarfs, making LHS 1140 b a comparatively promising target for retaining an atmosphere despite orbiting a smaller, cooler star. Together, these two systems illustrate two different habitability considerations: for a Sun-like star like Kepler-452b's host, the open question is mainly about the planet's bulk composition, while for a red dwarf host like LHS 1140, the open question is mainly about whether the planet could have retained an atmosphere in the face of stellar activity — and LHS 1140's unusual quiet favors a positive answer more than most red dwarf systems would.",
    keyPoints: [
      "Kepler-452b orbits a Sun-like (G-type) star with an Earth-like ~385-day orbital period",
      "Kepler-452b's ~1.6 Earth radii leaves its bulk composition (rocky vs. sub-Neptune) uncertain",
      'LHS 1140 b orbits a red dwarf but one that is unusually quiet (low flare activity)',
      "Quieter red dwarfs like LHS 1140 make their habitable-zone planets more promising for retaining atmospheres than active ones like Proxima Centauri",
    ],
  },
]
