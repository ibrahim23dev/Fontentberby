'use client'

import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import Link from "next/link"
import { UpperHeader } from "@/components/upper-header";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function ContactPage() {
  return (
    <main className='min-h-screen'>
        <UpperHeader/>
        <Header/>
 <div className=" bg-gradient-to-b from-white to-purple-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h1 className="text-purple-600 font-medium text-center mb-8">CONTACT US</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-gray-900">Leave us a message</h2>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name and Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
          
          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-purple-600 font-medium">ADDRESS / MAP</h3>
              <p className="text-sm text-gray-600">
                Rua do Bom Sucesso, Portugal, Porto, PT
                <br />
                Rua do Bom Sucesso, Portugal, Porto, PT
              </p>
              
              <div className="space-y-2">
                <h3 className="text-purple-600 font-medium">FOLLOW US ON</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-purple-600">
                    <Twitter className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-[200px] w-full rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.957681385841!2d-8.621439684589567!3d41.15697797928544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24650144d43ee9%3A0x8e14be42a3c8e0!2sRua%20do%20Bom%20Sucesso%2C%20Porto%2C%20Portugal!5e0!3m2!1sen!2sus!4v1645564125981!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </main>
   
  )
}

