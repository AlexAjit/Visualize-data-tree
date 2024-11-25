import React from 'react';

interface TopMenuProps {
  toggleSidebar: () => void;  // toggle sidebar function for visibilty
  isSidebarOpen: boolean;     // Boolean to control the sidebar state
}

const TopMenu: React.FC<TopMenuProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="w-full p-4 bg-gray-800 flex items-center justify-between">
      {/* <h1 className="text-white text-lg">Folder Structure</h1>   */}
      <button onClick={toggleSidebar} className="text-white">
        {isSidebarOpen ? 'Close' : '☰'} 
      </button>
      <h1 className="text-white text-lg">Tree-RAM</h1>
    </div>
  );
};

export default TopMenu;
