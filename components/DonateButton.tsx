'use client'

import { Heart } from 'lucide-react'
import { useTranslations } from '@/contexts/I18nContext'

const DONATE_URL = 'https://buy.stripe.com/00g4gkgH34qc4eI288'

const ENGLISH_LOCALES = ['en_us', 'en_gb']

export default function DonateButton({
  variant = 'default',
  className = '',
}: {
  variant?: 'default' | 'footer' | 'mobile'
  className?: string
}) {
  const { locale } = useTranslations()

  if (!ENGLISH_LOCALES.includes(locale)) {
    return null
  }

  const base = 'inline-flex items-center gap-1.5 font-medium transition-colors'
  const styles = {
    default: 'px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 text-sm',
    footer: 'text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.2em]',
    mobile: 'w-full justify-center py-3 px-4 rounded-lg text-white/80 hover:bg-white/5 text-sm',
  }

  return (
    <a
      href={DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <Heart className="w-3.5 h-3.5" />
      Donate
    </a>
  )
}

export { DONATE_URL }
