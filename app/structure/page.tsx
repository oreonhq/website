import Link from 'next/link'

export default function Structure() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-8">Project Governance.</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Oreon is led by a single governance team with a long-term open-source commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 animate-enterprise">
            <div>
              <div className="flex flex-col h-full p-12 md:p-14 border border-black/5 bg-gray-50 rounded-enterprise hover:bg-white transition-all duration-300">
                <h2 className="text-2xl font-bold text-black mb-8 tracking-tight">Oreon HQ</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-2">
                  Oreon HQ powers much of the core development behind Oreon while also providing enterprise support and backing.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start h-full p-12 md:p-14 border border-black/5 bg-gray-50 rounded-enterprise hover:bg-white transition-all duration-300">
                <h2 className="text-2xl font-bold text-black mb-8 tracking-tight">Open Source Commitment</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
                  We actively support open source by maintaining open development and contributing upstream.
                </p>
                <Link
                  href="/about"
                  className="btn-oreon-gradient w-fit"
                >
                  Read Our Open Source Approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
