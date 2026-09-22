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
  // ───────────────────────────── DYNAMIC PLANET ─────────────────────────────
  {
    id: 'ra-streams-rivers',
    subjectId: 'dynamic-planet',
    title: 'Streams, Rivers & Drainage',
    icon: '🏞️',
    color: 'blue',
    summary: 'Discharge, drainage networks, and the erosional/depositional shaping of stream channels.',
    sections: [
      {
        heading: 'Stream Discharge and Channel Morphology',
        content:
          'Discharge (Q) is the volume of water passing a cross-section per unit time, calculated as Q = A × V, where A is cross-sectional area and V is average velocity. Discharge generally increases downstream as tributaries add water, even as channel gradient decreases. Stream order (Strahler system) classifies channels by tributary hierarchy: two first-order streams join to form a second-order stream, two second-order streams form a third-order stream, and so on — a first-order stream joining a higher-order stream does not increase the order.',
        keyPoints: [
          'Q = A × V — increasing either cross-sectional area or velocity increases discharge',
          'Stream order only increases when two streams of the *same* order merge',
          'Base level (often sea level or a lake) is the lowest point to which a stream can erode',
        ],
      },
      {
        heading: 'Drainage Patterns',
        content:
          'Drainage patterns reflect underlying geology: dendritic (tree-branching) forms on uniform, flat-lying rock; trellis forms where alternating resistant/weak rock layers are folded, producing parallel main channels with right-angle tributaries; radial forms around a central high point like a volcano; and rectangular forms where jointed or faulted bedrock forces right-angle channel bends.',
        keyPoints: [
          'Dendritic is the most common pattern, forming on homogeneous substrate',
          'Trellis patterns are diagnostic of folded sedimentary terrain (e.g., the Appalachian ridge-and-valley province)',
          'Radial patterns commonly point to a volcanic cone or dome',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Computing discharge',
        problem: 'A stream channel has a cross-sectional area of 12 m² and an average flow velocity of 0.8 m/s. What is the discharge?',
        steps: [
          'Use Q = A × V',
          'Q = 12 m² × 0.8 m/s',
        ],
        answer: 'Q = 9.6 m³/s',
      },
    ],
    commonMisconceptions: [
      { misconception: 'A tributary joining a larger river always bumps up the stream order.', reality: 'Stream order only increases when two channels of equal order merge; a lower-order tributary joining a higher-order channel leaves the order unchanged.' },
    ],
  },
  {
    id: 'ra-lakes-ponds',
    subjectId: 'dynamic-planet',
    title: 'Lakes & Ponds',
    icon: '🏔️',
    color: 'purple',
    summary: 'How lakes form, stratify seasonally, and respond to nutrient loading.',
    sections: [
      {
        heading: 'Thermal Stratification and Turnover',
        content:
          'In summer, temperate lakes stratify into three layers: the epilimnion (warm, well-mixed surface layer), the thermocline/metalimnion (a zone of rapid temperature change), and the hypolimnion (cold, dense bottom layer). Because water is densest at 4°C, spring and fall "turnover" events occur when surface water cools (or warms) to match the density of deeper water, allowing wind-driven mixing to homogenize the whole water column — this redistributes oxygen and nutrients throughout the lake.',
        keyPoints: [
          'Water\'s density maximum at 4°C (not 0°C) is why turnover happens near that temperature',
          'Stratification isolates the hypolimnion from atmospheric oxygen exchange, which can lead to summer/winter oxygen depletion',
          'Dimictic lakes turn over twice a year (spring and fall); monomictic lakes only once',
        ],
      },
      {
        heading: 'Trophic States & Eutrophication',
        content:
          'Lakes are classified along a trophic gradient: oligotrophic (low nutrients, high clarity, high dissolved oxygen), mesotrophic (intermediate), and eutrophic (high nutrients, high productivity, prone to algal blooms and oxygen depletion). Eutrophication can be natural (a lake aging over centuries as sediment and nutrients accumulate) or cultural (accelerated by human nutrient inputs like fertilizer runoff and sewage), and often manifests as algal blooms that die, decompose, and consume dissolved oxygen — sometimes causing fish kills.',
        keyPoints: [
          'Phosphorus is typically the limiting nutrient in freshwater systems, making it the key driver of cultural eutrophication',
          'Algal bloom die-off drives oxygen depletion via decomposer respiration, not the algae\'s photosynthesis',
          'Oligotrophic lakes are typically deep and clear; eutrophic lakes are typically shallow, murky, and nutrient-rich',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Eutrophic lakes have too much oxygen because of all the plant/algae growth.', reality: 'While daytime photosynthesis can raise oxygen, decomposition of dead algae at night and after bloom die-off consumes oxygen faster than it\'s replenished, often causing hypoxia.' },
    ],
  },
  {
    id: 'ra-groundwater-aquifers',
    subjectId: 'dynamic-planet',
    title: 'Groundwater & Aquifers',
    icon: '💧',
    color: 'teal',
    summary: 'Porosity, permeability, and the confined/unconfined aquifer systems that store and transmit groundwater.',
    sections: [
      {
        heading: 'Porosity vs. Permeability',
        content:
          'Porosity is the percentage of open, void space in a rock or sediment (how much water it can hold). Permeability is how well-connected those pores are (how easily water can flow through). A material can have high porosity but low permeability if pores are isolated (e.g., clay has high porosity but very low permeability due to tiny, poorly-connected pore spaces), while well-sorted sand or gravel has both high porosity and high permeability, making it an excellent aquifer material.',
        keyPoints: [
          'Clay: high porosity, low permeability (acts as an aquitard, restricting flow)',
          'Well-sorted sand/gravel: high porosity AND high permeability (ideal aquifer material)',
          'Poorly-sorted sediment has lower porosity because smaller grains fill gaps between larger ones',
        ],
      },
      {
        heading: 'Confined vs. Unconfined Aquifers',
        content:
          'An unconfined aquifer has the water table as its upper boundary and is directly recharged by infiltration from above. A confined aquifer is sandwiched between impermeable layers (aquicludes/aquitards) and is under pressure — wells drilled into confined aquifers can become artesian, with water rising above the aquifer top (and sometimes flowing at the surface without pumping) because the pressure surface (potentiometric surface) sits higher than the aquifer itself.',
        keyPoints: [
          'The water table is the upper surface of the saturated zone in an unconfined aquifer',
          'Artesian wells occur when the potentiometric surface of a confined aquifer is above ground level at the well site',
          'Confined aquifers recharge slowly, often far from the point of use, since infiltration must occur where the aquifer outcrops',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'High porosity always means high permeability.', reality: 'Porosity measures storage capacity; permeability measures connectivity/flow. Clay is the classic counterexample: very porous, but nearly impermeable.' },
      { misconception: 'Artesian wells always flow freely at the surface without pumping.', reality: 'They only flow freely if the potentiometric surface is above ground level at the well — many artesian wells still require pumping if the surface is below ground level but above the aquifer top.' },
    ],
  },
  {
    id: 'ra-wetlands',
    subjectId: 'dynamic-planet',
    title: 'Wetlands',
    icon: '🌾',
    color: 'green',
    summary: 'Wetland types, their hydrology, and the ecological services they provide.',
    sections: [
      {
        heading: 'The Four Major Wetland Types',
        content:
          'Marshes are dominated by herbaceous (non-woody) vegetation like grasses and reeds, typically with mineral soil and periodic flooding. Swamps are dominated by woody vegetation (trees/shrubs). Bogs are peat-accumulating wetlands fed primarily by precipitation (ombrotrophic), acidic and nutrient-poor, often dominated by sphagnum moss. Fens are also peat-accumulating but fed by groundwater/surface water (minerotrophic), making them less acidic and more nutrient-rich than bogs, supporting more diverse plant life.',
        keyPoints: [
          'Bog vs. fen hinges on water source: precipitation-fed (bog, acidic, nutrient-poor) vs. groundwater-fed (fen, less acidic, more nutrients)',
          'Marsh = herbaceous plants; swamp = woody plants — the simplest distinguishing rule',
          'All wetlands share three defining criteria: hydrology, hydric soils, and hydrophytic vegetation',
        ],
      },
      {
        heading: 'Ecological Functions',
        content:
          'Wetlands provide flood attenuation (absorbing and slowly releasing floodwaters), water quality improvement (filtering sediment and nutrients, sometimes called "nature\'s kidneys"), groundwater recharge/discharge, carbon storage (especially peat-forming bogs, which sequester carbon for millennia), and critical habitat for waterfowl, amphibians, and fish nurseries.',
        keyPoints: [
          'Wetlands can be net carbon sinks (peat accumulation) or, when drained, become major carbon sources',
          'Nutrient filtering occurs via plant uptake, microbial denitrification, and sediment trapping',
          'Wetland loss increases downstream flood severity because a natural buffer is removed',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Bogs and fens are basically the same thing.', reality: 'The water source differs fundamentally — bogs get water only from precipitation (poor in nutrients, acidic), while fens are fed by mineral-rich groundwater, making them far less acidic and more biodiverse.' },
    ],
  },
  {
    id: 'ra-human-impact-freshwater',
    subjectId: 'dynamic-planet',
    title: 'Human Impact & Water Resources',
    icon: '🏭',
    color: 'amber',
    summary: 'Pollution sources, water management infrastructure, and how a changing climate stresses freshwater systems.',
    sections: [
      {
        heading: 'Point vs. Nonpoint Source Pollution',
        content:
          'Point source pollution comes from a single, identifiable location — a factory discharge pipe or a wastewater treatment outfall — and is regulated in the U.S. under the Clean Water Act\'s NPDES permitting system. Nonpoint source pollution comes from diffuse, widespread sources like agricultural runoff (fertilizers, pesticides), urban stormwater, and atmospheric deposition, making it much harder to regulate and the leading cause of remaining water quality impairment in many watersheds.',
        keyPoints: [
          'Point sources are easier to regulate because they can be traced to a single outfall',
          'Agricultural runoff (nitrogen and phosphorus) is a major nonpoint contributor to downstream eutrophication and hypoxic zones',
          'Urban impervious surfaces increase nonpoint runoff volume and speed, worsening both flooding and pollutant transport',
        ],
      },
      {
        heading: 'Dams, Climate Change, and Conservation',
        content:
          'Dams provide flood control, water storage, and hydropower, but fragment river ecosystems, block fish migration (e.g., salmon), trap sediment (starving downstream deltas), and alter natural flow regimes that many species depend on. Climate change is altering freshwater systems through shifting precipitation patterns, earlier snowmelt (changing the timing of peak streamflow), more frequent extreme droughts and floods, and warming lake/stream temperatures that stress cold-water species. Conservation practices — riparian buffers, no-till agriculture, wetland restoration, and water reuse/efficiency programs — aim to counteract these pressures.',
        keyPoints: [
          'Dam removal is increasingly used to restore fish passage and natural sediment transport in degraded systems',
          'Earlier snowmelt shifts peak river flow earlier in the year, straining water storage timed for summer demand',
          'Riparian buffers (vegetated strips along waterways) reduce nonpoint pollution by filtering runoff before it reaches the channel',
        ],
      },
    ],
    commonMisconceptions: [
      { misconception: 'Nonpoint source pollution is a minor contributor compared to point sources.', reality: 'In most U.S. watersheds today, nonpoint sources (especially agricultural runoff) are the dominant remaining cause of water quality impairment, since point sources have been more heavily regulated since the 1972 Clean Water Act.' },
    ],
  },
]
