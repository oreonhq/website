'use client'

import { useState, useEffect, useCallback } from 'react'
import { Paintbrush, Zap, EyeOff, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from '@/contexts/I18nContext'

export default function FeatureCarousel() {
  const { t } = useTranslations()
  const features = [
    {
      icon: Paintbrush,
      titleKey: 'home.carousel.familiarWorkflow' as const,
      descKey: 'home.carousel.familiarWorkflowDesc' as const,
      color: '#007b56',
    },
    {
      icon: Zap,
      titleKey: 'home.carousel.optimizedPerformance' as const,
      descKey: 'home.carousel.optimizedPerformanceDesc' as const,
      color: '#afe400',
    },
    {
      icon: EyeOff,
      titleKey: 'home.carousel.absolutePrivacy' as const,
      descKey: 'home.carousel.absolutePrivacyDesc' as const,
      color: '#001457',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center perspective-container">
      {/* Cards Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {features.map((feature, i) => {
          const isActive = i === currentIndex
          const isNext = i === (currentIndex + 1) % features.length
          const isPrev = i === (currentIndex - 1 + features.length) % features.length
          
          let offset = 0
          let scale = 0.8
          let opacity = 0
          let zIndex = 0
          let rotate = 0

          if (isActive) {
            offset = 0
            scale = 1
            opacity = 1
            zIndex = 30
            rotate = 0
          } else if (isNext) {
            offset = 150
            scale = 0.9
            opacity = 0.4
            zIndex = 20
            rotate = 5
          } else if (isPrev) {
            offset = -150
            scale = 0.9
            opacity = 0.4
            zIndex = 20
            rotate = -5
          }

          return (
            <div
              key={i}
              className="absolute transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform: `translateX(${offset}px) scale(${scale}) rotateY(${rotate}deg)`,
                opacity,
                zIndex,
                width: '100%',
                maxWidth: '600px'
              }}
              onClick={() => setCurrentIndex(i)}
            >
              <div className="p-12 border border-black/5 bg-white rounded-[24px] shadow-2xl shadow-black/5">
                <div className="w-16 h-16 bg-gray-50 border border-black/5 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 italic">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-10">
        <button 
          onClick={prevSlide}
          className="p-3 border border-black/5 rounded-full hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </button>

        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-4 bg-[#007b56] text-white rounded-full hover:scale-110 transition-all"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>

        <button 
          onClick={nextSlide}
          className="p-3 border border-black/5 rounded-full hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 flex gap-3">
        {features.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-10 bg-[#007b56]' : 'w-2 bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  )
}
