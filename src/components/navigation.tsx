"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image";

const navItems = [
  { label: "Programs", href: "/program" },
  { label: "Submissions", href: "/submissions" },
  { label: "Prizes", href: "/prizes" },
  { label: "Membership", href: "/membership" },
  { label: "Oman Partnership", href: "/oman-partnership" },
  { label: "About", href: "/about" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-0 shadow-none transition-all duration-300"
      style={{
        background: isScrolled
          ? "#0a0a0a"
          : "#000000",
      }}
    > {/*"#d8bca0"*/}
      {/* Logo - Fixed at far left corner, appears on scroll */}
      <Link 
        href="/" 
        className={cn(
          "absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center transition-opacity duration-300",
          isScrolled ? "opacity-100 visible" : "opacity-100 visible" /*logo opacity-0 invisible*/
        )}
      >
        <Image
          src="/images/aiffalogo-bg.png"
          alt="AIFFA Logo"
          width={120} 
          height={40} 
          className="h-auto w-[100px] sm:w-[130px]"
          priority
        />
      </Link>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-base font-medium transition-colors duration-200",
                  isScrolled
                    ? "text-[#f7f2ed] hover:text-[#E6C15A]"
                    : "text-[#f7f2ed] hover:text-[#E6C15A]"
                )}
              > {/*"text-[#0a0a0a] hover:text-white"*/ }
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button - Fixed at far right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "lg:hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 transition-colors",
          isScrolled
            ? "text-champagne hover:text-primary"
            : "text-[#0a0a0a] hover:text-[#C9A84F]"
        )}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Contact Button - Fixed at far right */}
      <Link
        href="/contact"
        className="hidden lg:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 px-5 py-2 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-200"
      >
        Contact
      </Link>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border border-primary/10 shadow-lg transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-champagne/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-4 py-3 bg-primary text-primary-foreground text-center font-medium tracking-wide"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
