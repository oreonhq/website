import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/oreonlogo.png"
                alt="Oreon HQ"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm max-w-md">
              Software built for what comes next. Leading the development of
              the Oreon platform with a focus on long-term usability, real-world
              deployment, and sustainable growth.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/oreon"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  About Oreon
                </Link>
              </li>
              <li>
                <Link
                  href="/oreon/download"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="/structure"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  How Oreon is Built
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/2Yyacu58Ap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://forums.oreonproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Forums
                </a>
              </li>
              <li>
                <a
                  href="https://matrix.to/#/#oreonproject:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Matrix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/oreonproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oreon HQ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/legal"
              className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
