'use client'

import { useEffect, useState } from 'react'
import LocaleLink from '@/components/LocaleLink'
import { useTranslations } from '@/contexts/I18nContext'

const STORAGE_KEY = 'oreon_hide_contributor_notice'

export default function ContributorNotice() {
  const { t } = useTranslations()
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const shouldHide = window.localStorage.getItem(STORAGE_KEY) === '1'
    setHidden(shouldHide)
  }, [])

  const dismissForNow = () => {
    setHidden(true)
  }

  const hidePermanently = () => {
    window.localStorage.setItem(STORAGE_KEY, '1')
    setHidden(true)
  }

  if (hidden) return null

  return (
    <section className="pt-[56px] border-b border-black/10 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="p-2 md:p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="min-w-0">
            <p className="text-white font-semibold tracking-tight">{t('common.notice.title')}</p>
            <p className="text-white/80 text-sm mt-1">{t('common.notice.body')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <LocaleLink href="/join" className="btn-oreon-gradient !py-2 !px-4 !text-sm">
              {t('common.notice.joinCta')}
            </LocaleLink>
            <button
              type="button"
              onClick={dismissForNow}
              className="btn-white !py-2 !px-4 !text-sm"
            >
              {t('common.notice.notNow')}
            </button>
            <button
              type="button"
              onClick={hidePermanently}
              className="text-white/60 hover:text-white text-sm px-2 py-1 transition-colors"
            >
              {t('common.notice.doNotShowAgain')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
