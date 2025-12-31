export default function Legal() {
  return (
    <div>
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Legal</h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Privacy policy, terms of use, and trademark information for Oreon and related entities.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="space-y-8">
          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">In-OS Data Collection</h3>
                <p className="mb-2">
                  Oreon does not collect in-OS data. We do not track user activity, system usage, or any personal information within the operating system itself.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Download Tracking</h3>
                <p className="mb-2">
                  Starting with Oreon 11, we do not track individual downloads. However, we do monitor Cloudflare download size sent out per month for infrastructure and bandwidth management purposes. This tracking is limited to aggregate data and does not identify individual users or their download patterns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Website Usage</h3>
                <p className="mb-2">
                  This website may use standard web analytics to understand site usage patterns. No personally identifiable information is collected through these analytics.
                </p>
              </div>
            </div>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-6">Terms of Use</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Use License</h3>
                <p className="mb-2">
                  Permission is granted to temporarily access the materials on Oreon HQ&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Restrictions</h3>
                <p className="mb-2">You may not:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Disclaimer</h3>
                <p>
                  The materials on Oreon HQ&apos;s website are provided on an &apos;as is&apos; basis. Oreon HQ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Limitations</h3>
                <p>
                  In no event shall Oreon HQ or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
                </p>
              </div>
            </div>
          </section>

          <section className="p-10 border border-gray-200 bg-white rounded-md">
            <h2 className="text-3xl font-semibold mb-6">Trademarks</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Oreon, Oreon HQ, and all related marks, logos, product names, and service names are trademarks of their respective owners.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Trademark Ownership</h3>
                <p className="mb-2">
                  All trademarks, service marks, and trade names used on this website are the property of their respective owners. Use of any trademark without the express written consent of the trademark owner is strictly prohibited.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Use of Trademarks</h3>
                <p className="mb-2">
                  You may not use any Oreon trademarks, logos, or other proprietary graphics without prior written permission. Any unauthorized use of trademarks may violate trademark, copyright, and other applicable laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Third-Party Trademarks</h3>
                <p>
                  Any third-party trademarks mentioned on this website are the property of their respective owners and are used for identification purposes only.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
