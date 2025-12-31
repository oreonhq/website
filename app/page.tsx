import Link from 'next/link'
import { Code, Settings, Shield, Server } from 'lucide-react'
import HeroVideo from '@/components/HeroVideo'

export default function Home() {
  return (
    <>
      <div>
        <HeroVideo />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What We&apos;re Building
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Code className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Core Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We develop and maintain the core Oreon platform, including the
                operating system, tooling, and update infrastructure.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                OEM Friendly by Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oreon is designed to be shipped on real hardware. We prioritize
                predictable behavior, stable interfaces, and clear deployment
                paths for OEMs.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Long Term Support Without Stagnation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We support Oreon releases long term, while avoiding the problem
                of outdated software lingering forever. Release packs allow users
                and organizations to stay on a known, supported set of packages,
                while still receiving fixes, and upgrade on their own timeline.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fleet Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Oreon Fleet Manager is designed to help deploy, manage, and
                maintain Oreon systems at scale, from individual power users to
                large installations.
              </p>
            </div>
          </div>

          <div className="p-10 border border-gray-300 bg-gray-50 rounded-md">
            <h3 className="text-2xl font-semibold mb-4">Open Collaboration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While most core development happens within Oreon HQ, Oreon is built
              openly. The Oreon Open Technology Consortium contributes through
              community involvement, spins, experiments, and targeted contributions
              that complement core development.
            </p>
            <Link
              href="/structure"
              className="text-blue-700 font-medium"
            >
              Learn how responsibilities are divided →
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Updates and Community
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Development updates and announcements are shared through:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/2Yyacu58Ap"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Discord
            </a>
            <a
              href="https://forums.oreonproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Forums
            </a>
            <a
              href="https://matrix.to/#/#oreonproject:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Matrix
            </a>
            <a
              href="https://github.com/oreonproject"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">
            Links available in the footer.
          </p>
        </section>
      </div>
    </>
  )
}
