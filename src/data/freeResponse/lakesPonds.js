export const lakesPondsFR = [
  {
    id: 'fr-lp-001',
    topic: 'lakes-ponds',
    subtopic: 'Lake Formation',
    type: 'free-response',
    difficulty: 'easy',
    points: 4,
    question: 'Describe two different geologic processes that can form a lake basin, and give a real-world example of each.',
    modelAnswer:
      "Lakes can form through glacial processes: for example, a cirque lake (tarn) forms when an alpine glacier erodes a bowl-shaped basin at the head of a mountain valley, which later fills with water once the glacier retreats — these are common in previously glaciated mountain ranges such as the Rockies. Lakes can also form through volcanic processes: a caldera lake forms when a volcano's summit collapses into a caldera after a major eruption, which then fills with precipitation and groundwater, as with Crater Lake in Oregon, which formed after the collapse of Mount Mazama.",
    keyPoints: [
      'Correctly describes one glacial (or tectonic/fluvial) lake-forming process with an example',
      'Correctly describes a second, different lake-forming process with an example',
      'Explains the basic mechanism of basin formation for each',
    ],
  },
  {
    id: 'fr-lp-002',
    topic: 'lakes-ponds',
    subtopic: 'Thermal Stratification',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question: 'Explain why a temperate lake stratifies into layers during summer, and describe the process that causes the lake to mix again in fall.',
    modelAnswer:
      "During summer, solar heating warms the surface water of a lake. Because warm water is less dense than cold water, the warm water floats on top as the epilimnion, while colder, denser water remains at the bottom as the hypolimnion, separated by a thermocline where temperature drops rapidly with depth. This density difference prevents wind-driven mixing from reaching the bottom layer, so the hypolimnion becomes isolated from atmospheric oxygen exchange for the summer. In fall, as air temperatures cool, the surface water loses heat and its temperature (and density) approaches that of the deeper water, especially as both approach water's temperature of maximum density, about 4°C. Once the density difference disappears, there is no longer a barrier to mixing, and wind can drive water movement through the entire water column — this is fall turnover, which redistributes oxygen and nutrients throughout the lake.",
    keyPoints: [
      'Explains that warm, less dense water forms a surface epilimnion above a denser hypolimnion',
      'Identifies the thermocline as the zone of rapid temperature/density change',
      "Explains that water's maximum density near 4°C causes the density difference to disappear as surface water cools in fall",
      'Explains that wind-driven mixing (turnover) occurs once density differences disappear',
    ],
  },
  {
    id: 'fr-lp-003',
    topic: 'lakes-ponds',
    subtopic: 'Eutrophication',
    type: 'free-response',
    difficulty: 'medium',
    points: 5,
    question:
      'Explain the process of cultural eutrophication from nutrient input to a potential fish kill, and describe one practice that could reduce nutrient loading into a lake.',
    modelAnswer:
      "Cultural eutrophication begins when human activities — such as applying agricultural fertilizer, discharging inadequately treated sewage, or clearing vegetation that increases erosion — deliver excess nutrients, especially phosphorus, into a lake. Because phosphorus is typically the limiting nutrient in freshwater systems, this nutrient surge triggers explosive growth of algae and cyanobacteria, forming a dense algal bloom that can also block sunlight from reaching submerged plants. When the algae eventually die, decomposer bacteria break down the dead biomass, consuming large amounts of dissolved oxygen in the process. This oxygen depletion, especially in the isolated hypolimnion during summer stratification, can create hypoxic or anoxic conditions that suffocate fish and other aquatic organisms, leading to a fish kill. Establishing vegetated riparian buffer strips along the lake's tributaries and shoreline is one effective practice that reduces nutrient loading, since the plants and soil intercept and take up nutrients and trap sediment before they reach the water.",
    keyPoints: [
      'Identifies nutrient (especially phosphorus) input source (fertilizer, sewage, erosion)',
      'Explains that excess nutrients trigger an algal bloom',
      'Explains that decomposition of dead algae consumes dissolved oxygen',
      'Connects oxygen depletion to fish kills',
      'Describes a valid mitigation practice (e.g., riparian buffers, reduced fertilizer use, improved wastewater treatment)',
    ],
  },
  {
    id: 'fr-lp-004',
    topic: 'lakes-ponds',
    subtopic: 'Lake Zones',
    type: 'free-response',
    difficulty: 'hard',
    points: 6,
    question: 'Compare and contrast the littoral, limnetic, and profundal zones of a lake in terms of light availability, dominant organisms, and productivity.',
    modelAnswer:
      "The littoral zone is the shallow, near-shore region of a lake where sunlight reaches all the way to the bottom. It supports rooted aquatic plants, algae, and a wide variety of animals such as insects, amphibians, and fish that use the zone for feeding and spawning, giving it the highest productivity and biodiversity of any lake zone. The limnetic zone is the open-water region away from shore that still receives enough sunlight to support photosynthesis, but is too deep for rooted plants to reach bottom; it is dominated by free-floating phytoplankton and zooplankton, which form the base of the open-water food web and support fish that feed in open water. The profundal zone lies below the limnetic zone, in water too deep and dark for photosynthesis to occur; because it lacks primary producers, it relies on organic matter (dead plankton and organic debris) sinking down from the productive zones above, so it generally has the lowest productivity and is dominated by decomposers and detritivores rather than primary producers.",
    keyPoints: [
      'Littoral: photic to the bottom, rooted plants, highest productivity/biodiversity',
      'Limnetic: photic open water, plankton-dominated, moderate productivity',
      'Profundal: aphotic, no primary producers, relies on sinking organic matter, lowest productivity',
      'Clear comparison structure addressing light, organisms, and productivity for all three zones',
    ],
  },
]
