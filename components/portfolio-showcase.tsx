'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'

const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Finance', 'Marketing']

const projects = [
  {
    id: 1,
    title: 'Adbiyas Tour',
    description: 'A comprehensive travel booking platform offering flights and tour packages with an intuitive user interface and seamless booking experience.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Web App',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    features: [
      'Real-time flight search',
      'Tour package customization',
      'Secure payment integration',
      'User dashboard'
    ],
    link: '#'
  },
  {
    id: 2,
    title: 'Adbiyas Solution',
    description: 'Digital marketing strategy platform providing comprehensive analytics and campaign management tools.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    category: 'Marketing',
    technologies: ['React', 'Firebase', 'Google Analytics', 'AWS'],
    features: [
      'Campaign tracking',
      'Analytics dashboard',
      'ROI reporting',
      'Social media integration'
    ],
    link: '#'
  },
  {
    id: 3,
    title: 'MobiShop',
    description: 'A feature-rich mobile app for a seamless shopping experience, connecting users with local and international brands.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Mobile App',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    features: [
      'Personalized product recommendations',
      'In-app messaging with sellers',
      'Augmented reality product preview',
      'Multi-language support'
    ],
    link: '#'
  },
  {
    id: 4,
    title: 'E-Mart Plus',
    description: 'A robust e-commerce platform with advanced features for both customers and sellers, supporting multiple vendors and product categories.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'E-commerce',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Elasticsearch'],
    features: [
      'Advanced search and filtering',
      'Multi-vendor support',
      'Loyalty program integration',
      'Real-time inventory management'
    ],
    link: '#'
  },
  {
    id: 5,
    title: 'FinTrack Pro',
    description: 'A comprehensive financial management application for personal and small business use, offering budgeting, investment tracking, and tax planning tools.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Finance',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Plaid API'],
    features: [
      'Bank account aggregation',
      'Investment portfolio analysis',
      'Tax optimization suggestions',
      'Expense categorization with AI'
    ],
    link: '#'
  },
  {
    id: 6,
    title: 'SocialPulse',
    description: 'An all-in-one social media management platform for businesses to schedule posts, analyze engagement, and manage customer interactions across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Marketing',
    technologies: ['React', 'Node.js', 'GraphQL', 'Redis'],
    features: [
      'Cross-platform post scheduling',
      'Sentiment analysis',
      'Automated response suggestions',
      'Influencer collaboration tools'
    ],
    link: '#'
  }
]

export function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id='proat' className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            {selectedProject && (
              <div className="grid gap-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.open(selectedProject.link, '_blank')}
                >
                  Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

