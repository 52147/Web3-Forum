/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineGlasses = ({
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-12-14.svg",
  vectorClassNameOverride,
  img = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-13-1.svg",
  imgClassName,
  vector1 = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-14-1.svg",
}) => {
  return (
    <div className={`xnix-line-glasses ${className}`}>
      <div className="vector-11">
        <div className={`overlap-group-4 ${overlapGroupClassName}`}>
          <img className={`vector-12 ${vectorClassName}`} alt="Vector" src={vector} />
          <img className={`vector-13 ${vectorClassNameOverride}`} alt="Vector" src={img} />
          <img className={`vector-14 ${imgClassName}`} alt="Vector" src={vector1} />
        </div>
      </div>
    </div>
  );
};

XnixLineGlasses.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
