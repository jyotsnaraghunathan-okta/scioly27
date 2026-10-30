const IMG = '/images/previous-questions/geologic-record'

const STORY_OF_EARTH = {
  title: 'Chapter 4: Sedimentary Structures',
  source: 'The Story of Earth, University of Houston',
  url: 'https://uhlibraries.pressbooks.pub/thestoryofearthv2/chapter/chapter-4-sedimentary-structures2e/',
}
const LAB_MANUAL = {
  title: '10.5: Sedimentary Structures',
  source: 'Laboratory Manual for Introductory Geology (LibreTexts)',
  url: 'https://geo.libretexts.org/Learning_Objects/Laboratory/Book%3A_Laboratory_Manual_For_Introductory_Geology_%28Deline_Harris_and_Tefend%29/10%3A_Sedimentary_Rocks/10.5%3A_Sedimentary_Structures',
}
const EARTH_AT_HOME = {
  title: 'Sedimentary structures',
  source: 'Earth@Home',
  url: 'https://earthathome.org/vc/rocks/sedimentary-structures/',
}
const FLOW_REGIME = {
  title: 'The hydraulics of sedimentation: flow regime',
  source: 'Geological Digressions',
  url: 'https://www.geological-digressions.com/the-hydraulics-of-sedimentation-flow-regime/',
}
const PALAEOCHANNEL = {
  title: 'Palaeochannel',
  source: 'Wikipedia',
  url: 'https://en.wikipedia.org/wiki/Palaeochannel',
}
const SEDIMENTS = {
  title: 'Weathering and Erosion Produce Sediments',
  source: 'Physical Geology (BCcampus, H5P edition)',
  url: 'https://opentextbc.ca/physicalgeologyh5p/chapter/weathering-and-erosion-produce-sediments/',
}
const PG13_4 = {
  title: '13.4 Stream Types',
  source: 'Physical Geology, 2nd ed. (Earle), BCcampus Open Textbook',
  url: 'https://opentextbc.ca/physicalgeology2ed/chapter/13-4-stream-types/',
}

