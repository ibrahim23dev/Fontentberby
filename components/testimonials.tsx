'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Testimonial = {
  id: number
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Esther Hills',
    role: 'Lead Impact Technician',
    quote: 'Working with Barbey Tech has been transformative for our business. Their expertise in digital solutions and commitment to excellence truly sets them apart.'
  },
  {
    id: 2,
    name: 'Ethel Johnston',
    role: 'Human Directives Director',
    quote: 'The level of professionalism and technical expertise at Barbey Tech is outstanding. They delivered our project on time and provided valuable insights.'
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'CTO, Innovation Labs',
    quote: 'Barbey Tech's approach to software development is refreshingly thorough. Their attention to detail resulted in a product that exceeded our expectations.'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Clients Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute text-purple-200 w-24 h-24 -top-8 -left-8 z-0" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10"
            >
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-600">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-purple-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-purple-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

