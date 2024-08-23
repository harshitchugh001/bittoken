import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from './Helper/Helper';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function EditProfile() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const token = getCookie('token');

            const response = await axios.get(
                `${process.env.REACT_APP_API}/api/get-profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                // Redirect to home page if profile data is fetched successfully
                if(response.data.user.fullName){
                navigate("/home");
                }
                else{
                    setLoading(false);
                }
            }
            console.log('Profile data fetched successfully:', response.data);
        } catch (error) {
            console.error('Error fetching profile data:', error.response?.data || error.message);
            setLoading(false); // Stop loading if there is an error
        }
    };

    useEffect(() => {
        fetchProfile();
    });

    const handleContinue = async () => {
        try {
            const token = getCookie('token');

            const response = await axios.post(
                `${process.env.REACT_APP_API}/api/add-profile`,
                {
                    name: fullName,
                    username: username,
                    dob: dob,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                
                console.log('Profile updated successfully:', response.data.user.fullName);
                
                toast.success(response.data.message, {
                    onClose: () =>  navigate("/home") 
                  }); 
               
            }


        } catch (error) {
            console.error('Error updating profile:', error.response?.data || error.message);
            alert('An error occurred while updating the profile.');
        }
    };

    // Show loading message while fetching profile data
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4 py-6">
            <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4 text-center">Add Your Personal Info</h1>
                <p className="text-sm mb-6 text-center">This info needs to be accurate with your ID document.</p>
                <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <label className="flex flex-col">
                        <span className="text mb-2">Full Name</span>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text mb-2">Username</span>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text mb-2">Date of Birth</span>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </label>
                    <button
                        type="button"
                        onClick={handleContinue}
                        className="w-full px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
                        Continue
                    </button>
                </form>
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
