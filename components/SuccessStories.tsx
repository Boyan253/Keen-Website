import { Quote, TrendingUp, Clock, Users, CheckCircle } from 'lucide-react'

export default function SuccessStories() {
  const caseStudies = [
    {
      company: "Unimaster",
      background: "Unimaster struggled with high volumes of routine customer inquiries that overwhelmed the support desk during peak hours.",
      approach: "Deployed a customer-service AI agent trained on Unimaster's historical tickets, internal KB, and ERP product catalog. Implemented phased rollout with human fallback.",
      results: [
        { metric: "70%", description: "of inquiries automated within 8 weeks" },
        { metric: "85%", description: "reduction in average response time" },
        { metric: "12 points", description: "rise in customer satisfaction on NPS surveys" }
      ],
      quote: "Keen Agents allowed us to reclaim our team's time and dramatically improve response quality.",
      author: "Customer Service Director, Unimaster",
      icon: Users
    },
    {
      company: "Reno",
      background: "Reno faced slow back-office processing that created order fulfillment delays.",
      approach: "Built an order-processing agent that validated incoming orders, enriched records, and routed exceptions to human reviewers.",
      results: [
        { metric: "30%", description: "reduction in order processing time" },
        { metric: "25%", description: "drop in administrative cost in first 3 months" },
        { metric: "40%", description: "fall in error rate" }
      ],
      quote: "ROI was visible within weeks — the integration was seamless and low-risk.",
      author: "Operations Director, Reno",
      icon: TrendingUp
    }
  ]

  const testimonials = [
    {
      quote: "Keen Agents transformed how we operate — their agents are reliable and require minimal oversight.",
      author: "Executive, Unimaster"
    },
    {
      quote: "Fast ROI, no IT drama, measurable impact.",
      author: "Operations Director, Reno"
    }
  ]

  return (
    <section id="success-stories" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how our AI agents deliver measurable impact.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <study.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {study.company}
                    </h3>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Background</h4>
                    <p className="text-gray-600">{study.background}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Approach</h4>
                    <p className="text-gray-600">{study.approach}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-primary-600 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Quote className="w-8 h-8 text-primary-600 mb-4" />
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "{study.quote}"
                  </blockquote>
                  <cite className="text-sm text-gray-500">
                    — {study.author}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Pull-quotes */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <blockquote className="text-lg text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-gray-500">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get Similar Results</span>
            <CheckCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
