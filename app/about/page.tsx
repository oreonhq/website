import Link from 'next/link'

export default function About() {
  return (
    <div className="theme-light pt-[56px] min-h-screen bg-white">
      {/* Restore the standard header layout */}
      <section className="bg-[#f8fafc] border-b border-black/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-heading text-black mb-6">Our Vision.</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light">
              Oreon HQ bridges the gap between community-led development and enterprise deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Simplified blog-post-like content */}
      <main className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <article>
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight italic">
              For the Community, by the Experts.
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              We believe that open source is the future of computing. We leverage enterprise backing to fund the Oreon Project, so that FOSS development remains stable, effective, and accessible to community members and the users without taking away digital privacy.
            </p>

            <div className="h-px bg-black/5 w-full my-12" />

            <p className="text-gray-600 leading-relaxed font-light">
              By providing noticeable OS support timelines and end of support dates, we allow organizations to deploy without stress.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
