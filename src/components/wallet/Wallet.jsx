import React from 'react'
import Navbar from '../NavBar/Navbar'
import Logout from '../common/Logout'
import Name from '../common/Name'

export default function Wallet() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-900 to-neonBlue text-white relative">
            <div className='absolute top-6 left-4'>
                <Name></Name>
            </div>
            {/* Position Logout at the top-right */}
            <div className='absolute top-6 right-4'>
                <Logout></Logout>
            </div>

            <div className="flex-grow p-4">
                {/* Your other components go here */}
            </div>

            <div className="mb-8">
                <Navbar />
            </div>
        </div>

    )
}
