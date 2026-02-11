import Link from 'next/link'
import Image from 'next/image'
import { Download } from 'lucide-react'

const useCases = [
  'You want a Linux desktop that does not need constant tweaking after install.',
  'You prefer a GNOME setup that feels cleaner and more familiar out of the box.',
  'You want a smaller, less-bloated default experience.',
  'You need a stable base for long-term systems where change matters.',
]

const mainScreenshot = {
  src: '/oreon10-2.png',
  alt: 'Oreon 10 desktop screenshot',
}

export default function Oreon() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      <section
        className="relative overflow-hidden border-b border-black/5 min-h-[360px] md:min-h-[430px]"
      >
        <div className="absolute inset-0">
          <Image
            src="/oreon10.png"
            alt="Oreon 10 wallpaper background"
            fill
            className="object-cover blur-2xl scale-110 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 md:py-32 max-w-4xl animate-enterprise">
            <h1 className="hero-heading text-white mb-6">Oreon 10</h1>
            <p className="text-xl text-white/90 leading-relaxed font-light max-w-3xl">
              Oreon 10 is a stable and easy to use desktop OS for people who want a more user friendly RHEL® alternative.
            </p>
            <Link href="/oreon/download" className="btn-white inline-flex items-center gap-2 mt-10">
              <Download className="w-4 h-4" />
              Download Page
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <Image
          src={mainScreenshot.src}
          alt={mainScreenshot.alt}
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <div className="px-6 sm:px-10 md:px-14 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">Oreon 10 at a glance</h2>
            <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg text-white/95 font-light leading-relaxed marker:text-white">
              <li>Built on AlmaLinux 10, giving you an enterprise stable base with long-term support lasting until 2035.</li>
              <li>Uses a GNOME layout refined by us to feel familiar for users migrating from Windows or macOS, without the need for heavy customization. You can still customize it to your liking if you want to.</li>
              <li>Security lifecycle is planned from the release date starting December 12, 2024 through the 2035 EOS window for users who want to stay on the same OS for the full lifecycle. This means you can be sure that your system will be protected from security vulnerabilities for a long time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-12">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">What Oreon 10 actually is</h2>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#007b56] text-gray-700 text-lg font-light leading-relaxed">
                <li>Based on AlmaLinux 10 for a stable upstream base.</li>
                <li>Uses a GNOME layout styled by us to reduce the learning curve for users coming from other operating systems.</li>
                <li>Designed for daily usability first, not eye candy.</li>
                <li>Security lifecycle runs from December 12, 2024 to the EOS date in 2035.</li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Why people choose it</h2>
              <ul className="list-disc pl-6 space-y-4 marker:text-[#007b56] text-gray-700 text-lg font-light leading-relaxed">
                {useCases.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

          </article>
        </div>
      </section>

      <section className="enterprise-section pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-10 rounded-enterprise bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-gray-900">Get Oreon 10</h2>
            <p className="text-gray-600 font-light mb-6 max-w-3xl">
              Download the latest build of Oreon 10. Give it a try and see if it's the right fit for you. You can try it from a live USB before installing!
            </p>
            <Link href="/oreon/download" className="btn-oreon-gradient inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
