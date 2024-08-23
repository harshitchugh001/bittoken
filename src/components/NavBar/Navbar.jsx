import React, { useState } from 'react';
import { Wallet, Handshake, House, ListChecks, Newspaper } from 'lucide-react';

const Navbar = () => {
  // State to keep track of the active item
  const [active, setActive] = useState('home');

  // Helper function to determine if a nav item is active
  const isActive = (item) => active === item;

  return (
    <nav className="bg-black p-4 flex justify-between fixed bottom-0 left-0 right-0 shadow-lg">
      <div
        className={`flex flex-col items-center w-16 ${isActive('wallet') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => setActive('wallet')}
      >
        <Wallet />
        <p className="text-sm">Wallet</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('friends') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => setActive('friends')}
      >
        <Handshake />
        <p className="text-sm">Friends</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('home') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => setActive('home')}
      >
        <House />
        <p className="text-sm">Home</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('tasks') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => setActive('tasks')}
      >
        <ListChecks />
        <p className="text-sm">Tasks</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('news') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => setActive('news')}
      >
        <Newspaper />
        <p className="text-sm">News</p>
      </div>
    </nav>
  );
};

export default Navbar;
