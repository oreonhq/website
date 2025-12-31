import Link from 'next/link'
import { Package, Clock, ArrowRight, Server } from 'lucide-react'

export default function Oreon() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Oreon</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            A general purpose operating system designed for desktops and laptops, built for long-term usability and real-world deployment.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Oreon is a general purpose operating system for desktops and laptops,
            designed to be usable on day one and maintainable years later. It is
            built with real deployment in mind, not just experimentation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">What Makes Oreon Different</h2>

          <div className="space-y-6">
            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Package className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">OEM Ready</h3>
              <p className="text-gray-700 leading-relaxed">
                Oreon is designed to be preinstalled, configured, and supported on
                shipping hardware.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Predictable Lifecycles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Release packs provide a stable package set that receives fixes
                without forcing constant disruptive upgrades.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <ArrowRight className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Upgrades on Your Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Older release packs remain supported for a defined period, giving
                users and organizations time to plan upgrades instead of being
                forced into them.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white rounded-md">
              <div className="w-12 h-12 mb-6 text-gray-700">
                <Server className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fleet Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Oreon Fleet Manager enables centralized system management, updates,
                and policy control across multiple machines.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Project Direction</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Early Oreon releases were exploratory. Oreon 11 is the first release
            built as a long term platform. It represents the transition from
            experimentation to execution.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Community</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Oreon is developed openly, with discussion and contributions happening
            across:
          </p>
          <div className="flex flex-wrap gap-4">
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
              Public repositories
            </a>
          </div>
        </section>

        <section className="p-10 border border-gray-300 bg-gray-50 rounded-md">
          <h2 className="text-3xl font-semibold mb-4">Get Oreon</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Downloads and release status available on our downloads page.
          </p>
          <Link
            href="/oreon/download"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-md"
          >
            Downloads and Release Status
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </section>
      </section>
    </div>
  )
}
