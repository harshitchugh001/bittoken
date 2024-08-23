import React from 'react';
import { LogOut } from 'lucide-react'; 
import { signout } from '../Helper/Helper';

export default function Logout() {

    const handleLogout = () => {
        signout(() => {
          window.location.href = '/';
        });
      };
  return (
    <div className=""> 
      <div className="flex items-center justify-center w-12 h-10 bg-gradient-to-b border border-white rounded-lg shadow-lg"> 
        <LogOut className="text-white" size={24 }onClick={handleLogout} />
      </div>
    </div>
  );
}
