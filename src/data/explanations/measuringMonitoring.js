const IMG = '/images/previous-questions/measuring-monitoring'
const FG_IMG = '/images/previous-questions/fluvial-geomorphology'

const STREAMGAGING_BASICS = {
  title: 'Streamgaging Basics',
  source: 'USGS Water Resources',
  url: 'https://www.usgs.gov/mission-areas/water-resources/science/streamgaging-basics',
}
const RATING_CURVE = {
  title: 'Creating the Rating Curve',
  source: 'USGS Wyoming-Montana Water Science Center',
  url: 'https://www.usgs.gov/centers/wyoming-montana-water-science-center/creating-rating-curve',
}
const RATING_CURVE_IMAGE = {
  title: 'Stage-discharge rating curve (figure)',
  source: 'USGS',
  url: 'https://www.usgs.gov/media/images/stage-discharge-rating-curve',
}
const HOW_STREAMFLOW_MEASURED = {
  title: 'How Streamflow is Measured',
  source: 'USGS Water Science School',
  url: 'https://water.usgs.gov/edu//streamflow3.html',
}
const STREAMFLOW_WATER_CYCLE = {
  title: 'Streamflow and the Water Cycle',
  source: 'USGS Water Science School',
  url: 'https://usgs.gov/water-science-school/science/streamflow-and-water-cycle',
}
const URBAN_FLOODS = {
  title: 'Effects of Urban Development on Floods (Fact Sheet 076-03)',
  source: 'USGS',
  url: 'https://pubs.usgs.gov/fs/fs07603/',
}
const TOPO_ACTIVITY = {
  title: 'Activity Sheet #4: How to Read a Topographic Map',
  source: 'USGS',
  url: 'https://pubs.usgs.gov/gip/70039472/activity-4.pdf',
}
const TOPO_SYMBOLS = {
  title: 'US Topo Map Symbol Guide',
  source: 'USGS National Geospatial Program',
  url: 'https://www.usgs.gov/ngp-standards-and-specifications/us-topo-map-symbol-guide',
}
const WATER_LEVEL_MAPS = {
  title: 'Water-Level Maps',
  source: 'SERC (Carleton College)',
  url: 'https://serc.carleton.edu/20642',
}
const HAPPYVILLE = {
  title: 'Happyville Water Table Contour Map',
  source: 'SERC (Carleton College)',
  url: 'https://serc.carleton.edu/179777',
}
const PG14_2 = {
  title: '14.2 Groundwater Flow',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/physicalgeology2ed/chapter/14-2-groundwater-flow/',
}
const CIRC_1139 = {
  title: 'Ground Water and Surface Water: A Single Resource (Circular 1139)',
  source: 'USGS',
  url: 'https://www.usgs.gov/publications/ground-water-and-surface-water-a-single-resource',
}
const DYE_TRACING = {
  title: 'Dye tracing techniques used to determine ground-water flow in a carbonate aquifer system',
  source: 'USGS',
  url: 'https://www.usgs.gov/publications/dye-tracing-techniques-used-determine-ground-water-flow-a-carbonate-aquifer-system',
}
const NASA_GROUNDWATER = {
  title: 'Below the Surface: Tracking Groundwater from Space',
  source: 'NASA Earthdata',
  url: 'https://earthdata.nasa.gov/news/below-surface-tracking-groundwater-from-space',
}
const KARST_AQUIFERS = {
  title: 'Karst Aquifers',
  source: 'USGS Water Resources',
  url: 'https://www.usgs.gov/mission-areas/water-resources/science/karst-aquifers',
}

