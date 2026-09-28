// Highlands Virtual — 2027 prediction workspace.
//
// This file contains ORIGINAL material only. It does not reproduce questions
// from any past competition test. The "format notes" describe the observed
// structural conventions of past Highlands Virtual Invitational tests (section
// counts, point weightings, timing, platform) — format/structure is not
// copyrightable expression. The "past paper patterns" summarize, in original
// wording, which topics/objects have recurred across several 2022-2023 season
// Solar System B tests (the last Habitability-topic year, matching 2026-2027).
// The "predicted test" is a brand-new mock exam written from scratch, aligned
// to the official 2027 Division B rules, in a similar style/format.

export const formatNotes = {
  source: "Based on the Highlands Virtual Invitational's own Oct. 2025 Solar System B test structure (Scilympiad platform).",
  notes: [
    'Hosted on Scilympiad; teams take the test online during their assigned window.',
    'Teams may bring two 8.5"x11" sheets of paper, double-sided (4 pages total).',
    'Time limit: 50 minutes.',
    'Three sections: (A) Multiple Choice, (B) Multiple Choice & Short Answer, (C) Mathematical Concepts.',
    'Section A and much of Section B are organized as image-anchored question chains — several consecutive questions all reference one shared image before moving to the next.',
    'A subset of questions are marked as tiebreakers; tiebreaker order is announced in the instructions.',
    'Math questions in Section C emphasize algebraic manipulation and scaling reasoning (e.g., "how many times more/less"), not plug-and-chug arithmetic — no calculator is implied by the rules.',
  ],
}

