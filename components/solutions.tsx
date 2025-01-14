'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const solutions = [
  {
    title: 'Hospital Management System',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    description: 'Streamline healthcare operations with our comprehensive hospital management solution. Manage patient records, appointments, billing, and more with ease.'
  },
  {
    title: 'Inventory Management System',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    description: 'Track and manage inventory efficiently with real-time updates and analytics. Optimize stock levels, reduce waste, and improve supply chain operations.'
  },
  {
    title: 'School Management System',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    description: 'Modernize educational institution management with our integrated solution. Handle admissions, attendance, grades, and communication all in one place.'
  },
  {
    title: 'Stock Management System',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    description: 'Optimize stock control with advanced import and export capabilities. Monitor stock levels, automate reordering, and generate comprehensive reports.'
  },
  {
    title: 'Hotel & Restaurant Management',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    description: 'Enhance guest experience with our comprehensive hospitality management system. Manage reservations, room service, billing, and staff scheduling effortlessly.'
  },
  {
    title: 'Research Solution',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    description: 'Accelerate research and development with data-driven insights. Organize experiments, analyze results, and collaborate seamlessly with team members.'
  }
]
export function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart, Preconfigured,{' '}
            <span className="text-purple-600">Dynamic Business Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our range of comprehensive management systems designed to streamline your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white rounded-xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square relative mb-6 rounded-lg overflow-hidden bg-purple-50 p-4">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    {solution.description}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

