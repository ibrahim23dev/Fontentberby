'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const projects = [
  {
    title: 'Adbiyas Tour',
    description: 'Travel booking platform with flight and tour management',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Web Application',
    link: '#'
  },
  {
    title: 'Adbiyas Solution',
    description: 'Digital marketing strategy and consultation services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Marketing',
    link: '#'
  },
  {
    title: 'Adbiyas Grocery',
    description: 'Online grocery shopping platform for New York City',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'E-commerce',
    link: '#'
  }
]

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our diverse range of successful projects and digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-purple-600 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full md:w-auto"
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

