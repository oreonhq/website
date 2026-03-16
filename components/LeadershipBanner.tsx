const PL_ELECTION_URL = 'https://community.oreonhq.com/t/oreon-pl-election-2026/25'

export default function LeadershipBanner() {
  return (
    <div className="w-full bg-[#001457] text-white px-4 py-3 text-center text-sm font-light leading-relaxed">
      <p className="max-w-4xl mx-auto">
        We are beginning the process of selecting a new Project Leader. Current leadership will step down once a new
        Project Leader has been chosen. The new leader will take over governance and direction of the project. BoostyConnect
        Technologies will continue to operate the Oreon legal entity and infrastructure, but will not participate in project
        governance or project leadership decisions.{' '}
        <a
          href={PL_ELECTION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:opacity-90"
        >
          See here
        </a>{' '}
        for more information.
      </p>
    </div>
  )
}
