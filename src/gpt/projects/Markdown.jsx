import   { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = () => {
  const [markdown, setMarkdown] = useState(`hi`);

  return (
    <div style={{backgroundColor:"#8C0C0C", color:"white"}}>
      <h1>Markdown Editor</h1>
      <textarea
        rows="10"
        cols="30"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div style={{color:"white"}}>
         
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Markdown;
