'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { 
      name: 'Product', 
      href: '/oreon',
      items: [
        { name: 'Oreon', desc: 'Modern consumer & enterprise OS', href: '/oreon' },
      ]
    },
    { 
      name: 'Platform', 
      href: '/structure',
      items: [
        { name: 'Governance', desc: 'Strategic platform lead', href: '/structure' },
        { name: 'Open Source', desc: 'FOSS at our core', href: '/about' },
      ]
    },
    { 
      name: 'Resources', 
      href: '/press',
      items: [
        { name: 'Press & Media', desc: 'Assets and news', href: '/press' },
        { name: 'Legal Center', desc: 'Compliance & terms', href: '/legal' },
        { name: 'Enterprise Support', desc: 'Direct assistance', href: '/contact' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121214] border-b border-white/5 h-[56px] flex items-center">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center group transition-opacity hover:opacity-80">
              <Image
                src="/oreonlogo.png"
                alt="Oreon HQ"
                width={90}
                height={28}
                className="h-[22px] w-auto invert brightness-0 invert"
                priority
              />
            </Link>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative group h-[56px] flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-[14px] font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.items && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {item.items && (
                    <div className={`absolute top-[56px] left-0 w-[260px] bg-[#1E1E21] border border-white/10 shadow-xl py-2 transition-all duration-200 origin-top rounded-b-lg ${activeDropdown === item.name ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                      {item.items.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 hover:bg-white/5 transition-colors"
                        >
                          <div className="text-[13px] font-bold text-white mb-0.5">{sub.name}</div>
                          <div className="text-[11px] text-white/40 font-light">{sub.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center">
            <Link
              href="/oreon/download"
              className="btn-white !py-1.5 !px-4 !text-[13px]"
            >
              Get Oreon
            </Link>
          </div>

          <button
            className="lg:hidden text-white/60 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[56px] left-0 w-full bg-[#121214] border-b border-white/10 shadow-2xl h-screen overflow-y-auto pb-20">
            <div className="flex flex-col p-4">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-white/5">
                  <div 
                    className="flex items-center justify-between py-4 px-4 text-lg font-light text-white/60"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    <Link href={item.href} onClick={() => !item.items && setMobileMenuOpen(false)}>{item.name}</Link>
                    {item.items && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </div>
                  {item.items && activeDropdown === item.name && (
                    <div className="bg-white/[0.02] py-2 px-8 flex flex-col gap-4 mb-4 rounded-lg">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-bold text-white">{sub.name}</div>
                          <div className="text-xs text-white/40 font-light">{sub.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-8 px-4">
                <Link
                  href="/oreon/download"
                  className="btn-white w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download Oreon
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
