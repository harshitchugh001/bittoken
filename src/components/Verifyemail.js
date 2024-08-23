import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from './Helper/Helper';

export default function Verifyemail() {
  const [otp, setOtp] = useState('');
  const { email } = useParams();
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
      setOtp((prevOtp) => prevOtp.substr(0, index) + value + prevOtp.substr(index + 1));
    } else if (value.length === 0) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
      setOtp((prevOtp) => prevOtp.substr(0, index) + value + prevOtp.substr(index + 1));
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/verify`, { userEmail: email, otp });
      if (response.status === 200) {
        console.log(response,"response")
        setCookie('token', response.data.token);
        toast.success('Email verified successfully!');
        navigate("/editprofile");
      } else {
        toast.error('Verification failed. Please try again.');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Something went wrong!');
    }
  };

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
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleVerify}
        className="w-full max-w-sm px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Verify Your Email
      </button>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}
