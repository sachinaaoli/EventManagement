
import React from 'react';

const Modal = ({ imageSrc, handleClose }) => {
  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <img src={imageSrc} alt="Selected Image" />
      </div>
    </div>
  );
};

export default Modal;
