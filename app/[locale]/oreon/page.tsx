import Image from 'next/image'
import { Download } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'
import LocaleLink from '@/components/LocaleLink'

export default async function Oreon({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const useCases = [
    t('oreon.useCase1'),
    t('oreon.useCase2'),
    t('oreon.useCase3'),
    t('oreon.useCase4'),
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 min-h-[360px] md:min-h-[430px]">
        <div className="absolute inset-0">
          <Image
            src="/oreon10.png"
            alt={t('oreon.wallpaperAlt')}
            fill
            className="object-cover blur-2xl scale-110 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 md:py-32 max-w-4xl animate-enterprise">
            <h1 className="hero-heading text-white mb-6">{t('oreon.heroTitle')}</h1>
            <p className="text-xl text-white/90 leading-relaxed font-light max-w-3xl">{t('oreon.heroSubtitle')}</p>
            <LocaleLink href="/oreon/download" className="btn-white inline-flex items-center gap-2 mt-10">
              <Download className="w-4 h-4" />
              {t('oreon.downloadPage')}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <Image
          src="/oreon10-2.png"
          alt={t('oreon.screenshotAlt')}
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="px-6 sm:px-10 md:px-14 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">{t('oreon.atAGlance')}</h2>
            <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg text-white/95 font-light leading-relaxed marker:text-white">
              <li>{t('oreon.atAGlance1')}</li>
              <li>{t('oreon.atAGlance2')}</li>
              <li>{t('oreon.atAGlance3')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-12">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t('oreon.whatOreon10Is')}</h2>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#007b56] text-gray-700 text-lg font-light leading-relaxed">
                <li>{t('oreon.whatOreon10Is1')}</li>
                <li>{t('oreon.whatOreon10Is2')}</li>
                <li>{t('oreon.whatOreon10Is3')}</li>
                <li>{t('oreon.whatOreon10Is4')}</li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t('oreon.whyPeopleChoose')}</h2>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#007b56] text-gray-700 text-lg font-light leading-relaxed">
                {useCases.map((reason, i) => (
                  <li key={i}>{reason}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="enterprise-section pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-10 rounded-enterprise bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-gray-900">{t('oreon.getOreon10')}</h2>
            <p className="text-gray-600 font-light mb-6 max-w-3xl">{t('oreon.getOreon10Desc')}</p>
            <LocaleLink href="/oreon/download" className="btn-oreon-gradient inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('oreon.downloadPage')}
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  )
}
