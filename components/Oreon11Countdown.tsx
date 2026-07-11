'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from '@/contexts/I18nContext'

const LAUNCH = new Date(2026, 9, 5, 0, 0, 0, 0)

type Remaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
  past: boolean
}

function getRemaining(): Remaining {
  const diff = LAUNCH.getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past: false,
  }
}

export default function Oreon11Countdown() {
  const { t } = useTranslations()
  const [remaining, setRemaining] = useState<Remaining | null>(null)

  useEffect(() => {
    const tick = () => setRemaining(getRemaining())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (remaining?.past) {
    return <p className="text-lg text-white/90 font-medium">{t('oreon.launchAvailable')}</p>
  }

  const units = [
    { key: 'days', label: t('oreon.countdownDays'), value: remaining?.days },
    { key: 'hours', label: t('oreon.countdownHours'), value: remaining?.hours },
    { key: 'minutes', label: t('oreon.countdownMinutes'), value: remaining?.minutes },
    { key: 'seconds', label: t('oreon.countdownSeconds'), value: remaining?.seconds },
  ]

  return (
    <div>
      <p className="text-sm text-white/70 mb-3">{t('oreon.launchLabel')}</p>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.key}
            className="min-w-[4.5rem] rounded-enterprise bg-black/25 px-4 py-3 text-center backdrop-blur-sm"
          >
            <div className="text-2xl sm:text-3xl font-bold tabular-nums text-white">
              {unit.value ?? '—'}
            </div>
            <div className="text-xs text-white/70 mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
