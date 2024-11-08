import React, { useState } from 'react';

const TopMenu: React.FC = () => {
  const [isOperator, setIsOperator] = useState(true);

  const toggleMode = () => {
    setIsOperator(!isOperator);
  };

  return (
    <div className="w-full bg-white text-dark-blue p-4 shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-800">Visualize Content in ASCII</h1>
      <button
        onClick={toggleMode}
        className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 transition duration-200"
      >
        {isOperator ? 'Operator' : 'Conditions'}
      </button>
    </div>
  );
};

export default TopMenu;
