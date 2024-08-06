import React from 'react'
import logo from "../assets/images.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4">
      <h1 className="text-4xl font-bold mb-8 tracking-wide">BITTOKEN</h1>
      <div className="mb-10">
        <img
          src={logo} 
          alt="Logo"
          className="w-32 h-auto mx-auto"
        />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-md w-72 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button className="w-72 px-4 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  )
}
