import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/HeroVideo'
import FeatureCarousel from '@/components/FeatureCarousel'
import { Terminal, Paintbrush, EyeOff, Lock, Globe } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'
import LocaleLink from '@/components/LocaleLink'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  return (
    <main className="min-h-screen">
      <HeroVideo />

      <div className="theme-light bg-white">
        <section className="enterprise-section border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t('home.builtForYou.title')}</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">{t('home.builtForYou.description')}</p>
            </div>
            <FeatureCarousel />
          </div>
        </section>

        <section className="enterprise-section bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-4">
                {t('home.gnome.title')} <Paintbrush className="w-8 h-8 text-[#007b56]" />
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">{t('home.gnome.intro')}</p>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl">{t('home.gnome.trustedTechnology')}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{t('home.gnome.trustedTechnologyDesc')}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl">{t('home.gnome.communityDriven')}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {t('home.gnome.communityDrivenDesc')}{' '}
                    <a href="https://donate.gnome.org/" target="_blank" rel="noopener noreferrer" className="text-[#007b56] underline">
                      https://donate.gnome.org/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="enterprise-section bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">{t('home.globalSupport.title')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">{t('home.globalSupport.p1')}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">{t('home.globalSupport.p2')}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">{t('home.globalSupport.p3')}</p>
                <p className="text-gray-500 font-light leading-relaxed">{t('home.globalSupport.p4')}</p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[4/3] lg:aspect-square">
                  <Image
                    src="/global-map.png"
                    alt={t('home.globalMapAlt')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="enterprise-section bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="hidden lg:grid lg:col-span-5 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: EyeOff, gradient: 'from-orange-500 to-red-600' },
                    { icon: Lock, gradient: 'from-blue-600 to-cyan-500' },
                    { icon: Terminal, gradient: 'from-emerald-500 to-teal-600' },
                    { icon: Globe, gradient: 'from-rose-500 to-pink-600' },
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
              <div className="lg:col-span-7 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">{t('home.privacy.title')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">{t('home.privacy.p1')}</p>
                <p className="text-gray-500 font-light leading-relaxed mb-10">{t('home.privacy.p2')}</p>
                <LocaleLink href="/legal" className="btn-link">{t('home.privacy.link')}</LocaleLink>
              </div>
            </div>
          </div>
        </section>

        <section
          className="enterprise-section text-white overflow-hidden relative"
          style={{ background: 'linear-gradient(165deg, #afe400 0%, #007b56 30%, #001457 70%, #000000 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">{t('home.community.title')}</h2>
            <p className="text-white text-lg leading-relaxed mb-12 max-w-3xl mx-auto font-light">{t('home.community.p')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LocaleLink href="/help" className="btn-white">
                {t('home.community.getInvolved')}
              </LocaleLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
