'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroVideo() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden pt-[56px]"
             style={{ background: 'linear-gradient(165deg, #afe400 0%, #007b56 30%, #001457 70%, #000000 100%)' }}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            One OS. <span className="opacity-70 font-medium">Built for what comes next.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            Oreon is the convergence of power, beauty, and privacy. Engineered for everyone, from home users to global enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link
              href="/oreon/download"
              className="btn-white px-10 text-center"
            >
              Get Oreon
            </Link>
            <Link
              href="https://forums.oreonproject.org/t/looking-ahead-to-the-new-year-2026/51"
              className="text-white font-medium flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              See what's planned for Oreon 11 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
