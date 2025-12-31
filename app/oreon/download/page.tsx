import Link from 'next/link'
import { ExternalLink, Calendar, Archive, Bell } from 'lucide-react'

export default function Download() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Downloads</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Get Oreon 11 and access legacy releases. Downloads available for the latest stable release and previous versions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="space-y-8">
          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-4">Oreon 11</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Oreon 11 is currently under development, expected to release July
                  2026. This page will host Oreon 11 downloads once available.
                </p>
              </div>
            </div>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1">
                <Archive className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-4">
                  Legacy Releases and Spins
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Previous Oreon releases and Consortium maintained spins are
                  available here:
                </p>
                <a
                  href="https://oreonproject.org/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-900 font-semibold bg-white rounded-md hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Legacy downloads
                </a>
              </div>
            </div>
          </section>

          <section className="p-10 border border-gray-300 bg-gray-50 rounded-md">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1">
                <Bell className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-4">Stay Informed</h2>
                <p className="text-gray-700 leading-relaxed">
                  Development progress and announcements are shared through community
                  channels. Check the footer for links to Discord, Forums, and Matrix.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
