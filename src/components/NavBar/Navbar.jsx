import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Wallet, Handshake, House, ListChecks, Newspaper } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const isActive = (path) => location.pathname === path; // Check if the current path is active

  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-black p-4 flex justify-between rounded-2xl shadow-lg">
      <div
        className={`flex flex-col items-center w-16 ${isActive('/wallet') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => navigate('/wallet')}
      >
        <Wallet />
        <p className="text-sm">Wallet</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/friends') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => navigate('/friends')}
      >
        <Handshake />
        <p className="text-sm">Friends</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => navigate('/home')}
      >
        <House />
        <p className="text-sm">Home</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/tasks') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => navigate('/tasks')}
      >
        <ListChecks />
        <p className="text-sm">Tasks</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/news') ? 'text-white bg-neonBlue rounded-lg p-2' : 'text-neonBlue'}`}
        onClick={() => navigate('/news')}
      >
        <Newspaper />
        <p className="text-sm">News</p>
      </div>
    </nav>
  );
};

export default Navbar;
