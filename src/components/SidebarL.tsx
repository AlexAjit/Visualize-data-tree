import React from 'react';
import ActivityLog from './ActivityLog';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBarL: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white p-2 hover:bg-gray-700 rounded-md"
      >
        <span className="text-2xl">×</span> 
      </button>

      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-end items-center p-4">
  <button className="text-white bg-transparent hover:bg-gray-700 p-2 rounded-md">
    <span className="text-xl">✎</span> 
  </button>
</div>
        <div className="p-4">
        <h2 className="text-lg">History</h2>
        </div>

        <div className="p-4 space-y-2">
          {/* <button className="w-full p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-left">
            Logout
          </button> */}
          <button className="w-full p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-left">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarL;
