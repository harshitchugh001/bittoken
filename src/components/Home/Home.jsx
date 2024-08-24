import React from 'react';
import Navbar from '../NavBar/Navbar';
import Logout from '../common/Logout';
import Name from '../common/Name';
import Balance from '../common/Balance'; // Import Balance component

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-900 to-neonBlue text-white">
      <div className='absolute top-6 left-4'>
        <Name initial="A" /> {/* Pass initial letter as a prop */}
      </div>
      <div className='absolute top-6 right-4'>
        <Logout />
      </div>
      <div className="flex-grow p-6 mt-3 ">
        <div className="flex justify-center items-center mt-15 p-6">
          <div className="bg-blue-900 p-6 rounded-lg text-center text-neonBlue">
            <h1 className="text-4xl font-bold">GRAB</h1>
            <p className="text-xl mt-2">0.04883 BITTOKEN</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8">
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Hot News</button>
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Join Community</button>
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Invite Friends</button>
          <button className="bg-blue-900 p-6 rounded-2xl text-neonBlue font-bold shadow-md hover:bg-blue-700 transition duration-300">Staking & Rewards</button>
        </div>
      </div>

      {/* Position Balance component */}
      <div className="flex-grow flex items-center justify-center mb-10">
        <Balance />
      </div>

      <div className='mb-8 h-12'>
      </div>

      <div className="mb-8">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
