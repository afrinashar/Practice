// src/CodeEditor.jsx
import  { useState } from 'react';
import { Controlled as ControlledEditor } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript'; // Language mode for JavaScript
import { oneDark } from '@codemirror/theme-one-dark'; // Optional: Dark theme

const CodeEditor = () => {
  const [code, setCode] = useState('// Your code here');

  // Event handler to handle changes in the code editor
  const handleCodeChange = (value) => {
    setCode(value);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
      <ControlledEditor
        value={code}
        onBeforeChange={(editor, data, value) => handleCodeChange(value)}
        options={{
          mode: javascript(),
          theme: oneDark, // Optional: Using a dark theme
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
