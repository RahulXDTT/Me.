"use client"

import { Home, Laptop, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function FloatingFooterNav() {
  const socialLinks = [
    { name: 'Home', icon: <Home className="h-5 w-5" />, href: '/', isInternal: true },
    { name: 'Blog', icon: <Laptop className="h-5 w-5" />, href: 'https://medium.com/@Rahul_Samajpati', isInternal: true },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/RahulXDTT', isInternal: false },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/rahul-samajpati-7251222b3/', isInternal: false },
    { name: 'Twitter', icon: <span className="h-5 w-5 flex items-center justify-center">𝕏</span>, href: 'https://x.com/RahulXDTT', isInternal: false },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:25srahulmain2004@gmail.com', isInternal: false },
  ]

  return (
    <TooltipProvider>
      <motion.div 
        className="fixed bottom-4 left-0 right-0 flex justify-center z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="inline-flex items-center bg-black/30 dark:bg-white/30 backdrop-blur-md rounded-full px-6 py-2">
        {socialLinks.map((link) => (
            <div key={link.name} className="mx-1 transition-all duration-200 ease-out hover:mx-3">
              <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                      "text-white dark:text-black p-2 rounded-full transition-all duration-200 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500",
                )}
                    asChild
              >
                    {link.isInternal ? (
                      <Link href={link.href} className="flex items-center justify-center">
                        {link.icon}
                      </Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
            </div>
        ))}
          <div className="mx-1 transition-all duration-200 ease-out hover:mx-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
      </div>
        </nav>
      </motion.div>
    </TooltipProvider>
  )
}