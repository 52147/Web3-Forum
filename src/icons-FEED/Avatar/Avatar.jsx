/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Avatar = ({ className }) => {
  return (
    <svg
      className={`avatar ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#C4C4C4" height="40" rx="10" width="40" />
      <path
        className="path"
        clipRule="evenodd"
        d="M26.6667 15.0537C26.6667 18.696 23.6819 21.6487 20 21.6487C16.3181 21.6487 13.3334 18.696 13.3334 15.0537C13.3334 11.4114 16.3181 8.45874 20 8.45874C21.7682 8.45874 23.4638 9.15357 24.7141 10.3904C25.9643 11.6272 26.6667 13.3046 26.6667 15.0537Z"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        className="path"
        d="M8.33337 31.5412C15.4798 27.157 24.5203 27.157 31.6667 31.5412"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
};
