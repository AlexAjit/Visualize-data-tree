import React, { useState } from 'react';
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';
import ActivityLog from '../components/ActivityLog';
import TopMenu from '../components/TopMenu';

const HomePage: React.FC = () => {
  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      <TopMenu />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl p-4">
          <LeftBox input={input} setInput={setInput} />
          <RightBox input={input} />
          <ActivityLog />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
