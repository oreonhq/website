import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#121214] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-10 transition-opacity hover:opacity-70">
              <Image
                src="/oreonlogo.png"
                alt="Oreon HQ"
                width={180}
                height={56}
                className="h-[40px] w-auto invert brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-base leading-relaxed max-w-sm font-light">
              One OS. Built for what comes next.
            </p>
          </div>

          <div>
            <h4 className="text-white/50 font-bold mb-8 text-xs uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4">
              {[
                { name: 'Oreon OS', href: '/oreon' },
                { name: 'Downloads', href: '/oreon/download' },
                { name: 'Governance', href: '/structure' },
                { name: 'About HQ', href: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 font-bold mb-8 text-xs uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: 'Community Forums', href: 'https://github.com/orgs/oreonproject/discussions' },
                { name: 'Oreon Project GitHub', href: 'https://github.com/oreonproject' },
                { name: 'Oreon HQ GitHub', href: 'https://github.com/oreonhq' },
                { name: 'Press & Media', href: '/press' },
                { name: 'Legal Center', href: '/legal' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Oreon HQ. All rights reserved.
          </p>
          <div className="flex space-x-12">
            <Link
              href="/legal"
              className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Privacy & Terms
            </Link>
            <Link
              href="/contact"
              className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
