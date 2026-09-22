export const humanImpactFreshwaterExplanations = [
  {
    id: 'exp-hi-pollution-sources',
    topic: 'human-impact-freshwater',
    subtopic: 'pollution-sources',
    title: 'Point & Nonpoint Pollution Sources',
    sections: [
      {
        heading: 'Point Source vs. Nonpoint Source Pollution',
        content:
          "Water pollution is classified by whether it comes from a single, identifiable location or from diffuse sources spread across the landscape. Point source pollution originates from a discrete, identifiable outlet, such as a factory discharge pipe or a municipal sewage outfall; in the United States, point sources are regulated under the Clean Water Act's National Pollutant Discharge Elimination System (NPDES) permitting program, which sets enforceable limits on what can be discharged. Nonpoint source pollution, by contrast, comes from many diffuse sources across a watershed — agricultural runoff carrying fertilizers, pesticides, and animal waste; urban stormwater carrying oil, road salt, and sediment; and failing septic systems are common examples. Because nonpoint source pollution has no single controllable outlet, it is generally much harder to regulate and is the leading cause of water quality impairment in many U.S. rivers, lakes, and estuaries.",
        keyPoints: [
          'Point source = single identifiable discharge location, regulated via NPDES permits under the Clean Water Act.',
          'Nonpoint source = diffuse sources across a watershed (agricultural/urban runoff, septic systems).',
          'Nonpoint source pollution is harder to regulate and is a leading cause of water quality impairment.',
        ],
      },
      {
        heading: 'Measuring Organic Pollution: Biochemical Oxygen Demand',
        content:
          "Biochemical Oxygen Demand (BOD) is a standard water quality measurement of how much dissolved oxygen microorganisms consume while decomposing organic matter in a water sample, typically measured over 5 days (BOD5) under standardized laboratory conditions. High BOD values indicate a large amount of organic pollution — from sources like sewage, food processing waste, or agricultural runoff — and signal a risk that decomposition will deplete dissolved oxygen in the receiving water body faster than it can be replenished, potentially stressing or killing fish and other aquatic organisms.",
        keyPoints: [
          'BOD (typically BOD5) measures oxygen consumed by microbial decomposition of organic matter over 5 days.',
          'High BOD indicates heavy organic pollution and risk of oxygen depletion for aquatic life.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Calculating 5-Day BOD (BOD5)',
        problem:
          "A stream water sample has a dissolved oxygen (DO) concentration of 8.5 mg/L before incubation. After incubating the sealed, dark sample for 5 days, the DO has dropped to 5.5 mg/L. What is the BOD5 of the sample?",
        steps: [
          'BOD5 is calculated as the difference between the initial and final dissolved oxygen concentrations.',
          'BOD5 = Initial DO − Final DO',
          'BOD5 = 8.5 mg/L − 5.5 mg/L',
        ],
        answer: '3.0 mg/L',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Only industrial discharge counts as point source pollution.',
        reality: 'Point source pollution includes any pollution from a single identifiable outlet, including municipal sewage outfalls, not just industrial sources.',
      },
      {
        misconception: 'Nonpoint source pollution is a minor issue compared to point source pollution.',
        reality: 'Nonpoint source pollution — largely agricultural and urban runoff — is actually the leading cause of water quality impairment in many U.S. water bodies, partly because it is much harder to regulate than point sources.',
      },
    ],
  },
  {
    id: 'exp-hi-dams-reservoirs',
    topic: 'human-impact-freshwater',
    subtopic: 'dams-reservoirs',
    title: 'Dams & Reservoirs',
    sections: [
      {
        heading: 'Purposes and Benefits of Dams',
        content:
          "Dams are built across rivers for several key purposes: flood control (temporarily storing high flows to reduce downstream flood peaks), water supply (storing water for municipal, industrial, and agricultural irrigation use), hydroelectric power generation, and recreation. Hoover Dam, completed in 1936 on the Colorado River, stands 726.4 feet tall and impounds Lake Mead, the largest reservoir by storage capacity in the United States; the dam's hydroelectric turbines generate several billion kilowatt-hours of electricity annually, serving millions of people across Nevada, Arizona, and California.",
        keyPoints: [
          'Major dam purposes: flood control, water supply/irrigation, hydroelectric power, recreation.',
          'Example: Hoover Dam (726.4 ft tall) impounds Lake Mead, the largest U.S. reservoir by capacity.',
        ],
      },
      {
        heading: 'Ecological and Geomorphic Consequences',
        content:
          "Despite their benefits, dams significantly alter river ecosystems and geomorphology. Sediment that would normally move downstream instead settles out in the calm water of the reservoir, so water released below the dam carries little sediment; this sediment-starved water has excess energy to erode the downstream channel bed and banks, and coastlines or deltas that depended on that sediment supply can erode over time. Dams also block the natural migration routes of fish such as salmon, which is why many dams include fish ladders to help migratory fish bypass the barrier. Additionally, water released from deep within a reservoir is often colder than natural conditions (since it comes from the cool hypolimnion), which can disrupt the temperature-sensitive life cycles of downstream aquatic species. Because of these ecological costs, dam removal has become an increasingly used river restoration strategy in some cases where a dam's benefits no longer outweigh its ecological impacts.",
        keyPoints: [
          'Dams trap sediment, causing downstream channel/beach/delta erosion from sediment-starved water.',
          'Dams block fish migration routes; fish ladders are built to help mitigate this.',
          'Reservoir releases can alter downstream water temperature, affecting sensitive species.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Calculating Percent of Reservoir Capacity Filled',
        problem: 'A reservoir has a total storage capacity of 3.6 million cubic meters and currently holds 2.7 million cubic meters of water. What percentage of its capacity is currently filled?',
        steps: [
          'Divide the current storage volume by the total capacity: 2.7 ÷ 3.6',
          'Multiply by 100 to convert to a percentage',
        ],
        answer: '75%',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Dams have no meaningful negative environmental effects since hydropower is a renewable energy source.',
        reality: 'Despite providing renewable energy, flood control, and water storage, dams substantially alter sediment transport, water temperature, and fish migration routes, and can significantly degrade both reservoir and downstream ecosystems.',
      },
      {
        misconception: 'A reservoir functions ecologically just like a natural lake.',
        reality: 'Reservoirs typically have artificially controlled and often more variable water levels, altered sediment inputs, and different littoral zone dynamics compared to natural lakes, giving them distinct ecological characteristics.',
      },
    ],
  },
  {
    id: 'exp-hi-climate-change-freshwater',
    topic: 'human-impact-freshwater',
    subtopic: 'climate-change-freshwater',
    title: 'Climate Change Effects on Freshwater',
    sections: [
      {
        heading: 'Changing Precipitation and Snowpack Patterns',
        content:
          "In many temperate, mountainous regions, rivers depend heavily on winter snowpack — accumulated snow that melts gradually through spring and summer, acting as a natural water storage system that releases water when it's needed most, during the dry season. As temperatures warm, a larger share of winter precipitation falls as rain instead of snow, and the snow that does accumulate melts earlier in the year. Both effects shift the timing of peak river discharge earlier in the spring, and can substantially reduce the water available later in summer when snowpack would normally still be melting and agricultural and municipal water demand is often highest.",
        keyPoints: [
          'Warmer temperatures shift winter precipitation from snow toward rain and cause earlier snowmelt.',
          'This shifts peak streamflow earlier in the year and reduces summer water availability in snowmelt-dependent basins.',
        ],
      },
      {
        heading: 'Increased Hydrologic Variability: Droughts and Floods',
        content:
          "Climate change is also associated with increased variability in precipitation and streamflow in many regions — some areas experience more frequent or intense droughts, while others experience more frequent or intense heavy precipitation and flooding events, and some regions experience both at different times of year. Higher air temperatures also increase evaporation rates from reservoirs, lakes, and soil, compounding water scarcity during dry periods. For example, prolonged drought conditions combined with high water demand in the Colorado River basin have pushed Lake Mead — the largest U.S. reservoir — to record-low water levels in recent years, illustrating how a warming climate can strain even large, engineered water storage systems.",
        keyPoints: [
          'Climate change increases hydrologic variability, with many regions facing more intense droughts and/or floods.',
          'Higher temperatures increase evaporation from reservoirs and soils, worsening water scarcity during dry periods.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Climate change mainly affects oceans and coastal areas, not inland freshwater systems.',
        reality: 'Climate change significantly affects inland freshwater systems through altered precipitation patterns, snowpack decline, increased evaporation, and more frequent or intense droughts and floods.',
      },
      {
        misconception: 'All regions will see increased water availability as the climate warms.',
        reality: 'Effects vary regionally — some areas may see increased precipitation, but snowmelt-dependent basins and many arid regions face reduced and less reliable water availability, especially during summer.',
      },
    ],
  },
  {
    id: 'exp-hi-conservation-practices',
    topic: 'human-impact-freshwater',
    subtopic: 'conservation-practices',
    title: 'Conservation & Best Management Practices',
    sections: [
      {
        heading: 'Best Management Practices for Reducing Nonpoint Source Pollution',
        content:
          "Because nonpoint source pollution comes from diffuse locations, it is addressed through Best Management Practices (BMPs) rather than a single discharge permit. In agricultural settings, common BMPs include planting riparian buffer strips of vegetation along waterways to filter runoff and stabilize banks, using cover crops and reduced tillage to limit soil erosion, and applying fertilizer at controlled rates and times to minimize excess nutrient runoff. In urban settings, BMPs include permeable pavement that allows stormwater to infiltrate rather than run off, bioswales and rain gardens that capture and filter runoff, and detention or retention basins that slow the release of stormwater after storms.",
        keyPoints: [
          'Agricultural BMPs: riparian buffers, cover crops, reduced tillage, controlled fertilizer application.',
          'Urban BMPs: permeable pavement, bioswales/rain gardens, stormwater detention/retention basins.',
        ],
      },
      {
        heading: 'Water Conservation and Demand Management',
        content:
          "Alongside pollution-focused BMPs, water conservation practices reduce overall demand on freshwater resources. These include installing low-flow fixtures and appliances in homes and businesses, using efficient irrigation methods like drip irrigation instead of flood irrigation, treating and reusing wastewater for non-potable purposes, detecting and repairing leaks in municipal water systems, and landscaping with drought-tolerant native plants (xeriscaping) to reduce outdoor water use. Tiered water pricing, which charges higher rates for higher usage, is also used by some municipalities to encourage conservation.",
        keyPoints: [
          'Conservation practices: low-flow fixtures, drip irrigation, water reuse/recycling, leak detection, xeriscaping.',
          'Demand-management tools like tiered water pricing can also encourage conservation.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Best Management Practices are only relevant to farmers.',
        reality: 'BMPs apply broadly across agricultural, urban, and residential settings — urban BMPs like permeable pavement and rain gardens address stormwater runoff just as agricultural BMPs address farm runoff.',
      },
      {
        misconception: 'Small individual conservation actions, like installing low-flow fixtures, make no meaningful difference.',
        reality: 'At scale, widespread adoption of relatively small water-saving measures across many households and businesses can meaningfully reduce total municipal water demand and stress on freshwater sources.',
      },
    ],
  },
]
