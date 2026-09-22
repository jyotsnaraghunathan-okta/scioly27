export const streamsRiversExplanations = [
  {
    id: 'exp-sr-stream-flow-discharge',
    topic: 'streams-rivers',
    subtopic: 'stream-flow-discharge',
    title: 'Stream Flow & Discharge',
    sections: [
      {
        heading: 'Discharge: The Continuity Equation',
        content:
          "Discharge (Q) is the volume of water passing a fixed cross-section of a stream per unit time. It is calculated with the continuity equation Q = A × V, where A is the cross-sectional area of the channel (width × average depth, for a simplified rectangular approximation) and V is the average flow velocity. Discharge is usually reported in cubic meters per second (m³/s) or cubic feet per second (cfs).\n\nBecause A and V can each change independently, discharge at a single location is not constant — it rises during storms and snowmelt and falls during dry periods. Moving downstream along a single river under normal (non-flood) conditions, discharge generally increases as tributaries add water, even as the channel gradient decreases.",
        keyPoints: [
          'Q = A × V is the fundamental discharge equation.',
          'Discharge typically increases downstream as tributaries contribute additional flow.',
          'Velocity is not uniform across a cross-section — friction from the bed and banks slows water near the margins.',
        ],
      },
      {
        heading: 'Monitoring Discharge: Gauging Stations and Hydrographs',
        content:
          "Discharge is monitored using stream gauging stations that continuously record stage (water surface elevation) and convert it to discharge using a site-specific rating curve. Plotting discharge over time produces a hydrograph, which typically shows a baseflow level (sustained by groundwater seepage into the channel) punctuated by peaks after precipitation events.\n\nA flood hydrograph has a rising limb (as runoff reaches the channel), a peak, and a falling limb (as runoff recedes) with a slower recession as baseflow contribution dominates again. Watersheds with more impervious surface, steeper slopes, or less vegetation tend to produce hydrographs with faster rising limbs, higher peaks, and shorter lag times between rainfall and peak discharge.",
        keyPoints: [
          'Hydrographs plot discharge versus time and reveal baseflow, rising limb, peak, and falling limb.',
          'Urbanization and impervious surfaces shorten lag time and raise peak discharge for a given storm.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Calculating Discharge',
        problem: 'A stream channel has a cross-sectional area of 8 m² and flows at an average velocity of 1.5 m/s. What is the discharge?',
        steps: ['Identify the variables: A = 8 m², V = 1.5 m/s', 'Apply the continuity equation: Q = A × V', 'Q = 8 m² × 1.5 m/s = 12 m³/s'],
        answer: '12 m³/s',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Stream velocity is the same everywhere across a channel cross-section.',
        reality:
          'Velocity varies significantly due to friction with the bed and banks — it is fastest near the surface at the center of straight channel reaches, and shifts toward the outer bank in meander bends.',
      },
      {
        misconception: 'A wider stream always has greater discharge than a narrower one.',
        reality:
          'Discharge depends on the product of area AND velocity — a narrow, deep, fast-flowing stream can carry more discharge than a wide, shallow, slow one.',
      },
    ],
  },
  {
    id: 'exp-sr-stream-order',
    topic: 'streams-rivers',
    subtopic: 'stream-order',
    title: 'Stream Order & Channel Morphology',
    sections: [
      {
        heading: 'The Strahler Stream Ordering System',
        content:
          "Stream order is a way of quantifying the position of a channel segment within a drainage network's branching hierarchy, developed by Robert Horton and refined by Arthur Strahler. A headwater channel with no tributaries upstream is a 1st-order stream. When two streams of the SAME order converge, the resulting downstream segment increases by one order (two 1st-order streams produce a 2nd-order stream). When two streams of DIFFERENT order converge, the resulting stream simply keeps the higher of the two orders (a 1st-order stream joining a 3rd-order stream does not raise it to 4th order).\n\nThe ratio of the number of streams of one order to the number of the next higher order is the bifurcation ratio; it is typically between 3 and 5 for natural drainage networks. Because most channels in a basin are low-order headwater streams, stream order is a useful proxy for a stream's position, size, and general discharge within its watershed, though it is not a substitute for directly measured discharge.",
        keyPoints: [
          'Order increases by one ONLY when two streams of equal order merge.',
          'A lower-order tributary joining a higher-order stream does not change the higher order.',
          'Bifurcation ratio (streams of order n ÷ streams of order n+1) is typically 3–5 in natural networks.',
        ],
      },
      {
        heading: 'Downstream Trends in Channel Morphology',
        content:
          'As stream order increases moving downstream in a system that is not being disrupted by structural or bedrock controls, several channel characteristics tend to change predictably: channel width, depth, and discharge generally increase, while channel gradient and average sediment particle size generally decrease. Channel patterns can also shift — steep headwater reaches are often straight or step-pool channels, while lower-gradient, higher-order reaches downstream more commonly develop meandering or braided patterns depending on sediment supply and bank material.',
        keyPoints: [
          'Width, depth, and discharge typically increase with stream order/downstream distance.',
          'Gradient and average sediment size typically decrease downstream.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Tracing Stream Order Through a Confluence Network',
        problem:
          'A 1st-order tributary joins a 2nd-order stream. Farther downstream, the resulting stream is joined by another 2nd-order tributary. What is the final stream order?',
        steps: [
          'Step 1: A 1st-order stream joins a 2nd-order stream — since the orders are unequal, the combined stream keeps the higher order (2nd).',
          'Step 2: That 2nd-order stream is then joined by another 2nd-order tributary — since the orders are equal, the combined stream increases by one order.',
          'Step 3: 2nd order + 2nd order → 3rd order.',
        ],
        answer: '3rd order',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Stream order increases every time any tributary joins the main channel.',
        reality: 'Order only increases when two streams of the SAME order merge; a lower-order tributary joining a higher-order stream leaves the order unchanged.',
      },
      {
        misconception: 'Stream order is a precise, direct measurement of discharge.',
        reality: 'Stream order is a topological classification of network position; actual discharge for a given order can vary widely depending on climate, basin size, and geology.',
      },
    ],
  },
  {
    id: 'exp-sr-erosion-deposition',
    topic: 'streams-rivers',
    subtopic: 'erosion-deposition',
    title: 'Erosion & Deposition Processes',
    sections: [
      {
        heading: 'Mechanisms of Stream Erosion',
        content:
          "Streams erode their channels and banks through several mechanisms. Hydraulic action is the sheer mechanical force of flowing water dislodging and lifting loose particles from the bed and banks. Abrasion (also called corrasion) occurs when sediment particles carried by the stream grind against the channel, wearing away bedrock and rounding the particles themselves. Solution is the chemical dissolution of soluble minerals — most notably in limestone and other carbonate rocks — as slightly acidic water reacts with the rock. Attrition refers to sediment particles colliding with each other, breaking down into smaller, more rounded fragments as they travel downstream.",
        keyPoints: [
          'Hydraulic action: mechanical force of water dislodging material.',
          'Abrasion: sediment grinding against the channel and against itself.',
          'Solution: chemical dissolving of soluble rock (e.g., limestone).',
        ],
      },
      {
        heading: 'Sediment Load, Competence, and Capacity',
        content:
          "A stream transports sediment as bed load (coarse particles rolled, slid, or bounced along the channel bottom), suspended load (fine particles held aloft by turbulence within the water column), and dissolved load (ions in solution, invisible but often a large fraction of total transported material, especially in basins with soluble bedrock).\n\nTwo related but distinct concepts describe a stream's transport ability: competence is the largest particle size a stream can move at a given velocity, while capacity is the total quantity (mass or volume) of sediment a stream can carry. Because competence relates strongly to velocity, a stream can suddenly drop its coarsest load when velocity decreases — for example, at a meander's point bar, at a channel mouth forming a delta, or wherever gradient abruptly lessens.",
        keyPoints: [
          'Sediment load = bed load + suspended load + dissolved load.',
          'Competence = largest particle size transportable; capacity = total sediment quantity transportable.',
          'A drop in velocity causes coarse sediment to be deposited first (largest particles settle out sooner).',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Erosion and deposition are separate processes that occur in entirely different parts of a river.',
        reality: 'Erosion and deposition happen simultaneously throughout a river system — for example, a single meander bend erodes at its cut bank while depositing at its point bar at the same time.',
      },
      {
        misconception: 'A stream with a large sediment load is always eroding aggressively.',
        reality: 'A stream can carry a heavy sediment load while depositing much of it, especially if velocity has decreased — heavy sediment load reflects supply and transport capacity, not erosion rate alone.',
      },
    ],
  },
  {
    id: 'exp-sr-floodplains-meanders',
    topic: 'streams-rivers',
    subtopic: 'floodplains-meanders',
    title: 'Floodplains & Meanders',
    sections: [
      {
        heading: 'How Meanders Form and Migrate',
        content:
          "Meanders develop because flow in a channel is rarely perfectly straight — any slight irregularity directs faster current toward one bank, initiating a bend. On the outside of a bend, flow is faster and deeper, undercutting and eroding the bank to form a steep cut bank. On the inside of the bend, flow is slower and shallower, depositing sediment to build a gently sloping point bar. Over time, this asymmetric erosion and deposition causes the meander to migrate laterally and to migrate downstream, continually reshaping the channel's course across its floodplain.\n\nAs meanders migrate, the neck separating two adjacent bends narrows. During a high-flow event (often a flood), the river may cut directly across the narrow neck, abandoning the meander loop. The abandoned loop, no longer part of the active channel, becomes an oxbow lake, which gradually fills with fine sediment and organic matter over time.",
        keyPoints: [
          'Cut banks (outer bend, faster flow) erode; point bars (inner bend, slower flow) accumulate sediment.',
          'Continued lateral erosion/deposition causes meanders to migrate across the floodplain over time.',
          'A meander cutoff during high flow isolates the old bend, forming an oxbow lake.',
        ],
      },
      {
        heading: 'Floodplain Deposits',
        content:
          "A floodplain is the relatively flat land bordering a stream channel that is periodically inundated during high-flow events. When floodwaters overtop the banks and spread across the floodplain, they slow down rapidly, causing coarser sediment to drop out close to the channel — building low ridges called natural levees — while finer silts and clays are carried farther out and settle in low-lying backswamp areas. Repeated flooding builds up floodplain sediments over time, and these deposits (along with abandoned channel features like oxbow lakes) record the river's shifting history across the landscape.",
        keyPoints: [
          'Floodplains are built and maintained by repeated overbank flooding.',
          'Natural levees (coarser sediment) form close to the channel; backswamps (finer sediment) form farther away.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Floodplains only matter during floods and are otherwise just flat, empty land.',
        reality: 'Floodplains support natural levees, wetlands, and fertile agricultural soils, and they provide critical flood storage capacity that reduces downstream flood peaks when left undeveloped.',
      },
      {
        misconception: 'Once an oxbow lake forms, it stays connected to the main river.',
        reality: 'An oxbow lake is cut off from the main channel and only receives water from the river again during major floods; over time it fills with fine sediment and organic matter and may become a wetland.',
      },
    ],
  },
]
