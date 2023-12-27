// PopupMessage.js
import React from 'react';

const PopupMessage = ({ onClose }) => {
  return (
    <div className="popup">
      <p>Thank you !</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupMessage;
