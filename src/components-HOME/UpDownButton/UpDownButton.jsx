/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DownArrow } from "../../icons-HOME/DownArrow";
import "./style.css";

export const UpDownButton = ({
  text = "More topics",
  className,
  icon = <DownArrow className="down-arrow-9" />,
  moreTopicsClassName,
  onClick,
}) => {
  return (
    <div className={`up-down-button ${className}`} onClick={onClick}>
      {icon}
      <div className={`more-topics ${moreTopicsClassName}`}>{text}</div>
    </div>
  );
};

UpDownButton.propTypes = {
  text: PropTypes.string,
};
