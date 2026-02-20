'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="theme-light min-h-screen flex items-center justify-center bg-[#fafafa] p-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-600 text-sm mb-6">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 bg-[#007b56] text-white rounded-lg font-medium hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
