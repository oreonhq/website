import { Shield, Settings, Terminal } from 'lucide-react'

const fleetFeatures = [
  {
    icon: Shield,
    title: "Security Control",
    desc: "Automated security monitoring and quick response to security incidents to ensure your infrastructure is always protected.",
    gradient: "from-emerald-700 to-teal-800",
    tileClass: "col-span-1 row-span-2 min-h-[420px]"
  },
  {
    icon: Settings,
    title: "Policy Enforcement",
    desc: "Enforce security policies, permissions, and update frequencies with an easy to use interface for thousands of devices.",
    gradient: "from-blue-700 to-indigo-800",
    tileClass: "col-span-1 row-span-1 min-h-[280px]"
  },
  {
    icon: Terminal,
    title: "Transparent Health",
    desc: "Deep device status information and health monitoring without the fuss. Transparent, real-time insights into every layer of your device fleet.",
    gradient: "from-gray-800 to-gray-950",
    tileClass: "col-span-1 row-span-1 min-h-[280px]"
  }
]

export default function StackedFleetManager() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 grid-rows-[auto_auto] max-w-7xl mx-auto">
        {fleetFeatures.map((feature, i) => (
          <div
            key={i}
            className={`rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.tileClass} p-8 md:p-10 lg:p-12 flex flex-col justify-center`}
          >
            <div className="flex flex-col h-full justify-center">
              <feature.icon className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white flex-shrink-0 mb-6" strokeWidth={1.75} />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-white/95 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
