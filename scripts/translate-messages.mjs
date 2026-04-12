#!/usr/bin/env node
/**
 * Translates messages/en_us.json into all other locales using the DeepL API.
 * Requires DEEPL_AUTH_KEY in the environment or in .env / .env.local.
 * Get a key at https://www.deepl.com/pro-api (free tier available).
 * Usage: DEEPL_AUTH_KEY=your_key npm run translate
 *
 * Partial translations: if a locale file already exists, only missing keys (e.g. new
 * or renamed strings in en_us) are translated and merged in. So small content changes
 * only cost API usage for the new/changed keys.
 * Set FORCE_TRANSLATE=1 to re-translate every key and overwrite.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { config } from 'dotenv'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
config({ path: join(ROOT, '.env') })
config({ path: join(ROOT, '.env.local') })
const MESSAGES_DIR = join(ROOT, 'messages')
const SOURCE_FILE = join(MESSAGES_DIR, 'en_us.json')

// All locales except en_us (source). DeepL target codes: https://www.deepl.com/docs-api/translate-text/
const LOCALES = [
  { code: 'ar', deepl: 'AR' },
  { code: 'bg', deepl: 'BG' },
  { code: 'cs', deepl: 'CS' },
  { code: 'da', deepl: 'DA' },
  { code: 'de', deepl: 'DE' },
  { code: 'el', deepl: 'EL' },
  { code: 'en_gb', deepl: 'EN-GB' },
  { code: 'es', deepl: 'ES' },
  { code: 'et', deepl: 'ET' },
  { code: 'fi', deepl: 'FI' },
  { code: 'fr', deepl: 'FR' },
  { code: 'hi', deepl: 'HI' },
  { code: 'hu', deepl: 'HU' },
  { code: 'id', deepl: 'ID' },
  { code: 'it', deepl: 'IT' },
  { code: 'ja', deepl: 'JA' },
  { code: 'ko', deepl: 'KO' },
  { code: 'lt', deepl: 'LT' },
  { code: 'lv', deepl: 'LV' },
  { code: 'nb', deepl: 'NB' },
  { code: 'nl', deepl: 'NL' },
  { code: 'pl', deepl: 'PL' },
  { code: 'pt_br', deepl: 'PT-BR' },
  { code: 'pt_pt', deepl: 'PT-PT' },
  { code: 'ro', deepl: 'RO' },
  { code: 'ru', deepl: 'RU' },
  { code: 'sk', deepl: 'SK' },
  { code: 'sl', deepl: 'SL' },
  { code: 'sv', deepl: 'SV' },
  { code: 'th', deepl: 'TH' },
  { code: 'tr', deepl: 'TR' },
  { code: 'uk', deepl: 'UK' },
  { code: 'vi', deepl: 'VI' },
  { code: 'zh', deepl: 'ZH' },
]

const BATCH_SIZE = 50
const BATCH_DELAY_MS = 400
const DEEPL_API_FREE = 'https://api-free.deepl.com/v2/translate'
const DEEPL_API_PRO = 'https://api.deepl.com/v2/translate'
let deeplApiUrl =
  process.env.DEEPL_API_URL ||
  (process.env.DEEPL_PRO === '1' || process.env.DEEPL_PRO === 'true' ? DEEPL_API_PRO : DEEPL_API_FREE)
const FORCE = process.env.FORCE_TRANSLATE === '1' || process.env.FORCE_TRANSLATE === 'true'

// Keys whose values are brand names and must never be translated (Oreon, Oreon HQ, Oreon 10, Oreon Lime, etc.)
const BRAND_KEYS = new Set([
  'common.siteName',
  'common.footer.oreonGitHub',
  'common.nav.oreon',
  'common.nav.oreon10',
  'help.oreonGitHub',
  'help.oreonMatrixCommunity',
  'help.oreonCommunityForum',
  'download.oreon10',
  'download.oreonLimeR2',
])

function flatten(obj, prefix = '') {
  const out = []
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      out.push(...flatten(v, key))
    } else if (typeof v === 'string') {
      const skipTranslate =
        v.startsWith('http://') || v.startsWith('https://') || BRAND_KEYS.has(key)
      out.push({ key, value: v, skipTranslate })
    }
  }
  return out
}

function flattenKeys(obj, prefix = '') {
  const out = new Set()
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
      flattenKeys(v, key).forEach((x) => out.add(x))
    } else if (typeof v === 'string') {
      out.add(key)
    }
  }
  return out
}

function setNested(obj, path, value) {
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i]
    if (!(p in cur)) cur[p] = {}
    cur = cur[p]
  }
  cur[parts[parts.length - 1]] = value
}

async function translateBatch(texts, targetLang, authKey, retries = 2, endpointFlipped = false) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(deeplApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${authKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: texts,
        target_lang: targetLang,
        source_lang: 'EN',
      }),
    })
    if (res.ok) {
      const data = await res.json()
      return data.translations.map((t) => t.text)
    }
    const err = await res.text()
    if (
      res.status === 403 &&
      !process.env.DEEPL_API_URL &&
      !endpointFlipped &&
      err.includes('Wrong endpoint')
    ) {
      deeplApiUrl = deeplApiUrl.includes('api-free') ? DEEPL_API_PRO : DEEPL_API_FREE
      return translateBatch(texts, targetLang, authKey, retries, true)
    }
    if (res.status === 429 && attempt < retries) {
      await new Promise((r) => setTimeout(r, 60000))
      continue
    }
    throw new Error(`DeepL API ${res.status}: ${err}`)
  }
}

async function translateLocale(flatEntries, targetLang, authKey, keysToTranslate = null) {
  const subset = keysToTranslate
    ? flatEntries.filter((e) => keysToTranslate.has(e.key))
    : flatEntries
  const toTranslate = subset.filter((e) => !e.skipTranslate)
  const translated = new Map(
    keysToTranslate
      ? toTranslate.map((e) => [e.key, null])
      : flatEntries.map((e) => [e.key, e.skipTranslate ? e.value : null])
  )
  for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
    const batch = toTranslate.slice(i, i + BATCH_SIZE)
    const texts = batch.map((e) => e.value)
    const result = await translateBatch(texts, targetLang, authKey)
    for (let j = 0; j < batch.length; j++) {
      translated.set(batch[j].key, fixBrandMistranslations(result[j]))
    }
    await new Promise((r) => setTimeout(r, BATCH_DELAY_MS))
  }
  return Array.from(translated.entries(), ([key, value]) => ({ key, value: value ?? '' }))
}

// Replace known mistranslations of Oreon/Lime with Latin brand names
const OREON_MISTRANSLATIONS = [
  ['オレゴン', 'Oreon'], // Japanese Oregon (wrong)
  ['オレオン', 'Oreon'], // Japanese katakana
  ['奥利昂', 'Oreon'], // Chinese
  ['奧利昂', 'Oreon'], // Traditional Chinese
  ['오레온', 'Oreon'], // Korean
  ['ओरियन', 'Oreon'], // Hindi
  ['Ореон', 'Oreon'], // Cyrillic
  ['ореон', 'Oreon'], // Cyrillic lowercase
  ['أوريون', 'Oreon'], // Arabic
  ['โอเรียน', 'Oreon'], // Thai
]
function fixBrandMistranslations(s) {
  if (typeof s !== 'string') return s
  let out = s
  for (const [wrong, correct] of OREON_MISTRANSLATIONS) {
    out = out.split(wrong).join(correct)
  }
  return out
}

function buildNested(entries) {
  const obj = {}
  for (const { key, value } of entries) {
    setNested(obj, key, value)
  }
  return obj
}

async function main() {
  const authKey = process.env.DEEPL_AUTH_KEY
  if (!authKey) {
    console.error('Set DEEPL_AUTH_KEY in the environment.')
    process.exit(1)
  }

  const source = JSON.parse(readFileSync(SOURCE_FILE, 'utf8'))
  const flatEntries = flatten(source)
  const sourceKeys = flattenKeys(source)

  console.log(`Source: ${flatEntries.length} strings. Translating into ${LOCALES.length} locales (partial merge when file exists).`)

  for (const { code, deepl } of LOCALES) {
    const outPath = join(MESSAGES_DIR, `${code}.json`)
    const hasExisting = existsSync(outPath)
    let keysToTranslate = null
    let existingNested = null

    if (hasExisting && !FORCE) {
      existingNested = JSON.parse(readFileSync(outPath, 'utf8'))
      const existingKeys = flattenKeys(existingNested)
      const missing = new Set([...sourceKeys].filter((k) => !existingKeys.has(k)))
      if (missing.size === 0) {
        process.stdout.write(`${code}... skip (up to date)\n`)
        continue
      }
      keysToTranslate = missing
    }

    process.stdout.write(`${code}... ${keysToTranslate ? `partial (${keysToTranslate.size} new)` : 'full'} `)
    try {
      const translated = await translateLocale(flatEntries, deepl, authKey, keysToTranslate)
      const nested =
        hasExisting && !FORCE && existingNested
          ? (() => {
              for (const { key, value } of translated) {
                setNested(existingNested, key, value)
              }
              for (const e of flatEntries) {
                if (keysToTranslate.has(e.key) && e.skipTranslate) {
                  setNested(existingNested, e.key, e.value)
                }
              }
              return existingNested
            })()
          : buildNested(
              flatEntries.map((e) => ({
                key: e.key,
                value: translated.find((t) => t.key === e.key)?.value ?? (e.skipTranslate ? e.value : ''),
              }))
            )
      writeFileSync(outPath, JSON.stringify(nested, null, 2) + '\n', 'utf8')
      console.log('ok')
    } catch (e) {
      console.log('error:', e.message)
    }
  }

  console.log('Done.')
}

main()
