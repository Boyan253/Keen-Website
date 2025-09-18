import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center p-2 shadow-lg">
                <img
                  src="/keen-logo.webp"
                  alt="Keen Agents Logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-2xl font-bold">
                Keen Agents
              </div>
            </div>
            <p className="text-gray-300">
              Building custom AI agents that work like digital employees to automate your business processes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#what-we-do" className="hover:text-white transition-colors">AI Agent Development</a></li>
              <li><a href="#how-we-do-it" className="hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#success-stories" className="hover:text-white transition-colors">Customer Support AI</a></li>
              <li><a href="#success-stories" className="hover:text-white transition-colors">Order Processing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#ai-readiness" className="hover:text-white transition-colors">AI Readiness Quiz</a></li>
              <li><a href="#success-stories" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@keenagents.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Keen Agents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