// ── Grouped study notes synthesized from patterns across multiple 2022-2023
// season Solar System B tests (BirdSO, Sierra Vista, High Desert, High Desert
// Invitational, UMSO, UT Regional, UT Invitational). Only topics that remain
// on the official 2027 rules list are carried forward as "high-priority";
// items historically tested but NOT on the 2027 object list are flagged as
// such since they should not reappear this cycle.
export const pastPaperPatterns = [
  {
    id: 'pattern-venus-mars',
    title: 'Terrestrial Habitability: Venus & Mars',
    summary:
      "Across nearly every 2022-2023 season test reviewed, Venus and Mars anchored at least one major question block. Recurring angles: Venus's runaway greenhouse effect and D/H ratio as evidence of past water loss, the (still-debated) phosphine cloud-habitability story, and Venus's lack of plate tectonics; for Mars, geomorphological evidence of ancient water (channels, deltas, clay/sulfate minerals), present-day atmospheric escape (tied to MAVEN), and the argument for why present-day Mars cannot support stable surface liquid water.",
    highYield: [
      "Venus's runaway/moist greenhouse effect and the resulting D/H ratio anomaly",
      'The Venus cloud-layer habitability hypothesis and the 2020 phosphine controversy',
      'Geologic evidence for ancient Martian water (river valleys, deltas, Jezero Crater)',
      "Mars's atmospheric loss mechanism (no magnetic field → solar wind stripping, MAVEN)",
    ],
  },
  {
    id: 'pattern-icy-moons',
    title: 'Icy Ocean Worlds: Europa, Enceladus, Titan, Ganymede',
    summary:
      'This was consistently the single most heavily tested block across every past paper reviewed — usually the largest point value in the free-response section. Europa and Enceladus were almost always paired or contrasted directly (indirect vs. direct evidence for a subsurface ocean); Titan appeared for its hydrocarbon lakes and prebiotic chemistry; Ganymede appeared less often historically but is explicitly on the 2027 object list for its unique self-generated magnetic field.',
    highYield: [
      "Europa: induced magnetic field (Galileo), lineae/lenticulae surface evidence, Europa Clipper's mission goals",
      "Enceladus: Cassini plume composition (molecular hydrogen → hydrothermal chemistry), tidal heating at 'tiger stripe' fractures",
      "Titan: methane/ethane lake cycle, tholins, Cassini-Huygens and Dragonfly",
      "Ganymede: intrinsic vs. induced magnetic fields (contrast with Europa/Callisto), internal differentiation",
    ],
  },
  {
    id: 'pattern-small-bodies',
    title: 'Small Bodies: Delivering Water & Organics',
    summary:
      "Comets and asteroids consistently appeared as a 'what did this small body teach us about the early solar system / origin of Earth's water and organics' theme, almost always tied directly to a specific sample-return or flyby mission. 67P and Bennu are the two small bodies on the 2027 list — both were reliably tested for their chemistry (D/H ratio, amino acids/glycine) rather than just physical description.",
    highYield: [
      "67P: Rosetta/Philae mission, D/H ratio argument against comets as Earth's primary water source, detection of glycine and phosphorus",
      'Bennu: OSIRIS-REx sample return (2023), hydrated minerals and organics in the returned sample, particle-ejection events',
    ],
  },
  {
    id: 'pattern-dwarf-planets',
    title: 'Dwarf Planets Beyond Neptune: Makemake',
    summary:
      'Trans-Neptunian dwarf planets appeared less frequently than the ocean moons, usually as a single identification or comparison question (e.g., contrasting surface ice composition and atmosphere presence/absence with Pluto). Makemake is the one explicitly named for 2027.',
    highYield: [
      'Makemake surface composition (methane/ethane/nitrogen ices, tholin coloring) and its lack of a confirmed atmosphere, contrasted with Pluto',
    ],
  },
  {
    id: 'pattern-exosystems',
    title: 'Extrasolar Systems',
    summary:
      'TRAPPIST-1 was the single most reliably tested exosystem across every past paper — usually including its resonance chain, tidal locking, and which planets sit in the habitable zone. Proxima Centauri, Kepler-186, and TOI-700 also appeared often in 2022-2023, but none of those three are on the 2027 object list, so they are lower priority this cycle. Kepler-452b and LHS 1140 b are the two additional systems specified for 2027 and should be studied as a contrasting pair (Sun-like vs. red-dwarf host star habitability tradeoffs).',
    highYield: [
      'TRAPPIST-1: resonance chain, tidal locking, which planets (d/e/f/g) are in the habitable zone, JWST atmosphere searches',
      "Kepler-452b vs. LHS 1140 b: Sun-like host (radius/composition ambiguity) vs. quiet red dwarf host (flare activity and atmosphere retention)",
    ],
  },
  {
    id: 'pattern-detection',
    title: 'Exoplanet Detection Methods',
    summary:
      'Nearly every past paper included at least one light-curve-reading or radial-velocity-plot-reading question, plus a conceptual question on detection bias (why RV and transit both favor close-in planets). Transit depth reasoning via (Rp/Rs)² appeared repeatedly, phrased as a ratio/scaling problem rather than a plug-in formula.',
    highYield: [
      'Reading a light curve or RV plot to extract orbital period, transit depth, or a wobble amplitude',
      'Transit depth ∝ (Rp/Rs)², used in scaling/proportion questions',
      'Why RV and transit methods are both biased toward close-in, larger planets',
      'Combining transit + RV data to get density/composition',
    ],
  },
  {
    id: 'pattern-missions',
    title: 'Missions & Instruments',
    summary:
      'Missions almost always appeared attached to the object they studied (e.g., a Europa question chain ending in an Europa Clipper question) rather than as a standalone "name that spacecraft" list. Engineering-tradeoff reasoning (why a flyby vs. an orbiter, why an RTG vs. solar panels) showed up as a recurring "so what" style question.',
    highYield: [
      'Cassini-Huygens (Saturn/Titan/Enceladus), Galileo (Jupiter system), OSIRIS-REx (Bennu), Rosetta (67P)',
      'DAVINCI and VERITAS (upcoming Venus missions) and MAVEN (Mars atmospheric escape)',
      'Europa Clipper, JUICE, and Dragonfly (why flybys, why nuclear power, why a rotorcraft works on Titan)',
      'JWST, Kepler, and the Roman Space Telescope for exoplanet atmosphere/detection work',
    ],
  },
  {
    id: 'pattern-math',
    title: 'Math & Physics Concepts',
    summary:
      "Math sections consistently rewarded algebraic manipulation and order-of-magnitude/proportional reasoning over arithmetic. Kepler's laws (2nd law conceptually via equal-areas, 3rd law via T²∝a³ scaling), equilibrium temperature/Stefan-Boltzmann scaling ('if you double X, what happens to Y'), and Newton's law of gravitation algebra were the most consistent recurring formats.",
    highYield: [
      "Kepler's second law (equal areas in equal time) as a conceptual/graph question",
      "Kepler's third law as a scaling/proportion problem (T² ∝ a³)",
      'Equilibrium temperature and luminosity scaling (Stefan-Boltzmann, inverse-square law)',
      "Newton's law of gravitation — algebraic rearrangement, not numeric plug-in",
      'Tidal force / tidal heating reasoning tied to orbital eccentricity and distance',
    ],
  },
  {
    id: 'pattern-core-concepts',
    title: 'Core Habitability Concepts',
    summary:
      'Underlying nearly every object-specific question was a small set of core habitability concepts the graders expected students to connect back to: the habitable zone and how it shifts with stellar properties, tidal locking and heating, biosignature gas disequilibrium, and CHNOPS/extremophile biochemistry. Strong answers consistently connected an object-specific fact back to one of these general principles rather than stating it in isolation.',
    highYield: [
      'Habitable zone inner/outer edges (runaway greenhouse vs. maximum CO2 greenhouse) and how they shift with stellar luminosity',
      'Tidal locking and tidal heating mechanics',
      'Biosignature gases and chemical disequilibrium (oxygen + methane)',
      'CHNOPS elements, extremophiles, and the Drake Equation / Fermi Paradox',
    ],
  },
]

