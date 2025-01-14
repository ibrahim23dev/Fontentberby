'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { UpperHeader } from '@/components/upper-header';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Productbanner from '@/public/productbanner.png';
const products = [
  {
    title: "Accounting Software",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "E-Commerce",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Your Operator Software",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hospital Management System",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Inventory Management System",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "School Management System",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Stock Management System",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Hotel & Restaurant Management",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Research Studies",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "CRM Software",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "ERP Software",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Travel API Development",
    image: "/placeholder.svg?height=200&width=200",
    color: "from-blue-500 to-violet-500"
  }
]

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleProducts, setVisibleProducts] = useState(4)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setVisibleProducts(prevVisible => Math.min(prevVisible + 4, products.length))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <UpperHeader/>
      <Header/>
      {/* Hero Section with gradient background */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Innovate and Simplify with Our Cutting-Edge Software Products
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Our software products are designed to empower businesses across industries by simplifying complex processes through cutting-edge technology. Explore our diverse range of solutions that help you manage, analyze, and optimize your operations effectively.
              </p>
              <button 
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Started Now
              </button>
            </div>
            <div
              className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={Productbanner}
                alt="Hero Illustration"
                width={400}
                height={300}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid with transparent background */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, visibleProducts).map((product, index) => (
            <div
              key={product.title}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-48 bg-gradient-to-r ${product.color} p-6 flex items-center justify-center`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.title}</h3>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-medium hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      <Footer/>
    </main>
  )
}

