export const subjects = [
  {
    id: 'solar-system',
    name: 'Solar System',
    icon: '🪐',
    description: 'Habitability within and beyond the Solar System (Div B)',
    color: '#f59e0b',
    topicIds: [
      'habitability-fundamentals',
      'solar-system-habitability',
      'exoplanet-systems',
      'biosignatures-detection',
      'missions-instruments',
    ],
  },
  {
    id: 'dynamic-planet',
    name: 'Dynamic Planet',
    icon: '🌊',
    description: "Earth's Fresh Waters (Div B)",
    color: '#0d9488',
    topicIds: [
      'streams-rivers',
      'lakes-ponds',
      'groundwater-aquifers',
      'wetlands',
      'human-impact-freshwater',
    ],
  },
]

export function getSubjectById(id) {
  return subjects.find((s) => s.id === id)
}
