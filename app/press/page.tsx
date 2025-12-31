import Link from 'next/link'

export default function Press() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-950">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Press and Media</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Media resources, press releases, and contact information for journalists and media professionals.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="space-y-8">
          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-4">About Oreon HQ</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Oreon HQ leads the development of the Oreon platform, focusing on
              OEM readiness, long term support, and real world deployment.
            </p>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-4">About Oreon</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Oreon is a desktop and laptop operating system designed to stay
              usable over time, without sacrificing stability or forcing premature
              upgrades.
            </p>
          </section>

          <section className="p-10 border border-gray-300 bg-gray-50 rounded-md">
            <h2 className="text-3xl font-semibold mb-4">Press Contact</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              For interviews, background, or press inquiries, please contact us
              through the contact page.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-md"
            >
              Contact Us →
            </Link>
          </section>
        </div>
      </section>
    </div>
  )
}
