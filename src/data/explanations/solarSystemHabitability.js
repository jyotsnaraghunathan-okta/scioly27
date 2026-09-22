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
    id: 'exp-ssh-europa-enceladus',
    topic: 'solar-system-habitability',
    subtopic: 'europa-enceladus',
    title: 'Europa and Enceladus: Subsurface Ocean Worlds',
    sections: [
      {
        heading: 'Evidence for subsurface oceans',
        content:
          "Europa, one of Jupiter's Galilean moons, and Enceladus, a moon of Saturn, are both icy worlds believed to harbor global liquid water oceans beneath their frozen surfaces. For Europa, the Galileo spacecraft measured a magnetic field response consistent with a subsurface layer of electrically conductive (salty) liquid water, and Europa's fractured, relatively young icy surface further supports an active, possibly ocean-connected interior. For Enceladus, Cassini directly observed and flew through geysers of water vapor and ice erupting from fractures near its south pole, nicknamed \"tiger stripes,\" providing the most direct evidence yet of a subsurface ocean feeding surface plumes.",
        keyPoints: [
          "Europa's subsurface ocean is inferred mainly from induced magnetic field and surface geology data.",
          "Enceladus's ocean is confirmed by direct plume material sampled by Cassini.",
          'Both oceans are kept liquid primarily by tidal heating rather than sunlight.',
        ],
      },
      {
        heading: 'Chemistry and the hydrothermal vent hypothesis',
        content:
          "Cassini's analysis of Enceladus's plumes revealed not just water vapor and ice grains but also salts and organic molecules, as well as molecular hydrogen. Molecular hydrogen is a signature byproduct of chemical reactions between hot rock and water at hydrothermal vents (a process called serpentinization), which occurs on Earth's ocean floor and supports entire ecosystems of chemosynthetic organisms that don't rely on sunlight. This finding suggests Enceladus may have active hydrothermal systems at the interface between its rocky core and ocean, potentially supplying both energy and chemical building blocks needed to support microbial life, if it exists.",
        keyPoints: [
          "Molecular hydrogen in Enceladus's plumes suggests active hydrothermal (water-rock) chemistry.",
          'Hydrothermal vents on Earth support chemosynthetic life independent of sunlight, offering a model for ocean-world habitability.',
          "Europa Clipper (launched 2024, arriving 2030) will further investigate Europa's ocean chemistry and habitability.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Europa and Enceladus have been confirmed to host life.',
        reality:
          'Both moons have strong evidence for subsurface liquid water and the chemical ingredients potentially needed for life, but no life has been detected. They are high-priority targets for future astrobiology missions, not confirmed inhabited worlds.',
      },
      {
        misconception: 'These moons are warmed primarily by sunlight, like Earth.',
        reality:
          'Both moons orbit far from the Sun and receive very little sunlight. Their oceans are kept liquid mainly by tidal heating generated by gravitational interactions with their host planets and neighboring moons.',
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
]
