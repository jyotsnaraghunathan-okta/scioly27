export const solarSystemHabitabilityFR = [
  {
    id: 'fr-ssh-001',
    topic: 'solar-system-habitability',
    subtopic: 'Mars Habitability',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Describe two lines of evidence that Mars was once habitable, and explain the primary mechanism thought to have driven Mars from a warmer, wetter past to its cold, dry present state.',
    modelAnswer:
      "Two strong lines of evidence for a formerly habitable Mars are (1) geomorphological features such as dry river valley networks, deltas, and ancient lakebeds — for example, Jezero Crater, which preserves a clear ancient river delta — that indicate sustained liquid water flow billions of years ago, and (2) the presence of clay minerals (phyllosilicates) and certain sulfate minerals in Martian rocks, which only form through long-term interaction with liquid water. Together, these indicate that early Mars had a thicker atmosphere and an active hydrological cycle capable of supporting stable surface water. The primary driver of Mars's transition to its current cold, dry state is the loss of its atmosphere due to the lack of a global magnetic field. Without a magnetosphere to shield it, the solar wind has continually stripped charged particles from Mars's upper atmosphere over billions of years, a process directly measured today by NASA's MAVEN orbiter. As atmospheric pressure and greenhouse warming declined, surface liquid water became unstable, leading to the frozen, low-pressure Mars observed today.",
    keyPoints: [
      'Riverbeds/deltas/lakebeds (e.g., Jezero Crater) as morphological evidence of past water',
      'Clay and sulfate minerals as mineralogical evidence of past water',
      "Lack of a global magnetic field allowed the solar wind to strip Mars's atmosphere",
      'MAVEN measures ongoing atmospheric loss',
    ],
  },
  {
    id: 'fr-ssh-002',
    topic: 'solar-system-habitability',
    subtopic: 'Venus Habitability',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Explain the runaway greenhouse hypothesis for Venus's history, and describe the alternative hypothesis for where life might exist on Venus today.",
    modelAnswer:
      "Venus is thought to have started with conditions more similar to early Earth, potentially including surface water. Because Venus orbits closer to the Sun, it received more solar energy, which is hypothesized to have triggered a runaway greenhouse effect: rising temperatures evaporated increasing amounts of water into the atmosphere, and because water vapor itself traps heat, this created a positive feedback loop that ultimately vaporized any oceans entirely. Once water vapor reached the upper atmosphere, ultraviolet radiation broke the molecules apart, and the resulting hydrogen atoms, being very light, escaped to space permanently, leaving Venus with a dense CO2 atmosphere and its current extreme surface temperature of about 465°C. Because the surface is now completely hostile to life, the alternative hypothesis for Venusian habitability focuses on the cloud layer roughly 48 to 60 km above the surface, where temperature and pressure conditions are notably more moderate and closer to conditions in Earth's lower atmosphere. Some scientists have speculated that acid-tolerant microorganisms could theoretically survive suspended in the sulfuric acid cloud droplets there, an idea that gained renewed attention after a disputed 2020 report of a phosphine signature, though this cloud-habitability hypothesis remains unconfirmed and heavily debated.",
    keyPoints: [
      'Runaway greenhouse: positive feedback between rising temperature and water vapor vaporized early oceans',
      'UV-driven breakdown of water vapor and hydrogen escape left Venus permanently dry',
      "Cloud-layer hypothesis: more moderate T/P at ~48-60 km altitude",
      'Disputed phosphine detection and its role in renewed cloud habitability interest',
    ],
  },
  {
    id: 'fr-ssh-003',
    topic: 'solar-system-habitability',
    subtopic: 'Europa & Enceladus',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      "Compare the evidence for a subsurface ocean on Europa with the evidence for a subsurface ocean on Enceladus. Why is the discovery of molecular hydrogen in Enceladus's plumes considered particularly significant for astrobiology?",
    modelAnswer:
      "Evidence for Europa's subsurface ocean comes mainly from indirect measurements: the Galileo spacecraft detected an induced magnetic field around Europa consistent with a global layer of electrically conductive salty liquid water beneath the icy shell, and Europa's young, fractured surface is consistent with an active interior. By contrast, evidence for Enceladus's ocean is much more direct: the Cassini spacecraft observed geysers erupting from fractures near Enceladus's south pole and flew directly through these plumes, sampling water vapor, ice grains, salts, and organic molecules coming straight from the subsurface ocean. The detection of molecular hydrogen in Enceladus's plumes is particularly significant because molecular hydrogen is a known byproduct of hydrothermal chemical reactions between hot rock and water (serpentinization), the same kind of reaction that occurs at hydrothermal vents on Earth's ocean floor. On Earth, such vents support entire ecosystems of microorganisms that use chemosynthesis to derive energy from these chemical reactions rather than from sunlight. Finding hydrogen in Enceladus's plumes therefore suggests that active hydrothermal systems may exist at the boundary between its rocky core and its ocean, potentially supplying both the chemical energy and nutrients that life would need to survive in a completely dark, sunlight-free environment.",
    keyPoints: [
      "Europa's ocean evidence: induced magnetic field (Galileo) and young fractured surface (indirect)",
      "Enceladus's ocean evidence: direct plume sampling by Cassini (more direct)",
      'Molecular hydrogen indicates hydrothermal (water-rock) chemistry, i.e., serpentinization',
      'Hydrothermal vents on Earth support chemosynthetic life without sunlight, providing a model for ocean-world habitability',
    ],
  },
  {
    id: 'fr-ssh-004',
    topic: 'solar-system-habitability',
    subtopic: 'Titan',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Explain why Titan is considered scientifically important for studying prebiotic chemistry, despite being far too cold for liquid water on its surface.",
    modelAnswer:
      "Titan is the only body in the solar system besides Earth known to have stable liquid on its surface today, but because surface temperatures are around -179°C, that liquid is methane and ethane rather than water, filling lakes and seas such as Kraken Mare. Titan's thick nitrogen-methane atmosphere undergoes complex photochemistry powered by sunlight and energetic particles, producing a wide variety of complex organic molecules, including reddish-brown compounds called tholins that likely coat much of the moon's surface. Because some of these reactions can generate molecules structurally related to compounds thought to be important in the chemistry that preceded the origin of life on Earth, Titan serves as a valuable natural laboratory for studying prebiotic chemistry in an environment completely different from early Earth. It allows scientists to investigate how far complex carbon-based chemistry can proceed without liquid water, informing broader questions about the chemical steps that might lead toward life, even though any hypothetical Titan biochemistry would have to be radically different from familiar water-based life. NASA's Dragonfly mission, planned to launch no earlier than 2028, will directly sample this surface chemistry at multiple locations.",
    keyPoints: [
      "Titan has stable surface liquid (methane/ethane lakes), unique besides Earth",
      "Atmospheric photochemistry produces complex organics (tholins)",
      'Serves as a natural laboratory for prebiotic chemistry distinct from water-based biochemistry',
      'Dragonfly mission will sample Titan surface organics directly',
    ],
  },
  {
    id: 'fr-ssh-005',
    topic: 'solar-system-habitability',
    subtopic: 'Ganymede',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      "Explain why Ganymede's magnetic field is considered unique among solar system moons, and describe what this implies about its internal structure.",
    modelAnswer:
      "Ganymede is the only moon in the entire solar system known to generate its own intrinsic internal magnetic field, meaning the field is produced internally by the moon itself rather than being merely induced by an external source. This intrinsic field is generated through convection within a liquid, iron-rich metallic core, the same basic dynamo process that generates Earth's magnetic field. This is fundamentally different from the magnetic signatures detected at neighboring Galilean moons Europa and Callisto: their much weaker fields are induced fields, created only as Jupiter's powerful, rotating magnetic field sweeps past and interacts with electrically conductive layers, such as subsurface saltwater oceans, within those moons. The existence of a self-sustaining magnetic dynamo at Ganymede implies that the moon is internally differentiated into distinct layers, including a molten or partially molten metallic core capable of convective motion, a rocky silicate mantle surrounding that core, and an icy outer shell. Because generating a magnetic dynamo generally requires a convecting, electrically conductive fluid core, Ganymede's magnetic field is strong evidence that it underwent internal differentiation, with denser metallic material sinking to form a core early in its history, rather than remaining a homogeneous mixture of rock and ice throughout. Additional evidence, including the rocking pattern of Ganymede's auroral belts observed by Hubble, further suggests a subsurface liquid water ocean may exist within its icy shell, sandwiched between layers of high-pressure ice.",
    keyPoints: [
      'Ganymede is the only moon with a self-generated (intrinsic) magnetic field, via core convection',
      "Europa's and Callisto's fields are induced by Jupiter's field, not self-generated",
      'A magnetic dynamo requires a convecting, electrically conductive core, implying differentiation',
      'Ganymede is differentiated into metallic core, rocky mantle, and icy shell (with likely subsurface ocean)',
    ],
  },
  {
    id: 'fr-ssh-006',
    topic: 'solar-system-habitability',
    subtopic: 'Makemake',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Compare Makemake to Pluto in terms of classification, surface composition, and atmosphere.',
    modelAnswer:
      "Makemake and Pluto are both classified as dwarf planets under the IAU definition, meaning each orbits the Sun, is massive enough for its own gravity to pull it into a round shape, has not cleared its orbital neighborhood of other debris, and is not a moon of another body; both are also trans-Neptunian objects located in the Kuiper Belt. In terms of surface composition, the two bodies are broadly similar: both have surfaces covered in methane, ethane, and nitrogen ices, and both display a reddish coloration attributed to tholins, complex organic compounds produced when these ices are irradiated by sunlight over long timescales. The most significant difference between the two lies in their atmospheres. Pluto retains a thin, transient nitrogen-dominated atmosphere that expands and contracts as the dwarf planet moves through its eccentric orbit, alternately warming and cooling its surface ices enough to sublime and refreeze. Makemake, despite its very similar icy surface composition, has no significant confirmed atmosphere. This contrast shows that having a broadly similar surface ice inventory does not guarantee a similar atmosphere; factors such as a body's exact size, surface temperature, and orbital distance all influence whether enough of its surface ice can sublime to sustain even a thin, temporary atmosphere.",
    keyPoints: [
      'Both Makemake and Pluto are IAU-recognized dwarf planets and trans-Neptunian Kuiper Belt objects',
      'Both have methane/ethane/nitrogen ice surfaces reddened by tholins',
      'Pluto has a thin, transient nitrogen atmosphere; Makemake has no significant confirmed atmosphere',
      'Similar surface composition does not guarantee a similar atmosphere; size/temperature/orbit matter',
    ],
  },
]
