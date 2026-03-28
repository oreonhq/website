import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ 'm.server': 'chat.oreonhq.com:443' })
}
