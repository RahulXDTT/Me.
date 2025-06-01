"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  logoSrc: string;
  link: string;
}

export function ExperienceItem({ company, role, period, logoSrc, link }: ExperienceItemProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12 border border-border bg-card transition-all duration-300">
          <AvatarImage src={logoSrc} alt={company} />
          <AvatarFallback>{company.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-medium">{company}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{period}</span>
    </div>
    )
  }

  return (
    <Link href={link} className="block">
      <motion.div 
        className="flex items-center justify-between group p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200 ease-out hover:scale-105"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border border-border bg-card transition-all duration-300">
            <AvatarImage src={logoSrc} alt={company} />
            <AvatarFallback>{company.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5 relative">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-medium">{company}</h3>
              <ChevronRight 
                className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0" 
              />
            </div>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{period}</span>
      </motion.div>
    </Link>
  )
}