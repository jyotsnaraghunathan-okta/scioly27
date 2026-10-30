const IMG = '/images/previous-questions/fluvial-geomorphology'

const PG13_3 = {
  title: '13.3 Stream Erosion and Deposition',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/physicalgeology2ed/chapter/13-3-stream-erosion-and-deposition/',
}
const PG13_4 = {
  title: '13.4 Stream Types',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/physicalgeology2ed/chapter/13-4-stream-types/',
}
const PRACTICAL_8_1 = {
  title: '8.1 Stream Erosion and Deposition',
  source: 'Practical Geology, Open Education Alberta',
  url: 'https://openeducationalberta.ca/practicalgeology/?p=600',
}
const LAB_21 = {
  title: 'Lab 21: Fluvial Geomorphology and Landforms',
  source: 'Geography Lab Manual (Burles & Huscroft), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/geoglabmanualv2/chapter/fluvial-geomorphology-and-landforms/',
}
const HJULSTROM = {
  title: 'Hjulström curve',
  source: 'Wikipedia',
  url: 'https://en.wikipedia.org/wiki/Hjulstr%C3%B6m_curve',
}
const BEDFORMS = {
  title: 'Bedforms and roughness',
  source: 'CoastalWiki',
  url: 'https://www.coastalwiki.org/wiki/Bedforms_and_roughness',
}
const ANTIDUNE = {
  title: 'Antidune',
  source: 'Wikipedia',
  url: 'https://en.wikipedia.org/wiki/Antidune',
}
const USGS_477 = {
  title: 'A Tentative Classification of Alluvial River Channels (Circular 477, Schumm 1963)',
  source: 'U.S. Geological Survey',
  url: 'https://pubs.usgs.gov/publication/cir477',
}
const SEDIMENTS = {
  title: 'Weathering and Erosion Produce Sediments',
  source: 'Physical Geology (LibreTexts)',
  url: 'https://geo.libretexts.org/Courses/Sierra_College/Physical_Geology_-_Stevens/05%3A_Weathering_Sediment_and_Soil/5.04%3A_Weathering_and_Erosion_Produce_Sediments',
}

