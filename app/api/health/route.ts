import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test WordPress connection using service name
    const wordpressUrl = 'http://wordpress/cms'
    const response = await fetch(wordpressUrl, {
      method: 'HEAD',
    }).catch(() => null)

    const wordpressStatus = response ? 'connected' : 'disconnected'
    const wordpressStatusCode = response?.status || 0

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'hire-dedicated-flutter-developer',
      wordpress: {
        status: wordpressStatus,
        statusCode: wordpressStatusCode,
        url: wordpressUrl,
      },
      environment: process.env.NODE_ENV,
      port: process.env.PORT,
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        service: 'hire-dedicated-flutter-developer',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}