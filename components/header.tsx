'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from '@/public/logo.png';
const services = [
  {
    name: "Web Development",
    href: "/web-design"
  },
  {
    name: "Software Development",
    href: "/software-development"
  },
  {
    name: "UI/UX Design",
    href: "/ui-ux-design"
  },
  {
    name: "Graphic Design",
    href: "/graphic-design"
  },
  {
    name: "Mobile App Development",
    href: "/mobile-app-development"
  }
]

const navItems = [
  { name: "We Do", href: "/we-do" },
  { name: "Product", href: "/product" },
  { name: "Portfolio", href: "/portfolio" },

  { name: "Hire Developer", href: "/hire" },
  { name: "Contact Us", href: "/contact" }
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.dropdown')) {
        setShowServicesDropdown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setShowServicesDropdown(false)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Barbey Tech"
            width={150}
            height={40}
            className="w-[150px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="dropdown relative">
            <button
              onClick={() => setShowServicesDropdown(prev => !prev)}
              className="hover:text-gray-200 transition duration-200"
            >
              Services ▼
            </button>
            {showServicesDropdown && (
              <div className="absolute top-full mt-2 w-[200px] left-0 bg-purple-600 text-white p-4 space-y-2 shadow-md rounded-md">
                {services.map(service => (
                  <Link
                    href={service.href}
                    key={service.name}
                    className="block hover:text-gray-200 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {navItems.map(item => (
            <Link
              href={item.href}
              key={item.name}
              className="hover:text-gray-200 transition-colors"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
          
          <Link 
            href="/profile"
            className="hover:text-gray-200 transition-colors"
          >
            <User className="w-6 h-6" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-600 px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <div className="dropdown">
              <button
                onClick={() => setShowServicesDropdown(prev => !prev)}
                className="flex justify-between items-center w-full text-left hover:text-gray-200"
              >
                Services
                <span className={`transform transition-transform duration-200 ${
                  showServicesDropdown ? "rotate-180" : ""
                }`}>
                  ▼
                </span>
              </button>
              {showServicesDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map(service => (
                    <Link
                      href={service.href}
                      key={service.name}
                      className="block hover:text-gray-200 transition-colors"
                      onClick={handleLinkClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {navItems.map(item => (
              <Link
                href={item.href}
                key={item.name}
                className="hover:text-gray-200 transition-colors"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/profile"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              onClick={handleLinkClick}
            >
              <User className="w-6 h-6" />
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

