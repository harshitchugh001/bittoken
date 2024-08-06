import React from 'react'

export default function Verifyemail() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4 py-6">
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold mb-4">Confirm Your Email</h1>
      <p className="text-lg mb-8">Enter the 6-digit code</p>
      <div className="flex justify-center space-x-2 mb-6">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-lg font-semibold bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        ))}
      </div>
    </div>
    <button className="w-full max-w-sm px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
      Verify Your Number
    </button>
  </div>
  )
}
