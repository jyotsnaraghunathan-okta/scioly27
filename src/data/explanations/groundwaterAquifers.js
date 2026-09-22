export const groundwaterAquifersExplanations = [
  {
    id: 'exp-ga-porosity-permeability',
    topic: 'groundwater-aquifers',
    subtopic: 'porosity-permeability',
    title: 'Porosity & Permeability',
    sections: [
      {
        heading: 'Porosity: How Much Water Can a Material Hold?',
        content:
          "Porosity is the percentage of a rock or sediment's total volume that is open pore space. It depends heavily on grain size, sorting, and shape. Well-sorted, unconsolidated sands and gravels typically have porosities around 25–50%, while fine-grained silts and clays can have even higher total porosity, often 40–70%, because their small particles pack together with abundant pore space between them. Consolidated sedimentary rocks like sandstone and limestone usually have lower porosities than loose sediment, roughly 5–30%, since compaction and cementation during rock formation fill in some of the original pore space. Crystalline rocks like unweathered granite or basalt have very low primary (matrix) porosity, but can still transmit significant water if they are fractured.",
        keyPoints: [
          'Porosity = (volume of pore space ÷ total volume) × 100%.',
          'Well-sorted sand/gravel: ~25–50% porosity; clay/silt: often 40–70% (but poorly connected pores).',
          'Consolidated sedimentary rock: ~5–30%; crystalline rock relies on fracture porosity.',
        ],
      },
      {
        heading: 'Permeability, Specific Yield, and Specific Retention',
        content:
          "Permeability describes how easily water can move through a material's connected pore network — it depends on pore size and connectivity, not just total porosity. This is why clay can have very high porosity yet very low permeability: its pores are so small and poorly connected that water barely moves through them, while a well-sorted gravel with somewhat lower total porosity has large, well-connected pores that transmit water easily.\n\nWhen a saturated aquifer is pumped, only part of its stored water actually drains out and becomes available for use — this fraction is the specific yield. The remaining water stays behind, clinging to grain surfaces by molecular attraction and surface tension; this fraction is the specific retention. Porosity is the sum of specific yield and specific retention. Fine-grained materials like clay have high specific retention (holding onto more water) and low specific yield, which is part of why clay-rich layers make poor aquifers even though they hold a lot of total water.",
        keyPoints: [
          'Permeability depends on pore size and connectivity, not total porosity alone.',
          'Porosity = specific yield + specific retention.',
          'Fine-grained materials (clay) retain water strongly (low specific yield); coarse materials (sand, gravel) release water more freely (high specific yield).',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Calculating Porosity from Volume Data',
        problem: 'A cylindrical soil sample has a total volume of 500 cm³. When it is fully saturated with water, the sample holds 175 cm³ of water. What is the porosity of the sample?',
        steps: [
          'Identify the pore volume (volume of water the saturated sample holds): 175 cm³',
          'Identify the total sample volume: 500 cm³',
          'Porosity = (pore volume ÷ total volume) × 100% = (175 ÷ 500) × 100%',
        ],
        answer: '35%',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'High porosity always means high permeability.',
        reality: "Porosity measures total pore space, while permeability measures how well those pores connect. Clay is a classic counterexample: high porosity, but very low permeability because its pores are tiny and poorly connected.",
      },
      {
        misconception: 'All the water held in a saturated aquifer can be pumped out and used.',
        reality: 'Only the specific yield fraction drains out under gravity and can be extracted by a well; the specific retention fraction stays bound to grain surfaces by surface tension.',
      },
    ],
  },
  {
    id: 'exp-ga-aquifer-types',
    topic: 'groundwater-aquifers',
    subtopic: 'aquifer-types',
    title: 'Confined vs Unconfined Aquifers',
    sections: [
      {
        heading: 'Unconfined Aquifers',
        content:
          "An unconfined (water table) aquifer has no confining aquitard directly above it — it is in open connection with the atmosphere through the overlying unsaturated (vadose) zone. Its upper surface, the water table, is at atmospheric pressure and rises or falls in direct response to local recharge (infiltrating precipitation) and discharge (pumping, evapotranspiration, springs). Because they are directly connected to the surface across a broad area, unconfined aquifers generally recharge more quickly but are also more exposed to surface contamination.",
        keyPoints: [
          'No confining layer above; water table is the upper boundary, at atmospheric pressure.',
          'Responds relatively quickly to local recharge/discharge; more vulnerable to surface contamination.',
        ],
      },
      {
        heading: 'Confined Aquifers and Artesian Conditions',
        content:
          "A confined aquifer is sandwiched between two aquitards (low-permeability confining layers), so its water is held under pressure greater than atmospheric — the aquifer is often called an artesian aquifer. Because the water is confined, it doesn't have a water table; instead, its pressure is described by a potentiometric (or piezometric) surface — the level to which water would rise in a well tapping the aquifer, which can lie above, at, or below the ground surface. If the potentiometric surface at a well's location is above the ground surface, the well flows freely without pumping (a flowing artesian well). If the potentiometric surface is below ground level but above the top of the aquifer, water still rises in the well above the aquifer, but does not reach the surface on its own (a non-flowing or subartesian well). Because their recharge areas are typically limited to where the aquifer outcrops or is exposed at the surface, confined aquifers usually recharge much more slowly and are more protected from surface contamination than unconfined aquifers.",
        keyPoints: [
          'Confined aquifer: bounded above and below by aquitards, water under pressure > atmospheric.',
          'Potentiometric surface (not a water table) represents the pressure level; comparing it to ground elevation determines whether a well flows.',
          'Confined aquifers recharge slowly (limited recharge area) and are generally better protected from contamination.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Will the Well Flow? Comparing the Potentiometric Surface to Ground Elevation',
        problem:
          "A confined aquifer's potentiometric surface is at an elevation of 150 m. A well is drilled into this aquifer where the ground surface elevation is 130 m. Will the well flow at the surface without pumping?",
        steps: [
          'Compare the potentiometric surface elevation (150 m) to the ground surface elevation (130 m) at the well site.',
          'Since 150 m > 130 m, the pressure surface lies above ground level at this location.',
        ],
        answer: 'Yes — the well is a flowing artesian well, because the potentiometric surface (150 m) is above the ground surface (130 m).',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Any well drilled into a confined aquifer will spray water like a fountain.',
        reality: 'Only a well where the potentiometric surface is above the ground surface flows freely (a flowing artesian well); if the potentiometric surface is below ground level, the well is non-flowing and still requires pumping to bring water to the surface.',
      },
      {
        misconception: 'Any aquifer with rock layers above it is automatically confined.',
        reality: 'An aquifer is only truly confined if it is overlain by a genuine aquitard — a layer with low enough permeability to meaningfully restrict vertical water movement and hold the aquifer under pressure — not merely any overlying rock.',
      },
    ],
  },
  {
    id: 'exp-ga-wells-springs',
    topic: 'groundwater-aquifers',
    subtopic: 'wells-springs',
    title: 'Wells & Springs',
    sections: [
      {
        heading: 'Wells and the Cone of Depression',
        content:
          "A well is a hole drilled or dug into the saturated zone to access groundwater. When a well is pumped, water is removed faster than the surrounding aquifer material can immediately resupply it, causing the water table (or potentiometric surface, for a confined aquifer) to drop locally around the well. This localized drop forms a cone-shaped depression called a cone of depression, with the greatest drawdown right at the well and progressively less drawdown farther away. Pumping multiple wells close together can create overlapping cones of depression, which is why regional groundwater management often limits well spacing and pumping rates to prevent excessive regional water table decline or well interference.",
        keyPoints: [
          'Pumping lowers the water table locally, forming a cone of depression centered on the well.',
          'Overlapping cones of depression from multiple wells can cause regional water table decline and well interference.',
        ],
      },
      {
        heading: 'Springs',
        content:
          "A spring is a natural point where groundwater discharges to the surface. Springs commonly form where the water table intersects the ground surface — for example, on a hillside where topography cuts below the water table, or where an impermeable layer forces perched groundwater to emerge along a slope (a contact spring). Springs can also form where a confined aquifer's potentiometric surface reaches the surface through a natural fracture or fault, sometimes producing an artesian spring that flows continuously due to pressure alone.",
        keyPoints: [
          'A spring is any natural point of groundwater discharge to the surface.',
          'Common settings: water table intersecting a hillside, a perched water table meeting an impermeable layer, or a confined aquifer discharging through a fracture (artesian spring).',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [
      {
        misconception: 'Springs only occur high in mountainous terrain.',
        reality: 'Springs can occur anywhere the water table or a confined aquifer intersects the ground surface — in valleys, along riverbanks, on hillsides, or wherever the local geology and topography bring groundwater to the surface.',
      },
      {
        misconception: 'Pumping one well only affects that single well.',
        reality: "A pumping well's cone of depression can extend outward and lower the water table over a wide area, potentially reducing flow to nearby wells and springs.",
      },
    ],
  },
  {
    id: 'exp-ga-recharge-contamination',
    topic: 'groundwater-aquifers',
    subtopic: 'recharge-contamination',
    title: 'Aquifer Recharge & Contamination',
    sections: [
      {
        heading: 'Groundwater Recharge',
        content:
          "Recharge is the process by which water infiltrates from the surface and replenishes an aquifer. Unconfined aquifers typically recharge over a broad area wherever precipitation can infiltrate through permeable surface material. Confined aquifers, by contrast, usually recharge only where the aquifer itself is exposed at the surface (its recharge zone), often at higher elevation some distance from where the aquifer is tapped by wells; because this recharge area can be limited, confined aquifers often recharge much more slowly than unconfined aquifers and can be more sensitive to over-pumping.",
        keyPoints: [
          'Recharge is the process by which water re-enters an aquifer from the surface.',
          "Unconfined aquifers recharge broadly wherever surface infiltration occurs; confined aquifers recharge mainly through a limited exposed recharge zone.",
        ],
      },
      {
        heading: 'Groundwater Contamination and Vulnerability',
        content:
          "Groundwater contamination can come from point sources (a single identifiable source, such as a leaking underground storage tank, a failing septic system, or an industrial spill) or nonpoint sources (diffuse sources spread over a wide area, such as agricultural fertilizer and pesticide runoff infiltrating across farmland). Because unconfined aquifers lack a protective aquitard above them, they are generally more vulnerable to contamination from the surface than confined aquifers. Karst aquifers (formed in soluble rock like limestone, with solution channels and caves) are especially vulnerable because contaminants can travel rapidly through open conduits with little natural filtration. Once contamination enters an aquifer, remediation is often slow and difficult because groundwater generally moves far more slowly than surface water, and contaminants can be difficult to physically access underground.",
        keyPoints: [
          'Point sources (single identifiable source) vs. nonpoint sources (diffuse, widespread) of contamination.',
          'Unconfined and karst aquifers are especially vulnerable due to lack of protective cover or rapid conduit flow.',
          'Groundwater contamination is typically slow to remediate due to low flow velocities and difficulty accessing the subsurface.',
        ],
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [
      {
        title: 'Estimating Groundwater Velocity with Darcy\'s Law',
        problem:
          'An aquifer has a hydraulic conductivity (K) of 10 m/day, a hydraulic gradient (i) of 0.02, and an effective porosity (n) of 0.25. Estimate the average linear groundwater velocity using v = (K × i) / n.',
        steps: [
          'Multiply hydraulic conductivity by hydraulic gradient: K × i = 10 m/day × 0.02 = 0.2 m/day',
          'Divide by effective porosity: v = 0.2 m/day ÷ 0.25',
        ],
        answer: 'v = 0.8 m/day',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Groundwater contamination can be quickly cleaned up once detected, similar to a surface spill.',
        reality: "Groundwater moves slowly and is hidden underground, so contaminant plumes can spread for years before detection and often require lengthy, expensive remediation such as pump-and-treat systems.",
      },
      {
        misconception: 'Only industrial spills cause groundwater contamination.',
        reality: 'Nonpoint sources like agricultural fertilizer and pesticide runoff, septic system leachate, and road salt are major, widespread contributors to groundwater contamination, in addition to point sources like leaking tanks.',
      },
    ],
  },
]
