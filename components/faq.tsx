'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: "What services does Barbey Tech offer?",
    answer: "Barbey Tech offers a wide range of services including web development, mobile app development, cloud solutions, AI and machine learning integration, cybersecurity services, and digital transformation consulting."
  },
  {
    question: "How does Barbey Tech ensure project quality?",
    answer: "We maintain high quality standards through rigorous code reviews, automated testing, continuous integration/continuous deployment (CI/CD) practices, and regular client feedback sessions throughout the development process."
  },
  {
    question: "Can Barbey Tech handle projects for startups and large enterprises alike?",
    answer: "Our team is experienced in working with businesses of all sizes, from innovative startups to large enterprises. We tailor our approach to meet the specific needs and scale of each client."
  },
  {
    question: "What technologies does Barbey Tech specialize in?",
    answer: "We specialize in a wide array of technologies including React, Node.js, Python, AWS, Azure, Google Cloud, TensorFlow, and many more. Our team stays up-to-date with the latest tech trends to provide cutting-edge solutions."
  },
  {
    question: "How does Barbey Tech approach data security and privacy?",
    answer: "Data security and privacy are top priorities for us. We implement industry-standard security protocols, conduct regular security audits, and ensure compliance with relevant data protection regulations such as GDPR and CCPA."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4 overflow-hidden">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardTitle className="flex justify-between items-center text-lg">
                  {faq.question}
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  />
                </CardTitle>
              </CardHeader>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

