import { MessageCircle, ArrowRight, Globe, HelpCircle } from 'lucide-react'
import { getMessages, getT } from '@/lib/i18n/get-messages'

export default async function Help({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolved = params instanceof Promise ? await params : params
  const locale = resolved.locale
  const messages = await getMessages(locale)
  const t = getT(messages)

  const helpItems = [
    { labelKey: 'help.feedbackLabel' as const, icon: MessageCircle },
    { labelKey: 'help.generalSupport' as const, icon: HelpCircle },
    { labelKey: 'help.communityEvents' as const, icon: Globe },
  ]

  const socials = [
    { nameKey: 'help.oreonGitHub' as const, href: 'https://github.com/oreonhq' },
    { nameKey: 'help.discordCommunity' as const, href: 'https://discord.gg/2Yyacu58Ap' },
    {
      nameKey: 'help.oreonMatrixCommunity' as const,
      href: 'https://matrix.to/#/#oreon:oreonhq.com',
    },
    { nameKey: 'help.oreonCommunityForum' as const, href: 'https://community.oreonhq.com' },
    { nameKey: 'help.oreonWiki' as const, href: 'https://wiki.oreonhq.com' },
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-6">{t('help.title')}</h1>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <section className="p-8 border border-black/5 rounded-enterprise bg-gray-50">
                  <h2 className="text-xl font-bold text-black uppercase tracking-widest text-xs mb-6">{t('help.feedback')}</h2>
                  <div className="space-y-8">
                    <div>
                      <a href="mailto:partnerships@oreonhq.com" className="text-lg font-bold text-black hover:text-[#007b56] transition-colors">
                        team@oreonhq.com
                      </a>
                    </div>
                  </div>
                </section>

                <section className="p-8 border border-black/5 rounded-enterprise bg-gray-50">
                  <h2 className="text-xl font-bold text-black uppercase tracking-widest text-xs mb-6">{t('help.enterpriseSupport')}</h2>
                  <div className="space-y-8">
                    <div className="pt-4">
                      <a
                        href="mailto:enterprise-support@oreonhq.com"
                        className="text-lg font-bold text-black hover:text-[#007b56] transition-colors"
                      >
                        {t('help.comingSoon')}
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <div className="hr-enterprise" />

              <div>
                <h3 className="text-2xl font-bold text-black mb-8 tracking-tight">{t('help.whatWeCanHelpWith')}</h3>
                <ul className="space-y-4">
                  {helpItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-700">
                      <item.icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="font-light">{t(item.labelKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-[#111113] rounded-enterprise text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ background: 'var(--oreon-gradient)' }} />
                <div className="relative z-10">
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-80">{t('help.communityHub')}</h3>
                  <p className="text-sm font-light mb-8 leading-relaxed">{t('help.communityHubDesc')}</p>
                  <div className="space-y-4">
                    {socials.map((social) => (
                      <a
                        key={social.nameKey}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-sm font-medium"
                      >
                        {t(social.nameKey)}
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
