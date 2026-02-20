'use client'

import Image from 'next/image'
import { useTranslations } from '@/contexts/I18nContext'
import LocaleLink from './LocaleLink'

export default function Footer() {
  const { t } = useTranslations()

  const oreonLinks = [
    { name: t('common.footer.oreon'), href: '/oreon' },
    { name: t('common.footer.downloads'), href: '/oreon/download' },
    { name: t('common.footer.aboutUs'), href: '/about' },
  ]

  const resourceLinks = [
    { name: t('common.footer.openSource'), href: '/about' },
    { name: t('common.footer.oreonGitHub'), href: 'https://github.com/oreonhq' },
    { name: t('common.footer.pressMedia'), href: '/press' },
    { name: t('common.footer.legalCenter'), href: '/legal' },
  ]

  return (
    <footer className="bg-[#121214] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <LocaleLink href="/" className="inline-block mb-10 transition-opacity hover:opacity-70">
              <Image
                src="/oreonlogo.png"
                alt={t('common.siteName')}
                width={180}
                height={56}
                className="h-[40px] w-auto invert brightness-0 invert"
              />
            </LocaleLink>
            <p className="text-white/60 text-base leading-relaxed max-w-sm font-light">
              {t('common.footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-white/50 font-bold mb-8 text-xs uppercase tracking-[0.2em]">
              {t('common.footer.oreon')}
            </h4>
            <ul className="space-y-4">
              {oreonLinks.map((link) => (
                <li key={link.name}>
                  <LocaleLink
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 font-bold mb-8 text-xs uppercase tracking-[0.2em]">
              {t('common.footer.resources')}
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <LocaleLink
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </LocaleLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-white/40 text-sm font-light max-w-2xl">
          Translations are machine-assisted and community-reviewed. Help improve Oreon in your language.
        </p>
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
            {t('common.footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex space-x-12">
            <LocaleLink
              href="/legal"
              className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              {t('common.footer.privacyTerms')}
            </LocaleLink>
            <LocaleLink
              href="/help"
              className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              {t('common.footer.support')}
            </LocaleLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
