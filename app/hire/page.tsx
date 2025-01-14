'use client'
import { UpperHeader } from '@/components/upper-header';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
export default function ProjectForm() {
  return (
    <main className='min-h-screen'>
        <UpperHeader/>
        <Header/>
 <div className=" bg-gradient-to-br from-white via-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
        <h1 className="text-2xl font-semibold text-center mb-8">Start Your Project Today</h1>
        
        <form className="space-y-6">
          {/* Grid layout for first row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Contact ID</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Grid layout for second row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">WhatsApp Number/Skype ID</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Grid layout for third row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Country</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Budget</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Select Business Section */}
          <div className="space-y-3">
            <label className="text-sm text-gray-600">Select Business:</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Individual Project / Startup Agency</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Small Development Company</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Mid Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Software Design</span>
              </label>
            </div>
          </div>

          {/* Select Services Section */}
          <div className="space-y-3">
            <label className="text-sm text-gray-600">Select Services:</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Business Management System</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Mobile App Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Website Development</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-600">Graphic Design</span>
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* When would you like to start */}
          <div className="space-y-3">
            <label className="text-sm text-gray-600">When you would like to start:</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="start_time"
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">Immediately</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="start_time"
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">1-2 weeks</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="start_time"
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">3-4 weeks</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-8 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit Your Project
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </main>
   
  )
}

