/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { XnixLineBook } from "../XnixLineBook";
import "./style.css";

export const IconButton = ({
  hasText = true,
  text = "Learning",
  hasIcon = true,
  iconLocation,
  size,
  learningClassName,
  override = (
    <XnixLineBook
      className="xnix-line-book-instance"
      img="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/vector-18-2.svg"
      vector="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/vector-17-2.svg"
    />
  ),
}) => {
  return (
    <div className={`icon-button ${size}`}>
      {iconLocation === "right" && (
        <>
          <>{hasText && <div className={`learning ${learningClassName}`}>{text}</div>}</>
        </>
      )}

      {hasIcon && (
        <>
          <>
            {iconLocation === "right" && <>{override}</>}

            {iconLocation === "left" && (
              <XnixLineBook
                className="xnix-line-book-instance"
                img="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/vector-18-2.svg"
                vector="https://generation-sessions.s3.amazonaws.com/f3f013a0cbc762c4ee2d24d20a377e7d/img/vector-17-2.svg"
              />
            )}
          </>
        </>
      )}

      {iconLocation === "left" && (
        <>
          <>{hasText && <div className="text-wrapper">{text}</div>}</>
        </>
      )}
    </div>
  );
};

IconButton.propTypes = {
  hasText: PropTypes.bool,
  text: PropTypes.string,
  hasIcon: PropTypes.bool,
  iconLocation: PropTypes.oneOf(["right", "left"]),
  size: PropTypes.oneOf(["large", "small"]),
};
