import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Wallet, Pickaxe, House, ListChecks, UserPen } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const isActive = (path) => location.pathname === path; // Check if the current path is active

  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-black p-4 flex justify-between rounded-2xl shadow-lg">
      <div
        className={`flex flex-col items-center w-16 ${isActive('/wallet') ? 'text-white bg-neonBlue rounded-lg p-2 animate-slide-in' : 'text-neonBlue'} transition-transform transform hover:scale-105 `}
        onClick={() => navigate('/wallet')}
      >
        <Wallet className="text-2xl" />
        <p className="text-sm">Wallet</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/mine') ? 'text-white bg-neonBlue rounded-lg p-2 animate-slide-in ' : 'text-neonBlue'} transition-transform transform hover:scale-105 animate-bounce  `}
        onClick={() => navigate('/mine')}
      >
        <Pickaxe className="text-2xl" />
        <p className="text-sm">Mine</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/') ? 'text-white bg-neonBlue rounded-lg p-2 animate-slide-in' : 'text-neonBlue'} transition-transform transform hover:scale-105 `}
        onClick={() => navigate('/home')}
      >
        <House className="text-2xl" />
        <p className="text-sm">Home</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/tasks') ? 'text-white bg-neonBlue rounded-lg p-2 animate-slide-in' : 'text-neonBlue'} transition-transform transform hover:scale-105 ` }
        onClick={() => navigate('/tasks')}
      >
        <ListChecks className="text-2xl" />
        <p className="text-sm">Tasks</p>
      </div>
      <div
        className={`flex flex-col items-center w-16 ${isActive('/profile') ? 'text-white bg-neonBlue rounded-lg p-2 animate-slide-in' : 'text-neonBlue'} transition-transform transform hover:scale-105 `}
        onClick={() => navigate('/profile')}
      >
        <UserPen className="text-2xl" />
        <p className="text-sm">Profile</p>
      </div>
    </nav>
  );
};

export default Navbar;
