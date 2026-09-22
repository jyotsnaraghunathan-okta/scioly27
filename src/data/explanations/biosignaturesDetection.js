export const biosignaturesDetectionExplanations = [
  {
    id: 'exp-bio-atmospheric-biosignatures',
    topic: 'biosignatures-detection',
    subtopic: 'atmospheric-biosignatures',
    title: 'Atmospheric Biosignature Gases',
    sections: [
      {
        heading: 'What makes a gas a good biosignature candidate?',
        content:
          "A biosignature is any substance, feature, or pattern that provides evidence of life. Certain atmospheric gases are considered strong biosignature candidates when they are produced predominantly, or much more efficiently, by biological processes than by any known non-biological (abiotic) pathway, and especially when their sustained presence requires ongoing replenishment. Oxygen is a classic example: on Earth, it is overwhelmingly the product of photosynthesis, and without continuous biological production it would react with rocks, iron, and other reduced surface materials over relatively short geologic timescales. The combination of oxygen and methane together is considered a particularly compelling signal because these two gases actively react with each other in the atmosphere; if both are found in large, stable quantities, an ongoing source is needed to replace what is being lost, and on Earth that source is life on both ends (photosynthesis for oxygen, methanogenic microbes and other biological/geological processes for methane).",
        keyPoints: [
          "A biosignature gas is compelling when it is efficiently produced by life and not easily explained abiotically.",
          "Oxygen + methane coexistence (chemical disequilibrium) is a hallmark biosignature pattern on Earth.",
          "Sustained presence of reactive gas pairs implies an active replenishing source.",
        ],
      },
      {
        heading: 'False positives and the DMS controversy at K2-18b',
        content:
          "A central challenge in biosignature science is ruling out false positives — signals that resemble evidence of life but actually arise from abiotic chemistry or geology. For example, oxygen can build up abiotically on some planets through the photolysis (light-driven splitting) of water or CO2 in the upper atmosphere, followed by preferential escape of lighter hydrogen to space, leaving oxygen behind without any biology involved. This means that context — the star type, other atmospheric gases present, and overall planetary environment — must always be considered alongside any single gas detection.\n\nA prominent recent example of this challenge is the sub-Neptune exoplanet K2-18b, where JWST observations reported tentative evidence for dimethyl sulfide (DMS), a compound produced almost exclusively by marine microbial life on Earth. However, independent reanalyses of the same data have produced conflicting results: some found the statistical significance of the detection to be low, while questions have also been raised about whether similar spectral signals could come from abiotic chemistry (DMS has, for instance, also been detected in a comet, an entirely non-biological source). As of the most recent published reanalyses, the scientific community does not consider the K2-18b DMS claim confirmed, and it remains an active area of debate and follow-up observation.",
        keyPoints: [
          'A false positive biosignature mimics evidence of life but arises from abiotic processes.',
          'Oxygen can form abiotically via water/CO2 photolysis and hydrogen escape on some planets.',
          "K2-18b's tentative DMS detection remains scientifically contested and unconfirmed after independent reanalysis.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Detecting oxygen in an exoplanet atmosphere is definitive proof of life.',
        reality:
          'Oxygen can also accumulate through abiotic processes such as water photolysis followed by hydrogen escape, so scientists must rule out these false-positive scenarios using the broader atmospheric and stellar context before claiming a biosignature detection.',
      },
      {
        misconception: 'The DMS detection at K2-18b confirmed the presence of life.',
        reality:
          "The DMS signal was only a tentative, low-to-moderate confidence detection, and independent reanalyses have disputed its statistical significance and raised possible non-biological explanations. It has not been confirmed as a biosignature.",
      },
    ],
  },
  {
    id: 'exp-bio-spectroscopy',
    topic: 'biosignatures-detection',
    subtopic: 'spectroscopy',
    title: 'Spectroscopy Techniques for Atmospheric Detection',
    sections: [
      {
        heading: 'Transmission spectroscopy',
        content:
          "When an exoplanet transits its star, a small portion of the star's light passes through the thin ring of the planet's atmosphere at its edge (the terminator region) before reaching our telescopes. Different atmospheric gases absorb light at very specific wavelengths, so by comparing the star's spectrum during transit to its spectrum outside of transit, scientists can identify dips at wavelengths corresponding to particular molecules, such as water vapor, methane, or carbon dioxide. This technique, called transmission spectroscopy, is one of the primary tools used by JWST to characterize exoplanet atmospheres, including habitability-relevant worlds like K2-18b and the TRAPPIST-1 planets.",
        keyPoints: [
          "Transmission spectroscopy analyzes starlight passing through a planet's atmosphere during transit.",
          'Different molecules absorb light at characteristic wavelengths (spectral fingerprints).',
          'JWST uses this technique extensively for exoplanet atmosphere characterization.',
        ],
      },
      {
        heading: 'Emission spectroscopy and secondary eclipses',
        content:
          "Emission spectroscopy instead measures the thermal infrared light emitted directly by the planet itself. This is typically done around a secondary eclipse, the point in the orbit when the planet passes behind its star as seen from Earth. By comparing the combined brightness of the star-plus-planet system just before eclipse to the star's brightness alone during eclipse (when the planet is blocked), astronomers can isolate the planet's own thermal emission. This reveals the planet's dayside temperature and, in some cases, whether it retains any atmosphere at all — a critical habitability question for close-in rocky planets like those in the TRAPPIST-1 system, where JWST observations of secondary eclipses have found some inner planets show temperatures consistent with having little to no atmosphere.",
        keyPoints: [
          'Emission spectroscopy measures thermal light emitted directly by the planet.',
          'It is typically measured during secondary eclipse (planet passes behind the star).',
          "It reveals dayside temperature and can indicate whether a planet retains a substantial atmosphere.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Transmission and emission spectroscopy measure the same thing.',
        reality:
          "Transmission spectroscopy analyzes starlight filtered through the atmosphere during a transit (measuring atmospheric composition at the terminator), while emission spectroscopy measures the planet's own directly emitted thermal light, typically during secondary eclipse (revealing dayside temperature and atmospheric presence).",
      },
    ],
  },
  {
    id: 'exp-bio-technosignatures',
    topic: 'biosignatures-detection',
    subtopic: 'technosignatures',
    title: 'Technosignatures and the Search for Intelligent Life',
    sections: [
      {
        heading: 'What counts as a technosignature?',
        content:
          "A technosignature is any measurable signal whose most plausible explanation is that it was produced by technology built by an extraterrestrial civilization, distinguishing it from a general biosignature, which could indicate simple microbial life without any intelligence or technology involved. Classic technosignature searches (radio SETI) look for narrow-band radio or laser signals that would be very unlikely to occur naturally, since natural astrophysical processes tend to produce broad-spectrum emission rather than a signal concentrated at a single precise frequency. More recently, the field has expanded to consider a wider range of possible technosignatures, including atmospheric industrial pollutants (such as chlorofluorocarbon-like gases that have no significant natural source), city lights detectable on a planet's nightside, and even physical artifacts that might exist within our own solar system.",
        keyPoints: [
          'A technosignature specifically implies technology from an intelligent civilization, unlike a general biosignature.',
          'Classic SETI searches for narrow-band radio or laser signals unlikely to arise naturally.',
          'Modern technosignature searches also consider atmospheric pollutants, artificial lighting, and megastructures.',
        ],
      },
      {
        heading: 'Dysonian SETI and megastructures',
        content:
          "One creative technosignature search strategy, called Dysonian SETI, looks for evidence of hypothetical megastructures such as a Dyson sphere — a structure a highly advanced civilization might build to capture a large fraction of its star's energy output. Because such a structure would absorb starlight and re-radiate the energy as infrared heat, astronomers have searched for stars showing an unusual excess of infrared emission that cannot be explained by natural phenomena like circumstellar dust. To date, no confirmed Dyson sphere candidates have been found; all detected infrared excess signals investigated so far have been consistent with natural astrophysical explanations, such as dust disks or background object contamination.",
        keyPoints: [
          'Dysonian SETI searches for anomalous infrared "waste heat" excess around stars.',
          'A Dyson sphere is a hypothetical star-enclosing megastructure for energy capture.',
          'No confirmed Dyson sphere or megastructure technosignature has been found to date; candidates examined so far have natural explanations.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Every biosignature search is also a search for intelligent life.',
        reality:
          'Most astrobiology biosignature research (e.g., searching for oxygen or methane in exoplanet atmospheres) targets any form of life, including simple microbes, and is distinct from technosignature searches, which specifically look for evidence of technology and intelligence.',
      },
      {
        misconception: 'A confirmed Dyson sphere or alien megastructure has been discovered around a star.',
        reality:
          'No confirmed technosignature of this kind has been found. Some stars with unusual infrared or brightness signals (such as "Tabby\'s Star") attracted speculative interest but were ultimately found to have natural explanations upon further study.',
      },
    ],
  },
  {
    id: 'exp-bio-surface-feature-imaging',
    topic: 'biosignatures-detection',
    subtopic: 'surface-feature-imaging',
    title: 'Surface Feature Imaging and Geologic Activity',
    sections: [
      {
        heading: 'Reading surface features as clues to internal activity',
        content:
          "Because most icy moons and small bodies cannot be sampled directly, scientists rely heavily on imaging surface features to infer what is happening beneath the surface. On Europa, long dark ridged streaks called lineae and smooth dark spots or pits called lenticulae crisscross the icy shell; both are best explained if the shell is made of shifting, 'rafting' ice blocks floating atop a liquid layer, rather than a single rigid, unmoving crust, supporting the case for a subsurface ocean. On Ceres, bright salt deposits in Occator Crater are evidence of cryovolcanism, in which brine (rather than molten rock) erupts from a subsurface reservoir and evaporates, leaving salts behind. On Enceladus, active geysers erupting from 'tiger stripe' fractures near the south pole, directly observed by Cassini, are among the most direct imaging evidence anywhere in the solar system for ongoing geologic activity connected to a subsurface ocean. Alongside Io, Enceladus is one of only a few moons confirmed to be currently geologically active, distinguishing these bodies from geologically 'dead' worlds like Earth's Moon.",
        keyPoints: [
          "Europa's lineae and lenticulae suggest a shifting, rafting ice shell atop a subsurface ocean.",
          "Ceres's Occator Crater salt deposits are evidence of cryovolcanic brine eruptions.",
          'Enceladus and Io are among the few moons confirmed to be currently geologically active.',
        ],
      },
      {
        heading: "Cometary surface processes: Rosetta's reassessment of 67P",
        content:
          "ESA's Rosetta mission provided an unusually detailed, extended look at the surface and activity of a comet, 67P/Churyumov-Gerasimenko. Imaging revealed dune-like features formed by dust deposition across the comet's surface, evidence of active surface transport processes even in a near-vacuum, low-gravity environment. Rosetta's data also led scientists to reassess how a comet's coma (its temporary, diffuse atmosphere) forms: rather than being explained by simple, direct sublimation of surface ice alone, coma formation appears to also involve subsurface pockets of trapped volatile gas that are released as the comet's ice structure changes (for example, as amorphous ice crystallizes) when the comet approaches the Sun. Rosetta also found that 67P has a notably low density, consistent with a loosely packed, highly porous 'rubble pile'-like interior rather than a solid, coherent body — a structural clue about how comets originally accreted in the early solar system.",
        keyPoints: [
          '67P shows dune-like surface features from dust deposition.',
          'Rosetta showed coma formation is more complex than simple sublimation, involving trapped subsurface volatiles.',
          "67P's low, porous density suggests a loosely packed 'rubble pile' internal structure.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Surface imaging alone can confirm subsurface liquid water.',
        reality:
          'Surface features like lineae, lenticulae, and cryovolcanic deposits are suggestive evidence, but confirming a subsurface ocean typically requires combining imaging with other data, such as gravity and magnetic field measurements.',
      },
      {
        misconception: 'A geologically active body must have Earth-like volcanism (molten rock).',
        reality:
          'Geologic activity also includes cryovolcanism (eruptions of water/ammonia/other volatiles rather than molten rock), as seen at Ceres, and plume activity connected to a subsurface ocean, as seen at Enceladus.',
      },
    ],
  },
]
