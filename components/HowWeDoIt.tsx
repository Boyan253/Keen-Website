import { Search, Map, Wrench, Rocket, Settings, CheckCircle, User, Users } from 'lucide-react'

export default function HowWeDoIt() {
  const phases = [
    {
      phase: "Phase 0",
      title: "Pre-Qualification",
      description: "Rapidly identify high-impact opportunities and establish feasibility.",
      deliverables: ["AI Readiness scorecard", "Prioritized use-case list", "Executive brief"],
      timing: "1 week",
      icon: Search
    },
    {
      phase: "Phase 1",
      title: "Discovery & Process Mapping",
      description: "Deeply understand workflows, data sources, decision points, and KPIs.",
      deliverables: ["Process maps", "Success metrics", "Data inventory", "Integration matrix"],
      timing: "1–2 weeks",
      icon: Map
    },
    {
      phase: "Phase 2",
      title: "Agent Design & Prototype",
      description: "Build a narrow-scope prototype agent (MVP) that automates a clearly scoped task.",
      deliverables: ["Prototype agent", "Test cases", "Sandbox connector(s)"],
      timing: "2–4 weeks",
      icon: Wrench
    },
    {
      phase: "Phase 3",
      title: "Integration & Pilot",
      description: "Deploy the agent into a controlled pilot with live data and monitored SLAs.",
      deliverables: ["Pilot deployment", "Monitoring dashboard", "Pilot report with ROI analysis"],
      timing: "2–6 weeks",
      icon: Rocket
    },
    {
      phase: "Phase 4",
      title: "Scale & Operate",
      description: "Roll the agent into production, document runbooks, and hand over an operations model.",
      deliverables: ["Production rollout", "Training materials", "Performance SLA", "Continuous optimization plan"],
      timing: "Ongoing",
      icon: Settings
    }
  ]

  const roles = [
    {
      role: "Client",
      responsibilities: ["Provide access to subject-matter experts", "Approve process maps", "Participate in pilot acceptance"],
      icon: User
    },
    {
      role: "Keen Agents",
      responsibilities: ["Project manager", "Data engineer", "ML engineer", "Integration engineer", "Domain specialist"],
      icon: Users
    }
  ]

  return (
    <section id="how-we-do-it" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Do It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our five-phase, low-friction program is engineered for speed and safety. Each phase maps to deliverables and acceptance criteria.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-primary-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Phase Icon */}
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Phase Content */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {phase.phase}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0">
                      Timing: {phase.timing}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {phase.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center space-x-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roles & Responsibilities */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Who Does What
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <role.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {role.role}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {role.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Start Your AI Journey</span>
            <Rocket className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
