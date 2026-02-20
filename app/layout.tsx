import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-red-hat-display',
})

export const metadata: Metadata = {
  title: 'Oreon HQ',
  description: 'Software built for what comes next.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={redHatDisplay.variable}>
      <body className="antialiased font-sans bg-[#111113] text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
