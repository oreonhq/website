import { MessageCircle, ArrowRight, ShieldCheck, Download, Globe, HelpCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-6">Help & Support.</h1>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <section className="p-8 border border-black/5 rounded-enterprise bg-gray-50">
                  <h2 className="text-xl font-bold text-black uppercase tracking-widest text-xs mb-6">Feedback</h2>
                  <div className="space-y-8">
                    <div>
                      <a href="mailto:partnerships@oreonhq.com" className="text-lg font-bold text-black hover:text-[#007b56] transition-colors">team@oreonhq.com</a>
                    </div>
                  </div>
                </section>

                <section className="p-8 border border-black/5 rounded-enterprise bg-gray-50">
                  <h2 className="text-xl font-bold text-black uppercase tracking-widest text-xs mb-6">Enterprise Support</h2>
                  <div className="space-y-8">
                    <div>
                    </div>
                    <div className="pt-4">
                      <a
                        href="mailto:enterprise-support@oreonhq.com"
                        className="text-lg font-bold text-black hover:text-[#007b56] transition-colors"
                      >
                        Coming soon.
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <div className="hr-enterprise" />

              <div>
                <h3 className="text-2xl font-bold text-black mb-8 tracking-tight text-2xl">What we or our community can help with:</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Feedback", icon: MessageCircle },
                    { label: "General support", icon: HelpCircle },
                    { label: "Community events", icon: Globe }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-700">
                      <item.icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-light">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-[#111113] rounded-enterprise text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ background: 'var(--oreon-gradient)' }} />
                <div className="relative z-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-80 uppercase tracking-widest">Community Hub</h3>
                  <p className="text-sm font-light mb-8 leading-relaxed">Join the Oreon community and get support in our community channels.</p>
                  <div className="space-y-4">
                    {[
                      { name: 'Oreon HQ GitHub', href: 'https://github.com/oreonhq' },
                      { name: 'Discord Community', href: 'https://discord.gg/CRaPhvEYaa' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? "_blank" : undefined}
                        rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-sm font-medium"
                      >
                        {social.name}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
