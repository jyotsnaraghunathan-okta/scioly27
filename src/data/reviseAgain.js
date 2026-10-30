// Revise Again — targeted deep-dive study materials, one per topic

export const reviseAgainTopics = [
  // ───────────────────────────── SOLAR SYSTEM ─────────────────────────────
  {
    id: 'ra-habitability-fundamentals',
    subjectId: 'solar-system',
    title: 'Habitability Fundamentals',
    icon: '🌡️',
    color: 'amber',
    summary: 'Habitable zones, energy budgets, and the orbital mechanics that set a world\'s surface conditions.',
    sections: [
      {
        heading: 'The Circumstellar Habitable Zone',
        content:
          'The habitable zone (HZ) is the range of orbital distances from a star where a rocky planet with a suitable atmosphere could sustain liquid water on its surface. The HZ scales with stellar luminosity — brighter/hotter stars push the zone farther out, dimmer/cooler stars (like M dwarfs) pull it in close, where tidal locking becomes a bigger habitability concern.\n\nThe "conservative" HZ (runaway greenhouse inner edge to maximum greenhouse outer edge) is narrower than the "optimistic" HZ, which uses early Venus and early Mars as empirical boundary markers.',
        keyPoints: [
          'HZ inner edge is set by runaway greenhouse; outer edge by CO2 condensation/maximum greenhouse',
          'HZ distance scales roughly with the square root of stellar luminosity',
          'Being in the HZ is necessary but not sufficient for habitability — atmosphere and geology matter too',
        ],
      },
      {
        heading: 'Equilibrium Temperature & Energy Budgets',
        content:
          'Equilibrium temperature is the temperature a planet would have with no atmosphere, balancing absorbed stellar radiation against re-radiated thermal energy. It depends on the star\'s luminosity, orbital distance, and the planet\'s albedo (reflectivity). The actual surface temperature can be much higher than equilibrium temperature if a greenhouse effect is present — this is why Venus\'s surface (~735 K) vastly exceeds its equilibrium temperature.',
        keyPoints: [
          'Higher albedo (more reflective) → lower equilibrium temperature, all else equal',
          'Greenhouse warming adds on top of equilibrium temperature; it does not replace the calculation',
          'Tidal heating (from orbital eccentricity or resonances) can add additional internal energy independent of stellar flux',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Comparing two equilibrium temperatures',
        problem: 'Planet A orbits at 1.5x the distance of Planet B from the same star, and both have identical albedo. Which planet has the higher equilibrium temperature, and roughly by what factor?',
        steps: [
          'Equilibrium temperature scales as T ∝ 1/√d, where d is orbital distance.',
          'Planet B is closer (smaller d), so it intercepts more stellar flux per unit area.',
          'T_A / T_B = √(d_B / d_A) = √(1/1.5) ≈ 0.82',
        ],
        answer: 'Planet B is hotter; Planet A is about 82% of Planet B\'s equilibrium temperature.',
      },
    ],
    commonMisconceptions: [
      { misconception: 'A planet in the habitable zone is automatically habitable.', reality: 'The HZ only describes where liquid water *could* exist given the right atmosphere — Mars is in an optimistic HZ but has too thin an atmosphere to sustain surface liquid water today.' },
      { misconception: 'The habitable zone is the same fixed distance for every star.', reality: 'HZ boundaries scale with stellar luminosity, so it sits much farther out for hot, luminous stars and much closer in for cool, dim M dwarfs.' },
    ],
  },
  {
    id: 'ra-solar-system-habitability',
    subjectId: 'solar-system',
    title: 'Habitability in Our Solar System',
    icon: '🔴',
    color: 'red',
    summary: 'Where in our own solar system life-friendly conditions might exist today or once existed.',
    sections: [
      {
        heading: 'Mars and Venus: Two Divergent Paths',
        content:
          'Mars likely had liquid water on its surface billions of years ago (evidenced by dry riverbeds, deltas, and clay/sulfate minerals), but lost most of its atmosphere due to weak magnetic field protection and low gravity, becoming cold and dry. Venus, similar in size to Earth, underwent a runaway greenhouse — its early oceans may have boiled away, leaving a thick CO2 atmosphere and surface temperatures around 735 K. Both are cautionary tales about the difference between "was habitable" and "is habitable."',
        keyPoints: [
          'Mars: subsurface habitability (briny aquifers, ice) is more plausible today than surface habitability',
          'Venus\'s upper cloud layer (~50-60 km altitude) has more Earth-like temperature/pressure, motivating "cloud habitability" hypotheses',
          'Loss of a global magnetic field is a key factor in Mars\'s atmospheric stripping by the solar wind',
        ],
      },
      {
        heading: 'Icy Moons: Subsurface Oceans',
        content:
          'Europa (Jupiter) and Enceladus (Saturn) both show strong evidence for global subsurface liquid water oceans beneath ice shells, kept liquid by tidal heating from their parent planets\' gravity. Enceladus actively vents water-ice plumes from its south pole, sampled directly by the Cassini spacecraft, which detected organic molecules and hydrogen (a potential energy source for chemosynthetic life). Titan, Saturn\'s largest moon, has surface lakes of liquid methane/ethane and a thick nitrogen atmosphere — an entirely different, non-water-based habitability case.',
        keyPoints: [
          'Tidal heating from orbital eccentricity is the energy source keeping these subsurface oceans liquid despite great distance from the Sun',
          'Enceladus\'s plumes let spacecraft sample ocean chemistry without landing or drilling',
          'Titan is studied for "exotic" habitability using liquid hydrocarbons instead of water as a solvent',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Venus was always uninhabitable.', reality: 'Climate models suggest early Venus may have had a temperate climate and surface liquid water for up to billions of years before a runaway greenhouse took hold.' },
      { misconception: 'Subsurface ocean worlds are confirmed to host life.', reality: 'Europa and Enceladus have the ingredients considered necessary (water, energy, chemistry) but no direct evidence of life has been found — habitability ≠ inhabited.' },
    ],
  },
  {
    id: 'ra-exoplanet-systems',
    subjectId: 'solar-system',
    title: 'Exoplanet Systems',
    icon: '🌍',
    color: 'purple',
    summary: 'Detection methods and the flagship nearby systems used to test habitability ideas beyond our Sun.',
    sections: [
      {
        heading: 'How We Find and Characterize Exoplanets',
        content:
          'The transit method detects the periodic dimming of starlight as a planet crosses in front of its star, giving planet radius and orbital period; it also enables atmospheric transmission spectroscopy. The radial velocity (Doppler) method detects the star\'s wobble caused by a planet\'s gravity, giving a minimum mass. Direct imaging captures light from the planet itself (best for young, large, widely-separated planets). Combining transit + radial velocity gives both radius and mass, letting scientists compute density and infer bulk composition (rocky vs. gaseous).',
        keyPoints: [
          'Transit depth ∝ (planet radius / star radius)²',
          'Radial velocity gives only a minimum mass unless the orbital inclination is independently known',
          'Density from combined methods distinguishes rocky super-Earths from gas-rich mini-Neptunes',
        ],
      },
      {
        heading: 'Key Systems: TRAPPIST-1, Kepler-186, TOI-700, Proxima Centauri',
        content:
          'TRAPPIST-1 is an ultra-cool red dwarf with seven roughly Earth-sized planets in tight orbits, three to four of which fall within its habitable zone; its compact scale makes it a prime target for atmospheric studies with JWST. Kepler-186f was the first Earth-sized planet found in another star\'s habitable zone. TOI-700 d and e are Earth-sized planets in the habitable zone of a nearby M dwarf found by TESS. Proxima Centauri b orbits the nearest star to the Sun, but faces intense stellar flares that could strip its atmosphere.',
        keyPoints: [
          'M dwarf habitable zones sit very close in, raising tidal locking and flare-exposure concerns',
          'TRAPPIST-1\'s tightly packed system allows planet-planet transit timing variations to refine masses',
          'Proximity to Earth (Proxima b) makes future direct imaging/spectroscopy more feasible than for farther systems',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Transit method gives a planet\'s mass directly.', reality: 'Transit gives radius (from dimming amount) and period; mass typically requires radial velocity or transit-timing-variation follow-up.' },
      { misconception: 'All TRAPPIST-1 planets are habitable.', reality: 'Only a subset (typically cited as e, f, and sometimes d/g) fall within the habitable zone; others are too hot or too cold.' },
    ],
  },
  {
    id: 'ra-biosignatures-detection',
    subjectId: 'solar-system',
    title: 'Biosignatures & Detection',
    icon: '🔬',
    color: 'green',
    summary: 'The chemical and physical clues scientists look for as evidence of life, and how they\'re measured.',
    sections: [
      {
        heading: 'Atmospheric Biosignature Gases',
        content:
          'A biosignature gas is one whose presence (especially in disequilibrium combinations) is best explained by biological activity. Classic examples: oxygen (O2) alongside methane (CH4) — the two react and destroy each other quickly, so finding both together suggests ongoing replenishment, plausibly by life. Other candidate biosignatures include dimethyl sulfide, nitrous oxide, and (more speculatively) phosphine. Context matters enormously — false positives can arise from abiotic photochemistry, so biosignature claims require ruling out non-biological sources.',
        keyPoints: [
          'Chemical disequilibrium (gases that should react away but persist together) is a stronger signal than any single gas alone',
          'Context (host star type, planet\'s geologic activity, UV environment) changes what counts as a plausible biosignature',
          'False positives from abiotic chemistry are a major challenge in biosignature science',
        ],
      },
      {
        heading: 'Spectroscopy and Surface Imaging',
        content:
          'Transmission spectroscopy analyzes starlight filtered through a transiting planet\'s atmosphere during transit, revealing absorption features from specific molecules. Emission spectroscopy captures the planet\'s own thermal glow, useful for temperature and composition on the day side. Surface feature imaging (radar, visible, or infrared) can reveal geologic activity like plumes, volcanism, or resurfacing, which hints at internal energy sources that could support subsurface habitability.',
        keyPoints: [
          'Transmission spectroscopy works best for planets transiting small, bright host stars (favors M dwarf systems)',
          'JWST\'s infrared sensitivity is well-suited to detecting CO2, H2O, and CH4 features',
          'Surface imaging of icy moons (e.g., plume detection) is a form of "in situ" biosignature-adjacent evidence',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Detecting oxygen in an exoplanet atmosphere proves life.', reality: 'Oxygen can build up abiotically (e.g., via photolysis of water/CO2 on planets that lost their oceans), so it must be considered alongside other gases and context, not in isolation.' },
    ],
  },
  {
    id: 'ra-missions-instruments',
    subjectId: 'solar-system',
    title: 'Missions & Instruments',
    icon: '🛰️',
    color: 'blue',
    summary: 'The spacecraft and telescopes generating the habitability data tested in this event.',
    sections: [
      {
        heading: 'Mars and Outer Planet Missions',
        content:
          'Mars surface exploration has progressed from Spirit and Opportunity (2004, discovered evidence of past water via mineralogy) to Phoenix (2008, sampled polar ice) to Curiosity (2012, found organic molecules and a habitable ancient lake environment in Gale Crater) to Perseverance with its Ingenuity helicopter (2021, caching samples for future return, first powered flight on another planet). In the outer solar system, Galileo (Jupiter, 1995-2003) first revealed strong evidence for Europa\'s subsurface ocean; Cassini (Saturn, 2004-2017) discovered Enceladus\'s plumes; Europa Clipper (launched 2024) will conduct detailed flybys of Europa; Dragonfly (launching later this decade) is a rotorcraft mission to Titan.',
        keyPoints: [
          'Curiosity uses SAM (Sample Analysis at Mars) to detect organic molecules and seasonal methane variations',
          'Cassini\'s discovery of Enceladus plumes came from direct flythrough sampling, not remote sensing alone',
          'Europa Clipper does not land — it performs repeated close flybys to map the ice shell and subsurface ocean',
        ],
      },
      {
        heading: 'Small Body Missions & Space Telescopes',
        content:
          'OSIRIS-REx returned a sample from asteroid Bennu; Rosetta orbited and landed (via the Philae lander) on comet 67P, detecting organic molecules; DAVINCI+ and VERITAS are upcoming/recent missions to Venus studying its atmosphere and surface geology respectively. On the telescope side, Kepler (retired 2018) and TESS (ongoing) are dedicated exoplanet-hunting transit surveys; Spitzer (retired 2020) contributed key infrared characterization (including TRAPPIST-1 system confirmation); JWST provides the current best atmospheric spectroscopy capability for transiting exoplanets.',
        keyPoints: [
          'Kepler stared at one patch of sky continuously; TESS instead surveys nearly the whole sky in sectors',
          'DAVINCI+ will descend through Venus\'s atmosphere measuring composition; VERITAS will map surface geology from orbit',
          'JWST\'s NIRSpec and MIRI instruments are the workhorses for exoplanet atmospheric composition studies',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Curiosity found direct evidence of life on Mars.', reality: 'Curiosity found organic molecules and habitability indicators (a past lake, key elements, an energy gradient), but no direct evidence of life itself.' },
    ],
  },
  // ───────────────────────────── DYNAMIC PLANET (cleared — to be rebuilt) ─────────────────────────────
]
