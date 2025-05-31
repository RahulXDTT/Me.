'use client'

import { useEffect, useState, forwardRef, Ref } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ThemeToggleProps {}

const ThemeToggle = forwardRef(function ThemeToggle(
  props: ThemeToggleProps,
  ref: Ref<HTMLButtonElement>
) {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleThemeToggle = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark')
      setIsAnimating(false)
    }, 300)
  }

  return (
    <motion.div
      animate={{ rotate: isAnimating ? 360 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn(
          "text-white p-2 rounded-full transition-all duration-200 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500",
        )}
        onClick={handleThemeToggle}
      >
        {currentTheme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </motion.div>
  )
})

export { ThemeToggle } 