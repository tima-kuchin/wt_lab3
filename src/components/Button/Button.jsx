import React from 'react';
import './Button.css'

function Button({ children, id, className, onClick }) {
    return (
      <button id={id} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

export default Button;