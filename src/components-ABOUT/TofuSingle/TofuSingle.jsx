/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TofuSingle = ({
  property1,
  className,
  propertyDefault = "https://generation-sessions.s3.amazonaws.com/338b3609cd585762ca127a567391b809/img/property-1-default.svg",
}) => {
  return <img className={`tofu-single ${className}`} alt="Property default" src={propertyDefault} />;
};

TofuSingle.propTypes = {
  property1: PropTypes.oneOf(["default"]),
  propertyDefault: PropTypes.string,
};
