'use client'

import { Shield, Settings, Box, Terminal } from 'lucide-react'

const fleetFeatures = [
  {
    icon: Shield,
    title: "Proactive Security",
    desc: "Automated security monitoring and quick response to security incidents to ensure your infrastructure is always protected."
  },
  {
    icon: Settings,
    title: "Policy Enforcement",
    desc: "Enforce security policies, permissions, and update frequencies with an easy to use interface for thousands of devices."
  },
  {
    icon: Terminal,
    title: "Transparent Health",
    desc: "Deep device status information and health monitoring without the fuss. Transparent, real-time insights into every layer of your device fleet."
  }
]

export default function StackedFleetManager() {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6 py-12">
      {fleetFeatures.map((feature, i) => (
        <div
          key={i}
          className="p-10 border border-black/5 bg-white rounded-[24px] flex flex-col md:flex-row items-start md:items-center gap-10"
        >
          <div className="w-16 h-16 bg-gray-50 border border-black/5 rounded-2xl flex items-center justify-center flex-shrink-0">
            <feature.icon className="w-8 h-8 text-[#007b56]" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{feature.title}</h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
