/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineUser = ({
  className,
  vectorClassName,
  vector = "https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-11-10.svg",
  vectorClassNameOverride,
  img = "https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-12-11.svg",
}) => {
  return (
    <div className={`xnix-line-user ${className}`}>
      <div className="vector-4">
        <img className={`vector-5 ${vectorClassName}`} alt="Vector" src={vector} />
        <img className={`vector-6 ${vectorClassNameOverride}`} alt="Vector" src={img} />
      </div>
    </div>
  );
};

XnixLineUser.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
};
