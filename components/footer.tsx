'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Github, Globe, ChevronRight, CreditCard, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import Visa from "@/public/visa.jpg";
import Nagod from '@/public/nagod.png';
import MasterCard from '@/public/mastercard.png';
import Paypal from '@/public/paypal.png';
import Rocket from '@/public/rocket.png';
import Ucb from '@/public/ucb.jpg';
import Bkash from '@/public/bkash.png';
import Appstore from "@/public/appstores.svg";
import googleplay from "@/public/googleplay.png";

import Image from 'next/image'

const relatedProducts = [
  { name: 'B2B Booking Engine', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'B2C Booking Engine', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Tour Operator Software', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Travel Management System', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Travel Mobile Apps', href: '#', icon: <Phone className="w-4 h-4" /> },
  { name: 'Restaurant Software', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Travel CRM', href: '#', icon: <Globe className="w-4 h-4" /> }
]

const moreSolutions = [
  { name: 'Web Design', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'UI/UX Design', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Web Development', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Mobile Application Development', href: '#', icon: <Phone className="w-4 h-4" /> },
  { name: 'XML/API Integrations', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Search Engine Optimization', href: '#', icon: <Globe className="w-4 h-4" /> },
  { name: 'Online Marketing Services', href: '#', icon: <Globe className="w-4 h-4" /> }
]

const paymentMethods = [
  { name: 'Mastercard', icon: MasterCard },
  { name: 'Visa', icon: Visa },
  { name: 'American Express', icon: Nagod },
  { name: 'Discover', icon: Rocket },
  { name: 'PayPal', icon: Paypal },
  { name: 'JCB', icon: Ucb },
  { name: 'UnionPay', icon: MasterCard },
  { name: 'QR Pay', icon: Visa },
  { name: 'bKash', icon: Bkash }
]

const contactInfo = [
  { icon: <Phone className="w-4 h-4" />, text: '+1 234 567 890', href: 'tel:+1234567890' },
  { icon: <Mail className="w-4 h-4" />, text: 'contact@barbeytech.com', href: 'mailto:contact@barbeytech.com' },
  { icon: <MapPin className="w-4 h-4" />, text: '75, Green Road, Farmgate, Dhaka-1216', href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-purple-400 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Information Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Information
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Barbey Tech Consultancy is a leading travel technology partner who delivers innovative
              technology solutions for travel industry. Our comprehensive software products empowering
              worldwide travel businesses to automate business process and enhance their customer
              service.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
            </div>

            {/* App Store Badges */}
            <div className="flex gap-4 pt-4">
              <Link 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black rounded-lg p-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={Appstore}
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <Link 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black rounded-lg p-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={googleplay}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Related Products
            </h3>
            <ul className="space-y-2">
              {relatedProducts.map((product) => (
                <li key={product.name}>
                  <Link 
                    href={product.href}
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {product.icon}
                    <span>{product.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              More Solutions
            </h3>
            <ul className="space-y-2">
              {moreSolutions.map((solution) => (
                <li key={solution.name}>
                  <Link 
                    href={solution.href}
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {solution.icon}
                    <span>{solution.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-center text-sm font-semibold mb-6 flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" />
            Accepted Payment Methods
          </h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {paymentMethods.map((method) => (
              <div 
                key={method.name}
                className="bg-white rounded-md p-2 h-8 w-12 flex items-center justify-center"
              >
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={32}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/90">
              © 2024 Barbey Tech. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              {['Terms', 'Privacy', 'Cookies', 'Careers', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href="#"
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  {item}
                  <ExternalLink className="w-3 h-3" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
                { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
                { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
                { icon: <Globe className="w-5 h-5" />, href: '#', label: 'Website' }
              ].map((social) => (
                <Link 
                  key={social.label}
                  href={social.href}
                  className="text-white/90 hover:text-white transition-colors hover:scale-110 transform"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

