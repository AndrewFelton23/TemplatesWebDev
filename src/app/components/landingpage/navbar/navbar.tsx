import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-10 w-full h-16 flex items-center justify-between px-4 z-20">
        <div className="text-xl font-bold">Logo</div>
        <div>
            <a href="#" className="mr-4 signin-text">Sign In</a>
            <a href="#" className='contactus-text'>Contact Us</a>
        </div>
    </nav>
  )
}
