export const missionsInstrumentsFR = [
  {
    id: 'fr-msn-001',
    topic: 'missions-instruments',
    subtopic: 'Mars Missions',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Trace the evolution of Mars rover science goals from the Mars Exploration Rovers (Spirit and Opportunity) through Curiosity to Perseverance. How did the focus of each mission build on the last?",
    modelAnswer:
      "The Mars Exploration Rovers, Spirit and Opportunity, which landed in January 2004, were tasked primarily with searching for geological and mineralogical evidence that liquid water once existed on the Martian surface. Opportunity's discovery of hematite \"blueberries\" at Meridiani Planum confirmed that water had indeed been present at its landing site in the ancient past. Building on this established fact that Mars once had liquid water, Curiosity, which landed in Gale Crater in 2012, shifted the research question toward habitability: rather than simply confirming water had existed, its mission was to assess whether Mars ever had environmental conditions favorable for microbial life. Its analysis of ancient rock layers in Gale Crater confirmed the presence of a long-lived freshwater lake with the chemical ingredients needed to support life. Finally, Perseverance, landing in Jezero Crater in 2021, took the next logical step: since Mars was confirmed to have been both watery and potentially habitable, Perseverance's mission is to directly search for preserved biosignatures in ancient lakebed and river delta sediments, and to collect and cache samples for a future Mars Sample Return campaign so that sophisticated Earth-based laboratories, not just onboard rover instruments, can analyze them for definitive signs of ancient life.",
    keyPoints: [
      'Spirit/Opportunity (2004): confirmed past liquid water via mineral evidence',
      'Curiosity (2012): assessed past habitability, confirmed an ancient freshwater lake environment',
      'Perseverance (2021): directly searches for biosignatures and caches samples for Earth return',
      'Each mission builds logically on the confirmed findings of the previous one',
    ],
  },
  {
    id: 'fr-msn-002',
    topic: 'missions-instruments',
    subtopic: 'Outer Planet Missions',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      "Describe how the Galileo and Cassini missions each contributed evidence for ocean-world habitability, and explain how the upcoming Europa Clipper and Dragonfly missions build on these discoveries.",
    modelAnswer:
      "The Galileo mission, which orbited Jupiter from 1995 to 2003, used magnetometer measurements to detect an induced magnetic field at Europa consistent with a global layer of electrically conductive, salty liquid water beneath its icy shell, providing the first strong evidence for a subsurface ocean there. The Cassini-Huygens mission, which orbited Saturn from 2004 to 2017, made a more direct discovery at Enceladus: it observed active geysers erupting from fractures near the moon's south pole and flew directly through these plumes, sampling water vapor, salts, organic molecules, and molecular hydrogen, the latter suggesting ongoing hydrothermal chemistry between water and rock at the moon's seafloor. Building on Galileo's indirect evidence, Europa Clipper, launched in October 2024 and arriving at Jupiter around 2030, will conduct dozens of close flybys of Europa using more advanced instruments to directly characterize its ice shell thickness, ocean chemistry, and surface geology, providing a far more detailed habitability assessment than Galileo's flybys could. Meanwhile, Dragonfly, planned to launch no earlier than 2028, extends exploration to Titan, an icy moon with confirmed surface liquid (methane/ethane lakes) and complex atmospheric chemistry; as a rotorcraft, it will fly to multiple sites on Titan's surface to directly sample its organic chemistry, something no prior mission (including Cassini-Huygens, which only briefly examined one landing site via the Huygens probe) has been able to do.",
    keyPoints: [
      "Galileo: indirect magnetic field evidence for Europa's subsurface ocean",
      "Cassini: direct plume sampling revealing Enceladus's ocean chemistry, including molecular hydrogen",
      'Europa Clipper: builds on Galileo with detailed flyby characterization of Europa',
      "Dragonfly: builds on Cassini-Huygens by sampling multiple Titan sites directly",
    ],
  },
  {
    id: 'fr-msn-003',
    topic: 'missions-instruments',
    subtopic: 'Space Telescopes',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Explain the difference in purpose between "discovery" telescopes like Kepler and TESS and "characterization" telescopes like Spitzer and JWST, using specific examples of what each has contributed to exoplanet science.',
    modelAnswer:
      "Discovery telescopes like Kepler and TESS are primarily designed to find new exoplanets by monitoring the brightness of large numbers of stars using the transit method, looking for the periodic dimming caused by a planet passing in front of its star. Kepler, launched in 2009, stared continuously at a single fixed field of more than 150,000 stars and discovered thousands of exoplanets, including Kepler-186f, the first Earth-sized planet found in another star's habitable zone. TESS, launched in 2018, instead surveys nearly the entire sky, covering an area over 400 times larger than Kepler's field of view, focusing on bright, nearby stars, and has discovered systems like TOI-700 d and TOI-700 e. Characterization telescopes, by contrast, study planets that are already known to exist in much greater detail. Spitzer, an infrared telescope that operated from 2003 to 2020, conducted a nearly 20-day continuous observation campaign of the TRAPPIST-1 system in 2017 that precisely refined the sizes and orbital periods of its seven known planets. JWST, launched in December 2021, goes even further, using spectroscopy to directly identify the chemical composition of exoplanet atmospheres, such as searching for potential biosignature gases at K2-18b or testing whether TRAPPIST-1 planets retain atmospheres at all. In short, discovery telescopes answer \"what planets exist?\" while characterization telescopes answer \"what are these known planets actually like?\"",
    keyPoints: [
      'Discovery telescopes (Kepler, TESS) find new planets via the transit method',
      'Kepler: deep stare at one field, found Kepler-186f; TESS: all-sky survey, found TOI-700 d/e',
      'Characterization telescopes (Spitzer, JWST) study known planets in greater detail',
      'Spitzer refined TRAPPIST-1 orbital parameters; JWST performs atmospheric spectroscopy',
    ],
  },
  {
    id: 'fr-msn-004',
    topic: 'missions-instruments',
    subtopic: 'Small Body Missions',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Explain what Rosetta's measurements at comet 67P revealed about the possible cometary origin of Earth's water, and describe one other significant chemical discovery Rosetta made relevant to the origin of life.",
    modelAnswer:
      "ESA's Rosetta mission measured the deuterium-to-hydrogen (D/H) ratio in the water ice of comet 67P/Churyumov-Gerasimenko and found it to be roughly three times higher than the D/H ratio of Earth's ocean water. Because this isotopic ratio serves as a fingerprint for tracing where a body's water originated, this significant mismatch between 67P's water and Earth's water was a landmark result arguing against Jupiter-family comets, as a class, being the primary source of Earth's oceans; if most of Earth's water had come from comets like 67P, the D/H ratios would be expected to match much more closely. This finding shifted attention toward other potential water sources for early Earth, such as water-rich asteroids, though the full picture of how Earth acquired its water remains an active area of research. Separately, Rosetta made another significant chemical discovery relevant to the origin of life: it detected glycine, a simple amino acid and one of the basic building blocks of proteins, in the material surrounding comet 67P, along with phosphorus, an essential CHNOPS element. This detection supports the broader hypothesis that comets could have delivered prebiotic chemical building blocks, such as amino acids and phosphorus-bearing compounds, to the surface of the early Earth, potentially contributing raw material relevant to the origin of life, even if comets are not the dominant source of Earth's water itself.",
    keyPoints: [
      "Rosetta measured 67P's water D/H ratio at roughly 3x Earth ocean water's ratio",
      "This mismatch argues against Jupiter-family comets being the primary source of Earth's ocean water",
      'Rosetta detected glycine (an amino acid) and phosphorus at 67P',
      'This supports the idea that comets may have delivered prebiotic building blocks to early Earth',
    ],
  },
]
