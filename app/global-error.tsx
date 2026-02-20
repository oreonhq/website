'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', padding: '2rem', background: '#fafafa' }}>
        <div style={{ maxWidth: '28rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>Something went wrong</h1>
          <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{error.message}</p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: '0.5rem 1rem',
              background: '#007b56',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