export const geologicRecordExplanations = [
  // ───────────────────────── Ripples, cross-bedding & current indicators ─────────────────────────
  {
    id: 'exp-gr-ripples-cross-bedding',
    topic: 'geologic-record',
    subtopic: 'ripples-cross-bedding',
    title: 'Ripple Marks, Cross-Bedding & Other Paleocurrent Indicators',
    sections: [
      {
        heading: 'Why sedimentary structures matter',
        content:
          "Sedimentary structures are features formed during or shortly after deposition, before the sediment turns to rock. Because they form under specific conditions, geologists use them like a frozen record of the water (or wind) that made them. They can tell you:\n\n• Flow direction (paleocurrent): which way the water or wind moved.\n• Flow strength and type: one-directional currents vs. back-and-forth waves; slow vs. fast flow.\n• Environment: river channel, floodplain, lake, beach, desert dune, deep marine.\n• Exposure: whether the sediment was ever out of the water (mud cracks, raindrop imprints).\n• Way-up (younging direction): which way was originally up, even in folded or overturned rocks.\n\nGrain size, sorting, and rounding add to the picture. Long transport by water produces smaller, rounder, better-sorted grains. Poorly sorted, angular deposits suggest short transport or rapid dumping (alluvial fans, debris flows, glacial till).",
        keyPoints: [
          'Sedimentary structures record flow direction, flow strength, environment, exposure, and way-up.',
          'Longer water transport → rounder, smaller, better-sorted grains.',
          'Poor sorting and angular clasts → short transport or rapid deposition.',
        ],
      },
      {
        heading: 'Ripple marks: current vs. wave (oscillation) ripples',
        content:
          "Ripple marks are small ridges and troughs (usually a few centimetres high) formed on sand beds by moving water or wind.\n\nCurrent ripples (asymmetric):\n• Formed by flow in one direction, such as a river or tidal current.\n• Gentle upstream (stoss) side, steep downstream (lee) side.\n• Sand rolls up the stoss side and avalanches down the lee side, so the ripple migrates downstream.\n• The steep side faces the direction the current was flowing (downcurrent).\n\nWave (oscillation) ripples (symmetric):\n• Formed by the back-and-forth motion of waves in shallow standing water, such as a lake shore or shallow sea.\n• Symmetric profiles with fairly sharp, pointed crests and rounded troughs.\n• They show the orientation of wave motion (perpendicular to the crests) but not a single flow direction.\n• Their pointed crests point toward the original top of the bed, a way-up indicator.\n\nClimbing ripples form when sediment is deposited so fast that each ripple climbs up the back of the one before it, which suggests rapid deposition such as a waning flood.",
        keyPoints: [
          'Asymmetric (current) ripples: steep lee side faces downcurrent; one-directional flow.',
          'Symmetric (wave/oscillation) ripples: back-and-forth wave motion in shallow standing water.',
          'Wave-ripple crests point up, so they indicate way-up.',
          'Climbing ripples indicate rapid deposition.',
        ],
      },
      {
        heading: 'Cross-bedding',
        content:
          "Cross-bedding (cross-stratification) consists of inclined layers within a bed. It forms as ripples or dunes migrate: sand avalanches down the lee face and builds a series of sloping layers called foresets.\n\n• The foresets dip in the downcurrent direction, so measuring the dip direction of many cross-beds gives the paleocurrent direction.\n• At the base, foresets usually curve and flatten (tangential to the bed below), while at the top they are cut off (truncated) by the next erosion surface. Concave-up curves at the base and truncated tops show which way was up.\n• Size reflects bedform size: small-scale cross-lamination from ripples (millimetres to centimetres) and larger cross-beds from dunes (decimetres to metres). Very large, steep cross-beds (several metres) are typical of wind-blown desert dunes.\n• Trough cross-bedding (scoop-shaped sets) comes from 3D dunes in rivers. Planar (tabular) cross-bedding comes from straight-crested dunes or bars.\n• Herringbone cross-bedding (foresets dipping in opposite directions in alternating layers) records reversing tidal currents.\n\nIn a river deposit, cross-beds point downstream. Plotting dip directions on a rose diagram reconstructs the ancient river's flow.",
        keyPoints: [
          'Foresets dip downcurrent, so cross-bed dip direction gives paleocurrent direction.',
          'Foresets are tangential at the base and truncated at the top (a way-up indicator).',
          'Ripple-scale cross-lamination vs. dune-scale cross-beds; huge sets suggest eolian dunes.',
          'Herringbone cross-bedding = reversing (tidal) currents.',
        ],
      },
      {
        heading: 'Flow regime: from ripples to antidunes',
        content:
          "On a sandy bed, the bedform (and the structure it leaves behind) changes in a predictable order as flow strength increases:\n\nLower flow regime (slower, subcritical flow, Froude number < 1):\n1. No movement, then ripples (fine sand) → small-scale cross-lamination.\n2. Dunes (larger bedforms) → medium- to large-scale cross-bedding.\n\nUpper flow regime (faster flow):\n3. Upper plane bed: dunes wash out into a flat bed, producing horizontal (planar) lamination with parting lineation (faint streaks parallel to flow).\n4. Antidunes (supercritical flow, Froude number > 1): in phase with surface waves, migrating upstream; leave low-angle laminae that can dip upstream.\n5. Chutes and pools at the highest velocities.\n\nReading a vertical sequence in the rock lets you infer how flow changed over time. For example, a flood deposit might go from planar lamination (high flow) up into ripple cross-lamination (waning flow). Grain size also matters: in coarse sand, ripples do not form and dunes appear directly.",
        keyPoints: [
          'Increasing flow: ripples → dunes → upper plane bed → antidunes → chutes and pools.',
          'Lower regime (ripples, dunes) gives cross-bedding; upper plane bed gives flat lamination.',
          'Antidunes form in supercritical flow (Fr > 1) and migrate upstream.',
        ],
      },
      {
        heading: 'Other paleocurrent indicators',
        content:
          "• Imbrication: flat pebbles and cobbles in a stream bed lean on one another like shingles or toppled dominoes. Their flat surfaces dip upstream (into the current), so the clasts tilt downstream. This is a key paleocurrent indicator in gravelly river deposits.\n• Flute casts: spoon-shaped scours carved by turbulent eddies on a muddy bed, then filled by the next sand layer and preserved on its base (a sole mark). The deep, rounded (blunt) end points upstream; the flute flares and shallows downstream.\n• Groove and tool marks: linear scratches cut by objects dragged along the bed. They give the flow line but not which way along it.\n• Parting lineation: streaks on flat-laminated sand parallel to flow (upper plane bed).\n• Channel shapes and lateral-accretion surfaces: the geometry of buried channels shows the orientation of the ancient river.",
        keyPoints: [
          'Imbricated clasts dip upstream (they tilt with the current).',
          'Flute casts: blunt, deep end points upstream.',
          'Groove marks show flow line only; parting lineation forms parallel to flow.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Paleocurrent from cross-beds',
        problem:
          'A geologist measures cross-bed foresets in an ancient river sandstone. Most foresets dip toward the southeast (about 135°). Which way did the river flow, and where were its headwaters most likely located?',
        steps: [
          'Foresets dip in the downcurrent direction.',
          'Dip toward ~135° means the river flowed toward the southeast.',
          'Rivers flow away from their source, so the headwaters (sediment source area) lay to the northwest.',
        ],
        answer: 'Flow was toward the southeast; the source area was to the northwest.',
      },
      {
        title: 'Current or wave ripples?',
        problem:
          'Two rippled sandstone beds are found. In bed 1, every ripple has a gentle west side and a steep east side. In bed 2, the ripples are symmetric with sharp crests. Interpret each.',
        steps: [
          'Bed 1 is asymmetric, so these are current ripples. The steep lee faces downcurrent, so flow was toward the east.',
          'Bed 2 is symmetric, so these are wave (oscillation) ripples formed by back-and-forth wave motion in shallow standing water, such as a lake margin.',
        ],
        answer: 'Bed 1: a one-directional current flowing east (e.g., a river). Bed 2: shallow standing water with waves (e.g., a lake shore).',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'The steep side of a current ripple faces upstream.',
        reality: 'The steep lee side faces downstream; sand avalanches down it as the ripple migrates with the current.',
      },
      {
        misconception: 'Imbricated pebbles tilt upstream.',
        reality: 'Imbricated clasts dip upstream, meaning their tops lean downstream, stacked like shingles facing into the current.',
      },
      {
        misconception: 'Symmetric ripples show which way a current flowed.',
        reality: 'Symmetric ripples form from oscillating wave motion and show only the orientation of the waves, not a single flow direction.',
      },
    ],
    furtherReading: [STORY_OF_EARTH, LAB_MANUAL, EARTH_AT_HOME, FLOW_REGIME],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Mud cracks, raindrop imprints, graded bedding ─────────────────────────
  {
    id: 'exp-gr-exposure-graded-bedding',
    topic: 'geologic-record',
    subtopic: 'exposure-graded-bedding',
    title: 'Mud Cracks, Raindrop Imprints & Graded Bedding',
    sections: [
      {
        heading: 'Mud cracks (desiccation cracks)',
        content:
          "Mud cracks form when wet, clay-rich mud dries out and shrinks. Shrinking pulls the surface apart into polygons (often roughly hexagonal) separated by cracks. Later sediment, often sand, fills the cracks and preserves them.\n\nWhat they tell you:\n• The sediment was exposed to air and dried out, so the environment alternated between wet and dry. Examples include floodplains, the margins of lakes and ponds, playas (dry lake beds), and tidal flats.\n• Way-up: in cross-section, the cracks are V-shaped, wide at the top and narrowing downward. The open end of the V points toward the original top of the bed.\n• Repeated layers of mud-cracked mud suggest seasonal or repeated flooding and drying, such as an ephemeral lake or a floodplain in a seasonal climate.\n\nDon't confuse them with syneresis cracks, which form underwater when clay shrinks for chemical reasons. Those are usually discontinuous and spindle-shaped, not complete polygons.",
        keyPoints: [
          'Mud cracks = wet mud dried and shrank, so subaerial exposure (wet-dry cycles).',
          'Polygonal pattern in plan view; V-shaped in cross-section, opening upward (way-up).',
          'Typical settings: floodplains, lake margins, playas, tidal flats.',
        ],
      },
      {
        heading: 'Raindrop imprints',
        content:
          "Raindrop imprints are small, shallow circular pits (a few millimetres across) made when raindrops land on soft mud or fine sand that is exposed to the air. If the surface dries and is gently buried, the pits are preserved.\n\nWhat they tell you:\n• The surface was exposed above water during a rain shower (subaerial exposure), like mud cracks.\n• The pits are concave on the top surface of the bed (and appear as small bumps on the base of the overlying bed), which shows way-up.\n• Pits that are asymmetric or elongated can indicate that rain was falling at an angle in the wind.\n• Fossil raindrop imprints have even been used to estimate the density of Earth's ancient atmosphere. The size of an imprint depends on how fast raindrops fall, and that depends on air density.\n\nRaindrop imprints are often found together with mud cracks, ripple marks, and footprints on floodplain and lake-margin surfaces.",
        keyPoints: [
          'Raindrop imprints = small craters on exposed soft sediment, so subaerial exposure during rain.',
          'Concave pits on top surfaces indicate way-up.',
          'Commonly found with mud cracks on floodplains and lake margins.',
        ],
      },
      {
        heading: 'Graded bedding',
        content:
          "A graded bed shows a gradual change in grain size from bottom to top.\n\nNormal grading (coarse at the base, fining upward) forms when a sediment-laden flow slows down. As velocity decreases, the largest grains settle first (they need the highest velocity to stay suspended), followed by progressively finer grains. This follows the logic of the Hjulström curve and settling velocity.\n\nCommon settings:\n• Turbidity currents: underwater avalanches of sediment-laden water on lake floors and in the deep sea, which leave graded beds called turbidites.\n• Waning floods on floodplains, or flood pulses entering a lake.\n• Lake deposits where each flood or seasonal input settles out.\n\nWhat they tell you:\n• The flow decreased in strength over time (waning flow).\n• Way-up: coarse grains at the bottom point to the original base of the bed, so normal grading shows which way was up.\n\nReverse (inverse) grading (fining downward, coarsening up) is less common. It forms in some debris flows and grain flows, where larger particles rise to the top. Fining-upward sequences on a larger scale (metres thick, in a channel deposit) are typical of meandering river point bars, discussed in the Paleochannels subtopic.",
        keyPoints: [
          'Normal grading: coarse at the bottom → fine at the top; it forms as a flow slows.',
          'Typical of turbidity currents (turbidites), waning floods, and flood pulses into lakes.',
          'Coarse base shows the original bottom (way-up indicator).',
          'Reverse grading occurs in some debris and grain flows.',
        ],
      },
      {
        heading: 'Putting it together: way-up and environment',
        content:
          "Several structures show which way was originally up. That is critical when rock layers have been folded or overturned, because the law of superposition (oldest at the bottom) only works if you know which way is up.\n\nWay-up indicators:\n• Graded bedding: coarse at the base.\n• Mud cracks: V-shapes open upward.\n• Cross-beds: tangential at the base, truncated at the top.\n• Symmetric wave ripples: sharp crests point up.\n• Raindrop imprints: pits on top surfaces.\n• Flute casts and load casts: on the bottoms of sandstone beds.\n\nEnvironment clues (combine several for confidence):\n• River channel: cross-bedded sandstone, imbricated gravel, a channel-shaped erosional base, fining-upward sequences.\n• Floodplain: thin sand layers with ripple cross-lamination in red or brown mudstone with mud cracks, raindrop imprints, roots, and soils.\n• Lake: fine, finely laminated mud, symmetric wave ripples near shore, varves in cold climates, graded beds from turbidity currents, evaporites in dry-climate lakes.\n• Playa/ephemeral lake: mud cracks, evaporite minerals (gypsum, halite), raindrop imprints.\n• Desert dunes: very large, steep cross-beds of well-sorted, rounded sand.",
        keyPoints: [
          'Way-up: grading, mud cracks, cross-bed geometry, wave ripple crests, raindrop pits, sole marks.',
          'Exposure indicators: mud cracks, raindrop imprints, roots, footprints.',
          'Combine structures with grain size and sorting to interpret environments.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Is this sequence overturned?',
        problem:
          'Tilting has turned a set of beds vertical. In each graded bed, grains are coarse on the west side and fine on the east side. Mud cracks in the same sequence have V-shapes that open toward the east. In which direction do the beds get younger?',
        steps: [
          'Normal graded beds are coarse at the original base, so each bed\'s base is on the west and its top on the east.',
          'Mud-crack Vs open toward the original top, which is also east.',
          'Both independent indicators agree: the original top faces east.',
          'By superposition, each bed is younger than the one below it, so the beds get younger toward the east.',
        ],
        answer:
          'The beds young (get younger) toward the east. Always check several independent way-up indicators; if they disagree, re-examine the observations before concluding.',
      },
      {
        title: 'Interpreting a sequence',
        problem:
          'A rock section shows, from bottom to top: red mudstone with mud cracks and raindrop imprints; then thin, normally graded sand-to-mud layers; then finely laminated gray mudstone. Describe the changing environment.',
        steps: [
          'Red mudstone with mud cracks and raindrop imprints means exposed, drying mud, such as a floodplain or dry lake margin.',
          'Thin graded beds show waning flows, such as repeated floods entering a shallow lake.',
          'Finely laminated gray mud shows quiet, deeper standing water where fine particles settled; gray color suggests less oxygen at the bottom.',
        ],
        answer: 'The area changed from a dry, exposed floodplain or lake margin to a deepening lake.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Mud cracks form underwater.',
        reality:
          'True mud (desiccation) cracks require the mud to be exposed to air and dry out. (Syneresis cracks can form underwater, but they are discontinuous and not polygonal.)',
      },
      {
        misconception: 'Graded beds fine downward because heavy grains sink through the layer later.',
        reality:
          'In normal grading the coarsest grains settle first as the flow slows, so the coarse grains are at the bottom.',
      },
      {
        misconception: 'Raindrop imprints just mean it rained.',
        reality: 'They mean it rained on soft sediment that was exposed to the air, which is evidence of subaerial exposure.',
      },
    ],
    furtherReading: [STORY_OF_EARTH, LAB_MANUAL, EARTH_AT_HOME],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Paleochannels & preserved fluvial/lacustrine deposits ─────────────────────────
  {
    id: 'exp-gr-paleochannels-deposits',
    topic: 'geologic-record',
    subtopic: 'paleochannels-deposits',
    title: 'Paleochannels & Preserved Fluvial/Lacustrine Deposits',
    sections: [
      {
        heading: 'Paleochannels',
        content:
          "A paleochannel (palaeochannel) is a former river or stream channel that no longer carries flow and is no longer part of the active river system.\n\nHow they form:\n• Avulsion: a river abruptly abandons its channel for a new course across the floodplain, often during a flood.\n• Meander cutoff: an oxbow is abandoned and gradually fills with fine sediment and organic matter (a clay plug).\n• Climate, tectonic, or sea-level change: rivers shrink, shift, or incise, leaving old channels high and dry or buried.\n• Blockages from sediment, log jams, landslides, or even beaver dams.\n\nHow they are preserved:\n• At the surface, as dry channels on floodplains and terraces.\n• Buried by younger sediment, with their sandy or gravelly fill preserved as a lens-shaped body within finer floodplain mud.\n• Exhumed (inverted) channels: cemented channel fill resists erosion better than the surrounding mud and ends up standing as a ridge. These are common in deserts and on Mars.\n\nHow they are found:\n• Aerial photos and satellite images, which show differences in vegetation, soil color, or moisture over buried channels.\n• Topographic and LiDAR maps.\n• Boreholes and geophysics such as airborne electromagnetic surveys (coarse channel sand and gravel are more electrically resistive than surrounding clay).\n\nWhy they matter:\n• Groundwater: sandy paleochannels make good aquifers and preferential flow paths; clay-filled ones can be barriers.\n• Mineral deposits: placer gold, tin, and other heavy minerals concentrate in old channel gravels.\n• Paleoclimate and paleohydrology: channel size, sinuosity, and grain size let geologists estimate past river discharge and climate.",
        keyPoints: [
          'Paleochannel = an abandoned former channel (avulsion, cutoff, climate, tectonics, blockage).',
          'Preserved at the surface, buried, or exhumed as inverted ridges.',
          'Found with aerial and satellite imagery, LiDAR, boreholes, and geophysics.',
          'Important as aquifers, placer deposits, and records of past discharge and climate.',
        ],
      },
      {
        heading: 'Reading ancient river deposits',
        content:
          "River deposits in the rock record have a characteristic architecture.\n\nMeandering river deposits:\n• Channel lag: the coarsest gravel and mud clasts at the erosional base of the channel.\n• Point-bar sands above it, built by lateral accretion. They show a fining-upward sequence: cross-bedded coarse sand at the base, rippled finer sand above, and mud at the top.\n• Inclined lateral-accretion surfaces record the point bar growing sideways.\n• Isolated sand bodies are surrounded by thick floodplain mudstones, which contain paleosols (fossil soils), root traces, mud cracks, and thin crevasse-splay sands.\n• Natural levee deposits are thin, fine sand and silt layers next to the channel.\n\nBraided river deposits:\n• Sheets of stacked, cross-bedded sand and gravel.\n• Little floodplain mud preserved, because channels shift so often.\n• Poorer sorting, more gravel, and many erosional surfaces.\n\nAlluvial fan deposits: coarse, poorly sorted, angular gravels and debris-flow layers near mountain fronts.\n\nTerraces: flat benches above the modern floodplain. They are remnants of former floodplains left behind when the river cut down.\n• Fill terraces are cut into thick valley-fill sediment.\n• Strath terraces are cut into bedrock, with a thin gravel veneer.\n• Paired terraces sit at the same elevation on both sides of the valley; unpaired terraces sit at different elevations on each side.\nThey record past base-level falls, uplift, or climate-driven changes in sediment supply.",
        keyPoints: [
          'Meandering: channel lag + fining-upward point bar, encased in floodplain mud with paleosols.',
          'Braided: stacked sheets of cross-bedded sand and gravel with little mud.',
          'Terraces = abandoned floodplains (fill vs. strath; paired vs. unpaired).',
        ],
      },
      {
        heading: 'Lacustrine (lake) deposits',
        content:
          "Lakes are quiet, low-energy environments, so their deposits are typically fine-grained and finely layered.\n\n• Grain size pattern: coarser sediment (sand, gravel) is deposited near shore and at river mouths (deltas). Finer silt and clay settle toward the deep center. In general, sediment gets finer moving away from the shore and into the deep basin.\n• Laminations: thin, even layers of mud deposited from suspension in still water.\n• Varves: annual pairs of layers in lakes that freeze in winter, especially glacial lakes. A lighter, coarser silt layer forms in summer, when meltwater brings in sediment. A darker, finer clay-and-organic layer forms in winter, when the frozen lake is still and only the finest particles settle. Counting varves, like tree rings, gives the age in years.\n• Lake-margin features: symmetric wave ripples, beach sands, mud cracks when the water level drops.\n• Gilbert-type deltas, where rivers enter lakes, have topset, foreset, and bottomset beds. Delta elevations mark former lake levels.\n• Turbidites: graded beds from underwater slumps and floods spreading across the lake floor.\n• Evaporites (gypsum, halite) and mud-cracked muds form in closed-basin (endorheic) and playa lakes in arid climates, where evaporation exceeds inflow.\n\nPaleo-lakes record past climate:\n• Ancient shorelines (strandlines) and wave-cut terraces high on mountain slopes mark former, much larger lakes. Lake Bonneville in Utah, whose remnant is the Great Salt Lake, and glacial Lake Agassiz in central North America are examples.\n• Lake-bottom cores preserve pollen (vegetation), diatoms, chemistry, and isotopes. These give continuous climate records spanning thousands of years.\n• On Mars, Curiosity found lake mudstones in Gale Crater, and Perseverance is exploring a river delta built into Jezero Crater's ancient lake. These are paleohydrologic records showing that liquid water once flowed and pooled on Mars.",
        keyPoints: [
          'Lake deposits are fine and laminated; coarse near shore, finest in the deep center.',
          'Varves = annual couplets (light summer silt, dark winter clay); count them for age.',
          'Shorelines, terraces, and deltas mark former lake levels (e.g., Lake Bonneville, Lake Agassiz).',
          'Playa and saline lakes leave evaporites and mud-cracked mud.',
          'Mars: Gale Crater lake mudstones and the Jezero Crater delta.',
        ],
      },
      {
        heading: 'Fossil water and paleohydrology',
        content:
          "Paleohydrology is the study of past water: ancient rivers, lakes, floods, and groundwater.\n\n• Fossil (paleo) groundwater is water that infiltrated thousands to millions of years ago under different climates and has been stored in deep aquifers ever since. Examples include the Nubian Sandstone Aquifer beneath the Sahara, recharged when North Africa was wetter. Because it is not being replenished today, pumping it is effectively mining a nonrenewable resource. Its age is estimated with isotopes such as carbon-14.\n• Paleoflood deposits: slackwater deposits (fine sand and silt left high on canyon walls by past floods) record the size and timing of floods older than any gauge record. They improve flood-frequency estimates.\n• Paleochannel size: the width, depth, and meander wavelength of a preserved channel scale with the discharge that formed it, so ancient channels give estimates of past discharge.\n• Combining structures, grain size, deposit geometry, and fossils lets geologists reconstruct how rivers and lakes responded to past climate change. That helps predict how they may respond in the future.",
        keyPoints: [
          'Fossil groundwater = ancient recharge stored in deep aquifers; effectively nonrenewable.',
          'Slackwater (paleoflood) deposits extend flood records beyond gauges.',
          'Channel dimensions in the rock record estimate past discharge.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Counting varves',
        problem:
          'A core from a former glacial lake contains 340 light-dark couplets above a layer of glacial till. Below the till, the lake was ice-covered. How long did the lake exist after the ice retreated, and what does each couplet represent?',
        steps: [
          'Each varve couplet = one year: a light summer meltwater silt layer plus a dark winter clay layer.',
          'Count the couplets: 340 couplets = 340 years.',
        ],
        answer: 'About 340 years of lake sedimentation after the ice retreated; each couplet records one year.',
      },
      {
        title: 'Recognizing a meandering-river channel deposit',
        problem:
          'An outcrop shows an erosional, concave-up base, covered by a layer of pebbles and mud chips. Above it lies 3 m of sand that changes from cross-bedded coarse sand to rippled fine sand, then to mudstone with root traces. Thick red mudstone surrounds the sand body on both sides. Interpret it.',
        steps: [
          'Concave-up erosional base = a channel scour.',
          'Pebbles and mud chips at the base = channel lag.',
          'Fining-upward sand with cross-bedding below and ripples above = a point bar built as flow decreased toward the inner bank.',
          'Mudstone with roots on top, and thick red mudstone around it = floodplain deposits with soils.',
        ],
        answer: 'A paleochannel of a meandering river: channel lag + fining-upward point bar encased in floodplain mudstone.',
      },
    ],
    commonMisconceptions: [
      {
        misconception: 'Lake sediment gets coarser toward the deep center of the lake.',
        reality:
          'Coarse sediment drops near shore and at river mouths. The finest clay settles in the quiet, deep center.',
      },
      {
        misconception: 'A varve is a single layer deposited in one storm.',
        reality: 'A varve is an annual couplet of two layers (summer and winter). One storm produces a single event bed, not a varve.',
      },
      {
        misconception: 'Fossil groundwater is recharged by today\'s rainfall.',
        reality: 'Fossil groundwater was recharged under past climates and receives little or no recharge today, so pumping depletes it.',
      },
    ],
    furtherReading: [PALAEOCHANNEL, STORY_OF_EARTH, SEDIMENTS, PG13_4],
    khanAcademyLinks: [],
  },

  // ───────────────────────── Previous questions ─────────────────────────
  {
    id: 'exp-gr-previous-questions',
    topic: 'geologic-record',
    subtopic: 'previous-questions',
    title: 'Previous Questions',
    sections: [],
    previousQuestionsNote:
      'This topic appeared only lightly on the 2021–2023 tests in the DynamicPlanet folder (they come from an earlier hydrology rotation), so practice with the worked examples in each subtopic as well.',
    previousQuestions: [
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q24',
        question:
          'The picture shows a: A) Poorly sorted sedimentary deposit, flow direction most likely right to left. B) Well-sorted deposit, flow right to left. C) Poorly sorted deposit, flow left to right. D) Well-sorted deposit, flow left to right.',
        images: [{ url: `${IMG}/soni22-q24-sedimentary-deposit.jpg`, caption: 'Q24 outcrop photo' }],
        choices: ['A) Poorly sorted, right → left', 'B) Well sorted, right → left', 'C) Poorly sorted, left → right', 'D) Well sorted, left → right'],
        answer:
          'Key: D) Well sorted, original flow from left to right. Check this one: the clasts in the photo vary widely in size, which would normally be called poorly sorted. Use the tilt of the imbricated (shingled) clasts to judge flow direction.',
      },
      {
        source: 'SONI National Invitational 2022 — Dynamic Planet B, Q25',
        question:
          'A rover on Mars was sent to explore the feature shown in the false-color image. Given the goal of discovering evidence of past life on Mars, why does it make sense to go to this location?',
        images: [{ url: `${IMG}/soni22-q25-mars-delta.jpg`, caption: 'False-color image of a Martian crater delta' }],
        answer:
          'It is a fossil river delta. Fine lake and delta sediments can preserve evidence of past water and possible biosignatures. (The test says Curiosity, but this delta-in-a-crater setting is Jezero Crater, explored by Perseverance; Curiosity explores Gale Crater.)',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q7',
        question: 'As sediment is transported down a stream, sediments tend to become: A) Rounder and more sorted B) More angular and more sorted C) Rounder and less sorted D) More angular and less sorted',
        choices: ['A) Rounder and more sorted', 'B) More angular and more sorted', 'C) Rounder and less sorted', 'D) More angular and less sorted'],
        answer: 'A) Rounder and more sorted: abrasion and attrition round the grains, and selective transport sorts them by size.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q24',
        question:
          'Which graph, if any, best shows the relationship between the radius of sediment particles (y) and increasing depth (x) in the middle of a lake? A–E as shown, or F) No distinct relationship; lake deposits are often poorly sorted.',
        images: [{ url: `${IMG}/birdso-q24-lake-sediment-graphs.jpg`, caption: 'Graphs A–E' }],
        answer: 'Key: A, particle radius increases with depth.',
      },
      {
        source: 'BirdSO Invitational — Dynamic Planet B, Q51',
        question:
          'Which INCORRECTLY matches the fluvial terrace type to its description? A) Strath terraces form when a stream downcuts through bedrock B) Unpaired terraces exist on opposite sides of a river but at the same elevation C) Nested fill terraces form when a previously filled valley is eroded and refilled with less sediment D) Fill terraces form when a valley is filled with river sediment',
        answer:
          'B) is incorrect: terraces at the same elevation on opposite sides of a river are paired terraces. Unpaired terraces sit at different elevations on each side.',
      },
      {
        source: 'UT Invitational 2021 (Div. B/C) — Dynamic Planet, Q52–53',
        question:
          'Refer to Image H, a cross-sectional profile of a typical floodplain (all features formed naturally). (52) Identify features x, y, and z (x is a landform on the purple surface, not "floodplain"; y is not "riverbank"; z is not part of a lake and has a specific name). (53) Which features formed as the direct result of flooding?',
        images: [{ url: `${IMG}/ut21-imageH-floodplain-profile.jpg`, caption: 'Image H: floodplain cross-section' }],
        answer: '(52) x: (fluvial) terrace, a preserved former floodplain. y: natural levee. z: yazoo tributary/stream. (53) y and z.',
      },
      {
        source: 'Highlands Invitational 2022 — Dynamic Planet B, Q65–66',
        question:
          '(65) Which term refers to a dry lake bed? A) Playa B) Arroyo C) Thalweg D) Eddy. (66) A clast of 1.2 mm is classified as: A) Silt B) Clay C) Sand D) Gravel',
        answer: '(65) A) Playa. (66) C) Sand (sand is 1/16–2 mm on the Udden-Wentworth scale).',
      },
      {
        source: 'Sierra Vista SO 2023 — Dynamic Planet B, Q21',
        question:
          'A sample of water from a nearby aquifer is compared with fossil water from another aquifer that infiltrated during the Carboniferous period, which was dominated by trees. Which would you expect to have the higher dissolved oxygen? Why?',
        answer:
          'Key: the fossil water, because it was exposed to the Carboniferous atmosphere, which had the highest oxygen concentration in history due to the abundance of trees. Note: in practice, old groundwater usually loses dissolved oxygen over time through reactions with minerals and organic matter, so expect this answer to be debated.',
      },
    ],
    khanAcademyLinks: [],
    workedExamples: [],
    commonMisconceptions: [],
  },
]
