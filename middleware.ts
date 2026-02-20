import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LOCALE_CODES, getLocaleFromRequest } from './lib/i18n/config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]

  if (LOCALE_CODES.includes(first)) {
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', first, { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return response
  }

  const locale = getLocaleFromRequest(request)
  const newUrl = request.nextUrl.clone()
  newUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|.*\\.(?:png|jpg|jpeg|gif|webp|ico|svg|zip)$).*)'],
}
