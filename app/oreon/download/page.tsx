'use client'

import { AlertTriangle, Download as DownloadIcon, ArrowRight, ShieldCheck, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Download() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const editions = [
    {
      name: "Oreon 10",
      tagline: "Our Latest and Greatest",
      build: "2510",
      desc: "The latest and final generation of Oreon based on AlmaLinux. Built for extreme longevity with a guaranteed 10-year support timeline for both desktop and server environments.",
      status: "Latest Release",
      color: "text-[#007b56]",
      image: "/oreon10.png",
      architectures: [
        { label: "x86_64", note: "Intel & AMD", hash: "65d47985bcd1789845f0f5a14ad73172aef531a390e17ce742c12fcd1a0c55e2", link: "https://boostyconnect.com/download/3715/?tmstv=1745095104" },
        { label: "aarch64", note: "ARM64", hash: "N/A", link: "https://boostyconnect.com/download/3717/?tmstv=1745095104" }
      ]
    },
    {
      name: "Oreon Lime (R2)",
      tagline: "Legacy Stable",
      build: "2504",
      desc: "Our older stable release based on AlmaLinux 9. A field-tested, reliable experience for systems that require a proven track record.",
      status: "Older Stable",
      color: "text-[#afe400]",
      image: "/limer2.png",
      architectures: [
        { label: "x86_64", note: "Intel & AMD", hash: "78c698a2b3f4f6ebc31c3e30ea8ab9b9ba313a9d8f8a908a6796d0c9a6f60237", link: "https://boostyconnect.com/download/2331/?tmstv=1745095104" }
      ]
    }
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-enterprise">
            <h1 className="hero-heading text-black mb-6">Choose your Edition.</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Oreon is available in several versions tailored for different needs.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {editions.map((edition, i) => (
              <div key={i} className="group p-8 border border-black/5 bg-gray-50 rounded-enterprise hover:bg-white transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 flex flex-col items-start">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{edition.name}</h2>
                        <p className={`${edition.color} font-medium text-sm`}>{edition.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-2xl">
                      {edition.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-6">
                      {edition.architectures.map((arch, archIdx) => (
                        <div key={archIdx} className="flex flex-col gap-3">
                          <a 
                            href={arch.link}
                            className="btn-oreon-gradient flex items-center gap-2"
                          >
                            <DownloadIcon className="w-4 h-4" /> Download {arch.label}
                          </a>
                          <span className="text-xs text-gray-400 font-medium px-1 uppercase tracking-wider">{arch.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full max-w-xl aspect-video relative rounded-xl overflow-hidden shadow-2xl">
                    <Image 
                      src={edition.image} 
                      alt={edition.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checksum Verification Section */}
          <div className="mt-32 border-t border-black/5 pt-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6 text-[#007b56]">
                <ShieldCheck className="w-8 h-8" />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Verify your Download</h2>
              </div>
              <p className="text-lg text-gray-500 font-light mb-12">
                Always ensure the integrity and security of your download by verifying the SHA256 checksum against the official values.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Official SHA256 Checksums</h3>
                  {editions.map((edition, i) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{edition.name} (Build {edition.build})</h4>
                      <div className="space-y-3">
                        {edition.architectures.map((arch, archIdx) => (
                          <div key={archIdx} className="bg-gray-50 p-4 rounded-xl border border-black/5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">{arch.label}</span>
                              <button 
                                onClick={() => copyToClipboard(arch.hash)}
                                className="text-gray-400 hover:text-[#007b56] transition-colors"
                              >
                                {copiedText === arch.hash ? (
                                  <Check className="w-3.5 h-3.5 text-[#007b56]" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                            <code className="text-[11px] font-mono text-gray-500 break-all block leading-relaxed">
                              {arch.hash}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Verification Instructions</h3>
                  <div className="bg-gray-50 p-6 rounded-xl border border-black/5">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider text-[#007b56]">Linux / macOS</h4>
                    <p className="text-sm text-gray-500 mb-4">Run this command in your terminal:</p>
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
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider text-[#007b56]">Windows PowerShell</h4>
                    <p className="text-sm text-gray-500 mb-4">Run this command in PowerShell:</p>
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-gray-300 flex justify-between items-center group">
                      <code>Get-FileHash .\[filename].iso -Algorithm SHA256</code>
                      <button 
                        onClick={() => copyToClipboard('Get-FileHash .\[filename].iso -Algorithm SHA256')}
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        {copiedText === 'Get-FileHash .\[filename].iso -Algorithm SHA256' ? (
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

          <div className="mt-24 p-12 bg-gray-900 rounded-enterprise text-white text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ background: 'var(--oreon-gradient)' }} />
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 italic">Need a custom deployment?</h3>
                <p className="text-white/60 mb-10 max-w-xl mx-auto font-light">Contact us for custom images, preset hardware configurations, or specific enterprise requirements.</p>
                <Link href="/contact" className="btn-enterprise-secondary text-white border-white/20">
                  Speak with us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
