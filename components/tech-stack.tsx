'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Github, GitBranch, GitFork, Database, Server, Globe, ShoppingCart, Smartphone, Cloud, Code, Store, MessageSquare, Video, Wrench, Briefcase, BookOpen, Rocket, Monitor, Layout, FileCode, Settings, Box } from 'lucide-react'
import Webview from "@/public/webview.jpg";
gsap.registerPlugin(ScrollTrigger)

const techStacks = {
  backend: [
    { name: 'Laravel', icon: <Server className="w-4 h-4" /> },
    { name: 'Node.js', icon: <Code className="w-4 h-4" /> },
    { name: 'Express.js', icon: <Globe className="w-4 h-4" /> },
    { name: 'WordPress', icon: <Layout className="w-4 h-4" /> },
    { name: 'Squarespace', icon: <Box className="w-4 h-4" /> },
    { name: 'Wix', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Shopify', icon: <Store className="w-4 h-4" /> }
  ],
  frontend: [
    { name: 'React.js', icon: <Code className="w-4 h-4" /> },
    { name: 'Next.js', icon: <Rocket className="w-4 h-4" /> }
  ],
  database: [
    { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
    { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
    { name: 'Firebase', icon: <Cloud className="w-4 h-4" /> }
  ],
  mobile: [
    { name: 'React Native', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'iOS', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Android', icon: <Smartphone className="w-4 h-4" /> }
  ],
  devops: [
    { name: 'GitHub', icon: <Github className="w-5 h-5" /> },
    { name: 'GitLab', icon: <GitFork className="w-5 h-5" /> },
    { name: 'BitBucket', icon: <GitBranch className="w-5 h-5" /> }
  ],
  deployment: [
    { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
    { name: 'DigitalOcean', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> }
  ]
}

const solutions = {
  web: [
    { name: 'SaaS Products', icon: <Cloud /> },
    { name: 'eCommerce', icon: <ShoppingCart /> },
    { name: 'MVP Development', icon: <Rocket /> },
    { name: 'API Development', icon: <FileCode /> },
    { name: 'Custom CMS', icon: <Settings /> },
    { name: 'Web Apps', icon: <Globe /> },
    { name: 'eLearning (LMS)', icon: <BookOpen /> }
  ],
  mobile: [
    { name: 'Streaming Apps', icon: <Video /> },
    { name: 'Ride Sharing Apps', icon: <Smartphone /> },
    { name: 'Financial Apps', icon: <Briefcase /> },
    { name: 'eCommerce Apps', icon: <Store /> },
    { name: 'Chat & Video Apps', icon: <MessageSquare /> },
    { name: 'Utility Apps', icon: <Wrench /> },
    { name: 'Productivity Apps', icon: <Settings /> }
  ]
}

export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: {
          amount: 1.5,
          grid: 'auto'
        }
      })

      gsap.from('.connection-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Agile Software Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our processes are proven, the expertise is there and our tools are top notch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Web Development */}
          <motion.div
            className="tech-item"
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-purple-50 to-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-purple-600" />
                Web Development
              </h3>
              <div className="aspect-video relative mb-6 bg-gradient-to-br from-purple-100 to-blue-50 rounded-lg p-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2039308-GHoh1E0heb58gsI5vWUoVK1NeljUDp.png"
                  alt="Web Development"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-purple-600 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStacks.backend.map(({ name, icon }) => (
                      <span key={name} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-2">
                        {icon}
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="tech-item"
            whileHover={{ scale: 1.02 }}
          >
            <Card className="p-6 h-full bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-600" />
                Mobile Development
              </h3>
              <div className="aspect-video relative mb-6 bg-gradient-to-br from-blue-100 to-purple-50 rounded-lg p-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2039308-GHoh1E0heb58gsI5vWUoVK1NeljUDp.png"
                  alt="Mobile Development"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-600 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStacks.mobile.map(({ name, icon }) => (
                      <span key={name} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2">
                        {icon}
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Development Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Development Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStacks.devops.map(({ name, icon }) => (
              <motion.div
                key={name}
                className="tech-item"
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <div className="w-8 h-8 text-purple-600">
                      {icon}
                    </div>
                  </div>
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-sm text-gray-600 mt-2">Version Control & Collaboration</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center flex items-center justify-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              Web Solutions
            </h3>
            <div className="grid gap-4">
              {solutions.web.map(({ name, icon }) => (
                <motion.div
                  key={name}
                  className="tech-item"
                  whileHover={{ x: 10 }}
                >
                  <Card className="p-4 flex items-center gap-4 hover:bg-purple-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      {icon}
                    </div>
                    <span>{name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              Mobile Solutions
            </h3>
            <div className="grid gap-4">
              {solutions.mobile.map(({ name, icon }) => (
                <motion.div
                  key={name}
                  className="tech-item"
                  whileHover={{ x: 10 }}
                >
                  <Card className="p-4 flex items-center gap-4 hover:bg-blue-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {icon}
                    </div>
                    <span>{name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Cloud className="w-6 h-6 text-purple-600" />
            Deployment Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStacks.deployment.map(({ name, icon }) => (
              <motion.div
                key={name}
                className="tech-item"
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-6 h-6 text-blue-600">
                      {icon}
                    </div>
                  </div>
                  <h4 className="font-semibold">{name}</h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

