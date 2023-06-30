/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineBitcoin = ({
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-5-1.svg",
  vectorClassNameOverride,
  img = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-6-1.svg",
}) => {
  return (
    <div className={`xnix-line-bitcoin ${className}`}>
      <div className="overlap-group-wrapper">
        <div className={`overlap-group-2 ${overlapGroupClassName}`}>
          <img className={`vector-7 ${vectorClassName}`} alt="Vector" src={vector} />
          <img className={`vector-8 ${vectorClassNameOverride}`} alt="Vector" src={img} />
        </div>
      </div>
    </div>
  );
};

XnixLineBitcoin.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};
