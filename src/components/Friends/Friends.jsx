import React from 'react'
import Navbar from '../NavBar/Navbar'

export default function Friends() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-900 to-neonBlue text-white">
      <div className="flex-grow p-4">
        {/* <div className="flex justify-center items-center mt-10">
          <div className="bg-blue-900 p-6 rounded-lg text-center text-neonBlue">
            <h1 className="text-4xl font-bold">GRAB</h1>
            <p className="text-xl mt-2">0.04883 BITTOKEN</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Hot News</button>
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Join Community</button>
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Invite Friends</button>
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Staking & Rewards</button>
        </div> */}
      </div>

      <div className="mb-8"> 
        <Navbar />
      </div>
    </div>
  )
}