export const fluvialGeomorphologyExplanations = [
  // ───────────────────────── Longitudinal profile, gradient & base level ─────────────────────────
  {
    id: 'exp-fg-longitudinal-profile-base-level',
    topic: 'fluvial-geomorphology',
    subtopic: 'longitudinal-profile-base-level',
    title: 'Longitudinal Profile, Gradient & Base Level',
    sections: [
      {
        heading: 'The longitudinal profile',
        content:
          "A stream's longitudinal profile is a graph of channel elevation (y-axis) against distance along the channel from the source (x-axis). Almost every stream has a concave-up profile: it is steep in the headwaters and becomes progressively gentler toward the mouth.\n\nThe shape comes from how discharge changes downstream. Near the source, the stream carries little water in a small, rough channel, so it needs a steep slope to move its water and sediment. Downstream, tributaries add discharge, the channel gets larger and deeper, and the sediment it carries is finer. A larger, more efficient channel can move the same load on a much gentler slope.\n\nOn a profile diagram, sudden steps or bumps in an otherwise smooth curve are knickpoints, such as waterfalls, rapids, resistant rock ledges, or the upstream edge of a recent base-level drop. A smooth, concave curve with no steps is the signature of a graded stream (see Dynamic Equilibrium & Graded Streams).",
        keyPoints: [
          'Longitudinal profile = elevation vs. distance along the channel from source to mouth.',
          'Typical profile is concave-up: steep headwaters, gentle lower reaches.',
          'Concavity results from discharge increasing downstream, which makes the channel more efficient.',
          'Steps or irregularities in the profile are knickpoints; a smooth curve suggests a graded stream.',
        ],
      },
      {
        heading: 'Stream gradient and how to calculate it',
        content:
          "Gradient (slope) is the vertical drop of the stream divided by the horizontal distance over which the drop occurs:\n\n    gradient = change in elevation ÷ distance along the channel\n\nIt can be expressed several ways, and competition questions will ask for any of them:\n• m/km or ft/mi (the Geography Lab Manual uses m/km)\n• dimensionless ratio (m/m or ft/ft); make sure both values are in the same unit first\n• percent (ratio × 100)\n\nTo measure gradient on a topographic map, find where two contour lines cross the stream, multiply the number of contour intervals between them by the contour interval to get the drop, and measure the distance along the stream channel (following its bends, not a straight line) using the map scale. Contour lines crossing a stream form a V that points upstream, which tells you flow direction.\n\nGradient controls much of a stream's behaviour: together with channel shape, it sets velocity, which in turn controls how much and how large a sediment load the stream can move. Steep headwater streams are turbulent with coarse, rough beds. Gentle lowland rivers have deep, efficient channels and carry fine sediment, so they don't necessarily flow slower. See Dynamic Equilibrium & Graded Streams.",
        keyPoints: [
          'Gradient = vertical drop ÷ horizontal distance along the channel.',
          'Convert units before dividing to get a dimensionless ratio (1 mi = 5280 ft; 1 km = 1000 m).',
          'On a topo map, measure the distance along the stream, not straight-line.',
          'Contour Vs point upstream, toward higher elevation.',
          'Gradient decreases from source to mouth along a concave profile.',
        ],
      },
      {
        heading: 'Base level',
        content:
          "Base level is the lowest elevation to which a stream can erode its channel. A stream cannot cut below its base level, because water stops flowing downhill there.\n\n• Ultimate base level is sea level (for streams flowing to the ocean). Few streams can erode much below it, though rivers can cut channels below sea level near their mouths.\n• Local (temporary) base levels include a lake or reservoir that the stream flows into, a resistant rock layer the stream crosses, or the main river that a tributary joins. A tributary cannot cut below the level of the river it flows into.\n\nOn a longitudinal profile, the profile flattens as it approaches base level at the mouth. If the profile flattens out at some elevation above sea level, the stream is ending in a lake or another water body, or is controlled by a resistant layer, rather than flowing directly into the sea.",
        keyPoints: [
          'Base level = lowest level to which a stream can erode.',
          'Ultimate base level = sea level; local base levels = lakes, reservoirs, resistant rock layers, trunk streams.',
          'A stream (or tributary) cannot erode below its base level.',
          'A profile that levels out above sea level indicates a local base level such as a lake.',
        ],
      },
      {
        heading: 'Changing base level: incision and aggradation',
        content:
          "Any change in base level forces the stream to re-adjust its profile.\n\nBase level falls (sea level drops, the land is uplifted tectonically, or isostatic rebound occurs after glaciers melt): the stream suddenly has extra gradient near its mouth and begins to downcut. A knickpoint forms and migrates upstream by headward erosion, so the incision spreads through the whole drainage network over time. Results include stream terraces (abandoned former floodplains left high above the new channel), incised or entrenched meanders, and a renewed, youthful style of erosion. This is called rejuvenation.\n\nBase level rises (sea level rises, or a dam creates a reservoir): the gradient near the base level is reduced, velocity drops, and the stream deposits sediment (aggradation). Behind a dam, the river builds a delta into the reservoir and gradually fills it. Below the dam, the released water has lost its sediment load and can erode the downstream channel (sometimes called \"hungry water\").",
        keyPoints: [
          'Falling base level → downcutting, knickpoints migrating upstream, terraces, incised meanders (rejuvenation).',
          'Rising base level → reduced gradient, deposition, aggradation, deltas in reservoirs.',
          'Dams create a new local base level: deposition upstream, erosion downstream.',
          'Causes of base-level fall: sea-level drop, tectonic uplift, isostatic rebound.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Gradient from a topographic map',
        problem:
          'A stream crosses the 1,400 ft contour and, farther downstream, the 1,280 ft contour. Measured along its winding channel, the distance between the two crossings is 4.0 miles. Find the gradient in ft/mi, as a dimensionless ratio, and as a percent.',
        steps: [
          'Elevation drop = 1,400 ft − 1,280 ft = 120 ft.',
          'Gradient in ft/mi = 120 ft ÷ 4.0 mi = 30 ft/mi.',
          'Convert distance to feet: 4.0 mi × 5,280 ft/mi = 21,120 ft.',
          'Dimensionless gradient = 120 ft ÷ 21,120 ft ≈ 0.0057 ft/ft.',
          'Percent = 0.0057 × 100 ≈ 0.57%.',
        ],
        answer: '30 ft/mi ≈ 0.0057 ft/ft ≈ 0.57%.',
      },
      {
        title: 'Gradient in m/km (lab-manual style)',
        problem:
          'Using a digital elevation tool, a student finds the head of a stream at 1,250 m and its mouth at 410 m. The channel length is 28 km. What is the average gradient in m/km?',
        steps: [
          'Drop = 1,250 m − 410 m = 840 m.',
          'Gradient = 840 m ÷ 28 km = 30 m/km.',
        ],
        answer: '30 m/km (equivalent to 0.03 m/m, or 3%).',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Base level is always sea level.',
        reality:
          'Sea level is the ultimate base level, but most stream segments are controlled by local base levels such as lakes, reservoirs, resistant rock layers, or the trunk river a tributary joins.',
      },
      {
        misconception: 'Gradient should be measured as the straight-line distance between two points.',
        reality:
          'Stream gradient uses the distance along the channel. Using straight-line distance overestimates the gradient for any sinuous stream.',
      },
      {
        misconception: 'A longitudinal profile is a straight line from source to mouth.',
        reality:
          'Profiles are characteristically concave-up: steep near the source and flattening toward base level.',
      },
    ],
    furtherReading: [PG13_3, PG13_4, LAB_21],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Dynamic equilibrium & graded streams ─────────────────────────
  {
    id: 'exp-fg-dynamic-equilibrium-graded-streams',
    topic: 'fluvial-geomorphology',
    subtopic: 'dynamic-equilibrium-graded-streams',
    title: 'Dynamic Equilibrium & Graded Streams',
    sections: [
      {
        heading: 'What a graded stream is',
        content:
          "A graded stream (or a stream \"at grade\") is one whose slope and channel shape have adjusted, over a period of years, so that with the available discharge it has just the velocity needed to transport the sediment load supplied from upstream. It is neither eroding nor depositing on balance.\n\nA graded stream has a smooth, concave-up longitudinal profile with no knickpoints. If something disturbs that balance, the stream erodes or deposits until a new balance is reached. A graded profile is therefore an equilibrium form, not a fixed shape.",
        keyPoints: [
          'Graded = slope adjusted so the stream can just transport the load supplied to it.',
          'On balance, a graded stream is neither eroding nor depositing.',
          'Its longitudinal profile is smooth and concave-up, with no knickpoints.',
        ],
      },
      {
        heading: 'Dynamic equilibrium and self-adjustment',
        content:
          "Dynamic equilibrium means the stream is constantly being disturbed (floods, droughts, landslides delivering sediment, human changes) but responds through negative feedback that returns it toward balance. Equilibrium does not mean nothing is changing; it means erosion and deposition adjust to cancel out disturbances over time.\n\nA useful way to reason about adjustments is Lane's balance, a qualitative relationship:\n\n    sediment load × sediment size ∝ water discharge × slope\n\nLike a balance scale, if one side changes, the stream changes something else to restore balance:\n• More sediment supplied (deforestation, mining, landslides): the stream cannot carry it all, so it deposits (aggrades), which steepens its slope until it can.\n• Less sediment supplied (below a dam): the stream has excess energy and erodes (degrades) its bed, lowering its slope.\n• More discharge (urbanization, wetter climate): extra energy causes erosion.\n• Steeper slope (channel straightening or channelization): faster flow erodes the bed, and the eroded sediment is deposited downstream.\n• Base-level change: falls cause incision, rises cause deposition (see the Base Level subtopic).",
        keyPoints: [
          'Dynamic equilibrium = continuous adjustment toward balance, not an absence of change.',
          "Lane's balance: sediment load × grain size ∝ discharge × slope.",
          'Excess sediment → aggradation; sediment-starved or extra discharge → degradation.',
          'Straightening a channel steepens it, increasing erosion.',
        ],
      },
      {
        heading: 'How streams change downstream',
        content:
          "Along a stream in equilibrium, many properties change in predictable ways from headwaters to mouth:\n\nIncrease downstream:\n• Discharge (Q), as tributaries and groundwater add water\n• Channel width, depth, and cross-sectional area\n• Total sediment load carried\n• Proportion of fine sediment, and deposition relative to erosion\n\nDecrease downstream:\n• Gradient\n• Grain size of the bed material (downstream fining by sorting and abrasion)\n• Channel roughness and turbulence relative to channel size\n\nVelocity is the trap. Even though the gradient decreases, average velocity usually stays about the same or increases slightly downstream. Larger, deeper channels lose proportionally less energy to friction with the bed and banks, so they are more hydraulically efficient. Steep mountain streams look fast because they are turbulent, but much of their energy goes into friction.\n\nDischarge ties these together: Q = width × depth × average velocity. As Q increases downstream, width and depth take up most of the increase.",
        keyPoints: [
          'Downstream increases: discharge, width, depth, load, proportion of fine sediment.',
          'Downstream decreases: gradient, grain size, relative roughness.',
          'Average velocity stays roughly constant or increases slightly downstream.',
          'Discharge Q = w × d × v.',
        ],
      },
      {
        heading: 'Sediment load, capacity, competence, and the Hjulström curve',
        content:
          "What a stream carries is its load:\n• Dissolved load: ions in solution from chemical weathering (e.g., Ca²⁺, HCO₃⁻); invisible and not velocity-dependent.\n• Suspended load: fine particles (clay, silt, fine sand) held up by turbulence; makes water look muddy.\n• Bed load: coarser particles moved along the bed by traction (rolling and sliding) and saltation (short hops).\n\nCapacity is the maximum total quantity of sediment a stream can carry; it increases with discharge. Competence is the largest particle size a stream can move; it increases sharply with velocity, which is why floods move boulders that normal flow cannot.\n\nThe Hjulström curve (from Filip Hjulström's 1935 study of the River Fyris, later extended by Sundborg) plots grain size against flow velocity on log scales. It has two curves dividing three zones:\n• Above the upper curve (critical erosion velocity): erosion\n• Between the curves: transport\n• Below the lower curve (settling velocity): deposition\n\nKey features to know:\n• Sand around 0.1–0.5 mm is the easiest sediment to erode; it needs the lowest velocity.\n• Clay and fine silt need higher velocities to erode than sand, because the particles are cohesive and the bed is smooth.\n• Once lifted, clay and silt settle only at extremely low velocities, so they stay in suspension a long time.\n• Coarse sediment (gravel, cobbles) is eroded and deposited at similar, high velocities, so it is carried only during high flows.\n\nThe Wikipedia article notes that the curve is mostly of historical and teaching value. It ignores water depth and uses single velocities, and modern work uses the Shields diagram. It still appears on most Dynamic Planet exams.",
        keyPoints: [
          'Load types: dissolved, suspended, bed load (traction and saltation).',
          'Capacity = total load a stream can carry; competence = largest particle it can move.',
          'Hjulström curve: grain size vs. velocity; zones of erosion, transport, deposition.',
          'Fine sand (~0.1–0.5 mm) is easiest to erode; cohesive clay needs higher velocity to erode but settles only in still water.',
        ],
      },
      {
        heading: "Stream 'stages' and rejuvenation",
        content:
          "Many exams use William Morris Davis's cycle of erosion, which describes landscapes (and streams) as passing through stages:\n\n• Youth: steep gradient, fast downcutting, narrow V-shaped valleys, waterfalls and rapids, relatively straight channel, little or no floodplain.\n• Maturity: gradient is lower, the stream is roughly graded, lateral erosion widens the valley, meanders and a floodplain develop, waterfalls have largely been eliminated.\n• Old age: very low gradient near base level, wide floodplain much broader than the meander belt, large freely migrating meanders, oxbow lakes, natural levees, slow flow.\n\nRejuvenation occurs when base level falls or the land is uplifted. An older, meandering stream gains new erosional energy and begins downcutting again, producing incised (entrenched) meanders, terraces, knickpoints, and rapids. A rejuvenated valley typically shows a young V-shaped inner gorge cut into an older, wide valley floor.\n\nThe Davis model is a simplification. Modern geomorphology emphasizes equilibrium and process rather than age, so a \"youthful\" stream is not necessarily young in years. But the stage vocabulary is widely tested.",
        keyPoints: [
          'Youth: steep, V-shaped valleys, waterfalls, rapids, downcutting.',
          'Maturity: graded, meanders, developing floodplain, lateral erosion.',
          'Old age: very low gradient, broad floodplain, oxbows, levees.',
          'Rejuvenation (uplift or base-level fall): incised meanders, terraces, knickpoints, a V-notch within a wide valley.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Discharge from channel measurements',
        problem:
          'A stream channel is 12 m wide with an average depth of 1.5 m. The average velocity is 0.8 m/s. What is the discharge?',
        steps: [
          'Cross-sectional area A = width × depth = 12 m × 1.5 m = 18 m².',
          'Discharge Q = A × v = 18 m² × 0.8 m/s.',
          'Q = 14.4 m³/s.',
        ],
        answer: '14.4 m³/s.',
      },
      {
        title: "Using Lane's balance",
        problem:
          'Logging in a watershed doubles the amount of sediment delivered to a graded stream, with no change in discharge or grain size. Predict how the stream responds.',
        steps: [
          "Lane's balance: sediment load × grain size ∝ discharge × slope.",
          'The load side has increased, but discharge has not, so the stream cannot transport all the sediment at its current slope.',
          'The stream deposits the excess sediment (aggradation), building up its bed.',
          'Aggradation steepens the slope until velocity is sufficient to carry the larger load. The stream may also become more braided as bars build up.',
        ],
        answer: 'The stream aggrades (deposits) and steepens until it reaches a new equilibrium; braiding may increase.',
      },
      {
        title: 'Reading the Hjulström curve',
        problem:
          'A river is flowing at a velocity that is just able to erode medium sand from its bed. Is that velocity able to erode a bed of fine clay? Is it able to keep already-suspended clay in transport?',
        steps: [
          'Medium sand sits near the minimum of the erosion curve, the easiest sediment to erode.',
          'Clay is cohesive, so the erosion curve rises for smaller grain sizes, and a higher velocity is needed to erode a clay bed.',
          'But the deposition (settling) curve for clay is at extremely low velocities, so clay already in suspension stays suspended.',
        ],
        answer: 'It cannot erode the clay bed, but it can easily keep suspended clay in transport.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Dynamic equilibrium means a stream is not affected by disturbances.',
        reality:
          'Streams in dynamic equilibrium are constantly disturbed. Equilibrium refers to their ability to self-adjust (via erosion and deposition) back toward a balanced state.',
      },
      {
        misconception: 'Streams flow fastest in the steep headwaters and slow down toward the mouth.',
        reality:
          'Average velocity typically stays about the same or increases slightly downstream, because large, deep channels lose less energy to friction. Headwater streams look fast because they are turbulent.',
      },
      {
        misconception: 'The smallest particles (clay) are always the easiest to erode.',
        reality:
          'On the Hjulström curve, fine sand (~0.1–0.5 mm) is easiest to erode. Clay needs a higher velocity because of cohesion, even though once suspended it stays suspended.',
      },
      {
        misconception: 'Capacity and competence mean the same thing.',
        reality:
          'Capacity is the total amount of sediment a stream can carry; competence is the size of the largest particle it can move.',
      },
    ],
    furtherReading: [PG13_3, PRACTICAL_8_1, HJULSTROM, SEDIMENTS],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Erosional features & processes ─────────────────────────
  {
    id: 'exp-fg-erosional-features-processes',
    topic: 'fluvial-geomorphology',
    subtopic: 'erosional-features-processes',
    title: 'Erosional Features & Processes',
    sections: [
      {
        heading: 'How streams erode',
        content:
          "Streams erode their beds and banks through four main processes:\n\n• Hydraulic action: the sheer force of moving water dislodges and lifts loose particles. Water and air forced into cracks in the banks under pressure can pry rock apart. Most effective in fast, turbulent flow and on unconsolidated or fractured material.\n• Abrasion (corrasion): sediment carried by the stream grinds, scrapes, and sandblasts the bed and banks. This is the main way streams cut down into solid bedrock. Pebbles swirling in eddies drill round potholes into the bed.\n• Solution (corrosion): water dissolves soluble rock, especially limestone and other carbonates, adding to the dissolved load.\n• Attrition: transported particles collide with each other and break into smaller, rounder pieces. This affects the load rather than the channel, and is why sediment becomes smaller and more rounded downstream.\n\nThe direction of erosion matters as much as the process:\n• Downcutting (vertical erosion) deepens the channel. It dominates where gradient is steep and base level is far below.\n• Lateral erosion widens the valley as meanders migrate and undercut banks. It dominates where the stream is near grade.\n• Headward erosion lengthens the stream upslope at its source, as runoff erodes the head of the valley.",
        keyPoints: [
          'Hydraulic action: water force (and compressed air in cracks) removes material.',
          'Abrasion/corrasion: sediment load grinds the bed; it forms potholes and is the main bedrock-cutting process.',
          'Solution/corrosion: dissolves soluble rock such as limestone.',
          'Attrition: particles collide, becoming smaller and rounder downstream.',
          'Downcutting = vertical; lateral = sideways; headward = upslope at the source.',
        ],
      },
      {
        heading: 'V-shaped valleys, gorges, and canyons',
        content:
          "Where a stream is actively downcutting, it deepens its channel faster than it widens it. The valley sides are lowered by weathering, mass wasting (landslides, creep, rockfall), and slope wash, which deliver sediment into the stream. The resulting cross-section is a V shape, with the stream occupying nearly the entire valley floor. Where the stream winds between the hillsides, the spurs on either side form interlocking spurs.\n\nThe steepness of the V depends on the rate of downcutting relative to slope processes and on rock strength. In resistant rock, or in arid climates with little slope weathering, downcutting can outpace the wearing back of the walls, producing steep-sided gorges and canyons (the Grand Canyon is the classic example).\n\nContrast V-shaped stream valleys with U-shaped glacial valleys, which have broad floors and steep walls carved by ice. In a rejuvenated stream valley, a V-shaped inner gorge is cut into the floor of an older, wide valley, sometimes called a valley-in-valley profile.",
        keyPoints: [
          'V-shaped valleys form when downcutting outpaces valley widening; slopes are lowered by mass wasting.',
          'Characteristic of steep, youthful streams; interlocking spurs are common.',
          'Gorges and canyons form where downcutting is rapid in resistant rock or arid climates.',
          'Stream valley = V; glacial valley = U; rejuvenated valley = V cut inside a wide valley.',
        ],
      },
      {
        heading: 'Knickpoints',
        content:
          "A knickpoint (also spelled nickpoint) is an abrupt change in the gradient of a stream: a sharp step in the longitudinal profile. Waterfalls and rapids are knickpoints you can see; others are steep reaches spread over a distance (knickzones).\n\nCauses include:\n• Resistant rock: the stream crosses from weak to resistant rock, or the reverse, and the two erode at different rates.\n• Base-level fall: sea-level drop, tectonic uplift, or isostatic rebound after deglaciation creates a step near the mouth.\n• Faulting: movement on a fault that crosses the stream offsets its bed (e.g., the stream flows off an uplifted block onto a down-dropped block).\n• Glaciation: hanging valleys left where tributary glaciers joined a deeper main glacier.\n• Stream capture: the captured stream suddenly drains to a lower base level.\n\nKnickpoints are signs of disequilibrium. Because erosion is concentrated at the steep step, they migrate upstream over time by headward erosion, gradually transmitting the base-level change through the drainage network. Once the knickpoint has passed, the stream works toward a new graded profile.",
        keyPoints: [
          'Knickpoint = abrupt break in stream gradient (waterfalls, rapids, knickzones).',
          'Caused by resistant rock, base-level fall, uplift, isostatic rebound, faulting, glacial hanging valleys, or capture.',
          'Knickpoints migrate upstream by headward erosion.',
          'They indicate disequilibrium; a graded stream has none.',
        ],
      },
      {
        heading: 'Waterfalls and how they retreat',
        content:
          "Most waterfalls form where a stream flows over a resistant rock layer (the caprock) lying on top of weaker rock. The falling water and the sediment it carries scour a deep plunge pool at the base. Spray, turbulence, and abrasion erode the weaker rock behind and beneath the falls, undercutting the caprock. Eventually the overhanging caprock collapses, and the waterfall retreats a little upstream. Repeated over thousands of years, this leaves a steep-sided gorge downstream of the falls.\n\nNiagara Falls is the textbook example. Resistant dolostone caps weaker shale. The falls have retreated upstream since the end of the last glaciation, carving the Niagara Gorge, which is roughly 11 km long.\n\nWaterfalls also form at faults, at glacial hanging valleys, at sea cliffs where streams drop to the ocean (common on young volcanic islands such as Hawaiʻi), and at lava-flow fronts. In Hawaiian valleys, streams cutting into layered basalt flows form steep amphitheater-headed valleys with tall waterfalls at their heads.\n\nRapids are smaller knickpoints where the stream flows over a steep reach of irregular, resistant rock or coarse boulders.",
        keyPoints: [
          'Waterfalls: resistant caprock over weaker rock; undercutting → collapse → upstream retreat.',
          'Plunge pools form at the base by scour and abrasion.',
          'Retreating waterfalls leave gorges (e.g., Niagara Gorge, about 11 km).',
          'Waterfalls also form at faults, hanging valleys, sea cliffs, and lava flows.',
        ],
      },
      {
        heading: 'Stream capture (stream piracy)',
        content:
          "Stream capture happens when one stream erodes headward into the drainage basin of a neighbour and diverts part or all of its flow. The capturing stream usually has an advantage: a steeper gradient, a lower base level, or weaker rock to cut through. Uplift or faulting can create that advantage by steepening one stream relative to its neighbour.\n\nEvidence of capture:\n• Elbow of capture: a sharp bend where the captured stream turns into its new course.\n• Wind gap (col): a dry notch in a ridge where the beheaded stream once flowed, now abandoned.\n• Water gap: a notch through a ridge that still carries a stream.\n• Underfit (misfit) stream: the beheaded lower portion of the captured stream is now too small for the large valley it once carved.\n• Knickpoint: the captured headwaters suddenly drain to a lower level, producing a steep reach that migrates upstream.",
        keyPoints: [
          'Capture = headward erosion by one stream intercepts another and steals its flow.',
          'Favoured by a steeper gradient, lower base level, weaker rock, or uplift and faulting.',
          'Evidence: elbow of capture, wind gaps (cols), water gaps, underfit streams, knickpoints.',
        ],
      },
      {
        heading: 'Meandering as an erosional process',
        content:
          "Meandering combines erosion and deposition. In a bend, water is thrown toward the outside of the curve. The fastest, deepest flow (the thalweg) hugs the outer bank, while the inner bank has shallow, slow water. Water also circulates in a corkscrew spiral called helicoidal flow: surface water moves toward the outer bank, plunges down, and returns along the bed toward the inner bank.\n\n• Outer bank: high velocity and helicoidal flow erode and undercut the bank, forming a steep cut bank.\n• Inner bank: low velocity allows deposition, building a point bar.\n\nSo meanders migrate sideways (toward their cut banks) and also gradually shift downstream. As bends grow, the neck between two meanders narrows until the river breaks through during a flood. That cutoff leaves an oxbow lake (see Channel & Floodplain Landforms).\n\nEven straight channels have a meandering thalweg, with alternating deeper pools and shallower riffles. Measured sinuosity (channel length ÷ straight-line valley length) describes how strongly a channel meanders.\n\nWhen meanders are rejuvenated by uplift or base-level fall, they cut down into bedrock while keeping their curving shape, forming incised (entrenched) meanders such as Horseshoe Bend on the Colorado River and the Goosenecks of the San Juan River.",
        keyPoints: [
          'Thalweg = line of fastest, deepest flow; it lies near the outer (cut) bank of a bend.',
          'Helicoidal (spiral) flow erodes the outer bank and carries sediment to the inner bank.',
          'Cut bank = erosion on the outside; point bar = deposition on the inside.',
          'Meanders migrate laterally and downstream; necks cut off to form oxbow lakes.',
          'Incised meanders form when meandering streams are rejuvenated.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Knickpoint retreat rate',
        problem:
          'A waterfall has carved a gorge 11 km long since it began retreating about 12,500 years ago. What is the average rate of retreat in m/yr?',
        steps: [
          'Convert the gorge length to meters: 11 km = 11,000 m.',
          'Rate = distance ÷ time = 11,000 m ÷ 12,500 yr.',
          'Rate ≈ 0.88 m/yr.',
        ],
        answer: 'About 0.9 m per year (averaged; actual rates varied over time).',
      },
      {
        title: 'Which way does a knickpoint move?',
        problem:
          'Tectonic uplift raises a coastal region by 20 m. Describe what happens to the streams draining to the sea.',
        steps: [
          'Uplift lowers base level relative to the land, so each stream now has a step near its mouth.',
          'A knickpoint forms at the mouth, where gradient suddenly steepens.',
          'Erosion concentrates at the knickpoint, causing it to migrate upstream by headward erosion.',
          'Behind it, the stream incises into its old floodplain, leaving terraces, and any meanders become incised.',
        ],
        answer: 'Knickpoints form at the mouths and migrate upstream; the streams rejuvenate, downcut, and leave terraces.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Knickpoints move downstream with the flow.',
        reality: 'Knickpoints migrate upstream, because erosion concentrated at the step wears it back by headward erosion.',
      },
      {
        misconception: 'Knickpoints are features of graded streams.',
        reality: 'Knickpoints are signs of disequilibrium. A graded stream has a smooth profile without them.',
      },
      {
        misconception: 'Attrition erodes the stream bed.',
        reality:
          "Attrition is particles in the load wearing each other down. Abrasion is the load wearing the bed and banks.",
      },
      {
        misconception: 'Water itself is the main tool that cuts bedrock channels.',
        reality:
          'Clear water does little to solid rock. Abrasion by the sediment the stream carries does most of the bedrock erosion.',
      },
    ],
    furtherReading: [PG13_3, PG13_4, PRACTICAL_8_1, LAB_21],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Channel & floodplain landforms ─────────────────────────
  {
    id: 'exp-fg-channel-floodplain-landforms',
    topic: 'fluvial-geomorphology',
    subtopic: 'channel-floodplain-landforms',
    title: 'Channel & Floodplain Landforms',
    sections: [
      {
        heading: 'Channel patterns: straight, meandering, braided, anastomosing',
        content:
          "Alluvial channels, which flow through their own sediment, take on characteristic planform patterns:\n\n• Straight: rare and usually short. Often controlled by a fault, joint, or engineered channel. Even here the thalweg wanders between pools and riffles, and alternating bars form.\n• Meandering: a single channel with regular, looping bends. Typical of gentle gradients, fine-grained (suspended and mixed) loads, and cohesive, vegetated banks. Features: cut banks, point bars, oxbow lakes, wide floodplains.\n• Braided: many shallow channels that divide and rejoin around shifting bars of sand and gravel. Associated with a high, coarse bed load, steep gradients, erodible non-cohesive banks, and highly variable discharge. Common downstream of glaciers (outwash plains) and in arid mountain fronts.\n• Anastomosing: multiple channels separated by stable, vegetated islands made of floodplain sediment. Low gradient, fine sediment, cohesive banks; the channels are individually stable and often sinuous.\n\nSchumm's USGS Circular 477 (1963) classified alluvial channels by the type of sediment they carry:\n• Suspended-load channels: high silt-clay in banks, narrow and deep (low width/depth ratio), high sinuosity, stable meanders.\n• Mixed-load channels: intermediate.\n• Bed-load channels: low silt-clay, wide and shallow (high width/depth ratio), low sinuosity, often braided.\nSchumm also distinguished stable, eroding, and depositing (aggrading) channels. The key idea is that channel shape reflects the load the river carries.",
        keyPoints: [
          'Straight: rare; often structurally controlled; still has a wandering thalweg.',
          'Meandering: single sinuous channel, gentle gradient, fine load, cohesive banks.',
          'Braided: many shifting channels around bars; coarse bed load, steep gradient, variable discharge.',
          'Anastomosing: multiple stable channels around vegetated islands; low gradient, fine sediment.',
          'Schumm (1963): channel form depends on load type; bed-load channels are wide and shallow, suspended-load channels are narrow, deep, and sinuous.',
        ],
      },
      {
        heading: 'Sinuosity',
        content:
          "Sinuosity measures how much a channel winds:\n\n    sinuosity = channel length ÷ straight-line valley length\n\nMeasure the channel length along the stream's curves, and the valley length as the straight-line (or valley-axis) distance between the same two points.\n\nBecause a channel can never be shorter than the straight line between its ends, sinuosity is always ≥ 1. A perfectly straight channel has a sinuosity of exactly 1.\n\nCommonly used classes:\n• about 1.0–1.05: straight\n• 1.05–1.5: sinuous\n• greater than 1.5: meandering\n(Some sources use slightly different cutoffs. Check the question.)\n\nYou can also rearrange the equation: straight-line length = channel length ÷ sinuosity, and channel length = sinuosity × straight-line length.",
        keyPoints: [
          'Sinuosity = channel length ÷ straight-line valley length.',
          'Always ≥ 1; a value below 1 is impossible.',
          'Roughly: <1.05 straight, 1.05–1.5 sinuous, >1.5 meandering.',
        ],
      },
      {
        heading: 'Meander landforms: cut banks, point bars, oxbow lakes',
        content:
          "• Cut bank: the steep, eroding bank on the outside of a meander bend, where the thalweg and fastest flow undercut it.\n• Point bar: a crescent-shaped deposit of sand and gravel on the inside of a bend, where flow is slow and shallow. Point bars grow sideways as the meander migrates (lateral accretion). Their sediment is relatively well sorted and fines upward from coarse at the base to finer at the top.\n• Meander neck: the narrow strip of land between two adjacent bends.\n• Oxbow lake: when erosion narrows a meander neck until the river cuts through it (a neck cutoff, usually during a flood) or a shortcut channel forms across the point bar (chute cutoff), the abandoned loop is sealed off by deposition and becomes a crescent-shaped lake. Over time, oxbows fill with fine sediment and vegetation, becoming meander scars.\n\nBoth erosion (eating away the neck) and deposition (sealing off the ends of the abandoned loop) are needed to form an oxbow lake.",
        keyPoints: [
          'Cut bank = outer bank, erosion; point bar = inner bank, deposition.',
          'Point bars grow by lateral accretion and fine upward.',
          'Oxbow lakes form by neck or chute cutoff plus deposition sealing the old loop.',
          'Infilled oxbows become meander scars.',
        ],
      },
      {
        heading: 'Floodplains, natural levees, backswamps, and terraces',
        content:
          "A floodplain is the broad, flat strip of land beside a channel that is covered by water during floods. It is built in two ways: lateral accretion as point bars grow and meanders migrate, and vertical accretion as floodwater spreads out and drops fine sediment.\n\nNatural levees form during floods. In the channel, near bank-full stage, the water is fast enough to carry plenty of sediment. As it overtops the banks and spreads onto the wide floodplain, its velocity drops sharply, so the coarsest suspended sediment (sand and coarse silt) is deposited right at the channel edge. Flood after flood builds low ridges that slope gently away from the river.\n\n• Backswamps: low, poorly drained areas behind the levees where fine silt and clay settle from standing floodwater.\n• Yazoo streams: tributaries prevented by the levees from joining the main river, which run parallel to it for long distances before joining. Named after the Yazoo River, which parallels the Mississippi.\n• Crevasse splays: fan-shaped deposits formed where a flood breaks through a levee.\n• Stream terraces: flat benches above the modern floodplain. They are former floodplains abandoned when the river cut downward after a base-level fall, uplift, or change in load or discharge.",
        keyPoints: [
          'Floodplains grow by lateral (point bar) and vertical (overbank) accretion.',
          'Natural levees: coarse sediment drops at the channel edge as floodwater slows.',
          'Backswamps: fine clay and silt behind the levees; yazoo streams run parallel to the main river.',
          'Terraces are abandoned floodplains left after downcutting.',
        ],
      },
      {
        heading: 'Deltas and alluvial fans',
        content:
          "Both form where a stream suddenly loses velocity and dumps its load.\n\nDeltas form where a river enters a standing body of water (ocean or lake). The river splits into distributaries that spread sediment. In a classic Gilbert-type delta:\n• Topset beds: nearly horizontal, coarse channel sediment on the delta top.\n• Foreset beds: steeply inclined layers of sand (and, in Gilbert deltas, gravel) avalanching down the delta front as it builds forward.\n• Bottomset beds: thin, nearly horizontal layers of the finest silt and clay settled from suspension beyond the delta front.\nDelta shape depends on which process dominates:\n• River-dominated: bird's-foot (Mississippi).\n• Wave-dominated: smoothed, arcuate or cuspate (Nile, São Francisco).\n• Tide-dominated: channels and islands elongated parallel to tidal flow (Ganges–Brahmaputra).\n\nAlluvial fans form on land where a steep mountain stream emerges onto a flat valley floor. The gradient drops abruptly and the channel is no longer confined, so it spreads out and deposits rapidly. They are typical of arid and semi-arid regions with flash floods and debris flows.\n• Sediment is poorly sorted and coarsest at the apex near the mountain front, becoming finer toward the toe.\n• Channels on fans shift frequently, so flash-flood hazard is high.\n• A series of fans merging along a mountain front forms a bajada.",
        keyPoints: [
          'Delta = sediment deposited where a river enters standing water; distributaries spread it.',
          'Gilbert delta: topset, foreset (inclined), bottomset (finest).',
          'Delta shapes: river-dominated (bird’s-foot), wave-dominated (arcuate/cuspate), tide-dominated.',
          'Alluvial fan = deposit at a mountain front in arid regions; poorly sorted, coarse at apex, finer at toe.',
          'Coalescing fans form a bajada.',
        ],
      },
      {
        heading: 'Bars, bedforms, and sediment texture',
        content:
          "Bars are large deposits within the channel: point bars on the inside of bends, mid-channel bars in braided rivers, and alternate bars along straight channels.\n\nSmaller bedforms on a sandy bed change with flow strength. They are classified using the Froude number (Fr), which compares flow velocity to the speed of a surface wave:\n• Lower flow regime (Fr < 1, subcritical):\n  – Ripples: small asymmetric forms (wavelength much less than flow depth) that appear just above the threshold of sediment motion.\n  – Dunes: larger asymmetric forms, with wavelength typically a few to about 15 times flow depth.\n  Both have a gentle upstream (stoss) side and steep downstream (lee) side, and migrate downstream as sand avalanches down the lee. Preserved, they make cross-bedding.\n• Transition: dunes wash out and the bed becomes flat (upper plane bed).\n• Upper flow regime (Fr > 1, supercritical):\n  – Antidunes: nearly symmetric bedforms in phase with standing waves on the water surface. Sediment is eroded from their lee and deposited on their stoss side, so they migrate upstream. They often grow until the surface wave breaks and destroys them.\n  – Chutes and pools: form at the highest velocities.\n\nBedforms also control channel roughness. In sand-bed rivers, form drag over dunes is the main source of flow resistance, and roughness can drop sharply when dunes wash out at high flow.\n\nSediment texture tells you about transport:\n• Sorting: how uniform the grain sizes are. River sands and point bars are moderately to well sorted, while alluvial fan and debris-flow deposits are poorly sorted.\n• Rounding: grains become rounder (and smaller) with distance of transport due to abrasion and attrition, so angular clasts indicate a nearby source.\n• Composition: resistant minerals like quartz survive long transport, whereas feldspar and mafic minerals break down.",
        keyPoints: [
          'Lower regime (Fr < 1): ripples and dunes migrate downstream; they produce cross-bedding.',
          'Upper regime (Fr > 1): plane bed, antidunes (migrate upstream, in phase with surface waves), chutes and pools.',
          'Dunes are the main source of roughness in sand-bed rivers.',
          'Longer transport → better sorting, rounder and smaller grains, more quartz.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Calculating sinuosity',
        problem:
          'A river channel measures 8.4 km between two bridges when traced along its curves. The straight-line valley distance between the bridges is 3.5 km. Calculate sinuosity and classify the channel.',
        steps: [
          'Sinuosity = channel length ÷ straight-line valley length.',
          'Sinuosity = 8.4 km ÷ 3.5 km = 2.4.',
          '2.4 is greater than 1.5, so the channel is meandering.',
        ],
        answer: 'Sinuosity = 2.4: a meandering channel.',
      },
      {
        title: 'Working backward from sinuosity',
        problem:
          'A stream segment has a channel length of 57 m and a sinuosity of 2.1. What straight-line distance does it span?',
        steps: [
          'Rearrange: straight-line length = channel length ÷ sinuosity.',
          'Straight-line length = 57 m ÷ 2.1.',
          '≈ 27.1 m.',
        ],
        answer: 'About 27.1 m; with a sinuosity of 2.1, the channel is meandering.',
      },
      {
        title: 'Identifying a channel type from evidence',
        problem:
          'A river below a glacier has many shallow channels separated by unvegetated gravel bars that shift after each summer melt-flood. Its gradient is steep and its banks are loose gravel. Classify the channel and explain.',
        steps: [
          'Multiple channels around shifting, unvegetated bars indicate a braided pattern (anastomosing islands would be stable and vegetated).',
          'Coarse bed load from glacial erosion, highly variable discharge from melt-floods, steep gradient, and non-cohesive banks all favour braiding.',
        ],
        answer: 'Braided channel: a high coarse bed load, variable discharge, steep gradient, and erodible banks.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Point bars form on the outside of a bend.',
        reality:
          'Point bars are deposited on the inside of bends, where flow is slowest. The outside is the eroding cut bank.',
      },
      {
        misconception: 'Braided rivers form where gradients are gentle.',
        reality:
          'Braided rivers are associated with steep gradients, high coarse sediment loads, and variable discharge. Meandering and anastomosing rivers favour gentle gradients.',
      },
      {
        misconception: 'Natural levees form from the finest sediment.',
        reality:
          'Levees are built from the coarsest overbank sediment, deposited right at the channel edge. The finest clay settles farther away in the backswamps.',
      },
      {
        misconception: 'Antidunes are just dunes that migrate downstream faster.',
        reality:
          'Antidunes form in supercritical (upper regime) flow, are in phase with surface waves, and migrate upstream, opposite to ripples and dunes.',
      },
      {
        misconception: 'A sinuosity of less than 1 indicates a very straight river.',
        reality: 'Sinuosity cannot be less than 1. A perfectly straight channel has a sinuosity of exactly 1.',
      },
    ],
    furtherReading: [PG13_4, LAB_21, USGS_477, BEDFORMS, ANTIDUNE, SEDIMENTS],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Previous questions ─────────────────────────
  {
    id: 'exp-fg-previous-questions',
    topic: 'fluvial-geomorphology',
    subtopic: 'previous-questions',
    title: 'Previous Questions',
    sections: [],
    previousQuestions: [
      // ───── Longitudinal profile, gradient & base level ─────
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q50–52',
        images: [
          { url: `${IMG}/svso23-image11-stream-profile.jpg`, caption: 'Image 11: longitudinal profile of a hypothetical stream (bottom = sea level)' },
        ],
        question:
          "A diagram shows the longitudinal profile of a hypothetical stream, with the bottom of the image representing sea level. The stream's profile slowly approaches a black line drawn on the diagram. (a) What does the black line represent? (b) Can the stream ever go below this line? (c) Why is this line not drawn at sea level — what does that indicate about the stream?",
        answer:
          'The black line is the base level. (b) False — the stream can never erode below its base level. (c) The line sits above sea level because the stream empties into a lake or other body of water rather than directly into the ocean, so its base level is set by that water body, not sea level.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q56',
        images: [
          { url: `${IMG}/svso23-image11-stream-profile.jpg`, caption: 'Image 11: stream profile with knickpoint A' },
        ],
        question: 'Estimate the maximum stream gradient outside of knickpoint A in ft/ft, given a profile where the stream drops about 70 ft over roughly 21,000 ft of channel length (1 mi = 5280 ft).',
        answer: 'About 70 ft / 21,000 ft ≈ 1/300 ft/ft = 0.003 ft/ft.',
      },
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q4',
        images: [
          { url: `${IMG}/ut22-figA-lincoln-lake-map.jpg`, caption: 'Figure A: Map of Lincoln Lake and surrounding area (elevation in feet)' },
        ],
        question: 'Assuming Lincoln Creek runs 10,000 ft in distance (not displacement), what is the approximate gradient of Lincoln Creek shown on the map? A) 2% B) 4% C) 8% D) 16%',
        choices: ['A) 2%', 'B) 4%', 'C) 8%', 'D) 16%'],
        answer: 'B) 4%',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q5',
        images: [
          { url: `${IMG}/soni22-q5-lehigh-valley-map.jpg`, caption: 'Topographic map of the Lehigh Valley, PA' },
        ],
        question:
          'A topographic map of the Lehigh Valley, PA shows Mauch Lake (about 2 miles long) feeding Nesquehoning Creek, which runs northeast to the Lehigh River (contour interval 20 ft). (a) What drainage pattern does the map show? (b) What is the gradient of Nesquehoning Creek between the lake and the Lehigh River? (c) Are the north-south rivers north of the creek tributaries or distributaries?',
        answer:
          '(a) Trellis drainage. (b) 120 ft of drop over about 4 miles (21,000 ft) ≈ 120/21,000 ≈ 0.006 ft/ft (accept 0.005–0.007). (c) Tributaries.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q9',
        question: 'Which conditions below most favor valley deepening? A) A steep gradient with a high base level B) A steep gradient with a low base level C) A shallow gradient with a high base level D) A shallow gradient with a low base level',
        choices: ['A) A steep gradient with a high base level', 'B) A steep gradient with a low base level', 'C) A shallow gradient with a high base level', 'D) A shallow gradient with a low base level'],
        answer: 'B) A steep gradient with a low base level — maximum erosional potential, driving downcutting.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q44',
        question: 'Suppose the base level of a stream dropped. Would the stream discharge increase, decrease, or remain unchanged? Briefly justify your answer.',
        answer: 'Discharge would increase, because the drop in base level causes more erosion and a deeper stream channel via downcutting.',
      },

      // ───── Dynamic equilibrium & graded streams ─────
      {
        source: 'UT Invitational 2022 — Dynamic Planet B, Q6',
        images: [
          { url: `${IMG}/ut22-figA-lincoln-lake-map.jpg`, caption: 'Figure A: Map of Lincoln Lake and surrounding area (elevation in feet)' },
        ],
        question:
          'Assuming the stream southwest of Lincoln Lake is in fluvial equilibrium, how would the characteristics of the stream and bed change as distance from the lake increases? Select all that apply: A) The streambed would generally have larger rocks B) The stream would generally have larger velocity C) The stream would generally carry more sediment D) The stream would generally carry finer sediment E) The streambed is more likely to be bedrock than sedimentary',
        choices: ['A) Larger rocks', 'B) Larger velocity', 'C) More sediment', 'D) Finer sediment', 'E) More likely bedrock'],
        answer: 'C and D — a graded stream carries more, and progressively finer, sediment as it moves away from the source.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 2 Q10 (True/False)',
        question: 'True/False: A river system in dynamic equilibrium means that it is not subject to disturbances or perturbations that may affect its flow.',
        answer: 'False — dynamic equilibrium means the stream continuously self-adjusts (via erosion/deposition) in response to disturbances, not that it is immune from them.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q16',
        question: 'Select ALL of the following that increase in the downstream direction: A) Deposition minus erosion B) Channel size C) Channel gradient D) Channel roughness',
        choices: ['A) Deposition minus erosion', 'B) Channel size', 'C) Channel gradient', 'D) Channel roughness'],
        answer: 'A and B — channel size and net deposition increase downstream, while gradient and roughness decrease downstream.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q5',
        question: "Because Hawaii is extremely young on the geologic time scale, which of the following best describes the types of streams you may find? A) Youthful, straight B) Mature, straight C) Youthful, meandering D) Mature, meandering",
        choices: ['A) Youthful, straight', 'B) Mature, straight', 'C) Youthful, meandering', 'D) Mature, meandering'],
        answer: "A) Youthful, straight — in Davis's cycle of erosion, youthful streams are steep, fast, and relatively straight; meandering develops later in the mature stage.",
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q45',
        question: 'According to the Davis cycle of erosion, what characterizes an old-age stream? (Select all that apply) A) Steep gradients of surrounding terrain B) Meandering C) Slow movement D) Wide floodplain E) High erosion F) V-shaped valleys',
        choices: ['A) Steep gradients', 'B) Meandering', 'C) Slow movement', 'D) Wide floodplain', 'E) High erosion', 'F) V-shaped valleys'],
        answer: 'B, C, D — meandering, slow movement, and a wide floodplain. Steep gradients, high erosion, and V-shaped valleys describe youthful streams instead.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q10',
        question: 'Which of the following is NOT a defining characteristic of a rejuvenated valley/channel? a) Broad, flat plains b) Meanders c) Sandbars d) Rapids e) All of the above f) Answers b and d',
        choices: ['a) Broad, flat plains', 'b) Meanders', 'c) Sandbars', 'd) Rapids', 'e) All of the above', 'f) Answers b and d'],
        answer: "Key: e) All of the above. Note: many textbooks would single out a) broad, flat plains, since rejuvenation renews downcutting (incised meanders, rapids, knickpoints) rather than building broad plains. Expect this answer to vary between tests.",
      },

      // ───── Erosional features (knickpoints, waterfalls, V-shaped valleys) & processes ─────
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q17',
        question: 'Which of the following would NOT result in the creation of a knickpoint? A) A stream’s substrate suddenly changing from limestone to granite B) A stream flowing over a normal fault from the footwall to the hanging wall C) A stream flowing over a reverse fault from hanging wall side to footwall side D) A glacier forming a hanging valley and then melting',
        choices: ['A) Substrate change limestone→granite', 'B) Normal fault, footwall→hanging wall', 'C) Reverse fault, hanging wall→footwall', 'D) Glacier forming a hanging valley then melting'],
        answer: 'B) A stream flowing over a normal fault from the footwall to the hanging wall side does NOT create a knickpoint (it flows onto a down-dropped, lower block — no abrupt drop); the other three scenarios all create a sudden break in slope.',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q37–39',
        images: [
          { url: `${IMG}/svso23-image9-shirt-valleys.jpg`, caption: 'Image 9: shirt seams A, B, C as river-valley cross-sections' },
        ],
        question:
          "Three cross-sections of river valleys are shown (modeled as shirt seams — one has an extra triangular 'seam', i.e. a sharp V-notch). Which type of river (youthful, mature, or rejuvenated) would be found in each of the three valley shapes?",
        answer:
          'The sharply V-notched valley (shirt A) → Youthful river. The wider, flatter valley (shirt B) → Mature river. The valley with a V-shaped inner channel cut into a wider flat valley (shirt C) → Rejuvenated river (renewed downcutting into an older, mature valley floor).',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q2–4',
        question:
          "Hawaiian volcanoes start out with flat lava slopes, but over time streams carve valleys into the sides. (Q2) What is the name of this process? (Q3) What is the name of this process when it occurs at the stream's source? (Q4) Sometimes, due to that effect, one stream erodes back into the bed of another and diverts its flow — what is this process called?",
        answer: 'Q2: Downcutting. Q3: Headward erosion. Q4: Stream capture (stream piracy).',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q85–87',
        question: 'Which of the following terms are associated with (85) erosion, (86) transportation, and (87) deposition: Flocculation, Hydraulic Action, Corrasion, Saltation, Corrosion, Solution, Suspension, Attrition, Traction?',
        answer: 'Erosion: Hydraulic Action, Corrasion (abrasion), Attrition, Corrosion (solution). Transportation: Saltation, Suspension, Traction, Solution (dissolved load). Deposition: Flocculation (fine clay particles clumping and settling).',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q68',
        question: 'Which of the following can cause the formation of knickpoints? A) Tectonic uplifting B) Decreased ocean water influx C) Isostatic rebound D) All of the above',
        choices: ['A) Tectonic uplifting', 'B) Decreased ocean water influx', 'C) Isostatic rebound', 'D) All of the above'],
        answer: 'D) All of the above — any relative base-level drop (uplift, rebound, or falling sea/lake level) can trigger a knickpoint.',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q69',
        question: 'Which of the following provide evidence for river capture? A) Cols B) Water gaps C) Under-fit streams D) All of the above E) None of the above',
        choices: ['A) Cols', 'B) Water gaps', 'C) Under-fit streams', 'D) All of the above', 'E) None of the above'],
        answer: 'D) All of the above — cols (wind gaps), water gaps, and underfit (misfit) streams are all classic evidence of past stream capture.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q33',
        question: 'Select ALL statements that are true about knickpoints: A) Tectonic uplift can result in knickpoint formation B) Knickpoints can be created as a result of glacial activity C) Knickpoints are key features of graded streams D) Knickpoints are features contained within V-shaped valleys',
        choices: ['A) Tectonic uplift', 'B) Glacial activity', 'C) Key feature of graded streams', 'D) Contained within V-shaped valleys'],
        answer: 'A and B. (C is false — knickpoints are a sign of disequilibrium, not a graded profile; D is false — they are not defined by valley shape.)',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q8',
        images: [
          { url: `${IMG}/soni22-q8-iowa-streambed.jpg`, caption: 'Streambed cross-section in central Iowa, surveyed 2008–2010' },
        ],
        question:
          'A cross-section of a streambed in central Iowa was surveyed over five years. (a) Where is the knickpoint found in April 2008 (give horizontal coordinate)? (b) How does the knickpoint change over time, and why? (c) Between which two survey periods would you expect the strongest flow, and why?',
        answer:
          '(a) About 10 m from the reference point. (b) It migrates upstream due to erosion. (c) Between March 2009 and October 2010 — the largest retreat and erosion of the heaviest sediment suggests the strongest streamflow occurred in that period.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q9',
        question: 'Explain how faulting can result in stream capture.',
        answer: 'Uplift occurring downstream of the head of the watershed steepens the gradient there, so that stream erodes headward faster and intercepts (captures) the flow of a neighboring stream.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q5',
        question: 'How does the location of a knickpoint tend to change over time? A) Moves upstream B) Moves downstream C) Moves from side to side D) Moves straight down',
        choices: ['A) Moves upstream', 'B) Moves downstream', 'C) Moves side to side', 'D) Moves straight down'],
        answer: 'A) Moves upstream — knickpoints retreat upstream via headward erosion.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 2 Q3 (True/False)',
        question: 'True/False: In a region where a river transitions from flowing over more resistant bedrock to less resistant bedrock, a knickpoint is likely to form after some time.',
        answer: 'True — differential erosion rates across the resistance boundary create an abrupt break in slope (a knickpoint).',
      },
      {
        source: 'BullSO Invitational — Dynamic Planet B, Q6–7',
        question: 'Which of the following describes the relative speeds and actions of a meandering river at the inside vs. outside of a curve?',
        choices: [
          'Speeds — A) Inside high, outside low B) Inside low, outside low C) Inside high, outside high D) Inside low, outside high',
          'Actions — A) Inside erodes, outside deposits B) Inside deposits, outside deposits C) Inside erodes, outside erodes D) Inside deposits, outside erodes',
        ],
        answer: 'Speed: D) Inside low, outside high. Actions: D) Inside deposits (forming a point bar), outside erodes (forming a cut bank).',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q69',
        question: 'List the 5 stages in the formation of a meander.',
        answer:
          '1) A straight channel deepens along its bars. 2) The river oscillates, undercutting the outer bank while deposition begins on the inside, though the channel is not yet widening. 3) Hydraulic action and abrasion deepen the channel, and point bars form on the inner bank. 4) Helicoidal flow emerges, creating bends in the developing meanders. 5) Erosion progresses from the middle toward the bend of a meander, and the meanders migrate downstream.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q2',
        question: 'What part of a meander has less water, slower flow, and more friction? A) Inner bank of a meander B) Outer bank of a meander C) Meander scars D) Channel cut off E) Oxbow lake',
        choices: ['A) Inner bank of a meander', 'B) Outer bank of a meander', 'C) Meander scars', 'D) Channel cut off', 'E) Oxbow lake'],
        answer: 'A) Inner bank of a meander — shallower water, slower flow, and more bed friction than the deeper, faster-flowing outer bank (cut bank).',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 2 Q3–4',
        images: [
          { url: `${IMG}/umso23-s2q3-meander-cross-section.jpg`, caption: 'Cross-section of a meandering river' },
        ],
        question:
          'In a meandering river, water moves at different speeds depending on position in the cross-section. (a) Where do the highest and lowest speeds occur (relative to a general river, e.g. "above the surface" rather than "on the right of the picture")? (b) Why do the highest/lowest velocity locations occur where they do, considering the relationship between discharge and water velocity?',
        answer:
          '(a) Highest speed: deepest point of the channel, close to the cut bank on the outside of the meander. Lowest speed: shallowest point, close to the point bar on the inside of the meander. (b) A particle following the outside curve travels a greater distance than one on the inside curve, but discharge through any cross-section must stay the same — so the outside flow must move faster to cover the extra distance in the same time.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 2 Q5 & Q6 (True/False)',
        question: '(Q5) True/False: For a meandering stream, the thalweg is closer (in horizontal distance) to the cut bank than the point bar. (Q6) True/False: In a straight channel, the greatest flow velocity tends to be near the bed of the channel.',
        answer: 'Q5: True — the thalweg (line of deepest/fastest flow) hugs the outer, cut-bank side of a meander. Q6: False — in a straight channel, peak velocity occurs near the surface/center, away from bed friction, not near the bed.',
      },

      // ───── Channel & floodplain landforms (point bars, cut banks, oxbow lakes, floodplains, natural levees, deltas, alluvial fans) ─────
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q30',
        question: 'Yazoo streams were named after an actual river that exhibits "yazoo" behavior — a tributary that runs parallel to a larger river for a long distance before joining it, kept separate by a natural levee. What major river did the original Yazoo River branch off from? A) Mississippi B) Nile C) Yangtze D) Mekong',
        choices: ['A) Mississippi', 'B) Nile', 'C) Yangtze', 'D) Mekong'],
        answer: 'A) Mississippi',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q34',
        images: [
          { url: `${IMG}/svso23-image7-umstead-stream.jpg`, caption: 'Image 7: stream at Umstead State Park, NC (feature at A)' },
        ],
        question: 'A photo of a stream at Umstead State Park, NC shows sediment being deposited at a labeled point. What is the name for this depositional feature?',
        answer: 'Point bar.',
      },
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q69, Q71, Q73–75',
        images: [
          { url: `${IMG}/rickards-horseshoe-bend-map.jpg`, caption: 'Horseshoe Bend National Military Park map' },
          { url: `${IMG}/rickards-horseshoe-bend-photo.jpg`, caption: 'Horseshoe Bend' },
          { url: `${IMG}/rickards-colorado-river-bend.jpg`, caption: 'Q74–75: another portion of the Colorado River' },
        ],
        question:
          "Questions about Horseshoe Bend on the Colorado River: (69) What type of lake will Horseshoe Bend become over time, and how do these form? (71) The walls above the river prevent water from exiting — what floodplain feature could this be? (73) The 'Tohopeka Village Bite' is located on what floodplain feature? (74) Sediment accumulates on the inside of the bend — what is this feature called? (75) The outside of the bend is much higher than the river's elevation — what is this feature called?",
        answer:
          '(69) An oxbow lake — formed when a meander is cut off as the stream seeks the fastest route downhill. (71) A (natural) levee. (73) The neck (of the meander). (74) Point bar. (75) Cut bank.',
      },
      {
        source: 'UMSO 2023 — Dynamic Planet B, Section 1 Q2',
        images: [
          { url: `${IMG}/umso23-s1q2-a.jpg`, caption: '(a)' },
          { url: `${IMG}/umso23-s1q2-b.jpg`, caption: '(b)' },
          { url: `${IMG}/umso23-s1q2-c.jpg`, caption: '(c)' },
          { url: `${IMG}/umso23-s1q2-d.jpg`, caption: '(d)' },
          { url: `${IMG}/umso23-s1q2-e.jpg`, caption: '(e)' },
          { url: `${IMG}/umso23-s1q2-f.jpg`, caption: '(f)' },
        ],
        question: 'Identify six images as meandering rivers, braided rivers, anastomosing rivers, or oxbow lakes.',
        answer: 'Example classification from the key: anastomosing, braided, braided, meandering, oxbow lake, oxbow lake — illustrating how each channel pattern looks distinct in satellite/aerial imagery.',
      },
      {
        source: 'BullSO Invitational — Dynamic Planet B, Q29',
        question: 'What is the name of a cutoff meander loop?',
        answer: 'Oxbow lake.',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q4',
        question: 'The intersection of multiple alluvial fans is called: A) Channel B) Alluvial road C) Bajadas D) Valley E) Fjord',
        choices: ['A) Channel', 'B) Alluvial road', 'C) Bajadas', 'D) Valley', 'E) Fjord'],
        answer: 'C) Bajadas.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q10',
        question: 'Which of the following correctly ranks delta beds from coarsest sediment to finest sediment? A) Topset, foreset, bottomset B) Topset, bottomset, foreset C) Foreset, bottomset, topset D) Foreset, topset, bottomset',
        choices: ['A) Topset, foreset, bottomset', 'B) Topset, bottomset, foreset', 'C) Foreset, bottomset, topset', 'D) Foreset, topset, bottomset'],
        answer: 'D) Foreset, topset, bottomset — in a Gilbert-type delta, the steeply-dipping foreset beds carry the coarsest (often avalanched) sediment, topset beds are moderate, and bottomset beds (deep, suspension-settled) are finest.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q28',
        images: [
          { url: `${IMG}/ut21-imageD-channel.jpg`, caption: 'Image D' },
        ],
        question: "Referring to an image of a particular stream channel type, select ALL statements that apply: A) This channel type is more common than straight channels B) Oxbow lakes are associated most closely with this channel type C) This channel type can form due to variable discharge D) This channel type is associated with gentle gradients E) This channel type is associated with a high sediment load",
        choices: ['A) More common than straight', 'B) Oxbow lakes most associated', 'C) Can form due to variable discharge', 'D) Associated with gentle gradients', 'E) Associated with high sediment load'],
        answer: "C and E — the pictured channel is braided: braided channels form under variable discharge and high sediment load, and are associated with steep (not gentle) gradients; oxbow lakes are instead a meandering-channel feature.",
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q35',
        images: [
          { url: `${IMG}/ut21-imageE-landform.jpg`, caption: 'Image E' },
        ],
        question: 'Referring to an image of a depositional landform, select ALL that apply: A) The feature was likely formed by a waterfall B) Flash flooding risk at this feature is relatively high C) The feature represents a low-energy depositional environment D) The feature was likely the site of a former playa lake E) The feature was likely the site of a former river delta F) The sediment at point A is coarser than the sediment at point B',
        choices: ['A) Formed by waterfall', 'B) High flash flood risk', 'C) Low-energy deposition', 'D) Former playa lake', 'E) Former river delta', 'F) A coarser than B'],
        answer: 'B and F — the feature is an alluvial fan: flash-flood risk is high (fans form at the mouths of steep, flashy mountain canyons), and sediment fines with distance from the apex (coarse near the fan apex, finer at the toe), so A is coarser than B.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q41, Q43',
        images: [
          { url: `${IMG}/ut21-q41-stream-profile.jpg`, caption: 'Stream profile: water depth vs. distance from A' },
        ],
        question: 'On a given stream profile, (41) which point has the highest stream velocity, and (43) is the point bar located on the left or right side of the profile — is its sediment well sorted or poorly sorted?',
        answer: '(41) The point 14 m from reference point A, at 2 m depth, has the highest velocity. (43) The point bar is on the left side of the profile, and its sediment is well sorted.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q14',
        question: 'The broad strip of land built up by sedimentation on either side of a stream channel is: A) A flood plain B) A delta C) An alluvial fan D) A meander',
        choices: ['A) A flood plain', 'B) A delta', 'C) An alluvial fan', 'D) A meander'],
        answer: 'A) A flood plain.',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q15–16',
        question: "(15) A river's velocity is ___ on the outside of a meander curve compared to the inside: A) equal B) lower C) higher. (16) A stream that doesn't meander at all has a sinuosity of ___.",
        answer: '(15) C) Higher. (16) 1 (a perfectly straight stream has a sinuosity of 1.0, since channel length equals straight-line distance).',
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q43',
        question: 'How is a natural levee formed?',
        answer:
          "A stream reaches its greatest velocity near bank-full stage. Once the flooding stream overtops its banks onto the wide floodplain, the water spreads over a much larger area and its velocity drops sharply — so sediment that was being carried by the high-velocity water is deposited right at the channel edge, building up a natural levee.",
      },
      {
        source: 'University of Chicago Invitational 2022 — Dynamic Planet B, Q46',
        question: 'How is an oxbow lake formed? (Select all that apply) A) Tectonic activity B) Erosion C) Deposition D) Increased stream velocity E) Flooding',
        choices: ['A) Tectonic activity', 'B) Erosion', 'C) Deposition', 'D) Increased stream velocity', 'E) Flooding'],
        answer: "B and C — erosion deepens/widens a meander's outer bends while deposition narrows and eventually seals off the neck, cutting off the loop to form the oxbow lake.",
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q74–75',
        question: "(74) Suppose a certain stream's load is mainly sand and gravel — would you expect this to be a meandering, bedrock, braided, or alluvial channel? (75) Suppose a certain channel has potholes — is this more likely an alluvial, braided, bedrock, or meandering channel?",
        answer: '(74) Alluvial channel (a channel flowing through its own unconsolidated sand/gravel deposits). (75) Bedrock channel (potholes form where fast, sediment-laden water abrades depressions directly into exposed bedrock).',
      },

      // ───── Sinuosity (cross-cutting measurement used throughout this topic) ─────
      {
        source: 'Rickards Invitational — Dynamic Planet B, Q6–7',
        question:
          'A stream travels 2 km (water distance) from source to mouth, and the straight-line distance is also 2 km — what is its sinuosity? Separately, the Manoa stream has a measured sinuosity of 1.67 — is it straight, sinuous, meandering, or highly meandering?',
        answer: 'Sinuosity = 2 km / 2 km = 1 (a straight stream). A sinuosity of 1.67 classifies the Manoa stream as meandering (typical ranges: <1.05 straight, 1.05–1.5 sinuous, 1.5–4 meandering, >4 tortuous).',
      },
      {
        source: 'Troy Invitational 2021-22 — Dynamic Planet B, Q44',
        question: 'A hydrologist measures a river channel length of 57 m with a sinuosity of 2.1. What straight-line distance does this channel actually span, and what type of channel is this?',
        answer: 'Straight-line distance = 57 / 2.1 ≈ 27.14 m. With a sinuosity of 2.1, this would be classified as a sinuous/meandering channel.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Section 2 Q11',
        question: 'A student calculates the sinuosity of a certain stream to be 0.45. How can one immediately tell that this value is unreasonable?',
        answer: "Sinuosity can never be less than 1 — the actual channel length between two points can never be shorter than the straight-line distance between them, so a sinuosity below 1.0 is physically impossible.",
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [],
  },
]
