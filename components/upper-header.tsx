'use client'

import { Mail, Phone, MapPin, Clock, Contact } from 'lucide-react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const headerItems = [
  {
    icon: <Mail className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />,
    text: 'contact@barbeytech.com'
  },
  {
    icon: <Phone className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />,
    text: '+1234567890'
  },
  {
    icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />,
    text: 'New York, United States'
  },
  {
    icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />,
    text: "Mon - Fri: 9 AM - 6 PM"
  },
  {
    icon: <Contact className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />,
    text: "+1 (347) 698-6704"
  }
]

export function UpperHeader() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  }

  return (
    <div className="bg-white text-gray-800 py-3 px-4 flex justify-center items-center shadow-md">
      <div className="w-full max-w-[900px]">
        <Slider {...settings}>
          {headerItems.map((item, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center gap-4">
                <span className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm md:text-base font-medium whitespace-nowrap">
                    {item.text}
                  </span>
                </span>
                {index < headerItems.length - 1 && (
                  <div className="hidden md:block w-[1px] h-8 bg-gray-300" />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

