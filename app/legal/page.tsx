export default function Legal() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-enterprise">
            <h1 className="hero-heading text-black mb-6 uppercase tracking-tight">
              Legal
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Compliance, privacy protocols, and trademark information for the Oreon platform.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <section>
                <h2 className="text-xs font-bold text-gray-900 mb-8 uppercase tracking-widest">Privacy Policy</h2>
                <div className="space-y-12">
                  {[
                    {
                      title: "Your Data is Yours",
                      content: "Oreon HQ does not collect telemetry from end-user devices. Our commitment to privacy is absolute; your data remains on your hardware, under your control. We don't track your app usage, your web history, or your files."
                    },
                    {
                      title: "Anonymized Metrics",
                      content: "Starting with Oreon 11, download metrics are aggregate and anonymized. We monitor bandwidth allocation via Cloudflare for operational capacity planning only. No individual IP addresses are permanently stored or associated with specific downloads."
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-8 border border-black/5 bg-gray-50 rounded-enterprise">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 italic">{item.title}</h3>
                      <p className="text-gray-500 font-light leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4 animate-enterprise">
              <div className="p-8 border-l border-black/5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 italic">Intellectual Property</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light italic mb-8 leading-relaxed">
                  Oreon and the Oreon HQ logo are trademarks of Oreon HQ.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
