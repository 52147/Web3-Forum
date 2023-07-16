/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineEnvelope = ({
  className,
  rectangleClassName,
  rectangle = "https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/rectangle-1557-1.svg",
}) => {
  return (
    <div className={`xnix-line-envelope ${className}`}>
      <div className="vector">
        <img className={`rectangle ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
      </div>
    </div>
  );
};

XnixLineEnvelope.propTypes = {
  rectangle: PropTypes.string,
};
