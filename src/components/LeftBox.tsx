import React from 'react';

interface LeftBoxProps {
  input: string;
  setInput: (value: string) => void;
}

const LeftBox: React.FC<LeftBoxProps> = ({ input, setInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="p-4 bg-black text-white border border-gray-700 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Input Box</h3>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder="Enter text with indentation..."
        rows={10}
        className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 text-white"
      />
    </div>
  );
};

export default LeftBox;
