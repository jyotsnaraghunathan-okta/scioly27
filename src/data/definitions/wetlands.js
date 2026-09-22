export const wetlandsDefinitions = [
  {
    id: 'def-wl-001',
    term: 'Marsh',
    definition:
      'A wetland dominated by herbaceous (non-woody) vegetation such as grasses, sedges, cattails, and reeds, typically with mineral soil, fed by surface water and/or groundwater.',
    example: 'Freshwater marshes commonly form along the margins of lakes, rivers, and slow-moving streams.',
    relatedTerms: ['Swamp', 'Hydrophytic Vegetation', 'Wetland Hydrology'],
    topic: 'wetlands',
    subtopic: 'Wetland Types (Marsh, Swamp, Bog, Fen)',
  },
  {
    id: 'def-wl-002',
    term: 'Swamp',
    definition: 'A wetland dominated by woody vegetation (trees and shrubs), which may have mineral or organic soil and can be seasonally or permanently flooded.',
    example: 'Bottomland hardwood swamps along southeastern U.S. river floodplains are often dominated by species like bald cypress and tupelo.',
    relatedTerms: ['Marsh', 'Hydric Soil', 'Wetland Hydrology'],
    topic: 'wetlands',
    subtopic: 'Wetland Types (Marsh, Swamp, Bog, Fen)',
  },
  {
    id: 'def-wl-003',
    term: 'Bog',
    definition:
      'A peat-accumulating wetland fed primarily or exclusively by precipitation (ombrotrophic), making it acidic and low in nutrients; often characterized by sphagnum moss.',
    example: 'Northern peat bogs store enormous amounts of carbon in their slowly accumulated, waterlogged peat deposits.',
    relatedTerms: ['Fen', 'Peat', 'Sphagnum Moss'],
    topic: 'wetlands',
    subtopic: 'Wetland Types (Marsh, Swamp, Bog, Fen)',
  },
  {
    id: 'def-wl-004',
    term: 'Fen',
    definition:
      'A peat-accumulating wetland fed by groundwater or mineral-rich surface water (minerotrophic), making it less acidic and more nutrient-rich than a bog, typically dominated by sedges and grasses.',
    example: 'Fens often develop where groundwater discharges at the base of a slope, supplying continuous mineral-rich water.',
    relatedTerms: ['Bog', 'Peat', 'Groundwater Discharge'],
    topic: 'wetlands',
    subtopic: 'Wetland Types (Marsh, Swamp, Bog, Fen)',
  },
  {
    id: 'def-wl-005',
    term: 'Hydric Soil',
    definition:
      'Soil that developed under conditions of saturation, flooding, or ponding long enough during the growing season to produce anaerobic (oxygen-depleted) conditions; one of the three technical parameters used to delineate a wetland.',
    example: 'Hydric soils often show gray or mottled coloration from chemical changes that occur under prolonged anaerobic conditions.',
    relatedTerms: ['Hydrophytic Vegetation', 'Wetland Hydrology', 'Wetland Delineation'],
    topic: 'wetlands',
    subtopic: 'Wetland Delineation & Regulation',
  },
  {
    id: 'def-wl-006',
    term: 'Hydrophytic Vegetation',
    definition:
      'Plant life adapted to grow in waterlogged, oxygen-poor soil conditions; the presence of hydrophytic vegetation is one of the three parameters used to delineate a wetland.',
    example: 'Cattails, water lilies, and bald cypress are all examples of hydrophytic (water-loving) plants.',
    relatedTerms: ['Hydric Soil', 'Wetland Hydrology', 'Wetland Delineation'],
    topic: 'wetlands',
    subtopic: 'Wetland Delineation & Regulation',
  },
  {
    id: 'def-wl-007',
    term: 'Wetland Hydrology',
    definition:
      'The pattern of flooding, ponding, or soil saturation at or near the surface, occurring frequently and for long enough during the growing season to create anaerobic soil conditions and support hydrophytic vegetation; one of the three delineation parameters and often considered the driving factor behind the other two.',
    example: 'Field indicators of wetland hydrology include visible surface water, a high water table close to the surface, and soil saturation observed during a site visit.',
    relatedTerms: ['Hydric Soil', 'Hydrophytic Vegetation', 'Hydroperiod'],
    topic: 'wetlands',
    subtopic: 'Wetland Hydrology',
  },
  {
    id: 'def-wl-008',
    term: 'Vernal Pool',
    definition:
      'A temporary wetland that fills seasonally (often in spring) with precipitation or snowmelt and dries out later in the year; because it typically lacks permanent fish populations, it provides critical breeding habitat for amphibians and aquatic invertebrates.',
    example: 'Many salamander species depend on vernal pools to lay eggs safely away from fish predators.',
    relatedTerms: ['Wetland Hydrology', 'Hydroperiod', 'Marsh'],
    topic: 'wetlands',
    subtopic: 'Wetland Hydrology',
  },
  {
    id: 'def-wl-009',
    term: 'Ecosystem Services',
    definition:
      'The range of benefits that people obtain from an ecosystem, such as flood control, water filtration, carbon storage, and wildlife habitat provided by wetlands.',
    example: 'Coastal wetlands provide storm surge buffering as one of their key ecosystem services for nearby communities.',
    relatedTerms: ['Flood Attenuation', 'Water Filtration', 'Wildlife Habitat'],
    topic: 'wetlands',
    subtopic: 'Ecological Functions & Services',
  },
  {
    id: 'def-wl-010',
    term: 'Flood Attenuation',
    definition: "A wetland function in which excess floodwater is temporarily stored and released slowly over time, reducing and delaying downstream flood peaks.",
    example: 'Restoring wetlands in a river floodplain can lower peak flood stages downstream during major storm events.',
    relatedTerms: ['Ecosystem Services', 'Floodplain', 'Wetland Hydrology'],
    topic: 'wetlands',
    subtopic: 'Ecological Functions & Services',
  },
  {
    id: 'def-wl-011',
    term: 'Wetland Delineation',
    definition:
      'The formal process of determining the presence and boundaries of a wetland using the three-parameter approach: evaluating hydrophytic vegetation, hydric soils, and wetland hydrology at a site.',
    example: "Consultants performing a wetland delineation for a development project dig soil pits, survey plant species, and check for hydrology indicators before mapping the wetland boundary.",
    relatedTerms: ['Hydric Soil', 'Hydrophytic Vegetation', 'Wetland Hydrology'],
    topic: 'wetlands',
    subtopic: 'Wetland Delineation & Regulation',
  },
  {
    id: 'def-wl-012',
    term: 'Jurisdictional Wetland',
    definition:
      'A wetland that meets the criteria to be regulated under Section 404 of the Clean Water Act, generally requiring a permit from the U.S. Army Corps of Engineers before it can be filled, dredged, or otherwise disturbed.',
    example: 'A developer must obtain a Section 404 permit before filling a jurisdictional wetland to build a parking lot.',
    relatedTerms: ['Wetland Delineation', 'Clean Water Act', 'Section 404'],
    topic: 'wetlands',
    subtopic: 'Wetland Delineation & Regulation',
  },
]
