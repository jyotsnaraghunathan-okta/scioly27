const IMG = '/images/previous-questions/lakes-wetlands'
const FG_IMG = '/images/previous-questions/fluvial-geomorphology'

const LAKE_ORIGINS = {
  title: 'Lake Origins',
  source: 'LakeScientist',
  url: 'https://lakescientist.com/?p=8961',
}
const LIMNOLOGY = {
  title: 'Limnology primer (Watershed Academy)',
  source: 'U.S. EPA (PDF)',
  url: 'https://cfpub.epa.gov/watertrain/pdf/limnology.pdf',
}
const CIRC_1308 = {
  title: 'Water Budgets: Foundations for Effective Water-Resources and Environmental Management (Circular 1308)',
  source: 'USGS',
  url: 'https://pubs.usgs.gov/circ/2007/1308/',
}
const WETLAND_TYPES = {
  title: 'Classification and Types of Wetlands',
  source: 'U.S. EPA',
  url: 'https://www.epa.gov/wetlands/classification-and-types-wetlands',
}
const WHAT_IS_WETLAND = {
  title: 'What is a Wetland?',
  source: 'U.S. EPA',
  url: 'https://www.epa.gov/wetlands/what-wetland',
}
const WETLAND_PDF = {
  title: 'Types of Wetlands',
  source: 'U.S. EPA (PDF)',
  url: 'https://www.epa.gov/sites/default/files/2021-01/documents/types_of_wetlands.pdf',
}
const BRITANNICA_WAVES = {
  title: 'Lake: Effects of wave and current action',
  source: 'Britannica',
  url: 'https://britannica.com/science/lake/Effects-of-wave-and-current-action',
}
const PG_SHORELINES = {
  title: 'Chapter 17: Shorelines',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook (PDF)',
  url: 'https://opentextbc.ca/physicalgeology2ed/wp-content/uploads/sites/298/2019/08/Physical-Geology-2nd-Edition-Chapter-17-Shorelines.pdf',
}

