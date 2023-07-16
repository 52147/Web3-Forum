/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineUser = ({
  className,
  vector = "https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-11.svg",
  img = "https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-12.svg",
}) => {
  return (
    <div className={`xnix-line-user ${className}`}>
      <div className="vector-5">
        <img className="vector-6" alt="Vector" src={vector} />
        <img className="vector-7" alt="Vector" src={img} />
      </div>
    </div>
  );
};

XnixLineUser.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};
