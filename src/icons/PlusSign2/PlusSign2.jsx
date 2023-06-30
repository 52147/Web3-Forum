/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlusSign2 = ({ color = "black", className }) => {
  return (
    <svg
      className={`plus-sign-2 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M4 12.5H20" stroke={color} strokeWidth="2" />
      <path className="path" d="M12 20.5L12 4.5" stroke={color} strokeWidth="2" />
    </svg>
  );
};

PlusSign2.propTypes = {
  color: PropTypes.string,
};
