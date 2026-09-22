export const groundwaterAquifersDefinitions = [
  {
    id: 'def-ga-001',
    term: 'Porosity',
    definition:
      "The percentage of a rock or sediment's total volume that consists of open pore space capable of holding water. Well-sorted sand typically has porosity around 30–50%, while clay and silt can exceed 40–70% (though much of that water is not easily released).",
    example: 'A soil sample with a total volume of 200 cm³ that holds 60 cm³ of water when saturated has a porosity of 30%.',
    relatedTerms: ['Permeability', 'Specific Yield', 'Aquifer'],
    topic: 'groundwater-aquifers',
    subtopic: 'Porosity & Permeability',
  },
  {
    id: 'def-ga-002',
    term: 'Permeability',
    definition:
      "A material's capacity to transmit fluid through its connected pore spaces. Permeability depends on pore size, shape, and how well pores are interconnected — not just total porosity — which is why clay can have high porosity but very low permeability.",
    example: 'Well-sorted gravel has high permeability because its large, well-connected pores let water flow through easily, while clay has low permeability despite high porosity because its pores are tiny and poorly connected.',
    relatedTerms: ['Porosity', 'Hydraulic Conductivity', 'Aquitard'],
    topic: 'groundwater-aquifers',
    subtopic: 'Porosity & Permeability',
  },
  {
    id: 'def-ga-003',
    term: 'Specific Yield',
    definition:
      'The fraction of water held in a saturated rock or sediment that will actually drain out under gravity and become available to a well; the remainder (specific retention) stays held to grain surfaces by molecular attraction and surface tension.',
    example: 'A sand layer might have a porosity of 35% but a specific yield of only 25%, because 10% of the pore water is retained as a thin film around sand grains.',
    relatedTerms: ['Porosity', 'Specific Retention', 'Aquifer'],
    topic: 'groundwater-aquifers',
    subtopic: 'Porosity & Permeability',
  },
  {
    id: 'def-ga-004',
    term: 'Aquifer',
    definition: 'A body of saturated rock or sediment that is permeable enough to transmit and yield usable quantities of water to wells and springs.',
    example: 'The High Plains (Ogallala) Aquifer supplies groundwater for irrigation across a large portion of the central United States.',
    relatedTerms: ['Aquitard', 'Confined Aquifer', 'Unconfined Aquifer'],
    topic: 'groundwater-aquifers',
    subtopic: 'Confined vs Unconfined Aquifers',
  },
  {
    id: 'def-ga-005',
    term: 'Aquitard',
    definition:
      'A layer of low-permeability material, such as clay or shale, that restricts (but may not entirely stop) the flow of groundwater between aquifers.',
    example: 'A thick clay layer above a sand aquifer acts as an aquitard, confining the aquifer beneath it and limiting downward infiltration of surface water.',
    relatedTerms: ['Aquifer', 'Confined Aquifer', 'Permeability'],
    topic: 'groundwater-aquifers',
    subtopic: 'Confined vs Unconfined Aquifers',
  },
  {
    id: 'def-ga-006',
    term: 'Water Table',
    definition:
      'The upper surface of the zone of saturation in an unconfined aquifer, where pore water pressure equals atmospheric pressure. Its depth rises and falls with recharge (precipitation, infiltration) and discharge (pumping, springs, evapotranspiration).',
    example: 'After a wet season, the water table beneath a field may rise closer to the surface as infiltrating rainwater recharges the aquifer.',
    relatedTerms: ['Unsaturated Zone', 'Capillary Fringe', 'Unconfined Aquifer'],
    topic: 'groundwater-aquifers',
    subtopic: 'Water Table & Unsaturated Zone',
  },
  {
    id: 'def-ga-007',
    term: 'Vadose (Unsaturated) Zone',
    definition: 'The region between the ground surface and the water table where pore spaces in the soil or rock contain a mixture of air and water.',
    example: 'Plant roots draw most of their water from the vadose zone rather than from the deeper zone of saturation.',
    relatedTerms: ['Water Table', 'Capillary Fringe', 'Zone of Saturation'],
    topic: 'groundwater-aquifers',
    subtopic: 'Water Table & Unsaturated Zone',
  },
  {
    id: 'def-ga-008',
    term: 'Capillary Fringe',
    definition:
      'A thin zone directly above the water table where water is drawn upward into pore spaces by capillary action (surface tension), keeping pores nearly saturated even though pressure there is below atmospheric.',
    example: 'The capillary fringe is typically thicker in fine-grained sediments like silt than in coarse sediments like gravel, because smaller pores draw water higher.',
    relatedTerms: ['Water Table', 'Unsaturated Zone', 'Surface Tension'],
    topic: 'groundwater-aquifers',
    subtopic: 'Water Table & Unsaturated Zone',
  },
  {
    id: 'def-ga-009',
    term: 'Confined Aquifer',
    definition:
      'An aquifer sandwiched between two aquitards (confining layers), so that its water is held under pressure greater than atmospheric pressure. Also called an artesian aquifer.',
    example: 'A sand layer trapped between two clay layers deep underground can form a confined aquifer where water rises above the top of the aquifer when tapped by a well.',
    relatedTerms: ['Unconfined Aquifer', 'Aquitard', 'Artesian Well'],
    topic: 'groundwater-aquifers',
    subtopic: 'Confined vs Unconfined Aquifers',
  },
  {
    id: 'def-ga-010',
    term: 'Unconfined Aquifer',
    definition:
      "An aquifer with no confining aquitard layer directly above it, in open connection with the atmosphere through the overlying unsaturated zone. Its upper boundary is the water table, and it is also called a water table aquifer.",
    example: 'Shallow domestic wells are commonly drilled into unconfined aquifers close to the land surface.',
    relatedTerms: ['Confined Aquifer', 'Water Table', 'Recharge'],
    topic: 'groundwater-aquifers',
    subtopic: 'Confined vs Unconfined Aquifers',
  },
  {
    id: 'def-ga-011',
    term: 'Cone of Depression',
    definition:
      'A cone-shaped lowering of the water table (or the potentiometric surface, for a confined aquifer) that forms around a well as pumping draws water down faster than the surrounding aquifer can resupply it.',
    example: 'Heavy irrigation pumping from closely spaced wells can produce overlapping cones of depression, lowering the regional water table.',
    relatedTerms: ['Drawdown', 'Well', 'Water Table'],
    topic: 'groundwater-aquifers',
    subtopic: 'Wells & Springs',
  },
  {
    id: 'def-ga-012',
    term: 'Artesian Well',
    definition:
      "A well drilled into a confined aquifer where the potentiometric surface lies above the ground surface at the well's location, causing water to flow to the surface under natural pressure without pumping.",
    example: 'Some towns historically relied on natural artesian wells that flowed continuously without any mechanical pump.',
    relatedTerms: ['Confined Aquifer', 'Potentiometric Surface', 'Spring'],
    topic: 'groundwater-aquifers',
    subtopic: 'Wells & Springs',
  },
]
