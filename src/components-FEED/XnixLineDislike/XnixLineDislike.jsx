/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineDislike = ({
  className,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-70-4.svg",
}) => {
  return (
    <div className={`xnix-line-dislike ${className}`}>
      <div className="vector">
        <img className={`img ${vectorClassName}`} alt="Vector" src={vector} />
      </div>
    </div>
  );
};

XnixLineDislike.propTypes = {
  vector: PropTypes.string,
};
