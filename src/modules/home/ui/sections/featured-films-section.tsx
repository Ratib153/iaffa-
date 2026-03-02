"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const featuredFilms = [
  {
    title: "The Turtle",
    director: "Nouf Saad",
    country: "Saudi Arabia",
    image: "/images/Films/The_Turtle.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "Under Occupation",
    director: "Anas Yahya",
    country: "Jordan",
    image: "/images/Films/Under_Occupation.png",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "Free Will",
    director: "Ghiya Rushidat",
    country: "United Arab Emirates",
    image: "/images/Films/Free_Will.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "Sea Of Hope",
    director: "Jubrail Abubaker Rahman",
    country: "Iraq",
    image: "/images/Films/SEA_OF_HOPE.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "The Smell Of Henna",
    director: "Louay Rezgui",
    country: "Tunisia",
    image: "/images/Films/The_Smell_Of_Henna.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "In The Red",
    director: "Dawan Nazad Majeed",
    country: "Iraq",
    image: "/images/Films/In_the_red.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "Broken Whispers",
    director: "Amir Athar Soheili, Amir Masoud Soheili",
    country: "Iran",
    image: "/images/Films/Broken_Whispers.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  },
  {
    title: "An Almost Ordinary Day",
    director: "Slim Belhiba",
    country: "Tunisia",
    image: "/images/Films/An_almost_ordinary_day .jpg",
    trailerUrl: "https://www.youtube.com/watch?v=",
  }
]

export function FeaturedFilmsSection() {
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll carousel continuously
  useEffect(() => {
    if (!isAutoPlay || !scrollContainerRef.current) return

    const autoScroll = () => {
      const container = scrollContainerRef.current
      if (container) {
        const scrollAmount = 816 // Scroll 3 films at a time (w-64 + gap-6 × 3)
        const maxScroll = container.scrollWidth - container.clientWidth

        if (container.scrollLeft + scrollAmount >= maxScroll - 10) {
          // Reset to beginning when reaching end
          container.scrollLeft = 0
        } else {
          container.scrollLeft += scrollAmount
        }
      }
    }

    const timer = setInterval(autoScroll, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 816
      const newScrollLeft =
        container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      
      container.scrollLeft = newScrollLeft
      
      // Pause auto-play temporarily when user clicks
      setIsAutoPlay(false)
      
      // Resume auto-play after 6 seconds of inactivity
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
      autoPlayTimeoutRef.current = setTimeout(() => {
        setIsAutoPlay(true)
      }, 2000)
    }
  }

  const handleMouseEnter = () => {
    setIsAutoPlay(false)
  }

  const handleMouseLeave = () => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    setIsAutoPlay(true)
  }

  return (
    <section 
      className="py-24 border-0" 
      style={{ border: 'none', boxShadow: 'none', marginTop: 0, backgroundColor: '#000000' }}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Now Showing</p>
            <h2 className="font-libre-baskerville text-3xl sm:text-4xl font-bold text-yellow-500">
              Featured Films
            </h2>
          </div>
          {/* Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scroll('left')}
              className="p-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Continuous Scrolling Films */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar film-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            scrollSnapType: 'x mandatory',
          }}
        >
          {featuredFilms.map((film, idx) => {
            const filmSlug = film.title.toLowerCase().replace(/\s+/g, '-')
            return (
              <div
                key={`${film.title}-${idx}`}
                className="group flex-shrink-0 w-64 animate-fade-in slide-card transition-all duration-300"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${idx * 0.1}s both`,
                  scrollSnapAlign: 'start',
                }}
              >
                <Link href={`/films/${filmSlug}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3 cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:overflow-visible bg-black shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/30">
                    {/* Blurred background layer */}
                    <Image
                      src={film.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover blur-md opacity-60"
                      aria-hidden="true"
                    />
                    
                    {/* Main poster on top */}
                    <Image
                      src={film.image || "/placeholder.svg"}
                      alt={film.title}
                      fill
                      className="object-contain relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eerie-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                    
                    {/* Content on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-30">
                      <h3 className="font-libre-baskerville text-lg sm:text-xl font-semibold text-primary mb-1 line-clamp-2">
                        {film.title}
                      </h3>
                      <p className="text-primary text-sm line-clamp-1">Dir. {film.director}</p>
                      <p className="text-primary text-sm mb-3">{film.country}</p>
                      
                      {/* Trailer Button */}
                      <a
                        href={film.trailerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-primary/80 hover:bg-primary text-black rounded-full text-xs font-medium transition-colors duration-300"
                      >
                        <Play className="w-4 h-4 fill-black" />
                        Trailer
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="lg:hidden flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scroll('left')}
            className="p-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <a
          href="/program"
          className="sm:hidden flex items-center justify-center gap-2 text-primary mt-8"
        >
          <span className="text-sm font-medium">View All Films</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .slide-card {
          animation: slideFromLeft 0.6s ease-out forwards;
          filter: brightness(1);
        }

        .film-carousel:has(.group:hover) .slide-card:not(:hover) {
          filter: brightness(0.6);
        }

        .slide-card:hover {
          filter: brightness(1.2);
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
