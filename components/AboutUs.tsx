import { User, Award, Target, Users } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  const leadership = [
    {
      name: "Petar Denev",
      role: "Executive Sponsor & Strategy",
      bio: "30+ years leading technology and digital transformation programs across enterprise and mid-market organisations. Career highlights: defined and ran multi-country operations transformations; led integrations at scale; strong experience in data governance and change management.",
      responsibilities: "Aligns AI programs with business KPIs and stakeholder governance"
    },
    {
      name: "Vic [Last Name]",
      role: "Chief Technology & Product",
      bio: "AI systems architect and product leader with experience deploying automation at scale. Career highlights: led ML engineering teams, productionized NLP and RPA hybrid solutions, and built resilient integration layers.",
      responsibilities: "Drives engineering, product strategy, and operational excellence"
    }
  ]

  const companyValues = [
    {
      icon: Target,
      title: "Outcome-Focused",
      description: "We focus on delivering measurable business results rather than technical experiments."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, not just a vendor."
    },
    {
      icon: Award,
      title: "Proven Experience",
      description: "Decades of combined experience in enterprise technology and applied AI."
    }
  ]

  return (
    <section id="about-us" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keen Agents was founded to bridge the gap between AI research and practical business impact. Our leadership combines decades of enterprise technology, process engineering, and applied AI.
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on delivering outcomes rather than experiments. Our team brings together deep expertise in enterprise technology, process engineering, and applied AI to create solutions that work in the real world.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {leader.name}
                    </h4>
                    <p className="text-primary-600 font-semibold">
                      {leader.role}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Background</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Role at Keen Agents</h5>
                    <p className="text-gray-600 text-sm">
                      {leader.responsibilities}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
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
            <span>Work With Us</span>
            <Users className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
