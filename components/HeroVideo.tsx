'use client'

import { ArrowRight } from 'lucide-react'
import { useTranslations } from '@/contexts/I18nContext'
import LocaleLink from './LocaleLink'

export default function HeroVideo() {
  const { t } = useTranslations()

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden pt-[56px]"
      style={{ background: 'linear-gradient(165deg, #afe400 0%, #007b56 30%, #001457 70%, #000000 100%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            {t('home.hero.title')} <span className="opacity-70 font-medium">{t('home.hero.titleSub')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <LocaleLink href="/oreon/download" className="btn-white px-10 text-center">
              {t('home.hero.getOreon')}
            </LocaleLink>
            <LocaleLink
              href="/oreon"
              className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {t('home.hero.seeWhatsOffered')} <ArrowRight className="w-4 h-4" />
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  )
}