export const lakesWetlandsExplanations = [
  // ───────────────────────── Lake formation & types ─────────────────────────
  {
    id: 'exp-lw-lake-formation-types',
    topic: 'lakes-wetlands',
    subtopic: 'lake-formation-types',
    title: 'Lake Formation & Types',
    sections: [
      {
        heading: 'What makes a lake',
        content:
          "A lake needs two things: a closed depression (basin) in the land, and enough water to fill it, from precipitation, streams, and groundwater, to outpace losses. Lakes are classified by how the basin formed. The study of lakes and other inland waters is limnology.\n\nGeologically, lakes are short-lived. Sediment fills them, outlets erode down and drain them, and climate change can dry them up. Most lakes on Earth today are young (formed since the last glaciation), with tectonic lakes like Baikal and Tanganyika as rare old exceptions.",
        keyPoints: [
          'A lake = a closed basin + water supply exceeding losses.',
          'Lakes are classified by how their basin formed.',
          'Limnology = the study of lakes and inland waters.',
          'Most lakes are geologically young and temporary.',
        ],
      },
      {
        heading: 'Tectonic (rift and fault-block) lakes',
        content:
          "Tectonic lakes form where Earth's crust is pulled apart, faulted, or warped.\n\n• Rift and graben lakes: when the crust stretches, a block drops down between parallel normal faults (a graben) while the blocks on either side rise (horsts). The graben fills with water. These lakes are long, narrow, and very deep with steep sides.\n  – Lake Baikal (Siberia) is the world's deepest (≈1,640 m) and oldest (~25 million years) lake. It holds roughly a fifth of Earth's unfrozen surface fresh water.\n  – Lake Tanganyika and Lake Malawi lie in the East African Rift.\n  – Lake Tahoe (California–Nevada) fills a fault-block basin between the uplifted Sierra Nevada and Carson Range.\n• Other tectonic basins form by crustal warping or uplift that isolates part of a sea (e.g., the Caspian Sea).\n\nShape clue: a long, narrow, deep lake, often with a straight fault-bounded shoreline, suggests a rift or graben.",
        keyPoints: [
          'Graben = down-dropped block between faults; horsts = uplifted blocks on either side.',
          'Rift lakes are long, narrow, steep-sided, and very deep (Baikal, Tanganyika, Malawi).',
          'Lake Tahoe = fault-block (graben) basin.',
          'Lake Baikal is the deepest and oldest lake on Earth.',
        ],
      },
      {
        heading: 'Volcanic lakes',
        content:
          "• Caldera lakes: after a massive eruption empties a magma chamber, the summit collapses into a large circular depression (caldera) that fills with rain and snowmelt. Crater Lake, Oregon (deepest U.S. lake, ≈594 m) formed in the caldera of Mount Mazama about 7,700 years ago.\n• Crater lakes and maars: smaller explosion craters that fill with water.\n• Lava-dammed lakes: lava flows block a river valley.\n\nShape clue: a nearly circular lake surrounded by a rim, with streams draining radially away from the surrounding volcano.",
        keyPoints: [
          'Caldera lakes form in collapsed volcanic summits (Crater Lake, OR).',
          'Maars and crater lakes fill explosion craters; lava flows can dam valleys.',
          'Clue: circular shape, steep rim, radial drainage around it.',
        ],
      },
      {
        heading: 'Glacial lakes',
        content:
          "Glaciers created more lakes than any other process, especially across Canada, the northern U.S., and Scandinavia.\n\n• Cirque lakes (tarns): small, deep lakes in bowl-shaped hollows carved by glaciers at the heads of mountain valleys.\n• Paternoster lakes: a chain of tarns strung along a glacial valley like beads on a rosary, connected by a stream.\n• Kettle lakes: a block of ice breaks off a retreating glacier and is partly buried in outwash or till. When it melts, it leaves a depression that fills with water as the water table rises. Kettle-and-kame topography has many small, round kettle ponds.\n• Moraine-dammed lakes: a terminal or recessional moraine blocks a valley.\n• Scoured-basin lakes: glaciers gouge out bedrock basins. The Finger Lakes (New York) and the Great Lakes were deepened by glacial erosion.\n• Proglacial and ice-dammed lakes: meltwater ponds in front of or against an ice sheet. Glacial Lake Agassiz once covered much of central North America.",
        keyPoints: [
          'Tarns (cirque lakes); paternoster lakes = a chain of tarns down a glacial valley.',
          'Kettle lakes = melted buried ice blocks in outwash or till.',
          'Moraine-dammed, scoured-basin (Finger Lakes, Great Lakes), and proglacial lakes (Lake Agassiz).',
        ],
      },
      {
        heading: 'Fluvial, solution, and other lake types',
        content:
          "• Fluvial lakes: oxbow lakes (cut-off meanders), floodplain and levee-dammed lakes, delta lakes, and plunge-pool lakes at the foot of former waterfalls.\n• Solution (karst) lakes: sinkholes in limestone that fill with water where they intersect the water table (common in Florida).\n• Landslide-dammed lakes: a landslide blocks a valley.\n• Aeolian lakes: wind scours a deflation basin, or water collects between sand dunes.\n• Shoreline lakes: lagoons cut off from the sea or a large lake by a sand bar or barrier.\n• Meteorite (impact) lakes: fill impact craters (e.g., Pingualuit, Quebec).\n• Organic lakes: beaver ponds; lakes dammed by vegetation.\n• Thermokarst lakes: form when ground ice in permafrost melts and the ground subsides.\n• Anthropogenic lakes: reservoirs behind dams; flooded quarries.\n\nBy drainage:\n• Exorheic (open) lakes drain by rivers that eventually reach the ocean.\n• Endorheic (closed, terminal) lakes have no outlet to the sea and lose water only by evaporation and seepage, so they are usually saline. Examples: the Great Salt Lake (a remnant of Lake Bonneville), the Dead Sea, the Aral Sea, the Caspian Sea.\n• Ephemeral lakes and playas: fill briefly after rain and are dry most of the time.\n\nBy salinity (approximate): fresh < 0.05%, brackish ≈ 0.05–3%, saline ≈ 3–5%, brine > 5%.",
        keyPoints: [
          'Fluvial (oxbow, levee), solution/sinkhole, landslide, aeolian, shoreline, meteorite, organic, thermokarst, and human-made lakes.',
          'Exorheic = drains to the sea; endorheic = closed basin, usually saline.',
          'Playa/ephemeral lake = usually dry, fills briefly after rain.',
          'Salinity: fresh < brackish < saline < brine.',
        ],
      },
      {
        heading: 'Lake morphometry: reading a lake\'s shape',
        content:
          "Morphometry is the measurement of a lake's shape and size: area, maximum and mean depth, volume, shoreline length.\n\nThe shoreline development index (D_L) compares a lake's shoreline length (L) with the circumference of a circle of the same area (A):\n\n    D_L = L ÷ (2√(πA))\n\n• A perfect circle has D_L = 1 (typical of caldera and kettle lakes).\n• Long, narrow, or highly irregular shorelines give larger values (rift lakes, dendritic reservoirs in flooded valleys).\n• Higher D_L means more shallow, near-shore (littoral) habitat relative to the lake's size. That often means more nutrients and biological productivity.\n\nShape clues to origin: long and narrow → rift or glacial trough; circular → caldera, crater, kettle, or sinkhole; crescent → oxbow; chain of small lakes → paternoster; branching (dendritic) → dammed river valley (reservoir).",
        keyPoints: [
          'Shoreline development index D_L = L / (2√(πA)); a circle = 1.',
          'Higher D_L → more irregular shoreline and more littoral habitat.',
          'Shape hints at origin: narrow = rift; round = caldera, kettle, sinkhole; crescent = oxbow.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Shoreline development index',
        problem:
          'Lake A has an area of 25 km² and a shoreline of 18 km. Lake B has an area of 25 km² and a shoreline of 60 km. Calculate D_L for each and interpret.',
        steps: [
          'Circle circumference with the same area: 2√(π × 25) = 2√78.54 = 2 × 8.86 = 17.7 km.',
          'Lake A: D_L = 18 ÷ 17.7 ≈ 1.02, almost circular (e.g., a caldera or kettle lake).',
          'Lake B: D_L = 60 ÷ 17.7 ≈ 3.4, a highly irregular or elongated shoreline (e.g., a rift lake or a reservoir in a branching valley).',
        ],
        answer: 'A ≈ 1.0 (nearly circular); B ≈ 3.4 (very irregular, more littoral habitat).',
      },
      {
        title: 'Identify the lake type',
        problem:
          'Classify: (1) a 650 km long, 1.6 km deep lake between parallel mountain ranges; (2) a small round pond in a field of hummocky glacial outwash; (3) a crescent-shaped lake beside a meandering river; (4) a round lake on top of a volcano with streams radiating outward.',
        steps: [
          '(1) Long, narrow, very deep between mountains → tectonic rift/graben lake.',
          '(2) Round pond in outwash → kettle lake.',
          '(3) Crescent beside a meandering river → oxbow (fluvial) lake.',
          '(4) Round lake on a volcano with radial drainage → caldera (volcanic) lake.',
        ],
        answer: '(1) Tectonic rift; (2) kettle; (3) oxbow; (4) caldera.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Kettle lakes form when glaciers carve deep basins.',
        reality: 'Kettles form when buried blocks of stagnant ice melt, leaving depressions. Glacially carved basins are tarns or scoured-basin lakes.',
      },
      {
        misconception: 'All lakes have an outlet to the sea.',
        reality: 'Endorheic (closed-basin) lakes such as the Great Salt Lake lose water only by evaporation and seepage, so they accumulate salts.',
      },
      {
        misconception: 'Crater Lake (Oregon) formed in a meteorite crater.',
        reality: 'It formed in the caldera left by the collapse of the volcano Mount Mazama.',
      },
    ],
    furtherReading: [LAKE_ORIGINS, LIMNOLOGY],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Lake water budgets ─────────────────────────
  {
    id: 'exp-lw-lake-water-budgets',
    topic: 'lakes-wetlands',
    subtopic: 'lake-water-budgets',
    title: 'Lake Water Budgets (Inflow/Outflow)',
    sections: [
      {
        heading: 'The water-budget equation',
        content:
          "A water budget accounts for every way water enters and leaves a lake (USGS Circular 1308):\n\n    change in storage (ΔS) = inflows − outflows\n    ΔS = (P + Sᵢ + Gᵢ) − (E + Sₒ + Gₒ + withdrawals)\n\n• P = precipitation directly on the lake surface (depth × lake area)\n• Sᵢ = surface inflow from streams and overland runoff\n• Gᵢ = groundwater seepage into the lake\n• E = evaporation from the lake surface (depth × lake area)\n• Sₒ = surface outflow through outlet streams\n• Gₒ = seepage out through the lake bed\n• Withdrawals = pumping and diversions\n\nIf inflows = outflows, the lake is in equilibrium (steady state) and its level stays constant. If outflows exceed inflows, the level falls; if inflows exceed outflows, it rises.\n\nUnits: precipitation and evaporation are usually given as depths per year (m/yr). Multiply by surface area to convert to volume per year (m³/yr) before adding them to stream discharges. To convert between per-second and per-year rates, use 1 yr ≈ 3.15 × 10⁷ s.",
        keyPoints: [
          'ΔS = (P + surface in + groundwater in) − (E + surface out + groundwater out).',
          'Convert P and E depths to volumes: depth × lake area.',
          'Equilibrium: inflow = outflow, so the lake level is constant.',
          '1 year ≈ 3.15 × 10⁷ seconds.',
        ],
      },
      {
        heading: 'Residence (flushing) time',
        content:
          "Residence time (also called flushing time or renewal time) is the average time water spends in the lake:\n\n    residence time = lake volume ÷ outflow rate (or inflow rate, at steady state)\n\n• Small lakes with large rivers flowing through them flush in days to months.\n• Large, deep lakes with small inflows have long residence times. Lake Tahoe's is roughly 650 years, and Lake Superior's is on the order of 190 years.\n• Long residence times mean pollutants and nutrients that enter stay a long time and are slow to flush out. They also mean high water clarity when inflows are clean.",
        keyPoints: [
          'Residence time = volume ÷ outflow (or inflow) rate.',
          'Large, deep lakes with small inflows → long residence times (Tahoe ~650 years).',
          'Long residence time → pollutants persist.',
        ],
      },
      {
        heading: 'Open, closed, and seepage lakes',
        content:
          "• Drainage (open, exorheic) lakes have inlet and outlet streams. Surface flow usually dominates their budget.\n• Closed (endorheic, terminal) lakes have no surface outlet. Evaporation is the main (often only) way water leaves, so salts left behind accumulate and the lake becomes saline. Their level is very sensitive to changes in inflow. Diverting inflow (e.g., the Aral Sea, Owens Lake) makes them shrink until evaporation from the smaller surface balances the reduced inflow:\n      I + G + S(P − E) = 0  (constant volume)\n• Seepage lakes have no surface inlets or outlets. They exchange water only with groundwater and the atmosphere.\n• Spring-fed and groundwater-fed lakes receive most of their water from groundwater and may drain by an outlet stream.\n\nSalinity and lake level are linked in closed lakes. When the level rises (more inflow), salts are diluted and salinity falls. When it drops (evaporation), salinity rises.",
        keyPoints: [
          'Drainage lakes: inlet + outlet streams.',
          'Closed (endorheic) lakes: evaporation is the outflow, so salinity builds up.',
          'Seepage lakes: groundwater + precipitation in; evaporation + seepage out.',
          'In closed lakes, salinity falls as lake level rises.',
        ],
      },
      {
        heading: 'Lakes and groundwater',
        content:
          "Lakes interact with groundwater in three basic ways (USGS Circular 1139):\n• Gaining (discharge) lakes: the water table around the lake is higher than the lake surface, so groundwater flows in on all sides.\n• Losing (recharge) lakes: the lake surface is higher than the surrounding water table, so lake water seeps out into the ground. Reservoirs often stand higher than the adjacent groundwater level.\n• Flow-through lakes: groundwater flows in on the upgradient side and out on the downgradient side, the most common case.\n\nOn a water-table contour map, groundwater-flow arrows pointing toward the lake on every side indicate a lake fed by groundwater.\n\nDetails:\n• Seepage is concentrated near the shore, where the lake bed sediments are sandier and the flow paths are short.\n• A stagnation zone (where groundwater flow lines diverge) can develop beneath a lake. While it persists, it prevents the lake from losing water through its deeper bed.\n• Plants around the shoreline (e.g., willows) transpire groundwater during the growing season. This can locally lower the water table below the lake level, so water flows out at the margins even while inflow continues beneath the bed.",
        keyPoints: [
          'Gaining (discharge), losing (recharge), and flow-through lakes.',
          'Reservoirs often stand above the local water table and leak into it.',
          'Seepage is concentrated near shore; transpiration by shoreline plants can reverse the flow locally.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Outflow of a lake in equilibrium (SONI-style)',
        problem:
          'A lake 250 km long and 100 km wide receives 1.0 m/yr of rain and loses 0.6 m/yr to evaporation. River inflow averages 1,000 m³/s. Assuming the level is constant and no groundwater exchange, what is the average outflow?',
        steps: [
          'Area = 250,000 m × 100,000 m = 2.5 × 10¹⁰ m².',
          'Net precipitation = (1.0 − 0.6) m/yr × 2.5 × 10¹⁰ m² = 1.0 × 10¹⁰ m³/yr.',
          'Convert: 1.0 × 10¹⁰ ÷ 3.15 × 10⁷ s ≈ 317 m³/s.',
          'Outflow = inflow + net precipitation = 1,000 + 317 ≈ 1,317 m³/s.',
        ],
        answer: 'About 1,317 m³/s.',
      },
      {
        title: 'Residence time',
        problem:
          'A lake holds 2.1 × 10⁹ m³ of water. Its only outflow is a river discharging 30 m³/s. At steady state, what is the residence time?',
        steps: [
          'Outflow per year = 30 m³/s × 3.15 × 10⁷ s/yr ≈ 9.45 × 10⁸ m³/yr.',
          'Residence time = 2.1 × 10⁹ ÷ 9.45 × 10⁸ ≈ 2.2 years.',
        ],
        answer: 'About 2.2 years (~810 days).',
      },
      {
        title: 'Is the lake rising or falling?',
        problem:
          'A lake receives 4.0 × 10¹⁰ ft³/yr in total inflow. Its outlet creek discharges 1,350 ft³/s. Will the lake level rise or fall?',
        steps: [
          'Outflow per year = 1,350 ft³/s × 3.15 × 10⁷ s ≈ 4.26 × 10¹⁰ ft³/yr.',
          'Outflow (4.26 × 10¹⁰) > inflow (4.0 × 10¹⁰).',
        ],
        answer: 'The lake level will fall, because outflow exceeds inflow.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Precipitation in m/yr can be added directly to river inflow in m³/s.',
        reality: 'Multiply precipitation and evaporation depths by lake area, then convert time units, so all terms are volumes per the same time.',
      },
      {
        misconception: 'A closed lake with no outlet will keep filling forever.',
        reality: 'Closed lakes grow until evaporation from their larger surface balances inflow, then stabilize, accumulating salt.',
      },
      {
        misconception: 'Lakes only gain water from groundwater.',
        reality: 'Lakes can gain, lose, or both (flow-through), depending on the surrounding water table.',
      },
    ],
    furtherReading: [CIRC_1308, LIMNOLOGY],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Stratification & properties ─────────────────────────
  {
    id: 'exp-lw-stratification-properties',
    topic: 'lakes-wetlands',
    subtopic: 'stratification-properties',
    title: 'Physical & Chemical Properties, Stratification & Turnover',
    sections: [
      {
        heading: 'Why lakes stratify: water density',
        content:
          "Fresh water is densest at about 4 °C. Water warmer than 4 °C, and water colder than 4 °C (down to ice at 0 °C), is less dense. Ice floats, which is why lakes freeze from the top down and bottom water in deep lakes stays near 4 °C.\n\nIn summer, the sun warms the surface, and the warm, light water floats on cold, dense bottom water. The lake divides into layers:\n• Epilimnion: the warm, well-lit, wind-mixed surface layer.\n• Metalimnion: the middle layer, where temperature drops rapidly with depth. The plane of maximum temperature change within it is the thermocline.\n• Hypolimnion: the cold, dark, dense bottom layer, isolated from the atmosphere.\n\nThe stronger the temperature (density) difference, the more stable the stratification and the more energy wind needs to mix it.\n• Schmidt stability is the energy (in joules) needed to mix the lake fully.\n• The Richardson number compares density stratification to wind shear. When it falls below about 0.25, turbulence wins and the water mixes.\n\nSalinity also raises density. Saltier water sinks below fresher water, which can produce permanent stratification (meromixis). In salty lakes, mixing can be driven by evaporation (which concentrates salt at the surface) and by ice formation, which leaves salty brine behind (brine rejection).",
        keyPoints: [
          'Fresh water is densest at ~4 °C; ice floats.',
          'Layers: epilimnion (warm, mixed) / metalimnion with thermocline / hypolimnion (cold, dense).',
          'Stability: Schmidt stability (J); Richardson number < 0.25 → mixing.',
          'Salinity increases density and can cause permanent stratification.',
        ],
      },
      {
        heading: 'The seasonal cycle and turnover (dimictic lakes)',
        content:
          "A typical temperate (mid-latitude) lake that freezes in winter is dimictic: it mixes completely twice a year.\n1. Summer stratification: a warm epilimnion over a cold hypolimnion, with a strong thermocline (strongest in July–August in the Northern Hemisphere). The hypolimnion is cut off from the air, so decomposition can use up its oxygen.\n2. Fall turnover: the surface cools. When it reaches the same temperature (density) as the deeper water, density differences vanish and wind mixes the whole lake top to bottom.\n3. Winter inverse stratification: under the ice, surface water near 0 °C sits on top of denser 4 °C water. Temperature increases with depth (the reverse of summer).\n4. Spring turnover: the ice melts and the surface warms toward 4 °C, becomes densest, sinks, and with wind the lake mixes completely again.\n\nWhy turnover matters: mixing carries oxygen from the surface down to the bottom water and carries nutrients that accumulated at the bottom up to the sunlit surface. This often triggers spring and fall algal blooms. Hypolimnion oxygen is therefore highest just after the spring and fall turnovers.",
        keyPoints: [
          'Dimictic: stratified in summer, inverse-stratified under ice in winter, mixes in spring and fall.',
          'Turnover happens when surface and bottom temperatures (densities) equalize and wind mixes the lake.',
          'Turnover reoxygenates bottom water and brings nutrients to the surface.',
          'Winter under ice: 0 °C on top, 4 °C at the bottom.',
        ],
      },
      {
        heading: 'Mixing types around the world',
        content:
          "How often a lake mixes depends mainly on climate (latitude and altitude) and depth (Lewis, 1983):\n• Amictic: permanently ice-covered, never mixes (e.g., some Antarctic lakes).\n• Cold monomictic: ice-covered most of the year. It never warms above 4 °C and mixes once, in summer (polar and high-altitude lakes).\n• Dimictic: mixes twice, in spring and fall (temperate lakes that freeze).\n• Warm monomictic: never freezes. It stratifies in summer and mixes once, in winter (warm temperate lakes such as Lake Tahoe).\n• Polymictic: shallow lakes that mix often, even daily, because wind can stir them to the bottom.\n• Oligomictic: warm tropical lakes with small temperature differences. Usually stratified, they mix only rarely and irregularly.\n• Meromictic: never mix completely. A dense, often salty bottom layer (the monimolimnion) stays isolated, separated by a chemocline.",
        keyPoints: [
          'Amictic (ice year-round) → cold monomictic (mixes in summer) → dimictic (spring and fall) → warm monomictic (winter).',
          'Polymictic = shallow, mixes often; oligomictic = tropical, mixes rarely.',
          'Meromictic = never fully mixes (salty bottom layer).',
        ],
      },
      {
        heading: 'Light, oxygen, nutrients, and lake zones',
        content:
          "Light decreases exponentially with depth (Beer-Lambert law):\n    I_z = I₀ × e^(−k z)\nwhere k is the extinction coefficient. Clearer water has a smaller k.\n• The photic (euphotic) zone extends down to where about 1% of surface light remains, where photosynthesis can occur. Below it is the aphotic zone.\n• Water clarity is measured with a Secchi disk.\n• Clean, clear lakes look blue because water absorbs red light and scatters blue. Algae make lakes green; tannins from wetlands make water brown.\n\nDissolved gases:\n• Cold water holds more dissolved oxygen (and CO₂) than warm water. As lakes warm in summer, dissolved O₂ and CO₂ both tend to decrease.\n• Photosynthesis adds O₂ near the surface; decomposition consumes O₂ in the hypolimnion and sediments, which can go anoxic in summer (especially in productive lakes).\n\nLake zones:\n• Littoral: the shallow near-shore zone with rooted plants.\n• Limnetic (pelagic): the open-water zone, where light supports plankton.\n• Profundal: deep water below the photic zone.\n• Benthic: the lake bottom. Bacteria there decompose organic matter (the lake's \"digestive system\").\n\nTrophic state:\n• Oligotrophic: low nutrients, clear water, high oxygen, few algae; often deep, cold lakes.\n• Mesotrophic: moderate nutrients and productivity.\n• Eutrophic: high nutrients, algal blooms, murky water, oxygen depletion at depth.\nTotal phosphorus is usually directly related to chlorophyll a (algae) and inversely related to light penetration.",
        keyPoints: [
          'Light: I = I₀ e^(−kz); photic zone down to ~1% light.',
          'Warmer water holds less dissolved oxygen and CO₂.',
          'Zones: littoral, limnetic, profundal, benthic.',
          'Trophic states: oligotrophic, mesotrophic, eutrophic; phosphorus drives algae.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Light at depth',
        problem: 'Surface light intensity is 1,380 W/m². The extinction coefficient is 0.3 m⁻¹. What is the light intensity at 20 m depth?',
        steps: [
          'I = I₀ × e^(−kz) = 1,380 × e^(−0.3 × 20) = 1,380 × e^(−6).',
          'e^(−6) ≈ 0.00248.',
          'I ≈ 1,380 × 0.00248 ≈ 3.42 W/m².',
        ],
        answer: 'About 3.4 W/m², only 0.25% of the surface light, below the photic zone.',
      },
      {
        title: 'Ordering layers by density',
        problem:
          'Four layers: (1) 4.02 °C, salinity 0.01%; (2) 4.02 °C, 0.02%; (3) 3.98 °C, 0.02%; (4) 3.98 °C, 0.03%. Order them from bottom to top.',
        steps: [
          'All temperatures are almost exactly at the 4 °C maximum density, so salinity controls density.',
          'Highest salinity (layer 4, 0.03%) is densest → bottom.',
          'Layers 2 and 3 have equal salinity (0.02%); the key places 3 below 2.',
          'Lowest salinity (layer 1) → top.',
        ],
        answer: 'Bottom to top: 4, 3, 2, 1.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Water is densest at 0 °C, so ice sinks.',
        reality: 'Fresh water is densest at about 4 °C. Ice and near-0 °C water are lighter and float, so lakes freeze from the top down.',
      },
      {
        misconception: 'Lakes turn over because the bottom water heats up.',
        reality: 'Turnover happens when the surface water cools (fall) or warms (spring) to the same density as the deep water, letting wind mix the whole column.',
      },
      {
        misconception: 'The thermocline is a layer of the lake.',
        reality: 'The thermocline is the plane of fastest temperature change within the metalimnion (the middle layer).',
      },
    ],
    furtherReading: [LIMNOLOGY],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Shoreline processes ─────────────────────────
  {
    id: 'exp-lw-shoreline-processes',
    topic: 'lakes-wetlands',
    subtopic: 'shoreline-processes',
    title: 'Shoreline Processes',
    sections: [
      {
        heading: 'Waves on lakes',
        content:
          "Wind blowing over a lake creates waves. Wave size depends on:\n• Wind speed\n• Duration (how long the wind blows)\n• Fetch (the distance of open water the wind blows across)\nLarge lakes with long fetch (e.g., the Great Lakes) produce ocean-like waves during storms; small ponds produce only ripples.\n\nWaves are classified by the force that restores the water surface to flat:\n• Capillary waves (ripples): tiny waves (wavelength < ~1.7 cm) restored by surface tension.\n• Gravity waves: ordinary wind waves, restored by gravity.\n• Seiches: standing waves in which the entire lake surface sloshes back and forth like water in a bathtub. Wavelength is comparable to the lake length, with periods of minutes to hours.\nOrder by wavelength: capillary < gravity < seiche.\n\nSeiches:\n• They are mainly wind-driven. Strong winds pile water up at the downwind end (wind setup); when the wind stops, the water sloshes back. Air-pressure changes from storms contribute.\n• They can raise water levels by a metre or more at one end, causing lakeshore flooding (Lake Erie is famous for this).\n• Internal seiches oscillate along the thermocline inside stratified lakes, with much larger amplitude but little surface expression.",
        keyPoints: [
          'Wave size depends on wind speed, duration, and fetch.',
          'Capillary waves (surface tension) < gravity waves < seiches (whole-lake sloshing).',
          'Seiches are mainly wind-driven and can cause shoreline flooding.',
          'Internal seiches oscillate along the thermocline.',
        ],
      },
      {
        heading: 'Currents and Langmuir circulation',
        content:
          "• Wind-driven surface currents push surface water downwind, causing setup at the downwind shore and sometimes upwelling of cold bottom water at the upwind shore.\n• Longshore currents: waves striking the shore at an angle drive a current along the shoreline, moving sand by longshore drift.\n• Langmuir circulation: steady wind creates pairs of counter-rotating spiral vortices aligned parallel to the wind. Where neighbouring vortices converge at the surface, floating material (foam, bubbles, leaves, algae) collects in long streaks called windrows, parallel to the wind direction. Water sinks beneath the convergence lines and rises beneath the divergence zones. So if windrows run north-south, the wind is blowing from the north or the south.",
        keyPoints: [
          'Wind setup piles water downwind; upwelling can occur upwind.',
          'Longshore currents and drift move sand along the shore.',
          'Langmuir circulation: windrows parallel to the wind from counter-rotating vortices.',
        ],
      },
      {
        heading: 'Shoreline erosion and deposition',
        content:
          "Wave action shapes lake shorelines much as it shapes sea coasts, on a smaller scale.\n\nErosional features (exposed, high-energy shores):\n• Wave-cut cliffs and notches, and wave-cut terraces (platforms) at the base of retreating cliffs.\n• Headlands are eroded as wave energy concentrates on them (wave refraction).\n\nDepositional features (sheltered bays, downdrift areas):\n• Beaches of sand and gravel.\n• Spits and bars built by longshore drift.\n• Barrier beaches that can cut off lagoons or small lakes.\n• Deltas where streams enter the lake.\n• Ice-push ridges where wind-driven lake ice shoves sediment onto the shore.\n\nFormer shorelines: when a lake shrinks, its old beaches, wave-cut terraces, and deltas are left high above the modern lake as strandlines or shorelines. The terraces on the mountains around Utah's Great Salt Lake record the much larger ice-age Lake Bonneville.\n\nHuman impacts: high water levels and storms accelerate bluff erosion on the Great Lakes. Breakwaters and groins interrupt longshore drift, building beaches updrift and eroding them downdrift.",
        keyPoints: [
          'Erosion: wave-cut cliffs, notches, terraces; headlands attacked by wave refraction.',
          'Deposition: beaches, spits, bars, barrier beaches, deltas.',
          'Old strandlines and terraces record former lake levels (Lake Bonneville).',
          'Groins and breakwaters disrupt longshore drift.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Reading windrows',
        problem:
          'On a summer afternoon, you notice long parallel streaks of foam and bubbles on a lake, running east-west. From what direction could the wind be blowing, and what process is this?',
        steps: [
          'Windrows from Langmuir circulation line up parallel to the wind.',
          'The streaks run east-west, so the wind is blowing along that line.',
        ],
        answer: 'The wind is from the east or the west; the streaks are Langmuir circulation windrows.',
      },
      {
        title: 'Fetch and wave size',
        problem:
          'The same 50 km/h wind blows for 6 hours over Lake A (fetch 2 km) and Lake B (fetch 300 km). Which has larger waves, and why?',
        steps: [
          'Wave height grows with wind speed, duration, and fetch.',
          'Wind speed and duration are equal, but Lake B offers 150 times more fetch for waves to grow.',
        ],
        answer: 'Lake B. Its much longer fetch lets the waves keep building.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Seiches are caused by tides.',
        reality: 'Lake seiches are driven mainly by wind and atmospheric pressure changes. Tidal forces on lakes are negligible.',
      },
      {
        misconception: 'Windrows (foam lines) form perpendicular to the wind.',
        reality: 'Langmuir windrows line up parallel to the wind direction.',
      },
    ],
    furtherReading: [BRITANNICA_WAVES, PG_SHORELINES],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Wetlands ─────────────────────────
  {
    id: 'exp-lw-wetlands',
    topic: 'lakes-wetlands',
    subtopic: 'wetlands',
    title: 'Wetland Types, Formation & Hydrology',
    sections: [
      {
        heading: 'What makes a wetland',
        content:
          "Wetlands are areas where water covers the soil or is present at or near the surface for all or part of the year, including during the growing season (EPA). Three features define them:\n• Hydrology: saturation or flooding for long enough to affect soils and plants.\n• Hydric soils: soils that develop without oxygen (anaerobic) because of saturation. They are often gray with rust-colored mottles, or rich in organic matter.\n• Hydrophytes: plants adapted to wet, low-oxygen conditions (cattails, sedges, cypress, sphagnum moss).\n\nThe hydroperiod (the seasonal pattern of water depth and duration) is the single most important control on what kind of wetland develops. Wetlands occur where water collects or the water table meets the surface: depressions (including kettles and other glacial hollows), floodplains, lake margins, coastlines, and groundwater discharge zones such as springs and seeps.\n\nGlaciated landscapes have many more wetlands than unglaciated ones. Glaciers left poorly drained, irregular terrain full of depressions and young, disorganized drainage networks.",
        keyPoints: [
          'Wetland = hydrology + hydric soils + hydrophytic vegetation.',
          'The hydroperiod controls wetland type.',
          'Wetlands form in depressions, floodplains, lake edges, coasts, and groundwater discharge areas.',
          'Glaciated regions have abundant wetlands.',
        ],
      },
      {
        heading: 'The four main types: marsh, swamp, bog, fen',
        content:
          "Marshes:\n• Dominated by soft-stemmed herbaceous plants: grasses, reeds, rushes, cattails, sedges.\n• Fed mainly by surface water (streams, lakes, tides, floods) and often groundwater.\n• Mineral or mucky soils, often near-neutral pH, nutrient-rich and highly productive.\n• Types: tidal salt marshes, tidal freshwater marshes, and inland (non-tidal) freshwater marshes. The Florida Everglades is a vast freshwater marsh (the \"River of Grass\"). Prairie potholes are glacial-depression marshes.\n\nSwamps:\n• Dominated by woody plants: trees (forested swamps, e.g., bald cypress, red maple) or shrubs (shrub swamps). Mangrove swamps occur on tropical coasts.\n• Fed by surface water (river flooding), groundwater, and precipitation, often with saturated soils and seasonal standing water.\n• Common on floodplains of large rivers (bottomland hardwood swamps).\n\nBogs:\n• Peat-accumulating wetlands with spongy, acidic peat dominated by sphagnum moss, plus evergreen shrubs, black spruce, and carnivorous plants (pitcher plants, sundews).\n• Ombrotrophic: fed almost entirely by precipitation, with little or no surface or groundwater inflow. So they are very nutrient-poor (oligotrophic), acidic, and low in oxygen (often anoxic).\n• Water draining from bogs is brown from tannins and humic acids.\n• Develop slowly (thousands of years), mainly in cool northern climates. They often begin as kettle lakes that fill in (terrestrialization, sometimes forming floating \"quaking bogs\").\n\nFens:\n• Also peat-forming, but fed by groundwater (minerotrophic), so they are less acidic (neutral to alkaline), richer in nutrients, and dominated by grasses, sedges, reeds, and wildflowers.\n• A fen can turn into a bog as peat builds up above the reach of groundwater.\n\nA peatland is any wetland with thick peat: bogs and fens.",
        keyPoints: [
          'Marsh = herbaceous (grasses, cattails); surface/groundwater fed; tidal or inland; e.g., the Everglades.',
          'Swamp = woody (trees or shrubs); floodplains and mangroves.',
          'Bog = peat + sphagnum; rain-fed (ombrotrophic), acidic, nutrient-poor, anoxic; slow to form.',
          'Fen = peat; groundwater-fed (minerotrophic), less acidic, more nutrients, sedges and grasses.',
        ],
      },
      {
        heading: 'Wetland hydrology and functions',
        content:
          "Water sources set the chemistry:\n• Precipitation-fed (bogs): very low in dissolved minerals and acidic.\n• Groundwater-fed (fens, spring-fed marshes): mineral-rich with stable water levels.\n• Surface-water-fed (riverine marshes and swamps): seasonal flooding brings sediment and nutrients.\n• Many wetlands experience cyclic water-level changes (seasonal flooding and drying, or tides).\n\nFunctions (ecosystem services):\n• Flood control: wetlands store floodwater and release it slowly, lowering flood peaks and reducing the variability of downstream streamflow.\n• Water quality: plants and sediments trap sediment and absorb or transform nutrients (nitrogen, phosphorus) and some pollutants.\n• Groundwater recharge and discharge, and baseflow support.\n• Shoreline protection: coastal marshes and mangroves buffer storm surges and waves.\n• Habitat: nurseries for fish and waterfowl, and habitat for many endangered species.\n• Carbon storage: peatlands store enormous amounts of carbon in slowly decaying peat.\n\nLosses: the lower 48 U.S. states have lost more than half of their original wetlands, mainly to drainage for agriculture and development. Diverting water away from wetlands (canals, levees, groundwater pumping) also causes their decline, as in parts of the Everglades. Draining peatlands releases their stored carbon.",
        keyPoints: [
          'Water source → chemistry: rain (bog) vs groundwater (fen) vs surface flooding (marsh/swamp).',
          'Functions: flood storage, water filtering, recharge, habitat, shoreline protection, carbon storage.',
          'More than half of U.S. wetlands have been lost; drainage and diversion cause decline.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Classify the wetland',
        problem:
          'Location X: cypress trees, buttonbush shrubs, cattails. Location Y: sphagnum moss, water chestnut sedge, pitcher plants. Location Z: sawgrass, cattails, papyrus sedge. Classify each.',
        steps: [
          'X has trees and shrubs (woody plants) → swamp.',
          'Y has sphagnum moss and carnivorous pitcher plants (acidic, nutrient-poor peat) → bog.',
          'Z has only grasses and sedges (herbaceous) → marsh.',
        ],
        answer: 'X = swamp, Y = bog, Z = marsh.',
      },
      {
        title: 'Bog or fen?',
        problem:
          'Two peatlands are side by side. Peatland 1 has water with pH 4.0, very low calcium, and is fed only by rain. Peatland 2 has pH 7.2, high calcium, and springs feeding it. Identify each.',
        steps: [
          'Rain-fed (ombrotrophic), acidic, mineral-poor peat → bog.',
          'Groundwater-fed (minerotrophic), neutral, mineral-rich peat → fen.',
        ],
        answer: 'Peatland 1 = bog; Peatland 2 = fen.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Bogs are nutrient-rich because they are full of plant material.',
        reality: 'Bogs are fed only by rain, so they are acidic and very nutrient-poor (oligotrophic). Their plants decay slowly and accumulate as peat.',
      },
      {
        misconception: 'Marshes and swamps are the same thing.',
        reality: 'Marshes are dominated by herbaceous plants (grasses, cattails). Swamps are dominated by woody plants (trees, shrubs).',
      },
      {
        misconception: 'Wetlands are wasteland with no value.',
        reality: 'Wetlands reduce floods, filter pollutants, recharge groundwater, protect shores, store carbon, and support huge biodiversity.',
      },
    ],
    furtherReading: [WHAT_IS_WETLAND, WETLAND_TYPES, WETLAND_PDF],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Previous questions ─────────────────────────
  {
    id: 'exp-lw-previous-questions',
    topic: 'lakes-wetlands',
    subtopic: 'previous-questions',
    title: 'Previous Questions',
    sections: [],
    previousQuestions: [
      // ───── Lake formation & types ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q28–30',
        question:
          '(28) Lake Tahoe lies in the Sierra Nevada, formed in the Nevadan orogeny. What type of lake is it (by formation)? (29) The Tahoe Basin sank between two parallel faults as the mountains on either side rose. The block that slid down is a ___; the blocks that rose are ___. (30) Many rivers feed Lake Tahoe but only one flows out, and its water never reaches the ocean. What does this classify the system as?',
        answer: '(28) Tectonic lake. (29) Graben; horsts. (30) Endorheic.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q40–45',
        question:
          '(40) An extraterrestrial object leaves a crater that fills with water. What type of lake? (41) Crater Lake, Oregon, formed in a volcano\'s caldera. What type? (42) An aeolian lake is: a) formed by wind erosion b) formed by glacial erosion c) dug by animals d) human-made. (43) An ice block from a retreating glacier melts, leaving a water-filled hole. What type? (44) What is the study of lakes called? (45) What is the closed lake in Utah, and another name for a closed lake?',
        answer: '(40) Meteorite (impact) lake. (41) Volcanic lake. (42) a) Formed by wind erosion. (43) Kettle lake. (44) Limnology. (45) Great Salt Lake (accept Lake Bonneville); endorheic.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q66–69',
        question:
          'Compare Lake Baikal and Crater Lake (Images 13 and 14). (66) Which has a higher shoreline development index? (67) Which likely has the most nutrients? (68) Which likely has a higher rate of evaporation? (69) Describe how each formed, based on shape and other clues.',
        images: [{ url: `${IMG}/svso23-images13-14-baikal-crater-lake.jpg`, caption: 'Images 13 & 14: Lake Baikal and Crater Lake' }],
        answer:
          '(66–68) Lake Baikal for all three. (69) Baikal: it filled a tectonic rift; tectonic activity commonly creates long, thin lakes. Crater Lake: it filled a volcanic caldera; nearly circular shape, and the radial drainage pattern shows it sits atop a mountain.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q14 & Q16',
        question:
          '(14) Describe the processes involved in forming a kettle lake. (16) The plot shows bathymetric contours of Lake Tanganyika and Lake Malawi, examples of grabens. (A) How do we know this? (B) What does this mean about how they formed?',
        images: [{ url: `${IMG}/soni22-q16-tanganyika-malawi.jpg`, caption: 'Lakes Tanganyika (A) and Malawi (B)' }],
        answer:
          '(14) As glaciers retreat they leave kettle-and-kame topography. Kettles are holes left by stranded, buried ice blocks that melt, and they fill with water as the water table rises. (16A) Steep sides with a relatively flat bottom. (16B) They formed as parts of an opening rift.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q25',
        question:
          'Which best describes the formation of kettle lakes? a) Precipitation and hydrothermal fluid collect in a caldera b) Glacial meltwater fills an alpine depression formed by glacial erosion c) A meander cuts off, forming a crescent lake d) An ice block melts in an outwash plain and fills a depression',
        answer: 'd) An ice block melts in an outwash plain and leaves a depression that fills with water. (b describes a tarn; c, an oxbow; a, a caldera lake.)',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q2',
        question: 'Observe Lincoln Lake on Figure A. Which term best describes it? a) Tarn lake b) Paternoster lake c) Kettle lake d) Supraglacial lake',
        images: [{ url: `${FG_IMG}/ut22-figA-lincoln-lake-map.jpg`, caption: 'Figure A: Lincoln Lake and surrounding area' }],
        answer: 'b) Paternoster lake: one of a chain of glacial lakes along a glacial valley.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q41',
        question: 'Which correctly matches the lake to its type? A) Lake Baikal, tectonic B) Lake Agassiz, glacial C) Crater Lake, volcanic D) All of the above',
        answer: 'D) All of the above.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q26',
        question: 'What agent of erosion is mostly responsible for the depressions occupied by both the kettle lakes and the Finger Lakes in New York State? A) Wind B) Glaciers C) Waves D) Streams',
        answer: 'B) Glaciers.',
      },
      {
        source: 'BullSO Invitational 2022 — Dynamic Planet, Q12 & Q39; Highlands 2022, Q50 & Q65',
        question:
          '(BullSO 12) What is an ephemeral lake? (BullSO 39) Name as many types of lakes as you can. (Highlands 50) List all 21 types of lakes. (Highlands 65) Which term refers to a dry lake bed? A) Playa B) Arroyo C) Thalweg D) Eddy',
        answer:
          'Ephemeral lake: usually dry, but fills with water briefly during and after rain or other precipitation. Lake types (by origin): tectonic, volcanic, glacial (cirque/tarn, kettle, moraine), fluvial (oxbow), solution (karst), landslide, aeolian, shoreline, meteorite/crater, organic (beaver), and anthropogenic (reservoirs). By other criteria: saline, freshwater, temporary vs permanent, etc. Dry lake bed: A) Playa.',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 3 Q5',
        question: 'Define endorheic and exorheic lakes.',
        answer:
          'Endorheic: lakes that accumulate water from rivers or precipitation but have no outlet to the ocean (they lose water by evaporation), so they are generally saline. Exorheic: lakes that drain into a river or other water body that eventually reaches the ocean.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q27; BullSO Invitational 2022, Q10',
        question:
          '(Rickards) A Hawaiian fishpond, fed by streams but open to the sea, has a salinity of 1.8%. What type of water is it? a) Fresh b) Brackish c) Saline d) Brine. (BullSO) Which describes slightly salty lakes? A) Saline B) Brackish C) Brine D) Freshwater',
        answer: 'Both: Brackish.',
      },

      // ───── Lake water budgets ─────
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q19',
        question: 'A lake 250 km long and 100 km wide receives 1 m of rain per year and loses 0.6 m/yr to evaporation. If average inflow is 1,000 m³/s, what is the average outflow?',
        answer: 'Net addition = 2.5×10⁵ m × 1×10⁵ m × 0.4 m/yr = 1×10¹⁰ m³/yr. Divided by 3.17×10⁷ s, that is ≈ 317 m³/s. Outflow ≈ 1,000 + 317 = 1,317 m³/s.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q12',
        question:
          'Lincoln Lake is modeled as a hemisphere of radius 1,000 ft (flat circular face = lake surface). (a) Volume in ft³? (b) Inflow from 15 in/yr of rain, in ft³/yr? (c) Its only outflow, Lincoln Creek, flows at 1,350 ft³/s. Outflow in ft³/yr? (d) If total inflow is 4.0×10¹⁰ ft³/yr, will the level rise or fall? (e) If in equilibrium with that inflow, what is the residence time in days?',
        answer:
          '(a) ⅔πr³ ≈ 2.094×10⁹ ft³. (b) Surface area πr² = 3.142×10⁶ ft² × (15/12) ft ≈ 3.927×10⁶ ft³/yr. (c) 1,350 × 3,600 × 24 × 365 ≈ 4.257×10¹⁰ ft³/yr. (d) Fall: more outflow than inflow. (e) 2.094×10⁹ ÷ 4.0×10¹⁰ × 365 ≈ 19.1 days.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q38 & Q55',
        question:
          '(38) Lake Tahoe receives 40% of its inflow from precipitation directly on the lake. The lake is 191.6 mi², with 23 in of rain and 142 in of snow per year (13 in snow = 1 in rain; 1 mi = 1,609 m = 5,280 ft). What is the total yearly inflow in m³? (55) A drop of water enters Lake Tahoe in 2020 and exits in 2670. What is the residence time?',
        answer:
          '(38) 23 + 142/13 = 33.92 in of rain = 5.35×10⁻⁴ mi. × 191.6 mi² = 0.1026 mi³ ≈ 4.27×10⁸ m³ of precipitation. ÷ 0.40 gives ≈ 1.07×10⁹ m³ total inflow. (55) 650 years.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q45 (a–d, f)',
        question:
          'Refer to Figure G (water-table contours, streams, and groundwater flow around lakes A–F). (a) Which letter is a lake fed only by groundwater and drained by stream flow? (b) Which letter is a reservoir behind a dam? Its water level is ___ than the adjacent groundwater level. (c) The lake in F is a terminal lake. What is the primary way water is discharged? (d) Willows are planted all around lake A. How are the water table and lake inflow at the bottom affected? (f) What is the role of the stagnation zone beneath a lake?',
        images: [{ url: `${IMG}/ut22-figG-lakes-groundwater.jpg`, caption: 'Figure G: lakes and groundwater' }],
        answer:
          '(a) B. (b) Key: the reservoir level is higher than the adjacent groundwater level. (c) Evaporation. (d) Willows use lots of groundwater, so during the growing season the water table may be locally depressed below the lake level. Outflow then occurs at the margins, while inflow still occurs beneath the lake bottom. (f) In seepage lakes surrounded by the water table, the stagnation zone causes upward seepage through the lake bottom. While it exists, the lake never loses water through its bottom.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q3',
        question: 'A saline lake\'s water level varies with precipitation. How is the relationship between salinity and lake level best described? A) Salinity rises with rising lake level B) Salinity falls with rising lake level C) Constant D) Fluctuates regardless',
        answer: 'B) Salinity falls as the lake level rises (more water dilutes the same amount of salt).',
      },

      // ───── Stratification & properties ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q31–37',
        question:
          'Refer to the Lake Tahoe temperature graph. (31) In what season is the lake stratified? (32) Explain. (33) When is there a strong thermocline? (34) In what month is the lake most stable? (35) What type of lake is this (mixing)? (36) Why is mixing extremely important to life at the bottom? (37) Summers in the Sierra Nevada are getting longer and hotter. Which trends would you expect? a) Average water temp decreases b) Deep water temp increases c) Lake stability increases d) Stratified season lengthens e) Stratification starts later f) Stratification ends later',
        images: [{ url: `${IMG}/rickards-q31-lake-tahoe-temperature.jpg`, caption: 'Lake Tahoe water temperature by depth through the year' }],
        answer:
          '(31) Summer/fall (it mixes in winter). (32) A strong temperature gradient creates a strong density gradient, with less dense water on top, which resists mixing. (33) Summer/fall. (34) September (August/October partial credit). (35) Warm monomictic. (36) Mixing brings nutrients and oxygen-rich water to the bottom. (37) b, c, d, f.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q39, Q46–49',
        question:
          '(39) Order the epilimnion, hypolimnion, and metalimnion from top to bottom. (46) What differentiates the photic and aphotic zones? (47) An Antarctic lake is ice-covered year-round. What is its mixing type? (48) Define an oligomictic lake. (49) Identify A, B, C, and D on the "Distribution of mixing types" diagram.',
        images: [{ url: `${IMG}/rickards-q49-mixing-types.jpg`, caption: 'Distribution of mixing types (after Lewis, 1983)' }],
        answer:
          '(39) Epilimnion, metalimnion, hypolimnion. (46) Light. (47) Amictic. (48) Generally warm and stratified; mixes only sporadically. (49) A: amictic, B: dimictic, C: cold (polymictic), D: warm (polymictic).',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q52–54, Q57, Q59',
        question:
          '(52) If the Richardson number of a water parcel is low, what will it likely do? (53) What Richardson number is the threshold, and of what? (54) What is the SI unit of lake stability? (57) Why do clean lakes appear blue? (59) Surface light is 1,380 W/m² and the extinction coefficient is 0.3. What is the light intensity at 20 m?',
        answer:
          '(52) Mix. (53) 0.25, the threshold between mixing and not mixing. (54) The joule. (57) Pure water scatters blue light and absorbs other wavelengths. (59) I = I₀e^(−kd) = 1,380 × e^(−6) ≈ 3.42 W/m².',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q26–27, Q63–65',
        question:
          '(26) Select all that apply to oligotrophic lakes: a) High nutrients b) High dissolved oxygen c) Low turbidity d) High aquatic plant biodiversity. (27) When lake waters warm in summer, dissolved CO₂ tends to ___ and dissolved O₂ tends to ___. (63) In winter in a dimictic lake, compare epilimnion and hypolimnion (a) temperature and (b) density. (64) In which season(s) is hypolimnion dissolved oxygen greatest? (65) Total phosphorus is ___ related to chlorophyll a and ___ related to total light levels.',
        answer:
          '(26) b, c. (27) Decrease; decrease (warm water holds less dissolved gas). (63a) T_E < T_H (≈0 °C under the ice over ≈4 °C). (63b) ρ_E < ρ_H. (64) Spring and fall, right after turnover. (65) Directly; inversely.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q4–6 & Q9',
        question:
          '(4) Which lake type can exhibit internal waves during winter? a) Amictic b) Cold monomictic c) Warm monomictic d) Dimictic. (5) How can algal blooms and extended stratification lead to similar conditions in a lake? (6) The stratosphere warms with altitude. In what season does a dimictic lake most resemble this? (9) Four layers: 1) 4.02 °C, 0.01% salinity; 2) 4.02 °C, 0.02%; 3) 3.98 °C, 0.02%; 4) 3.98 °C, 0.03%. Order from lowermost to uppermost.',
        answer:
          '(4) d) Dimictic. (5) Both lead to a lack of nutrients and dissolved oxygen. Stratification isolates the bottom water from surface oxygen and nutrients; blooms rapidly consume nutrients and oxygen. (6) c) Summer: warm water sits on top of cold water, so temperature increases upward, like the stratosphere. (Under winter ice it is the reverse: 0 °C on top, 4 °C below.) (9) 4, 3, 2, 1.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q12 & Section 5 Q5–11',
        question:
          '(12) In the Northern Hemisphere, when is a lake\'s thermocline strongest? A) Jan–Feb B) Apr–May C) Jul–Aug D) Oct–Nov. (5) As temperature increases, density ___. (6) As salinity increases, density ___. (7) What must be true for density-driven mixing? (8) In a typical freshwater dimictic lake, mixing occurs in ___ and ___. (9) Explain why. (10) How can ice formation cause mixing in a salty lake? (11) How can summer evaporation cause mixing?',
        answer:
          '(12) C) July–August. (5) It depends on the temperature (density peaks at ~4 °C). (6) Increases. (7) Surface density greater than subsurface density. (8) Spring and autumn. (9) Spring: surface water below 4 °C warms toward 4 °C and becomes denser. Autumn: surface water above 4 °C cools and becomes denser. Either way it sinks, and wind helps mix. (10) Brine rejection: salt left behind as ice forms makes the surface water denser, so it overturns. (11) Evaporation raises surface salinity and density, so it overturns.',
      },
      {
        source: 'BullSO Invitational 2022 — Dynamic Planet, Q13 & Q36; Highlands 2022, Q60–63',
        question:
          '(BullSO 13) Identify and explain the parts of a stratified lake. (BullSO 36) Lake Ontario thermal structure: (1) What process occurs from (a) to (c)? (2) What heating process is most responsible for changes from (c) to (f)? (3) Where is the densest water in (f)? (Highlands 60) Define epilimnion and hypolimnion. (61) What separates them? (62) Which zone is the lake\'s "digestive system," where bacteria decompose organic matter? (63) What term describes the average time to completely renew a lake\'s water?',
        images: [{ url: `${IMG}/bullso-q36-lake-ontario-thermal.jpg`, caption: 'Thermal structure of Lake Ontario, June–July' }],
        answer:
          'Epilimnion: the warm upper, mixed layer. Metalimnion/thermocline: the middle layer of rapid temperature change, which separates the epilimnion from the hypolimnion. Hypolimnion: the cold, dense bottom layer, relatively stagnant. Lake Ontario: (1) upwelling, (2) differential solar heating, (3) lower center, where the water is coldest. Digestive system: the benthic zone. Renewal time: flushing time (residence time).',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q39–40',
        question: '(39) What is the deepest layer in a thermally stratified lake called? (40) Explain how and why lake turnover occurs.',
        answer:
          '(39) Hypolimnion. (40) In spring and fall the surface water temperature changes until the top and bottom layers have equal temperature and density. With strong winds the stratification breaks down and the lake mixes. Oxygen from the surface reaches the bottom, and nutrients trapped near the bottom mix throughout the lake.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q13',
        question:
          'The plot shows temperature (top), chlorophyll (middle), and oxygen (bottom) over time at several depths in an estuary of Lake Michigan. Below 2 mg/L of oxygen, most oxygen-breathing animals die. Explain why the periods of hypoxia occur when they do.',
        images: [{ url: `${IMG}/soni22-q13-lake-michigan-hypoxia.jpg`, caption: 'Muskegon Lake: temperature, chlorophyll, and oxygen by depth' }],
        answer:
          'Hypoxia occurs in summer, when the lake is thermally stratified and algae bloom near the surface. Dead algae sink into the isolated deep water and decompose, consuming oxygen that cannot be replenished from the surface.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q37',
        question: 'Given what you know about eutrophic and oligotrophic lakes, what can you infer about the environment of a mesotrophic lake?',
        answer:
          'It is intermediate: some algae (less than a eutrophic lake), moderate nutrients, a reasonable fish population, and partly clear water (not as clear as an oligotrophic lake).',
      },

      // ───── Shoreline processes ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q50–51 & Q58',
        question:
          '(50) Order capillary waves, gravity waves, and seiches from lowest to highest average wavelength. (51) What type of force differentiates these waves? a) Conservative b) Restorative c) Gravitational d) Attractive. (58) Describe Langmuir circulation.',
        answer:
          '(50) Capillary waves, gravity waves, seiches. (51) b) Restorative (restoring) force: surface tension for capillary waves, gravity for gravity waves. (58) Wind blowing across the water creates rows parallel to the wind. Counter-rotating vortices converge at some surface lines and diverge at others, and the water moves with the wind, with the convergence lines moving farthest.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q7–8',
        question:
          '(7) You notice parallel rows of plant matter and bubbles running north to south on a lake. From what direction could the wind be coming? (8) What process creates this?',
        answer: '(7) North or south (the windrows run parallel to the wind). (8) Langmuir circulation.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q66',
        question:
          'Sometimes waves are observed to oscillate back and forth in lakes. (a) What are these waves called? (b) Select all true: A) Primarily driven by pressure differences B) Primarily driven by tidal forces C) Primarily wind-driven D) Typically last a few minutes E) Can cause lakeshore flooding',
        answer: '(a) Seiches. (b) C and E: primarily wind-driven, and they can cause lakeshore flooding.',
      },

      // ───── Wetlands ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q131–134',
        question:
          '(131) What are the 4 types of wetlands? Which characteristics apply to (132) bogs, (133) marshes, (134) swamps? Options: a) made of peat b) very long time to develop c) basic d) acidic e) water from rain f) water from surface water g) water from groundwater h) woody plants i) mossy plants j) grassy plants k) lots of trees l) tidal salt, tidal freshwater, and inland freshwater types',
        answer:
          '(131) Bog, swamp, marsh, fen. (132) Bogs: a, b, d, e, i. (133) Marshes: f, g, j, l. (134) Swamps: e, f, g, h, k.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q46–48',
        question:
          '(46) Vegetation: X = cypress trees, buttonbush shrubs, cattails; Y = sphagnum moss, water chestnut sedge, pitcher plants; Z = sawgrass, cattails, papyrus sedge. Classify each. (47) Select all true of bogs: A) Mostly surface water B) Mostly groundwater C) Water is brown from peat tannins D) Eutrophic E) Oligotrophic F) Ombrotrophic. (48) Select all true of freshwater marshes: A) Often at high elevations B) Moist, well-oxygenated soils C) Reduce variability of adjacent streamflow D) Some have cyclic water-level changes E) Diversion by artificial canals can cause decline',
        answer: '(46) X = swamp, Y = bog, Z = marsh. (47) C, E, F. (48) C, D, E.',
      },
      {
        source: 'BullSO Invitational 2022 — Dynamic Planet, Q21–27',
        question:
          'Answer with bog, marsh, or swamp: (21) Dominated by water-tolerant trees? (22) Usually acidic? (23) Herbaceous vegetation? (24) Generally located north and south of the tropics? (25) Usually anoxic? (26) Water source is mostly rivers and streams? (27) The Florida Everglades are an example of what?',
        answer: '(21) Swamp. (22) Bog. (23) Marsh. (24) Marsh. (25) Bog. (26) Swamp. (27) Marsh.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q36',
        question: 'Which are true about bogs? (Mark all) A) Have an impermeable clay layer B) Low in nutrients and highly acidic C) High in nutrients and highly acidic D) Located in cold, temperate climates E) Located in tropical climates F) A type of wetland that accumulates peat',
        answer: 'B, D, F.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q68b',
        question:
          'Refer to Image J (wetland abundance; the black line marks the Wisconsin glacial boundary). What is the relationship between bog and marsh density and whether an area was affected by glaciation?',
        images: [{ url: `${IMG}/ut21-imageJ-wetland-abundance.jpg`, caption: 'Image J: wetland abundance (adapted from Fergus et al., 2017)' }],
        answer: 'Bog and marsh density is greater in areas affected by glaciation than in areas not affected (poorly drained glacial terrain with many depressions).',
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [],
  },
]
