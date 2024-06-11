import React from 'react'
import Footer from './footer/footer' // Ensure this path is correct
import Navbar from './navbar/navbar'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0 w-full h-full bg-image bg-cover bg-center"></div>
      {/* Header */}
      <Navbar/>
      {/* Body */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-semibold sm:text-3xl sm:font-bold mb-4">Welcome to Our Website</h2>
        <p className="mb-8 sm:text-lg sm:leading-relaxed">
          This is a responsive landing page built with Next.js and Tailwind CSS.
        </p>
      </main>
      <Footer/>
    </div>
  )
}
