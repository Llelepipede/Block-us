// src/Button.js
import React from 'react';

const index = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '40px' }}>
      {text}
    </button>
  );
};

export default index;