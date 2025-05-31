"use client"

import { Home, Laptop, Github, Linkedin, Twitter, Mail, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export function SocialLinks() {
  const socialLinks = [
    { name: 'Home', icon: <Home className="h-5 w-5" />, href: '/' },
    { name: 'Blog', icon: <Laptop className="h-5 w-5" />, href: '/blog' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:hello@example.com' },
    { name: 'Theme', icon: <Moon className="h-5 w-5" />, href: '#', onClick: () => {} },
  ]

  return (
    <TooltipProvider>
      <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm p-2 rounded-full">
        {socialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full h-10 w-10 bg-transparent hover:bg-muted transition-colors",
                )}
                asChild={!link.onClick}
                onClick={link.onClick}
              >
                {link.onClick ? (
                  <div>{link.icon}</div>
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
        ))}
      </div>
    </TooltipProvider>
  )
}