import React from 'react';
import { generateASCIITree } from '../utils/ASCIITreeGenerator';

interface RightBoxProps {
  input: string;
}

const RightBox: React.FC<RightBoxProps> = ({ input }) => {
  const output = generateASCIITree(input);

  return (
    <div className="p-4 bg-black text-white border border-gray-700 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">ASCII Tree Output</h3>
      <pre className="bg-black p-2 rounded overflow-x-auto text-white border border-gray-700">{output}</pre>
    </div>
  );
};

export default RightBox;
