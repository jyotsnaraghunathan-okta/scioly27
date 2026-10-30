const IMG = '/images/previous-questions/human-impacts'

const CADDIS_STORMWATER = {
  title: 'Urbanization: Stormwater Runoff',
  source: 'EPA CADDIS',
  url: 'https://www.epa.gov/caddis/urbanization-stormwater-runoff',
}
const CADDIS_CHANNEL = {
  title: 'Urbanization: Riparian/Channel Alteration',
  source: 'EPA CADDIS',
  url: 'https://www.epa.gov/caddis/urbanization-riparianchannel-alteration',
}
const CADDIS_FLOW = {
  title: 'Flow Alteration',
  source: 'EPA CADDIS',
  url: 'https://www.epa.gov/caddis/flow-alteration',
}
const URBAN_FLOODS = {
  title: 'Effects of Urban Development on Floods (Fact Sheet 076-03)',
  source: 'USGS',
  url: 'https://pubs.usgs.gov/fs/fs07603/',
}
const HYDROMOD = {
  title: 'Management Measures for Hydromodification',
  source: 'EPA (PDF)',
  url: 'https://www.epa.gov/sites/default/files/2015-09/documents/czara_chapter6_hydromod.pdf',
}
const GW_DEPLETION = {
  title: 'Groundwater Decline and Depletion',
  source: 'USGS Water Science School',
  url: 'https://www.usgs.gov/special-topics/water-science-school/science/groundwater-decline-and-depletion',
}
const PG14_3 = {
  title: '14.3 Groundwater Extraction',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/physicalgeology2ed/chapter/14-3-groundwater-extraction/',
}
const PG14_4 = {
  title: '14.4 Groundwater Quality',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/physicalgeology2ed/chapter/14-4-groundwater-quality/',
}
const CIRC_1225 = {
  title: 'Sources of Nutrients and Pesticides (Circular 1225)',
  source: 'USGS',
  url: 'https://pubs.usgs.gov/circ/circ1225/html/sources.html',
}
const PESTICIDES_GW = {
  title: 'Pesticides in Groundwater',
  source: 'USGS Water Science School',
  url: 'https://www.usgs.gov/water-science-school/science/pesticides-groundwater',
}

