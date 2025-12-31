'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const videos = [
  {
    src: 'https://sitestorage.oreonhq.com/8347238-uhd_2160_3840_25fps.mp4',
    title: 'Software built for',
    subtitle: 'what comes next.',
    description: 'Oreon HQ leads the development of the Oreon platform, focusing on long term usability, real world deployment, and sustainable growth.',
  },
  {
    src: 'https://sitestorage.oreonhq.com/1957727-hd_1920_1080_30fps.mp4',
    title: 'Gaming, reimagined.',
    subtitle: 'Seamless experiences.',
    description: 'We aim to provide a seamless gaming experience, ensuring performance and compatibility across a wide range of hardware and software.',
  },
  {
    src: 'https://sitestorage.oreonhq.com/3289569-hd_1920_1080_25fps.mp4',
    title: 'Supporting legacy hardware.',
    subtitle: 'Reducing e-waste.',
    description: 'Oreon 11 supports the oldest x86_64 processors, extending the life of existing hardware and leading to less e-waste.',
  },
]

export default function HeroVideo() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentIndexRef = useRef(currentVideoIndex)

  useEffect(() => {
    currentIndexRef.current = currentVideoIndex
  }, [currentVideoIndex])

  const changeVideo = (newIndex: number) => {
    if (newIndex === currentIndexRef.current || isTransitioning) return
    
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentVideoIndex(newIndex)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 150)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      const nextIndex = (currentIndexRef.current + 1) % videos.length
      changeVideo(nextIndex)
    }

    video.addEventListener('ended', handleVideoEnd)
    
    if (!isTransitioning) {
      video.load()
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex, isTransitioning])

  const currentContent = videos[currentVideoIndex]

  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={currentContent.src}
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div 
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-200 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
          {currentContent.title}
          <br />
          <span className="text-white">
            {currentContent.subtitle}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
          {currentContent.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/oreon"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-md"
          >
            Explore Oreon →
          </Link>
          <Link
            href="/structure"
            className="px-8 py-4 border border-white/50 text-white font-semibold bg-white/10 backdrop-blur-sm rounded-md"
          >
            How Oreon is Built →
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/50 text-white font-semibold bg-white/10 backdrop-blur-sm rounded-md"
          >
            Contact →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => changeVideo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
