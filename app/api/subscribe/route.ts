import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  console.log('🚀 API route called - /api/subscribe')
  
  try {
    console.log('📥 Attempting to parse request body...')
    const body = await request.json()
    console.log('📋 Parsed body:', body)
    
    const { email } = body
    console.log('📧 Extracted email:', email)

    // Validate email exists
    if (!email) {
      console.log('❌ No email provided')
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email is string
    if (typeof email !== 'string') {
      console.log('❌ Email is not a string:', typeof email)
      return NextResponse.json(
        { success: false, message: 'Email must be a valid string' },
        { status: 400 }
      )
    }

    // Basic email validation
    if (!EMAIL_REGEX.test(email.trim())) {
      console.log('❌ Invalid email format:', email)
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    console.log('✅ Email validation passed for:', email.trim())

    // TODO: Add your actual subscription logic here
    // For now, just simulate success
    console.log('💾 Processing subscription (simulated)...')
    
    // Simulate some async work
    await new Promise(resolve => setTimeout(resolve, 100))
    
    console.log('🎉 Subscription successful!')

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the newsletter!'
    })

  } catch (error) {
    console.error('💥 Error in subscribe API:', error)
    console.error('📍 Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed. Use POST.' },
    { status: 405 }
  )
}