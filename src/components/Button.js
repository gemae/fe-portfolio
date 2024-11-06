import React from 'react';

const Button = ({ label, onClick, style, type = "button"}) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      style={style} 
      className="absolute w-fit flex gap-4 items-end justify-end main-btn"
    >
      <p className="text-xl">{label}</p>
      <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2em"
      width="2em"
    >
      <path
        fillRule="evenodd"
        d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
      />
    </svg>
    </button>
  );
};

export default Button;
