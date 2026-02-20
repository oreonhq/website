import { getMessages, getT } from '@/lib/i18n/get-messages'

export default async function Legal({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const privacySections = [
    { titleKey: 'legal.yourDataIsYours' as const, contentKey: 'legal.yourDataIsYoursContent' as const },
    { titleKey: 'legal.anonymizedMetrics' as const, contentKey: 'legal.anonymizedMetricsContent' as const },
  ]

  const tosSections = [
    { titleKey: 'legal.useOfOreon' as const, contentKey: 'legal.useOfOreonContent' as const },
    { titleKey: 'legal.enterpriseOfferings' as const, contentKey: 'legal.enterpriseOfferingsContent' as const },
    { titleKey: 'legal.openSourceThirdParty' as const, contentKey: 'legal.openSourceThirdPartyContent' as const },
    { titleKey: 'legal.noWarranty' as const, contentKey: 'legal.noWarrantyContent' as const },
    { titleKey: 'legal.limitationOfLiability' as const, contentKey: 'legal.limitationOfLiabilityContent' as const },
    { titleKey: 'legal.trademarks' as const, contentKey: 'legal.trademarksContent' as const },
    { titleKey: 'legal.changesToTerms' as const, contentKey: 'legal.changesToTermsContent' as const },
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-[#fafafa]">
      <article className="max-w-[65ch] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <header className="mb-16 border-b border-black/10 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">{t('legal.title')}</h1>
          <p className="text-gray-500 font-light">{t('legal.subtitle')}</p>
        </header>

        <div className="bg-white shadow-sm border border-black/5 rounded-sm px-8 sm:px-12 py-10 sm:py-14 mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">{t('legal.privacyPolicy')}</h2>
          <div className="space-y-10">
            {privacySections.map((item, i) => (
              <section key={i}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-700 leading-[1.7] font-normal">{t(item.contentKey)}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-sm border border-black/5 rounded-sm px-8 sm:px-12 py-10 sm:py-14">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">{t('legal.termsOfService')}</h2>
          <div className="space-y-10">
            {tosSections.map((item, i) => (
              <section key={i}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-gray-700 leading-[1.7] font-normal">{t(item.contentKey)}</p>
              </section>
            ))}
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-black/10">
          <p className="text-xs text-gray-400 font-light leading-relaxed">{t('legal.footerTrademark')}</p>
        </footer>
      </article>
    </div>
  )
}
