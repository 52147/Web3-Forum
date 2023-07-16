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
      height="60"
      viewBox="0 0 60 60"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#C4C4C4" height="60" rx="10" width="60" />
      <path
        className="path"
        clipRule="evenodd"
        d="M40 22.5806C40 28.0441 35.5228 32.4731 30 32.4731C24.4772 32.4731 20 28.0441 20 22.5806C20 17.1172 24.4772 12.6882 30 12.6882C32.6522 12.6882 35.1957 13.7304 37.0711 15.5856C38.9464 17.4408 40 19.957 40 22.5806Z"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        className="path"
        d="M12.5 47.3119C23.2197 40.7356 36.7803 40.7356 47.5 47.3119"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
};