export const humanImpactsExplanations = [
  // ───────────────────────── Land-use change ─────────────────────────
  {
    id: 'exp-hi-land-use-change',
    topic: 'human-impacts',
    subtopic: 'land-use-change',
    title: 'Land-Use Change: Runoff, Sedimentation & Ecological Change',
    sections: [
      {
        heading: 'Urbanization and altered runoff',
        content:
          "Natural land with soil and vegetation intercepts rain, lets much of it infiltrate, and returns a large share to the air by evapotranspiration. Urbanization replaces this with impervious surfaces such as roofs, roads, parking lots, and compacted soil, and with storm drains that pipe water directly to streams.\n\nEffects on runoff (USGS Fact Sheet 076-03 and EPA CADDIS):\n• More runoff: less infiltration means a larger share of each storm becomes surface runoff.\n• Faster runoff: gutters and pipes are smoother and more direct than natural flow paths, so the lag time shortens.\n• Higher peak flows and more frequent floods: a flow that used to be a rare flood may now occur every year or two.\n• Steeper rising and falling limbs on the hydrograph (a flashy stream).\n• Lower baseflow in some streams, because less water recharges groundwater, although leaking water pipes and irrigation can offset this.\n• Warmer runoff from hot pavement (thermal pollution).\n\nThe combined set of symptoms is called urban stream syndrome: flashy hydrographs, higher nutrient and contaminant levels, altered channel shape, and fewer sensitive species. Stream health often begins to decline noticeably once a watershed reaches roughly 10% impervious cover.",
        keyPoints: [
          'Impervious surfaces + storm drains → more, faster runoff and less infiltration.',
          'Hydrograph: higher peak, shorter lag time, steeper limbs, possibly lower baseflow.',
          'Floods that were rare become frequent.',
          'Urban stream syndrome: flashy flow, pollutants, altered channels, reduced biodiversity.',
        ],
      },
      {
        heading: 'Agriculture, deforestation, and wildfire',
        content:
          "Agriculture:\n• Plowing exposes bare soil, which greatly increases erosion and sediment delivery to streams.\n• Fertilizers and manure add nitrogen and phosphorus. Pesticides wash off fields or leach into groundwater.\n• Tile drains and ditches drain fields quickly, speeding runoff.\n• Irrigation diverts water from rivers and aquifers. Return flows can carry salts, nutrients, and pesticides back to streams.\n• Grazing can trample stream banks and remove riparian vegetation.\n\nDeforestation and logging:\n• Less interception and transpiration means more water becomes runoff, raising peak flows.\n• Exposed soil, logging roads, and loss of root strength increase erosion and landslides.\n• Loss of streamside shade warms the water.\n\nWildfire:\n• Burned soils can become water-repellent (hydrophobic), so infiltration capacity drops sharply.\n• Overland flow, erosion, and debris flows increase in the first rainy seasons after a fire.\n• Transpiration and soil moisture fall, and ash and nutrients wash into streams.",
        keyPoints: [
          'Agriculture: erosion, nutrients, pesticides, faster drainage, irrigation withdrawals.',
          'Deforestation: less interception and ET → more runoff, erosion, landslides, warmer streams.',
          'Wildfire: hydrophobic soils → reduced infiltration, more overland flow and debris flows.',
        ],
      },
      {
        heading: 'Sedimentation and ecological change',
        content:
          "Land disturbance (construction, farming, logging, mining) delivers far more sediment to streams than undisturbed land. Construction sites are among the highest sediment sources per unit area.\n\nEffects of excess sediment:\n• Turbidity (cloudiness) rises, so less light reaches aquatic plants and algae and photosynthesis declines.\n• Suspended sediment absorbs sunlight, warming the water and lowering dissolved oxygen.\n• Fine sediment fills the spaces in gravel beds, smothering fish eggs (e.g., salmon spawning gravels) and bottom-dwelling invertebrates.\n• Sediment carries attached pollutants, especially phosphorus, metals, and pesticides.\n• Channels and reservoirs fill in (aggrade), reducing flood capacity and storage.\n\nEcological change from land use also includes loss of riparian (streamside) vegetation. Riparian zones normally shade the stream, stabilize banks, filter runoff, supply wood and leaves for food webs, and provide wildlife corridors. Removing them warms streams, increases bank erosion, and reduces habitat.\n\nUrban streams often first aggrade during construction (high sediment), then enlarge by widening and incision (downcutting) once the area is paved and the sediment supply drops while peak flows stay high.",
        keyPoints: [
          'Excess sediment → turbidity, less photosynthesis, warmer water, lower DO.',
          'Fine sediment smothers spawning gravels and bottom habitat.',
          'Sediment carries attached phosphorus, metals, and pesticides.',
          'Riparian buffers shade, filter, stabilize banks, and provide habitat.',
        ],
      },
      {
        heading: 'Reducing land-use impacts',
        content:
          "Stormwater management and green infrastructure aim to make developed land behave more like natural land:\n• Detention and retention ponds store runoff and release it slowly, cutting peak flows.\n• Infiltration (percolation) trenches, rain gardens, bioswales, and permeable pavement let water soak into the ground, recharging groundwater and reducing runoff volume.\n• Green roofs and rain barrels capture rain where it falls.\n• Riparian buffer strips filter sediment and nutrients and shade streams.\n\nOn farms and construction sites:\n• Cover crops, no-till farming, contour plowing, terracing, and grassed waterways reduce erosion and stream sediment load.\n• Silt fences and sediment basins trap sediment before it leaves a construction site.\n• Nutrient management means applying the right fertilizer amount at the right time.\n\nThings that worsen flooding include urbanization, deforestation, degrading riparian zones, draining wetlands, and blocking floodplain features. Things that reduce it include percolation trenches, wetland restoration, and floodplain reconnection.",
        keyPoints: [
          'Detention ponds cut peaks; infiltration features reduce runoff volume and recharge groundwater.',
          'Cover crops, no-till, contour plowing, and grassed waterways reduce erosion.',
          'Riparian buffers and wetlands filter pollutants and moderate floods.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'How much more runoff after paving?',
        problem:
          'A 10-hectare (100,000 m²) field has a runoff coefficient C = 0.2. After development, C = 0.85. For a 25 mm rainstorm, compare runoff volumes before and after.',
        steps: [
          'Rain depth = 25 mm = 0.025 m. Rain volume = 0.025 m × 100,000 m² = 2,500 m³.',
          'Before: runoff = 0.2 × 2,500 = 500 m³.',
          'After: runoff = 0.85 × 2,500 = 2,125 m³.',
          'Ratio = 2,125 ÷ 500 = 4.25.',
        ],
        answer: 'Runoff increases from 500 m³ to about 2,125 m³, more than four times as much from the same storm.',
      },
      {
        title: 'Paving over a forest: the soil-moisture budget',
        problem:
          'Explain how replacing a forested watershed with a parking lot changes each term in the soil-moisture budget: Δ(soil moisture) = P − ET − R − I (P = precipitation, ET = evapotranspiration, R = runoff, I = infiltration to groundwater).',
        steps: [
          'P is unchanged: rainfall does not depend on land cover over a small area.',
          'R increases sharply: impervious surfaces send most rain to storm drains.',
          'I decreases: little water can infiltrate pavement, so groundwater recharge falls.',
          'ET decreases: no plants transpire and there is little stored water to evaporate.',
        ],
        answer: 'Runoff rises; infiltration, recharge, and evapotranspiration fall. Result: flashier streams and lower baseflow.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Urbanization makes flood peaks arrive later because water must travel through pipes.',
        reality: 'Pipes and pavement deliver water faster than natural flow paths, so lag time shortens and peaks rise.',
      },
      {
        misconception: 'Sediment is a natural part of streams, so more of it is harmless.',
        reality:
          'Excess fine sediment increases turbidity, smothers spawning beds, carries attached pollutants, and fills reservoirs and channels.',
      },
      {
        misconception: 'Forests use water, so cutting them down improves water supply without downsides.',
        reality:
          'Deforestation can increase total runoff, but it raises flood peaks, erosion, sediment loads, and stream temperatures.',
      },
    ],
    furtherReading: [CADDIS_STORMWATER, CADDIS_CHANNEL, URBAN_FLOODS],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Engineering structures ─────────────────────────
  {
    id: 'exp-hi-engineering-structures',
    topic: 'human-impacts',
    subtopic: 'engineering-structures',
    title: 'Engineering Structures: Dams, Levees, Channelization, Diversion & Downcutting',
    sections: [
      {
        heading: 'Dams and reservoirs',
        content:
          "Dams store water for supply, irrigation, hydropower, navigation, and flood control, but they reshape the river both upstream and downstream.\n\nUpstream (the reservoir):\n• The reservoir is a new local base level. The river slows as it enters, deposits its sediment as a delta, and gradually fills the reservoir. Large reservoirs trap most of the incoming sediment (often 90% or more).\n• The river channel upstream of the reservoir aggrades (builds up).\n• Large open-water surfaces increase evaporation losses.\n• The reservoir water level is usually higher than the surrounding water table, so the reservoir can lose water to groundwater.\n\nDownstream:\n• Sediment-starved (\"hungry\") water released from the dam picks up sediment from the bed and banks. The channel erodes and downcuts (degradation), and the bed can armor with coarse gravel.\n• Flood peaks are reduced, so the floodplain receives less sediment and nutrients. Over time the floodplain and delta erode because no new sediment arrives.\n• Deltas and beaches downstream shrink (e.g., the Nile delta after the Aswan High Dam).\n• Water released from deep in the reservoir is colder (and can be low in oxygen) than natural river water.\n• The natural flow regime (seasonal floods and low flows) is replaced by managed releases, which affects species adapted to it.\n• Dams block fish migration (e.g., salmon) unless fish ladders are provided.\n\nDam removal is becoming common when dams are unsafe, obsolete, filled with sediment, or block fish. The Elwha River (Washington) dam removals (2011–2014), the largest in U.S. history, released stored sediment that rebuilt the river-mouth delta and reopened salmon habitat.",
        keyPoints: [
          'Reservoir = new local base level: deposition, delta building, sediment trapping, evaporation loss.',
          'Downstream: sediment-starved water causes channel erosion and downcutting.',
          'Reduced floods starve floodplains, deltas, and beaches of sediment.',
          'Ecological effects: blocked fish migration, altered temperature and flow regime.',
          'Reasons to remove dams: fish passage, sediment-filled reservoirs, safety, obsolete structures.',
        ],
      },
      {
        heading: 'Levees',
        content:
          "Artificial levees are embankments built along rivers to keep floodwater off the floodplain. They copy natural levees, but they are much higher and continuous.\n\nEffects:\n• Floodwater confined between levees cannot spread out, so for the same discharge the water rises higher (higher flood stage) and flows faster.\n• Less floodwater is stored on the floodplain, so more water passes downstream at once, which can worsen flooding for downstream communities.\n• The floodplain behind the levees no longer receives fresh sediment and nutrients. Sediment stays in the channel and can raise the riverbed.\n• Wetlands and backwaters that depended on flooding dry out.\n• The protected land invites development (the levee effect). When a levee fails or is overtopped, damage is catastrophic (e.g., New Orleans, 2005).\n• On deltas, levees prevent sediment from reaching marshes, which contributes to land loss as the delta subsides (e.g., coastal Louisiana).",
        keyPoints: [
          'Levees confine floods → higher stages, faster flow, more water sent downstream.',
          'Floodplains and wetlands behind levees lose sediment and nutrients.',
          'Levee failure causes catastrophic flooding of developed land.',
        ],
      },
      {
        heading: 'Channelization and downcutting',
        content:
          "Channelization means straightening, deepening, widening, clearing, or lining a stream channel (sometimes with concrete) to move water away faster for flood control, drainage, or navigation.\n\nEffects:\n• Straightening shortens the channel. The same drop over a shorter distance gives a steeper gradient and faster water.\n• Higher velocity increases erosion. The channel downcuts, and a knickpoint (headcut) can migrate upstream, eroding tributaries too.\n• The extra sediment is deposited downstream, where the gradient flattens again, causing aggradation and flooding there.\n• Natural habitat (pools, riffles, meanders, overhanging vegetation, woody debris) is lost, and water temperature rises.\n• Floodwater moves downstream faster, increasing peak flows for downstream areas.\n\nChannel downcutting (incision or degradation) caused by people has several triggers:\n• Clear water released below dams.\n• Channel straightening and steepening.\n• In-stream gravel and sand mining, which removes bed material and creates pits that propagate upstream.\n• Higher urban peak flows.\n\nConsequences: the stream drops below its floodplain (disconnecting it), nearby water tables fall, banks collapse, and bridge piers and pipelines are undermined.",
        keyPoints: [
          'Channelization shortens and steepens the channel → faster flow and more erosion.',
          'Headcuts migrate upstream; sediment deposits downstream.',
          'Habitat loss: pools, riffles, meanders, and riparian cover disappear.',
          'Human-caused downcutting: below dams, channel straightening, gravel mining, urban flows.',
        ],
      },
      {
        heading: 'Water diversion',
        content:
          "Diversions move water out of a river or lake by canals, pipelines, or pumping, for irrigation, cities, or transfer to another basin.\n\nThe Aral Sea is the classic case. From the 1960s, the Soviet Union diverted most of the flow of the Amu Darya and Syr Darya, the two rivers feeding this endorheic (closed-basin) lake, to irrigate cotton.\n• The lake lost most of its area and volume and split into separate basins.\n• Salinity rose sharply, destroying the fishery.\n• The exposed lakebed became a source of dust storms carrying salt and agricultural chemicals.\n• Without the lake moderating temperatures, the regional climate became more continental: summers got hotter and winters colder.\n\nOther examples:\n• Owens Lake, California, went dry after water was diverted to the Los Angeles Aqueduct (1913), creating a major dust source.\n• The Colorado River now rarely reaches the Gulf of California because so much is diverted upstream.\n• Diverting water away from wetlands (e.g., parts of the Florida Everglades) lowers water levels and causes wetland decline.\n\nFor an endorheic lake, the water balance is inflow (rivers + groundwater + precipitation) = evaporation. Reducing inflow by diversion forces the lake to shrink until evaporation from its smaller area matches the reduced inflow.",
        keyPoints: [
          'Diversions reduce downstream flow; closed-basin lakes shrink and become saltier.',
          'Aral Sea: cotton irrigation diversions → shrinking, salinization, dust storms, harsher regional climate.',
          'Diverting water from wetlands causes their decline.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'How long until a reservoir fills with sediment?',
        problem:
          'A reservoir holds 50 million m³. The river delivers 400,000 m³ of sediment per year, and the reservoir traps 90% of it. Estimate the reservoir\'s useful life.',
        steps: [
          'Trapped sediment = 0.90 × 400,000 = 360,000 m³/yr.',
          'Life ≈ capacity ÷ trapping rate = 50,000,000 ÷ 360,000 ≈ 139 years.',
          '(In practice, trap efficiency declines as the reservoir fills, so complete filling takes longer, but useful storage is lost much earlier.)',
        ],
        answer: 'Roughly 140 years.',
      },
      {
        title: 'Channelization increases gradient',
        problem:
          'A meandering reach drops 6 m over a channel length of 12 km. Engineers straighten it to 7.5 km between the same two points. Compare gradients.',
        steps: [
          'Before: 6 m ÷ 12,000 m = 0.0005.',
          'After: 6 m ÷ 7,500 m = 0.0008.',
          'Increase = 0.0008 ÷ 0.0005 = 1.6, i.e., 60% steeper.',
        ],
        answer: 'The gradient increases by 60% (0.0005 → 0.0008), so velocity and erosion increase.',
      },
      {
        title: 'Endorheic lake budget',
        problem:
          'A closed-basin lake has river inflow I, groundwater inflow G, precipitation P and evaporation E (m/yr), and surface area S. Write the balance for a lake at constant volume, and for one shrinking at rate L.',
        steps: [
          'Inputs = I + G + P·S; outputs = E·S (no river outflow from a closed basin).',
          'Constant volume: I + G + S(P − E) = 0.',
          'Shrinking: I + G + S(P − E) = ΔV/Δt = −L (net loss of L per year).',
        ],
        answer: 'Constant: I + G + S(P − E) = 0. Shrinking: I + G + S(P − E) = −L.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Levees always reduce flooding.',
        reality:
          'Levees protect the land directly behind them but raise flood stages within the channel and can increase flooding downstream. They fail catastrophically when overtopped.',
      },
      {
        misconception: 'Below a dam, the river deposits sediment because it is slower.',
        reality:
          'The reservoir traps the sediment, so water released below the dam is sediment-starved and erodes (downcuts) the downstream channel.',
      },
      {
        misconception: 'Straightening a river only affects the straightened section.',
        reality:
          'Steepening triggers headcuts that migrate upstream and deposition and flooding downstream, so the effects spread through the river system.',
      },
    ],
    furtherReading: [HYDROMOD, CADDIS_FLOW, CADDIS_CHANNEL],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Groundwater extraction ─────────────────────────
  {
    id: 'exp-hi-groundwater-extraction',
    topic: 'human-impacts',
    subtopic: 'groundwater-extraction',
    title: 'Wells & Groundwater Pumping: Depletion, Subsidence & Saltwater Intrusion',
    sections: [
      {
        heading: 'Pumping, drawdown, and depletion',
        content:
          "Pumping a well lowers the water level around it (drawdown), forming a cone of depression. The cone deepens and widens until it captures enough water, from aquifer storage, increased recharge, or reduced natural discharge, to balance the pumping.\n\nWhen pumping exceeds recharge over the long term, the aquifer is depleted (overdraft):\n• Water levels decline year after year. Wells must be deepened, pumping costs rise, and shallow wells go dry.\n• Nearby cones of depression overlap and interfere.\n• Baseflow to streams decreases. Gaining streams can become losing streams, and springs and wetlands dry up.\n• Water quality can deteriorate as poorer-quality water is drawn in, from saline layers, from the sea, or from contaminated zones.\n\nGroundwater is heavily used for irrigation; agriculture accounts for roughly 70% of global freshwater withdrawals. Major depleted aquifers include the High Plains (Ogallala) aquifer in the central U.S., where water levels have dropped more than 30 m in parts of Kansas and Texas; California's Central Valley; northern India; and the North China Plain. Deep fossil aquifers (e.g., the Nubian Sandstone) receive almost no modern recharge, so pumping them is effectively mining water.",
        keyPoints: [
          'Pumping → drawdown and a cone of depression around the well.',
          'Pumping > recharge → depletion: falling water levels, dry wells, higher pumping costs.',
          'Reduced baseflow: streams, springs, and wetlands lose water.',
          'Agriculture is the largest user of withdrawn water (~70% globally).',
        ],
      },
      {
        heading: 'Land subsidence',
        content:
          "In aquifer systems that contain layers of clay and silt (aquitards), pumping lowers the water pressure in the pores. The pore water was helping support the weight of the overlying sediment. When pressure drops, the grains are squeezed together and the fine-grained layers compact, so the land surface sinks.\n\n• Compaction of clay layers is largely inelastic (permanent). Even if water levels recover, the ground does not rebound, and the aquifer's storage capacity is permanently lost.\n• The classic example is California's San Joaquin Valley, where the land near Mendota sank about 9 m between 1925 and 1977. USGS photos show a utility pole marked with the former ground levels.\n• Other examples: Mexico City (many metres), the Houston-Galveston area, and Las Vegas.\n• Consequences: cracked foundations, damaged canals, wells, pipelines, and roads; earth fissures; changed drainage gradients; increased flooding in low coastal areas.\n• Subsidence is monitored with GPS, InSAR satellite radar, and extensometers in boreholes.\n\nCollapse sinkholes in karst can also be triggered by pumping, because lowering the water table removes buoyant support from the ceilings of cavities.",
        keyPoints: [
          'Pumping lowers pore pressure → fine-grained (clay) layers compact → land subsides.',
          'Compaction is mostly permanent; aquifer storage is lost.',
          'San Joaquin Valley: ~9 m of subsidence, 1925–1977.',
          'Pumping can also trigger sinkholes in karst.',
        ],
      },
      {
        heading: 'Saltwater intrusion',
        content:
          "In coastal aquifers, fresh groundwater floats on denser seawater, which extends inland beneath it as a wedge. The boundary is a zone of mixing (zone of dispersion).\n\nGhyben-Herzberg relation: because seawater (≈1.025 g/cm³) is only slightly denser than fresh water (1.000 g/cm³), the freshwater-saltwater interface lies about 40 m below sea level for every 1 m that the water table stands above sea level:\n\n    z ≈ 40 × h\n\n(z = depth of the interface below sea level; h = water-table height above sea level.)\n\nIf pumping lowers the water table by 1 m, the interface rises about 40 m. Saltwater moves inland and upward (upconing beneath wells), and wells begin pumping brackish water.\n\nPrevention and remedies:\n• Reduce or relocate pumping (move wells inland, spread them out).\n• Injection (recharge) wells or recharge basins between the coast and the supply wells create a freshwater barrier (a hydraulic mound).\n• Managed aquifer recharge using treated wastewater or stormwater.\n• Physical barriers, and monitoring wells to track the interface.\n\nClay layers separating aquifers (e.g., between the Magothy and Lloyd aquifers on Long Island) can isolate one aquifer from changes in another.",
        keyPoints: [
          'Fresh water floats on seawater in coastal aquifers.',
          'Ghyben-Herzberg: interface depth ≈ 40 × water-table height above sea level.',
          'Lowering the water table 1 m raises the interface ~40 m.',
          'Remedies: reduce pumping, inject fresh water between coast and wells, managed recharge.',
        ],
      },
      {
        heading: 'Fracking and other subsurface activities',
        content:
          "Hydraulic fracturing (fracking) injects large volumes of water mixed with sand and chemicals at high pressure into shale to crack it and release oil and natural gas.\n\nWater-related concerns:\n• Large water withdrawals in some regions.\n• Possible contamination of aquifers through faulty well casings or surface spills of fracking fluids and flowback.\n• Disposal of salty, chemical-laden wastewater, often by deep injection, which has triggered earthquakes in places such as Oklahoma.\n• Methane migrating into water wells.\n\nOther subsurface uses:\n• Deep saline aquifers bounded by aquitards are being studied for storing captured CO₂ (carbon sequestration). The porous rock holds the CO₂ and the confining layers prevent leaks.\n• Mining and oil and gas extraction can also cause subsidence.",
        keyPoints: [
          'Fracking: high-pressure water + sand + chemicals fracture shale.',
          'Concerns: water use, casing leaks and spills, wastewater disposal, induced earthquakes.',
          'Deep saline aquifers with aquitard seals are candidates for CO₂ storage.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Ghyben-Herzberg',
        problem:
          'A coastal water table stands 1.5 m above sea level. (a) How deep is the freshwater-saltwater interface? (b) Pumping lowers the water table to 0.5 m above sea level. How far does the interface rise?',
        steps: [
          '(a) z ≈ 40 × 1.5 = 60 m below sea level.',
          '(b) New z ≈ 40 × 0.5 = 20 m below sea level.',
          'Rise = 60 − 20 = 40 m.',
        ],
        answer: 'The interface is ~60 m deep at first and rises ~40 m (to ~20 m) after a 1 m drop in the water table.',
      },
      {
        title: 'Subsidence and water volume (Rickards-style)',
        problem:
          'Ground over a 500 mi² area sank 9 m in 22 years. If the subsidence volume equals the volume of water removed, what average pumping rate per well is needed for 500 wells? (1 mi = 1,609 m)',
        steps: [
          'Area = 500 × (1,609 m)² ≈ 1.294 × 10⁹ m².',
          'Volume = 1.294 × 10⁹ m² × 9 m ≈ 1.165 × 10¹⁰ m³.',
          'Time = 22 yr × 3.156 × 10⁷ s/yr ≈ 6.94 × 10⁸ s.',
          'Total rate ≈ 1.165 × 10¹⁰ ÷ 6.94 × 10⁸ ≈ 16.8 m³/s; per well ≈ 16.8 ÷ 500 ≈ 0.034 m³/s.',
        ],
        answer: 'About 0.034 m³/s per well (a simplification; subsidence is usually only a fraction of the water removed).',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Once pumping stops, subsided land rises back up.',
        reality: 'Compaction of clay layers is largely permanent. Water levels can recover, but the land and the lost storage do not.',
      },
      {
        misconception: 'Saltwater intrusion only happens if wells are drilled into the ocean.',
        reality:
          'Lowering an inland water table by pumping lets the saltwater interface rise and move inland, roughly 40 m upward for each 1 m drop.',
      },
      {
        misconception: 'Groundwater is a separate supply that does not affect streams.',
        reality:
          'Groundwater feeds baseflow. Pumping can reduce streamflow, turn gaining streams into losing streams, and dry springs and wetlands.',
      },
    ],
    furtherReading: [GW_DEPLETION, PG14_3],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Water pollution ─────────────────────────
  {
    id: 'exp-hi-water-pollution',
    topic: 'human-impacts',
    subtopic: 'water-pollution',
    title: 'Water Pollution: Types, Sources & Transport',
    sections: [
      {
        heading: 'Point and nonpoint sources',
        content:
          "Point-source pollution enters water from a single, identifiable location, such as a pipe, ditch, or outfall. Examples:\n• Sewage and wastewater treatment plant outfalls\n• Factory discharge pipes (e.g., a paper mill)\n• An oil tanker spill or a single leaking tank\nPoint sources are relatively easy to monitor and regulate. In the U.S., the Clean Water Act (1972) requires discharge permits (NPDES) for them.\n\nNonpoint-source pollution comes from diffuse sources spread over a wide area and is carried by runoff, infiltration, or the atmosphere. Examples:\n• Agricultural runoff (fertilizer, manure, pesticides, sediment)\n• Urban stormwater runoff (oil, metals, road salt, litter)\n• Road de-icing salt applied across a whole road network\n• Atmospheric deposition (acid rain, mercury)\n• Many septic systems across a region, and groundwater carrying farm chemicals into an estuary\nNonpoint pollution is now the leading cause of water-quality problems in U.S. rivers and lakes. It is harder to control because there is no single source to regulate.\n\nGeogenic (natural) contaminants come from the rocks themselves rather than from human activity: arsenic, uranium and radon, fluoride, and naturally high iron or manganese.",
        keyPoints: [
          'Point source = single identifiable discharge (pipe, outfall, spill).',
          'Nonpoint source = diffuse (agricultural and urban runoff, road salt, acid rain).',
          'Nonpoint pollution is the leading cause of impaired U.S. waters.',
          'Geogenic contaminants come from rock: arsenic, uranium/radon, fluoride.',
        ],
      },
      {
        heading: 'Types of pollutants',
        content:
          "• Nutrients (nitrogen, phosphorus) from fertilizer, manure, sewage, and septic systems cause eutrophication (below). Nitrate in drinking water is a health concern; the U.S. EPA limit is 10 mg/L as nitrogen.\n• Sediment from erosion causes turbidity and habitat damage and carries other pollutants.\n• Pathogens (bacteria, viruses, parasites) come from sewage, septic systems, combined sewer overflows, and livestock. They cause waterborne diseases such as cholera and hepatitis A; a contaminated well near a faulty septic tank is a classic scenario. E. coli and fecal coliform bacteria are used as indicators.\n• Organic matter (sewage, food waste, manure) is decomposed by bacteria that consume dissolved oxygen. Biochemical oxygen demand (BOD) measures this load.\n• Toxic chemicals: pesticides, industrial solvents, PCBs, PFAS (\"forever chemicals\"), pharmaceuticals.\n• Heavy metals: mercury, lead, cadmium, and arsenic from mining, industry, and old pipes. Some biomagnify up food chains.\n• Salts from road de-icers and irrigation return flows raise chloride and salinity.\n• Thermal pollution: warm water from power-plant cooling and urban runoff lowers dissolved oxygen.\n• Acid mine drainage: when pyrite (FeS₂) in mine waste is exposed to air and water, it forms sulfuric acid that dissolves metals, and orange iron hydroxide coats streambeds.\n• Acid rain from sulfur dioxide and nitrogen oxide emissions acidifies lakes and streams. Remedies: cut emissions (low-sulfur fuels, scrubbers, catalytic converters) and add lime (calcium carbonate) to neutralize acidified lakes.\n• Petroleum and oil spills; microplastics.",
        keyPoints: [
          'Nutrients → eutrophication; pathogens → disease; organic matter → oxygen depletion (BOD).',
          'Toxics and heavy metals; salts; thermal pollution; acid mine drainage; acid rain.',
          'Indicator bacteria (E. coli, fecal coliform) signal sewage contamination.',
        ],
      },
      {
        heading: 'Eutrophication',
        content:
          "Eutrophication is the over-enrichment of water with nutrients, mainly phosphorus in lakes and nitrogen in coastal waters.\n1. Excess nitrate and phosphate enter from agricultural, suburban, and urban runoff, sewage, and industry.\n2. Algae and aquatic plants grow rapidly (algal blooms), turning the water green and murky.\n3. The blooms block light, so submerged plants die.\n4. When the algae die, bacteria decompose them, consuming dissolved oxygen.\n5. Oxygen falls to hypoxic (very low) or anoxic (zero) levels, especially in the bottom water of stratified lakes, creating dead zones where fish and invertebrates die.\n\nSome blooms (cyanobacteria) also release toxins. The Gulf of Mexico dead zone forms every summer from Mississippi River nutrients, mostly from farms in the Midwest.\n\nLake trophic states:\n• Oligotrophic: low nutrients, clear, high oxygen.\n• Mesotrophic: moderate nutrients.\n• Eutrophic: high nutrients, algal blooms, low oxygen at depth.",
        keyPoints: [
          'Excess N and P → algal blooms → die-off → decomposition consumes O₂ → dead zones.',
          'Main anthropogenic sources: agricultural, suburban, and urban runoff; sewage; industry.',
          'Trophic states: oligotrophic (low nutrients) → mesotrophic → eutrophic (high nutrients).',
        ],
      },
      {
        heading: 'How pollutants move',
        content:
          "In surface water:\n• Pollutants travel with the flow and mix and dilute downstream. Load (mass per time) = concentration × discharge.\n• Many pollutants (phosphorus, metals, some pesticides) attach to sediment particles, so they move during high-flow, high-turbidity events and accumulate where sediment settles (reservoirs, floodplains, deltas).\n• Floods flush pollutants from the land; the first flush of urban runoff is often the most polluted.\n\nIn groundwater:\n• Advection: dissolved contaminants move with the groundwater, from high to low hydraulic head, at the seepage velocity (v = K·i / nₑ). Contamination flows downgradient from its source.\n• Dispersion and diffusion spread the contaminant out, so a plume grows longer and wider and its peak concentration decreases with distance.\n• Retardation: some chemicals sorb onto clay and organic matter and travel slower than the water.\n• Degradation: some contaminants are broken down by microbes.\n• Density: light non-aqueous liquids (LNAPLs, e.g., gasoline) float on the water table. Dense ones (DNAPLs, e.g., chlorinated solvents like TCE) sink to the bottom of the aquifer.\n• Karst aquifers transmit pollution very quickly through conduits with almost no filtering, so contamination from the surface can reach springs and wells within hours.\n• Perched water tables and aquitards (clay layers) can isolate contamination from deeper aquifers.\n\nInterestingly, some contaminants are useful as tracers. Tritium from 1950s–60s nuclear testing and CFCs released since the mid-1900s are used to estimate when groundwater was recharged.",
        keyPoints: [
          'Surface water: load = concentration × discharge; sediment-bound pollutants move during floods.',
          'Groundwater: advection (downgradient), dispersion (spreading), sorption (retardation), degradation.',
          'LNAPLs float on the water table; DNAPLs sink.',
          'Karst = rapid, unfiltered transport.',
          'Tritium and CFCs from pollution help date groundwater.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Nutrient load in a river',
        problem: 'A river carries nitrate at 4 mg/L (as N) with a discharge of 50 m³/s. What is the nitrate load in kg/day?',
        steps: [
          'Concentration = 4 mg/L = 4 g/m³ (since 1 m³ = 1,000 L).',
          'Load = 4 g/m³ × 50 m³/s = 200 g/s.',
          'Per day = 200 g/s × 86,400 s = 17,280,000 g ≈ 17,280 kg/day.',
        ],
        answer: 'About 17,300 kg (17.3 tonnes) of nitrogen per day.',
      },
      {
        title: 'When will a contaminant reach the well?',
        problem:
          'A leaking tank is 300 m upgradient of a water-supply well. The aquifer has K = 15 m/day, hydraulic gradient 0.01, and effective porosity 0.3. Ignoring dispersion and retardation, how long until the contamination arrives?',
        steps: [
          'Seepage velocity v = K·i / nₑ = (15 × 0.01) ÷ 0.3 = 0.5 m/day.',
          'Travel time = 300 m ÷ 0.5 m/day = 600 days.',
          'Dispersion means the leading edge arrives somewhat earlier; sorption could delay some chemicals.',
        ],
        answer: 'About 600 days (~1.6 years) for the center of the plume.',
      },
      {
        title: 'Point or nonpoint?',
        problem:
          'Classify each: (a) a wastewater treatment plant pipe, (b) fertilizer runoff from thousands of farms, (c) road salt across a city, (d) an oil spill from a tanker, (e) acid rain falling on a watershed.',
        steps: [
          'Single identifiable outlet = point source: (a) and (d).',
          'Diffuse, widespread source = nonpoint: (b), (c), (e).',
        ],
        answer: 'Point: a, d. Nonpoint: b, c, e.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Road salt that soaks directly into the ground is a point source.',
        reality:
          'Road de-icers are applied over wide areas, so their contamination of groundwater is nonpoint-source pollution regardless of how it reaches the aquifer.',
      },
      {
        misconception: 'Eutrophication kills fish because the algae are poisonous.',
        reality:
          'The main cause is oxygen depletion when bacteria decompose dead algae. (Some cyanobacteria do produce toxins, but hypoxia is the usual killer.)',
      },
      {
        misconception: 'Groundwater is naturally filtered, so it cannot be polluted.',
        reality:
          'Soils filter some contaminants, but dissolved chemicals (nitrate, solvents, salt) pass through, and karst provides almost no filtering. Groundwater cleanup is slow and expensive.',
      },
    ],
    furtherReading: [CIRC_1225, PESTICIDES_GW, PG14_4, CADDIS_STORMWATER],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Previous questions ─────────────────────────
  {
    id: 'exp-hi-previous-questions',
    topic: 'human-impacts',
    subtopic: 'previous-questions',
    title: 'Previous Questions',
    sections: [],
    previousQuestions: [
      // ───── Land-use change ─────
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q42',
        question:
          'Select all that are true of the hydrograph for a region after it is urbanized: A) More rainwater infiltrates B) Less rainwater infiltrates C) Peak discharge is greater D) Peak discharge is lower E) Lag time is longer F) Lag time is shorter',
        answer: 'B, C, F: less infiltration, a greater peak discharge, and a shorter lag time.',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q30',
        question: 'What effect does urbanization have on a hydrograph?',
        answer: 'Urbanization creates impermeable surfaces, producing a steeper rising limb, a higher peak, and a shorter lag time.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q61',
        question:
          'Which of the following WOULD increase the severity of flooding? a) Deforestation b) Plugging up crevasse splays c) Urbanization d) Creation of percolation trenches e) Degradation of riparian zone',
        answer: 'a, c, e: deforestation, urbanization, and riparian-zone degradation. Percolation trenches reduce flooding by increasing infiltration.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q39',
        question:
          'Large forest fires can impact a region\'s hydrology significantly. Select all that are true: A) Reduction in overland flow during heavy rain B) Reduction in soil moisture C) Reduction in infiltration capacity D) Reduction in transpiration rate',
        answer: 'B, C, D. Burned soils become water-repellent (less infiltration, so more overland flow, not less), soil moisture falls, and dead vegetation transpires less.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q17',
        question:
          '(A) Write an equation describing the natural water balance for soil moisture (inputs positive, outputs negative). (B) Describe two ways this equation would be modified by human land use.',
        answer:
          '(A) Δ soil moisture = precipitation − (evapotranspiration + runoff). (B) For example: add an irrigation term; impermeable surfaces increase runoff; agriculture can increase transpiration.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q37',
        question: 'If an area is susceptible to erosion, what land-use change could be implemented to prevent further erosion?',
        answer: 'Soil conservation measures such as planting cover crops on farmland and establishing grassed waterways, which can significantly reduce erosion and stream sediment load.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q51 & Q66',
        question:
          '(51) If a river\'s velocity and turbidity both increase, what happens to water temperature and photosynthesis? How can excess sediment harm the environment? (66) Describe the association between flow rate, turbidity, water temperature, and photosynthesis rate.',
        answer:
          '(51) Temperature increases (suspended sediment absorbs more sunlight) and photosynthesis decreases (less light reaches organisms). Excess sediment lowers water quality and can contribute to eutrophication and ecosystem damage. (66) As flow rate increases, turbidity increases, water temperature increases, and photosynthesis decreases.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q9',
        question:
          'Some rivers have a light brown to cream color because of: A) A high concentration of dissolved minerals B) A large amount of particulates suspended in water C) Light-colored gravels rolling along the bed D) Less-dense material floating on the surface',
        answer: 'B) A large amount of suspended particulates (high turbidity / suspended sediment load).',
      },

      // ───── Engineering structures ─────
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q20 (also Highlands 2022, Q53)',
        question:
          'Which of the following are reasons for removing dams from rivers (mark all that are correct)? Reducing flooding / Allowing fish migration / Reducing the effects of upstream land impacts on stream water quality / Filling of the reservoir behind the dam with sediment',
        answer: 'Allowing fish migration, and filling of the reservoir with sediment.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q38',
        question: 'What are negative environmental impacts of man-made dams?',
        answer:
          'Dams alter aquatic ecology and river hydrology upstream and downstream, affecting water quality, quantity, and breeding grounds. They trap sediment, destroy habitats, and can cause flooding (upstream, of the reservoir area).',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q59',
        question: 'List at least one reason why dams may be disruptive.',
        answer:
          'Dams alter water flow and sediment transport, pushing a stream away from dynamic equilibrium and causing aggradation (upstream, in the reservoir) and degradation (downstream). Also: blocked fish migration, altered temperature and flow regime.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q42',
        question: 'What is channel degradation? What mechanism causes it? How does human activity contribute?',
        answer:
          'Key (summarized): degradation involves a narrowing, steepening channel with less sediment, and dams contribute. More precisely, degradation is lowering of the channel bed by erosion (downcutting). Below a dam, sediment-starved ("hungry") water erodes the bed. Channel straightening, in-stream gravel mining, and increased urban runoff also cause it.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 2 Q8 (True/False)',
        question: 'True/False: The implementation of flood-control dams would cause the floodplain to erode.',
        answer:
          'True. Dams trap sediment and reduce floods, so the floodplain no longer receives new sediment, and sediment-starved water erodes the channel and floodplain downstream.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q48',
        question:
          'Select all that are true regarding freshwater marshes: A) Often found at high elevations B) Moist, well-oxygenated soils C) They reduce the variability of adjacent streamflow D) Some are subject to cyclic changes in water level E) Diversion of water by artificial canals can lead to their decline',
        answer: 'C, D, E. Marshes buffer streamflow, many have cyclic water levels, and diverting water away from them through canals causes their decline.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 5 (Aral Sea)',
        question:
          'The Aral Sea, once the fourth-largest lake in the world, has mostly dried up because of water diversion for cotton irrigation. (1) T/F: The Aral Sea occupies the base-level elevation of its drainage basin. (3) Using P and E (m/yr), surface area S, river inflow I, groundwater inflow G, and river outflow O, write the water balance if the volume stays constant. (4) Write it if the volume decreases at constant rate L. (12) Select all changes that occurred as the Aral Sea shrank: A) Summers hotter, winters colder B) Water got fresher C) Stably stratified, never mixed D) Temperature required for ice formation decreased',
        images: [
          { url: `${IMG}/birdso-s5-aral-sea-timeseries.jpg`, caption: 'The Aral Sea shrinking over time' },
          { url: `${IMG}/birdso-s5-aral-sea-basin-map.jpg`, caption: 'Aral Sea drainage basin (red) with the Syr Darya and Amu Darya' },
        ],
        answer:
          '(1) True: it is a closed (endorheic) basin with no outflow. (3) I + G + SP = SE + O, and O = 0, so I + G + S(P − E) = 0. (4) I + G + S(P − E) = L, where L is negative for a loss (or L = S(E − P) − (I + G) as a positive loss rate). (12) A and D: the climate became more continental, and the saltier water freezes at a lower temperature.',
      },

      // ───── Groundwater extraction ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q103–104',
        question:
          '(103) The numbers on the telephone pole show the height of the ground in each year noted. What is the name of this phenomenon, caused by over-pumping of aquifers? (104) The ground sank 9 m in 22 years uniformly over 500 mi². How much water per second (m³) was pulled out by each of 500 wells? (Assume equal, constant pumping; 1 mi = 1,609 m.)',
        images: [{ url: `${IMG}/rickards-q103-subsidence-pole.jpg`, caption: 'San Joaquin Valley, CA: ground levels in 1925, 1955, and 1977' }],
        answer:
          '(103) Land (ground) subsidence. (104) 500 mi² × (1,609 m/mi)² × 9 m ≈ 1.165 × 10¹⁰ m³. Divided by 22 yr in seconds, that is ≈ 16.8 m³/s, or ≈ 0.0336 m³/s per well.',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 2 Q9',
        question: 'Describe how groundwater depletion occurs and give two negative consequences.',
        answer:
          'Water is drawn from the ground faster than it can be replenished by recharge. Consequences: wells drying up, reduced water in streams and lakes, lower water quality, land subsidence.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q2',
        question:
          'A coastal well supplies groundwater for irrigation. If the fields are threatened with saltwater intrusion, what additional well should be installed, and where? A) Recharge well between the ocean and the well B) Recharge well on the opposite side of the well from the ocean C) Supply well between the ocean and the well D) Supply well on the opposite side from the ocean',
        answer: 'A) A recharge (injection) well between the ocean and the supply well, creating a freshwater mound that blocks saltwater from moving inland.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q24',
        question:
          'When aquifers are used faster than they are replenished, problems occur. What is it called when aquifers in coastal areas start to fill with ocean water? A) Confined B) Saltwater intrusion C) Artesian D) Depletion E) Groundwater',
        answer: 'B) Saltwater intrusion.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q11',
        question:
          'The picture shows a cross-section across Brooklyn and Queens, NY. Suppose a well is drilled to 1,000 m on the Nassau County/Queens County line. Will it cause residents of Nassau County who get water from the Magothy aquifer to have problems with saltwater intrusion? Explain.',
        images: [{ url: `${IMG}/soni22-q11-brooklyn-queens-aquifers.jpg`, caption: 'Cross-section of Brooklyn and Queens aquifers' }],
        answer:
          'No. The deep well draws from the Lloyd aquifer, and the clay layer between the Magothy and Lloyd aquifers prevents the hydraulic gradient from crossing the aquifer boundary.',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q64',
        question: 'Approximately how much of the groundwater extracted on Earth is used for agricultural purposes? A) 15% B) 25% C) 40% D) 70%',
        answer: 'D) About 70%.',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 3 Q9–10 & Q12',
        question:
          '(9) Describe the process of fracking. (10) Is fracking harmful to the environment? Why or why not? (12) What features of deep saline aquifers make them good for storing captured CO₂?',
        answer:
          '(9) Hydraulic fracturing injects fluid (mostly water, with sand and chemicals) at high pressure into shale to fracture it and release oil and natural gas. (The key says "gases," but the injected fluid is primarily water.) (10) Yes: habitat loss and land degradation, possible drinking-water contamination, wastewater disposal problems, air pollution, induced seismicity. (12) The porous aquifer rock can store CO₂, and the aquicludes/aquitards bounding it keep the CO₂ from leaking to the surface.',
      },

      // ───── Water pollution ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q135–147',
        question:
          'Choose the water type(s) each pollution is associated with (groundwater, ocean, surface water): (135) Aquifers (136) Nutrient pollution (137) Oil spills (138) Eutrophication (139) Sediment. Then classify as point or nonpoint: (140) Agricultural runoff (141) Wastewater treatment pipes (142) Rain with chemicals (143) Oil spills (144) Dissolution of toxins from rocks (145) Someone peeing into a river (146) Sunscreen from a popular beach (147) Dissolution of CO₂ from the atmosphere',
        answer:
          '(135) Groundwater. (136–139) Ocean and surface water. Point: (141) wastewater pipes, (143) oil spills, (145) peeing into a river. Nonpoint: (140) agricultural runoff, (142) rain with chemicals, (144) toxins from rocks, (146) sunscreen at a beach, (147) atmospheric CO₂.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q32',
        question:
          'Which of the following are point-source pollution? (Mark all) A) Sewage treatment plant B) Paper mill C) Automobile emissions D) Runoff from a farm E) Runoff from a city',
        answer: 'A and B.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q11',
        question:
          'The contamination of groundwater with road de-icing salt is an example of: A–C) point source pollution (because de-icers are widely applied / percolate directly / source is identifiable) or D–F) non-point source pollution (same three reasons).',
        answer: 'D) Non-point source pollution, because road de-icers are widely applied to areas.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q26–27 (also Highlands 2022, Q54)',
        question:
          '(26) True or false: a sewage outflow is an example of nonpoint pollution. (27) True or false: inflow of groundwater contaminated with agricultural chemicals to an estuary is an example of nonpoint pollution.',
        answer: '(26) False (a sewage outflow is a point source). (27) True.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q52; University of Chicago Invitational 2022, Q23',
        question:
          'Which pollution source can be considered geogenic? (BirdSO) A) Road salt B) Excess fertilizer C) Uranium in bedrock decaying to release radon D) Landfill leachate E) Septic tanks. (UChicago) A) Fertilizer runoff B) Septic leakage C) Radioactive leakage from bedrock into aquifers D) Microplastics',
        answer: 'BirdSO: C) Uranium in bedrock releasing radon. UChicago: C) Radioactive leakage from bedrock into aquifers. Geogenic = naturally derived from rocks.',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 2 Q1–2',
        question:
          '(1) Describe key characteristics of oligotrophic, mesotrophic, and eutrophic lakes. (2) Explain how eutrophication occurs and identify two anthropogenic factors that contribute.',
        answer:
          '(1) Oligotrophic: low nutrients, clear water, high oxygen. Mesotrophic: moderate nutrients. Eutrophic: high nutrients, algal blooms, poor water quality, low oxygen, dead zones. (The key lists "low nutrient levels" for eutrophic, which is a typo.) (2) Excess nutrients (nitrates, phosphates) enter in runoff and fuel algal and plant growth. When they die, decomposers use up the oxygen, creating dead zones. Anthropogenic sources: suburban runoff, agricultural runoff, industrial pollution.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q21–22',
        question:
          '(21) How does acidification affect algal populations? (22) Select all that would help counter acid precipitation: A) Burning low-sulfur fuels and decreasing nitrogen emissions from vehicles B) Adding lye (NaOH) to lakes C) Adding lime (CaCO₃) to lakes and watersheds D) Adding hydrochloric acid E) Increasing methane emissions',
        answer: '(21) Key: populations increase and then collapse, which depletes O₂ in the water. (22) A and C.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q45e',
        question:
          'The town of Whoville has an outbreak of viral hepatitis, a waterborne disease. The source is traced to a contaminated well. How was the well contaminated, and by what?',
        answer: 'By a faulty or damaged septic tank: wastewater containing the virus seeped into the groundwater supply tapped by the well.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q117',
        question: 'Why is groundwater contamination a huge problem for karst formations?',
        answer:
          'Karst is very poor at filtering pollution. Water and contaminants move quickly through sinkholes, fractures, and conduits with little filtration by soil or sediment, reaching springs and wells fast.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q68',
        question: 'What function can contaminants have other than polluting groundwater?',
        answer: 'Measured contaminant levels can be used to determine the age (residence time) of groundwater, e.g., tritium and CFCs as dating tracers.',
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [],
  },
]
