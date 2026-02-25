"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-0 transition-all duration-500",
        isScrolled 
          ? "shadow-lg shadow-black/20 backdrop-blur-xl" 
          : "shadow-none"
      )}
      style={{
        background: isScrolled
          ? "rgba(10, 10, 10, 0.85)"
          : "rgba(0, 0, 0, 0.95)",
      }}
    > {/*"#d8bca0"*/}
      {/* Logo - Fixed at far left corner, appears on scroll */}
      <Link 
        href="/" 
        className={cn(
          "absolute left-4 sm:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center transition-all duration-500",
          isScrolled ? "opacity-100 visible scale-100" : "opacity-100 visible scale-100" /*logo opacity-0 invisible scale-95*/
        )}
      >
        <Image
          src="/images/aiffalogo-bg.png"
          alt="AIFFA Logo"
          width={120} 
          height={40} 
          className="h-auto w-[100px] sm:w-[130px] xl:w-[140px] transition-all duration-300"
          priority
        />
      </Link>
      
      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex h-16 items-center justify-end">
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-3 text-sm xl:text-base font-medium tracking-wide transition-all duration-300 group",
                    isActive
                      ? "text-[#E6C15A]"
                      : isScrolled
                        ? "text-[#f7f2ed] hover:text-[#E6C15A]"
                        : "text-[#f7f2ed] hover:text-[#E6C15A]"
                  )}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span 
                    className={cn(
                      "absolute bottom-2 left-4 right-4 h-[2px] bg-gradient-to-r from-[#E6C15A] to-[#C9A84F] transition-all duration-300",
                      isActive 
                        ? "opacity-100 scale-x-100" 
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button - Fixed at far right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "lg:hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-md transition-all duration-300",
          isScrolled
            ? "text-champagne hover:text-[#E6C15A] hover:bg-[#E6C15A]/10"
            : "text-champagne hover:text-[#E6C15A] hover:bg-[#E6C15A]/10"
        )}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
        ) : (
          <Menu className="w-6 h-6 transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-[#E6C15A]/20 shadow-2xl transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        )}
      >
        <div className="px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium tracking-wide rounded-md transition-all duration-200",
                  isActive
                    ? "text-[#E6C15A] bg-[#E6C15A]/10 border-l-2 border-[#E6C15A]"
                    : "text-champagne/80 hover:text-[#E6C15A] hover:bg-[#E6C15A]/5 hover:border-l-2 hover:border-[#E6C15A]/50"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
