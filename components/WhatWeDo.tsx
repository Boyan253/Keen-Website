import { Bot, TrendingUp, Shield, Users, Zap, BarChart3 } from 'lucide-react'

export default function WhatWeDo() {
  const features = [
    {
      icon: Bot,
      title: "AI Employees, Not Bots",
      description: "Task-specific agents that perform roles (customer support, order processing, claims triage, data entry) with SLA-level reliability."
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Typical outcomes include faster processing times, fewer errors, and lower operational spend."
    },
    {
      icon: Shield,
      title: "No IT Disruption",
      description: "Integrates with existing systems via APIs, connectors, or secure middleware."
    },
    {
      icon: Users,
      title: "Human-in-the-loop",
      description: "Safe escalation paths and supervised decisioning for high-risk cases."
    }
  ]

  const microcopy = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Reduce manual processing, enforce business rules, and eliminate repetitive errors."
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Faster responses, contextual answers, and consistent service 24/7."
    },
    {
      icon: BarChart3,
      title: "Operational Resilience",
      description: "Scale instantly without hiring; maintain performance during peak demand."
    }
  ]

  return (
    <section id="what-we-do" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keen Agents doesn't sell software — we deliver business outcomes. We sell the service of designing, training, and operating custom AI agents that behave like high-performing employees.
          </p>
        </div>

        {/* Core Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Microcopy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {microcopy.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <Bot className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
