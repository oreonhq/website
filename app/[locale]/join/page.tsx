import { ArrowRight } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'

export default async function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const teams = [
    {
      titleKey: 'join.devTitle',
      textKey: 'join.devText',
      href: 'https://discord.gg/2Yyacu58Ap',
    },
    {
      titleKey: 'join.packagingTitle',
      textKey: 'join.packagingText',
      href: 'https://discord.gg/2Yyacu58Ap',
    },
    {
      titleKey: 'join.securityTitle',
      textKey: 'join.securityText',
      href: 'https://discord.gg/2Yyacu58Ap',
    },
    {
      titleKey: 'join.socialTitle',
      textKey: 'join.socialText',
      href: 'https://discord.gg/2Yyacu58Ap',
    },
    {
      titleKey: 'join.translationTitle',
      textKey: 'join.translationText',
      href: 'https://discord.gg/2Yyacu58Ap',
    },
  ] as const

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="hero-heading text-black mb-6">{t('join.title')}</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">{t('join.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="enterprise-section bg-gray-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('join.teamTitle')}</h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">{t('join.teamDesc')}</p>
          </div>

          <div className="flex flex-col gap-6">
            {teams.map((team) => (
              <div key={team.titleKey} className="rounded-enterprise border border-black/5 bg-white p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(team.titleKey)}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-1">{t(team.textKey)}</p>
                <a href={team.href} target="_blank" rel="noopener noreferrer" className="btn-white border border-black/10 w-full justify-center">
                  {t('join.startHere')} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
