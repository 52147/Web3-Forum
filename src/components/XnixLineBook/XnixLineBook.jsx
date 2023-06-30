/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineBook = ({
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-16.svg",
  vectorClassNameOverride,
  img = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-13.svg",
  imgClassName,
  vector1 = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-13.svg",
}) => {
  return (
    <div className={`xnix-line-book ${className}`}>
      <div className="vector">
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img className={`img ${vectorClassName}`} alt="Vector" src={vector} />
          <img className={`vector-2 ${vectorClassNameOverride}`} alt="Vector" src={img} />
          <img className={`vector-3 ${imgClassName}`} alt="Vector" src={vector1} />
        </div>
      </div>
    </div>
  );
};

XnixLineBook.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
