import { Download, FileText } from 'lucide-react'

export default function Press() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-enterprise">
            <h1 className="hero-heading text-black mb-6">
              Press and Media.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Media resources, press releases, and company background for journalists or content creators.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <section className="p-12 border border-black/5 rounded-enterprise bg-gray-50">
                <div className="flex items-center gap-3 mb-8">
                   <h2 className="text-2xl font-bold text-black uppercase tracking-tight italic">Our Background</h2>
                </div>
                <div className="space-y-8 font-light text-gray-600 leading-relaxed text-lg">
                  <p>Oreon HQ leads the development of Oreon, mainly focusing on long term support and the enterprise world.</p>
                  <p>Oreon is a desktop and laptop operating system designed for the user, the community, and the enterprise.</p>
                </div>
              </section>

              <div className="hr-enterprise" />

              <section className="p-12 bg-[#111113] rounded-enterprise text-white relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10" style={{ background: 'var(--oreon-gradient)' }} />
                 <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-8 italic">Press Outreach</h2>
                    <p className="text-white/60 mb-10 font-light text-lg">For interviews, detailed explanations, or any other inquiries, please contact our CEO, Brandon Lester by emailing him at <a href="mailto:blester@oreonhq.com" className="text-[#007b56] hover:underline">blester@oreonhq.com</a>.</p>
                 </div>
              </section>
            </div>

            <aside className="lg:col-span-4 space-y-12 animate-enterprise">
              <div className="p-8 border-l border-black/5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Media Kits</h3>
                <div className="space-y-6">
                   {[
                     { label: "Product Images", val: "Oreon 10 screenshots", href: "https://sitestorage.oreonhq.com/oreon-10-screenshots.zip" },
                     { label: "Branding", val: "Logos and icons", href: "https://sitestorage.oreonhq.com/logos.zip" },
                     { label: "Full Press Kit", val: "Complete media package", href: "https://sitestorage.oreonhq.com/oreonmediakit.zip" }
                   ].map((item, i) => (
                     <a
                       key={i}
                       href={item.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group block"
                     >
                       <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-bold text-gray-900">{item.label}</span>
                         <Download className="w-4 h-4 text-gray-300 group-hover:text-[#007b56] transition-colors" />
                       </div>
                       <p className="text-xs text-gray-400 font-light">{item.val}</p>
                     </a>
                   ))}
                </div>
                <div className="mt-10 pt-10 border-t border-black/5">
                   <a
                     href="https://sitestorage.oreonhq.com/oreonmediakit.zip"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm font-bold text-[#007b56] hover:underline"
                   >
                      <FileText className="w-4 h-4" /> Download Full Press Kit (ZIP)
                   </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
