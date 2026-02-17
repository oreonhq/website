import Link from 'next/link'
import { Users, Code2, Heart, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export default function About() {
  const values = [
    {
      icon: Code2,
      title: 'Open by default',
      desc: 'Code is public. You can fork it, read it, or contribute.',
    },
    {
      icon: Heart,
      title: 'Upstream love',
      desc: 'We send changes back to upstream projects when we can.',
    },
    {
      icon: ShieldCheck,
      title: 'Support timelines',
      desc: 'We are clear about when support for our releases end. Check the docs.',
    },
    {
      icon: Users,
      title: 'Community-led',
      desc: 'Feedback and contributors help decide what we do next.',
    },
  ]

  const getInvolved = [
    {
      icon: GitHubIcon,
      title: 'Code and packages',
      desc: 'Most of our code is on GitHub.',
      href: 'https://github.com/oreonhq',
      external: true,
    },
    {
      icon: MessageCircle,
      title: 'Help and support',
      desc: 'Get help or talk to other users.',
      href: '/help',
      external: false,
    },
  ]

  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-6">Our Community</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Oreon is built by people who are involved in the Linux/FOSS community.
            </p>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">What we believe</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              This is how we build Oreon and work with the rest of FOSS.
            </p>
          </div>
          <div className="rounded-xl py-16 px-8 sm:px-12" style={{ background: 'var(--oreon-gradient)' }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((item, i) => (
                <div key={i} className="p-6 rounded-xl">
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="enterprise-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Get involved</h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Contribute code, get support, or just see what’s going on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {getInvolved.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="flex gap-6 p-6 rounded-xl bg-white"
              >
                <item.icon className="w-10 h-10 text-[#007b56] flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#007b56]">
                    {item.external ? 'GitHub' : 'Help'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
            Transparency
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light">
            We publish our code and contribute back where we can.
          </p>
          <p className="text-gray-600 leading-relaxed font-light">
            We also publish support timelines on the documentation so you know when support ends.
          </p>
        </div>
      </section>
    </div>
  )
}
