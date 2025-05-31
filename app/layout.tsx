import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { FooterNavController } from '../components/footer-nav-controller'
import { HeaderNav } from '@/components/header-nav'
import { FloatingFooterNav } from '@/components/floating-footer-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahul | Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://RahulXDTT.dev',
    title: 'Rahul | Portfolio',
    description: 'Personal portfolio showcasing my work and skills',
    siteName: 'Rahul Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderNav />
          <FooterNavController>
            <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
              {children}
            </div>
          </FooterNavController>
          <FloatingFooterNav />
        </ThemeProvider>
      </body>
    </html>
  )
}