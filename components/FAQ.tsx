'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Shield, Users, Settings, HelpCircle, Clock } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do you secure our data?",
      answer: "Security is non-negotiable. We employ industry-standard encryption (TLS in transit, AES-256 at rest), role-based access control, audit logs, and tenant isolation for multi-client environments. We can operate within private VPCs, support on-prem deployments, or use cloud-hosted models under strict data governance rules. We provide SOC2 / ISO controls upon request and support data residency requirements.",
      icon: Shield
    },
    {
      question: "Will this change our processes or require retraining staff?",
      answer: "Our approach prioritises minimal disruption. We map current processes and design agents to slot into existing workflows. Where change is required, we provide clear change-management plans, role-based training sessions, and operator runbooks. We recommend a 'train the trainer' model to accelerate adoption.",
      icon: Users
    },
    {
      question: "Do we need to upgrade our IT infrastructure?",
      answer: "In most cases — no. Our agents integrate via APIs, webhooks, or lightweight connectors. When complex legacy systems require adapters, we build secure middleware. We produce an integration matrix during discovery to estimate effort and provide options for SaaS, hybrid, or on-prem architectures.",
      icon: Settings
    },
    {
      question: "How do you manage errors and edge cases?",
      answer: "We implement human-in-the-loop workflows, clear escalation rules, and confidence thresholds to prevent incorrect automation. Every agent has audit trails and can be placed into monitoring mode where low-confidence decisions are routed to a human reviewer until sufficient confidence is reached.",
      icon: HelpCircle
    },
    {
      question: "What SLAs & support do you offer?",
      answer: "We offer SLAs for uptime, response times for incidents, and scheduled optimization windows. Support tiers are flexible — from knowledge transfer to fully managed operations where Keen Agents runs and optimizes the agent on your behalf.",
      icon: Clock
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Addressing enterprise concerns about AI implementation, security, and integration.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Schedule a consultation to discuss your specific needs and concerns.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <HelpCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
