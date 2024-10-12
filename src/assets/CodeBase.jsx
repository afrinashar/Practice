// App.js
import  { useState } from 'react';
import Model from './Model';
import CodeEditor from './CodeEditor';
import './CodeBase.css'; // Import your app's CSS
import { Modal } from 'bootstrap';
const CodeBase = ({header, content}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [headerContent, setHeaderContent] = useState(header);
  const [codeContent, setCodeContent] = useState(content);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="app">
      <button onClick={openModal} className="open-modal-button">Code</button>
      <Model 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        headerContent={headerContent}
        bodyContent={<CodeEditor codings={codeContent} />}
      />
    </div>
  );
};

export default CodeBase;
