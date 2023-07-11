/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const XnixLineMessage = ({
  className,
  xnixLineMessage = "https://generation-sessions.s3.amazonaws.com/500312cf1e8db9c70ae7c81282508701/img/xnix-line-message-2-12.png",
}) => {
  return <img className={`xnix-line-message ${className}`} alt="Xnix line message" src={xnixLineMessage} />;
};

XnixLineMessage.propTypes = {
  xnixLineMessage: PropTypes.string,
};
