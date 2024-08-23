import React from 'react';
// import { LogOut } from 'lucide-react'; 

export default function Name({ initial }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-12 h-10 bg-gradient-to-b border border-white rounded-lg shadow-lg relative">
        {/* <LogOut className="text-white" size={24} /> */}
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          {/* {initial} */}
          H
        </span>
      </div>
    </div>
  );
}
