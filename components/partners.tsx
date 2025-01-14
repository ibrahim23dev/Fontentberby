'use client'

import { useRef, useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
  },
  {
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
  },
  {
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
  },
  {
    name: 'Fortinet',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
  },
  {
    name: 'Red Hat',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg',
  },
  {
    name: 'UiPath',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/UiPath_logo.svg',
  }
]

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.9)),
          url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e0e7ff' /%3E%3C/svg%3E")
        `
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">
            Smart Software, {' '}
            <span className="text-purple-600">Our Partners</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="relative group transform transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <Card className="relative bg-white p-6 flex items-center justify-center aspect-[4/2] rounded-lg shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-auto object-contain transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/150?text=' + partner.name;
                    }}
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

