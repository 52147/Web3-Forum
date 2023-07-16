/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineBook = ({
  className,
  vector = "https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-17-3.svg",
  img = "https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-18-3.svg",
}) => {
  return (
    <div className={`xnix-line-book ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="vector-2"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-16-3.svg"
          />
          <img className="vector-3" alt="Vector" src={vector} />
          <img className="vector-4" alt="Vector" src={img} />
        </div>
      </div>
    </div>
  );
};

XnixLineBook.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};
