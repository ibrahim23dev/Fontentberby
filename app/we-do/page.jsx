'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { UpperHeader } from "@/components/upper-header";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const insuranceProducts = [
  { title: "Auto Insurance", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&q=80", icon: "🚗" },
  { title: "Home Insurance", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80", icon: "🏠" },
  { title: "Life Insurance", image: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?w=500&q=80", icon: "❤️" },
  { title: "Health Insurance", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80", icon: "🏥" },
  { title: "Travel Insurance", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&q=80", icon: "✈️" },
  { title: "Business Insurance", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80", icon: "💼" },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
       <UpperHeader/>
            <Header/>
      <section className="hero-section relative overflow-hidden bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Protect Your Future with Our Insurance Solutions
              </h1>
              <p className="text-lg text-blue-100">
                We offer comprehensive insurance coverage to safeguard what matters most to you.
                Get peace of mind with our tailored policies.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
                               hover:bg-blue-100 transition-colors duration-300 animate-pulse">
                Get a Quote
              </button>
            </div>
            <div className="relative h-[400px] animate-float">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Insurance concept"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-700 opacity-20 animate-wave"></div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 animate-fade-in">
          Our Insurance Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceProducts.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-2
                         ${mounted ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-blue-100 rounded-xl mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-30 flex items-center justify-center">
                  <span className="text-4xl">{product.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">{product.title}</h3>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm 
                               hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  )
}

