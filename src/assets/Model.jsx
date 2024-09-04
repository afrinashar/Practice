// Modal.js
 import './Model.css'; // Import CSS for modal styling

const Model = ({ isOpen, onClose, headerContent, bodyContent }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{headerContent}</h2>
          <button className="close-button" onClick={onClose}>❌</button>
        </div>
        <div className="modal-body">
          {bodyContent}
        </div>
      </div>
    </div>
  );
};

export default Model;
