import React, { useState } from 'react';
import LeftBox from '../src/components/LeftBox';
import RightBox from '../src/components/RightBox';
import TopMenu from '../src/components/TopMenu';
import Sidebar from './components/SidebarL'; 

const HomePage: React.FC = () => {
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-black text-white flex App">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ml-0 p-4 ${
          isSidebarOpen ? 'ml-64' : '' 
        }`}
      >
        <TopMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <div className="flex justify-center items-center flex-1 p-4">
          <div className="flex w-full max-w-6xl gap-8 p-4">
            <div className="flex-1 bg-gray-800 rounded-lg p-6 h-[80vh] overflow-auto">
              <LeftBox input={input} setInput={setInput} />
            </div>
            <div className="flex-1 bg-gray-800 rounded-lg p-4 overflow-auto">
              <RightBox input={input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
