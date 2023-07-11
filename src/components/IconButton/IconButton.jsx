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
  className,
  xnixLineBookVectorClassName,
  xnixLineBookVectorClassNameOverride,
  xnixLineBookVector = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-16.svg",
  xnixLineBookImg = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-16.svg",
  xnixLineBookOverlapGroupClassName,
  xnixLineBookVector1 = "https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-16.svg",
  xnixLineBookImgClassName,
  override = (
    <XnixLineBook
      className="xnix-line-book-instance"
      img={xnixLineBookVector}
      imgClassName={xnixLineBookVectorClassNameOverride}
      overlapGroupClassName={xnixLineBookOverlapGroupClassName}
      vector={xnixLineBookVector1}
      vector1={xnixLineBookImg}
      vectorClassName={xnixLineBookImgClassName}
      vectorClassNameOverride={xnixLineBookVectorClassName}
    />
  ),
}) => {
  return (
    <div className={`icon-button ${size} ${className}`}>
      {iconLocation === "right" && (
        <>
          <>{hasText && <div className="learning">{text}</div>}</>
        </>
      )}

      {hasIcon && (
        <>
          <>
            {iconLocation === "right" && (
              <XnixLineBook
                className="xnix-line-book-instance"
                img="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-17-16.svg"
                vector="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-16-16.svg"
                vector1="https://generation-sessions.s3.amazonaws.com/a11d1724769b2cccc8f9c5bd373bc329/img/vector-18-16.svg"
              />
            )}

            {iconLocation === "left" && <>{override}</>}
          </>
        </>
      )}

      {iconLocation === "left" && (
        <>
          <>{hasText && <div className="learning-2">{text}</div>}</>
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
  xnixLineBookVector: PropTypes.string,
  xnixLineBookImg: PropTypes.string,
  xnixLineBookVector1: PropTypes.string,
};
