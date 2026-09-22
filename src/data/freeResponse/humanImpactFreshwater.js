export const humanImpactFreshwaterFR = [
  {
    id: 'fr-hi-001',
    topic: 'human-impact-freshwater',
    subtopic: 'Pollution Sources',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question:
      'Explain the difference between point source and nonpoint source water pollution, and explain why nonpoint source pollution is generally more difficult to control.',
    modelAnswer:
      "Point source pollution comes from a single, identifiable discharge location, such as a factory outflow pipe or a sewage treatment plant outfall, which makes it possible to monitor and regulate through a specific permit, such as an NPDES permit under the Clean Water Act. Nonpoint source pollution, in contrast, comes from many diffuse locations spread across a watershed, such as fertilizer and pesticide runoff from numerous farm fields or oil and sediment washed off city streets during storms. Nonpoint source pollution is generally harder to control because there is no single pipe or outlet to regulate or inspect; instead, reducing it requires changing land-use practices and encouraging voluntary or incentivized adoption of best management practices across many landowners, which is logistically and politically more difficult than issuing and enforcing a single discharge permit.",
    keyPoints: [
      'Correctly defines point source (single identifiable location)',
      'Correctly defines nonpoint source (diffuse, many locations)',
      'Explains why nonpoint source is harder to regulate (no single controllable outlet, requires widespread land-use changes)',
    ],
  },
  {
    id: 'fr-hi-002',
    topic: 'human-impact-freshwater',
    subtopic: 'Dams & Reservoirs',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question: 'Describe two benefits and two ecological drawbacks of building a large dam on a river.',
    modelAnswer:
      "Building a large dam provides several benefits: it can generate hydroelectric power, providing a renewable source of electricity, and it enables flood control by allowing engineers to temporarily store high flows during storms and release them more gradually, reducing downstream flood peaks. However, dams also create significant ecological drawbacks. First, a dam traps sediment that would normally move downstream in its reservoir, so the water released below the dam is sediment-starved and has excess energy to erode the downstream channel bed and banks, while downstream beaches and deltas can lose the sediment supply that once maintained them. Second, a dam creates a physical barrier that can block the migration routes of fish such as salmon that need to travel upstream to spawn, fragmenting river habitat and reducing fish populations unless mitigation structures like fish ladders are installed.",
    keyPoints: [
      'Identifies two valid benefits (e.g., hydroelectric power, flood control, water supply, irrigation, recreation)',
      'Identifies sediment trapping and downstream erosion/delta starvation as an ecological drawback',
      'Identifies fish migration disruption/habitat fragmentation as an ecological drawback',
      'Explains the mechanism behind at least one benefit and one drawback',
    ],
  },
  {
    id: 'fr-hi-003',
    topic: 'human-impact-freshwater',
    subtopic: 'Climate Change & Freshwater',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question: 'Explain how climate change is expected to alter the timing and amount of streamflow in rivers that depend on mountain snowmelt.',
    modelAnswer:
      "Rivers that depend on mountain snowmelt rely on winter snowpack acting as a natural water storage system: snow accumulates during the cold months and melts gradually through spring and summer, releasing water to rivers over an extended period, including during the dry season when it is most needed. As the climate warms, a greater share of winter precipitation falls as rain rather than snow, and the snow that does accumulate melts earlier in the year. Both effects shift the seasonal peak of river discharge earlier in spring, closer to when the precipitation actually falls, rather than being delayed and spread out through the summer by gradual snowmelt. As a result, less snowmelt-derived water remains available later in summer, reducing streamflow and water supply during the season when agricultural irrigation and municipal water demand are often at their highest, increasing the risk of water shortages and drought stress in snowmelt-dependent river basins.",
    keyPoints: [
      'Explains that snowpack normally provides delayed, gradual water release through spring/summer',
      'Explains that warming shifts precipitation from snow to rain and causes earlier snowmelt',
      'Explains that this shifts peak streamflow earlier in the year',
      'Explains the consequence: reduced summer/late-season water availability in snowmelt-dependent basins',
    ],
  },
  {
    id: 'fr-hi-004',
    topic: 'human-impact-freshwater',
    subtopic: 'Water Rights & Management',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question: 'Compare the riparian rights and prior appropriation doctrines of water rights, and explain how each would handle a water shortage differently.',
    modelAnswer:
      "Riparian rights, the doctrine common in the Eastern United States, grants the right to make reasonable use of water to landowners whose property borders the water source; because the right is tied to land ownership adjacent to the water body, all riparian landowners along a stream generally have a roughly equal right to reasonable use, and during a shortage they are typically expected to share reductions proportionally so that no single riparian owner is entirely cut off while others use water freely. Prior appropriation, the doctrine common in the arid Western United States, instead allocates water rights based on the order in which they were established, following the principle of 'first in time, first in right,' regardless of whether the water right holder's land actually borders the water source. During a shortage under prior appropriation, the water right holders with the oldest (most senior) rights are entitled to their full allocation first, while junior water right holders — those who established their rights more recently — may have their water use curtailed or eliminated entirely before any senior right is reduced. This reflects the different historical water scarcity conditions each doctrine developed under: riparian rights assume relatively abundant, reliable water supplies suited to humid climates, while prior appropriation was designed to provide certainty for early water users developing arid Western lands where water is a much scarcer, more contested resource.",
    keyPoints: [
      'Correctly describes riparian rights: tied to land bordering water, roughly proportional/shared use',
      'Correctly describes prior appropriation: based on seniority ("first in time, first in right"), independent of land location',
      'Explains riparian shortage handling: proportional reduction among riparian owners',
      'Explains prior appropriation shortage handling: senior rights fully honored before junior rights',
      'Notes the regional/historical context (Eastern humid climate vs. Western arid climate) for why each doctrine developed',
    ],
  },
]
