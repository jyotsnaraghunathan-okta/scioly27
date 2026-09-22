export const streamsRiversDefinitions = [
  {
    id: 'def-sr-001',
    term: 'Discharge',
    definition:
      'The volume of water flowing past a fixed point in a stream channel per unit of time, calculated as Q = A × V (cross-sectional area multiplied by average velocity). Usually reported in cubic meters per second (m³/s) or cubic feet per second (cfs).',
    example:
      'A stream with a cross-sectional area of 12 m² and an average velocity of 0.8 m/s has a discharge of 9.6 m³/s.',
    relatedTerms: ['Stream Velocity', 'Cross-Sectional Area', 'Hydrograph'],
    topic: 'streams-rivers',
    subtopic: 'Stream Flow & Discharge',
  },
  {
    id: 'def-sr-002',
    term: 'Stream Velocity',
    definition:
      'The speed at which water moves through a channel, controlled by gradient, channel shape, roughness, and discharge. Velocity is not uniform across a cross-section — friction from the bed and banks slows water near the channel margins.',
    example:
      'In a straight channel reach, velocity is typically fastest near the surface at the center of the channel; in a meander bend, the fastest flow shifts toward the outer bank.',
    relatedTerms: ['Discharge', 'Channel Roughness', 'Thalweg'],
    topic: 'streams-rivers',
    subtopic: 'Stream Flow & Discharge',
  },
  {
    id: 'def-sr-003',
    term: 'Gauging Station',
    definition:
      'A fixed monitoring site on a stream where stage (water height) and discharge are measured continuously, used to build hydrographs, forecast floods, and track long-term flow trends.',
    example:
      'The USGS operates thousands of stream gauging stations across the U.S. that report real-time discharge data.',
    relatedTerms: ['Discharge', 'Hydrograph', 'Stage Height'],
    topic: 'streams-rivers',
    subtopic: 'Stream Flow & Discharge',
  },
  {
    id: 'def-sr-004',
    term: 'Stream Gradient',
    definition:
      'The slope of a stream channel, expressed as vertical drop in elevation divided by horizontal distance. Gradients are typically steep near headwaters and progressively gentler toward the mouth.',
    example: 'A stream that drops 50 m of elevation over a 10 km reach has a gradient of 5 m/km.',
    relatedTerms: ['Longitudinal Profile', 'Base Level', 'Stream Velocity'],
    topic: 'streams-rivers',
    subtopic: 'Stream Flow & Discharge',
  },
  {
    id: 'def-sr-005',
    term: 'Drainage Basin (Watershed)',
    definition:
      'The total land area from which surface runoff and groundwater drain into a single stream, river, or river system, bounded by topographic divides.',
    example: 'The Mississippi River drainage basin covers roughly 40% of the land area of the contiguous United States.',
    relatedTerms: ['Drainage Divide', 'Tributary', 'Drainage Density'],
    topic: 'streams-rivers',
    subtopic: 'Drainage Patterns & Basins',
  },
  {
    id: 'def-sr-006',
    term: 'Drainage Divide',
    definition: 'A ridge of high land that separates two adjacent drainage basins, directing runoff toward different river systems.',
    example: 'The Continental Divide separates North American basins draining to the Pacific Ocean from those draining toward the Atlantic Ocean and Gulf of Mexico.',
    relatedTerms: ['Drainage Basin', 'Watershed'],
    topic: 'streams-rivers',
    subtopic: 'Drainage Patterns & Basins',
  },
  {
    id: 'def-sr-007',
    term: 'Drainage Density',
    definition:
      'The total length of stream channels per unit area within a drainage basin. High drainage density suggests impermeable or easily eroded surface materials and/or high rainfall; low density suggests permeable rock or low relief.',
    example: 'Arid badlands underlain by impermeable clay often show very high drainage density with closely spaced channels.',
    relatedTerms: ['Drainage Basin', 'Infiltration', 'Porosity'],
    topic: 'streams-rivers',
    subtopic: 'Drainage Patterns & Basins',
  },
  {
    id: 'def-sr-008',
    term: 'Stream Order (Strahler)',
    definition:
      'A hierarchical numbering system for classifying stream segments: headwater channels with no tributaries are 1st order; when two streams of equal order meet, the resulting stream is one order higher; when streams of unequal order meet, the combined stream keeps the higher order.',
    example: 'Two 2nd-order streams joining produce a 3rd-order stream, but a 1st-order stream joining a 3rd-order stream keeps it at 3rd order.',
    relatedTerms: ['Tributary', 'Confluence', 'Bifurcation Ratio'],
    topic: 'streams-rivers',
    subtopic: 'Stream Order & Channel Morphology',
  },
  {
    id: 'def-sr-009',
    term: 'Braided Stream',
    definition:
      'A channel pattern consisting of multiple shifting, interweaving channels separated by temporary sand and gravel bars, typically formed where sediment load is high relative to discharge and banks are easily eroded.',
    example: 'Glacial meltwater streams below retreating glaciers are commonly braided due to heavy sediment loads and variable discharge.',
    relatedTerms: ['Sediment Load', 'Channel Pattern', 'Meandering Stream'],
    topic: 'streams-rivers',
    subtopic: 'Stream Order & Channel Morphology',
  },
  {
    id: 'def-sr-010',
    term: 'Meander',
    definition:
      "A pronounced, sinuous bend in a stream's course, produced by lateral erosion on the outside of the bend (cut bank) and deposition on the inside of the bend (point bar).",
    example: 'The lower Mississippi River is famous for its large, actively migrating meanders.',
    relatedTerms: ['Cut Bank', 'Point Bar', 'Oxbow Lake'],
    topic: 'streams-rivers',
    subtopic: 'Floodplains & Meanders',
  },
  {
    id: 'def-sr-011',
    term: 'Oxbow Lake',
    definition:
      "A crescent-shaped lake formed when a meander's narrow neck is cut off from the main channel — often during a flood — isolating the former bend from active flow.",
    example: 'Oxbow lakes dot the floodplain of the lower Mississippi River, marking the former positions of the channel.',
    relatedTerms: ['Meander', 'Floodplain', 'Cutoff'],
    topic: 'streams-rivers',
    subtopic: 'Floodplains & Meanders',
  },
  {
    id: 'def-sr-012',
    term: 'Base Level',
    definition:
      'The lowest elevation to which a stream can erode its channel. Sea level is the ultimate base level for streams draining to the ocean; lakes, resistant rock layers, or reservoirs can serve as temporary (local) base levels.',
    example: 'Building a dam creates a new local base level upstream, causing the stream to deposit sediment and reduce its gradient in the reservoir.',
    relatedTerms: ['Longitudinal Profile', 'Stream Gradient', 'Erosion'],
    topic: 'streams-rivers',
    subtopic: 'Stream Flow & Discharge',
  },
]
