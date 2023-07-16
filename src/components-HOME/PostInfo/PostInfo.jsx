/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { XnixLineMessage210 } from "../../icons-HOME/XnixLineMessage210";
import { IconButton } from "../IconButton";
import { XnixLineBook } from "../XnixLineBook";
import { XnixLineUser } from "../XnixLineUser";
import "./style.css";

export const PostInfo = ({
  iconButtonXnixLineBookVector,
  iconButtonXnixLineBookVectorClassName,
  iconButtonXnixLineBookImg,
  iconButtonXnixLineBookVectorClassNameOverride,
  iconButtonXnixLineBookVector1,
  iconButtonXnixLineBookImgClassName,
  iconButtonXnixLineBookOverlapGroupClassName,
  iconButton = (
    <XnixLineUser
      className="design-component-instance-node"
      img="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-12-11.svg"
      vector="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-11-10.svg"
    />
  ),
  override = <XnixLineMessage210 className="xnix-line-message" />,
  iconButton1 = (
    <XnixLineBook
      className="design-component-instance-node"
      img="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-17-16.svg"
      vector="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-16-16.svg"
      vector1="https://generation-sessions.s3.amazonaws.com/b91b0a5c1899a6f929ac0b3bd316d933/img/vector-18-16.svg"
    />
  ),
  className,
}) => {
  return (
    <div className={`post-info ${className}`}>
      <IconButton
        className="icon-button-instance"
        iconLocation="left"
        override={iconButton1}
        size="small"
        text="Learning"
        xnixLineBookImg={iconButtonXnixLineBookVector}
        xnixLineBookImgClassName={iconButtonXnixLineBookVectorClassNameOverride}
        xnixLineBookOverlapGroupClassName={iconButtonXnixLineBookOverlapGroupClassName}
        xnixLineBookVector={iconButtonXnixLineBookVector1}
        xnixLineBookVector1={iconButtonXnixLineBookImg}
        xnixLineBookVectorClassName={iconButtonXnixLineBookImgClassName}
        xnixLineBookVectorClassNameOverride={iconButtonXnixLineBookVectorClassName}
      />
      <IconButton
        className="icon-button-instance"
        iconLocation="left"
        override={iconButton}
        size="small"
        text="Author"
      />
      <IconButton className="icon-button-instance" hasIcon={false} iconLocation="left" size="small" text="06-30-2023" />
      <IconButton className="icon-button-instance" iconLocation="left" override={override} size="small" text="240" />
    </div>
  );
};

PostInfo.propTypes = {
  iconButtonXnixLineBookVector: PropTypes.string,
  iconButtonXnixLineBookImg: PropTypes.string,
  iconButtonXnixLineBookVector1: PropTypes.string,
};
