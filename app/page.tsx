import Link from 'next/link'
import HeroVideo from '@/components/HeroVideo'
import FeatureCarousel from '@/components/FeatureCarousel'
import StackedFleetManager from '@/components/StackedFleetManager'
import { Shield, Layout, Settings, Terminal, Zap, Heart, Paintbrush, Coffee, Box, EyeOff, Scale, Monitor, MousePointer2, Lock, Globe } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroVideo />

      <div className="theme-light bg-white">
        {/* Professional Workflow Section */}
        <section className="enterprise-section border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Built for real people.</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Oreon provides a high-performance operating system designed with the user at the core. It is built for many people, from home users to global enterprises.
              </p>
            </div>

            <FeatureCarousel />
          </div>
        </section>

        {/* User Experience Section */}
        <section className="enterprise-section bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-4">
                The KDE Plasma Experience <Paintbrush className="w-8 h-8 text-[#007b56]" />
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                Starting with Oreon 11, we have standardized on KDE Plasma. This provides a mature, easy to use, and highly customizable desktop environment that gets the job done.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  { title: "Trusted Technology", desc: "KDE Plasma is a mature, easy to use, and highly customizable desktop environment developed by a global community of developers. Isn't that just awesome?" },
                  { 
                    title: "Community Driven", 
                    desc: (
                      <>
                        KDE Plasma is a community-driven desktop environment that is free and open source. We recommend donating to the KDE Project to support their hard work.{" "}
                        <a href="https://kde.org/donate/" target="_blank" rel="noopener noreferrer" className="text-[#007b56] underline">
                          https://kde.org/donate/
                        </a>
                      </>
                    )
                  }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <h4 className="font-bold text-gray-900 text-xl">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="enterprise-section bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: EyeOff, gradient: "from-orange-500 to-red-600" },
                    { icon: Lock, gradient: "from-blue-600 to-cyan-500" },
                    { icon: Terminal, gradient: "from-emerald-500 to-teal-600" },
                    { icon: Globe, gradient: "from-rose-500 to-pink-600" }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className={`h-48 border border-black/5 bg-gradient-to-br ${item.gradient} rounded-enterprise flex items-center justify-center transition-all`}
                    >
                      <item.icon className="w-20 h-20 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Your data is your property.</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                  Oreon is built from the ground up to respect digital privacy. We will never steal your data, track your usage, or force cloud-based telemetry into your OS.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-10">
                  Every connection is transparent, every background task is auditable. This makes Oreon the perfect platform for professional environments where digital privacy is mandatory.
                </p>
                <Link href="/legal" className="btn-link">Read our Privacy Commitment →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Oreon Project Section */}
        <section className="enterprise-section text-white overflow-hidden relative"
                 style={{ background: 'linear-gradient(165deg, #afe400 0%, #007b56 30%, #001457 70%, #000000 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">The Oreon Project.</h2>
            <p className="text-white text-lg leading-relaxed mb-12 max-w-3xl mx-auto font-light">
              We leverage enterprise backing to better help community-led development. This this promises to keep the core OS free, open, and community-driven. Our mission is to balance professional stability with the spirit of open source.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://oreonproject.org" target="_blank" rel="noopener noreferrer" className="btn-white">
                Visit Oreon Project →
              </Link>
            </div>
          </div>
        </section>

        {/* Fleet Manager Section - Bottom */}
        <section className="enterprise-section bg-gray-50 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Oreon Fleet Manager (work in progress).</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Centralized control for your fleet of devices. Oreon Fleet Manager allows IT administrators to manage your entire fleet of Oreon devices from a single interface.
              </p>
            </div>
            
            <StackedFleetManager />
          </div>
        </section>
      </div>
    </main>
  )
}
