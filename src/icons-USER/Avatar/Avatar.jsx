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
      height="200"
      viewBox="0 0 200 200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#C4C4C4" height="200" rx="10" width="200" />
      <path
        className="path"
        clipRule="evenodd"
        d="M133.333 75.2689C133.333 93.4804 118.41 108.244 100 108.244C81.5905 108.244 66.6667 93.4804 66.6667 75.2689C66.6667 57.0573 81.5905 42.2939 100 42.2939C108.841 42.2939 117.319 45.7681 123.57 51.9521C129.821 58.1361 133.333 66.5234 133.333 75.2689Z"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        className="path"
        d="M41.6667 157.706C77.399 135.785 122.601 135.785 158.333 157.706"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
};
