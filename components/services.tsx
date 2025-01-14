'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent } from '@/components/ui/card'
import { IconType } from 'react-icons'
import { FaCode, FaCogs, FaGlobe, FaMobileAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

interface Service {
  title: string
  icon: IconType
  description: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    icon: FaCode,
    description: 'Modern web solutions built with cutting-edge technologies for optimal performance and user experience.'
  },
  {
    title: 'Software Development',
    icon: FaCogs,
    description: 'Custom software solutions tailored to your specific business needs and objectives.'
  },
  {
    title: 'ERP & Digital Core',
    icon: FaGlobe,
    description: 'Enterprise solutions to streamline your operations and boost overall efficiency.'
  },
  {
    title: 'Mobile App Development',
    icon: FaMobileAlt,
    description: 'Innovative mobile applications for iOS and Android platforms to engage your audience on-the-go.'
  },
  {
    title: 'Cybersecurity Solutions',
    icon: FaShieldAlt,
    description: 'Robust security measures to protect your digital assets and ensure data integrity.'
  },
  {
    title: 'Data Analytics & BI',
    icon: FaChartLine,
    description: 'Advanced analytics and business intelligence tools to derive actionable insights from your data.'
  },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.service-card', 
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Empowering businesses with innovative solutions and cutting-edge technologies to drive growth and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-6 text-purple-600">
                    <service.icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

