export const biosignaturesDetectionDefinitions = [
  {
    id: 'def-bio-001',
    term: 'Biosignature',
    definition:
      "Any substance, feature, or pattern whose presence provides scientific evidence of past or present life, ranging from specific chemical compounds to atmospheric gas combinations to surface patterns.",
    example:
      'Atmospheric oxygen combined with methane is considered a compelling biosignature pair because the two gases react with each other and would not coexist in large amounts without a continuous source, such as life, replenishing them.',
    relatedTerms: ['biosignature gas', 'chemical disequilibrium', 'technosignature'],
    topic: 'biosignatures-detection',
    subtopic: 'Atmospheric Biosignature Gases',
  },
  {
    id: 'def-bio-002',
    term: 'Chemical (Redox) Disequilibrium',
    definition:
      "A state in which an atmosphere contains gases that would normally react with each other and disappear over geologic timescales, but instead persist together, implying an ongoing source (potentially biological) continually replenishing them.",
    example:
      "Earth's atmosphere shows strong disequilibrium because it simultaneously contains abundant oxygen and methane, gases that would otherwise react and be consumed within years without continuous biological production.",
    relatedTerms: ['biosignature', 'oxygen', 'methane'],
    topic: 'biosignatures-detection',
    subtopic: 'Atmospheric Biosignature Gases',
  },
  {
    id: 'def-bio-003',
    term: 'Dimethyl Sulfide (DMS)',
    definition:
      "An organic sulfur compound that, on Earth, is produced almost exclusively by marine phytoplankton and other microbial life, making it a proposed biosignature gas candidate for exoplanet atmospheres, though it can also have non-biological (abiotic) sources.",
    example:
      "A tentative, contested detection of DMS in the atmosphere of the sub-Neptune exoplanet K2-18b using JWST spurred debate, since follow-up analyses questioned the statistical significance and considered abiotic explanations.",
    relatedTerms: ['biosignature gas', 'K2-18b', 'JWST spectroscopy'],
    topic: 'biosignatures-detection',
    subtopic: 'Atmospheric Biosignature Gases',
  },
  {
    id: 'def-bio-004',
    term: 'False Positive Biosignature',
    definition:
      'A chemical or physical signal that resembles a genuine biosignature but is actually produced entirely by non-biological (abiotic) geological, atmospheric, or photochemical processes.',
    example:
      "Oxygen can build up abiotically in some planetary atmospheres through photolysis of water or CO2 followed by hydrogen escape, so oxygen detections alone must be checked against known false-positive scenarios.",
    relatedTerms: ['abiotic oxygen production', 'photolysis', 'context clues'],
    topic: 'biosignatures-detection',
    subtopic: 'Atmospheric Biosignature Gases',
  },
  {
    id: 'def-bio-005',
    term: 'Transmission Spectroscopy',
    definition:
      "A technique that analyzes starlight filtered through an exoplanet's atmosphere during a transit, allowing scientists to identify atmospheric gases based on the specific wavelengths of light they absorb.",
    example:
      "JWST uses transmission spectroscopy to study the atmospheres of transiting exoplanets like K2-18b, identifying absorption features from gases such as methane and carbon dioxide.",
    relatedTerms: ['absorption spectrum', 'transit method', 'JWST'],
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
  },
  {
    id: 'def-bio-006',
    term: 'Absorption Spectrum',
    definition:
      "A spectrum showing dark lines or bands at specific wavelengths where light has been absorbed by particular atoms or molecules, used to identify the chemical composition of a star's or planet's atmosphere.",
    example:
      'Each molecule, such as water vapor or methane, has a unique absorption fingerprint of wavelengths, allowing spectroscopists to identify its presence in a distant atmosphere.',
    relatedTerms: ['transmission spectroscopy', 'spectral fingerprint', 'molecular signature'],
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
  },
  {
    id: 'def-bio-007',
    term: 'Emission Spectroscopy',
    definition:
      "A technique that measures the thermal infrared light emitted directly by a planet (rather than starlight passing through its atmosphere), often used to study a planet's dayside temperature and atmospheric composition, especially when the planet passes behind its star (secondary eclipse).",
    example:
      "JWST has used emission spectroscopy during secondary eclipses to measure the dayside temperature and infer the presence (or absence) of an atmosphere on rocky exoplanets like TRAPPIST-1b.",
    relatedTerms: ['secondary eclipse', 'thermal emission', 'dayside temperature'],
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
  },
  {
    id: 'def-bio-008',
    term: 'Spectral Fingerprint',
    definition:
      'The unique combination and pattern of absorption or emission wavelengths characteristic of a specific molecule, allowing it to be identified even when mixed with other gases.',
    example:
      "Methane and carbon dioxide each have distinct spectral fingerprints in the infrared, allowing JWST to distinguish between the two gases in an exoplanet's atmospheric spectrum.",
    relatedTerms: ['absorption spectrum', 'molecular signature', 'spectroscopy'],
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
  },
  {
    id: 'def-bio-009',
    term: 'Geologic Activity (Astrobiology Context)',
    definition:
      'Ongoing internal processes such as volcanism, tectonics, or cryovolcanism that can indicate a body has an active internal heat source, which is often considered important for maintaining long-term habitability (e.g., recycling nutrients, sustaining a magnetic field, or replenishing subsurface oceans).',
    example:
      "Plumes erupting from Enceladus are direct evidence of ongoing geologic activity connected to its subsurface ocean, distinguishing it from geologically dead bodies like the Moon.",
    relatedTerms: ['cryovolcanism', 'plate tectonics', 'surface feature imaging'],
    topic: 'biosignatures-detection',
    subtopic: 'Surface Feature Imaging & Geologic Activity',
  },
  {
    id: 'def-bio-010',
    term: 'Cryovolcanism',
    definition:
      'Volcanic-like activity on icy bodies in which water, ammonia, or other volatile compounds (rather than molten rock) erupt from below the surface, often as brine or slush, then freeze or evaporate.',
    example:
      "Bright salt deposits from cryovolcanic brine eruptions have been imaged on Ceres's surface in Occator Crater by the Dawn mission.",
    relatedTerms: ['Ceres', 'Occator Crater', 'geologic activity'],
    topic: 'biosignatures-detection',
    subtopic: 'Surface Feature Imaging & Geologic Activity',
  },
  {
    id: 'def-bio-011',
    term: 'Technosignature',
    definition:
      'Any measurable indicator of the past or present existence of technology developed by an extraterrestrial civilization, distinguishing it from a biosignature (which indicates life in general, not necessarily intelligent or technological life).',
    example:
      'A hypothetical detection of industrial pollutant gases, like chlorofluorocarbons, in an exoplanet atmosphere would be considered a technosignature rather than a simple biosignature.',
    relatedTerms: ['SETI', 'Dyson sphere', 'radio SETI'],
    topic: 'biosignatures-detection',
    subtopic: 'Technosignatures',
  },
  {
    id: 'def-bio-012',
    term: 'Dyson Sphere / Dysonian SETI',
    definition:
      'A hypothetical megastructure that a sufficiently advanced civilization might build around its star to capture a large fraction of its energy output; the search for such structures via their expected excess infrared "waste heat" signature is called Dysonian SETI.',
    example:
      'Searches for anomalous infrared excesses around stars, without a natural dust explanation, have been used as one strategy in the search for potential Dyson sphere technosignatures, though none have been confirmed.',
    relatedTerms: ['technosignature', 'infrared excess', 'SETI'],
    topic: 'biosignatures-detection',
    subtopic: 'Technosignatures',
  },
  {
    id: 'def-bio-013',
    term: 'Martian Atmospheric Methane',
    definition:
      "Trace methane (CH4) detected episodically in Mars's atmosphere is considered a potential biosignature candidate because it should be destroyed by sunlight within a few hundred years, so its continued presence implies an active source — either biological or geological — rather than a simple leftover from Mars's ancient past.",
    example:
      "Curiosity's onboard instruments have detected seasonal and localized spikes in Martian atmospheric methane, prompting ongoing debate over whether the source is microbial, geological (such as serpentinization reactions), or some other abiotic process.",
    relatedTerms: ['biosignature', 'chemical disequilibrium', 'Curiosity rover'],
    topic: 'biosignatures-detection',
    subtopic: 'Atmospheric Biosignature Gases',
  },
  {
    id: 'def-bio-014',
    term: "Kirchhoff's Laws of Spectroscopy",
    definition:
      "Three empirical laws describing how spectra form: (1) a hot, dense/opaque object produces a continuous spectrum; (2) a hot, low-density gas viewed against a cooler background produces an emission-line spectrum; (3) a cooler gas in front of a hotter continuous source produces an absorption-line spectrum.",
    example:
      "A planetary atmosphere illuminated by starlight passing through it during a transit is best described by Kirchhoff's third law (cooler foreground gas against a hotter background source), which is the basis of transmission spectroscopy.",
    relatedTerms: ['absorption spectrum', 'emission spectroscopy', 'transmission spectroscopy'],
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
  },
  {
    id: 'def-bio-015',
    term: 'High-Resolution Cross-Correlation Spectroscopy',
    definition:
      "A technique that combines high-resolution spectroscopy with an exoplanet's radial-velocity-derived orbital motion to isolate faint planetary spectral lines from the much brighter spectrum of its host star, by cross-correlating the observed spectrum against template molecular signatures shifted for the planet's changing velocity.",
    example:
      "High-resolution cross-correlation spectroscopy has been used from ground-based telescopes to detect specific molecules in the atmospheres of hot Jupiters, separating the planet's faint signal from the star's overwhelming light.",
    relatedTerms: ['radial velocity method', 'spectral fingerprint', 'transmission spectroscopy'],
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
  },
  {
    id: 'def-bio-016',
    term: 'Lineae and Lenticulae (Europa Surface Features)',
    definition:
      "Two characteristic surface features on Europa: lineae are long, dark ridged streaks crisscrossing the surface, formed as blocks of the icy shell 'raft' and shift, while lenticulae are smooth, dark, dome-like spots or pits thought to form where warmer ice melts partway through the shell; both suggest an actively shifting ice shell, consistent with a subsurface ocean.",
    example:
      "The presence of lineae and lenticulae across Europa's surface, rather than a smooth, static ice sheet, is cited as geological evidence that the icy shell floats and shifts atop a liquid layer below.",
    relatedTerms: ['subsurface ocean', 'ice shell', 'geologic activity'],
    topic: 'biosignatures-detection',
    subtopic: 'Surface Feature Imaging & Geologic Activity',
  },
  {
    id: 'def-bio-017',
    term: 'Cometary Coma Formation (Rosetta Reassessment)',
    definition:
      "ESA's Rosetta mission at comet 67P/Churyumov-Gerasimenko led scientists to reassess how a comet's coma forms, finding the process to be more complex than simple direct sublimation of surface ice: it also involves subsurface pockets of trapped volatile gas being released as the comet's ice structure changes (such as amorphous ice crystallizing) closer to the Sun.",
    example:
      "Rosetta's extended study of 67P revealed dune-like surface features from dust deposition alongside this more complex picture of coma formation, refining decades-old assumptions based on simple sublimation models.",
    relatedTerms: ['comet 67P', 'sublimation', 'volatile ices'],
    topic: 'biosignatures-detection',
    subtopic: 'Surface Feature Imaging & Geologic Activity',
  },
]
