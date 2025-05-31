"use client"

import React from 'react'
import { cn } from "@/lib/utils"
import { FloatingFooterNav } from './floating-footer-nav'

interface FooterNavControllerProps {
  children: React.ReactNode
}

export function FooterNavController({ children }: FooterNavControllerProps) {
  return (
    <>
      {children}

      <div className="relative bg-background/80 backdrop-blur-sm py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="h-1 w-8 bg-primary/30 mx-auto rounded-full" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-0 right-0 z-50">
        <FloatingFooterNav />
      </div>
    </>
  )
}