/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { XnixLineUser } from "../XnixLineUser";
import "./style.css";

export const Info = ({
  showText = true,
  showIcon = true,
  text = "Author",
  override = (
    <XnixLineUser
      className="xnix-line-user-instance"
      img="https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-12-1.svg"
      vector="https://generation-sessions.s3.amazonaws.com/8302eaad4b5ef80aafcda7a27455f034/img/vector-11-1.svg"
    />
  ),
}) => {
  return (
    <div className="info">
      {showIcon && <>{override}</>}

      {showText && <div className="author-2">{text}</div>}
    </div>
  );
};

Info.propTypes = {
  showText: PropTypes.bool,
  showIcon: PropTypes.bool,
  text: PropTypes.string,
};
