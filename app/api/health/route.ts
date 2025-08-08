import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      service: 'hire-dedicated-flutter-developer'
    },
    { status: 200 }
  )
}