import { Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Contact</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Get in touch with Oreon HQ for partnerships, OEM engagement, press inquiries, and general questions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="space-y-12">
          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Reach Oreon HQ regarding:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-gray-700 text-lg mr-3">•</span>
                <span className="text-gray-700 text-lg">General inquiries</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 text-lg mr-3">•</span>
                <span className="text-gray-700 text-lg">Partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 text-lg mr-3">•</span>
                <span className="text-gray-700 text-lg">OEM engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 text-lg mr-3">•</span>
                <span className="text-gray-700 text-lg">Press</span>
              </li>
            </ul>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-700 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:support@oreonhq.com" className="text-blue-700">
                    support@oreonhq.com
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-medium text-gray-900 mb-4">Community Support</p>
                <p className="text-gray-600 mb-4">
                  For community support, join the Discord or forums (links available in the footer).
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://discord.gg/2Yyacu58Ap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Discord
                  </a>
                  <a 
                    href="https://forums.oreonproject.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Forums
                  </a>
                  <a 
                    href="https://matrix.to/#/#oreonproject:matrix.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Matrix
                  </a>
                  <a 
                    href="https://github.com/oreonproject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
