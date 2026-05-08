'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X, Globe } from 'lucide-react'
import { useTranslations } from '@/contexts/I18nContext'
import { LOCALES } from '@/lib/i18n/config'
import LocaleLink from './LocaleLink'

export default function Header() {
  const { t, locale } = useTranslations()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)

  const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '') || '/'

  const navigation = [
    {
      name: t('common.nav.oreon'),
      href: '/oreon',
      items: [
        { name: t('common.nav.oreon'), desc: t('common.nav.oreon10'), href: '/oreon' },
      ],
    },
    {
      name: t('common.nav.resources'),
      href: '/press',
      items: [
        { name: t('common.nav.pressMedia'), desc: t('common.nav.pressMediaDesc'), href: '/press' },
        { name: t('common.nav.legalCenter'), desc: t('common.nav.legalCenterDesc'), href: '/legal' },
        { name: t('common.nav.helpSupport'), desc: t('common.nav.helpSupportDesc'), href: '/help' },
      ],
    },
    { name: t('common.nav.joinTeam'), href: '/join' },
    { name: t('common.nav.about'), href: '/about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121214] border-b border-white/5 h-[56px] flex items-center">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <LocaleLink href="/" className="flex items-center group transition-opacity hover:opacity-80">
              <Image
                src="/oreonlogo.png"
                alt={t('common.siteName')}
                width={90}
                height={28}
                className="h-[22px] w-auto invert brightness-0 invert"
                priority
              />
            </LocaleLink>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-[56px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <LocaleLink
                    href={item.href}
                    className="text-[14px] font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.items && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </LocaleLink>

                  {item.items && (
                    <div
                      className={`absolute top-[56px] left-0 w-[260px] bg-[#1E1E21] border border-white/10 shadow-xl py-2 transition-all duration-200 origin-top rounded-b-lg ${activeDropdown === item.name ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
                    >
                      {item.items.map((sub) => (
                        <LocaleLink
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 hover:bg-white/5 transition-colors"
                        >
                          <div className="text-[13px] font-bold text-white mb-0.5">{sub.name}</div>
                          <div className="text-[11px] text-white/40 font-light">{sub.desc}</div>
                        </LocaleLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center gap-3">
            <div
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4" />
                <span>{LOCALES.find((l) => l.code === locale)?.name ?? locale}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full pt-1 w-[280px] max-h-[70vh] overflow-y-auto bg-[#1E1E21] border border-white/10 shadow-xl rounded-lg py-2 z-50">
                  {LOCALES.map((loc) => (
                    <a
                      key={loc.code}
                      href={`/${loc.code}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-white/5 ${loc.code === locale ? 'text-[#007b56] font-medium' : 'text-white/80'}`}
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <LocaleLink href="/oreon/download" className="btn-white !py-1.5 !px-4 !text-[13px]">
              {t('common.getOreon')}
            </LocaleLink>
          </div>

          <button
            className="lg:hidden text-white/60 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[56px] left-0 w-full bg-[#121214] border-b border-white/10 shadow-2xl h-screen overflow-y-auto pb-20">
            <div className="flex flex-col p-4">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-white/5">
                  <div
                    className="flex items-center justify-between py-4 px-4 text-lg font-light text-white/60"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <LocaleLink href={item.href} onClick={() => !item.items && setMobileMenuOpen(false)}>
                      {item.name}
                    </LocaleLink>
                    {item.items && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </div>
                  {item.items && activeDropdown === item.name && (
                    <div className="bg-white/[0.02] py-2 px-8 flex flex-col gap-4 mb-4 rounded-lg">
                      {item.items.map((sub) => (
                        <LocaleLink
                          key={sub.name}
                          href={sub.href}
                          className="py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-bold text-white">{sub.name}</div>
                          <div className="text-xs text-white/40 font-light">{sub.desc}</div>
                        </LocaleLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-b border-white/5 py-4 px-4">
                <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
                  {t('common.language')}
                </div>
                <div className="flex flex-col max-h-[40vh] overflow-y-auto gap-0.5">
                  {LOCALES.map((loc) => (
                    <a
                      key={loc.code}
                      href={`/${loc.code}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`}
                      className={`py-2.5 px-3 rounded text-sm ${loc.code === locale ? 'text-[#007b56] font-medium bg-white/5' : 'text-white/80'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-8 px-4">
                <LocaleLink
                  href="/oreon/download"
                  className="btn-white w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('common.downloadOreon')}
                </LocaleLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
