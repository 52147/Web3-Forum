/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineSuitcase = ({
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-2-1.svg",
  vectorClassNameOverride,
  img = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-3-1.svg",
}) => {
  return (
    <div className={`xnix-line-suitcase ${className}`}>
      <div className="div-wrapper">
        <div className={`overlap-group-3 ${overlapGroupClassName}`}>
          <img className={`vector-9 ${vectorClassName}`} alt="Vector" src={vector} />
          <img className={`vector-10 ${vectorClassNameOverride}`} alt="Vector" src={img} />
        </div>
      </div>
    </div>
  );
};

XnixLineSuitcase.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};
