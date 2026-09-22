export const groundwaterAquifersFR = [
  {
    id: 'fr-ga-001',
    topic: 'groundwater-aquifers',
    subtopic: 'Porosity & Permeability',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question: 'Explain the difference between porosity and permeability, and describe why clay can have high porosity but low permeability.',
    modelAnswer:
      "Porosity is the percentage of a material's total volume made up of open pore space, describing how much water it can potentially hold. Permeability is a measure of how easily water can actually flow through a material's connected pore network, which depends on pore size and how well the pores connect to one another, not just the total amount of pore space. Clay can have very high porosity because its extremely fine particles pack together loosely, leaving a large total volume of space between grains. However, clay has very low permeability because those pore spaces are extremely small and poorly connected, so water molecules move through very slowly due to strong molecular attraction to the clay particle surfaces — this is why clay makes a poor aquifer material despite holding a lot of water.",
    keyPoints: [
      'Correctly defines porosity as percentage of pore space',
      'Correctly defines permeability as ease of water flow through connected pores',
      'Explains that permeability depends on pore connectivity/size, not just porosity',
      "Explains clay's high porosity / low permeability using pore size and connectivity",
    ],
  },
  {
    id: 'fr-ga-002',
    topic: 'groundwater-aquifers',
    subtopic: 'Confined vs Unconfined Aquifers',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Compare confined and unconfined aquifers, including how their upper boundaries are described and how each responds to pumping and surface contamination.',
    modelAnswer:
      "An unconfined aquifer has no aquitard directly above it and is bounded on top by the water table, the surface where pore pressure equals atmospheric pressure; it is directly connected to the surface through the overlying unsaturated zone. A confined aquifer, by contrast, is sandwiched between two aquitards (low-permeability confining layers), so its water is held under pressure greater than atmospheric; instead of a water table, its pressure condition is described by a potentiometric surface, the level to which water would rise in a well tapping the aquifer. Because unconfined aquifers recharge broadly wherever surface water infiltrates, they generally respond more quickly to precipitation and to pumping, but this same direct surface connection makes them more vulnerable to contamination from the land surface. Confined aquifers recharge more slowly, typically only where the aquifer is exposed at the surface far from the pumping location, and the overlying aquitard offers them more protection from surface contamination.",
    keyPoints: [
      'Unconfined aquifer: water table boundary, direct surface connection',
      'Confined aquifer: potentiometric surface, bounded by aquitards, pressure > atmospheric',
      'Unconfined aquifers recharge faster but are more vulnerable to contamination',
      'Confined aquifers recharge slowly through a limited recharge zone and are more protected',
    ],
  },
  {
    id: 'fr-ga-003',
    topic: 'groundwater-aquifers',
    subtopic: 'Wells & Springs',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question: 'Explain what causes a cone of depression to form around a pumping well, and describe how overlapping cones of depression from multiple wells can affect a region.',
    modelAnswer:
      "When a well is pumped, water is withdrawn from the aquifer faster than the surrounding material can immediately resupply it, causing the water table (or potentiometric surface, in a confined aquifer) to drop close to the well. Because the drop in water level is greatest right at the well and lessens with distance away, this creates a roughly cone-shaped depression in the water table called a cone of depression. If multiple wells are pumped near each other, their individual cones of depression can overlap and combine, causing a larger and deeper overall decline in the regional water table than any single well would cause alone. This well interference can reduce the yield of nearby wells, lower water levels in wetlands or streams connected to the aquifer, and in extreme cases contribute to land subsidence, which is why water managers often regulate well spacing and total pumping rates in heavily used aquifers.",
    keyPoints: [
      'Explains that pumping removes water faster than local resupply, lowering the water table near the well',
      'Correctly describes the cone-shaped depression, greatest at the well and lessening with distance',
      'Explains that overlapping cones of depression from multiple wells cause greater regional decline',
      'Mentions a consequence (well interference, reduced yields, subsidence, or effects on connected surface water)',
    ],
  },
  {
    id: 'fr-ga-004',
    topic: 'groundwater-aquifers',
    subtopic: 'Aquifer Recharge & Contamination',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      'Distinguish between point source and nonpoint source groundwater contamination, and explain why unconfined and karst aquifers are especially vulnerable to contamination.',
    modelAnswer:
      "Point source contamination comes from a single, identifiable location, such as a leaking underground storage tank, a failing septic system, or an industrial spill, making the source relatively easy to locate and often regulate directly. Nonpoint source contamination comes from diffuse sources spread across a wide area, such as fertilizer and pesticide runoff from agricultural fields or urban stormwater carrying road salts and oils, making it much harder to trace to a single origin or to control with a single fix. Unconfined aquifers are especially vulnerable to both types of contamination because they lack a protective aquitard above them; instead, they are directly connected to the land surface through the unsaturated zone, so pollutants that infiltrate the soil can travel relatively directly down to the water table. Karst aquifers, formed in soluble rock such as limestone, are particularly vulnerable because groundwater there often flows rapidly through open solution channels, sinkholes, and caves rather than slowly filtering through small pore spaces, meaning contaminants can travel long distances quickly with very little natural filtration to remove or dilute them before they reach wells or springs.",
    keyPoints: [
      'Correctly distinguishes point source (single, identifiable) from nonpoint source (diffuse, widespread) contamination with examples',
      'Explains that unconfined aquifers lack a protective aquitard, allowing direct infiltration from the surface',
      'Explains that karst aquifers have rapid conduit flow through solution channels with little filtration',
      'Draws a clear connection between aquifer type/geology and contamination vulnerability',
    ],
  },
]
