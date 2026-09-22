export const habitabilityFundamentalsFR = [
  {
    id: 'fr-hf-001',
    topic: 'habitability-fundamentals',
    subtopic: 'Habitable Zone',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Explain what determines the inner and outer edges of a star's circumstellar habitable zone. Why does a red dwarf star have a habitable zone much closer to the star than the Sun's?",
    modelAnswer:
      "The inner edge of the habitable zone is set by the runaway or moist greenhouse limit: as a planet's distance from its star decreases, it receives more energy and warms up, evaporating more water into the atmosphere. Because water vapor is a greenhouse gas, this creates a positive feedback loop that can boil away an entire ocean, leaving the planet too hot and dry to be habitable, as is believed to have occurred on Venus. The outer edge is set by the maximum greenhouse limit: farther from the star, a planet needs increasing amounts of greenhouse gas (usually CO2) to stay warm enough for liquid water, but beyond a certain distance CO2 itself begins to condense into clouds and ice. This raises the planet's albedo and reduces the effectiveness of further greenhouse warming, capping how far out the habitable zone can extend. A red dwarf star is much cooler and less luminous than the Sun, so a planet must orbit much closer to receive the same amount of stellar energy per unit area needed to keep water liquid. As a result, the habitable zone around a red dwarf is compressed into a much smaller orbital distance, often comparable to Mercury's distance from the Sun.",
    keyPoints: [
      'Inner edge caused by runaway/moist greenhouse effect vaporizing surface water',
      'Outer edge caused by CO2 condensation limiting further greenhouse warming',
      'Habitable zone distance scales with stellar luminosity',
      'Red dwarfs are cooler/dimmer, so their habitable zones sit much closer in',
    ],
  },
  {
    id: 'fr-hf-002',
    topic: 'habitability-fundamentals',
    subtopic: 'Equilibrium Temperature & Energy Budgets',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      "Describe the difference between a planet's equilibrium temperature and its actual surface temperature, using Earth as an example. What accounts for the gap between the two?",
    modelAnswer:
      "A planet's equilibrium temperature is the theoretical temperature it would have if it behaved as a simple blackbody absorbing sunlight and radiating heat to space, based only on its distance from the Sun and its albedo, with no atmosphere included. Earth's equilibrium temperature works out to about -18°C. However, Earth's actual global average surface temperature is about 15°C, roughly 33°C warmer. This gap is due to the natural greenhouse effect: gases in Earth's atmosphere, particularly water vapor and carbon dioxide, absorb outgoing infrared radiation emitted by the warm surface and re-emit part of it back downward, trapping additional heat that would otherwise escape directly to space. This extra warming from the greenhouse effect is what raises Earth's actual temperature well above its equilibrium temperature and is essential for keeping most of the planet's surface water in liquid form.",
    keyPoints: [
      'Equilibrium temperature is the blackbody temperature from absorbed sunlight alone, ignoring the atmosphere',
      "Earth's equilibrium temperature (~-18°C) is well below its actual surface temperature (~15°C)",
      'The ~33°C gap is due to the natural greenhouse effect',
      'Greenhouse gases absorb and re-emit outgoing infrared radiation, warming the surface',
    ],
  },
  {
    id: 'fr-hf-003',
    topic: 'habitability-fundamentals',
    subtopic: 'Tidal Forces, Heating & Locking',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      "Explain how tidal heating can maintain a subsurface liquid ocean on a moon like Europa, even though Europa orbits far outside the Sun's traditional habitable zone. Include the role of orbital resonance in your answer.",
    modelAnswer:
      "Europa orbits Jupiter in a slightly eccentric orbit that is maintained by a orbital (Laplace) resonance with the neighboring moons Io and Ganymede, whose orbital periods are locked in a 1:2:4 ratio. This resonance continually perturbs Europa's orbit, preventing it from becoming perfectly circular even though tidal forces would otherwise tend to circularize it over time. Because the orbit remains eccentric, Europa's distance from Jupiter — and therefore the strength of Jupiter's gravitational pull on it — varies periodically during each orbit. This varying tidal stress flexes Europa's icy shell and rocky interior, and the resulting friction converts mechanical energy into heat, a process called tidal heating. This internal heat source, rather than sunlight (which is very weak at Jupiter's distance from the Sun), is thought to be sufficient to keep a layer of liquid water present beneath Europa's icy crust, forming a global subsurface ocean. This shows that habitability is not limited to the classical circumstellar habitable zone; moons with strong tidal heating can maintain liquid water far from the traditional zone.",
    keyPoints: [
      "Europa's orbit is kept eccentric by orbital resonance with Io and Ganymede",
      'Eccentric orbit causes varying tidal stress and flexing of the interior',
      'Friction from tidal flexing generates internal heat (tidal heating)',
      'Tidal heating, not sunlight, is thought to sustain a subsurface ocean beneath the icy crust',
    ],
  },
  {
    id: 'fr-hf-004',
    topic: 'habitability-fundamentals',
    subtopic: 'Orbital Eccentricity & Climate Stability',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question:
      'How does orbital eccentricity affect the climate stability of a planet? Compare a planet with low eccentricity to one with high eccentricity.',
    modelAnswer:
      "Orbital eccentricity measures how elongated a planet's orbit is, from 0 (a perfect circle) to values approaching 1 (a highly stretched ellipse). A planet with low eccentricity, like Earth (about 0.017), orbits at a nearly constant distance from its star throughout the year, so it receives a fairly steady amount of stellar energy over time, contributing to a more stable climate. A planet with high eccentricity experiences much larger variations in its distance from the star over the course of an orbit, so the amount of energy it receives can swing dramatically between its closest approach (perihelion) and farthest point (aphelion). This can produce large seasonal temperature extremes and, in severe cases, could push a planet in and out of conditions where liquid water is stable, making sustained habitability more difficult to maintain.",
    keyPoints: [
      'Eccentricity ranges from 0 (circular) to near 1 (highly elliptical)',
      'Low eccentricity keeps stellar flux relatively constant over an orbit',
      'High eccentricity causes large swings in received energy between perihelion and aphelion',
      'Large flux swings can destabilize surface conditions and threaten sustained habitability',
    ],
  },
  {
    id: 'fr-hf-005',
    topic: 'habitability-fundamentals',
    subtopic: 'CHNOPS & Biochemistry',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Explain why silicon is often proposed as a hypothetical alternative to carbon as a backbone for life, and describe two reasons silicon-based biochemistry is considered less likely than carbon-based biochemistry.',
    modelAnswer:
      "Silicon is proposed as a hypothetical alternative to carbon because, like carbon, it can form four stable covalent bonds, in principle allowing it to build a wide variety of complex molecular structures the way carbon does in organic chemistry. However, silicon-based biochemistry faces at least two major obstacles that make it far less plausible than carbon-based life. First, silicon dioxide, which is silicon's chemical analog to carbon dioxide, is a solid (essentially quartz or sand) at the temperatures and pressures where life as we know it operates, rather than a gas like CO2. This would make gas exchange and metabolic waste removal extremely difficult for a hypothetical silicon-based organism, since it could not simply exhale a silicon-based waste gas the way carbon-based organisms exhale CO2. Second, Si-Si and Si-O bonds are generally less versatile and less stable than carbon's bonds for building the long, diverse, branching chains and rings needed for complex biochemistry; silicon chemistry tends to form more rigid, mineral-like structures rather than the flexible variety of molecules carbon can produce. Together, these limitations are why carbon remains the only known practical backbone for complex life, despite silicon's superficial similarity in bonding capacity.",
    keyPoints: [
      'Silicon can form four stable covalent bonds, like carbon',
      'Silicon dioxide is solid, not gaseous, at biological temperatures, complicating metabolism/gas exchange',
      'Si-Si/Si-O bonds are less versatile than carbon\'s for forming diverse, complex chains',
      'These limitations make silicon-based biochemistry far less plausible than carbon-based life',
    ],
  },
  {
    id: 'fr-hf-006',
    topic: 'habitability-fundamentals',
    subtopic: 'Drake Equation & Fermi Paradox',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      'Describe the general structure of the Drake Equation and explain how it leads to the tension known as the Fermi Paradox.',
    modelAnswer:
      "The Drake Equation estimates the number of currently communicating extraterrestrial civilizations in the galaxy by multiplying together a chain of successive factors: the rate at which new stars form, the fraction of those stars that have planets, the average number of habitable planets per planetary system, the fraction of habitable planets on which life actually arises, the fraction of those life-bearing planets on which intelligent life evolves (conventionally denoted f_i), the fraction of intelligent species that go on to develop technology capable of producing detectable signals, and finally the average length of time such a civilization would continue producing those detectable signals. Because each factor conditions on the ones before it, the equation is essentially a framework for breaking an enormous, uncertain question into smaller, more tractable pieces, even though many of the later factors (especially those involving the origin of life and intelligence) remain highly uncertain or essentially unknown. This structure directly leads to the Fermi Paradox: because the universe is extremely large and very old, even a modest, non-pessimistic set of assumptions for these factors can suggest that intelligent, communicating civilizations should be relatively common. Yet decades of searching, through SETI radio surveys and more recent technosignature searches, have found no confirmed evidence of any such civilization. This contradiction, between the expectation of abundant intelligent life and the observed silence, is the Fermi Paradox, often summarized by the question 'Where is everybody?' One way scientists have tried to explain the paradox is by pointing out that using more pessimistic, conservative estimates for the later Drake Equation factors can shrink the expected number of detectable civilizations dramatically, suggesting that civilizations capable of interstellar communication may simply be very rare or very short-lived.",
    keyPoints: [
      'Drake Equation multiplies star formation rate through fraction with life, intelligence, and detectable technology, times average signal lifetime',
      'f_i specifically denotes the fraction of habitable planets where intelligent life develops',
      'A vast, old universe suggests civilizations should be common under non-pessimistic assumptions',
      'Fermi Paradox: tension between that expectation and the total lack of observed evidence ("Where is everybody?")',
      'Pessimistic Drake Equation parameter choices can shrink the expected number of civilizations, offering one possible resolution',
    ],
  },
]
