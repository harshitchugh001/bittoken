import React from 'react';
import Navbar from '../NavBar/Navbar';
import Logout from '../common/Logout';
import Name from '../common/Name';

const userProfile = {
    email: 'example@gmail.com',
    telegram: '@exampleUser',
    twitter: '@exampleUser',
    tiktok: '@exampleUser',
    facebook: 'exampleUser',
    name: 'John Doe', // Replace with user's name
    username: '@john_doe' // Replace with user's username
};

export default function Profile() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-900 to-neonBlue text-white">
            <div className='absolute top-6 left-4'>
                <Name />
            </div>
            <div className='absolute top-6 right-4'>
                <Logout />
            </div>
            <div className="flex-grow p-4">
                <div className="flex justify-center items-center mt-10">
                    <div className="bg-gradient-to-b p-6 rounded-lg text-center text-neonBlue animate-bounce">
                        <h1 className="text-4xl font-bold animate-text">Profile</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-10 animate-bounce">
                    <img
                        src="https://via.placeholder.com/150" // Replace with user profile image URL
                        alt="User"
                        className="w-36 h-36 rounded-full border-4 border-neonBlue"
                    />
                    <h2 className="text-2xl mt-4">{userProfile.name}</h2>
                    <p className="text-lg text-gray-300">{userProfile.username}</p>
                </div>

                <div className="mt-8">
                    <div className="bg-gradient-to-b p-4 rounded-lg text-center text-white animate-text">
                        <h2 className="text-xl font-bold">Social Media</h2>
                        <ul className="mt-4 space-y-2">
                            <li><strong>Email:</strong> {userProfile.email}</li>
                            <li><strong>Telegram:</strong> {userProfile.telegram}</li>
                            <li><strong>Twitter (X):</strong> {userProfile.twitter}</li>
                            <li><strong>TikTok:</strong> {userProfile.tiktok}</li>
                            <li><strong>Facebook:</strong> {userProfile.facebook}</li>
                        </ul>
                    </div>
                </div>

                {/* <div className=" mt-8 ">
                    <div className="whitespace-nowrap animate-marquee">
                        <p className="text-lg text-black-300">This is your running text. It can be anything you want to display continuously, like updates or news.</p>
                    </div>
                </div> */}
            </div>

            <div className="mb-8">
                <Navbar />
            </div>
        </div>
    );
}
