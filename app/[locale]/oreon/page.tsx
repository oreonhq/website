import type { Metadata } from 'next'
import Image from 'next/image'
import { Download } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'
import LocaleLink from '@/components/LocaleLink'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params
  const messages = await getMessages(resolved.locale)
  const t = getT(messages)
  const title = t('oreon.ogTitle')
  const description = t('oreon.ogDescription')
  const image = {
    url: '/oreon11.png',
    width: 1920,
    height: 1080,
    alt: t('oreon.screenshotAlt'),
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  }
}

export default async function Oreon({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const atAGlance = [t('oreon.atAGlance1'), t('oreon.atAGlance2'), t('oreon.atAGlance3')]

  const features = [
    { titleKey: 'oreon.featureSystemManagerTitle', descKey: 'oreon.featureSystemManagerDesc' },
    { titleKey: 'oreon.featureDefenseTitle', descKey: 'oreon.featureDefenseDesc' },
    { titleKey: 'oreon.featurePlasmaTitle', descKey: 'oreon.featurePlasmaDesc' },
    { titleKey: 'oreon.featureBoreTitle', descKey: 'oreon.featureBoreDesc' },
    { titleKey: 'oreon.featureIndependentTitle', descKey: 'oreon.featureIndependentDesc' },
    { titleKey: 'oreon.featureBranchesTitle', descKey: 'oreon.featureBranchesDesc' },
    { titleKey: 'oreon.featureInstallerTitle', descKey: 'oreon.featureInstallerDesc' },
    { titleKey: 'oreon.featureInfrastructureTitle', descKey: 'oreon.featureInfrastructureDesc' },
  ] as const

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="relative overflow-hidden min-h-[360px] md:min-h-[480px]">
        <div className="absolute inset-0">
          <Image
            src="/or11bg.png"
            alt={t('oreon.wallpaperAlt')}
            fill
            className="object-cover blur-2xl scale-110 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 md:py-32 max-w-4xl animate-enterprise">
            <h1 className="hero-heading text-white mb-4">{t('oreon.heroTitle')}</h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-3xl mb-4">
              {t('oreon.heroSlogan')}
            </p>
            <p className="text-lg text-white/85 leading-relaxed font-light max-w-3xl mb-4">{t('oreon.heroSubtitle')}</p>
            <p className="text-lg text-white/90 font-medium">{t('oreon.launchLabel')}</p>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <Image
          src="/oreon11.png"
          alt={t('oreon.screenshotAlt')}
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="px-6 sm:px-10 md:px-14 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">{t('oreon.atAGlance')}</h2>
            <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg text-white/95 font-light leading-relaxed marker:text-white">
              {atAGlance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="enterprise-section bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t('oreon.everyoneTitle')}</h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">{t('oreon.everyoneDesc')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.titleKey} className="rounded-enterprise bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-enterprise bg-gray-50 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">{t('oreon.betaTitle')}</h2>
            <p className="text-gray-600 font-light leading-relaxed max-w-3xl mb-2">{t('oreon.betaDesc')}</p>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-3xl mb-8">{t('oreon.betaWarning')}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://mirrors.oreonhq.com/Oreon-11-RP1-BB2607.3-x86_64.iso"
                className="btn-oreon-gradient inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('oreon.betaDownloadX86')}
              </a>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex items-center justify-center gap-2 rounded-enterprise px-6 py-3 font-medium text-sm bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
              >
                <Download className="w-4 h-4" />
                {t('oreon.betaDownloadAarch64')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-enterprise bg-[#007b56]/5 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">{t('oreon.teaserTitle')}</h2>
            <p className="text-gray-700 font-light leading-relaxed max-w-3xl">{t('oreon.teaserDesc')}</p>
          </div>

          <div className="p-8 md:p-10 rounded-enterprise bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-gray-900">{t('oreon.getOreon11')}</h2>
            <p className="text-gray-600 font-light mb-6 max-w-3xl">{t('oreon.getOreon11Desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LocaleLink href="/oreon/download" className="btn-oreon-gradient inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                {t('oreon.downloadOreon10')}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
