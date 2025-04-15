"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface BlogGalleryCarouselProps {
  images: GalleryImage[]
  className?: string
}

export function BlogGalleryCarousel({ images, className }: BlogGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])
  
  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    // Resume autoplay after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }
  
  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    // Resume autoplay after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {/* Main Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        
        {/* Image Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm">
            {images[currentIndex].caption}
          </div>
        )}
      </div>
      
      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-white bg-opacity-70 rounded-full hover:bg-opacity-90 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-white bg-opacity-70 rounded-full hover:bg-opacity-90 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}