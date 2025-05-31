'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic check before sending
    if (!email.trim()) {
      setMessage('Please enter your email')
      setIsError(true)
      return
    }

    setSubmitting(true)
    setMessage(null)
    setIsError(false)

    try {
      const trimmedEmail = email.trim()
      console.log('Sending subscription request for:', trimmedEmail)
      
      // Create the request body
      const requestBody = JSON.stringify({ email: trimmedEmail })
      console.log('Request body:', requestBody)
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      })

      console.log('Received response:', response.status)
      
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok || !data.success) {
        // API responded with success: false or 4xx/5xx status
        setIsError(true)
        setMessage(data.message || 'Subscription failed')
      } else {
        // success
        setIsError(false)
        setMessage(data.message || 'Subscribed successfully!')
        setEmail('')
      }
    } catch (err) {
      console.error('Network error subscribing:', err)
      setIsError(true)
      setMessage('Network or server error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="space-y-6 text-center">
      <h2 className="text-2xl font-bold">Stay Updated</h2>
      <p className="text-muted-foreground">Subscribe to my email list. I do not spam, ever.</p>
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
        <Input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitting}
          className="bg-background/50" 
        />
        <Button 
          type="submit" 
          variant="secondary"
          disabled={submitting}
        >
          {submitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {message && (
        <p className={`mt-4 ${isError ? 'text-red-500' : 'text-white'}`}>
          {message}
        </p>
      )}
    </section>
  )
} 