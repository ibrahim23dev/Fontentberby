'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'CEO, TechInnovate',
    avatar: '/placeholder.svg?height=100&width=100',
    quote: 'Barbey Tech transformed our digital infrastructure. Their expertise and dedication to excellence are unmatched in the industry.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chang',
    role: 'CTO, GlobalSoft Solutions',
    avatar: '/placeholder.svg?height=100&width=100',
    quote: 'Working with Barbey Tech was a game-changer for our company. Their innovative solutions helped us stay ahead of the competition.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    role: 'Director of Operations, DataFlow Inc.',
    avatar: '/placeholder.svg?height=100&width=100',
    quote: 'The team at Barbey Tech consistently delivers high-quality results. Their attention to detail and customer service is exemplary.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Lee',
    role: 'Founder, StartUp Ventures',
    avatar: '/placeholder.svg?height=100&width=100',
    quote: 'As a startup, we needed a reliable tech partner. Barbey Tech not only met but exceeded our expectations at every turn.',
    rating: 5
  }
]

export function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why leading companies trust Barbey Tech for their technology needs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute text-purple-200 w-24 h-24 -top-8 -left-8 z-0 opacity-50" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                    <Avatar className="w-24 h-24 border-4 border-purple-200">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-semibold text-purple-600 mb-1">
                        {testimonials[currentIndex].name}
                      </h2>
                      <p className="text-gray-600 mb-2">
                        {testimonials[currentIndex].role}
                      </p>
                      <div className="flex justify-center md:justify-start">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-6 relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-purple-200 opacity-50" />
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </CardContent>
              </Card>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

