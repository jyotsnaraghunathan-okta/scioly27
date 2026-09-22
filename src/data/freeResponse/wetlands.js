export const wetlandsFR = [
  {
    id: 'fr-wl-001',
    topic: 'wetlands',
    subtopic: 'Wetland Types',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question: 'Describe two ways bogs and fens differ from each other, despite both being peat-accumulating wetlands.',
    modelAnswer:
      "Bogs and fens both accumulate peat because slow decomposition in saturated, low-oxygen conditions allows partially decayed plant material to build up over time, but they differ in their water source and resulting chemistry. A bog is ombrotrophic, meaning it is fed exclusively by precipitation with no significant groundwater or surface water input; because rainwater carries very few minerals, and because sphagnum moss common in bogs further acidifies the water, bogs are strongly acidic and nutrient-poor. A fen, by contrast, is minerotrophic, receiving groundwater or mineral-rich surface water in addition to precipitation, which makes fens less acidic and more nutrient-rich, supporting a greater diversity of sedges and other plants than the sphagnum-dominated communities typical of bogs.",
    keyPoints: [
      'Correctly identifies that both are peatlands due to slow decomposition',
      'Explains bog = precipitation-fed only (ombrotrophic), acidic, nutrient-poor',
      'Explains fen = groundwater/surface water fed (minerotrophic), less acidic, more nutrient-rich',
    ],
  },
  {
    id: 'fr-wl-002',
    topic: 'wetlands',
    subtopic: 'Wetland Delineation',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question: 'Explain the three-parameter approach used to delineate wetlands in the United States, and describe what each parameter indicates about a site.',
    modelAnswer:
      "The three-parameter approach requires positive evidence of hydrophytic vegetation, hydric soils, and wetland hydrology before an area can be classified as a wetland. Hydrophytic vegetation refers to plant species adapted to grow in waterlogged, low-oxygen soil, and its presence indicates that the site's conditions favor water-tolerant plants over typical upland species. Hydric soils are soils that developed under conditions of prolonged saturation or flooding, producing anaerobic conditions that create distinctive soil features such as gray or mottled coloration; their presence indicates a history of sustained wet conditions at the site. Wetland hydrology refers to the actual pattern of flooding, ponding, or soil saturation occurring frequently and long enough during the growing season, confirmed through indicators like visible surface water, a shallow water table, or observed soil saturation; this parameter confirms that wet conditions are currently present and ongoing, not just a historical artifact. All three parameters must be documented as present for a site to be formally delineated as a wetland.",
    keyPoints: [
      'States all three required parameters correctly',
      'Explains hydrophytic vegetation indicates water-tolerant plant adaptation',
      'Explains hydric soils indicate a history of anaerobic, saturated conditions',
      'Explains wetland hydrology confirms current/ongoing saturation or flooding',
      'Notes that all three parameters must be present together',
    ],
  },
  {
    id: 'fr-wl-003',
    topic: 'wetlands',
    subtopic: 'Wetland Functions',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question: 'Describe two ecological or economic functions that wetlands provide, and explain the mechanism behind each.',
    modelAnswer:
      "One key function of wetlands is flood attenuation: during high-flow events, wetlands temporarily store excess floodwater within their soils, vegetation, and shallow basins, then release that water more slowly over time, which reduces and delays flood peaks for communities downstream. A second key function is water quality improvement: as water moves slowly through dense wetland vegetation, sediment suspended in the water settles out and is trapped, while wetland plants and their associated microbial communities take up or chemically transform excess nutrients like nitrogen and phosphorus and certain pollutants, so that water leaving the wetland is generally cleaner than water entering it. Together, these functions reduce flood damage and protect the water quality of downstream lakes, rivers, and estuaries.",
    keyPoints: [
      'Describes flood attenuation with a correct mechanism (temporary storage, slow release)',
      'Describes water quality improvement with a correct mechanism (sediment trapping, nutrient uptake/transformation)',
      'Clearly explains the mechanism, not just naming the function',
    ],
  },
  {
    id: 'fr-wl-004',
    topic: 'wetlands',
    subtopic: 'Wetland Hydrology',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question:
      'Explain why wetland hydrology is often considered the primary or "driving" parameter among the three wetland delineation criteria, describing how it influences the development of hydric soils and hydrophytic vegetation.',
    modelAnswer:
      "Wetland hydrology — the pattern of flooding, ponding, or soil saturation occurring frequently and long enough during the growing season — is often considered the driving parameter because it is the underlying physical condition that makes the other two parameters possible in the first place. When soil is saturated or flooded for prolonged periods, oxygen from the atmosphere cannot diffuse into the soil pore spaces fast enough to keep pace with the oxygen consumed by microbial respiration, so the soil becomes anaerobic. Over time, these anaerobic conditions produce chemical changes in the soil — such as the reduction and movement of iron compounds — that create the distinctive gray or mottled coloration used to identify a hydric soil. At the same time, sustained saturation creates a stressful environment that most ordinary upland plants cannot tolerate, since their roots need oxygen; only hydrophytic plants with special adaptations, such as specialized tissues that transport oxygen to submerged roots, can survive and dominate under these conditions. In this way, wetland hydrology is the root cause that generates the anaerobic soil conditions and vegetative stress that, in turn, produce the hydric soils and hydrophytic vegetation used as indicators in wetland delineation.",
    keyPoints: [
      'Explains wetland hydrology as sustained saturation/flooding during the growing season',
      'Explains that prolonged saturation excludes oxygen, producing anaerobic soil conditions',
      'Connects anaerobic conditions to hydric soil formation (chemical/color changes)',
      'Connects sustained saturation to selection for hydrophytic vegetation (plants adapted to low-oxygen roots)',
      'Clearly frames hydrology as the underlying cause of the other two parameters',
    ],
  },
]
