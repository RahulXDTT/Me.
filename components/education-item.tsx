"use client"

// Added hover-scale, background change, and arrow icon appear on hover.
// Wrapped in Next.js Link for client-side navigation.

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface EducationItemProps {
  school: string;
  degree: string;
  period: string;
  logoSrc: string;
  link: string;    // URL to navigate on click
}

export function EducationItem({ school, degree, period, logoSrc, link }: EducationItemProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12 border border-border bg-card transition-all duration-300">
            <AvatarImage src={logoSrc} alt={school || 'School'} />
            <AvatarFallback>{school ? school.charAt(0).toUpperCase() : 'S'}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
            <h3 className="font-medium">{school || 'School'}</h3>
          <p className="text-sm text-muted-foreground">{degree}</p>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{period}</span>
    </div>
    )
  }

  return (
    <Link href={link} className="block">
      <motion.div 
        className="flex items-center justify-between group p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 ease-out hover:scale-105"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 border border-border bg-card transition-all duration-300">
            <AvatarImage src={logoSrc} alt={school || 'School'} />
            <AvatarFallback>{school ? school.charAt(0).toUpperCase() : 'S'}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 relative">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{school || 'School'}</h3>
              <ChevronRight 
                className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0" 
              />
            </div>
            <p className="text-sm text-muted-foreground">{degree}</p>
          </div>
        </div>
        <span className="text-sm text-muted-foreground">{period}</span>
      </motion.div>
    </Link>
  )
}