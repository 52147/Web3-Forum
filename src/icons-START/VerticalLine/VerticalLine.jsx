/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const VerticalLine = ({ className }) => {
  return (
    <svg
      className={`vertical-line ${className}`}
      fill="none"
      height="27"
      viewBox="0 0 24 27"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M12 1.828V25.828" stroke="black" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};
