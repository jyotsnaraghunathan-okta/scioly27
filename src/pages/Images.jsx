import { useState } from 'react'
import { imageGallery } from '../data/imageGallery'

function GalleryImage({ url, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-xs rounded-t-xl">
        📷 Image unavailable
      </div>
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      className="w-full h-48 object-cover rounded-t-xl bg-gray-100"
      onError={() => setFailed(true)}
    />
  )
}

export default function Images() {
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(imageGallery.map((img) => img.category))]
  const filtered = filter === 'all' ? imageGallery : imageGallery.filter((img) => img.category === filter)

  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">🖼️ Image Identification Gallery</h1>
        <p className="text-gray-500 text-sm">
          Real mission and telescope imagery for exactly the objects and extrasolar systems named in the
          official 2027 Division B Solar System B rules (Habitability topic). Use these to practice object
          identification, the same skill tested in image-based exam questions.
        </p>
      </div>

      <div className="flex gap-2 mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border cursor-pointer transition-colors ${
              filter === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat === 'all' ? 'All Objects' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((img) => (
          <div key={img.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
            <GalleryImage url={img.imageUrl} alt={img.name} />
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-gray-900">{img.name}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 whitespace-nowrap">
                  {img.category}
                </span>
              </div>
              <p className="text-xs text-gray-500 italic mb-3">{img.caption}</p>

              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Properties</p>
                <dl className="space-y-1">
                  {Object.entries(img.properties).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-2 text-xs">
                      <dt className="text-gray-500 flex-shrink-0">{key}</dt>
                      <dd className="text-gray-800 font-medium text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold text-blue-700 mb-1.5">Key Facts</p>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  {img.facts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-400 mt-0.5">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[10px] text-gray-400 mt-3 pt-2 border-t border-gray-100">
                Image credit: {img.credit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
