/**
 * Locale segment used in URL (e.g. en_us). Default and fallback: en_us.
 * DeepL uses codes like en-US, de; we map to en_us, de, etc.
 */
export const DEFAULT_LOCALE = 'en_us'

export const LOCALES: { code: string; deeplCode: string; name: string }[] = [
  { code: 'en_us', deeplCode: 'en-US', name: 'English (United States)' },
  { code: 'en_gb', deeplCode: 'en-GB', name: 'English (United Kingdom)' },
  { code: 'de', deeplCode: 'de', name: 'German' },
  { code: 'fr', deeplCode: 'fr', name: 'French' },
  { code: 'es', deeplCode: 'es', name: 'Spanish' },
  { code: 'it', deeplCode: 'it', name: 'Italian' },
  { code: 'ja', deeplCode: 'ja', name: 'Japanese' },
  { code: 'zh', deeplCode: 'zh', name: 'Chinese' },
  { code: 'ko', deeplCode: 'ko', name: 'Korean' },
  { code: 'pt_br', deeplCode: 'pt-BR', name: 'Portuguese (Brazilian)' },
  { code: 'pt_pt', deeplCode: 'pt-PT', name: 'Portuguese (European)' },
  { code: 'ru', deeplCode: 'ru', name: 'Russian' },
  { code: 'ar', deeplCode: 'ar', name: 'Arabic' },
  { code: 'hi', deeplCode: 'hi', name: 'Hindi' },
  { code: 'nl', deeplCode: 'nl', name: 'Dutch' },
  { code: 'pl', deeplCode: 'pl', name: 'Polish' },
  { code: 'tr', deeplCode: 'tr', name: 'Turkish' },
  { code: 'th', deeplCode: 'th', name: 'Thai' },
  { code: 'vi', deeplCode: 'vi', name: 'Vietnamese' },
  { code: 'id', deeplCode: 'id', name: 'Indonesian' },
]

export const LOCALE_CODES = LOCALES.map((l) => l.code)

export function getLocaleFromRequest(request: Request): string {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/NEXT_LOCALE=([^;]+)/)
  if (match) {
    const preferred = match[1]
    if (LOCALE_CODES.includes(preferred)) return preferred
  }
  const acceptLanguage = request.headers.get('accept-language') || ''
  for (const part of acceptLanguage.split(',')) {
    const [lang] = part.trim().split(';')
    const tag = lang.toLowerCase().replace('-', '_')
    const exact = LOCALE_CODES.find((c) => c === tag)
    if (exact) return exact
    const prefix = tag.split('_')[0]
    const byPrefix = LOCALE_CODES.find((c) => c.startsWith(prefix) || c === prefix)
    if (byPrefix) return byPrefix
  }
  return DEFAULT_LOCALE
}

export function getLocaleName(code: string): string {
  return LOCALES.find((l) => l.code === code)?.name ?? code
}
