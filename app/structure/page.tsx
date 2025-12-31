import { Building2, Users, Gavel } from 'lucide-react'

export default function Structure() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">How Oreon Is Built</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            A coordinated development approach with Oreon HQ leading core development and the Open Technology Consortium contributing to the ecosystem.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Oreon HQ leads core development and platform direction, with community
          and Consortium contributions layered on top.
        </p>

        <div className="space-y-8">
          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <div className="w-12 h-12 mb-6 text-gray-700">
              <Building2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-semibold mb-6">
              Oreon HQ Responsibilities
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Core OS development</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Package base and tooling</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">
                  Release packs and lifecycle policy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Update infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">OEM programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Fleet Manager development</span>
              </li>
            </ul>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <div className="w-12 h-12 mb-6 text-gray-700">
              <Users className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-semibold mb-6">
              Oreon Open Technology Consortium
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Consortium supports the ecosystem through:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Community governance spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">
                  Experimental and alternative spins
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Independent contributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">•</span>
                <span className="text-gray-700">Feedback and review</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              It does not replace Oreon HQ&apos;s role in core development.
            </p>
          </section>

          <section className="p-10 border border-gray-300 bg-gray-50 rounded-md">
            <div className="w-12 h-12 mb-6 text-gray-700">
              <Gavel className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Decision Making</h2>
            <p className="text-gray-700 leading-relaxed">
              Core technical decisions and platform direction are driven by
              Oreon HQ, with input from the community and Consortium contributors.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
