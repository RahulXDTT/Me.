'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ExperienceItem } from '@/components/experience-item'
import { EducationItem } from '@/components/education-item'
import { SocialLinks } from '@/components/social-links'
import { motion, AnimatePresence } from 'framer-motion'
import Subscribe from '@/components/Subscribe'
import MusicPlayer from '@/components/MusicPlayer'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 space-y-20">
          <section id="home" className="scroll-mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Hi, Rahul here
              </h1>
              <p className="text-lg text-muted-foreground">Here to learn, but mostly to complain frameworks.</p>
            </div>
            <Avatar className="w-40 h-40 border-2 border-primary/10">
              <AvatarImage src="/pp1.jpg" alt="Profile" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-background text-foreground">
      <MusicPlayer />
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <AnimatePresence>
          {/* Hero Section */}
          <motion.section 
            key="home"
            id="home"
            className="scroll-mt-16 flex flex-row items-center justify-between space-x-3 md:space-x-6 px-4 py-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="flex-1 space-y-1 md:space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                Hi, Rahul S. here
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">Error 404: Adulting not found.</p>
            </div>
            <Avatar className="w-20 h-20 md:w-32 md:h-32 border-2 border-primary/10">
              <AvatarImage src="/pp1.jpg" alt="Profile" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </motion.section>

          {/* About Section */}
          <motion.section 
            key="about"
            id="about"
            className="scroll-mt-16 space-y-3"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.25 }}
          >
            <h2 className="text-xl font-bold">About</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Learning never ends, that's what I love about it.</p>
              <p>I like technology and studying economy. </p>
              <p>I'm a keen observer of market trends. Specifically, the trend where my money disappears.</p>
              <p>I love staring blankly at a screen, yelling at my monitor, and occasionally writing functional code.</p>
            </div>
          </motion.section>

          {/* Work Experience Section */}
          <motion.section 
            key="experience"
            id="experience"
            className="scroll-mt-16 space-y-3"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold">Some places I worked at</h2>
            <div className="space-y-3">
              <ExperienceItem 
                key="Accenture" 
                company="Accenture"
                role="Packaged App Development Associate"
                period="May 2025 - Present"
                logoSrc="/accenture_logo.jpg"
                link="https://www.linkedin.com/company/accenture/posts/?feedView=all"
              />
              <ExperienceItem 
                key="Codebasics" 
                company="Codebasics"
                role="Data Analysis Virtual Internship"
                period="Feb 2025 - May 2025"
                logoSrc="/channels4_profile.jpg"
                link="https://www.linkedin.com/company/codebasics/"
              />
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section 
            key="education"
            id="education"
            className="scroll-mt-16 space-y-3"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.55 }}
          >
            <h2 className="text-xl font-bold">Education</h2>
            <div className="space-y-3">
              <EducationItem 
                key="Manipal University Jaipur(MUJ)" 
                school="Manipal University Jaipur(MUJ)"
                degree="Computer Science and Engineering"
                period="2022 - 2026"
                logoSrc="/muj.jpg"
                link="https://www.linkedin.com/school/manipal-university-jaipur/posts/?feedView=all"
              />

              <EducationItem 
                key="Indus Valley World School" 
                school="Indus Valley World School"
                degree="CBSE 12TH - 90.2%"
                period="2021 - 2022"
                logoSrc="/IVWS_LOGO.jpg"
                link="https://www.linkedin.com/school/indus-valley-world-school/"
              />

              <EducationItem 
                key="Indus Valley World School" 
                school="Indus Valley World School"
                degree="CBSE 10TH - 97.2%"
                period="2019 - 2020"
                logoSrc="/IVWS_LOGO.jpg"
                link="https://www.linkedin.com/school/indus-valley-world-school/"
              />
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            key="skills"
            id="skills"
            className="scroll-mt-16 space-y-3"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs py-1 px-2">React</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">Next.js</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">Typescript</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">Python</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">Pytorch</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">Postgres</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">C++</Badge>
              <Badge variant="secondary" className="text-xs py-1 px-2">Shitposting</Badge>
            </div>
          </motion.section>

          {/* Newsletter Section */}
          <motion.section 
            key="newsletter"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.85 }}
          >
            <Subscribe />
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            key="call-to-action"
            className="text-center space-y-2"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 1 }}
          >
            <div className="h-1 w-8 bg-primary/30 mx-auto rounded-full" />
            <p className="text-base md:text-lg font-poppins text-muted-foreground">
              say hello on{' '}
              <a
                href="https://twitter.com/RahulXDTT"
                className="
                  relative 
                  text-blue-500 
                  hover:text-white 
                  transition-colors duration-200 ease-in-out 
                  after:content-[''] 
                  after:absolute after:left-0 after:bottom-0 
                  after:h-[2px] after:w-0 after:bg-white 
                  after:transition-all after:duration-200 after:ease-in-out 
                  hover:after:w-full
                  font-poppins
                "
              >
                𝕏
              </a>
            </p>
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  )
}