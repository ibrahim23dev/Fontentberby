import Image from "next/image"
import Link from "next/link"
import { UpperHeader } from "@/components/upper-header";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function LoginPage() {
  return (
    <main className="min-h-screen">
        <UpperHeader/>
        <Header/>
<div className=" bg-gradient-to-b from-white to-pink-50/50 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-sm">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Log in Sign up</h1>
            <p className="text-sm text-gray-500">Use your existing sign in or create new one</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NYp1dosVl5HfuJoeHyJVtkS8kMmh0h.png"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">Continue with Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-[#4285F4] hover:text-blue-600"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
           <Link href="/dashboard">
           <button
              type="submit"
              className="w-full bg-[#4285F4] text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
           </Link>
            
          </form>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-[#4285F4] hover:text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
   
    </div>
    <Footer/>
    </main>
    
  )
}