export const measuringMonitoringExplanations = [
  // ───────────────────────── Topographic maps ─────────────────────────
  {
    id: 'exp-mm-topographic-maps',
    topic: 'measuring-monitoring',
    subtopic: 'topographic-maps',
    title: 'Interpreting Freshwater Features on Topographic Maps',
    sections: [
      {
        heading: 'Contour line basics',
        content:
          "A topographic map shows the three-dimensional shape of the land with contour lines: lines connecting points of equal elevation.\n\n• Contour interval: the elevation difference between adjacent contour lines. It is stated in the map margin, or work it out by dividing the difference between two labeled lines by the number of intervals between them.\n• Index contours: every fifth line is drawn thicker and labeled with its elevation.\n• Spacing: closely spaced contours mean steep slopes; widely spaced contours mean gentle slopes.\n• Contour lines never cross or split. They close on themselves (possibly off the edge of the map).\n• A set of closed contours marks a hill. Closed contours with short tick marks (hachures) pointing inward mark a closed depression, such as a sinkhole, kettle, or a basin that may hold an ephemeral lake.\n\nTo read an elevation, find the nearest labeled index contour and count lines up or down. A point between two lines lies somewhere between their elevations. If a point is between the 50 ft and 60 ft lines, its elevation is 51–59 ft.",
        keyPoints: [
          'Contours connect equal elevations; the contour interval is the elevation step between lines.',
          'Close spacing = steep; wide spacing = gentle.',
          'Hachured closed contours = depressions (sinkholes, kettles, ephemeral lake basins).',
          'Every fifth line (index contour) is bold and labeled.',
        ],
      },
      {
        heading: 'Reading streams, lakes, and wetlands',
        content:
          "Rule of Vs: where a contour line crosses a stream valley, it bends into a V (or U) whose point aims upstream, toward higher elevation. Streams flow opposite to the direction the Vs point. Use this to find flow direction, and to tell which of two points on a stream is upstream.\n\nOther clues:\n• Streams flow from higher to lower contours, and tributaries join the main stream at acute angles that point downstream.\n• Stream gradient = (number of contours crossed × interval) ÷ distance along the channel.\n• Lakes sit in low areas; a lake with no outlet stream in a closed basin may be a kettle, a sinkhole lake, or an endorheic (closed-basin) lake.\n• Swamps and marshes appear as wetland symbols in flat, low-lying areas, often beside streams or lakes.\n• A stream that ends abruptly at a hachured depression is a disappearing (sinking) stream, typical of karst. Many hachured depressions together indicate karst terrain with sinkholes.\n• Drainage patterns (dendritic, trellis, radial, rectangular, parallel) can be identified by tracing the blue lines.\n\nGroundwater generally flows in the same direction as surface water, from topographic highs toward valleys and gaining streams. So topography is a first guess for groundwater flow direction when no well data are available.",
        keyPoints: [
          'Contour Vs point upstream; water flows the opposite way.',
          'Gradient from a map = drop (contours × interval) ÷ channel distance.',
          'Streams ending at hachured depressions = disappearing streams in karst.',
          'Groundwater usually flows down the topographic slope, toward streams.',
        ],
      },
      {
        heading: 'USGS freshwater map symbols',
        content:
          "USGS topographic maps (the older quadrangles and the current US Topo series) use blue for water features. Common symbols tested:\n\n• Perennial stream: solid blue line.\n• Intermittent stream: blue line broken into dashes separated by dots (dash-dot pattern).\n• Perennial river: a wide river drawn with two blue banklines and blue fill between them.\n• Intermittent river or lake: dashed blue outline.\n• Perennial lake or pond: blue fill with a solid shoreline.\n• Marsh or swamp: small blue grass-tuft symbols, often with short horizontal lines below.\n• Wooded marsh or swamp: tuft symbols on a green (vegetated) background.\n• Submerged marsh: tufts on a blue water background.\n• Spring: small blue circle with a tail.\n• Falls and rapids: labeled cross-lines on the stream.\n• Levee: a raised embankment line with tick marks or a dotted fill along it.\n• Dam, canal, aqueduct, and well symbols also appear.\n\nThe US Topo Map Symbol Guide (USGS) is the authoritative list. Symbol styling differs slightly between older quadrangles and newer US Topo maps, so check the legend on the map you are given.",
        keyPoints: [
          'Solid blue line = perennial stream; dash-dot blue line = intermittent stream.',
          'Double blue line with fill = perennial river.',
          'Tuft symbols = marsh or swamp; on green = wooded; on blue = submerged.',
          'Always check the map legend; symbology changed between map series.',
        ],
      },
      {
        heading: 'Delineating a watershed and drawing a topographic profile',
        content:
          "Delineating a watershed (drainage basin) on a topographic map means drawing its boundary, the drainage divide, around all the land that drains to a chosen outlet point.\n1. Mark the outlet (the downstream point on the stream).\n2. Trace the stream and all its tributaries upstream.\n3. Draw the divide along ridgelines and hilltops, connecting the highest points between this stream and its neighbours. Cross contour lines at right angles, because water flows perpendicular to contours.\n4. Close the boundary back at the outlet.\n\nA topographic profile is a side view of the land along a line (A–A′). Lay a strip of paper along the line, mark every contour crossing with its elevation, then transfer the marks to a graph with distance on the x-axis and elevation on the y-axis. A profile drawn along a stream channel is that stream's longitudinal profile. Vertical exaggeration = horizontal scale ÷ vertical scale.",
        keyPoints: [
          'Watershed divide follows ridges and hilltops and crosses contours at right angles.',
          'Every point inside the divide drains to the outlet.',
          'Topographic profile: elevation vs. distance along a line; along a stream, it gives the longitudinal profile.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Elevation and gradient from a map',
        problem:
          'On a map with a 20 ft contour interval, a stream crosses 6 contour lines between two points. Measured along the channel, the distance is 1.5 miles. What is the gradient in ft/mi and ft/ft?',
        steps: [
          'Elevation drop = 6 intervals × 20 ft = 120 ft.',
          'Gradient = 120 ft ÷ 1.5 mi = 80 ft/mi.',
          'Convert: 1.5 mi × 5,280 ft/mi = 7,920 ft; 120 ÷ 7,920 ≈ 0.015 ft/ft.',
        ],
        answer: '80 ft/mi ≈ 0.015 ft/ft (1.5%).',
      },
      {
        title: 'Which way does the stream flow?',
        problem:
          'On a topographic map, the contour lines crossing a creek form Vs that point north. Point A on the creek lies north of point C. Is A upstream or downstream of C?',
        steps: [
          'Contour Vs point upstream, so the creek flows south (opposite the Vs).',
          'A is north of C, in the direction the Vs point.',
        ],
        answer: 'A is upstream of C; the creek flows south from A toward C.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Contour Vs point in the direction the stream flows.',
        reality: 'Contour Vs point upstream (uphill). Water flows away from the point of the V.',
      },
      {
        misconception: 'Watershed boundaries follow the streams.',
        reality:
          'Watershed boundaries (divides) follow ridgelines between streams. The streams run through the middle of the watershed.',
      },
      {
        misconception: 'A dashed blue line always means the same thing.',
        reality:
          'Different dashed patterns mean different features (intermittent stream, intermittent lake shoreline, canal, etc.). Use the legend or the US Topo Symbol Guide.',
      },
    ],
    furtherReading: [TOPO_ACTIVITY, TOPO_SYMBOLS],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Water table mapping ─────────────────────────
  {
    id: 'exp-mm-water-table-mapping',
    topic: 'measuring-monitoring',
    subtopic: 'water-table-mapping',
    title: 'Mapping the Water Table from Well Data',
    sections: [
      {
        heading: 'From well measurements to water-table elevations',
        content:
          "The water table is the top of the saturated zone in an unconfined aquifer. Its elevation (hydraulic head) is measured in wells.\n\nA hydrologist lowers a steel tape or electronic water-level meter down the well and records the depth to water below a measuring point (usually the top of the casing or land surface). Then:\n\n    water-table elevation = land-surface (or measuring-point) elevation − depth to water\n\nExample: land surface at 312 ft above sea level, depth to water 27 ft → water-table elevation = 285 ft.\n\nUse elevations, not depths, to map flow. Water flows from high head to low head, and depth-to-water alone can be misleading when the land surface is not flat.\n\nIn a confined aquifer, water rises in a well above the top of the aquifer, because the water is under pressure. The level it rises to defines the potentiometric (piezometric) surface. Maps of a confined aquifer show that surface instead of a water table.\n• Artesian well: the water level rises above the top of the confined aquifer.\n• Flowing artesian well: the potentiometric surface is above land surface, so water flows out without pumping.",
        keyPoints: [
          'Water-table elevation = land-surface elevation − depth to water.',
          'Map head (elevation), not depth to water.',
          'Confined aquifers are mapped with a potentiometric surface.',
          'Flowing artesian well: potentiometric surface above the ground.',
        ],
      },
      {
        heading: 'Contouring the water table',
        content:
          "With water-table elevations plotted at each well on a base map, draw contours exactly as for a topographic map:\n1. Choose a contour interval that fits the range of values.\n2. Interpolate linearly between pairs of wells to locate where each contour value falls.\n3. Connect points of equal elevation with smooth lines. Contours never cross.\n\nThree-point problem: with exactly three wells, interpolate along the three sides of the triangle they form, draw the contour through two points of equal head, and the flow direction is perpendicular to that contour, from high to low head.\n\nReading the finished map:\n• Groundwater flows perpendicular to water-table contours, from higher to lower elevation (in uniform, isotropic material). Flow lines can be drawn as arrows crossing the contours at right angles.\n• The water table is generally a subdued copy of the topography: higher under hills, lower under valleys.\n• A mound (closed high) marks a recharge area, such as under a leaking pond or irrigated field.\n• A closed low around a pumping well is a cone of depression.\n• Springs and wetlands occur where the water table meets the land surface.\n• Perched water tables sit on top of a local impermeable lens (aquiclude) above the main water table.",
        keyPoints: [
          'Interpolate between wells; draw smooth contours of equal head.',
          'Flow is perpendicular to contours, from high to low head.',
          'Mounds = recharge; closed lows around wells = cones of depression.',
          'The water table mimics topography in subdued form.',
        ],
      },
      {
        heading: 'Hydraulic gradient and groundwater velocity',
        content:
          "Hydraulic gradient (i) is the change in head per unit distance along the flow path:\n\n    i = Δh ÷ L\n\nwhere Δh is the head difference between two points and L is the horizontal distance between them, measured perpendicular to the contours. It is dimensionless (e.g., m/m or ft/ft).\n\nDarcy's law gives the flow:\n    Q = K × i × A\n    specific discharge (Darcy flux) q = K × i\nwhere K is hydraulic conductivity and A is cross-sectional area.\n\nWater actually moves only through the connected pores, so the average linear (seepage) velocity is faster:\n    v = K × i ÷ nₑ   (nₑ = effective porosity)\n\nTravel time = distance ÷ v. This tells you how long a contaminant takes to reach a well or stream.",
        keyPoints: [
          'Hydraulic gradient i = Δh / L (measured along the flow direction).',
          "Darcy: Q = K·i·A; specific discharge q = K·i.",
          'Seepage velocity v = K·i / nₑ, faster than q.',
          'Travel time = distance ÷ seepage velocity.',
        ],
      },
      {
        heading: 'Gaining and losing streams on a water-table map',
        content:
          "Water-table contours reveal whether a stream gains or loses water.\n\n• Gaining (effluent) stream: the water table is higher than the stream surface, so groundwater flows into it. Water-table contours bend into Vs pointing upstream where they cross the stream, like topographic contours. Flow arrows converge on the stream. Gaining streams are typical of humid regions and keep flowing between storms (baseflow).\n• Losing (influent) stream: the stream surface is above the water table, so water leaks out. Contours bend into Vs pointing downstream. Flow arrows diverge away from the stream. Typical of arid regions and of streams crossing alluvial fans or karst.\n• Disconnected stream: a losing stream separated from a deep water table by an unsaturated zone.\n\nOne stream can gain in some reaches and lose in others. Heavy pumping near a gaining stream can reverse it into a losing stream.",
        keyPoints: [
          'Gaining (effluent): contours V upstream; groundwater flows into the stream.',
          'Losing (influent): contours V downstream; stream water flows into the ground.',
          'Pumping can convert a gaining stream into a losing one.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Water-table elevation and gradient',
        problem:
          'Well 1: land surface 520 m, depth to water 12 m. Well 2: land surface 505 m, depth to water 9 m. The wells are 800 m apart along the flow direction. Find the water-table elevations, the flow direction, and the hydraulic gradient.',
        steps: [
          'Well 1 head = 520 − 12 = 508 m.',
          'Well 2 head = 505 − 9 = 496 m.',
          'Water flows from high head to low head: from Well 1 toward Well 2.',
          'Gradient i = (508 − 496) ÷ 800 = 12 ÷ 800 = 0.015.',
        ],
        answer: 'Heads of 508 m and 496 m; flow from Well 1 to Well 2; i = 0.015.',
      },
      {
        title: 'Groundwater travel time',
        problem:
          'Using i = 0.015 from the previous example, a sandy aquifer has K = 20 m/day and effective porosity 0.25. How long does water take to travel the 800 m between the wells?',
        steps: [
          'Seepage velocity v = K·i / nₑ = (20 × 0.015) ÷ 0.25 = 0.3 ÷ 0.25 = 1.2 m/day.',
          'Travel time = 800 m ÷ 1.2 m/day ≈ 667 days.',
        ],
        answer: 'About 667 days (roughly 1.8 years).',
      },
      {
        title: 'Is this well artesian?',
        problem:
          'A well 125 m above sea level taps a confined aquifer whose potentiometric surface is at 150 m above sea level. A second well, also at 125 m, taps an unconfined aquifer where the water table is at 100 m. Which is a flowing artesian well?',
        steps: [
          'Artesian requires a confined aquifer; only the first well qualifies.',
          'Its potentiometric surface (150 m) is above the land surface at the well (125 m).',
          'Water would rise 25 m above the ground, so it flows without pumping.',
        ],
        answer: 'The first well is a flowing artesian well.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Groundwater flows from where the water table is shallow to where it is deep.',
        reality:
          'Groundwater flows from high hydraulic head (high water-table elevation) to low head. Depth to water alone does not tell you flow direction.',
      },
      {
        misconception: 'The water table is a flat surface underground.',
        reality:
          'The water table rises under hills and dips toward valleys and streams, roughly following the topography, and it rises and falls with seasons and pumping.',
      },
      {
        misconception: 'Darcy flux q = K·i is how fast groundwater actually moves.',
        reality:
          'Water travels only through pore spaces, so the seepage velocity (K·i / nₑ) is several times faster than the Darcy flux.',
      },
    ],
    furtherReading: [WATER_LEVEL_MAPS, HAPPYVILLE, PG14_2, CIRC_1139],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Stream gauging, discharge & hydrographs ─────────────────────────
  {
    id: 'exp-mm-stream-gauging-hydrographs',
    topic: 'measuring-monitoring',
    subtopic: 'stream-gauging-hydrographs',
    title: 'Stream Gauging, Discharge Measurement & Hydrographs',
    sections: [
      {
        heading: 'Discharge and the velocity-area method',
        content:
          "Discharge (Q) is the volume of water passing a point per unit time (m³/s, or cubic feet per second, cfs):\n\n    Q = A × v = width × average depth × average velocity\n\nTo measure it, hydrographers use the velocity-area (midsection) method:\n1. Stretch a tape across the stream and divide the cross-section into many vertical subsections (the USGS typically uses 25–30, so no single subsection carries too much of the flow).\n2. In each subsection, measure the width, the depth, and the velocity.\n3. Measure velocity with a current meter (a mechanical meter with spinning cups, such as the Price AA) or an acoustic Doppler velocimeter. In shallow water, measure at 0.6 of the depth below the surface. In deeper water, average the readings at 0.2 and 0.8 of the depth. These approximate the average velocity in the vertical.\n4. Compute q = width × depth × velocity for each subsection and add them: Q = Σq.\n\nIn large rivers, an acoustic Doppler current profiler (ADCP) mounted on a boat measures velocity across the whole cross-section as the boat crosses.\n\nOther methods:\n• Float method: time a floating object over a known distance. Surface velocity is faster than the average, so multiply by about 0.85.\n• Dilution (tracer) gauging: inject a known amount of tracer (salt or dye) and measure its concentration downstream. Useful in turbulent mountain streams.\n• Weirs and flumes: structures with a known shape where Q depends only on water height.\n• Manning's equation (slope-area method), used after floods to estimate peak flow from high-water marks: v = (k/n) R^(2/3) S^(1/2), where R = A/P (hydraulic radius), S = slope, n = roughness, and k = 1 (SI) or 1.486 (US units).",
        keyPoints: [
          'Q = A × v = w × d × v.',
          'Velocity-area method: many subsections, velocity at 0.6 depth (or average of 0.2 and 0.8).',
          'Tools: current meters, acoustic Doppler (ADV/ADCP), floats (×0.85), tracers, weirs.',
          "Manning: v = (k/n)·R^(2/3)·S^(1/2); hydraulic radius R = A / wetted perimeter.",
        ],
      },
      {
        heading: 'Streamgages, stage, and the rating curve',
        content:
          "Measuring discharge directly takes hours, so it cannot be done continuously. Instead, a streamgage continuously records stage (gage height), the height of the water surface above a fixed reference point.\n\n• Stage is sensed by a float in a stilling well, a pressure transducer, a bubbler, or a non-contact radar sensor, typically every 15 minutes.\n• Readings are stored by a data logger and often transmitted by satellite or cellular link, appearing in near real time on USGS WaterData.\n\nThe rating curve is the link between the two. Hydrographers make many direct discharge measurements across a wide range of flows (low to flood) and plot each measured discharge against the stage at the time. The best-fit curve through those points is the stage-discharge rating. After that, every stage reading is converted into an estimated discharge.\n\nRatings are not permanent:\n• Scour or deposition changes the channel shape, aquatic vegetation grows, debris jams form, and ice covers the channel. Each changes the stage for a given discharge.\n• Hydrographers keep visiting the gage (often every 6–8 weeks) to make new measurements and apply shifts to the rating.\n• Extreme floods can exceed the measured range, so the top of the rating is extrapolated or estimated by indirect methods. That is why some USGS records show provisional or \"estimated\" discharge.\n\nA gage-height plot and a discharge plot are different graphs. Gage height is in feet or metres; discharge is in cfs or m³/s.",
        keyPoints: [
          'Stage (gage height) = water-surface height above a datum; recorded continuously.',
          'Rating curve = stage-discharge relation built from repeated discharge measurements.',
          'Ratings shift when the channel changes; they need ongoing measurements.',
          'Data are logged and transmitted to USGS WaterData; recent data are provisional.',
        ],
      },
      {
        heading: 'Reading a storm hydrograph',
        content:
          "A hydrograph is a graph of discharge (or stage) against time at one point on a stream. A storm (flood) hydrograph shows how a stream responds to a rain event, usually with rainfall plotted as bars at the top or bottom.\n\n• Baseflow: the steady contribution from groundwater that keeps the stream flowing between storms. On many diagrams it is shaded at the bottom.\n• Rising limb: the steep increase in discharge as storm runoff arrives.\n• Peak discharge: the maximum flow.\n• Lag time: the time between peak rainfall and peak discharge. (Some sources measure from the centre of the rainfall.)\n• Falling (recession) limb: the gradual decline as stored water drains out. It is usually gentler than the rising limb.\n• Quickflow (stormflow): the flow above baseflow, made of overland flow and fast throughflow.\n• Area under the curve = total volume of water discharged (because discharge × time = volume). The area above baseflow is the storm runoff volume.\n\nIsotope studies (Sklash and Farvolden, 1979) showed that much of the water in a storm peak is actually \"old\" pre-storm groundwater pushed out by the new rain, not just new rainfall running off the surface.",
        keyPoints: [
          'Hydrograph = discharge vs. time; storm hydrographs include rainfall bars.',
          'Parts: baseflow, rising limb, peak, lag time, falling (recession) limb.',
          'Area under the curve = volume of water discharged.',
          'Groundwater supplies baseflow, and can also contribute to storm peaks.',
        ],
      },
      {
        heading: 'What controls the hydrograph shape',
        content:
          "\"Flashy\" hydrographs have a steep rising limb, high peak, and short lag time. \"Subdued\" hydrographs have a gentle rise, low peak, and long lag time.\n\nFlashy responses come from:\n• Urbanization: impervious surfaces (roofs, roads, parking lots) and storm drains reduce infiltration and speed runoff, so peaks are higher and sooner and baseflow can be lower.\n• Saturated or frozen ground from earlier rain or snowmelt (antecedent conditions): no room for infiltration.\n• Steep slopes, thin soils, impermeable rock (clay, granite).\n• Small, round (circular) basins and high drainage density: water from all parts arrives at about the same time. The time of concentration (time for water from the farthest point to reach the outlet) is short.\n• Intense, short rainfall; deforestation or wildfire (less interception and infiltration).\n\nSubdued responses come from:\n• Forests and vegetation, permeable soils and rock, gentle slopes.\n• Large or elongated basins (longer travel times).\n• Wetlands, lakes, and reservoirs that store and release water slowly.\n\nAnnual hydrographs (regime curves) show the yearly pattern. Snowmelt-fed streams peak in spring and early summer; glacier-fed streams peak in late summer when ice melt is greatest; rain-fed streams peak in the wet season.\n\nGauge records also classify flow permanence. Perennial streams never drop to zero discharge. Intermittent streams dry up seasonally. Ephemeral streams flow only briefly after storms, so the record is near zero with isolated spikes.",
        keyPoints: [
          'Urbanization: higher peak, shorter lag time, steeper rising limb, lower baseflow.',
          'Saturated ground acts like an impervious surface: higher, faster peaks.',
          'Short time of concentration (small, round, steep basins) → flashy hydrograph.',
          'Snowmelt peaks in spring; glacier melt peaks in late summer.',
          'Gauge records show permanence: perennial, intermittent, ephemeral.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Velocity-area discharge measurement',
        problem:
          'A stream cross-section is divided into four subsections, each 2.0 m wide. Depths are 0.4, 0.9, 1.1, and 0.5 m, and velocities measured at 0.6 depth are 0.3, 0.7, 0.8, and 0.4 m/s. Find the total discharge.',
        steps: [
          'Subsection 1: 2.0 × 0.4 × 0.3 = 0.24 m³/s.',
          'Subsection 2: 2.0 × 0.9 × 0.7 = 1.26 m³/s.',
          'Subsection 3: 2.0 × 1.1 × 0.8 = 1.76 m³/s.',
          'Subsection 4: 2.0 × 0.5 × 0.4 = 0.40 m³/s.',
          'Total Q = 0.24 + 1.26 + 1.76 + 0.40 = 3.66 m³/s.',
        ],
        answer: 'Q ≈ 3.66 m³/s.',
      },
      {
        title: 'Float method',
        problem:
          'An orange takes 25 s to float 50 m down a channel that is 6 m wide with an average depth of 0.8 m. Estimate the discharge.',
        steps: [
          'Surface velocity = 50 m ÷ 25 s = 2.0 m/s.',
          'Average velocity ≈ 0.85 × 2.0 = 1.7 m/s (correcting for slower water near the bed).',
          'Area = 6 × 0.8 = 4.8 m².',
          'Q = 4.8 × 1.7 ≈ 8.2 m³/s.',
        ],
        answer: 'About 8.2 m³/s.',
      },
      {
        title: 'Volume from a hydrograph',
        problem:
          'During a flood, discharge rises linearly from 0 to 120 m³/s over 30 minutes, then falls linearly back to 0 over the next 90 minutes. What volume of water passed the gage?',
        steps: [
          'The hydrograph is a triangle; volume = area under the curve.',
          'Base = 30 + 90 = 120 min = 7,200 s; height = 120 m³/s.',
          'Volume = ½ × 7,200 s × 120 m³/s = 432,000 m³.',
        ],
        answer: '432,000 m³ (4.32 × 10⁵ m³).',
      },
      {
        title: 'Average discharge to annual volume',
        problem: 'A creek has an average discharge of 25 m³/s. How much water does it discharge in a year?',
        steps: [
          'Seconds in a year ≈ 365 × 24 × 3,600 = 3.15 × 10⁷ s.',
          'Volume = 25 m³/s × 3.15 × 10⁷ s ≈ 7.9 × 10⁸ m³.',
        ],
        answer: 'About 7.9 × 10⁸ m³ per year.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'A streamgage measures discharge directly.',
        reality:
          'Streamgages continuously record stage (water height). Discharge is calculated from stage using a rating curve built from periodic manual discharge measurements.',
      },
      {
        misconception: 'Lag time is the duration of the flood.',
        reality: 'Lag time is the delay between peak rainfall and peak discharge.',
      },
      {
        misconception: 'Urbanization lengthens lag time because water must travel through storm drains.',
        reality:
          'Storm drains and impervious surfaces deliver water to streams much faster, so lag time shortens and peaks rise.',
      },
      {
        misconception: 'Surface float velocity equals the average stream velocity.',
        reality:
          'Surface water moves faster than the average because friction slows water near the bed and banks. Multiply float velocity by about 0.85.',
      },
    ],
    furtherReading: [STREAMGAGING_BASICS, HOW_STREAMFLOW_MEASURED, RATING_CURVE, RATING_CURVE_IMAGE, STREAMFLOW_WATER_CYCLE, URBAN_FLOODS],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Monitoring networks & techniques ─────────────────────────
  {
    id: 'exp-mm-monitoring-networks-techniques',
    topic: 'measuring-monitoring',
    subtopic: 'monitoring-networks-techniques',
    title: 'Monitoring Networks & Techniques',
    sections: [
      {
        heading: 'Monitoring networks',
        content:
          "Freshwater is monitored through networks of fixed stations that collect long, consistent records. In the United States, the USGS operates thousands of streamgages and groundwater wells nationwide, and the data are published through the National Water Information System (NWIS) and USGS WaterData.\n\n• Streamgage network: continuous stage and discharge, used for flood warnings, water allocation, and design of bridges and dams.\n• Groundwater observation-well networks: water levels tracked over years to detect declines, recovery, and responses to drought or pumping (e.g., the USGS Climate Response Network uses wells little affected by pumping).\n• Water-quality monitoring: samples and continuous sensors for temperature, specific conductance (salinity), dissolved oxygen, pH, turbidity, and nitrate.\n• Weather and precipitation networks: rain gauges, snow pillows and snow courses, and weather radar.\n\nLong records matter. Flood-frequency analysis, drought assessment, and trend detection all need many years of data from the same location measured the same way.",
        keyPoints: [
          'USGS runs thousands of streamgages and monitoring wells nationwide (NWIS / WaterData).',
          'Networks track water quantity (stage, discharge, levels) and quality.',
          'Long, consistent records are essential for flood frequency and trend analysis.',
        ],
      },
      {
        heading: 'Observation wells and piezometers',
        content:
          "An observation (monitoring) well is a well used to measure water levels or sample groundwater, not for supply.\n\n• Water levels are measured by hand (steel tape, electric water-level meter) or continuously with a pressure transducer and data logger.\n• A piezometer is a narrow well open (screened) only over a short interval, so it measures the hydraulic head at one depth.\n• Nested piezometers at different depths at one site reveal vertical flow. If head decreases with depth, water moves downward (a recharge area). If head increases with depth, water moves upward (a discharge area, e.g., near a gaining stream or spring).\n• Monitoring wells placed around a landfill, spill, or pumping well track contaminant plumes, the spread of a cone of depression, and saltwater intrusion along coasts.\n\nPumping tests: pump one well at a known rate and record drawdown (the drop in water level) in nearby observation wells over time. The results give the aquifer's transmissivity and storage. Drawdown is greatest at the pumping well and decreases outward, forming a cone of depression. A higher pumping rate makes the cone deeper and steeper. If pumping slows, the cone becomes shallower but keeps spreading outward until it captures enough recharge.",
        keyPoints: [
          'Observation wells measure water levels and quality; data loggers record continuously.',
          'Piezometers measure head at a specific depth; nested piezometers show vertical flow.',
          'Head decreasing with depth = recharge area; increasing with depth = discharge area.',
          'Pumping tests use drawdown in observation wells to characterize the aquifer.',
        ],
      },
      {
        heading: 'Tracer studies',
        content:
          "Tracers are substances added to (or naturally present in) water so that its path and speed can be followed.\n\nArtificial tracers:\n• Fluorescent dyes such as fluorescein (green) and rhodamine WT (red) are detectable at very low concentrations and are safe at the doses used.\n• Dye is injected into a sinkhole, sinking stream, or well. Then springs, wells, and streams are monitored with packets of activated charcoal (\"bugs\") that absorb dye, water samples, or field fluorometers.\n• Dye tracing is the standard tool in karst aquifers. Water moves through conduits that cannot be predicted from water-table maps, sometimes across surface drainage divides. The USGS study listed below is a worked example in a carbonate aquifer.\n• Results: the connection (which input reaches which outlet), travel time, and velocity (= distance ÷ travel time). A breakthrough curve plots concentration against time at the outlet. The first arrival shows the fastest path; the peak shows typical travel time.\n• Salt and dye are also used for dilution gauging of stream discharge.\n\nNatural (environmental) tracers:\n• Stable isotopes of water (oxygen-18, deuterium) fingerprint water from different sources and are used to separate storm hydrographs into \"new\" rain and \"old\" groundwater.\n• Tritium, CFCs, and carbon-14 estimate groundwater age (time since recharge).\n• Temperature, specific conductance, and chloride show where groundwater enters streams.\n\nTracers also illustrate how contaminants move. A plume spreads out and its peak concentration decreases as it travels (dispersion and dilution), and shallow, more permeable layers often transmit it faster.",
        keyPoints: [
          'Dyes (fluorescein, rhodamine WT) trace flow paths and velocities, especially in karst.',
          'Detection: charcoal packets, water samples, fluorometers; breakthrough curves.',
          'Velocity = distance ÷ travel time to first arrival or peak.',
          'Natural tracers: stable isotopes (water sources), tritium/CFCs/¹⁴C (age), temperature.',
        ],
      },
      {
        heading: 'Remote sensing',
        content:
          "Remote sensing gathers data from aircraft or satellites without touching the water.\n\n• Optical and multispectral imagery (e.g., Landsat, imaging since 1972): maps lakes, rivers, wetlands, floods, snow cover, and channel changes over decades. Water absorbs near-infrared light strongly, so it appears dark in near-infrared bands.\n• NDVI (Normalized Difference Vegetation Index) = (NIR − Red) ÷ (NIR + Red), ranging from −1 to +1. Healthy vegetation reflects strongly in near-infrared and absorbs red, so high NDVI means dense, healthy vegetation. Water and bare or built-up surfaces have low or negative values. NDVI maps reveal irrigation, drought stress, and riparian zones, and they help predict runoff: dense vegetation increases interception and infiltration, while built-up (low-NDVI) areas produce more runoff.\n• GRACE and GRACE Follow-On (twin satellites measuring tiny changes in Earth's gravity): detect changes in total water storage (groundwater, soil moisture, snow, surface water) over large regions. Satellite estimates like these have revealed groundwater depletion in places such as California's Central Valley and northern India.\n• InSAR (radar interferometry): measures centimetre-scale land subsidence caused by groundwater pumping.\n• Radar and laser altimetry and the SWOT mission (launched 2022): measure water-surface elevations of rivers, lakes, and reservoirs from orbit.\n• LiDAR: high-resolution elevation models for mapping floodplains, channels, and watershed boundaries.\n• Precipitation: ground-based weather radar sends out microwave pulses and measures the echoes reflected back from raindrops. Satellites (such as GPM) observe precipitation from orbit using passive microwave and onboard radar. Both are calibrated against rain gauges, which measure directly but only at a point and tend to undercatch in wind.\n\nRemote sensing provides wide, repeated coverage but must be checked against ground measurements (ground truthing) from gauges and wells.",
        keyPoints: [
          'Landsat/multispectral imagery maps surface water, wetlands, floods, and channel change.',
          'NDVI = (NIR − Red)/(NIR + Red); high = healthy vegetation.',
          'GRACE/GRACE-FO gravity data track total water-storage changes, including groundwater depletion.',
          'InSAR measures subsidence; SWOT/altimetry measure water-surface heights; LiDAR maps terrain.',
          'Weather radar is ground-based and active; rain gauges are direct point measurements that undercatch in wind.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Dye-trace velocity',
        problem:
          'Dye injected into a sinkhole is first detected at a spring 4.2 km away after 30 hours, and the peak concentration arrives after 42 hours. Estimate the maximum and typical groundwater velocities in m/h and km/day.',
        steps: [
          'Maximum velocity (first arrival) = 4,200 m ÷ 30 h = 140 m/h = 3.36 km/day.',
          'Typical velocity (peak) = 4,200 m ÷ 42 h = 100 m/h = 2.4 km/day.',
          'Such fast velocities indicate conduit flow through karst, not diffuse flow through pores.',
        ],
        answer: 'About 140 m/h (3.4 km/day) maximum and 100 m/h (2.4 km/day) typical: conduit flow.',
      },
      {
        title: 'Computing NDVI',
        problem:
          'A pixel has near-infrared reflectance 0.50 and red reflectance 0.08. A second pixel has NIR 0.05 and red 0.07. Calculate NDVI for each and interpret.',
        steps: [
          'Pixel 1: (0.50 − 0.08) ÷ (0.50 + 0.08) = 0.42 ÷ 0.58 ≈ 0.72.',
          'Pixel 2: (0.05 − 0.07) ÷ (0.05 + 0.07) = −0.02 ÷ 0.12 ≈ −0.17.',
          'High positive NDVI = dense, healthy vegetation. Negative NDVI is typical of open water.',
        ],
        answer: 'Pixel 1 ≈ 0.72 (healthy vegetation); Pixel 2 ≈ −0.17 (likely water).',
      },
      {
        title: 'Reading nested piezometers',
        problem:
          'At one site, a shallow piezometer (5 m deep) shows a head of 102.0 m and a deep piezometer (25 m deep) shows a head of 101.2 m. Is this a recharge or discharge area? What is the vertical gradient?',
        steps: [
          'Head decreases with depth (102.0 → 101.2 m), so water moves downward.',
          'Downward flow indicates a recharge area.',
          'Vertical gradient = 0.8 m ÷ 20 m = 0.04 (downward).',
        ],
        answer: 'Recharge area, with a downward vertical gradient of 0.04.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Satellites can see groundwater directly.',
        reality:
          'Satellites infer groundwater indirectly, for example through gravity changes (GRACE), land subsidence (InSAR), or vegetation and surface-water patterns. Ground measurements from wells are still needed.',
      },
      {
        misconception: 'Weather radar and satellites measure rainfall in the same way.',
        reality:
          'Ground-based radar actively sends out pulses and measures echoes from precipitation. Satellites view from orbit using passive microwave sensors and/or their own radar. Both are calibrated against rain gauges.',
      },
      {
        misconception: 'Groundwater always flows the way the water-table map predicts.',
        reality:
          'In karst, water moves through conduits that may cross surface divides. Dye tracing is often needed to find actual flow paths.',
      },
    ],
    furtherReading: [DYE_TRACING, KARST_AQUIFERS, NASA_GROUNDWATER, STREAMGAGING_BASICS, CIRC_1139],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Previous questions ─────────────────────────
  {
    id: 'exp-mm-previous-questions',
    topic: 'measuring-monitoring',
    subtopic: 'previous-questions',
    title: 'Previous Questions',
    sections: [],
    previousQuestions: [
      // ───── Interpreting freshwater features on topographic maps ─────
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q40–43',
        question:
          'Identify each USGS topographic map symbol. (40) Image 23a. (41) Image 24a: A) Perennial stream B) Intermittent river C) Perennial river D) Intermittent stream. (42) Image 25a: A) Bridge B) Highway C) Trail D) Levee. (43) Image 26a: A) Narrow wash B) Marsh or swamp C) Spring or seep D) B and C.',
        images: [
          { url: `${IMG}/highlands-23a-symbol.jpg`, caption: 'Image 23a' },
          { url: `${IMG}/highlands-24a-symbol.jpg`, caption: 'Image 24a' },
          { url: `${IMG}/highlands-25a-symbol.jpg`, caption: 'Image 25a' },
          { url: `${IMG}/highlands-26a-symbol.jpg`, caption: 'Image 26a' },
        ],
        answer: '(40) Perennial stream. (41) C) Perennial river. (42) D) Levee. (43) B) Marsh or swamp.',
      },
      {
        source: 'BullSO Invitational 2022 — Dynamic Planet, Q3–4',
        question:
          'Each symbol is used on topographic maps to represent what? (Q3) A) River boundary B) National boundary C) Channel D) Road. (Q4) A) Perennial stream B) Perennial river C) Intermittent stream D) Intermittent river.',
        images: [
          { url: `${IMG}/bullso-q3-symbol.jpg`, caption: 'Q3 symbol' },
          { url: `${IMG}/bullso-q4-symbol.jpg`, caption: 'Q4 symbol' },
        ],
        answer: 'Q3: C) Channel. Q4: B) Perennial river.',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q58',
        question:
          'On a topographic map, the point of the "V" shapes in contour lines around rivers and streams points ______. A) Downstream B) Toward the center C) Toward the banks D) Upstream',
        choices: ['A) Downstream', 'B) Toward the center', 'C) Toward the banks', 'D) Upstream'],
        answer: 'D) Upstream.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q45–47',
        question:
          'Refer to Image G, a topographic map (the 50-ft contour is labeled; contour interval 10 ft). (45) Is point A upstream or downstream of point C? Justify. (46) If the water table at point B is 10 ft below the surface, state one possible whole-number water-table elevation at B. (47) In some months an ephemeral lake forms at B. What clues on the map suggest this?',
        images: [{ url: `${IMG}/ut21-imageG-topo-map.jpg`, caption: 'Image G' }],
        answer:
          '(45) Downstream, because the contour lines point in the upstream direction (opposite the direction of flow). (46) Any whole number from 51 to 59 ft. (47) The hachure marks on the closed contours indicate a depression (an area lower than its surroundings), where water can collect.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q3',
        question:
          'Refer to Figure A (map of Lincoln Lake). The stream southwest of Lincoln Lake, named Lincoln Creek, is heading in what direction? A) Northeast B) Southwest C) Straight upwards (into the sky) D) Impossible to tell',
        images: [{ url: `${FG_IMG}/ut22-figA-lincoln-lake-map.jpg`, caption: 'Figure A: Lincoln Lake and surrounding area' }],
        choices: ['A) Northeast', 'B) Southwest', 'C) Straight upwards', 'D) Impossible to tell'],
        answer: 'B) Southwest.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q13–14',
        question:
          'Refer to Figure B, a map of the Gilmore Valley area. (13) Locate a sinkhole on the map. What are its approximate coordinates? (14) While unmarked on this map, small streams flow into the sinkhole. What are these called?',
        images: [{ url: `${IMG}/ut22-figB-gilmore-valley-map.jpg`, caption: 'Figure B: Gilmore Valley area (elevation in feet)' }],
        answer: '(13) About 70.9 N, 4.3 E (on the map grid). (14) Disappearing (sinking) streams.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q29–31',
        question:
          'Refer to the topographic map (section of USGS Irvine, KY quadrangle; top is north). (29) What type of stream is featured? A) Perennial B) Disappearing C) Intermittent D) Underground E) Rapids. (30) What type of wetland, if any, is featured? A) Submerged marsh or swamp B) Wooded marsh or swamp C) Marsh or swamp (not submerged or wooded) D) No wetlands. (31) What is the most likely direction of groundwater flow within the green boxed area? A) North B) East C) South D) West',
        images: [{ url: `${IMG}/birdso-q29-irvine-ky-topo.jpg`, caption: 'Section of USGS Irvine, KY quadrangle' }],
        answer:
          '(29) C) Intermittent stream (blue dash-dot line). (30) B) Wooded marsh or swamp. (31) B) Toward the east.',
      },
      {
        source: 'BullSO Invitational 2022 — Dynamic Planet, Q35',
        question:
          'Refer to the topographic map. (1) Identify the primary karst feature shown around the 33 and 34 markers. (2) Propose a mechanism for how the small circular ponds west of Clearwater Lake formed. (3) What is the contour interval of the map (units in feet)? (4) What is the Cvijić classification of the karst process on this map? Explain.',
        images: [{ url: `${IMG}/bullso-q35-karst-topo-map.jpg`, caption: 'Karst topographic map' }],
        answer: '(1) Sinkholes. (2) Sinkholes that reached (intersect) the water table filled with water. (3) 10 ft. (4) Mature, because there are many sinkholes.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 4 Q1',
        question: 'Using the topographic map of the Tahoma Creek drainage (Mount Rainier National Park), approximate the gradient of Tahoma Creek in ft/km.',
        images: [{ url: `${IMG}/birdso-s4-tahoma-creek-topo.jpg`, caption: 'Tahoma Creek drainage, Mount Rainier National Park' }],
        answer:
          'From the confluence with the Nisqually to the head is about 12 km (from the scale). The drop is about 5,200 ft − 2,200 ft = 3,000 ft. Gradient ≈ 3,000 ft ÷ 12 km = 250 ft/km (230–270 accepted).',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q42',
        question: 'What does it mean to delineate a watershed on a topographic map?',
        answer:
          'Key: drawing lines on a topo map to identify a watershed\'s boundaries. More precisely, you trace the drainage divide along ridgelines and high points, crossing contours at right angles, to enclose all land that drains to a chosen outlet.',
      },

      // ───── Mapping the water table from well data ─────
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q22',
        question: 'Refer to Image B, a map of water-table contours with a stream. The stream is best classified as a(n): A) gaining stream B) losing stream C) ephemeral stream D) disconnected stream',
        images: [{ url: `${IMG}/ut21-imageB-water-table-contours.jpg`, caption: 'Image B: water-table contours with a stream' }],
        choices: ['A) Gaining stream', 'B) Losing stream', 'C) Ephemeral stream', 'D) Disconnected stream'],
        answer: 'B) Losing stream.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q23–24',
        question:
          'Refer to Image C (water-table contours around the Straight River). (23) Which segment of the stream, if any, has a higher velocity? A) Purple B) Green C) Neither D) Cannot be determined. (24) With north at the top, toward what direction is groundwater most likely flowing at point P? Assume the stream is fed by groundwater. A) East B) Southeast C) South D) Southwest E) West',
        images: [{ url: `${IMG}/ut21-imageC-map.jpg`, caption: 'Image C' }],
        answer:
          '(23) A) The purple segment. (24) C) South: groundwater flows perpendicular to the water-table contours, from higher to lower head, toward the river.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q53–57',
        question:
          'Image 11 shows the profile of a hypothetical stream (bottom = sea level). (53) What does the white line represent? (54) T/F: The white and black lines converge at the mouth of the stream. (55) T/F: The white line can never go below the black line. (57) Estimate the maximum hydraulic gradient of the groundwater beneath the stream in ft/ft.',
        images: [{ url: `${FG_IMG}/svso23-image11-stream-profile.jpg`, caption: 'Image 11: stream profile' }],
        answer: '(53) The water table. (54) True. (55) False. (57) About 0.007 ft/ft.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q45',
        question:
          'Each well is located at 125 m above sea level. Well A: piezometric surface 150 m, confined aquifer. Well B: 100 m, confined. Well C: 150 m, not confined. Well D: 100 m, not confined. Which well is considered an artesian well? A) A B) B C) C D) D',
        choices: ['A) A', 'B) B', 'C) C', 'D) D'],
        answer: 'A) Well A: it taps a confined aquifer, and its piezometric surface (150 m) is above the well (125 m), so water rises (and flows) without pumping.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q57–62',
        question:
          'Refer to Image I, a cross-section with rock units (blue dotted = water table; green dashed = potentiometric surface; wells A–D; geologic contacts w–z). (57) What is responsible for the upward movement of groundwater in the wells? (58) Which wells are artesian? Justify. (59) What type of aquifer is Well C in? (61) If groundwater is always being pumped from a well at a nonzero rate, which diagram best shows the water table? (62) At which contacts are springs likely to flow?',
        images: [
          { url: `${IMG}/ut21-imageI-wells-cross-section.jpg`, caption: 'Image I' },
          { url: `${IMG}/ut21-q61-well-diagrams.jpg`, caption: 'Q61 diagrams' },
        ],
        answer:
          '(57) Pressure (the pressure gradient in the confined aquifer). (58) A and D: they draw from confined aquifers enclosed between impermeable (shale) layers. (59) A perched aquifer. (61) Diagram 1: a cone of depression around the pumping well. (62) x and z.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q26 & Q28',
        question:
          'Refer to Figure D. (26) Which letter represents the level to which water in a confined aquifer would rise if not trapped between confining layers? What is it called? (28) Why is the location of point A (the water table) significant in identifying effluent or influent streams?',
        images: [{ url: `${IMG}/ut22-figD-groundwater.jpg`, caption: 'Figure D' }],
        answer:
          '(26) B: the potentiometric surface. (28) Effluent (gaining) streams receive water from the saturated zone, while influent (losing) streams lose water to it. When the water table is high, streams are more likely to gain water, and vice versa.',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 2 Q6, Q10–11',
        question:
          '(6) Identify the difference between a water table well and an artesian well. (10) Identify parts a–f of the image (a = dashed line). (11) A vertical source of pollution occurs at the star in the image. Is the river safe to drink from? Why or why not?',
        images: [{ url: `${IMG}/umso23-s2q10-perched-water-table.jpg`, caption: 'Section 2, Q10 diagram' }],
        answer:
          '(6) A water table well simply reaches below the water table and is affected when the water table is lowered. An artesian well taps a confined aquifer and is supplied by the aquifer\'s hydraulic head (pressure). (10) a: water table, b: river, c: aquifer, d: unsaturated zone, e: perched water table, f: aquiclude. (11) Yes. The pollution stays in the perched water table and does not pass through the aquiclude into the main water table that feeds the river.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q40',
        question:
          'A well pumps groundwater at a uniform rate q₁ for time t. If the pumping rate decreases to q₂ < q₁ for another interval t, what happens to the cone of depression? (No recharge, uniform soil.) A) Depth increases, slope decreases B) Depth increases, radius decreases C) Slope increases, depth decreases D) Radius increases, depth decreases',
        choices: ['A) Depth ↑, slope ↓', 'B) Depth ↑, radius ↓', 'C) Slope ↑, depth ↓', 'D) Radius ↑, depth ↓'],
        answer: 'D) The cone keeps spreading outward (radius increases) but becomes shallower (depth decreases) at the lower pumping rate.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q9 & Q34',
        question:
          '(9) The drop in the water table around a pumped well is the: A) drawdown B) hydraulic head C) porosity D) fluid potential. (34) The uppermost level at which water in a given area fully saturates rock or soil is called a: A) Impermeable surface B) Groundwater recharge C) Water table D) Mantle level',
        answer: '(9) A) Drawdown. (34) C) Water table.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q101',
        question: 'A cone of depression forms around what man-made feature?',
        answer: 'A (pumping) well.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q54',
        question:
          'You and your neighbour hold a well-drilling competition on adjacent land. You drill 90 m and find no water; your neighbour finds water after only 30 m. Was it bad luck, or is there a reason?',
        answer:
          "Your neighbour's land likely sits above a perched water table (water held up by a local impermeable layer), so water was found at shallow depth. Your well likely penetrated an impermeable layer/aquitard with no water above the main water table.",
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q3',
        question:
          'Explain how a stream flowing in a channel down a hillside can see its flow increase, even if no tributaries join it and there is no precipitation.',
        answer:
          'It is fed by groundwater (a gaining stream): as it flows downhill, the channel intersects an aquifer or its bed drops below the water table, so groundwater seeps in.',
      },

      // ───── Stream gauging, discharge measurement & hydrographs ─────
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q1–2',
        question:
          'The figure shows a USGS stream gauge record (Rillito Creek at Dodge Boulevard, Tucson, AZ). (1) Is the streamflow at this gauge A) Perennial B) Intermittent C) Tidal D) Varzea E) Impossible to say? (2) The recurrence interval for a flow of 5000 (units as plotted) in years is: A) 1.0 B) 1.6 C) 2 D) 6.0',
        images: [{ url: `${IMG}/soni22-rillito-creek-gauge.jpg`, caption: 'USGS 09485700 Rillito Creek at Dodge Blvd, Tucson, AZ' }],
        answer:
          '(1) Key: A) Perennial. Check this one: the record sits near zero discharge between short flood spikes, which normally indicates an ephemeral or intermittent stream. (2) Key: B) 1.6 years.',
      },
      {
        source: 'BullSO Invitational 2022 — Dynamic Planet, Q37',
        question:
          'The graph (USGS 03353600 Little Eagle Creek at Speedway, IN) is part of Indiana\'s dry season. (1) What is the lowest gage height reached by the creek, in ft? (2) Classify the stream (perennial, ephemeral, or intermittent) and explain. (3) Could these data inform the highest annual river stage? Explain.',
        images: [{ url: `${IMG}/bullso-q37-little-eagle-creek-gage.jpg`, caption: 'Gage height, Little Eagle Creek, Nov 2021' }],
        answer:
          '(1) About 1 ft. (2) Perennial: it keeps flowing (gage height never drops to a dry channel) even in the dry season. (3) No. These data cover only a short dry-season window, so they cannot show the annual maximum stage.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q8–11',
        question:
          '(8) During a rain event, stream discharge increases and is graphed as shown. What is this graph called? (9) What flow is represented by the purple shading? A) Throughflow B) Storm runoff C) Base flow D) Rainfall flux. (10) Which is closest to the peak discharge? A) 5 B) 23 C) 55 D) 63 cumecs. (11) What is the lag time? A) 1500 h B) 1200 h C) 15 h D) 6 h',
        images: [{ url: `${IMG}/rickards-q8-storm-hydrograph.jpg`, caption: 'Storm hydrograph' }],
        answer: '(8) Storm (flood) hydrograph. (9) C) Base flow. (10) B) 23 cumecs. (11) C) 15 hours.',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q24, Q28–31',
        question:
          '(24) What is stream discharge and its formula? (28) Referring to Image 12a, what is the formula for discharge and how do you find total discharge on a hydrograph? (29) What is lag time? (30) What effect does urbanization have on a hydrograph? (31) What does the rising limb indicate?',
        images: [{ url: `${IMG}/highlands-12a-flood-hydrograph.jpg`, caption: 'Image 12a: flood hydrograph' }],
        answer:
          '(24) The amount of water flowing in a channel per unit time: Q = A × v (cross-sectional area × average velocity). (28) Discharge = volume ÷ time; the area under the hydrograph curve gives the total volume of water. (29) The time between peak rainfall and peak discharge. (30) Impermeable surfaces create a steeper rising limb, a higher peak, and a shorter lag time. (31) How quickly the water level (discharge) rises after a storm.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q20',
        question:
          'The time of concentration for watershed A is 2 hours and for watershed B is 1 hour. Which has the higher peak discharge after the same storm? Which has a sharper rising limb? Which returns to baseflow faster? A) A, A, A B) B, A, B C) A, A, B D) B, B, B',
        choices: ['A) A, A, A', 'B) B, A, B', 'C) A, A, B', 'D) B, B, B'],
        answer: 'D) B, B, B. The shorter time of concentration delivers runoff faster, giving a higher, sharper peak and quicker recession.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q60',
        question:
          'After major storms the ground has become saturated. Which are true of a new hydrograph for storms of the same size, compared with before? a) Steeper rising limb b) More gradual rising limb c) Longer lag time d) Shorter lag time e) Lower peak f) Higher peak g) Higher baseflow h) Lower baseflow',
        answer: 'a, d, f, g: a steeper rising limb, shorter lag time, higher peak, and higher baseflow.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q18',
        question:
          'A storm produces significant runoff in the pictured watershed. What would a storm hydrograph from the very bottom of the watershed look like? A) A single peak with a leftward tail B) A single peak with a rightward tail C) Two distinct but similar peaks D) Two peaks of different heights',
        images: [{ url: `${IMG}/birdso-q18-watershed.jpg`, caption: 'Watershed' }],
        choices: ['A) Single peak, leftward tail', 'B) Single peak, rightward tail', 'C) Two similar peaks', 'D) Two peaks of different heights'],
        answer: 'B) A single peak with a rightward tail: a quick rising limb followed by a longer recession limb.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q42',
        question:
          'Select all that are true of the hydrograph for a region after it is urbanized: A) More rainwater infiltrates B) Less rainwater infiltrates C) Peak discharge is greater D) Peak discharge is lower E) Lag time is longer F) Lag time is shorter',
        answer: 'B, C, F: less infiltration, a greater peak discharge, and a shorter lag time.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q22b',
        question: 'Given the discharge of a river and the scale of a cross-section, briefly explain how you would calculate the average velocity of water through that cross-section.',
        answer: 'Discharge = cross-sectional area × average velocity. Measure the cross-sectional area using the scale, then divide the discharge by the area to get average velocity.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 4 Q4–7',
        question:
          '(4) Which curve most likely represents the discharge of glacier-fed Tahoma Creek over a year? (5) With an average discharge of 25 m³/s, what volume is discharged in a year? A) 9.1×10⁴ B) 1.3×10⁷ C) 3.9×10⁷ D) 7.9×10⁸ E) 9.5×10⁸ m³. (6) On a discharge-vs-time graph, what represents the volume discharged? A) Max rate × time B) Min rate × time C) Average slope D) Area under the curve. (7) Estimate the water volume discharged during the flood shown (dashed line).',
        images: [
          { url: `${IMG}/birdso-s4q4-discharge-curves.jpg`, caption: 'Q4 annual discharge curves' },
          { url: `${IMG}/birdso-s4q6-debris-flow-hydrograph.jpg`, caption: 'Q6–7 flood hydrograph (solid = debris flow, dashed = water only)' },
        ],
        answer:
          '(4) D: a late-summer peak from glacier melt. (5) D) 25 m³/s × 3.15×10⁷ s ≈ 7.9×10⁸ m³. (6) D) The area under the curve. (7) Split the dashed curve into a trapezoid (900 s × 130 m³/s) and a triangle (½ × 3,600 s × 60 m³/s), for a total of about 225,000 m³.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q4',
        question: 'A 200 km² watershed receives 2 cm of rain. What is the average flow in m³/s at the mouth if it takes 1 day for the water to drain away?',
        answer: 'Volume = 200 × 10⁶ m² × 0.02 m = 4 × 10⁶ m³. Divide by 86,400 s to get ≈ 46.3 m³/s (the key gives 46.9; 46–47 accepted).',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 2 Q13',
        question: "Write the formula for a stream's discharge.",
        answer: 'Q = w × d × v (width × depth × velocity), i.e., cross-sectional area × average velocity.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q31',
        question: 'A hydrograph is the graphical representation of: A) runoff and time B) rainfall and time C) groundwater flow and time D) porosity and grain size E) discharge and size',
        choices: ['A) Runoff and time', 'B) Rainfall and time', 'C) Groundwater flow and time', 'D) Porosity and grain size', 'E) Discharge and size'],
        answer: 'A) Runoff (discharge) and time.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q7',
        question:
          'For a long time, groundwater was known to contribute to the ______ aspect of a storm hydrograph. Later, ______ proposed that groundwater might contribute to storm flow as well. a) Baseline; Robert Horton b) Baseline; Sklash and Farvolden c) Peak; Sklash and Farvolden d) Peak; Robert Horton e) Recession limb; Betson',
        answer:
          'b) Baseline (baseflow); Sklash and Farvolden. Their isotope work (published 1979, although the question says the 1960s) showed that pre-event groundwater makes up much of storm flow.',
      },

      // ───── Monitoring networks & techniques ─────
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q35–36',
        question: '(35) How might rain gauges underestimate rainfall? (36) True or false: satellite and RADAR both measure rainfall in the same manner. If false, explain.',
        answer:
          '(35) Wind and turbulence around an unshielded gauge deflect raindrops (and can splash water out), so the gauge catches less than actually falls. (36) False. Satellites observe precipitation from orbit (looking down), while ground-based weather radar emits pulses and measures the echoes reflected back from raindrops.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q43–44',
        question:
          'A chemical spill happens instantaneously at X. The plume edge reaches site B at t = 10 min (A lies between X and B). (43) Select all likely true: A) A₁₀ > B₁₀ B) A₁₀ = B₁₀ C) A₁₀ < B₁₀ D) A₁₀ > A₃₀ E) A₁₀ = A₃₀ F) A₁₀ < A₃₀. (44) What can generally be assumed about the pollutant transport rate at 10 m depth (v₁₀) vs 50 m depth (v₅₀)? A) v₁₀ > v₅₀ B) v₁₀ = v₅₀ C) v₁₀ < v₅₀ D) Inconclusive',
        images: [{ url: `${IMG}/birdso-q43-spill-map.jpg`, caption: 'Spill site X with monitoring sites A and B' }],
        answer: '(43) A and F. Closer to the spill, A has a higher concentration than B at 10 min, and the concentration at A is still rising at 30 min. (44) A) v₁₀ > v₅₀: shallow transport is generally faster.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 3 (NDVI)',
        question:
          'A false-color image of Fresno, CA shows NDVI (green = higher, healthier vegetation). True/False: (1) Areas with higher NDVI generally yield more runoff. (2) The green indicates higher NDVI as a result of more rainfall. (3) A tends to be warmer than B because solar energy is stored as latent heat in A more than B. For a high-precipitation event: (4) Total runoff per unit area is greater in A than B. (5) If B were more similar to A, discharge would peak sooner after peak rainfall. (6) If A and B were the only runoff sources into a river flowing left, the discharge-time graph would have a steeper ascending than descending limb.',
        images: [{ url: `${IMG}/birdso-s3-fresno-ndvi.jpg`, caption: 'NDVI image of Fresno, California' }],
        answer: '(1) False. (2) False. (3) False. (4) True. (5) True. (6) True.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q36–37',
        question:
          'Refer to the satellite image (Canyonlands National Park, Landsat 7 ETM+) with locations X and Y. (36) Location X is at a(n) ___ elevation compared with Y: A) Higher B) Lower C) Equal D) Cannot be determined. (37) Which are true about the process near X? A) Shortens the channel B) Lengthens the channel C) Dominated by erosion D) Dominated by deposition',
        images: [{ url: `${IMG}/birdso-q36-canyonlands-landsat.jpg`, caption: 'Canyonlands National Park (Landsat 7 ETM+)' }],
        answer: '(36) A) Higher. (37) B and C: headward erosion near X lengthens the channel and is dominated by erosion.',
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [],
  },
]
