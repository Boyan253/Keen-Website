'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [showVariation, setShowVariation] = useState(false)

  const primaryHero = {
    headline: "Meet Your New AI Employees — Always-on, Cost-effective, and Built for Your Business",
    subheadline: "Keen Agents builds bespoke AI agents — digital employees trained to run your repeatable processes, reduce operational costs, and free your team to focus on growth.",
    supportLine: "Proven impact: 30% faster order processing • 70% automated inquiries • 25% back-office cost reduction",
    primaryCta: "Book a Free Consultation",
    secondaryCta: "Take the AI Readiness Questionnaire"
  }

  const variationHero = {
    headline: "Practical AI, Real Results — No IT Overhaul Required",
    subheadline: "We deploy AI agents that work with your existing systems and processes. No rip-and-replace. No vendor lock-in. Just measurable improvements and continuous support.",
    primaryCta: "Book a Free Consultation"
  }

  const currentHero = showVariation ? variationHero : primaryHero

  return (
    <section className="brand-gradient section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-sm font-medium text-brand-blue bg-white/20 px-3 py-1 rounded-full inline-block">
                AI-Powered Business Automation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {currentHero.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {currentHero.subheadline}
              </p>
            </div>

            {/* Support line for primary hero */}
            {!showVariation && (
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>30% faster order processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>70% automated inquiries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>25% back-office cost reduction</span>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>{currentHero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              {!showVariation && (
                <a
                  href="#ai-readiness"
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <span>{currentHero.secondaryCta}</span>
                </a>
              )}
            </div>

            {/* Hero variation toggle */}
            <div className="pt-4">
              <button
                onClick={() => setShowVariation(!showVariation)}
                className="text-sm text-primary-600 hover:text-primary-700 underline"
              >
                {showVariation ? 'Show primary message' : 'Show risk-averse message'}
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Watch Our Demo
                  </h3>
                  <p className="text-gray-600">
                    See how our AI agents work in real business scenarios
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Customer Support Agent</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Processing 247 tickets today
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Order Processing Agent</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      $2.3M orders processed this month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
