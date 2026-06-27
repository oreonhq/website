'use client'

import { Megaphone, Download as DownloadIcon, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from '@/contexts/I18nContext'
import { getT } from '@/lib/i18n/get-messages'
import enMessages from '@/messages/en_us.json'
import { DONATE_URL } from '@/components/DonateButton'

const SHOW_ANNOUNCEMENT_BANNER = false
const tAnnouncement = getT(enMessages as Record<string, unknown>)

export default function Download() {
  const { t } = useTranslations()
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const [donateModalOpen, setDonateModalOpen] = useState(false)
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState<string | null>(null)

  const handleIsoClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    setPendingDownloadUrl(url)
    setDonateModalOpen(true)
  }

  const closeModalAndDownload = () => {
    if (pendingDownloadUrl) {
      window.location.href = pendingDownloadUrl
      setPendingDownloadUrl(null)
    }
    setDonateModalOpen(false)
  }

  const handleDonateYes = () => {
    if (pendingDownloadUrl) {
      window.open(DONATE_URL, '_blank', 'noopener,noreferrer')
      window.location.href = pendingDownloadUrl
      setPendingDownloadUrl(null)
    }
    setDonateModalOpen(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2000)
  }

  type Architecture = {
    label: string
    noteKey: string
    hash?: string
    link?: string
    disabled?: boolean
    disabledTextKey?: string
  }

  type Edition = {
    nameKey: string
    taglineKey: string
    build: string
    descKey: string
    sourceLink: string
    /** i18n key shown under the source link button (default COPR) */
    sourceLinkCaptionKey?: string
    statusKey: string
    color: string
    image: string
    warningKey?: string
    architectures: Architecture[]
  }

  const editions: Edition[] = [
    {
      nameKey: 'download.oreon10' as const,
      taglineKey: 'download.latestVersion' as const,
      build: '2606',
      descKey: 'download.oreon10Desc' as const,
      sourceLink: 'https://copr.fedorainfracloud.org/coprs/brandonlester/oreon-10/',
      statusKey: 'download.latestRelease' as const,
      color: 'text-[#007b56]',
      image: '/oreon10.png',
      architectures: [
        { label: 'x86_64', noteKey: 'download.intelAmd' as const, hash: '11e6943f4387861d58e196818043d8b9efe006b9290327ab17086db807ba4a77', link: 'https://mirrors.oreonhq.com/Oreon-10-2606-x86_64.iso' },
        { label: 'aarch64', noteKey: 'download.arm64' as const, hash: 'c0629d741b3ac0c72667ea5dac9e4a38648047c854716302edee394b18600ec8', link: 'https://mirrors.oreonhq.com/Oreon-10-2606-aarch64.iso' },
      ],
    },
  ]

  return (
    <div className="download-page theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-enterprise">
            <h1 className="hero-heading text-black mb-6">{t('download.title')}</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">{t('download.subtitle')}</p>
          </div>
        </div>
      </section>

      {SHOW_ANNOUNCEMENT_BANNER && (
        <section lang="en" className="bg-[#007b56] text-white border-b border-black/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <Megaphone className="w-8 h-8 shrink-0 mt-0.5 text-white/90" />
              <div className="min-w-0">
                <h2 className="text-2xl font-bold mb-2">{tAnnouncement('download.announcementTitle')}</h2>
                <p className="text-white/90 text-lg mb-4">{tAnnouncement('download.announcementSubtitle')}</p>
                <p className="text-base font-medium mb-2">{tAnnouncement('download.changelog')}</p>
                <ul className="list-disc list-inside text-base text-white/90 space-y-1 mb-4">
                  {([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).map((n) => {
                    const key = `download.announcementChangelog${n}` as const
                    const text = tAnnouncement(key)
                    return text === key ? null : <li key={n}>{text}</li>
                  })}
                </ul>
                <p className="text-base font-semibold text-white/95">{tAnnouncement('download.announcementFooter')}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="enterprise-section">
        <div className="w-full space-y-12">
          {editions.map((edition, i) => (
            <div key={i} className="w-full px-4 sm:px-6 lg:px-8 py-8 border-y border-black/5 bg-gray-50">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 flex flex-col items-start">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{t(edition.nameKey)}</h2>
                        <p className={`${edition.color} font-medium text-sm`}>{t(edition.taglineKey)}</p>
                      </div>
                    </div>

                    <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-2xl">{t(edition.descKey)}</p>

                    <div className="flex flex-wrap gap-6">
                      {edition.architectures.map((arch, archIdx) => (
                        <div key={archIdx} className="flex flex-col gap-3 w-[220px]">
                          {arch.disabled ? (
                            <button
                              type="button"
                              disabled
                              aria-disabled="true"
                              className="w-full justify-center flex items-center gap-2 rounded-enterprise px-6 py-3 font-medium text-sm bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
                            >
                              <DownloadIcon className="w-4 h-4" /> {t('download.download')} {arch.label}
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => arch.link && handleIsoClick(e, arch.link)}
                              className="btn-oreon-gradient w-full justify-center flex items-center gap-2"
                            >
                              <DownloadIcon className="w-4 h-4" /> {t('download.download')} {arch.label}
                            </button>
                          )}
                          <span className="text-xs text-gray-400 font-medium px-1 uppercase tracking-wider">{t(arch.noteKey)}</span>
                        </div>
                      ))}
                      <div className="flex flex-col gap-3 w-[220px]">
                        <a
                          href={edition.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-white w-full justify-center border border-black/10 flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" /> {t('download.sourceCode')}
                        </a>
                        <span className="text-xs text-gray-400 font-medium px-1 tracking-wider">
                          {t(edition.sourceLinkCaptionKey ?? 'download.cOPR')}
                        </span>
                      </div>
                    </div>
                    {edition.warningKey && (
                      <div className="mt-8 w-full max-w-3xl rounded-enterprise border border-red-300 bg-red-50 p-4">
                        <p className="text-sm font-semibold text-red-800">{t(edition.warningKey)}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 w-full max-w-xl aspect-video relative rounded-xl overflow-hidden">
                    <Image src={edition.image} alt={t(edition.nameKey)} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-32 border-t border-black/5 pt-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6 text-[#007b56]">
                <ShieldCheck className="w-8 h-8" />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t('download.verifyDownload')}</h2>
              </div>
              <p className="text-lg text-gray-500 font-light mb-12">{t('download.verifyDesc')}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">{t('download.officialChecksums')}</h3>
                  {editions.map((edition, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        {t(edition.nameKey)} ({t('download.build')} {edition.build})
                      </h4>
                      <div className="space-y-3">
                        {edition.architectures.map((arch, archIdx) => (
                          <div key={archIdx} className="bg-gray-50 p-4 rounded-xl border border-black/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">{arch.label}</span>
                              {arch.hash && arch.hash !== 'pending' ? (
                                <button
                                  onClick={() => copyToClipboard(arch.hash as string)}
                                  className="text-gray-400 hover:text-[#007b56] transition-colors"
                                >
                                  {copiedText === arch.hash ? (
                                    <Check className="w-3.5 h-3.5 text-[#007b56]" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              ) : null}
                            </div>
                            <code className="text-[11px] font-mono text-gray-500 break-all block leading-relaxed">
                              {arch.hash === 'pending' ? t('download.checksumPending') : (arch.hash ?? t('download.notAvailable'))}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">{t('download.verificationInstructions')}</h3>
                  <div className="bg-gray-50 p-6 rounded-xl border border-black/5">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider text-[#007b56]">{t('download.linuxMacos')}</h4>
                    <p className="text-sm text-gray-500 mb-4">{t('download.runCommandTerminal')}</p>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-gray-300 flex justify-between items-center group">
                      <code>sha256sum [filename].iso</code>
                      <button
                        onClick={() => copyToClipboard('sha256sum [filename].iso')}
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        {copiedText === 'sha256sum [filename].iso' ? (
                          <Check className="w-4 h-4 text-[#7EF954]" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-black/5">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider text-[#007b56]">{t('download.windowsPowerShell')}</h4>
                    <p className="text-sm text-gray-500 mb-4">{t('download.runCommandPowerShell')}</p>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-gray-300 flex justify-between items-center group">
                      <code>Get-FileHash .\[filename].iso -Algorithm SHA256</code>
                      <button
                        onClick={() => copyToClipboard('Get-FileHash .\\[filename].iso -Algorithm SHA256')}
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        {copiedText === 'Get-FileHash .\\[filename].iso -Algorithm SHA256' ? (
                          <Check className="w-4 h-4 text-[#7EF954]" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {donateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" role="dialog" aria-modal="true" aria-labelledby="donate-modal-title">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 border border-black/10">
            <h2 id="donate-modal-title" className="text-lg font-bold text-gray-900 mb-2">{t('download.donateModalTitle')}</h2>
            <p className="text-gray-600 text-sm mb-6">{t('download.donateModalDesc')}</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleDonateYes}
                className="flex-1 min-w-0 btn-oreon-gradient py-2.5 px-5 text-sm font-medium rounded-lg"
              >
                {t('download.donateModalYes')}
              </button>
              <button
                type="button"
                onClick={closeModalAndDownload}
                className="flex-1 min-w-0 py-2.5 px-5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('download.donateModalNo')}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .download-page .btn-oreon-gradient,
        .download-page .btn-white {
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease !important;
        }

        .download-page .btn-oreon-gradient:hover:not(:disabled),
        .download-page .btn-white:hover:not(:disabled) {
          padding-left: 28px;
          padding-right: 28px;
        }

        .download-page .btn-white:hover:not(:disabled) {
          background-color: #f3f4f6;
        }
      `}</style>
    </div>
  )
}
