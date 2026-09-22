export const streamsRiversFR = [
  {
    id: 'fr-sr-001',
    topic: 'streams-rivers',
    subtopic: 'Stream Flow & Discharge',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question:
      "Explain how a stream's discharge is calculated, and describe two factors that cause discharge to vary along a stream's course or over time.",
    modelAnswer:
      "Discharge (Q) is the volume of water passing a fixed point in a stream per unit time, calculated with the continuity equation Q = A × V, where A is the cross-sectional area of the channel and V is the average flow velocity. Discharge varies for several reasons. First, it varies over time at a single location because of precipitation and snowmelt inputs — after a storm, runoff raises both channel depth and velocity, increasing discharge, while during dry periods discharge falls back toward a baseflow level sustained by groundwater seepage. Second, discharge typically increases moving downstream along a river system because tributaries add water along the way, even though the individual channel's gradient generally decreases; conversely, in arid regions, discharge can actually decrease downstream due to evaporation, infiltration, and water withdrawal for irrigation.",
    keyPoints: [
      'States Q = A × V correctly',
      'Explains temporal variation (storms/snowmelt increase discharge; baseflow sustains dry periods)',
      'Explains spatial/downstream variation (tributary input generally increases discharge downstream)',
    ],
  },
  {
    id: 'fr-sr-002',
    topic: 'streams-rivers',
    subtopic: 'Drainage Patterns & Basins',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Describe three types of drainage patterns and explain the geologic or topographic condition responsible for each.',
    modelAnswer:
      "Dendritic drainage patterns branch irregularly like a tree and develop where the underlying rock is relatively uniform in resistance and flat-lying, with no strong structural control over tributary orientation. Radial drainage patterns show streams flowing outward in all directions from a central high point and form on isolated conical or dome-shaped landforms such as volcanoes or structural domes. Trellis drainage patterns feature parallel main channels with tributaries joining at sharp, near-right angles and typically develop in areas of folded or tilted sedimentary rock where alternating bands of resistant and weak rock create parallel ridges and valleys that guide the tributaries. Rectangular drainage patterns show channels making sharp right-angle bends and form where the bedrock is broken by a grid of perpendicular joints or faults that are more easily eroded than the surrounding rock.",
    keyPoints: [
      'Dendritic — uniform, flat-lying bedrock, tree-like branching',
      'Radial — volcano/dome, streams radiate outward from a central peak',
      'Trellis — folded/tilted alternating resistant and weak rock layers',
      'Rectangular (or additional valid pattern) — jointed/faulted bedrock controlling right-angle bends',
    ],
  },
  {
    id: 'fr-sr-003',
    topic: 'streams-rivers',
    subtopic: 'Stream Order & Channel Morphology',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Explain the rules of the Strahler stream ordering system, and use an example to show how order changes (or does not change) at a confluence.',
    modelAnswer:
      "In the Strahler system, headwater channels with no upstream tributaries are designated 1st-order streams. At a confluence, if the two joining streams are of the SAME order, the resulting downstream segment increases by one order — for example, two 2nd-order streams merging produce a 3rd-order stream. If the two joining streams are of DIFFERENT orders, the resulting stream simply retains the higher of the two orders rather than increasing — for example, a 1st-order stream joining a 3rd-order stream produces a stream that remains 3rd order, since the smaller tributary does not add enough network complexity to raise the order. This system lets geologists quantify a stream's position and relative size within its drainage network hierarchy.",
    keyPoints: [
      '1st-order = headwater stream with no tributaries',
      'Equal orders merging → order increases by one',
      'Unequal orders merging → combined stream keeps the higher order',
      'Correct worked example illustrating the rule',
    ],
  },
  {
    id: 'fr-sr-004',
    topic: 'streams-rivers',
    subtopic: 'Floodplains & Meanders',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      "Describe the process by which a meandering stream evolves over time to form an oxbow lake, and explain the depositional features found on a stream's floodplain.",
    modelAnswer:
      "A meandering stream develops sinuous bends because flow is naturally asymmetric: on the outside of each bend, faster and deeper flow erodes the bank, forming a steep cut bank, while on the inside of the bend, slower and shallower flow deposits sediment, building a gently sloping point bar. This ongoing erosion and deposition causes the meander to migrate laterally across the valley and to shift downstream over time. As successive bends migrate, the neck of land separating two adjacent loops narrows. Eventually, often during a flood when the river takes the shortest, steepest path, the river cuts through the narrow neck, abandoning the old meander loop; the abandoned loop, disconnected from active flow, becomes a crescent-shaped oxbow lake that gradually fills with fine sediment and organic matter. On the surrounding floodplain, when the river overtops its banks during high flow, water spreads out and slows abruptly, dropping its coarser sediment first close to the channel to build low ridges called natural levees, while finer silts and clays are carried farther out into low-lying backswamp areas where they settle out, gradually building up the floodplain surface with each flood event.",
    keyPoints: [
      'Cut bank erosion (outer bend, faster flow) vs. point bar deposition (inner bend, slower flow)',
      'Meander migration over time leads to a narrowing neck',
      'Flood-driven cutoff isolates the loop, forming an oxbow lake',
      'Natural levees (coarse sediment near channel) vs. backswamps (fine sediment farther away)',
    ],
  },
]
