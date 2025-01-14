'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ParticleBackground } from './ParticleBackground'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -200])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden py-16 md:py-0 bg-gradient-to-b from-blue-900 to-black">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y }}
          className="max-w-2xl space-y-8"
        >
          <motion.div 
            className="flex items-center gap-2 text-cyan-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="w-8 h-[2px] bg-cyan-400" />
            <span>Welcome to Barbey Tech</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Smart Solutions for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Connected World</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Empowering businesses with cutting-edge technology solutions. From AI-driven analytics to IoT integration, we're shaping the future of digital innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:opacity-90 transition-all hover:scale-105 duration-300 text-black font-semibold"
            >
              Explore Our Solutions
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, repeat: Infinity, repeatType: 'reverse' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

