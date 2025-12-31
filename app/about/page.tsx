export default function About() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">About Oreon HQ</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Leading the core development and long-term direction of the Oreon platform, ensuring sustainable growth and real-world deployment.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="space-y-8">
          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-4">What is Oreon HQ</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Oreon HQ is the organization responsible for the core development
              and long term direction of Oreon. We exist to ensure Oreon can be
              built, shipped, supported, and evolved responsibly over time.
            </p>
          </section>

          <section className="p-10 border border-gray-300 bg-gray-50 rounded-md">
            <h2 className="text-3xl font-semibold mb-6">What We Focus On</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 text-lg">•</span>
                <span className="text-gray-700 text-lg">
                  Core operating system development
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 text-lg">•</span>
                <span className="text-gray-700 text-lg">
                  OEM enablement and deployment readiness
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 text-lg">•</span>
                <span className="text-gray-700 text-lg">
                  Long term support and upgrade strategy
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 text-lg">•</span>
                <span className="text-gray-700 text-lg">
                  Fleet management and tooling
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 text-lg">•</span>
                <span className="text-gray-700 text-lg">
                  Infrastructure and distribution
                </span>
              </li>
            </ul>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-4">How We Work</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Development is open and collaborative, but coordinated. Oreon HQ
              leads core development and integration, while external contributors
              and the Consortium participate where it makes sense.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
