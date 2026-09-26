export const solarSystemHabitabilityExplanations = [
  {
    id: 'exp-ssh-mars-habitability',
    topic: 'solar-system-habitability',
    subtopic: 'mars-habitability',
    title: 'Mars: Past and Present Habitability',
    sections: [
      {
        heading: 'Evidence for a wetter, warmer early Mars',
        content:
          "Orbital imagery and rover exploration have revealed extensive geological evidence that liquid water once flowed and pooled on the Martian surface, including dry river valley networks, deltas, and lakebed sediments. Minerals such as clays (phyllosilicates) and certain sulfates found by rovers only form in the presence of liquid water over sustained periods, reinforcing the idea that early Mars, roughly 3.5-4 billion years ago, had a thicker atmosphere and a more active hydrological cycle.\n\nJezero Crater, the landing site of NASA's Perseverance rover, preserves a particularly well-defined ancient river delta, making it an ideal location to search for biosignatures that might have been preserved in fine-grained lakebed sediments deposited when the crater held a lake.",
        keyPoints: [
          'Riverbeds, deltas, and lakebeds indicate sustained liquid water on ancient Mars.',
          'Clay and sulfate minerals require liquid water to form.',
          'Jezero Crater (Perseverance landing site) preserves an ancient river delta.',
        ],
      },
      {
        heading: 'Why Mars lost its habitability',
        content:
          "Mars lacks a global magnetic field today, unlike Earth. Without this protective magnetosphere, the solar wind directly interacts with the upper atmosphere, gradually stripping away atmospheric particles over billions of years. NASA's MAVEN (Mars Atmosphere and Volatile Evolution) orbiter has directly measured this ongoing atmospheric escape, helping to confirm that Mars's atmosphere thinned dramatically over time. As atmospheric pressure dropped, surface liquid water became unstable, boiling away or freezing, and the greenhouse warming that once kept Mars temperate was lost.",
        keyPoints: [
          "Mars's lack of a global magnetic field allows the solar wind to erode its atmosphere.",
          'MAVEN directly measures present-day atmospheric loss processes.',
          'Atmospheric thinning caused surface liquid water to become unstable, contributing to the cold, dry Mars seen today.',
        ],
      },
      {
        heading: 'Present-day habitability questions',
        content:
          "Present-day Mars is extremely cold and dry at the surface, with very low atmospheric pressure that makes stable liquid water on the surface essentially impossible except perhaps as transient brines. Dark streaks called recurring slope lineae (RSL) were once hypothesized to indicate seeping salty water, but more recent research favors a dry granular flow explanation instead. Most current astrobiology efforts focus on searching for preserved biosignatures from the ancient, habitable past rather than looking for present-day surface life, though the possibility of subsurface microbial refuges remains an open research question.",
        keyPoints: [
          'Modern Mars surface conditions make stable liquid water essentially impossible.',
          'Recurring slope lineae are now generally attributed to dry granular flows, not liquid brine seeps.',
          'Current astrobiology focuses on searching for ancient, preserved biosignatures.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Mars currently has rivers or lakes of liquid water on its surface.',
        reality:
          "Present-day Mars is far too cold and its atmosphere far too thin for stable liquid water on the surface. Evidence for water is either ancient (billions of years old) or limited to small amounts of ice and possibly transient subsurface brines.",
      },
    ],
  },
  {
    id: 'exp-ssh-venus-habitability',
    topic: 'solar-system-habitability',
    subtopic: 'venus-habitability',
    title: 'Venus: Runaway Greenhouse and Cloud Habitability',
    sections: [
      {
        heading: "Venus's runaway greenhouse past",
        content:
          "Venus is similar to Earth in size and bulk composition, sometimes called Earth's \"twin,\" yet its surface today is scorchingly hot (around 465°C) and crushed under about 92 times Earth's atmospheric pressure, all beneath a dense CO2 atmosphere and global sulfuric acid cloud layer. The leading explanation is that Venus, orbiting closer to the Sun and receiving more sunlight, underwent a runaway greenhouse effect early in its history: as temperatures rose, more water evaporated, trapping more heat, until any early oceans were entirely vaporized. Once water vapor reached the upper atmosphere, ultraviolet sunlight split the molecules apart and the light hydrogen atoms escaped to space, permanently drying out the planet and leaving CO2 as the dominant atmospheric constituent.",
        keyPoints: [
          "Venus is similar in size to Earth but has drastically different surface conditions today.",
          'A runaway greenhouse effect likely vaporized early surface water.',
          'Hydrogen loss to space after water vapor breakdown left Venus permanently dry.',
        ],
      },
      {
        heading: 'The cloud-layer habitability hypothesis',
        content:
          "While the surface of Venus is completely inhospitable, its atmosphere at an altitude of roughly 48 to 60 km has temperatures and pressures that are, notably, closer to conditions found in Earth's lower atmosphere. This has led some scientists to speculate whether hardy, acid-tolerant microorganisms could theoretically survive suspended within the sulfuric acid cloud droplets there, though this remains a highly speculative hypothesis with no confirmed biological evidence.\n\nInterest in this hypothesis was renewed by a 2020 report of a possible phosphine gas signature in the Venusian clouds, since phosphine can be produced by anaerobic microbial metabolism on Earth. However, subsequent re-analyses of the data have raised significant doubts about the strength and interpretation of the original detection, and possible abiotic (non-biological) sources of phosphine-like signals have also been proposed. The question remains actively debated and unresolved.",
        keyPoints: [
          "The Venusian cloud layer (~48-60 km) has more moderate temperature/pressure than the surface.",
          'A disputed 2020 phosphine detection renewed speculative interest in cloud-layer habitability.',
          'The cloud habitability hypothesis remains speculative and scientifically contested.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: "Phosphine on Venus has been confirmed as a sign of life.",
        reality:
          "The original 2020 phosphine detection has been disputed by follow-up analyses, and even if phosphine is present, non-biological (abiotic) chemical or geological processes could potentially explain it. It is not confirmed evidence of life.",
      },
      {
        misconception: 'Venus never had water or was always as hostile as it is today.',
        reality:
          'Isotopic evidence (an enhanced deuterium-to-hydrogen ratio in the Venusian atmosphere) suggests Venus once had substantial water that was subsequently lost to space, consistent with a past runaway greenhouse.',
      },
    ],
  },
  {
    id: 'exp-ssh-europa',
    topic: 'solar-system-habitability',
    subtopic: 'europa',
    title: 'Europa: Subsurface Ocean and Ice Shell',
    sections: [
      {
        heading: 'Evidence for a global subsurface ocean',
        content:
          "Europa, one of Jupiter's four Galilean moons, is an ice-covered world slightly smaller than Earth's Moon. The strongest evidence for a global subsurface ocean beneath its icy shell comes from the Galileo spacecraft's magnetometer, which measured a magnetic field response induced by Jupiter's own rotating field interacting with a layer of electrically conductive material — most plausibly a global layer of salty liquid water — beneath the ice. Europa's surface reinforces this picture: it is one of the smoothest, least-cratered surfaces in the solar system, indicating that the icy shell is geologically young and actively resurfaced rather than an ancient, static crust.",
        keyPoints: [
          "Galileo's induced magnetic field is the primary evidence for Europa's subsurface ocean.",
          "Europa's smooth, lightly-cratered surface indicates active, ongoing resurfacing.",
          'Europa is one of four Galilean moons, alongside Io, Ganymede, and Callisto.',
        ],
      },
      {
        heading: 'Surface features and ice shell dynamics',
        content:
          "Long dark ridged streaks called lineae and smooth dark spots or pits called lenticulae crisscross Europa's icy shell. Both features are best explained if the shell consists of individual blocks of ice that 'raft' and shift atop a liquid layer, rather than behaving as a single rigid, unmoving crust — direct visual support for the ocean inferred from Galileo's magnetic data. This mobile ice shell also raises the possibility that surface material, including oxidants produced by radiation striking the ice, could be exchanged with the ocean below, a process astrobiologists consider important for supplying chemical energy to any subsurface biology.",
        keyPoints: [
          "Lineae (ridges) and lenticulae (pits/domes) suggest a shifting, 'rafting' ice shell.",
          'Ice shell mobility could allow exchange of surface-produced chemistry with the ocean below.',
          'Europa Clipper (launched 2024, arriving ~2030) will map ice shell thickness and search for these connections directly.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: "Europa's ocean has been directly sampled and confirmed to host life.",
        reality:
          "Europa's ocean is inferred from indirect evidence (induced magnetic field, surface geology). No life has been detected, and Europa Clipper is designed to characterize habitability, not to search directly for present-day life.",
      },
      {
        misconception: 'Europa is warmed primarily by sunlight, like Earth.',
        reality:
          "Europa orbits far from the Sun and receives very little sunlight. Its ocean is kept liquid mainly by tidal heating generated by gravitational interactions with Jupiter and neighboring moons.",
      },
    ],
  },
  {
    id: 'exp-ssh-enceladus',
    topic: 'solar-system-habitability',
    subtopic: 'enceladus',
    title: 'Enceladus: Plumes and Hydrothermal Chemistry',
    sections: [
      {
        heading: "Cassini's discovery of active plumes",
        content:
          "Enceladus, a small icy moon of Saturn, was a surprise astrobiological target: despite its modest size (about 500 km across), Cassini discovered towering geysers of water vapor and ice grains erupting from a set of parallel fractures nicknamed 'tiger stripes' near its south pole. Unlike Europa, where the ocean is only inferred indirectly, Cassini repeatedly flew directly through Enceladus's plumes, directly sampling ocean material venting into space — among the most direct evidence anywhere in the solar system for a subsurface ocean feeding surface activity.",
        keyPoints: [
          'Enceladus vents plumes of water vapor and ice from south-polar \'tiger stripe\' fractures.',
          'Cassini flew directly through the plumes, directly sampling ocean material.',
          'This makes Enceladus one of the only ocean worlds whose interior chemistry has been sampled without landing.',
        ],
      },
      {
        heading: 'Ocean chemistry and the hydrothermal vent hypothesis',
        content:
          "Cassini's plume samples contained not just water vapor and ice grains but also salts, organic molecules, and molecular hydrogen. Molecular hydrogen is considered a signature byproduct of serpentinization, a chemical reaction between hot rock and water that occurs at Earth's seafloor hydrothermal vents and can supply chemical energy directly to microbial ecosystems that do not rely on sunlight. Tiny silica grains detected in Saturn's E-ring, which is fed by the plumes, further suggest these reactions occur at temperatures around 90°C or higher, consistent with active hydrothermal systems at the interface between Enceladus's rocky core and its ocean.",
        keyPoints: [
          'Molecular hydrogen and silica nanograins point to hydrothermal (water-rock) chemistry at ~90°C or higher.',
          'Serpentinization on Earth supports chemosynthetic ecosystems independent of sunlight.',
          'Enceladus is considered one of the most promising ocean worlds for astrobiology because both energy and chemical building blocks appear to be present.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Enceladus is too small to have any geologic activity.',
        reality:
          "Despite its small size (~500 km diameter), tidal heating from Saturn keeps Enceladus's interior active, driving the plumes.",
      },
      {
        misconception: 'The plumes are just water vapor, so they tell us little about the ocean.',
        reality:
          'The plumes also carry salts, organics, and molecular hydrogen, providing direct chemical evidence about ocean composition and potential energy sources.',
      },
    ],
  },
  {
    id: 'exp-ssh-titan',
    topic: 'solar-system-habitability',
    subtopic: 'titan',
    title: 'Titan: Hydrocarbon Lakes and Prebiotic Chemistry',
    sections: [
      {
        heading: 'A methane world',
        content:
          "Titan, Saturn's largest moon, is the only body in the solar system besides Earth known to have stable liquid on its surface today. Because Titan's surface temperature is extremely cold (around -179°C), water ice is as hard as rock there, but methane and ethane remain liquid, forming lakes and seas such as Kraken Mare, Titan's largest known sea. The Cassini-Huygens mission, including the Huygens probe that landed on Titan's surface in 2005, mapped these hydrocarbon lakes and revealed a methane-based hydrological cycle: methane evaporates, forms clouds, and rains back down, carving river channels and filling lakes in a way that parallels Earth's water cycle.",
        keyPoints: [
          "Titan is the only known body besides Earth with stable surface liquid (lakes/seas).",
          "Titan's lakes and seas are made of liquid methane and ethane, not water.",
          "Titan hosts a methane-based hydrological cycle analogous to Earth's water cycle.",
        ],
      },
      {
        heading: 'Prebiotic chemistry and future exploration',
        content:
          "Titan's thick nitrogen-methane atmosphere undergoes complex photochemistry driven by sunlight and energetic particles from Saturn's magnetosphere, producing a wide range of complex organic molecules, including tholins — reddish-brown organic compounds that likely coat much of Titan's surface. Because these reactions can form some molecules structurally related to those thought important in the early chemistry that led to life, Titan is considered a valuable natural laboratory for prebiotic (pre-life) chemistry, even though conditions are far too cold for liquid water and any hypothetical Titan biochemistry would have to be radically different from life as we know it.\n\nNASA's Dragonfly mission, a nuclear-powered rotorcraft lander planned to launch no earlier than 2028, will fly between multiple sites on Titan to directly sample surface organics and investigate this prebiotic chemistry in unprecedented detail.",
        keyPoints: [
          "Titan's atmosphere produces complex organic molecules called tholins.",
          "Titan's chemistry is of interest for prebiotic chemistry research, not necessarily water-based life.",
          'Dragonfly (launch no earlier than 2028) will sample surface chemistry at multiple Titan locations.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Titan\'s lakes are made of liquid water like Earth\'s lakes.',
        reality:
          "Titan is far too cold for liquid water on its surface. Its lakes and seas are made of liquid methane and ethane instead, while water ice acts as Titan's version of bedrock.",
      },
    ],
  },
  {
    id: 'exp-ssh-ganymede',
    topic: 'solar-system-habitability',
    subtopic: 'ganymede',
    title: 'Ganymede: Magnetosphere and Internal Differentiation',
    sections: [
      {
        heading: 'The only moon with its own magnetosphere',
        content:
          "Ganymede, one of Jupiter's four Galilean moons (along with Io, Europa, and Callisto), is the largest moon in the solar system, larger even than the planet Mercury. It orbits Jupiter as part of the Laplace orbital resonance chain shared with Io and Europa, in which their orbital periods maintain a repeating 1:2:4 ratio. What sets Ganymede apart from every other moon in the solar system, however, is that it generates its own internal magnetic field — a true magnetosphere — through convection within a liquid, iron-rich metallic core, much like Earth's own dynamo. This is fundamentally different from the magnetic signatures detected at Europa and Callisto, which are only induced fields created as Jupiter's powerful, rotating magnetic field interacts with electrically conductive salty subsurface oceans in those moons.",
        keyPoints: [
          "Ganymede is the largest moon in the solar system, larger than Mercury, and part of Jupiter's Galilean moon system.",
          'It is the only moon known to generate its own intrinsic internal magnetic field, from core convection.',
          "Europa's and Callisto's magnetic signatures are induced by Jupiter's field, not self-generated.",
        ],
      },
      {
        heading: 'Internal structure and a hidden ocean',
        content:
          "Ganymede's internal structure is differentiated into distinct layers: a metallic (likely iron-rich) core, a rocky silicate mantle, and an outer icy shell that may itself contain multiple layers, including a subsurface liquid water ocean sandwiched between layers of high-pressure ice phases. Evidence for this ocean comes in part from Hubble Space Telescope observations of the rocking motion of Ganymede's auroral belts, which are shaped by both Jupiter's field and Ganymede's own intrinsic field; the pattern of this rocking is best explained if a global layer of electrically conductive salty water lies beneath the surface. Because Ganymede is farther from Jupiter than Io and Europa, tidal heating plays a comparatively smaller role in its internal energy budget, but its large size means it retains substantial internal heat from formation and radioactive decay, helping to sustain both its metallic core dynamo and any subsurface ocean.",
        keyPoints: [
          'Ganymede is differentiated into a metallic core, rocky mantle, and icy shell (with possible subsurface ocean).',
          "Hubble auroral belt observations support a subsurface saltwater ocean beneath Ganymede's ice.",
          'Tidal heating is weaker at Ganymede than at Io or Europa, but its large size retains substantial internal heat.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: "Ganymede's magnetic field must come from Jupiter, the same way Europa's does.",
        reality:
          "Ganymede's field is self-generated (intrinsic) by convection in its own liquid iron-rich core, unlike Europa and Callisto, whose much weaker fields are merely induced by Jupiter's field interacting with their subsurface oceans.",
      },
      {
        misconception: 'Ganymede is just a solid ball of ice with no internal structure.',
        reality:
          "Ganymede is differentiated into a metallic core, rocky mantle, and layered icy shell that likely includes a subsurface liquid water ocean, evidence for which comes from gravity, magnetic field, and auroral observations.",
      },
    ],
  },
  {
    id: 'exp-ssh-makemake',
    topic: 'solar-system-habitability',
    subtopic: 'makemake',
    title: 'Makemake and Other Trans-Neptunian Dwarf Planets',
    sections: [
      {
        heading: 'A dwarf planet in the Kuiper Belt',
        content:
          "Makemake is a dwarf planet and trans-Neptunian object located in the Kuiper Belt, the region of icy bodies beyond Neptune's orbit. It is one of only five bodies officially recognized by the IAU as dwarf planets, alongside Ceres (in the asteroid belt), Pluto, Eris, and Haumea. Like other dwarf planets, Makemake orbits the Sun and is massive enough for its own gravity to pull it into a round shape, but it has not cleared its orbital neighborhood of other debris, the key criterion that distinguishes dwarf planets from full planets under the IAU definition. At roughly two-thirds the diameter of Pluto, Makemake is one of the larger known Kuiper Belt objects.",
        keyPoints: [
          'Makemake is a trans-Neptunian dwarf planet located in the Kuiper Belt.',
          'It is one of five IAU-recognized dwarf planets, along with Ceres, Pluto, Eris, and Haumea.',
          'Like other dwarf planets, it has not cleared its orbital neighborhood of debris.',
        ],
      },
      {
        heading: 'Surface composition and the question of an atmosphere',
        content:
          "Spectroscopic observations show that Makemake's surface is covered primarily in methane, ethane, and nitrogen ices, and its reddish coloration is attributed to tholins, complex organic compounds formed when ices are irradiated by sunlight — the same general process thought to color Pluto's surface. Despite this icy, Pluto-like surface composition, Makemake has no significant confirmed atmosphere, unlike Pluto, which retains a thin, transient nitrogen atmosphere. This difference highlights that superficially similar surface ice compositions do not guarantee similar atmospheric behavior; a body's size, temperature, and distance from the Sun all influence whether its surface ices can sustain even a thin atmosphere. Because Makemake is cold, icy, and lacks any confirmed liquid water or substantial atmosphere, it is not considered a promising candidate for habitability, though its icy composition is of interest for understanding the diversity of outer solar system bodies.",
        keyPoints: [
          "Makemake's surface is dominated by methane, ethane, and nitrogen ices, colored reddish by tholins.",
          'Unlike Pluto, Makemake has no significant confirmed atmosphere.',
          'Similar surface ice composition does not guarantee a similar atmosphere; size and temperature matter.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'All Kuiper Belt dwarf planets have atmospheres similar to Pluto.',
        reality:
          "Makemake, despite having an icy surface composition similar in theme to Pluto's, has no significant confirmed atmosphere, showing that surface composition alone does not determine whether a body retains an atmosphere.",
      },
      {
        misconception: 'Ceres and Makemake are similar bodies just located in different places.',
        reality:
          "Ceres is a rocky/icy body in the inner asteroid belt with evidence of past cryovolcanism, while Makemake is a much colder, more ice-dominated trans-Neptunian object in the Kuiper Belt; both are dwarf planets but formed and evolved in very different environments.",
      },
    ],
  },
  {
    id: 'exp-ssh-bennu',
    topic: 'solar-system-habitability',
    subtopic: 'bennu',
    title: '101955 Bennu: A Sample-Return Window into Prebiotic Chemistry',
    sections: [
      {
        heading: 'A primitive, carbon-rich asteroid',
        content:
          "101955 Bennu is a small, dark, carbon-rich near-Earth asteroid chosen as the target of NASA's OSIRIS-REx mission specifically because its composition appears to have been left largely unaltered since the early solar system, offering a relatively pristine window into the raw ingredients from which planets formed. In September 2023, OSIRIS-REx returned a surface sample to Earth for laboratory analysis, a technique that avoids the atmospheric heating, weathering, and terrestrial contamination that can alter or destroy delicate compounds in meteorites that fall to Earth on their own.",
        keyPoints: [
          'Bennu is a small, dark, carbon-rich (carbonaceous) near-Earth asteroid.',
          'OSIRIS-REx collected and returned a surface sample to Earth in September 2023.',
          'Sample return provides pristine, uncontaminated material that meteorites alone cannot offer.',
        ],
      },
      {
        heading: 'Habitability relevance: delivering water and organics',
        content:
          "Laboratory analysis of the returned Bennu material revealed hydrated minerals, clays that only form in the presence of liquid water, along with a diverse mix of organic molecules, including amino acids and other prebiotic building blocks. Because small bodies like Bennu are thought to have delivered similar water-bearing, carbon-rich material to the young Earth via impacts, Bennu's sample provides direct evidence for one proposed pathway by which the raw ingredients for life could have reached a young rocky planet, complementing indirect evidence gathered from meteorites and comets.",
        keyPoints: [
          "Bennu's returned sample contains hydrated minerals and diverse organic molecules, including amino acids.",
          'Small, carbon-rich bodies like Bennu are considered plausible sources for the water and organics that helped seed early Earth.',
          "Bennu's episodic particle-ejection events (thermal fracturing, small impacts) show it remains an active, evolving surface despite lacking tectonics or tidal heating.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: "Bennu's particle ejections mean it has active volcanism.",
        reality:
          'Bennu is far too small for tidal heating or internal volcanism; the ejections are attributed to thermal fracturing from day-night temperature swings and small meteoroid impacts.',
      },
      {
        misconception: 'A returned sample is basically the same as a meteorite found on Earth.',
        reality:
          'Sample return avoids the atmospheric heating, weathering, and terrestrial contamination that alter or destroy delicate organic compounds in meteorites, giving scientists access to more pristine, better-contextualized material.',
      },
    ],
  },
  {
    id: 'exp-ssh-comet-67p',
    topic: 'solar-system-habitability',
    subtopic: 'comet-67p',
    title: "67P/Churyumov–Gerasimenko: Comet Chemistry and the Origin of Earth's Water",
    sections: [
      {
        heading: 'Rosetta and Philae: an extended comet visit',
        content:
          "67P/Churyumov–Gerasimenko is a Jupiter-family comet studied in unprecedented detail by ESA's Rosetta orbiter, which accompanied the comet for roughly two years (2014-2016) as it approached and receded from the Sun, deploying the Philae lander for the first-ever landing on a comet's surface. This extended presence, far longer than a typical flyby mission, allowed Rosetta to observe how the comet's activity changed as it warmed and to make direct chemical measurements of gas and dust escaping from the nucleus.",
        keyPoints: [
          'Rosetta orbited 67P for about two years, far longer than typical flyby missions.',
          "Philae achieved the first landing on a comet's surface.",
          'The extended mission allowed direct observation of how cometary activity changes with distance from the Sun.',
        ],
      },
      {
        heading: 'Water delivery and prebiotic chemistry',
        content:
          "Rosetta measured the deuterium-to-hydrogen (D/H) ratio in 67P's water and found it to be roughly three times higher than Earth's ocean water, a mismatch that argues against Jupiter-family comets, as a class, being the dominant source of Earth's oceans, since if they were, the ratios would be expected to match more closely. Separately, Rosetta detected glycine (a simple amino acid) and phosphorus, an essential CHNOPS element, in material surrounding the comet, supporting the idea that comets could still have delivered meaningful prebiotic chemical building blocks to the early Earth, even if they were not the primary source of its water.",
        keyPoints: [
          "67P's water D/H ratio is roughly 3x Earth ocean water's, arguing against Jupiter-family comets as Earth's main water source.",
          'Rosetta detected glycine and phosphorus at 67P, supporting cometary delivery of prebiotic building blocks.',
          "A D/H ratio mismatch doesn't rule out comets contributing some water/organics — just being the dominant source.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: "Rosetta's D/H measurement proves comets delivered none of Earth's water.",
        reality:
          'It argues against Jupiter-family comets like 67P being the primary source, but does not rule out a partial contribution, or a different class of comet or asteroid instead.',
      },
      {
        misconception: 'Detecting an amino acid at a comet is proof of extraterrestrial life.',
        reality:
          'Glycine is a common prebiotic building block that can form abiotically in space; its detection supports the delivery of raw materials for life, not life itself.',
      },
    ],
  },
]
