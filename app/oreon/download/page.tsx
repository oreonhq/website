'use client'

import { AlertTriangle, Download as DownloadIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Download() {
  const editions = [
    {
      name: "Oreon 11 Core",
      tagline: "The base experience",
      desc: "Fully FOSS and community led. The perfect choice for enthusiasts who value absolute digital freedom and simplicity.",
      status: "FOSS / Community",
      color: "text-[#afe400]"
    },
    {
      name: "Oreon 11 Server Core",
      tagline: "Lightweight backend",
      desc: "Fully FOSS and community led. A minimal server distribution designed for high performance in home labs.",
      status: "FOSS / Community",
      color: "text-[#afe400]"
    },
    {
      name: "Oreon 11 Studio",
      tagline: "For creators",
      desc: "Managed by Oreon HQ. A specialized edition pre-configured for high-end audio, video, and graphics production.",
      status: "Pro / Licensed",
      color: "text-[#007b56]"
    },
    {
      name: "Oreon 11 Enterprise",
      tagline: "Rock solid",
      desc: "Led by Oreon HQ. Support guarantees, security audits, and specialized fleet management tools for organizations.",
      status: "Enterprise / Support",
      color: "text-[#001457]"
    },
    {
      name: "Oreon 11 Server Enterprise",
      tagline: "Infrastructure at scale",
      desc: "Led by Oreon HQ. High-availability server infrastructure with official ticket-based support and long-term security support.",
      status: "Enterprise / Support",
      color: "text-[#001457]"
    }
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      {/* Warning Banner */}
      <div className="bg-[#afe400] py-3 px-4 flex items-center justify-center gap-3">
        <AlertTriangle className="w-5 h-5 text-black" />
        <span className="text-sm font-bold text-black uppercase tracking-widest">Downloads are coming soon. All links are currently inactive.</span>
      </div>

      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-enterprise">
            <h1 className="hero-heading text-black mb-6">Choose your Edition.</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Oreon is available in several versions tailored for different needs. From community-led FOSS to professional enterprise editions.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {editions.map((edition, i) => (
              <div key={i} className="group p-8 border border-black/5 bg-gray-50 rounded-enterprise hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="flex-1 flex flex-col items-start">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight italic">{edition.name}</h2>
                        <p className="text-[#007b56] font-medium text-sm italic">{edition.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-2xl">
                      {edition.desc}
                    </p>
                    
                    <button 
                      disabled
                      className="btn-oreon-gradient flex items-center gap-2"
                    >
                      <DownloadIcon className="w-4 h-4" /> Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gray-900 rounded-enterprise text-white text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ background: 'var(--oreon-gradient)' }} />
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 italic">Need a custom deployment?</h3>
                <p className="text-white/60 mb-10 max-w-xl mx-auto font-light">Contact us for custom images, preset hardware configurations, or specific enterprise requirements.</p>
                <Link href="/contact" className="btn-enterprise-secondary text-white border-white/20">
                  Speak with us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
