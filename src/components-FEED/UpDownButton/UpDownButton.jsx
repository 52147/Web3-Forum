/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DownArrow3 } from "../../icons-FEED/DownArrow3";
import "./style.css";

export const UpDownButton = ({
  text = "More topics",
  className,
  icon = <DownArrow3 className="down-arrow" />,
  onClick,
}) => {
  return (
    <div className={`up-down-button ${className}`} onClick={onClick}>
      {icon}
      <div className="more-topics">{text}</div>
    </div>
  );
};

UpDownButton.propTypes = {
  text: PropTypes.string,
};
