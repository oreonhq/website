import { DEFAULT_LOCALE } from './config'
import defaultMessages from '@/messages/en_us.json'

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const value = path.split('.').reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj)
  return typeof value === 'string' ? value : undefined
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const YEAR_PLACEHOLDERS = ['year', 'año', 'AÑO', 'anno', 'Jahr', 'jaar', 'rok', 'år', 'an', 'leto', 'yıl', 'metai', 'gads', 'tahun', 'год', '年', '년', 'година']

export function getT(messages: Record<string, unknown>) {
  return function t(key: string, params?: Record<string, string | number>): string {
    let out = getNested(messages, key) ?? key
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        const val = String(v)
        out = out.replace(new RegExp(`\\{${escapeRegex(k)}\\}`, 'gi'), val)
        if (k === 'year') {
          YEAR_PLACEHOLDERS.forEach((p) => {
            out = out.replace(new RegExp(`\\{${escapeRegex(p)}\\}`, 'g'), val)
            out = out.replace(new RegExp(`\\{${escapeRegex(p)}｝`, 'g'), val)
          })
        }
      })
    }
    return out
  }
}

export async function getMessages(locale: string): Promise<Record<string, unknown>> {
  const safeLocale = locale.replace(/[^a-z0-9_]/gi, '')
  if (safeLocale === DEFAULT_LOCALE) {
    return defaultMessages as Record<string, unknown>
  }
  try {
    const mod = await import(`@/messages/${safeLocale}.json`)
    return mod.default as Record<string, unknown>
  } catch {
    return defaultMessages as Record<string, unknown>
  }
}
