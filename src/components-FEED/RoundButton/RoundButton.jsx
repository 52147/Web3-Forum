/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PlusSign2 } from "../../icons-FEED/PlusSign2";
import "./style.css";

export const RoundButton = ({ hasIcon = true, text = "Button", importance, className }) => {
  return (
    <div className={`round-button ${importance} ${className}`}>
      {hasIcon && <PlusSign2 className="plus-sign-2" color={importance === "secondary" ? "black" : "white"} />}

      <div className="button-2">{text}</div>
    </div>
  );
};

RoundButton.propTypes = {
  hasIcon: PropTypes.bool,
  text: PropTypes.string,
  importance: PropTypes.oneOf(["primary", "secondary"]),
};
