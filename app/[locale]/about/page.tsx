import Link from 'next/link'
import { Users, Code2, Heart, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'
import LocaleLink from '@/components/LocaleLink'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const values = [
    { icon: Code2, titleKey: 'about.openByDefault' as const, descKey: 'about.openByDefaultDesc' as const },
    { icon: Heart, titleKey: 'about.upstreamLove' as const, descKey: 'about.upstreamLoveDesc' as const },
    { icon: ShieldCheck, titleKey: 'about.supportTimelines' as const, descKey: 'about.supportTimelinesDesc' as const },
    { icon: Users, titleKey: 'about.communityLed' as const, descKey: 'about.communityLedDesc' as const },
  ]

  const getInvolved = [
    { icon: GitHubIcon, titleKey: 'about.codeAndPackages' as const, descKey: 'about.codeAndPackagesDesc' as const, href: 'https://github.com/oreonhq', external: true, linkTextKey: 'about.github' as const },
    { icon: MessageCircle, titleKey: 'about.helpAndSupport' as const, descKey: 'about.helpAndSupportDesc' as const, href: '/help', external: false, linkTextKey: 'about.help' as const },
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('about.whatWeBelieve')}</h2>
            <p className="text-gray-500 font-light leading-relaxed">{t('about.whatWeBelieveDesc')}</p>
          </div>
          <div className="rounded-xl py-16 px-8 sm:px-12" style={{ background: 'var(--oreon-gradient)' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((item, i) => (
                <div key={i} className="p-6 rounded-xl">
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('about.getInvolved')}</h2>
            <p className="text-gray-500 font-light leading-relaxed">{t('about.getInvolvedDesc')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {getInvolved.map((item, i) => {
              const content = (
                <>
                  <item.icon className="w-10 h-10 text-[#007b56] flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">{t(item.descKey)}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#007b56]">
                      {t(item.linkTextKey)}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </>
              )
              return item.external ? (
                <Link key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex gap-6 p-6 rounded-xl bg-white">
                  {content}
                </Link>
              ) : (
                <LocaleLink key={i} href={item.href} className="flex gap-6 p-6 rounded-xl bg-white">
                  {content}
                </LocaleLink>
              )
            })}
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{t('about.transparency')}</h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">{t('about.transparencyP1')}</p>
          <p className="text-gray-600 leading-relaxed font-light">{t('about.transparencyP2')}</p>
        </div>
      </section>
    </div>
  )
}
