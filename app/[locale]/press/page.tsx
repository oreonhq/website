import { Download, FileText } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'

export default async function Press({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const mediaKits = [
    { labelKey: 'press.productImages' as const, valKey: 'press.productImagesVal' as const, href: 'https://sitestorage.oreonhq.com/oreon-10-screenshots.zip' },
    { labelKey: 'press.branding' as const, valKey: 'press.brandingVal' as const, href: 'https://sitestorage.oreonhq.com/logos.zip' },
    { labelKey: 'press.fullPressKit' as const, valKey: 'press.fullPressKitVal' as const, href: 'https://sitestorage.oreonhq.com/oreonmediakit.zip' },
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-enterprise">
            <h1 className="hero-heading text-black mb-6">{t('press.title')}</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">{t('press.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <section className="p-12 border border-black/5 rounded-enterprise bg-gray-50">
                <h2 className="text-2xl font-bold text-black tracking-tight mb-8">{t('press.whatIsOreon')}</h2>
                <p className="font-light text-gray-600 leading-relaxed text-lg">{t('press.whatIsOreonP')}</p>
              </section>

              <div className="hr-enterprise" />

              <section className="p-12 bg-[#111113] rounded-enterprise text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ background: 'var(--oreon-gradient)' }} />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 italic">{t('press.pressOutreach')}</h2>
                  <p className="text-white/60 mb-10 font-light text-lg">
                    {t('press.pressOutreachP')}
                  </p>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-4 space-y-12 animate-enterprise">
              <div className="p-8 border-l border-black/5">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{t('press.mediaKits')}</h3>
                <div className="space-y-6">
                  {mediaKits.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gray-900">{t(item.labelKey)}</span>
                        <Download className="w-4 h-4 text-gray-300 group-hover:text-[#007b56] transition-colors" />
                      </div>
                      <p className="text-xs text-gray-400 font-light">{t(item.valKey)}</p>
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
                    <FileText className="w-4 h-4" /> {t('press.downloadFullPressKit')}
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
