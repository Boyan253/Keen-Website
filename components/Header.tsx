'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'How We Do It', href: '#how-we-do-it' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'About Us', href: '#about-us' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center p-2 shadow-lg">
              <img
                src="/keen-logo.webp"
                alt="Keen Agents Logo"
                className="w-full h-full object-contain filter brightness-0 invert"
                onError={(e) => {
                  console.log('Image failed to load:', e);
                }}
              />
            </div>
            <div className="text-2xl font-bold gradient-text">
              Keen Agents
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#ai-readiness"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              AI Readiness Quiz
            </a>
            <a
              href="#contact"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="#ai-readiness"
                  className="block text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  AI Readiness Quiz
                </a>
                <a
                  href="#contact"
                  className="btn-primary w-full text-center"
                >
                  Book Consultation
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
