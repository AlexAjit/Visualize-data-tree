// import React from 'react';

// interface LeftBoxProps {
//   input: string;
//   setInput: (value: string) => void;
// }

// const LeftBox: React.FC<LeftBoxProps> = ({ input, setInput }) => {
//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div className="p-4 bg-black text-white border border-gray-700 rounded-lg">
//       <h3 className="text-lg font-semibold mb-2">Input Box</h3>
//       <textarea
//         value={input}
//         onChange={handleChange}
//         placeholder="Enter text with indentation..."
//         rows={10}
//         className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-blue-500 text-white"
//       />
//     </div>
//   );
// };

// export default LeftBox;

// import React from 'react';

// interface LeftBoxProps {
//   input: string;
//   setInput: (input: string) => void;
// }

// const LeftBox: React.FC<LeftBoxProps> = ({ input, setInput }) => {
//   return (
//     <div className='flex-grow-1 d-flex flex-column flex-lg-row'>
//     <textarea
//       className="w-full h-500 p-1 bg-gray-800 text-white rounded-lg resize-none"
//       placeholder="Enter folder structure here..."
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//     />
//     </div>
//   );
// };

// export default LeftBox;

// LeftBox.tsx
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from "prismjs";
import 'prismjs/themes/prism-tomorrow.css'; // Use PrismJS theme for syntax highlighting
import 'prismjs/components/prism-javascript'; // Include language support for JavaScript

interface LeftBoxProps {
  input: string;
  setInput: (value: string) => void;
}

const LeftBox: React.FC<LeftBoxProps> = ({ input, setInput }) => {
  // const editorRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Focus the editor and move the cursor to the end
  //   if (editorRef.current) {
  //     const editorTextarea = editorRef.current.querySelector('textarea');
  //     if (editorTextarea) {
  //       editorTextarea.focus();
  //       editorTextarea.setSelectionRange(input.length, input.length);
  //     }
  //   }
  // }, []);

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-md h-full overflow-auto">
      {/* Placeholder text */}
      {!input && (
        <div className="absolute inset-0 p-4 text-gray-500 pointer-events-none">
          type...
        </div>
      )}
      <Editor
        value={input}
        onValueChange={setInput}
        highlight={(code) => highlight(code, languages.javascript, 'javascript')}
        padding={10}
        className="focus:outline-none"
        style={{
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.875rem', // text-sm
        }}
      />
    </div>
  );
};

export default LeftBox;
