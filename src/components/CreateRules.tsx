import React from 'react';
import TopMenu from './TopMenu'; // Assuming TopMenu is in the same folder

const CreateRule: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Menu */}
      <TopMenu toggleSidebar={() => {}} isSidebarOpen={false} />

      {/* Content Area */}
      <div className="flex justify-between p-4">
        {/* Left Box: Input Area */}
        <div className="w-1/2 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-white mb-4">Input Rule Data</h2>
          <textarea
            placeholder="Enter your rule data here..."
            className="w-full h-64 p-2 bg-gray-700 text-white rounded-md border-none focus:outline-none"
          />
        </div>

        {/* Right Box: Display/Preview Area */}
        <div className="w-1/2 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-white mb-4">Rule Preview</h2>
          <div className="w-full h-64 p-2 bg-gray-700 text-white rounded-md">
            {/* Preview content will be dynamically updated here */}
            <p>Rule Preview will appear here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRule;