// ── Predicted Highlands Virtual 2027 test — original content, written fresh,
// matching the observed Highlands format and aligned to the official 2027
// Division B rules (Habitability topic). Image references point to the real,
// appropriately-licensed photos in src/data/imageGallery.js.
export const predictedTest2027 = {
  title: 'Predicted Highlands Virtual Invitational 2027 — Solar System B',
  disclaimer:
    "This is an original practice test written to match the Highlands Virtual format and the official 2027 rules — it is a prediction for practice purposes, not a leaked or real exam.",
  totalPoints: 75,
  timeLimit: '50 minutes',
  sections: [
    {
      id: 'section-a',
      title: 'Section A: Multiple Choice',
      points: 15,
      questions: [
        {
          id: 'pa-1',
          points: 1,
          imageId: 'img-europa',
          prompt: 'What is the primary evidence that this object has a subsurface liquid ocean?',
          options: [
            'A) Direct sampling by a lander',
            "B) Induced magnetic field and surface geology consistent with a global conductive layer",
            'C) A confirmed detection of surface liquid water',
            'D) Radio telescope observation of subsurface radar echoes',
          ],
          answer: 1,
          explanation: "Europa's ocean is inferred from Galileo's induced magnetic field data plus its young, shifting ice shell — not direct sampling.",
        },
        {
          id: 'pa-2',
          points: 1,
          imageId: 'img-europa',
          prompt: 'Which upcoming/current mission is specifically designed to investigate this object further?',
          options: ['A) DAVINCI', 'B) Dragonfly', 'C) Europa Clipper', 'D) JUICE (primary target)'],
          answer: 2,
          explanation: 'Europa Clipper (launched 2024) will conduct dozens of flybys of Europa to characterize its ice shell and ocean.',
        },
        {
          id: 'pa-3',
          points: 1,
          imageId: 'img-enceladus',
          prompt: "What did Cassini detect that suggests hydrothermal activity at this object's seafloor?",
          options: ['A) Pure water vapor only', 'B) Molecular hydrogen', 'C) Free oxygen gas', 'D) Liquid nitrogen'],
          answer: 1,
          explanation: 'Molecular hydrogen in the plumes is a signature byproduct of water-rock reactions (serpentinization) at hydrothermal vents.',
        },
        {
          id: 'pa-4',
          points: 1,
          imageId: 'img-titan',
          prompt: "This object's lakes and seas are filled primarily with:",
          options: ['A) Liquid water', 'B) Liquid methane and ethane', 'C) Liquid ammonia', 'D) Molten sulfur'],
          answer: 1,
          explanation: "Titan's surface is too cold for liquid water, but methane and ethane remain liquid, forming lakes and seas like Kraken Mare.",
        },
        {
          id: 'pa-5',
          points: 1,
          imageId: 'img-ganymede',
          prompt: 'What makes this object unique among all known moons in the solar system?',
          options: [
            'A) It has the thickest atmosphere of any moon',
            'B) It generates its own internal (intrinsic) magnetic field',
            'C) It has confirmed surface liquid water',
            'D) It has active cryovolcanic geysers',
          ],
          answer: 1,
          explanation: "Ganymede is the only moon known to generate its own internal magnetic field, via convection in its liquid iron-rich core.",
        },
        {
          id: 'pa-6',
          points: 1,
          imageId: 'img-venus',
          prompt: "The extreme surface temperature of this planet today is best explained by:",
          options: [
            'A) Its proximity to the Sun alone',
            'B) An extreme greenhouse effect from a dense CO2 atmosphere',
            'C) Ongoing volcanic heating from its core',
            'D) Tidal heating from the Sun',
          ],
          answer: 1,
          explanation: "Venus's ~465°C surface is driven by its dense CO2 atmosphere trapping heat, not by orbital distance alone (Mercury is closer and cooler).",
        },
        {
          id: 'pa-7',
          points: 1,
          imageId: 'img-mars',
          prompt: 'Which geologic feature type provides the strongest evidence that liquid water once flowed on this planet?',
          options: ['A) Volcanic calderas', 'B) Dry riverbeds and ancient river deltas', 'C) Impact craters', 'D) Polar ice caps'],
          answer: 1,
          explanation: 'Dry riverbeds, deltas, and lakebed sediments (e.g., at Jezero Crater) indicate sustained liquid water on ancient Mars.',
        },
        {
          id: 'pa-8',
          points: 1,
          imageId: 'img-bennu',
          prompt: 'Why was this asteroid specifically targeted for a sample-return mission?',
          options: [
            'A) It is the largest known asteroid',
            'B) It is a primitive, carbon-rich body offering a window into early solar system material',
            'C) It has an atmosphere that could be sampled remotely',
            'D) It is the closest asteroid to the Sun',
          ],
          answer: 1,
          explanation: 'Bennu is a carbon-rich (carbonaceous) near-Earth asteroid whose largely unaltered composition preserves early solar system material.',
        },
        {
          id: 'pa-9',
          points: 1,
          imageId: 'img-67p',
          prompt: "Rosetta's measurement of this comet's water D/H ratio primarily supported which conclusion?",
          options: [
            'A) Jupiter-family comets are the dominant source of Earth\'s water',
            "B) Jupiter-family comets are unlikely to be the dominant source of Earth's water",
            'C) This comet contains no water at all',
            'D) Earth\'s water has the same D/H ratio as this comet',
          ],
          answer: 1,
          explanation: "67P's D/H ratio is roughly 3x Earth ocean water's, arguing against Jupiter-family comets as the primary source of Earth's oceans.",
        },
        {
          id: 'pa-10',
          points: 1,
          imageId: 'img-makemake',
          prompt: "Unlike Pluto, this dwarf planet:",
          options: [
            'A) Has a significant, confirmed atmosphere',
            'B) Has no significant confirmed atmosphere',
            'C) Is not round',
            'D) Orbits inside the asteroid belt',
          ],
          answer: 1,
          explanation: 'Despite an icy surface composition similar in theme to Pluto\'s, Makemake has no significant confirmed atmosphere.',
        },
        {
          id: 'pa-11',
          points: 1,
          imageId: 'img-trappist1',
          prompt: 'Why are most or all of the TRAPPIST-1 planets thought to be tidally locked?',
          options: [
            'A) They are unusually massive',
            'B) They orbit extremely close to their small, dim host star',
            'C) The host star has a very strong magnetic field',
            'D) They lack any atmosphere',
          ],
          answer: 1,
          explanation: 'Because TRAPPIST-1 is a small, dim red dwarf, its habitable zone is compressed close in, where tidal forces are strong enough to tidally lock planets.',
        },
        {
          id: 'pa-12',
          points: 1,
          imageId: 'img-kepler452b',
          prompt: "What is the main source of uncertainty about whether this planet is truly rocky?",
          options: [
            'A) Its orbital period cannot be measured',
            'B) Its radius alone cannot distinguish a rocky super-Earth from a gas-enveloped sub-Neptune',
            'C) It has not been detected by any method',
            'D) Its host star type is unknown',
          ],
          answer: 1,
          explanation: 'At ~1.6 Earth radii, Kepler-452b sits near the boundary between rocky super-Earths and gas-rich sub-Neptunes; a mass measurement is needed to resolve this.',
        },
        {
          id: 'pa-13',
          points: 1,
          imageId: 'img-lhs1140b',
          prompt: 'Why is this planet considered a high-priority target for atmospheric characterization?',
          options: [
            'A) It orbits a Sun-like star',
            'B) Its host red dwarf is unusually quiet, with low flare activity',
            'C) It has already been directly imaged',
            'D) It has the shortest orbital period of any known exoplanet',
          ],
          answer: 1,
          explanation: "LHS 1140's low flare activity (compared to stars like Proxima Centauri) makes it more likely the planet has retained an atmosphere.",
        },
        {
          id: 'pa-14',
          points: 1,
          prompt: 'Which exoplanet detection method relies on measuring the periodic dimming of a star as a planet passes in front of it?',
          options: ['A) Radial velocity', 'B) Transit', 'C) Direct imaging', 'D) Astrometry'],
          answer: 1,
          explanation: 'The transit method detects the small periodic brightness dip caused by a planet passing in front of its star.',
        },
        {
          id: 'pa-15',
          points: 1,
          prompt: 'Which of the following pairs of atmospheric gases, found together in stable disequilibrium, is considered a compelling potential biosignature?',
          options: ['A) Nitrogen and argon', 'B) Oxygen and methane', 'C) Carbon dioxide and water vapor', 'D) Helium and hydrogen'],
          answer: 1,
          explanation: 'Oxygen and methane react with each other; their stable coexistence implies an ongoing replenishing source, such as life.',
        },
      ],
    },
    {
      id: 'section-b',
      title: 'Section B: Multiple Choice & Short Answer',
      points: 40,
      questions: [
        {
          id: 'pb-1',
          points: 3,
          imageId: 'img-enceladus',
          type: 'short-answer',
          prompt:
            "This object's south-polar plumes were directly sampled by Cassini. Name two chemical components found in the plumes (besides water and ice) and explain what their presence suggests about conditions at the seafloor.",
          modelAnswer:
            'The plumes contain salts and molecular hydrogen (also organics). Molecular hydrogen is a signature byproduct of serpentinization — a reaction between hot rock and water — suggesting active hydrothermal chemistry at the boundary between the rocky core and the ocean, which could supply both energy and chemical building blocks for life.',
        },
        {
          id: 'pb-2',
          points: 4,
          imageId: 'img-europa',
          type: 'short-answer',
          prompt:
            "Compare the evidence for this object's subsurface ocean to the evidence for Enceladus's ocean. Which is more direct, and why?",
          modelAnswer:
            "Europa's evidence is indirect: an induced magnetic field measured by Galileo, plus a young, fractured surface. Enceladus's evidence is more direct: Cassini flew directly through its plumes and sampled ocean material venting into space. Enceladus therefore has more direct confirmation, while Europa's ocean is inferred rather than directly sampled.",
        },
        {
          id: 'pb-3',
          points: 3,
          imageId: 'img-titan',
          type: 'short-answer',
          prompt:
            'Why is a rotorcraft mission (like Dragonfly) feasible on this object but not on most other icy moons or on Mars?',
          modelAnswer:
            "Titan's atmosphere is thick and dense (denser than Earth's) while its gravity is low, making powered rotor flight far more efficient than on thin-atmosphere Mars or airless, low-gravity bodies like Europa or small asteroids.",
        },
        {
          id: 'pb-4',
          points: 4,
          imageId: 'img-venus',
          type: 'short-answer',
          prompt:
            'Describe the runaway greenhouse hypothesis for how Venus lost its early water, including the role of hydrogen escape.',
          modelAnswer:
            "As Venus warmed, more water evaporated into the atmosphere; because water vapor is a greenhouse gas, this trapped more heat, evaporating still more water in a positive feedback loop until the oceans fully vaporized. Once water vapor reached the upper atmosphere, UV radiation split the molecules apart, and the light hydrogen atoms escaped to space, permanently drying the planet and leaving a CO2-dominated atmosphere.",
        },
        {
          id: 'pb-5',
          points: 3,
          imageId: 'img-mars',
          type: 'short-answer',
          prompt: "Explain why Mars's lack of a global magnetic field is connected to its present-day thin atmosphere.",
          modelAnswer:
            "Without a global magnetic field to deflect it, the solar wind directly interacts with Mars's upper atmosphere, gradually stripping atmospheric particles away over billions of years — a process directly measured today by NASA's MAVEN orbiter.",
        },
        {
          id: 'pb-6',
          points: 4,
          imageId: 'img-bennu',
          type: 'short-answer',
          prompt:
            'What did analysis of the material returned from this asteroid reveal, and why is that significant for questions about the origin of life on Earth?',
          modelAnswer:
            "The returned sample contained hydrated minerals (which only form in the presence of liquid water) and a diverse mix of organic molecules, including amino acids. This supports the idea that small, carbon-rich bodies like Bennu could have delivered water and prebiotic building blocks to the young Earth via impacts.",
        },
        {
          id: 'pb-7',
          points: 4,
          imageId: 'img-67p',
          type: 'short-answer',
          prompt:
            "Rosetta detected glycine and phosphorus near this comet. Explain the significance of this finding, and why it does not contradict the D/H ratio evidence discussed elsewhere on this test.",
          modelAnswer:
            "Glycine (an amino acid) and phosphorus (an essential CHNOPS element) support the idea that comets could deliver prebiotic chemical building blocks to a young planet. This doesn't contradict the D/H ratio finding because that evidence only argues against comets like 67P being the dominant source of Earth's *water* — comets could still have contributed organics and a smaller fraction of water.",
        },
        {
          id: 'pb-8',
          points: 3,
          imageId: 'img-ganymede',
          type: 'short-answer',
          prompt: "How does this object's magnetic field differ from the magnetic signatures detected at Europa and Callisto?",
          modelAnswer:
            "Ganymede's field is self-generated (intrinsic), produced by convection in a liquid, iron-rich metallic core — much like Earth's dynamo. Europa's and Callisto's much weaker fields are only induced, created as Jupiter's rotating magnetic field interacts with electrically conductive salty oceans beneath their surfaces.",
        },
        {
          id: 'pb-9',
          points: 4,
          imageId: 'img-trappist1',
          type: 'short-answer',
          prompt:
            'Which of the seven TRAPPIST-1 planets are generally considered to lie within or near the habitable zone, and what open question is JWST currently trying to answer about them?',
          modelAnswer:
            'Planets d, e, f, and g are generally considered within or near the habitable zone, with TRAPPIST-1e often highlighted as the most promising candidate. JWST is testing whether these tidally locked, close-in planets can retain any atmosphere at all, given their proximity to an active red dwarf star.',
        },
        {
          id: 'pb-10',
          points: 4,
          imageId: 'img-kepler452b',
          type: 'short-answer',
          prompt: 'Contrast Kepler-452b and LHS 1140 b in terms of their host stars and the main open question for each.',
          modelAnswer:
            "Kepler-452b orbits a Sun-like (G-type) star with a near-Earth-length year; its main open question is bulk composition (rocky vs. gas-enveloped), since its ~1.6 Earth radii doesn't resolve this without a mass measurement. LHS 1140 b orbits a red dwarf, where the main open question is usually atmosphere retention against stellar flares — but LHS 1140 is unusually quiet, making LHS 1140 b a comparatively promising target.",
        },
        {
          id: 'pb-11',
          points: 4,
          type: 'short-answer',
          prompt:
            'Explain why both the transit method and the radial velocity method are biased toward detecting large planets in close-in orbits, even though this does not mean such planets are the most common type.',
          modelAnswer:
            'The transit method is biased toward large planets (bigger transit depth, easier to detect) in close orbits (more frequent transits, more likely to be geometrically aligned with Earth). The radial velocity method is biased toward massive planets (bigger stellar wobble) in close orbits (larger, faster gravitational tug, shorter period to confirm). Both methods therefore under-detect small, distant planets, which does not mean such planets are actually rare.',
        },
      ],
    },
    {
      id: 'section-c',
      title: 'Section C: Mathematical Concepts',
      points: 20,
      questions: [
        {
          id: 'pc-1',
          points: 1,
          type: 'multiple-choice',
          prompt: "Kepler's second law of planetary motion states that:",
          options: [
            'A) A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time',
            'B) The orbit of a planet is an ellipse with the Sun at one focus',
            'C) The square of the orbital period is proportional to the cube of the semi-major axis',
            'D) Gravity is a universal force of attraction between any two masses',
          ],
          answer: 0,
        },
        {
          id: 'pc-2',
          points: 4,
          type: 'short-answer',
          prompt:
            'A newly discovered planet orbits its star at 9 AU. Using Kepler\'s third law (assuming a solar-mass star), approximately how many Earth years does one orbit take? Show your reasoning.',
          modelAnswer:
            'T² = a³ → T² = 9³ = 729 → T = √729 = 27 Earth years.',
        },
        {
          id: 'pc-3',
          points: 4,
          type: 'short-answer',
          prompt:
            'Planet X has the same radius as Planet Y, but three times Planet Y\'s surface temperature. Using the Stefan-Boltzmann relationship (L ∝ R²T⁴), how many times more energy does Planet X radiate compared to Planet Y?',
          modelAnswer:
            'Since radius is equal, only the T⁴ term matters: (3)⁴ = 81. Planet X radiates 81 times more energy per unit area than Planet Y.',
        },
        {
          id: 'pc-4',
          points: 3,
          type: 'short-answer',
          prompt:
            'If the distance between two orbiting bodies is tripled while their masses stay the same, how does the gravitational force between them change? (No need to show work.)',
          modelAnswer:
            "The force becomes 1/9 of its original value, since gravitational force follows an inverse-square law (F ∝ 1/r²), and 1/3² = 1/9.",
        },
        {
          id: 'pc-5',
          points: 4,
          type: 'short-answer',
          prompt:
            "A planet transits its star, producing a 0.25% dip in brightness. If the planet's radius is doubled (with the same star), what would the new transit depth be? Show your work.",
          modelAnswer:
            'Transit depth ∝ (Rp/Rs)². Doubling Rp multiplies the depth by 2² = 4. New depth = 0.25% × 4 = 1.0%.',
        },
        {
          id: 'pc-6',
          points: 4,
          type: 'short-answer',
          prompt:
            "Using Newton's law of universal gravitation, write an expression for the orbital distance r between two planets of equal mass m, given a gravitational force F. Use G for the gravitational constant and show your algebra.",
          modelAnswer:
            'F = G·m²/r² → r² = G·m²/F → r = m·√(G/F).',
        },
      ],
    },
  ],
}
