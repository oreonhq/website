import Link from 'next/link'
import { Mail, MessageCircle, ArrowRight, ShieldCheck, Download, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-6">Get in touch.</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Whether you need community support or are looking for strategic partnerships, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <section className="p-8 border border-black/5 rounded-enterprise bg-gray-50">
                  <h2 className="text-xl font-bold text-black uppercase tracking-widest text-xs mb-6">Enterprise Contact</h2>
                  <div className="space-y-8">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">Enterprise Inquiries</p>
                      <a href="mailto:partnerships@oreonhq.com" className="text-lg font-bold text-black hover:text-[#007b56] transition-colors">enterprise@oreonhq.com</a>
                    </div>
                  </div>
                </section>

                <section className="p-8 border border-black/5 rounded-enterprise bg-gray-50">
                  <h2 className="text-xl font-bold text-black uppercase tracking-widest text-xs mb-6">Support</h2>
                  <div className="space-y-8">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">If you have an enterprise support contract with us, please use our enterprise support ticketing system to get quick official support for Oreon products.</p>
                    </div>
                    <div className="pt-4">
                      <Link href="https://enterprise.oreonhq.com" className="btn-oreon-gradient w-fit">Visit Enterprise Portal →</Link>
                    </div>
                  </div>
                </section>
              </div>

              <div className="hr-enterprise" />

              <div>
                <h3 className="text-2xl font-bold text-black mb-8 tracking-tight italic text-2xl">Connect with us regarding:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Community Support", icon: MessageCircle },
                    { label: "Support Timelines", icon: ShieldCheck },
                    { label: "OEM Partnerships", icon: Globe },
                    { label: "Installation", icon: Download }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 text-sm font-medium text-gray-500 border border-black/5 p-6 rounded-enterprise bg-white transition-all">
                      <item.icon className="w-5 h-5 text-[#007b56]" />
                      <span className="text-center text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
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
                      { name: 'Discord', href: 'https://discord.gg/2Yyacu58Ap' },
                      { name: 'Forums', href: 'https://forums.oreonproject.org/' },
                      { name: 'Matrix', href: 'https://matrix.to/#/#oreonproject:matrix.org' },
                      { name: 'GitHub', href: 'https://github.com/oreonproject' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
