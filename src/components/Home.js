import React, { useState } from 'react';
import logo from "../assets/images.jpeg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/signup`, { userEmail: email });

      if (response.status === 200) { 
        toast.success(response.data.message, {
          onClose: () => navigate(`/verify/${email}`) 
        });
      } else {
        toast.error('Unexpected response from server.');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Something went wrong!');
    }
  };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-md w-72 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          onClick={handleSignUp}
          className="w-72 px-4 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000} 
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
