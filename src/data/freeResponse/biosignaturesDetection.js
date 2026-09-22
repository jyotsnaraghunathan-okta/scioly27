export const biosignaturesDetectionFR = [
  {
    id: 'fr-bio-001',
    topic: 'biosignatures-detection',
    subtopic: 'Atmospheric Biosignature Gases',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Explain why the simultaneous presence of oxygen and methane in a planetary atmosphere is considered a strong potential biosignature, and describe one way an oxygen detection alone could be a false positive.',
    modelAnswer:
      "Oxygen and methane are chemically reactive with each other; if both gases are present in an atmosphere in significant, stable quantities, they should react and be depleted within a relatively short time (on the order of years to a few thousand years) unless something is continuously replenishing them. On Earth, this ongoing replenishment comes from life: photosynthetic organisms continuously produce oxygen, while methanogenic microbes and other biological and geological sources continuously produce methane. Finding both gases together in disequilibrium is therefore considered a strong potential biosignature, since it implies an active source is required to maintain their coexistence, and life is one of the most efficient known sources for both gases simultaneously. However, oxygen detected by itself could be a false positive, since it can also accumulate abiotically: ultraviolet radiation can break apart water vapor or carbon dioxide molecules high in a planet's atmosphere (photolysis), and if the resulting light hydrogen atoms escape to space, the heavier oxygen can be left behind and build up over time without any biology involved. Because of this possibility, scientists must consider the broader atmospheric and stellar context, not just a single gas, before concluding that a biosignature has been found.",
    keyPoints: [
      'Oxygen and methane react with each other, so their coexistence requires continuous replenishment',
      'On Earth, this replenishment comes from biological sources on both ends',
      'Oxygen alone can be a false positive via water/CO2 photolysis and hydrogen escape',
      'Broader atmospheric/stellar context is needed to rule out false positives',
    ],
  },
  {
    id: 'fr-bio-002',
    topic: 'biosignatures-detection',
    subtopic: 'Spectroscopy Techniques',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Compare transmission spectroscopy and emission spectroscopy as methods for studying exoplanet atmospheres, including when in a planet's orbit each is used and what each reveals.",
    modelAnswer:
      "Transmission spectroscopy is performed during a planet's transit, when the planet passes directly in front of its host star as seen from Earth. During this time, a small fraction of the star's light passes through the thin atmospheric layer at the planet's edge before reaching telescopes. Because different gases absorb light at specific characteristic wavelengths, comparing the star's spectrum during transit to its spectrum when the planet is not transiting reveals absorption features that identify which gases are present in the planet's atmosphere. Emission spectroscopy, by contrast, is typically performed around secondary eclipse, the point in the orbit when the planet passes behind its star as seen from Earth. By comparing the total brightness of the star-plus-planet system just before the planet disappears behind the star to the star's brightness alone during the eclipse, astronomers can isolate the thermal infrared light being emitted directly by the planet itself. This reveals the planet's dayside temperature and can indicate whether the planet retains a substantial atmosphere at all, since a planet with no atmosphere or a very thin atmosphere would show very different day-night temperature contrasts than one with an atmosphere capable of redistributing heat.",
    keyPoints: [
      'Transmission spectroscopy occurs during transit; reveals atmospheric gas composition',
      'Emission spectroscopy occurs during secondary eclipse; reveals dayside temperature and thermal emission',
      "Both rely on comparing spectra/brightness at different orbital phases",
      'Emission spectroscopy can indicate whether a planet retains an atmosphere at all',
    ],
  },
  {
    id: 'fr-bio-003',
    topic: 'biosignatures-detection',
    subtopic: 'Technosignatures',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question:
      'Define "technosignature" and explain how it differs from a general biosignature. Give one example of a proposed technosignature.',
    modelAnswer:
      "A technosignature is any measurable signal or feature whose most plausible explanation is that it was produced by technology built by an extraterrestrial civilization. This differs from a general biosignature, which is any substance, feature, or pattern that indicates the presence of life of any kind, including simple microbial life with no intelligence or technology involved. In other words, all technosignatures imply the existence of life, but not all biosignatures imply the existence of intelligent, technological life. One example of a proposed technosignature is a narrow-band radio or laser signal detected from a distant star system; because natural astrophysical processes tend to produce broad-spectrum emission rather than a signal concentrated at one very precise frequency, a strong, persistent narrow-band signal would be considered a strong candidate for artificial origin. Another example is the search for excess infrared \"waste heat\" around stars that could indicate a Dyson sphere-like megastructure built to capture stellar energy.",
    keyPoints: [
      'Technosignature: evidence of technology from an intelligent civilization',
      'Biosignature: evidence of life in general, not necessarily intelligent/technological',
      'All technosignatures imply life, but not all biosignatures imply intelligence',
      'Example: narrow-band radio/laser signals, or infrared excess from a hypothetical Dyson sphere',
    ],
  },
  {
    id: 'fr-bio-004',
    topic: 'biosignatures-detection',
    subtopic: 'Surface Feature Imaging & Geologic Activity',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Explain how surface features such as Europa's lineae and lenticulae, and Rosetta's observations of comet 67P, provide evidence for ongoing geologic or physical activity on icy bodies.",
    modelAnswer:
      "On Europa, imaging reveals two characteristic surface features: lineae, long dark ridged streaks that crisscross the icy shell, and lenticulae, smooth dark spots or pits. Both features are best explained if Europa's icy shell is not a single rigid, unmoving crust but instead consists of blocks of ice that 'raft' and shift relative to one another, with lineae forming at the visible boundaries between rafting blocks and lenticulae forming where warmer ice may partially melt through the shell. This kind of active, shifting ice shell is strong indirect evidence that Europa's shell floats atop a liquid subsurface ocean, since a shell frozen solid all the way to a rocky interior would be expected to behave as a single rigid unit rather than shifting in blocks. At comet 67P/Churyumov-Gerasimenko, ESA's Rosetta mission provided direct, extended imaging that revealed dune-like features formed by the deposition of wind-blown dust across the surface, showing that even a small, low-gravity, near-vacuum body can have active surface transport processes. Rosetta's broader dataset also led scientists to reassess how the comet's coma, its temporary gaseous atmosphere, actually forms: rather than being explained by simple, direct sublimation of surface ice alone, the process also appears to involve subsurface pockets of trapped volatile gas being released as the comet's ice structure changes, such as amorphous ice crystallizing, as it approaches the Sun. Together, these two very different icy bodies show how careful surface imaging, combined with other data, allows scientists to infer ongoing physical or geologic processes without needing to sample beneath the surface directly.",
    keyPoints: [
      "Europa's lineae (ridged streaks) and lenticulae (dark spots) suggest a rafting, shifting ice shell",
      'This shifting ice shell behavior is indirect evidence for a subsurface liquid ocean beneath Europa',
      "Rosetta imaged dune-like dust deposition features on comet 67P's surface",
      "Rosetta's data showed coma formation involves trapped subsurface volatiles being released, not just simple surface sublimation",
    ],
  },
]
