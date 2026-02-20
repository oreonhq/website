'use client'

import { useEffect } from 'react'

const LOCALE_TO_LANG: Record<string, string> = {
  en_us: 'en-US',
  en_gb: 'en-GB',
  pt_br: 'pt-BR',
  pt_pt: 'pt-PT',
}
const DEFAULT_LANG = 'en'

export function SetLocaleAttr({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = LOCALE_TO_LANG[locale] ?? locale.replace('_', '-') ?? DEFAULT_LANG
  }, [locale])
  return null
}
