export const exoplanetSystemsExplanations = [
  {
    id: 'exp-exo-detection-methods',
    topic: 'exoplanet-systems',
    subtopic: 'detection-methods',
    title: 'Exoplanet Detection Methods',
    sections: [
      {
        heading: 'The transit method',
        content:
          "The transit method detects exoplanets indirectly by monitoring a star's brightness over time. If a planet's orbit happens to be aligned so that it passes directly between its star and Earth, it blocks a small fraction of the star's light, producing a periodic, repeating dip in the observed brightness called a light curve. The depth of this dip depends on the ratio of the planet's cross-sectional area to the star's, so transit depth scales as (Rp/Rs)², where Rp and Rs are the planet and star radii. This is why an Earth-sized planet transiting a Sun-like star produces only a tiny ~0.008% dip in brightness, while a Jupiter-sized planet produces a much larger, easier-to-detect dip of roughly 1%. Both the Kepler and TESS missions used the transit method to find thousands of exoplanet candidates by continuously monitoring the brightness of large numbers of stars.",
        keyPoints: [
          'Transits are periodic brightness dips caused by a planet passing in front of its star.',
          'Transit depth ∝ (planet radius / star radius)².',
          'Requires the planet\'s orbital plane to be aligned edge-on relative to Earth.',
        ],
      },
      {
        heading: 'The radial velocity (Doppler) method',
        content:
          "The radial velocity method detects the gravitational effect a planet has on its host star rather than the planet itself. As a planet orbits, its gravity causes the star to move in a small orbit of its own around their common center of mass, alternately moving slightly toward and then away from Earth. This periodic motion produces a tiny, repeating Doppler shift in the star's spectral lines — a blueshift as the star moves toward us, a redshift as it moves away. Because this method measures only the velocity component along our line of sight, it typically yields a minimum mass for the planet (since the true orbital inclination is often unknown). Radial velocity was the technique used to confirm Proxima Centauri b, the closest known exoplanet to Earth.",
        keyPoints: [
          "Radial velocity detects a star's periodic wobble caused by an orbiting planet's gravity.",
          "Detected via Doppler shifts in the star's spectral lines.",
          'Typically yields a minimum mass estimate rather than a definite mass, due to unknown orbital inclination.',
        ],
      },
      {
        heading: 'Direct imaging',
        content:
          "Direct imaging attempts to capture actual photons from a planet itself, separated from its much brighter host star, usually using coronagraphs or starshades to block out starlight. This method works best for large, hot, young planets orbiting at wide separations from their star, since young planets still glow from residual formation heat and are easier to resolve at large orbital distances. It is far more difficult to directly image small, rocky, close-in habitable-zone planets, since they are both much fainter and much closer to the overwhelming glare of their star; this remains a major goal for next-generation telescope concepts.",
        keyPoints: [
          'Direct imaging captures light from the planet itself, blocking out starlight.',
          'Best suited for large, young, hot, widely separated planets.',
          'Directly imaging small, rocky, habitable-zone planets remains extremely challenging with current technology.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Estimating transit depth',
        problem:
          "A planet with 2 Earth radii transits a star with a radius of 0.5 solar radii (about 54.5 Earth radii). What is the approximate transit depth?",
        steps: [
          'Transit depth ≈ (Rp/Rs)².',
          'Compute the ratio: Rp/Rs = 2 / 54.5 ≈ 0.0367.',
          'Square the ratio: (0.0367)² ≈ 0.00135, or about 0.135%.',
        ],
        answer: 'The transit would produce a brightness dip of roughly 0.135% (1350 ppm).',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'The transit method can detect any exoplanet around any star.',
        reality:
          "The transit method only works if the planet's orbital plane happens to be aligned edge-on as seen from Earth; most planetary systems are not aligned this way, so transits only reveal a subset of all planets around surveyed stars.",
      },
      {
        misconception: 'Radial velocity gives the exact mass of a planet.',
        reality:
          "Because radial velocity only measures the star's motion along our line of sight, it typically gives a minimum mass (m sin i); the true mass could be higher if the orbit is significantly inclined relative to our line of sight.",
      },
    ],
  },
  {
    id: 'exp-exo-trappist-1',
    topic: 'exoplanet-systems',
    subtopic: 'trappist-1',
    title: 'The TRAPPIST-1 System',
    sections: [
      {
        heading: 'System overview',
        content:
          "TRAPPIST-1 is an ultra-cool red dwarf star located about 40 light-years away, hosting seven roughly Earth-sized rocky planets (designated b through h), one of the most compact and populous exoplanet systems known. Because TRAPPIST-1 is small, dim, and cool compared to the Sun, its habitable zone is compressed into a very small region close to the star, and all seven planets orbit closer to their star than Mercury orbits the Sun, with orbital periods ranging from about 1.5 days (planet b) to about 18.8 days (planet h). Three to four of the planets — d, e, f, and g — orbit within or near the system's estimated habitable zone, with TRAPPIST-1e generally considered the most promising candidate, since its density is consistent with a rocky composition and it lies solidly within the habitable zone.",
        keyPoints: [
          'TRAPPIST-1 is an ultra-cool red dwarf about 40 light-years away with seven roughly Earth-sized planets.',
          'The compact habitable zone puts several planets (d, e, f, g) within or near habitable conditions.',
          'TRAPPIST-1e is often highlighted as the most Earth-like candidate for follow-up study.',
        ],
      },
      {
        heading: 'Orbital resonance and tidal locking',
        content:
          "The seven TRAPPIST-1 planets form a tightly interlinked orbital resonance chain, meaning their orbital periods are related by near-whole-number ratios that gravitationally reinforce each other's orbits and keep the system dynamically stable over long timescales. Because all the planets orbit so close to their star, tidal forces are extremely strong, and models suggest most or all of the planets are tidally locked, permanently showing the same face to their star. This raises important open questions being studied with JWST: could a thick enough atmosphere redistribute heat well enough to prevent nightside atmospheric collapse, and could these planets retain any atmosphere at all given the flare activity typical of red dwarf stars?",
        keyPoints: [
          "The TRAPPIST-1 planets are locked in a resonance chain that stabilizes their orbits.",
          'Most or all TRAPPIST-1 planets are likely tidally locked due to their close orbits.',
          'JWST has begun characterizing TRAPPIST-1 planet atmospheres to test whether any retain a substantial atmosphere.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'All seven TRAPPIST-1 planets are considered fully habitable.',
        reality:
          "Only a subset of the seven planets (roughly d, e, f, and g) lie within or near the estimated habitable zone; the innermost planets (b, c) are almost certainly too hot, and the outermost (h) is likely too cold.",
      },
    ],
  },
  {
    id: 'exp-exo-proxima-centauri',
    topic: 'exoplanet-systems',
    subtopic: 'proxima-centauri',
    title: 'Proxima Centauri b and Nearby Systems',
    sections: [
      {
        heading: 'The closest known exoplanet',
        content:
          "Proxima Centauri b orbits Proxima Centauri, the closest star to the Sun at about 4.2 light-years away, making it the closest known exoplanet to Earth. It was discovered in 2016 using the radial velocity method, with a minimum mass of roughly 1.07 Earth masses and an orbital period of about 11.2 days at a distance of roughly 0.05 AU from its star. Because Proxima Centauri is a very dim, cool red dwarf, this close orbital distance still places the planet within the star's habitable zone, meaning liquid water could theoretically exist on its surface if it has a suitable atmosphere.",
        keyPoints: [
          'Proxima Centauri b orbits the nearest star to the Sun, about 4.2 light-years away.',
          'Discovered via radial velocity in 2016, with minimum mass close to Earth\'s.',
          'Its close orbit still places it within Proxima Centauri\'s compressed habitable zone.',
        ],
      },
      {
        heading: 'Habitability challenges: flares and tidal locking',
        content:
          "Despite orbiting within the habitable zone, Proxima Centauri b faces significant habitability challenges. Proxima Centauri is a magnetically active red dwarf known to produce frequent and powerful stellar flares, including a giant flare recorded in 2019 that briefly made the star 68 times brighter in the ultraviolet. Repeated exposure to such flares could erode a planet's atmosphere over billions of years or damage surface conditions with high-energy radiation. Additionally, because the planet orbits so close to its star, it is likely tidally locked, similar to planets in the TRAPPIST-1 system, adding further uncertainty about whether stable, life-supporting surface conditions could persist across the whole planet.",
        keyPoints: [
          'Proxima Centauri produces frequent, powerful flares that could erode a planet\'s atmosphere.',
          'Proxima Centauri b is likely tidally locked due to its close-in orbit.',
          'These factors make red dwarf habitability more uncertain than for Sun-like star systems, despite the convenient close distance for study.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Because Proxima Centauri b is in the habitable zone, it is confirmed to be habitable.',
        reality:
          'Being within the habitable zone only means liquid water could theoretically exist given the right atmosphere. Frequent stellar flares and likely tidal locking raise serious open questions about whether Proxima Centauri b can retain a life-supporting atmosphere at all.',
      },
    ],
  },
  {
    id: 'exp-exo-kepler452-lhs1140',
    topic: 'exoplanet-systems',
    subtopic: 'kepler452-lhs1140',
    title: 'Kepler-452b and LHS 1140 b',
    sections: [
      {
        heading: "Kepler-452b: 'Earth's cousin'",
        content:
          "Kepler-452b, announced in 2015, orbits a G-type, Sun-like star at a distance and orbital period (about 385 days) remarkably close to Earth's own year, earning it a popular nickname as \"Earth's cousin.\" However, at roughly 1.6 times Earth's radius, Kepler-452b sits near the boundary between rocky super-Earths and gas-enveloped sub-Neptunes. Because only its radius (from the transit method) is well constrained, and a confident mass measurement has been difficult to obtain for this relatively faint, distant star system, its true bulk composition — and therefore whether it is genuinely rocky and potentially habitable — remains an open question rather than a confirmed fact.",
        keyPoints: [
          "Kepler-452b orbits a Sun-like (G-type) star with a ~385-day period, close to Earth's year length.",
          "At ~1.6 Earth radii, it sits near the boundary between rocky super-Earths and gas-rich sub-Neptunes.",
          'Its true composition remains uncertain without a confident mass measurement.',
        ],
      },
      {
        heading: 'LHS 1140 b: a quieter red dwarf habitable-zone world',
        content:
          "LHS 1140 b, discovered in 2017 via both the transit and radial velocity methods, is a rocky super-Earth orbiting within the habitable zone of LHS 1140, a red dwarf star about 41 light-years away. What makes this system especially valuable for habitability research is that LHS 1140 is unusually quiet for a red dwarf, showing much less flare activity than more famous nearby red dwarfs like Proxima Centauri. Because intense stellar flares are a major threat to a close-in planet's ability to retain an atmosphere, LHS 1140 b's calmer host star makes it a higher-priority target for atmospheric characterization attempts with observatories like JWST, since any detected atmosphere is less likely to have been recently stripped away by stellar activity.",
        keyPoints: [
          'LHS 1140 b is a rocky super-Earth in the habitable zone of a red dwarf about 41 light-years away.',
          'Discovered via combined transit and radial velocity methods in 2017.',
          "Its host star's unusually low flare activity makes it a high-priority JWST atmospheric characterization target.",
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Kepler-452b has been confirmed to be a rocky, Earth-like planet.',
        reality:
          "Its radius (~1.6 Earth radii) is large enough that it could plausibly be either a rocky super-Earth or a gas-enveloped sub-Neptune; without a confident mass measurement, its true composition is still uncertain.",
      },
      {
        misconception: 'All red dwarf habitable-zone planets face the same flare-driven habitability risk as Proxima Centauri b.',
        reality:
          'Red dwarf activity varies significantly between stars; LHS 1140 is notably quieter than Proxima Centauri, making planets like LHS 1140 b comparatively more promising for retaining an atmosphere.',
      },
    ],
  },
]
