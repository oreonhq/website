'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Download } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Structure', href: '/structure' },
    { name: 'Oreon', href: '/oreon' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/oreonlogo.png"
              alt="Oreon HQ"
              width={90}
              height={30}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/oreon/download"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Downloads
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/oreon/download"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200 w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4" />
              Downloads
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
