import React from 'react'
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
    const navigate = useNavigate();


    const handleSignUp = () => {
        navigate("/verify");
      };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4 py-6">
    <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Add Your Personal Info</h1>
        <p className="text-sm mb-6 text-center">This info needs to be accurate with your ID document.</p>
        <form className="flex flex-col space-y-4">
            <label className="flex flex-col">
                <span className="text mb-2">Full Name</span>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    className="px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
            </label>
            <label className="flex flex-col">
                <span className="text mb-2">Username</span>
                <input
                    type="text"
                    placeholder="Enter your username"
                    className="px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
            </label>
            <label className="flex flex-col">
                <span className="text mb-2">Date of Birth</span>
                <input
                    type="date"
                    className="px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>
            <button
                type="button"
                // onClick={handleContinue}
                className="w-full px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
                Continue
            </button>
        </form>
    </div>
</div>
  )
}
