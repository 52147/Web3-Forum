/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ShapeSquare = ({ className }) => {
  return (
    <svg
      className={`shape-square ${className}`}
      fill="none"
      height="94"
      viewBox="0 0 93 94"
      width="93"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#C4C4C4" height="93" rx="10" width="93" y="0.464111" />
      <path
        className="path"
        clipRule="evenodd"
        d="M62 35.4641C62 43.9324 55.0604 50.7974 46.5 50.7974C37.9396 50.7974 31 43.9324 31 35.4641C31 26.9957 37.9396 20.1307 46.5 20.1307C50.6109 20.1307 54.5533 21.7462 57.4602 24.6218C60.367 27.4973 62 31.3974 62 35.4641Z"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        className="path"
        d="M19.375 73.7974C35.9905 63.6042 57.0095 63.6042 73.625 73.7974"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
};
