'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
]

export function HeaderNav() {
  const [activeLink, setActiveLink] = useState('#home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || '#home')
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId || 'top')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
      setActiveLink(href)
    }
  }

  return (
    <motion.nav 
      className="fixed top-4 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-background/50 backdrop-blur-md rounded-full px-4 py-2 flex justify-center items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                activeLink === item.href && "text-foreground"
              )}
            >
              {item.name}
              {activeLink === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </a>
          ))}
        </div>
        <motion.div
          className="h-0.5 bg-primary/30 mt-2"
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </div>
    </motion.nav>
  )
} 