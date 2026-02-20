'use client'

import { createContext, useContext, useMemo } from 'react'

type Messages = Record<string, unknown>

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getNested(obj: unknown, path: string): string | undefined {
  const value = path.split('.').reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj)
  return typeof value === 'string' ? value : undefined
}

const I18nContext = createContext<{
  locale: string
  messages: Messages
  t: (key: string, params?: Record<string, string | number>) => string
} | null>(null)

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string
  messages: Messages
  children: React.ReactNode
}) {
  const value = useMemo(() => {
    const t = (key: string, params?: Record<string, string | number>) => {
      let out = getNested(messages, key) ?? key
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          const val = String(v)
          out = out.replace(new RegExp(`\\{${k}\\}`, 'gi'), val)
          if (k === 'year') {
            const yearPlaceholders = ['año', 'AÑO', 'anno', 'Jahr', 'jaar', 'rok', 'år', 'an', 'leto', 'yıl', 'metai', 'gads', 'tahun', 'год', '年', '년', 'година']
            yearPlaceholders.forEach((p) => {
              out = out.replace(new RegExp(`\\{${escapeRegex(p)}\\}`, 'g'), val)
              out = out.replace(new RegExp(`\\{${escapeRegex(p)}｝`, 'g'), val)
            })
          }
        })
      }
      return out
    }
    return { locale, messages, t }
  }, [locale, messages])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useTranslations() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslations must be used within I18nProvider')
  return ctx
}
